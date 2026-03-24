import { useState } from 'react';
import PageBanner from '../../../components/PageBanner';
import Sidebar from '../../../components/Sidebar';
import { ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';
import standingorders from '/assets/standingorders.svg';

// Reusable Dropdown/Accordion Section (Matches AirQuality.tsx)
// Reusable Dropdown/Accordion Section (Matches AirQuality.tsx)
interface DropdownItem {
    text: string;
    link?: string;
    date?: string;
    subItems?: DropdownItem[];
}

const DropdownSection = ({ title, items }: { title: string, items: (string | DropdownItem)[] }) => {
    const [isOpen, setIsOpen] = useState(false);

    const renderItem = (item: string | DropdownItem, idx: number) => {
        if (typeof item === 'string') {
            return (
                <div key={idx} className="px-4 py-3 text-[14px] text-gray-600 hover:text-[#0085E2] hover:bg-blue-50 rounded-lg cursor-pointer transition-colors border-b border-gray-50 last:border-0 flex items-center justify-between group">
                    <span className="flex-1 font-medium">{item}</span>
                </div>
            );
        } else if (item.subItems) {
            // Nested Dropdown Item
            return (
                <DropdownSection key={idx} title={item.text} items={item.subItems} />
            );
        } else if (item.link) {
            // Link Item
            return (
                <a
                    key={idx}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 text-[14px] text-gray-600 hover:text-[#0085E2] hover:bg-blue-50 rounded-lg cursor-pointer transition-colors border-b border-gray-50 last:border-0 flex items-center justify-between group block"
                >
                    <div className="flex flex-col flex-1">
                        <span className="font-medium">{item.text}</span>
                        {item.date && <span className="text-xs text-gray-400 mt-0.5">{item.date}</span>}
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#0085E2]" />
                </a>
            );
        } else {
            // Plain Text Item (Description)
            return (
                <div key={idx} className="px-4 py-3 text-[14px] text-gray-600 border-b border-gray-50 last:border-0">
                    <span className="flex-1 leading-relaxed">{item.text}</span>
                </div>
            );
        }
    };

    return (
        <div className="border border-gray-200 rounded-xl overflow-hidden mb-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between px-6 py-4 bg-gray-50/50 cursor-pointer hover:bg-gray-100/80 transition-colors"
            >
                <h4 className="text-[16px] font-bold text-gray-800">{title}</h4>
                {isOpen ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
            </div>
            <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-4 bg-white flex flex-col gap-2">
                    {items.map((item, idx) => renderItem(item, idx))}
                </div>
            </div>
        </div>
    );
};

const SolidWaste = () => {
    const [isArchive, setIsArchive] = useState(false);

    // Data for dropdowns
    // Data for dropdowns
    const onlinePortal = [
        { text: "for submission of daily and monthly data of generation and treatment (ward wise)", link: "https://swm.ecmpcb.in/" }
    ];

    const rulesNotification = [
        { text: "Solid Waste Management Rules, 2016", link: "#" },
        { text: "Municipal Solid Waste Rules, 2000", link: "#" },
        { text: "Procedure for Authorization for processing / recycling / treatment and disposal of solid waste under the provisions of Solid Waste Management Rules, 2016", link: "#" }
    ];

    const guidelines = [
        { text: "MoEF & CC", link: "https://moef.gov.in/" },
        { text: "CPCB", link: "https://cpcb.nic.in/technical-guuidelines/" },
        {
            text: "Ministry of Housing and Urban Affairs, Government of India:- Central Public Health & Environmental Engineering Organization (CPHEEO)",
            subItems: [
                { text: "Manual on solid waste management", link: "#" },
                { text: "Waste to Wealth", link: "#" },
                { text: "Bulk waste Generator (A Step by Step Guidance for Urban Local Bodies to implement the Solid Waste Management Rules, 2016)", link: "#" },
                { text: "Guidelines on Usage of Refuse Derived Fuel in Various Industries", link: "#" }
            ]
        }
    ];

    const grOfficeOrder = [
        { text: "Office Order - Constitution of Committee for scrutiny of authorizations for all Corporations /Councils as per the Municipal Solid Waste (M&H) Rules, 2000 dated 04/10/2024.", link: "#" },
        { text: "Office Order - Constitution of Committee for scrutiny of authorizations for all Corporations /Councils as per the Municipal Solid Waste (M&H) Rules, 2000 dated 02/04/2014.", link: "#" }
    ];

    const committees = [
        {
            text: "State Level Monitoring Committee",
            subItems: [
                {
                    text: "constituted as per Hon'ble NGT order dated 16/01/2019 for effective implementation of Solid Waste Management Rules, 2016 and Other issues mentioned in the order.",
                    subItems: [
                        { text: "List of Model Village Panchayats received from Rural Development Department, Government of Maharashtra as model village panchayats, which will be made compliant with SWM Rules, 2016 within next 6 months (vide letter dated 10.10.2019)", link: "#" },
                        { text: "List of Model Village Panchayats received from Rural Development Department, Government of Maharashtra as model village panchayats, which will be made compliant with SWM Rules, 2016 within next 6 months (vide letter dated 03.07.2019).", link: "#" },
                        { text: "Hon'ble NGT order regarding Compliance of Municipal Solid Waste Management Rules, 2016 (State of Maharashtra) dated 08.04.2019", link: "#" },
                        { text: "Letter from Urban Development Department, Government of Maharashtra regarding names of model Cities and Towns which will be made compliant with SWM Rules, 2016 within next 6 months (vide letter dated 22.04.2019)", link: "#" },
                        { text: "Order in the matter of \"Compliance of Municipal Solid Waste Management Rules, 2016, before Hon'ble National Green Tribunal, Principal Bench, New Delhi dated 20.08.2018 corrected on 31.08.2018", link: "#" },
                        { text: "Order in the matter of \"Compliance of Municipal Solid Waste Management Rules, 2016, before Hon'ble National Green Tribunal, Principal Bench, New Delhi dated 16.01.2019", link: "#" },
                        { text: "Maharashtra Government Resolution No. SWM-2018/C.R.-306/UD-34 for \"Constitution of Regional Monitoring Committee for Effective Implementation of SWM Rules, 2016\" for Western zone dated 21 September 2018", link: "#" },
                        { text: "Maharashtra Government Resolution No. SWM-2018/C.R.-306(2)/UD-34 for \"Constitution of Modified Regional Monitoring Committee for Effective Implementation of SWM Rules, 2016\" for Western zone dated 5 February, 2019", link: "#" },
                        { text: "Maharashtra Government Resolution No. SWM-2018/C.R.-306(2)/UD-34 for \"Constitution of Modified Regional Monitoring Committee for Effective Implementation of SWM Rules, 2016\" for Western zone (correction) dated 8 February, 2019", link: "#" },
                        { text: "Minutes of First meeting of the Reconstituted State Level Monitoring Committee for compliance of Solid Waste Management Rules, 2016", link: "#" },
                        { text: "Minutes of Second meeting of the Reconstituted State Level Monitoring Committee for compliance of Solid Waste Management Rules, 2016", link: "#" },
                        { text: "Minutes of Third meeting of the Reconstituted State Level Monitoring Committee for compliance of Solid Waste Management Rules, 2016", link: "#" }
                    ]
                }
            ]
        },
        {
            text: "Technical Advisory Committee",
            subItems: [
                { text: "Constituted for implementation of Solid Waste management in the State of Maharashtra under the Chairmanship of Rtd. IAS Officer." },
                { text: "Recostitution of Office Order for Technical Advisory Committee of Maharashtra", link: "#" },
                { text: "Technical Advisory Committee of Maharashtra.", link: "#" }
            ]
        },
        {
            text: "Divisional level Committee",
            subItems: [
                { text: "Constituted for Monitoring of implementation of Solid Waste management in the State of Maharashtra under the Chairmanship of Rtd. IAS Officers." },
                { text: "Kokan Revenue Division.", link: "#" },
                { text: "Nashik Revenue Division.", link: "#" },
                { text: "Pune Revenue Division.", link: "#" },
                { text: "Nagpur Revenue Division.", link: "#" },
                { text: "Aurangabad Revenue Division.", link: "#" }
            ]
        },
        {
            text: "Special Task Force",
            subItems: [
                { text: "Special Task Force are constituted for implementation of Solid Waste management in District level as per the Hon'ble NGT Order in respect of O.A. 606/2018." }
            ]
        }
    ];

    const ulbList = [
        { text: "Municipal Corporation. (District, RO and SRO)", link: "#" },
        {
            text: "Municipal Council (District, RO, SRO)",
            subItems: [
                { text: "Class A", link: "#" },
                { text: "Class B", link: "#" },
                { text: "Class C", link: "#" }
            ]
        },
        { text: "Nagarpanchayat (District, RO and SRO)", link: "#" },
        { text: "Cantonment Board (District, RO and SRO)", link: "#" }
    ];

    const swmMaharashtra = [
        { text: "Abstract Region wise", link: "#" }
    ];

    const annualReports = [
        { text: "(Jan-Dec 2023)", link: "#" },
        { text: "(Jan-Dec 2022)", link: "#" },
        { text: "(Jan-Dec 2021)", link: "#" },
        { text: "(Jan-Dec 2020)", link: "#" },
        { text: "(Jan-Dec 2019)", link: "#" },
        { text: "(Jan-Dec 2018)", link: "#" },
        { text: "(2017 - 2018)", link: "#" },
        { text: "(2016 - 2017)", link: "#" },
        { text: "(2015 - 2016)", link: "#" }
    ];

    const modelTender = [
        { text: "Solid Waste Management", link: "/notices/modeltenderdoc" },
        {
            text: "Bio-mining (Legacy Waste)",
            subItems: [
                { text: "Bio-Mining Contractor for pilot cities", link: "#" },
                { text: "list of Bio-Mining Contractor for pilot cities", link: "#" }
            ]
        }
    ];

    const currentActivities = [
        { text: "Content coming soon...", link: "#" }
    ];

    const workshop = [
        { text: "MPCB has organized Divisional Level Workshop for newly formed Nagarpanchayats in Aurangabad, Nashik, Kokan, Nagpur and Pune Division in month August 2019 and January 2020." },
        {
            text: "Photo Gallery",
            subItems: [
                { text: "Workshop Conducted at divisional level for Capacity Building of Nagar Panchayat in Solid Waste Management in the month of Aug'19", link: "#" },
                { text: "Workshop on Capacity Building of Nagar Panchayat in Solid Waste Management at divisional level for Pune & Konkan division", link: "#" },
                { text: "Workshop on Capacity Building of Nagar Panchayat in Solid Waste Management at divisional level for Nashik & Aurangabad division.", link: "#" }
            ]
        }
    ];

    const publicAwareness = [
        { text: "Photo Gallery", link: "/photo-gallery" },
        {
            text: "Awareness",
            subItems: [
                {
                    text: "Holi Festival",
                    subItems: [
                        { text: "Photos", link: "/waste-management/solid-waste/holi-festival-photos" },
                        { text: "Videos", link: "/waste-management/solid-waste/holi-festival-videos" }
                    ]
                },
                {
                    text: "Ganesh Festival",
                    subItems: [
                        { text: "Photos", link: "/waste-management/solid-waste/ganesh-festival-photos" },
                        { text: "Videos", link: "/waste-management/solid-waste/ganesh-festival-videos" }
                    ]
                },
                {
                    text: "Diwali Festival",
                    subItems: [
                        { text: "Photos", link: "/waste-management/solid-waste/diwali-festival-photos" },
                        { text: "Videos", link: "/waste-management/solid-waste/diwali-festival-videos" }
                    ]
                },
                {
                    text: "World Environment Day",
                    subItems: [
                        { text: "Photos", link: "/waste-management/solid-waste/world-environment-day-photos" },
                        { text: "Videos", link: "/waste-management/solid-waste/world-environment-day-videos" }
                    ]
                },
                {
                    text: "Wari Festival",
                    subItems: [
                        { text: "Photos", link: "/waste-management/solid-waste/wari-festival-photos" },
                        { text: "Videos", link: "/waste-management/solid-waste/wari-festival-videos" }
                    ]
                },
                {
                    text: "Dahi handi",
                    subItems: [
                        { text: "Photos", link: "/waste-management/solid-waste/dahi-handi-photos" },
                        { text: "Videos", link: "/waste-management/solid-waste/dahi-handi-videos" }
                    ]
                },
                {
                    text: "Miscellaneous Programs",
                    subItems: [
                        { text: "Photos", link: "/waste-management/solid-waste/miscellaneous-photos" },
                        { text: "Videos", link: "/video-gallery" }
                    ]
                },
                {
                    text: "Green Theatre Festival",
                    subItems: [
                        { text: "Photos", link: "/waste-management/solid-waste/green-theatre-festival-photos" },
                        { text: "Videos", link: "/waste-management/solid-waste/green-theatre-festival-videos" }
                    ]
                },
                {
                    text: "Archive",
                    subItems: [
                        { text: "2004", link: "/waste-management/solid-waste/archive/2004" },
                        { text: "2005", link: "/waste-management/solid-waste/archive/2005" },
                        { text: "2006", link: "/waste-management/solid-waste/archive/2006" },
                        { text: "2008", link: "/waste-management/solid-waste/archive/2008" },
                        { text: "2009", link: "/waste-management/solid-waste/archive/2009" },
                        { text: "2011", link: "/waste-management/solid-waste/archive/2011" },
                        { text: "2018", link: "/waste-management/solid-waste/archive/2018" },
                        { text: "2019", link: "/waste-management/solid-waste/archive/2019" },
                        { text: "2020", link: "/waste-management/solid-waste/archive/2020" },
                        { text: "2021", link: "/waste-management/solid-waste/archive/2021" },
                        { text: "2022", link: "/waste-management/solid-waste/archive/2022" },
                        { text: "2023", link: "/waste-management/solid-waste/archive/2023" },
                        { text: "2024", link: "/waste-management/solid-waste/archive/2024" }
                    ]
                }
            ]
        }
    ];

    const ngtOrders = [
        {
            text: "1. O.A. No. 606/2018 - Compliance of Municipal Solid Waste Management Rules, 2016",
            subItems: [
                {
                    text: "Orders",
                    subItems: [
                        { text: "20/08/2018", link: "#" },
                        { text: "16/01/2019", link: "#" },
                        { text: "08/04/2019", link: "#" },
                        { text: "12/09/2019", link: "#" },
                        { text: "07/01/2020", link: "#" },
                        { text: "24/01/2020", link: "#" },
                        { text: "02/07/2020", link: "#" },
                        { text: "14/12/2020", link: "#" }
                    ]
                },
                {
                    text: "Quarterly compliance reports",
                    subItems: [
                        { text: "NGT Report Apr - Jun 2019", link: "#" },
                        { text: "NGT Report Jul - Sep 2019", link: "#" },
                        { text: "NGT Report Oct - Dec 2019", link: "#" },
                        { text: "NGT Report Jan - Mar 2020", link: "#" },
                        { text: "NGT Report Apr - Jun 2020", link: "#" },
                        { text: "NGT Report Jul - Sep 2020", link: "#" }
                    ]
                }
            ]
        }
    ];

    const archiveAnnualReports = [
        { text: "2014-2015", link: "#" },
        { text: "2013-2014", link: "#" },
        { text: "2012-2013", link: "#" },
        { text: "2011-2012", link: "#" },
        { text: "2010-2011", link: "#" }
    ];

    const archiveOtherDocs = [
        { text: "Status of 'A' class Municipal Council (MSW) as on 01st April 2014", link: "#" },
        { text: "Status of Municipal Corporations (MSW) as on 01st April 2014", link: "#" },
        { text: "Guidelines for Citizens for Management of Municipal Solid Waste", link: "#" }
    ];

    return (
        <div className="font-family-helvetica min-h-screen bg-white">
            <PageBanner title="Waste Management" image={standingorders} />

            <section className="w-full flex justify-center bg-white py-12">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Sidebar */}
                        <Sidebar activeItem="Solid Waste Management" />

                        {/* Main Content Area */}
                        <div className="flex-1 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="rounded-[24px] p-8 min-h-[400px] border border-gray-100 shadow-sm bg-white relative">
                                {/* Header & Toggle */}
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 border-b border-gray-200 pb-4 gap-4">
                                    <h2 className="text-[24px] font-bold text-gray-900 uppercase">
                                        {isArchive ? "Archive: Solid Waste Management" : "SOLID WASTE MANAGEMENT"}
                                    </h2>

                                    {/* Toggle Switch */}
                                    <div className="flex items-center bg-gray-100 p-1 rounded-full shrink-0 w-fit">
                                        <button
                                            onClick={() => setIsArchive(false)}
                                            className={`cursor-pointer px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${!isArchive
                                                ? 'bg-white text-[#0085E2] shadow-sm'
                                                : 'text-gray-500 hover:text-gray-700'}`}
                                        >
                                            Current
                                        </button>
                                        <button
                                            onClick={() => setIsArchive(true)}
                                            className={`cursor-pointer px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${isArchive
                                                ? 'bg-white text-[#0085E2] shadow-sm'
                                                : 'text-gray-500 hover:text-gray-700'}`}
                                        >
                                            Archive
                                        </button>
                                    </div>
                                </div>

                                {/* Content */}
                                {!isArchive ? (
                                    <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                        <div className="mb-8">
                                            <p className="text-gray-600 leading-relaxed mb-6">
                                                Information related to Solid Waste Management in Maharashtra.
                                            </p>
                                        </div>

                                        <DropdownSection
                                            title="Online Portal for Municipal Corporations and Councils"
                                            items={onlinePortal}
                                        />
                                        <DropdownSection
                                            title="Rules/Notification"
                                            items={rulesNotification}
                                        />
                                        <DropdownSection
                                            title="Manual/ Guidelines- Technical Guidelines for Solid Waste Management"
                                            items={guidelines}
                                        />
                                        <DropdownSection
                                            title="G. R. / Office Order"
                                            items={grOfficeOrder}
                                        />
                                        <DropdownSection
                                            title="Committees constituted for implementation of Solid Waste Management"
                                            items={committees}
                                        />
                                        <DropdownSection
                                            title="List of Urban Local Bodies"
                                            items={ulbList}
                                        />
                                        <DropdownSection
                                            title="Solid Waste Management in the Maharashtra"
                                            items={swmMaharashtra}
                                        />
                                        <DropdownSection
                                            title="Annual Report"
                                            items={annualReports}
                                        />
                                        <DropdownSection
                                            title="Model Tender Document"
                                            items={modelTender}
                                        />
                                        <DropdownSection
                                            title="Current Activities"
                                            items={currentActivities}
                                        />
                                        <DropdownSection
                                            title="Workshop"
                                            items={workshop}
                                        />
                                        <DropdownSection
                                            title="Public awareness"
                                            items={publicAwareness}
                                        />
                                        <DropdownSection
                                            title="Hon'ble NGT orders and Compliance"
                                            items={ngtOrders}
                                        />
                                    </div>
                                ) : (
                                    <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                        <DropdownSection
                                            title="Annual Report"
                                            items={archiveAnnualReports}
                                        />
                                        {archiveOtherDocs.map((doc, idx) => (
                                            <a
                                                key={idx}
                                                href={doc.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-between px-6 py-4 bg-gray-50/50 cursor-pointer hover:bg-gray-100/80 transition-colors border border-gray-200 rounded-xl mb-0 shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
                                            >
                                                <h4 className="text-[16px] font-bold text-gray-800 pr-4">{doc.text}</h4>
                                                <ChevronRight className="w-5 h-5 text-gray-400" />
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SolidWaste;
