import { useEffect, useMemo, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./MpcbJurisdictionMap.css";

// ---- helpers ----

function format(value: string | null | undefined): string {
  return value || "Not provided";
}

function escapeHtml(value: string | null | undefined): string {
  return format(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function normalize(value: string | null | undefined): string {
  return String(value ?? "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

// ---- types ----

interface SroRecord {
  id: number;
  serial: string;
  hod: string;
  ro: string;
  sro: string;
  district: string;
  jurisdiction: string;
  userName: string | null;
  districts: string[];
}

interface SroData {
  records: SroRecord[];
  byDistrict: Record<string, SroRecord[]>;
  metadata: {
    recordCount: number;
    mappedDistrictCount: number;
    geometryDistrictCount: number;
    missingGeometryDistricts?: string[];
  };
}

interface IndexedDistrict {
  district: string;
  records: SroRecord[];
  districtText: string;
  searchText: string;
}

// ---- popup markup ----

function recordMarkup(record: SroRecord): string {
  return `
    <article class="mjm-popup-record">
      <h3>${escapeHtml(record.sro)}</h3>
      <dl>
        <div><dt>HOD</dt><dd>${escapeHtml(record.hod)}</dd></div>
        <div><dt>RO</dt><dd>${escapeHtml(record.ro)}</dd></div>
        <div><dt>District field</dt><dd>${escapeHtml(record.district)}</dd></div>
      </dl>
      <p>${escapeHtml(record.jurisdiction)}</p>
    </article>
  `;
}

function popupMarkup(district: string, records: SroRecord[]): string {
  const content = records.length
    ? records.map(recordMarkup).join("")
    : '<p class="mjm-empty">No SRO rows are mapped to this district yet.</p>';

  return `
    <section class="mjm-district-popup">
      <header>
        <span>District</span>
        <h2>${escapeHtml(district)}</h2>
      </header>
      ${content}
    </section>
  `;
}

// ---- data loading ----

type MapDataState =
  | { status: "loading" }
  | { status: "error"; error: Error }
  | { status: "ready"; geojson: GeoJSON.FeatureCollection; sro: SroData };

function useMapData(): MapDataState {
  const [state, setState] = useState<MapDataState>({ status: "loading" });

  useEffect(() => {
    Promise.all([
      fetch("/data/maharashtra-districts.geojson").then((r) => r.json()),
      fetch("/data/sro-records.json").then((r) => r.json()),
    ])
      .then(([geojson, sro]) => setState({ status: "ready", geojson, sro }))
      .catch((error) => setState({ status: "error", error }));
  }, []);

  return state;
}

// ---- search helpers ----

function getDistrictSearchText(district: string, records: SroRecord[]): string {
  return normalize(
    [
      district,
      ...records.flatMap((r) => [r.hod, r.ro, r.sro, r.district, r.jurisdiction, r.userName]),
    ].join(" "),
  );
}

function scoreSearchResult(indexed: IndexedDistrict, query: string): number {
  const nq = normalize(query);
  if (!nq) return 0;
  const terms = nq.split(" ").filter(Boolean);
  let score = 0;
  for (const term of terms) {
    if (!indexed.searchText.includes(term)) return 0;
    if (indexed.districtText === term) score += 12;
    else if (indexed.districtText.includes(term)) score += 8;
    else score += 2;
  }
  if (indexed.districtText.startsWith(nq)) score += 10;
  if (indexed.searchText.includes(nq)) score += 4;
  return score;
}

// ---- SearchPanel ----

function SearchPanel({
  indexedDistricts,
  query,
  onQueryChange,
  onOpenDistrict,
}: {
  indexedDistricts: IndexedDistrict[];
  query: string;
  onQueryChange: (q: string) => void;
  onOpenDistrict: (d: string | null) => void;
}) {
  const results = useMemo(() => {
    if (!normalize(query)) return [];
    return indexedDistricts
      .map((d) => ({ ...d, score: scoreSearchResult(d, query) }))
      .filter((d) => d.score > 0)
      .sort((a, b) => b.score - a.score || a.district.localeCompare(b.district))
      .slice(0, 8);
  }, [indexedDistricts, query]);

  return (
    <section className="mjm-search-panel" aria-label="Search jurisdictions">
      <label htmlFor="mjm-jurisdiction-search">Search jurisdiction data</label>
      <div className="mjm-search-box">
        <span aria-hidden="true">⌕</span>
        <input
          id="mjm-jurisdiction-search"
          type="search"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Try Palghar, Tarapur, RO Pune, MIDC, Bhiwandi..."
        />
      </div>

      {normalize(query) && (
        <div className="mjm-search-results">
          {results.length > 0 ? (
            results.map((result) => (
              <button
                className="mjm-search-result"
                key={result.district}
                type="button"
                onClick={() => onOpenDistrict(result.district)}
              >
                <span>
                  <strong>{result.district}</strong>
                  <small>{result.records.map((r) => r.sro).join(" · ")}</small>
                </span>
                <em>{result.records.length}</em>
              </button>
            ))
          ) : (
            <p className="mjm-no-results">No matching district, RO, SRO, or jurisdiction found.</p>
          )}
        </div>
      )}
    </section>
  );
}

// ---- MapView ----

function MapView({
  geojson,
  sro,
  selectedDistrict,
  onOpenDistrict,
}: {
  geojson: GeoJSON.FeatureCollection;
  sro: SroData;
  selectedDistrict: string | null;
  onOpenDistrict: (d: string | null) => void;
}) {
  const mapRef = useRef<L.Map | null>(null);
  const baseBoundsRef = useRef<L.LatLngBounds | null>(null);
  const geoJsonLayerRef = useRef<L.GeoJSON | null>(null);
  const districtLayersRef = useRef<Record<string, L.Layer & { getBounds(): L.LatLngBounds; setStyle(s: object): void }>>({});
  const districtPopupRefs = useRef<Record<string, L.Popup>>({});
  const openingPopupRef = useRef(false);
  const selectedDistrictRef = useRef<string | null>(null);

  useEffect(() => {
    selectedDistrictRef.current = selectedDistrict;
  }, [selectedDistrict]);

  useEffect(() => {
    const map = L.map("mjm-map", {
      zoomControl: false,
      scrollWheelZoom: true,
      maxBoundsViscosity: 1,
      attributionControl: true,
    });
    mapRef.current = map;

    L.control.zoom({ position: "bottomright" }).addTo(map);

    const recordsByDistrict = sro.byDistrict || {};
    const maxRecords = Math.max(1, ...Object.values(recordsByDistrict).map((recs) => recs.length));

    const layer = L.geoJSON(geojson, {
      style(feature) {
        const count = recordsByDistrict[feature!.properties!.district]?.length || 0;
        const intensity = count / maxRecords;
        return {
          color: "#ffffff",
          weight: 1.15,
          fillColor: count ? `hsl(${176 - intensity * 56}, 48%, ${76 - intensity * 24}%)` : "#d9e7e5",
          fillOpacity: 0.9,
        };
      },
      onEachFeature(feature, districtLayer) {
        const district = feature.properties!.district as string;
        const records = recordsByDistrict[district] || [];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        districtLayersRef.current[district] = districtLayer as any;

        districtPopupRefs.current[district] = L.popup({
          maxWidth: 560,
          minWidth: 360,
          className: "mjm-jurisdiction-popup",
          autoPan: true,
          keepInView: true,
          autoPanPaddingTopLeft: [28, 28],
          autoPanPaddingBottomRight: [28, 28],
        })
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          .setLatLng((districtLayer as any).getBounds().getNorthEast())
          .setContent(popupMarkup(district, records));

        const labelPoint = feature.properties!.labelPoint as [number, number] | undefined;
        const labelLatLng = labelPoint
          ? L.latLng(labelPoint[1], labelPoint[0])
          : districtLayer.getBounds().getCenter();
        districtLayer.bindTooltip(district, {
          permanent: true,
          direction: "center",
          className: "mjm-district-label",
          offset: [0, 0],
        });
        districtLayer.openTooltip(labelLatLng);

        districtLayer.on({
          click(event) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            if ((event as any).originalEvent) L.DomEvent.stop((event as any).originalEvent);
            if (selectedDistrictRef.current) {
              onOpenDistrict(null);
              return;
            }
            onOpenDistrict(district);
          },
          mouseover(event) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (event as any).target.setStyle({ weight: 2, color: "#1d5b69", fillOpacity: 0.98 });
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (event as any).target.bringToFront();
          },
          mouseout(event) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            layer.resetStyle((event as any).target);
          },
        });
      },
    }).addTo(map);

    geoJsonLayerRef.current = layer;
    const mapBounds = layer.getBounds().pad(0.18);
    baseBoundsRef.current = layer.getBounds();
    map.setMaxBounds(mapBounds);
    map.fitBounds(layer.getBounds(), { padding: [54, 54] });
    map.setMinZoom(map.getZoom());

    map.on("click", () => {
      if (selectedDistrictRef.current) onOpenDistrict(null);
    });

    map.on("popupclose", () => {
      if (openingPopupRef.current) return;
      if (selectedDistrictRef.current) onOpenDistrict(null);
    });

    return () => {
      map.remove();
      mapRef.current = null;
      geoJsonLayerRef.current = null;
      districtLayersRef.current = {};
    };
  }, [geojson, sro]);

  useEffect(() => {
    if (!mapRef.current || !geoJsonLayerRef.current) return;

    window.setTimeout(() => {
      mapRef.current?.invalidateSize();
    }, 0);

    geoJsonLayerRef.current.resetStyle();

    if (!selectedDistrict) {
      mapRef.current.closePopup();
      if (baseBoundsRef.current) {
        mapRef.current.fitBounds(baseBoundsRef.current, { padding: [54, 54] });
      }
      return;
    }

    const districtLayer = districtLayersRef.current[selectedDistrict];
    if (!districtLayer) return;

    const bounds = districtLayer.getBounds();
    const isMobile = window.matchMedia("(max-width: 980px)").matches;
    mapRef.current.fitBounds(bounds, {
      maxZoom: isMobile ? 7.6 : 8.5,
      paddingTopLeft: isMobile ? [28, 24] : [110, 80],
      paddingBottomRight: isMobile ? [28, 70] : [420, 80],
    });
    openingPopupRef.current = true;
    if (isMobile) {
      mapRef.current.closePopup();
    } else {
      const popup = districtPopupRefs.current[selectedDistrict];
      popup.setLatLng(bounds.getNorthEast());
      popup.openOn(mapRef.current);
    }
    window.setTimeout(() => {
      openingPopupRef.current = false;
    }, 0);
    districtLayer.setStyle({ weight: 2.6, color: "#1f766b", fillOpacity: 1 });
  }, [selectedDistrict]);

  return (
    <section className="mjm-map-panel">
      <div id="mjm-map" aria-label="Maharashtra district jurisdiction map" />
      <div className="mjm-map-legend" aria-hidden="true">
        <span />
        <p>Color deepens as more SRO entries map to a district</p>
      </div>
    </section>
  );
}

// ---- DistrictAccordion ----

function DistrictAccordion({
  district,
  records,
  isOpen,
  onToggle,
  cardRef,
}: {
  district: string;
  records: SroRecord[];
  isOpen: boolean;
  onToggle: () => void;
  cardRef?: (el: HTMLElement | null) => void;
}) {
  return (
    <article className={`mjm-district-card ${isOpen ? "mjm-is-open" : ""}`} ref={cardRef}>
      <button className="mjm-district-trigger" type="button" onClick={onToggle}>
        <span>
          <strong>{district}</strong>
          <small>
            {records
              .map((r) => r.ro)
              .filter((v, i, a) => a.indexOf(v) === i)
              .join(", ")}
          </small>
        </span>
        <em>{records.length}</em>
      </button>

      {isOpen && (
        <div className="mjm-district-details">
          {records.map((record) => (
            <section className="mjm-sro-detail" key={`${district}-${record.id}`}>
              <header>
                <h3>{record.sro}</h3>
                <span>{record.hod}</span>
              </header>
              <dl>
                <div>
                  <dt>RO</dt>
                  <dd>{format(record.ro)}</dd>
                </div>
                <div>
                  <dt>District field</dt>
                  <dd>{format(record.district)}</dd>
                </div>
              </dl>
              <p>{format(record.jurisdiction)}</p>
            </section>
          ))}
        </div>
      )}
    </article>
  );
}

// ---- Sidebar ----

function MapSidebar({
  sro,
  selectedDistrict,
  onOpenDistrict,
}: {
  sro: SroData;
  selectedDistrict: string | null;
  onOpenDistrict: (d: string | null) => void;
}) {
  const [query, setQuery] = useState("");
  const districtRefs = useRef<Record<string, HTMLElement | null>>({});

  const sortedDistricts = useMemo(() => {
    return Object.entries(sro.byDistrict || {})
      .filter(([, records]) => records.length > 0)
      .sort(([a], [b]) => a.localeCompare(b));
  }, [sro]);

  const indexedDistricts = useMemo<IndexedDistrict[]>(() => {
    return sortedDistricts.map(([district, records]) => ({
      district,
      records,
      districtText: normalize(district),
      searchText: getDistrictSearchText(district, records),
    }));
  }, [sortedDistricts]);

  useEffect(() => {
    if (!selectedDistrict) return;
    const target = districtRefs.current[selectedDistrict];
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [selectedDistrict]);

  return (
    <aside className="mjm-sidebar">
      <SearchPanel
        indexedDistricts={indexedDistricts}
        query={query}
        onQueryChange={setQuery}
        onOpenDistrict={onOpenDistrict}
      />

      {/* Mobile only: shows the currently selected district detail */}
      {selectedDistrict && (
        <section className="mjm-mobile-active-district" aria-label="Selected district details">
          <div className="mjm-section-heading">
            <h2>Selected District</h2>
            <span>Tap map to reset</span>
          </div>
          <DistrictAccordion
            district={selectedDistrict}
            isOpen
            records={sro.byDistrict[selectedDistrict] || []}
            onToggle={() => onOpenDistrict(null)}
          />
        </section>
      )}

      {/* Desktop: full scrollable directory — hidden on mobile */}
      <section className="mjm-district-list mjm-full-directory" aria-label="District jurisdiction list">
        <div className="mjm-section-heading">
          <h2>District Directory</h2>
          <span>{sortedDistricts.length} districts</span>
        </div>

        {sortedDistricts.map(([district, records]) => (
          <DistrictAccordion
            district={district}
            isOpen={selectedDistrict === district}
            key={district}
            records={records}
            cardRef={(el) => {
              districtRefs.current[district] = el;
            }}
            onToggle={() => onOpenDistrict(selectedDistrict === district ? null : district)}
          />
        ))}
      </section>
    </aside>
  );
}

// ---- Root component ----

export default function MpcbJurisdictionMap() {
  const data = useMapData();
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);

  if (data.status === "loading") {
    return (
      <div className="mjm-loading">Loading jurisdiction map…</div>
    );
  }

  if (data.status === "error") {
    return (
      <div className="mjm-loading">Unable to load map data: {data.error.message}</div>
    );
  }

  return (
    <div className="mjm-root">
      <div className="mjm-shell">
        <MapSidebar
          sro={data.sro}
          selectedDistrict={selectedDistrict}
          onOpenDistrict={setSelectedDistrict}
        />
        <MapView
          geojson={data.geojson}
          sro={data.sro}
          selectedDistrict={selectedDistrict}
          onOpenDistrict={setSelectedDistrict}
        />
      </div>
    </div>
  );
}
