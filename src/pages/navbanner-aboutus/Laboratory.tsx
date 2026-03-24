import { useState } from 'react';
import AboutUsBanner from "../AboutUs";
import Banner from "../navbanner-aboutus";
import DocumentCard from '../../components/DocumentCard';
import { environmentalParametersMonitorData } from './environmentalParametersData';
import { labEquipmentData } from './labEquipmentData';

// Sidebar items
const sidebarItems = [
    "Laboratories",
    "Lab Analysis Charges",
    "Functional Performance",
    "Laboratory Functions",
    "Board Analyst",
    "Revised Notification GR 17 Sept 2025",
    "Notification GR",
    "Laboratory Services",
    "List of Recognised Laboratories",
    "Proficiency Report",
    "Lab Sampling Charges",
    "Committee",
    "Certificates as per quality and safety standards",
    "List of Environmental Parameters monitor by MPCB Laboratories",
    "List of equipment and instruments at Laboratories (as on 2025)",
];

// Lab Analysis Charges sub-items
const labAnalysisChargesItems = [
    "Analysis charges of Ambient Air/Fugitive Emission Samples",
    "Analysis charges for Source Emission Parameters",
    "Ambient Air Quality Monitoring using on-line monitoring instruments by Mobile Van",
    "Auto Exhaust Monitoring-One time checking of vehicular exhaust",
    "Analysis Charges of Water and Wastewater Samples",
    "Analysis Charges of Soil/Sludge/Sediment/Solid Waste Samples",
    "Analysis Charges for Hazardous Waste Samples",
    "Analytical Quality Control (AQC) Participation Fees: to be given to MPCB by recognized laboratory for AQC exercise Samples",
];

// Ambient Air Analysis Charges Table Data
const ambientAirChargesData = [
    { sNo: "1", parameter: "Ammonia", charges: "600/-" },
    { sNo: "2", parameter: "Analysis using drager (per tube)", charges: "400/-" },
    { sNo: "3", parameter: "Benzene Toluene xylene (BTX)", charges: "1000/-" },
    { sNo: "4", parameter: "Carbon Monoxide", charges: "600/-" },
    { sNo: "5", parameter: "Chlorine", charges: "600/-" },
    { sNo: "6", parameter: "Fluoride(gaseous)", charges: "600/-" },
    { sNo: "7", parameter: "Fluoride(particulate)", charges: "600/-" },
    { sNo: "8", parameter: "Hydrogen Chloride", charges: "600/-" },
    { sNo: "9", parameter: "Hydrogen Sulphide", charges: "600/-" },
    { sNo: "10", parameter: "Lead and other metals (per metal)", charges: "As mentioned in respective group at Clause5.0" },
    { sNo: "11", parameter: "NO2", charges: "600/-" },
    { sNo: "12", parameter: "Ozone", charges: "1000/-" },
    { sNo: "13", parameter: "PolyAromatic Hydrocarbons(PAHs)", charges: "As mentioned in respective group at Clause5.0" },
    { sNo: "14", parameter: "Suspended Particulate Matter (SPM)", charges: "600/-" },
    { sNo: "15", parameter: "Particulate Matter (PM2.5)", charges: "1000/-" },
    { sNo: "16", parameter: "Respirable Particulate Matter (PM10)", charges: "600/-" },
    { sNo: "17", parameter: "Sulphur Dioxide", charges: "600/-" },
    { sNo: "18", parameter: "Volatile Organic Carbon", charges: "2000/-" },
    { sNo: "19", parameter: "Trace Metals on air filter paper using EDXRF-Alumininum, Antimony, Arsenic, Barium, Bromine, Cadmium, Calcium, Cesium, Chlorine, chromium, Cobalt, Copper, Gallium, Germanium, Gold, Iodine, Iron, Lanthanum, Lead, magnesium, Manganese, Molybdenum, Nickel, Palladium, Phosphorous, Potassium, Rubidium, Rutherfordium, Selenium, Silicon Silver, Sodium, Stronlium, Sulphur, Tellurium, Tin, Titanium, Tungsten, Vanadium, Ytterbium and Zinc.", charges: "3000/- Per Filter paper" },
    { sNo: "20", parameter: "Water Extractable ions in Air Particulate Matter using Lon Chromatograph (IC)", charges: "", isSubHeader: true },
    { sNo: "(i)", parameter: "Processing / Pretreatment Charges per Sample (filter paper)", charges: "300/-" },
    { sNo: "(ii)", parameter: "Cations (Na⁺, NH₄⁺, K⁺, Ca²⁺ & Mg²⁺) and Anions (F⁻, Br⁻, Cl⁻, NO₃⁻, NO₂⁻, SO₄²⁻ & PO₄³⁻)", charges: "1,200/- (for 12 ions)" },
    { sNo: "21", parameter: "Organic and Elemental Carbon (OC/EC) on quartz filter paper", charges: "2000/-" },
];

// Source Emission Analysis Charges Table Data
const sourceEmissionChargesData = [
    { sNo: "1", parameter: "Acid Mist", charges: "600/-" },
    { sNo: "2", parameter: "Ammonia", charges: "600/-" },
    { sNo: "3", parameter: "Carbon Monoxide", charges: "600/-" },
    { sNo: "4", parameter: "Chlorine", charges: "600/-" },
    { sNo: "5", parameter: "Fluoride(gaseous)", charges: "600/-" },
    { sNo: "6", parameter: "Fluoride(particulate)", charges: "600/-" },
    { sNo: "7", parameter: "Hydrogen Chloride", charges: "600/-" },
    { sNo: "8", parameter: "Hydrogen Sulphide", charges: "600/-" },
    { sNo: "9", parameter: "Oxides of Nitrgen", charges: "600/-" },
    { sNo: "10", parameter: "Oxygen", charges: "500/-" },
    { sNo: "11", parameter: "Poly Aromatic Hydrocarbons(particulate)", charges: "As mentioned in respective group at clause 5.0" },
    { sNo: "12", parameter: "Suspended Particulate Matter", charges: "600/-" },
    { sNo: "13", parameter: "Sulphur Dioxide", charges: "600/-" },
    { sNo: "14", parameter: "Benzene Toluene Xylene(BTX)", charges: "1500/-" },
    { sNo: "15", parameter: "Volatile Organic Compounds(VOCs)", charges: "3,000/-" },
];

// Mobile Van Analysis Charges Table Data
const mobileVanChargesData = [
    {
        sNo: "1",
        parameter: (
            <>
                PM<sub>10</sub>, PM<sub>2.5</sub>, SO<sub>2</sub>, NOx, SPM, CO alongwith Meteorological data viz. Temperature, humidity, wind speed, wind direction
            </>
        ),
        charges: "Rs.3500/- /hour (minimum charges Rs.15,000/-)+ Rs.50/-km run of van for 24 hours monitoring"
    },
];

// Auto Exhaust Monitoring Analysis Charges Table Data
const autoExhaustChargesData = [
    { sNo: "1", parameter: "Carbon Monoxide %", charges: "As per rate notified by Regional transport Department." },
    { sNo: "2", parameter: "Hydrocarbon, PPM", charges: "-" },
    { sNo: "3", parameter: "Smoke Density, HSU", charges: "-" },
];

// Water Analysis Charges Table Data - General (Left Column)
const waterGeneralChargesData = [
    { sNo: "1", parameter: "Conductivity", charges: "60/-" },
    { sNo: "2", parameter: "Odour", charges: "60/-" },
    { sNo: "3", parameter: "Sludge Volume Index (S.V.I.)", charges: "200/-" },
    { sNo: "4", parameter: "Solids (dissolved)", charges: "100/-" },
    { sNo: "5", parameter: "Solids (fixed)", charges: "150/-" },
    { sNo: "6", parameter: "Solids (Volatile)", charges: "150/-" },
    { sNo: "7", parameter: "Suspended Solids", charges: "100/-" },
    { sNo: "8", parameter: "Temperature", charges: "60/-" },
    { sNo: "9", parameter: "Total Solids", charges: "100/-" },
    { sNo: "10", parameter: "Turbidity", charges: "60/-" },
    { sNo: "11", parameter: "Velocity of Flow (Current Meter)", charges: "200/-" },
    { sNo: "12", parameter: "Velocity of Flow (other)", charges: "550/-" },
    { sNo: "13", parameter: "Acidity", charges: "100/-" },
    { sNo: "14", parameter: "Alkalinity", charges: "100/-" },
    { sNo: "15", parameter: "Ammonical Nitrogen", charges: "200/-" },
    { sNo: "16", parameter: "Bicarbonates", charges: "100/-" },
    { sNo: "17", parameter: "Biochemical Oxygen Demand(BOD)", charges: "600/-" },
    { sNo: "18", parameter: "Bromide", charges: "100/-" },
    { sNo: "19", parameter: "Calcium(titrimetric)", charges: "100/-" },
    { sNo: "20", parameter: "Carbon Dioxide", charges: "100/-" },
    { sNo: "21", parameter: "Carbonate", charges: "100/-" },
    { sNo: "22", parameter: "Chloride", charges: "100/-" },
    { sNo: "23", parameter: "Chlorine Demand", charges: "200/-" },
    { sNo: "24", parameter: "Chlorine Residual", charges: "100/-" },
    { sNo: "25", parameter: "Chemical Oxygen Demand (COD)", charges: "350/-" },
    { sNo: "26", parameter: "Cyanide", charges: "350/-" },
    { sNo: "27", parameter: "Detergent", charges: "200/-" },
    { sNo: "28", parameter: "Dissolved Oxygen", charges: "100/-" },
    { sNo: "29", parameter: "Fluoride", charges: "200/-" },
    { sNo: "30", parameter: "H.Acid", charges: "350/-" },
    { sNo: "31", parameter: "Hardness (calcium)", charges: "100/-" },
    { sNo: "32", parameter: "Hardness (total)", charges: "100/-" },
    { sNo: "33", parameter: "Iodide", charges: "100/-" },
    { sNo: "34", parameter: "Nitrate Nitrogen", charges: "200/-" },
    { sNo: "35", parameter: "Nitrite Nitrogen", charges: "200/-" },
    { sNo: "36", parameter: "Percent Sodium", charges: "600/-" },
    { sNo: "37", parameter: "Permanganate Value", charges: "200/-" },
    { sNo: "38", parameter: "PH", charges: "60/-" },
    { sNo: "39", parameter: "Phosphate(ortho)", charges: "200/-" },
    { sNo: "40", parameter: "Phosphate(total)", charges: "350/-" },
    { sNo: "41", parameter: "Salinity", charges: "100/-" },
    { sNo: "42", parameter: "Sodium Absorption Ratio(SAR)", charges: "600/-" },
    { sNo: "43", parameter: "Settleable Solids", charges: "100/-" },
    { sNo: "44", parameter: "Silica", charges: "200/-" },
    { sNo: "45", parameter: "Sulphate", charges: "150/-" },
    { sNo: "46", parameter: "Sulphide", charges: "200/-" },
    { sNo: "47", parameter: "Total Kjeldahl Nitrogen(TKN)", charges: "350/-" },
    { sNo: "48", parameter: "Urea Nitrogen", charges: "350/-" },
    { sNo: "49", parameter: "Cations(Na⁺,NH₄⁺,K⁺,Ca⁺⁺,& Mg⁺⁺)and Anions (F⁻,Br⁻,Cl⁻,NO₃⁻,NO⁻₂,SO₄⁻⁻,& PO₄⁻⁻⁻) in surface and ground water sample using Ion Chromatograph", charges: "1200 (for 12 ions)" },
    { sNo: "", parameter: "Metal", charges: "", isHeader: true },
    { sNo: "", parameter: "Processing/Pretreatment Charges/Sample", charges: "500/-" },
    { sNo: "1", parameter: "Aluminium", charges: "300/-" },
    { sNo: "2", parameter: "Antimony", charges: "300/-" },
    { sNo: "3", parameter: "Arsenic", charges: "300/-" },
    { sNo: "4", parameter: "Barium", charges: "300/-" },
    { sNo: "5", parameter: "Beryllium", charges: "300/-" },
    { sNo: "6", parameter: "Boron", charges: "300/-" },
    { sNo: "7", parameter: "Cadmium", charges: "300/-" },
    { sNo: "8", parameter: "Chromium Hexavalent", charges: "200/-" },
    { sNo: "9", parameter: "Chromium Total", charges: "300/-" },
    { sNo: "10", parameter: "Cobalt", charges: "300/-" },
    { sNo: "11", parameter: "Copper", charges: "300/-" },
    { sNo: "12", parameter: "Iron", charges: "300/-" },
    { sNo: "13", parameter: "Lead", charges: "300/-" },
    { sNo: "14", parameter: "Magnesium", charges: "200/-" },
    { sNo: "15", parameter: "Manganese", charges: "300/-" },
    { sNo: "16", parameter: "Mercury(Processing &Analysis)", charges: "800/-" },
    { sNo: "17", parameter: "Molybdenum", charges: "300/-" },
    { sNo: "18", parameter: "Nickel", charges: "300/-" },
    { sNo: "19", parameter: "Potassium", charges: "200/-" },
    { sNo: "20", parameter: "Tin", charges: "300/-" },
    { sNo: "21", parameter: "Selenium", charges: "300/-" },
    { sNo: "22", parameter: "Silver", charges: "300/-" },
    { sNo: "23", parameter: "Sodium", charges: "200/-" },
    { sNo: "24", parameter: "Strontium", charges: "300/-" },
    { sNo: "25", parameter: "Vanadium", charges: "300/-" },
    { sNo: "26", parameter: "Zinc", charges: "300/-" },
    { sNo: "", parameter: "Organo Chlorine Pesticides(OCPs)", charges: "", isHeader: true },
    { sNo: "", parameter: "Processing/Pretreatment Charges per Sample", charges: "1000/-" },
    { sNo: "1", parameter: "Aldrin", charges: "400/-" },
    { sNo: "2", parameter: "Dicofol", charges: "400/-" },
    { sNo: "3", parameter: "Dieldrin", charges: "400/-" },
    { sNo: "4", parameter: "Endosulfan-I", charges: "400/-" },
    { sNo: "5", parameter: "Endosulfan-II", charges: "400/-" },
    { sNo: "6", parameter: "Endosulfan Sulfate", charges: "400/-" },
    { sNo: "7", parameter: "Heptachlor", charges: "400/-" },
    { sNo: "8", parameter: "Hexachlorobenzene(HCB)", charges: "400/-" },
    { sNo: "9", parameter: "Methoxy Chlor", charges: "400/-" },
    { sNo: "10", parameter: "o.p.-DDT", charges: "400/-" },
    { sNo: "11", parameter: "p.p.-DDD", charges: "400/-" },
    { sNo: "12", parameter: "p.p.-DDE", charges: "400/-" },
    { sNo: "13", parameter: "p.p.-DDT", charges: "400/-" },
    { sNo: "14", parameter: "a-HCH", charges: "400/-" },
    { sNo: "15", parameter: "b-HCH", charges: "400/-" },
    { sNo: "16", parameter: "y-HCH", charges: "400/-" },
    { sNo: "17", parameter: "o-HCH", charges: "400/-" },
];

// Water Analysis Charges Table Data - Pesticides (Right Column)
const waterPesticidesChargesData = [
    { sNo: "", parameter: "Organo Phosphorous Pesticides(OPPs)", charges: "", isHeader: true },
    { sNo: "", parameter: "Processing/Pretreatment Charges per Sample", charges: "1000/-" },
    { sNo: "18", parameter: "Chlorpyriphos", charges: "400/-" },
    { sNo: "19", parameter: "Dimethoate", charges: "400/-" },
    { sNo: "20", parameter: "Ethion", charges: "400/-" },
    { sNo: "21", parameter: "Malathion", charges: "400/-" },
    { sNo: "22", parameter: "Monocrotophos", charges: "400/-" },
    { sNo: "23", parameter: "Parathion-methyl", charges: "400/-" },
    { sNo: "24", parameter: "Phorate", charges: "400/-" },
    { sNo: "25", parameter: "Phosphamidon", charges: "400/-" },
    { sNo: "26", parameter: "Profenophos", charges: "400/-" },
    { sNo: "27", parameter: "Quinalphos", charges: "400/-" },
    { sNo: "", parameter: "Synthetic Pyrethroids (SPs)", charges: "", isHeader: true },
    { sNo: "", parameter: "Processing/Pretreatment Charges per Sample", charges: "1000/-" },
    { sNo: "28", parameter: "Deltamethrin", charges: "400/-" },
    { sNo: "29", parameter: "Fenpropethrin", charges: "400/-" },
    { sNo: "30", parameter: "Fenvalerate", charges: "400/-" },
    { sNo: "31", parameter: "a-Cypermethrin", charges: "400/-" },
    { sNo: "32", parameter: "b-Cyfluthrin", charges: "400/-" },
    { sNo: "33", parameter: "A-Cyhalothrin", charges: "400/-" },
    { sNo: "", parameter: "Herbicides", charges: "", isHeader: true },
    { sNo: "", parameter: "Processing / Pretreatment Charges per Sample", charges: "1000/-" },
    { sNo: "34", parameter: "Alachlor", charges: "400/-" },
    { sNo: "35", parameter: "Butachlor", charges: "400/-" },
    { sNo: "36", parameter: "Fluchloralin", charges: "400/-" },
    { sNo: "37", parameter: "Pendimethlin", charges: "400/-" },
    { sNo: "", parameter: "Polycyclic Aromatic Hydrocarbons (PAHs)", charges: "", isHeader: true },
    { sNo: "", parameter: "Processing / Pretreatment Charges per sample", charges: "1000/-" },
    { sNo: "1", parameter: "Acenaphthene", charges: "400/-" },
    { sNo: "2", parameter: "Acenaphthylene", charges: "400/-" },
    { sNo: "3", parameter: "Anthracene", charges: "400/-" },
    { sNo: "4", parameter: "Benz(a)anthracene", charges: "400/-" },
    { sNo: "5", parameter: "Benzo(a)pyrene", charges: "400/-" },
    { sNo: "6", parameter: "Benzo(b)fluoranthene", charges: "400/-" },
    { sNo: "7", parameter: "Benzo(e)pyrene", charges: "400/-" },
    { sNo: "8", parameter: "Benzo(g.h.i.)perylene", charges: "400/-" },
    { sNo: "9", parameter: "Benzo(k)fluoranthene", charges: "400/-" },
    { sNo: "10", parameter: "Chrysene", charges: "400/-" },
    { sNo: "11", parameter: "Dibenzo(a.h)anthracene", charges: "400/-" },
    { sNo: "12", parameter: "Fluorathene", charges: "400/-" },
    { sNo: "13", parameter: "Fluorene", charges: "400/-" },
    { sNo: "14", parameter: "Indeno(1,2,3-cd)pyrene", charges: "400/-" },
    { sNo: "15", parameter: "Naphthalene", charges: "400/-" },
    { sNo: "16", parameter: "Perylene", charges: "400/-" },
    { sNo: "17", parameter: "Phenantherene", charges: "400/-" },
    { sNo: "18", parameter: "Pyrene", charges: "400/-" },
    { sNo: "", parameter: "Polychlorinated Biphenyls((PCBs))", charges: "", isHeader: true },
    { sNo: "", parameter: "Processing / Pretreatment Charges per sample", charges: "1000/-" },
    { sNo: "1", parameter: "Aroclor 1232", charges: "400/-" },
    { sNo: "2", parameter: "Aroclor 1242", charges: "400/-" },
    { sNo: "3", parameter: "Aroclor 1248", charges: "400/-" },
    { sNo: "4", parameter: "Aroclor 1254", charges: "400/-" },
    { sNo: "5", parameter: "Aroclor 1260", charges: "400/-" },
    { sNo: "6", parameter: "Aroclor 1262", charges: "400/-" },
    { sNo: "", parameter: "Tri Halo Methane(THM)", charges: "", isHeader: true },
    { sNo: "", parameter: "Processing / Pretreatment Charges per sample", charges: "800/-" },
    { sNo: "1.", parameter: "Bromo dichloromethane", charges: "400/-" },
    { sNo: "2.", parameter: "Bromoform", charges: "400/-" },
    { sNo: "3", parameter: "Chloroform", charges: "400/-" },
    { sNo: "4", parameter: "Dibromo Chloromethane", charges: "400/-" },
    { sNo: "5", parameter: "Other Organic Parameter", charges: "", isHeader: true },
    { sNo: "6", parameter: "Adsorbable Organic Halogen(AOX)", charges: "2000/-" },
    { sNo: "7", parameter: "Tannin / Lignin", charges: "350/-" },
    { sNo: "8", parameter: "Oil & Grease", charges: "200/-" },
    { sNo: "9", parameter: "Phenol", charges: "200/-" },
    { sNo: "10", parameter: "Total Organic Carbon(TOC)", charges: "500/-" },
    { sNo: "11", parameter: "Volatile Organic Acids", charges: "350/-" },
    { sNo: "", parameter: "Benthics Organism Sample Collection", charges: "1000/-", isHeader: true },
    { sNo: "1", parameter: "Benthic Organism identification & Count (each sample)", charges: "600/-" },
    { sNo: "", parameter: "Plankton Sample Collection", charges: "250/-", isHeader: true },
    { sNo: "1", parameter: "Plankton (phytoplankton) count", charges: "600/-" },
    { sNo: "2", parameter: "Plankton(Zooplankton) count", charges: "600/-" },
    { sNo: "3", parameter: "Chlorophyll Estimation", charges: "600/-" },
    { sNo: "", parameter: "Bacteriological Sample Collection", charges: "200/-", isHeader: true },
    { sNo: "1", parameter: "E.Coli(MFT technique)", charges: "400/-" },
    { sNo: "2", parameter: "E.Coli(MPN technique)", charges: "350/-" },
    { sNo: "3", parameter: "Faecal coliform (MFT technique)", charges: "400/-" },
    { sNo: "4", parameter: "Faecal coliform (MPN technique)", charges: "350/-" },
    { sNo: "5", parameter: "Faecal Streptococci (MFT technique)", charges: "450/-" },
    { sNo: "6", parameter: "Faecal Streptococci (MPN technique)", charges: "400/-" },
    { sNo: "7", parameter: "Standard Plate Count", charges: "200/-" },
    { sNo: "8", parameter: "Total Coliform(MFT technique)", charges: "400/-" },
    { sNo: "9", parameter: "Total Coliform(MPN technique)", charges: "350/-" },
    { sNo: "10", parameter: "Total Plate Count", charges: "350/-" },
    { sNo: "11", parameter: "Toxicological - Bioassay(LC50)", charges: "2800/-" },
    { sNo: "12", parameter: "Toxicological- Dimensionless toxicity test", charges: "1600/-" },
];

// Soil/Sludge/Sediment/Solid Waste Analysis Charges Table Data
const soilChargesData = [
    { sNo: "1", parameter: "Ammonia", charges: "300/-" },
    { sNo: "2", parameter: "Bicarbonates", charges: "200/-" },
    { sNo: "3", parameter: "Boron", charges: "400/-" },
    { sNo: "4", parameter: "Calcium", charges: "150/-" },
    { sNo: "5", parameter: "Calcium Carbonate", charges: "350/-" },
    { sNo: "6", parameter: "Cation Exchange Capacity (CEC)", charges: "400/-" },
    { sNo: "7", parameter: "Chloride", charges: "150/-" },
    { sNo: "8", parameter: "Colour", charges: "100/-" },
    { sNo: "9", parameter: "Electrical Conductivity(EC)", charges: "100/-" },
    { sNo: "10", parameter: "Exchangeable Sodium Percentage (ESP)", charges: "550/-" },
    { sNo: "11", parameter: "Gypsum Requirement", charges: "350/-" },
    { sNo: "12", parameter: "H.Acid", charges: "400/-" },
    { sNo: "13", parameter: "Heavy Metal", charges: "As mentioned in respective group at Clause 5.0" },
    { sNo: "14", parameter: "Trace Metals using ED-XRF- Aluminium, Antimony, Arsenic, Barium, Bromine, Cadmium, Calcium,Cesium, Chlorine, Chromium, Cobalt,Copper,Gallium, Germanium,Gold, Iodine, Iron, Lanthanum, Lead, Magnesium, Manganese,Molybdenum, Nickel, Palladium, Phosphorous,Potassium, Rubidium, Rutherfordium, Selenium,Silicon, Silver,Sodium,Strontium, Sulphur, Tellurium, Tin, Titanium, Tungsten, Vanadium, Ytterbium and zinc, per sample.", charges: "4000/-" },
    { sNo: "15", parameter: "Magnesium", charges: "300/-" },
    { sNo: "16", parameter: "Mechanical Soil analysis (soil Texture)", charges: "150/-" },
    { sNo: "17", parameter: "Nitrate", charges: "300/-" },
    { sNo: "18", parameter: "Nitrite", charges: "300/-" },
    { sNo: "19", parameter: "Nitrogen available", charges: "350/-" },
    { sNo: "20", parameter: "Organic Carbon/Mattter(chemical method)", charges: "350/-" },
    { sNo: "21", parameter: "Polycyclic Aromatic Hydrocarbons (PAHs)", charges: "As mentioned in respective group at Clause5.0" },
    { sNo: "22", parameter: "Polychlorinated Biphenyls (PCBs)", charges: "As mentioned in respective group at Clause5.0" },
    { sNo: "23", parameter: "Pesticides", charges: "As mentioned in respective group at Clause5.0" },
    { sNo: "24", parameter: "PH", charges: "100/-" },
    { sNo: "25", parameter: "Phosphorous(available)", charges: "400/" },
    { sNo: "26", parameter: "Phosphate(ortho)", charges: "300/-" },
    { sNo: "27", parameter: "Phosphate(total)", charges: "400/-" },
    { sNo: "28", parameter: "Potash (available)", charges: "200/-" },
    { sNo: "29", parameter: "Potassium", charges: "300/-" },
    { sNo: "30", parameter: "Sodium Absorption Ratio (SAR) in Soil extract", charges: "650/-" },
    { sNo: "31", parameter: "Sodium", charges: "300/-" },
    { sNo: "32", parameter: "Soil Moisture", charges: "100/-" },
    { sNo: "33", parameter: "Sulphate", charges: "200/-" },
    { sNo: "34", parameter: "Sulphur", charges: "350/-" },
    { sNo: "35", parameter: "Total Kjeldahl Nitrogen (TKN)", charges: "400/-" },
    { sNo: "36", parameter: "TOC", charges: "550/-" },
    { sNo: "37", parameter: "Total Water soluble Salts", charges: "200/-" },
    { sNo: "38", parameter: "Water Holding Capacity", charges: "100/-" },
];

// Hazardous Waste Analysis Charges Table Data
const hazardousWasteChargesData = [
    { sNo: "1", parameter: "Preparation of Leachate (TCLP extract/water extrat)", charges: "1000/-" },
    { sNo: "2", parameter: "Determination of various parameters in Leachate", charges: "As mentioned in respective group at clause 5.0" },
    { sNo: "3", parameter: "Flash point/Ignitibility", charges: "550/-" },
    { sNo: "4", parameter: "Reactivity", charges: "550/-" },
    { sNo: "5", parameter: "Corrosivity", charges: "550/-" },
    { sNo: "6", parameter: "Measurement of Toxicity-", charges: "" },
    { sNo: "", parameter: "LC 50", charges: "2800/-" },
    { sNo: "", parameter: "Dimensionless Toxicity", charges: "1600/-" },
    { sNo: "7", parameter: "Total Organic Carbon", charges: "500/-" },
    { sNo: "8", parameter: "Adsorabable Organic Halogen (AOX)", charges: "2000/-" },
];

// AQC Participation Fees Table Data
const aqcChargesData = [
    { sNo: "1", parameter: "Laboratories of Govt/Semi Govt/Public Sector Undertaking /Autonomous bodies", charges: "10,000/-" },
    { sNo: "2", parameter: "Private Sector laboratories", charges: "15,000/-" },
];

// Functional Performance Table Data
const functionalPerformanceData = [
    { sNo: "1", year: "2013-2014" },
    { sNo: "2", year: "2014-2015" },
    { sNo: "3", year: "April 2015- Sept 2015" },
    { sNo: "4", year: "2024-2025" },
];

// Laboratory Functions Data
const laboratoryFunctionsData = [
    {
        title: "Under Water (P&CP) Act, 1974 (Section21):",
        points: [
            "To analyze the samples of water & submitted under section 21 by the officer empowered by the Board and to communicate to the Board the result of such analysis or test.",
            "To collect and analyze or test such samples of Water and to communicate the results of the Board.",
            "To analyze samples delivered to it by any person other than the Board & to communicate the result of such analysis to such person."
        ]
    },
    {
        title: "Under Air (P &CP) Act, 1981 (Section 26):",
        points: [
            "To analyze the samples of Air or emission & submitted under section 26 by the officer empowered by the Board and to communicate to the Board the result of such analysis or test.",
            "To collect and analyze or test such samples of Air or emission and to communicate the results of the Board.",
            "To analyze samples delivered to it by any person other than the Board & to communicate the result of such analysis to such person."
        ]
    },
    {
        title: "Under Environment (P) Act, 1986 (Section 11):",
        points: [
            "To evolved standardized methods for sampling and analysis of various types of environmental pollutants.",
            "To analyze samples sent by the Central Government or the officers empowered under sub-section (1) of section 11.",
            "To carry out such investigations as may be directed by the Central Government to lay down standards for the quality of environment and discharge of environmental pollutants, to monitor and to enforce the standards laid down.",
            "To send periodical reports regarding its activities to the Central Government. To carry out such other functions as may be entrusted to it by the Central Government from time to time."
        ]
    }
];

// List of Recognised Laboratories Data
const recognisedLaboratoriesData = [
    { sNo: "1", name: "Central Laboratory, Navi Mumbai", gazette: "No.Legal 42(3)/87 (Validity: 10th March, 2015 - 9th March, 2020)" },
    { sNo: "2", name: "Regional Laboratory, Pune", gazette: "No.Legal 42(3)/87 (Validity: 15th January, 2010 - 14th January 2015)" },
    { sNo: "3", name: "Regional Laboratory,Nagpur, Aurangabad and Nasik", gazette: "No.Legal 42(3)/87 Dated 27th January ,2011" },
    { sNo: "4", name: "Central Laboratory, Navi Mumbai", gazette: "No.Legal 42(3)/87 (Validity: 17th May 2021 - 16th May 2026)" },
    { sNo: "5", name: "Regional Laboratory, Pune", gazette: "F.No.LB/99/7/2021-INST LAB-HO-CPCB-HO/Govt./6646 (Validity: 1st Dec 2023 - 25th Feb 2024)" },
    { sNo: "6", name: "Regional Laboratory, Chiplun, Nashik and Chhatrapati Sambhaji Nagar", gazette: "No.Legal 42(3)/87 (Validity: 20th July 2020 - 19th July 2025)" },
    { sNo: "7", name: "Regional Laboratory, Nagpur", gazette: "No.Legal 42(3)/87 (Validity: 06th March 2017 - 05th March 2022)" },
];

// Laboratory Services Data
const laboratoryServicesData = {
    headerText: "M. P. C. Board has established its Central laboratory at Navi Mumbai and Regional laboratories at Pune, Nashik, Nagpur, Aurangabad, Thane, Chiplun and Chandrapur.",
    subHeader: "The major objectives of these laboratories are:",
    objectives: [
        "Carryout analysis of Water, Wastewater, Air, Bio-Medical waste, Hazardous waste samples etc. which are categorized as Environmental samples, Joint Vigilance Samples and Law Evidence Samples.",
        "Execute various sponsored R & D project of CPCB with regard to sampling, analysis and reporting.",
        "To plan and conduct Research, investigation and Development Project in specific areas of interest for the state of Maharashtra in the field of prevention and control of pollution, environmental management & public awareness.",
        "Conduct Inter & Intra laboratory Analytical Quality Control (AQC) exercise for its laboratories.",
        "Conducting periodical training programs to enhance the skills for scientific staff of the Board."
    ]
};

// Proficiency Report Data
const proficiencyReportData = [
    { sNo: "1", lab: "Central Laboratory", r27: true, r28: true, r29: true, r30: true, r31: true },
    { sNo: "2", lab: "Aurangabad", r27: true, r28: true, r29: true, r30: true, r31: true },
    { sNo: "3", lab: "Nagpur", r27: true, r28: true, r29: true, r30: true, r31: true },
    { sNo: "4", lab: "Nasik", r27: true, r28: true, r29: true, r30: false, r31: true },
    { sNo: "5", lab: "Pune", r27: true, r28: false, r29: true, r30: true, r31: true },
];

// Lab Sampling Charges Data
const labSamplingChargesData = {
    ambientAir: [
        { sNo: "1", type: "Air Monitoring", charges: "" },
        { sNo: "2", type: "(a) Sampling (upto each 8 hrs.)", charges: "2,000/-" },
        { sNo: "3", type: "For Suspended Particulate Matter and Gaseous Pollutants", charges: "" },
        { sNo: "4", type: "(b) Sampling (24 hrs.) For Suspended Particulate Matter and Gaseous Pollutants", charges: "6,000/-" },
        { sNo: "5", type: "(c) Sampling of Volatile Organic Compounds (VOCs)/Benzene Toluene Xylende (BTX)", charges: "2,000/-" },
        { sNo: "6", type: "(d) Sampling of Poly Aromatic Hydrocarbons (PAHs)", charges: "2,500/-" },
    ],
    sourceEmission: [
        { sNo: "1", type: "Sampling measurement of velocity, flow rate, temperature and molecular weight of Flue Gas (each specific location/ each sample in duplicate for the mentioned parameter.)", charges: "5,500/-" },
        { sNo: "2", type: "Sampling of SO2 / NO2", charges: "2,000/-" },
        { sNo: "3", type: "Sampling of PAHs", charges: "3,000/-" },
        { sNo: "4", type: "Sampling of VOCs/BTX", charges: "3,500/-" },
    ],
    noiseMonitoring: [
        { sNo: "1", type: "First Monitoring", charges: "4,000/-" },
        { sNo: "2", type: "Each subsequent monitoring within same premises", charges: "2,000/-" },
        { sNo: "3", type: "For 08 hours Continuous Monitoring or more", charges: "10,000/-" },
    ],
    bioMedicalWaste: [
        { sNo: "1", type: "Sampling of Autoclave for validation of Spore test", charges: "500/-" },
        { sNo: "2", type: "Analysis", charges: "500/-" },
    ],
    waterSamples: [
        { sNo: "1", type: "GRAB SAMPLING", charges: "", isHeader: true },
        { sNo: "", type: "1. Grab Sampling /sample/place", charges: "550/-" },
        { sNo: "", type: "2. For every additional Grab sampling at same point.", charges: "250/-" },
        { sNo: "2", type: "COMPOSITE SAMPLING", charges: "", isHeader: true },
        { sNo: "", type: "1. Composite Sampling/source/place up to 8 hrs.", charges: "1,000/-" },
        { sNo: "", type: "-do- 16 hrs", charges: "2,000/-" },
        { sNo: "", type: "-do- 24 hrs.", charges: "3,000/-" },
        { sNo: "", type: "2. For every additional composite sampling/", charges: "" },
        { sNo: "", type: "sample place but different source upto 8 hrs.", charges: "550/-" },
        { sNo: "", type: "- do - 16hrs.", charges: "1,100/-" },
        { sNo: "", type: "- do - 24hrs.", charges: "1,650/-" },
        { sNo: "3", type: "Flow rate measurement / source-once", charges: "400/-" },
        { sNo: "", type: "-do- -every additional", charges: "150/-" },
    ],
    soilSamples: [
        { sNo: "1", type: "Grab sampling /sample/ place", charges: "600/-" },
        { sNo: "2", type: "for every additional Grab sampling/same place", charges: "300/-" },
    ],
    hazardousWasteSamples: [
        { sNo: "1", type: "Integrated Sample collection charges", charges: "1,000" },
    ]
};

// Committee Data
const committeeData = [
    { sNo: "1", details: "Research Advisory Committee (2010)" },
    { sNo: "2", details: "Laboratory Committee (2010)" },
    { sNo: "3", details: "Central Purchase Committee (2024)" },
];

// Document Data for specific sidebar items
const laboratoryDocuments: Record<string, { id: string | number; title: string; department: string; pdfUrl: string, date?: string }> = {
    "Board Analyst": {
        id: "board-analyst",
        title: "Board Analyst",
        department: "Laboratory",
        pdfUrl: "#"
    },
    "Revised Notification GR 17 Sept 2025": {
        id: "revised-notification-gr-17-sept-2025",
        title: "Revised Notification GR 17 Sept 2025",
        department: "Government Resolution",
        pdfUrl: "#"
    },
    "Notification GR": {
        id: "notification-gr",
        title: "Notification GR",
        department: "Government Resolution",
        pdfUrl: "#"
    },
    "Certificates as per quality and safety standards": {
        id: "certificates-quality-safety",
        title: "Certificates as per quality and safety standards",
        department: "Quality Assurance",
        pdfUrl: "#"
    }
};

// Laboratory data
interface LabData {
    name: string;
    year?: string;
    jurisdiction: string;
    address: string;
    phone: string[];
    fax: string;
    email: string[];
}

const laboratoriesData: LabData[] = [
    {
        name: "Principal Scientific Officer Division, Mumbai",
        jurisdiction: "All Laboratories & Other Work assigned",
        address: "\"Kalpataru-Point\" 3rd floor, opp.Cineplanet, Sion Circle, Sion(E) Mumbai-400 022.",
        phone: ["(022) 24012659"],
        fax: "-",
        email: []
    },
    {
        name: "Central Laboratory, Navi Mumbai",
        year: "1971",
        jurisdiction: "RO Mumbai (Sub Regional Office Mumbai -I,II,III,IV) RO Navi Mumbai(SRO-NaviMumbai -I,II, Taloja) RO Raigad(SRO Raigad I,II), RO Kalyan (SRO I,II,III, Bhivandi)",
        address: "Central Laboratory, Maharashtra Pollution Control Board, \"Nirmal Bhavan\", P-3, MIDC Industrial Area, Mahape, Navi Mumbai- 400 701",
        phone: ["(022) 67195031/(022) 67195032"],
        fax: "27780684",
        email: ["icclab@mpcb.gov.in", "soclab@mpcb.gov.in"]
    },
    {
        name: "Regional Laboratory, Nagpur",
        year: "1984",
        jurisdiction: "RO Nagpur (SRO Nagpur-I,II, Bhandara) RO Amravati(SRO Amravati-I &II, SRO Akola), RO Chandrapur (SRO Chandrapur- only Water Samples)",
        address: "Regional Laboratory, Maharashtra Pollution Control Board, Udyog Bhavan, Civil Lines, Nagpur 440001.",
        phone: ["(0712) 2557231"],
        fax: "234566",
        email: ["sonagpurlab@mpcb.gov.in"]
    },
    {
        name: "Regional Laboratory, Aurangabad",
        year: "1984",
        jurisdiction: "RO Aurangabad (SRO-A'bad I,II,Latur, Nanded, Parbhani)",
        address: "Regional Laboratory, Maharashtra Pollution Control Board, A-4/1, Paryavaran Bhavan, Behind Dhoot Hospital, Chikalthana MIDC Aurangabad 431 210.",
        phone: ["(0240) 2473462/(0240) 2473463"],
        fax: "2473461",
        email: ["soaurangabadlab@mpcb.gov.in"]
    },
    {
        name: "Regional Laboratory, Nashik",
        year: "1994",
        jurisdiction: "RO Nashik (SRO-Nasik, Jalgaon I & II, Ahmednagar.)",
        address: "Regional Laboratory, Maharashtra Pollution Control Board, Udyog Bhavan, Satpur MIDC, Near ITI, Nashik- 422 107.",
        phone: ["(0253) 2365161"],
        fax: "2362820",
        email: ["sonashiklab@mpcb.gov.in"]
    },
    {
        name: "Regional Laboratory, Pune",
        year: "1995",
        jurisdiction: "RO Pune (SRO-Pune I, II, PimpariChinchwad, Solapur, Satara)",
        address: "Regional Laboratory, Maharashtra Pollution Control Board, Jog Center, 3rd Floor, Mumbai Pune Road, Wakdewadi, Pune- 411 003.",
        phone: ["(020) 25811698"],
        fax: "-",
        email: ["sopunelab@mpcb.gov.in"]
    },
    {
        name: "Regional Laboratory, Thane",
        year: "1998",
        jurisdiction: "RO Thane (SRO Thane I,II, Tarapur I & II)",
        address: "Regional Laboratory, Maharashtra Pollution Control Board, Office Complex Building, 5th Floor, Wagle Industrial Estate, Thane-400 604.",
        phone: ["(020) 25820423/(020) 25829582"],
        fax: "25805398",
        email: ["sothanelab@mpcb.gov.in"]
    },
    {
        name: "Regional Laboratory, Chiplun",
        year: "1998",
        jurisdiction: "RO Kolhapur (SRO Kolhapur, Ratnagiri, Sangli, Chiplun), SRO Mahad",
        address: "Regional Laboratory, Maharashtra Pollution Control Board, Parkar Complex, 1st Floor, Behind Nagar Parishad, Chiplun, Dist. Ratnagiri. 415 605",
        phone: ["(02355) 261970"],
        fax: "-",
        email: ["sochiplunlab@mpcb.gov.in"]
    },
    {
        name: "Regional Laboratory, Chandrapur",
        year: "2008",
        jurisdiction: "RO Chandrapur (SRO Chandrapur), SRO Amravati.",
        address: "Regional Laboratory, MPCB, 1st floor Udyog bhavan Railway Station Road Chandrapur- 442401",
        phone: ["(07172) 272416"],
        fax: "251965",
        email: ["sochandrapur@mpcb.gov.in"]
    },
];

// Central Laboratory table data
const centralLabTableData = [
    { sNo: "1.", detail: "Structure of Central Laboratory" },
    { sNo: "2.", detail: "Structure of Scientific Staff" },
    { sNo: "3.", detail: "Lab Capabilities" },
    { sNo: "4.", detail: "List of Instrument" },
    { sNo: "5.", detail: "List of Equipment" },
    { sNo: "6.", detail: "Expertise at Central Laboratory" },
    { sNo: "7.", detail: "Photo Gallery" },
];

// Generate table data for a lab (dynamically replaces lab name)
const generateLabTableData = (labName: string) => {
    // Extract location from lab name (e.g., "Regional Laboratory, Nagpur" -> "Nagpur")
    const location = labName.includes(",") ? labName.split(",")[1].trim() : labName;

    return [
        { sNo: "1.", detail: `Structure of ${location} Laboratory` },
        { sNo: "2.", detail: "Structure of Scientific Staff" },
        { sNo: "3.", detail: "Lab Capabilities" },
        { sNo: "4.", detail: "List of Instrument" },
        { sNo: "5.", detail: "List of Equipment" },
        { sNo: "6.", detail: `Expertise at ${location}` },
        { sNo: "7.", detail: "Photo Gallery" },
    ];
};

// First lab (Principal Scientific Officer) is NOT expandable
const nonExpandableLab = "Principal Scientific Officer Division, Mumbai";

// Get table data for a lab
const getLabTableData = (labName: string) => {
    if (labName === nonExpandableLab) return null;
    if (labName === "Central Laboratory, Navi Mumbai") {
        return { data: centralLabTableData, header: "Details of Central Laboratory" };
    }
    // All other labs get dynamically generated table data
    return { data: generateLabTableData(labName), header: "Name of the Laboratory" };
};

// Laboratory Card component
const LabCard = ({ lab, isExpanded, onToggle }: { lab: LabData; isExpanded?: boolean; onToggle?: () => void }) => {
    const isExpandable = lab.name !== nonExpandableLab;
    const tableInfo = getLabTableData(lab.name);

    return (
        <div className="bg-gray-50 rounded-2xl p-6 mb-6 border border-gray-200">
            {/* Header with name and year */}
            <div
                className={`flex justify-between items-start mb-4 ${isExpandable ? 'cursor-pointer' : ''}`}
                onClick={isExpandable ? onToggle : undefined}
            >
                <div className="flex items-center gap-2">
                    <h3 className="text-[18px] font-semibold text-[#00A3FF]">{lab.name}</h3>
                    {isExpandable && (
                        <svg
                            className={`w-5 h-5 text-[#00A3FF] transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    )}
                </div>
                {lab.year && <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-[13px] font-medium">{lab.year}</span>}
            </div>

            {/* Jurisdiction */}
            <div className="mb-4">
                <span className="text-[13px] font-semibold text-gray-800">Jurisdiction: </span>
                <span className="text-[13px] text-gray-600">{lab.jurisdiction}</span>
            </div>

            {/* Address */}
            <div className="flex items-start gap-2 mb-4">
                <svg className="w-4 h-4 text-green-600 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2H4a1 1 0 110-2V4zm3 1h2v2H7V5zm0 4h2v2H7V9zm0 4h2v2H7v-2zm4-8h2v2h-2V5zm0 4h2v2h-2V9zm0 4h2v2h-2v-2z" clipRule="evenodd" />
                </svg>
                <span className="text-[13px] text-gray-700">{lab.address}</span>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap items-center gap-6 text-[13px]">
                {/* Phone */}
                <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span className="text-gray-700">{lab.phone.join(", ")}</span>
                </div>

                {/* Fax */}
                {lab.fax && lab.fax !== "-" && (
                    <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2H4a1 1 0 110-2V4zm3 1h2v2H7V5zm0 4h2v2H7V9zm0 4h2v2H7v-2zm4-8h2v2h-2V5zm0 4h2v2h-2V9zm0 4h2v2h-2v-2z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{lab.fax}</span>
                    </div>
                )}

                {/* Email */}
                {lab.email.length > 0 && (
                    <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        <span className="text-[#00A3FF]">{lab.email.join(", ")}</span>
                    </div>
                )}
            </div>

            {/* Expandable Dropdown Table */}
            {isExpandable && isExpanded && tableInfo && (
                <div className="mt-6 border border-gray-200 rounded-xl overflow-hidden overflow-x-auto">
                    <table className="w-full border-collapse min-w-[600px]">
                        <thead>
                            <tr className="bg-gray-100 border-b border-gray-200">
                                <th className="py-4 px-6 text-left text-[13px] font-semibold text-gray-700 w-24">Sr. No.</th>
                                <th className="py-4 px-6 text-left text-[13px] font-semibold text-gray-700">{tableInfo.header}</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {tableInfo.data.map((row, idx) => (
                                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="py-4 px-6 text-[13px] text-gray-500">{row.sNo}</td>
                                    <td className="py-4 px-6 text-[13px] text-[#00A3FF] cursor-pointer hover:underline">{row.detail}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

function Laboratories() {
    const [selectedItem, setSelectedItem] = useState<string>("Laboratories");
    const [expandedLabs, setExpandedLabs] = useState<Record<string, boolean>>({});
    const [labAnalysisExpanded, setLabAnalysisExpanded] = useState(false);

    return (
        <div>
            <AboutUsBanner />
            <Banner bannerSection="laboratories" />

            <div className="flex flex-col md:flex-row gap-8 md:gap-16 p-4 md:p-12 bg-white min-h-screen font-family-helvetica text-[#333] mx-0 md:ml-[90px] md:mr-[120px]">

                {/* Left Sidebar */}
                <div className="w-full md:w-[280px] flex flex-col gap-3 md:gap-5">
                    {sidebarItems.map((item) => {
                        const isActive = selectedItem === item || (item === "Lab Analysis Charges" && selectedItem.startsWith("Lab Analysis:"));
                        const isLabAnalysis = item === "Lab Analysis Charges";

                        return (
                            <div key={item}>
                                <div
                                    onClick={() => {
                                        if (isLabAnalysis) {
                                            setLabAnalysisExpanded(!labAnalysisExpanded);
                                            // Also select the first item when opening
                                            if (!labAnalysisExpanded) {
                                                setSelectedItem(`Lab Analysis: ${labAnalysisChargesItems[0]}`);
                                            }
                                        } else {
                                            setSelectedItem(item);
                                        }
                                    }}
                                    className={`flex items-center justify-between px-6 py-5 rounded-[20px] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] cursor-pointer transition-all duration-200
                                        ${isActive
                                            ? 'border-2 border-[#00A3FF] bg-[#00A3FF]/5'
                                            : 'border border-gray-300 hover:border-[#00A3FF] hover:text-[#00A3FF]'
                                        }`}
                                >
                                    <span className={`text-[14px] font-normal transition-colors duration-200 ${isActive ? 'text-[#00A3FF] font-medium' : 'text-gray-800'}`}>
                                        {item}
                                    </span>
                                    {isLabAnalysis && (
                                        <svg
                                            className={`w-4 h-4 transition-transform duration-200 ${labAnalysisExpanded ? 'rotate-180' : ''} ${isActive ? 'text-[#00A3FF]' : 'text-gray-500'}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    )}
                                </div>

                                {/* Lab Analysis Charges Sub-items */}
                                {isLabAnalysis && labAnalysisExpanded && (
                                    <div className="ml-4 mt-3 flex flex-col gap-2">
                                        {labAnalysisChargesItems.map((subItem, idx) => (
                                            <div
                                                key={idx}
                                                onClick={() => setSelectedItem(`Lab Analysis: ${subItem}`)}
                                                className={`flex items-center gap-2 px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 border
                                                    ${selectedItem === `Lab Analysis: ${subItem}`
                                                        ? 'border-[#00A3FF] bg-[#00A3FF]/10 text-[#00A3FF]'
                                                        : 'border-gray-200 bg-white hover:border-[#00A3FF] hover:bg-[#00A3FF]/5 hover:text-[#00A3FF]'
                                                    }`}
                                            >
                                                <span className="text-[13px]">{subItem}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Right Content - Laboratory Cards */}
                <div className="flex-1">
                    <h1 className="text-[28px] font-bold mb-8 text-black border-b border-gray-200 pb-4">
                        {selectedItem.startsWith("Lab Analysis:") ? selectedItem.replace("Lab Analysis: ", "") : selectedItem}
                    </h1>

                    {/* Show laboratory cards only when "Laboratories" is selected */}
                    {selectedItem === "Laboratories" && (
                        <div>
                            {laboratoriesData.map((lab, idx) => (
                                <LabCard
                                    key={idx}
                                    lab={lab}
                                    isExpanded={expandedLabs[lab.name] || false}
                                    onToggle={() => setExpandedLabs(prev => ({ ...prev, [lab.name]: !prev[lab.name] }))}
                                />
                            ))}
                        </div>
                    )}

                    {/* Ambient Air Analysis Charges Table */}
                    {selectedItem === `Lab Analysis: ${labAnalysisChargesItems[0]}` && (
                        <div className="border border-gray-200 rounded-[25px] overflow-hidden overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="border-b border-gray-200 bg-gray-50">
                                        <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700 w-16">Sr. No</th>
                                        <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700">Parameters</th>
                                        <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700 w-48">Analysis Charges per Sample in Rs.</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {ambientAirChargesData.map((row, idx) => (
                                        row.isSubHeader ? (
                                            <tr key={idx} className="bg-gray-50">
                                                <td className="py-4 px-4 text-[13px] text-gray-600">{row.sNo}</td>
                                                <td colSpan={2} className="py-4 px-4 text-[13px] font-semibold text-gray-800">{row.parameter}</td>
                                            </tr>
                                        ) : (
                                            <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                                <td className="py-4 px-4 text-[13px] text-gray-600 align-top">{row.sNo}</td>
                                                <td className="py-4 px-4 text-[13px] text-gray-700 align-top">{row.parameter}</td>
                                                <td className="py-4 px-4 text-[13px] text-gray-700 align-top">{row.charges}</td>
                                            </tr>
                                        )
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {/* Source Emission Analysis Charges Table */}
                    {selectedItem === `Lab Analysis: ${labAnalysisChargesItems[1]}` && (
                        <div className="border border-gray-200 rounded-[25px] overflow-hidden overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="border-b border-gray-200 bg-gray-50">
                                        <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700 w-16">Sr. No</th>
                                        <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700">Parameters</th>
                                        <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700 w-48">Charges in Rs.</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {sourceEmissionChargesData.map((row, idx) => (
                                        <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="py-4 px-4 text-[13px] text-gray-600 align-top">{row.sNo}</td>
                                            <td className="py-4 px-4 text-[13px] text-gray-700 align-top">{row.parameter}</td>
                                            <td className="py-4 px-4 text-[13px] text-gray-700 align-top">{row.charges}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {/* Mobile Van Analysis Charges Table */}
                    {selectedItem === `Lab Analysis: ${labAnalysisChargesItems[2]}` && (
                        <div className="border border-gray-200 rounded-[25px] overflow-hidden overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="border-b border-gray-200 bg-gray-50">
                                        <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700 w-16">Sr. No</th>
                                        <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700">Parameters</th>
                                        <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700 w-96">Charges in Rs.</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {mobileVanChargesData.map((row, idx) => (
                                        <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="py-4 px-4 text-[13px] text-gray-600 align-top">{row.sNo}</td>
                                            <td className="py-4 px-4 text-[13px] text-gray-700 align-top leading-relaxed">{row.parameter}</td>
                                            <td className="py-4 px-4 text-[13px] text-gray-700 align-top leading-relaxed">{row.charges}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {/* Auto Exhaust Monitoring Analysis Charges Table */}
                    {selectedItem === `Lab Analysis: ${labAnalysisChargesItems[3]}` && (
                        <div className="border border-gray-200 rounded-[25px] overflow-hidden overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="border-b border-gray-200 bg-gray-50">
                                        <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700 w-16">Sr. No</th>
                                        <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700">Parameters</th>
                                        <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700 w-96">Charges in Rs.</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {autoExhaustChargesData.map((row, idx) => (
                                        <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="py-4 px-4 text-[13px] text-gray-600 align-top">{row.sNo}</td>
                                            <td className="py-4 px-4 text-[13px] text-gray-700 align-top leading-relaxed">{row.parameter}</td>
                                            <td className="py-4 px-4 text-[13px] text-gray-700 align-top leading-relaxed">{row.charges}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {/* Water Analysis Charges Table */}
                    {selectedItem === `Lab Analysis: ${labAnalysisChargesItems[4]}` && (
                        <div>
                            <div className="flex flex-col xl:flex-row gap-6">
                                {/* Left Table - General */}
                                <div className="flex-1 border border-gray-200 rounded-[25px] overflow-hidden overflow-x-auto self-start">
                                    <table className="w-full border-collapse">
                                        <thead className="sticky top-0 z-10">
                                            <tr className="border-b border-gray-200 bg-gray-50">
                                                <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700 w-16">Sr. No</th>
                                                <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700">Name of the Test</th>
                                                <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700 w-32">Existing Charges(Rs.)</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            {waterGeneralChargesData.map((row, idx) => (
                                                row.isHeader ? (
                                                    <tr key={idx} className="bg-gray-100/50">
                                                        <td className="py-4 px-4 text-[13px] text-gray-600"></td>
                                                        <td colSpan={2} className="py-4 px-4 text-[13px] font-bold text-gray-800">{row.parameter}</td>
                                                    </tr>
                                                ) : (
                                                    <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                                        <td className="py-4 px-4 text-[13px] text-gray-600 align-top">{row.sNo}</td>
                                                        <td className="py-4 px-4 text-[13px] text-gray-700 align-top">{row.parameter}</td>
                                                        <td className="py-4 px-4 text-[13px] text-gray-700 align-top">{row.charges}</td>
                                                    </tr>
                                                )
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                {/* Right Table - Pesticides */}
                                <div className="flex-1 border border-gray-200 rounded-[25px] overflow-hidden overflow-x-auto self-start">
                                    <table className="w-full border-collapse">
                                        <thead>
                                            <tr className="border-b border-gray-200 bg-gray-50">
                                                <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700 w-16">Sr. No</th>
                                                <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700">Name of the Test</th>
                                                <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700 w-32">Existing Charges(Rs.)</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            {waterPesticidesChargesData.map((row, idx) => (
                                                row.isHeader ? (
                                                    <tr key={idx} className="bg-gray-100/50">
                                                        <td className="py-4 px-4 text-[13px] text-gray-600"></td>
                                                        <td colSpan={2} className="py-4 px-4 text-[13px] font-bold text-gray-800">{row.parameter}</td>
                                                    </tr>
                                                ) : (
                                                    <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                                        <td className="py-4 px-4 text-[13px] text-gray-600 align-top">{row.sNo}</td>
                                                        <td className="py-4 px-4 text-[13px] text-gray-700 align-top">{row.parameter}</td>
                                                        <td className="py-4 px-4 text-[13px] text-gray-700 align-top">{row.charges}</td>
                                                    </tr>
                                                )
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Notes */}
                            <div className="mt-6 space-y-2 text-[13px] text-gray-600 italic">
                                <p><span className="font-semibold text-gray-800">Note:(i)</span> Sampling charges for water and wastewater samples are separate as specified in Clause A (IV), but subject to minimum of Rs.700/- irrespetive of number of samples.</p>
                                <p><span className="font-semibold text-gray-800">(ii)</span> Sample Collection charges includes transportation and visit charges unless mentioned specifically.</p>
                            </div>
                        </div>
                    )}

                    {/* Soil/Sludge/Sediment/Solid Waste Analysis Charges Table */}
                    {selectedItem === `Lab Analysis: ${labAnalysisChargesItems[5]}` && (
                        <div className="border border-gray-200 rounded-[25px] overflow-hidden overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="border-b border-gray-200 bg-gray-50">
                                        <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700 w-16">Sr. No</th>
                                        <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700">Soil Parameters</th>
                                        <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700 w-48">Analysis Charges Per test in Rs.</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {soilChargesData.map((row, idx) => (
                                        <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="py-4 px-4 text-[13px] text-gray-600 align-top">{row.sNo}</td>
                                            <td className="py-4 px-4 text-[13px] text-gray-700 align-top leading-relaxed">{row.parameter}</td>
                                            <td className="py-4 px-4 text-[13px] text-gray-700 align-top leading-relaxed">{row.charges}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {/* Hazardous Waste Analysis Charges Table */}
                    {selectedItem === `Lab Analysis: ${labAnalysisChargesItems[6]}` && (
                        <div className="border border-gray-200 rounded-[25px] overflow-hidden overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="border-b border-gray-200 bg-gray-50">
                                        <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700 w-24">Sr. No</th>
                                        <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700">Parameters</th>
                                        <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700 w-64">Analysis Charges per test in Rs.</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {hazardousWasteChargesData.map((row, idx) => (
                                        <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                            {/* Special handling for Toxicity Measurement sub-rows */}
                                            {row.sNo.startsWith("-") ? (
                                                <>
                                                    <td className="py-4 px-4 text-[13px] text-gray-600 align-top pl-8">{row.sNo}</td>
                                                    <td className="py-4 px-4 text-[13px] text-gray-700 align-top"></td>
                                                </>
                                            ) : (
                                                <>
                                                    <td className="py-4 px-4 text-[13px] text-gray-600 align-top">{row.sNo}</td>
                                                    <td className="py-4 px-4 text-[13px] text-gray-700 align-top leading-relaxed">{row.parameter}</td>
                                                </>
                                            )}
                                            <td className="py-4 px-4 text-[13px] text-gray-700 align-top leading-relaxed">{row.charges}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {/* AQC Participation Fees Table */}
                    {selectedItem === `Lab Analysis: ${labAnalysisChargesItems[7]}` && (
                        <div className="border border-gray-200 rounded-[25px] overflow-hidden overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="border-b border-gray-200 bg-gray-50">
                                        <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700 w-24">Sr. No</th>
                                        <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700">Organization</th>
                                        <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700 w-64">AQC Participation fee in Rs.</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {aqcChargesData.map((row, idx) => (
                                        <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="py-4 px-4 text-[13px] text-gray-600 align-top">{row.sNo}</td>
                                            <td className="py-4 px-4 text-[13px] text-gray-700 align-top leading-relaxed">{row.parameter}</td>
                                            <td className="py-4 px-4 text-[13px] text-gray-700 align-top leading-relaxed">{row.charges}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {/* Laboratory Functions Content */}
                    {selectedItem === "Laboratory Functions" && (
                        <div className="space-y-8">
                            {laboratoryFunctionsData.map((section, idx) => (
                                <div key={idx}>
                                    <h2 className="text-[18px] font-bold text-gray-800 mb-4">{section.title}</h2>
                                    <ul className="space-y-3">
                                        {section.points.map((point, pIdx) => (
                                            <li key={pIdx} className="flex items-start gap-3">
                                                <span className="w-2 h-2 bg-[#00A3FF] rounded-full mt-2 flex-shrink-0"></span>
                                                <span className="text-[14px] text-gray-700 leading-relaxed">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Functional Performance Table */}
                    {selectedItem === "Functional Performance" && (
                        <div className="border border-gray-200 rounded-[25px] overflow-hidden overflow-x-auto w-full md:w-1/2">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="border-b border-gray-200 bg-gray-50">
                                        <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700 w-24">Sr. No.</th>
                                        <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700">Year</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {functionalPerformanceData.map((row, idx) => (
                                        <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="py-4 px-4 text-[13px] align-top">{row.sNo}</td>
                                            <td className="py-4 px-4 text-[13px] text-[#00A3FF] hover:underline cursor-pointer align-top leading-relaxed">{row.year}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {/* List of Recognised Laboratories Table */}
                    {selectedItem === "List of Recognised Laboratories" && (
                        <div>
                            <p className="text-[14px] text-gray-700 mb-6 leading-relaxed">
                                M.P.C. Board Laboratories with Valid Recognition under Section 12(1) B of Environment (Protection) Act, 1986.
                                Recognition of MPC Board laboratories by MoEF, Govt. of India under Environment (Protection) Act, 1986
                            </p>
                            <div className="border border-gray-200 rounded-[25px] overflow-hidden overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="border-b border-gray-200 bg-gray-50">
                                            <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700 w-16">Sr. No.</th>
                                            <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700 w-80">Name of the Laboratory</th>
                                            <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700">Gazette Notification No. and Date of Issue</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {recognisedLaboratoriesData.map((row, idx) => (
                                            <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                                <td className="py-4 px-4 text-[13px] text-gray-600 align-top">{row.sNo}</td>
                                                <td className="py-4 px-4 text-[13px] text-gray-700 align-top leading-relaxed">{row.name}</td>
                                                <td className="py-4 px-4 text-[13px] text-gray-700 align-top leading-relaxed">{row.gazette}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {/* Laboratory Services Content */}
                    {selectedItem === "Laboratory Services" && (
                        <div className="space-y-6">
                            <p className="text-[14px] text-gray-700 leading-relaxed">
                                {laboratoryServicesData.headerText}
                            </p>
                            <p className="text-[14px] font-semibold text-gray-800">
                                {laboratoryServicesData.subHeader}
                            </p>
                            <ul className="space-y-3">
                                {laboratoryServicesData.objectives.map((objective, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-[#00A3FF] rounded-full mt-2 flex-shrink-0"></span>
                                        <span className="text-[14px] text-gray-700 leading-relaxed">{objective}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Proficiency Report Table */}
                    {selectedItem === "Proficiency Report" && (
                        <div>
                            <p className="text-[14px] text-gray-700 mb-6 leading-relaxed">
                                27th and 28th Proficiency Testing Programme Reports of M.P.C.Board's Laboratories
                            </p>
                            <div className="border border-gray-200 rounded-[25px] overflow-hidden overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="border-b border-gray-200 bg-gray-50">
                                            <th className="py-4 px-3 text-left text-[13px] font-semibold text-gray-700 w-12">Sr. No.</th>
                                            <th className="py-4 px-3 text-left text-[13px] font-semibold text-gray-700 w-32">Name of the Laboratory</th>
                                            <th className="py-4 px-3 text-left text-[13px] font-semibold text-gray-700">27th Proficiency Testing Report</th>
                                            <th className="py-4 px-3 text-left text-[13px] font-semibold text-gray-700">28th Proficiency Testing Report</th>
                                            <th className="py-4 px-3 text-left text-[13px] font-semibold text-gray-700">29th Proficiency Testing Report</th>
                                            <th className="py-4 px-3 text-left text-[13px] font-semibold text-gray-700">30th Proficiency Testing Report</th>
                                            <th className="py-4 px-3 text-left text-[13px] font-semibold text-gray-700">31st Proficiency Testing Report</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {proficiencyReportData.map((row, idx) => (
                                            <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                                <td className="py-4 px-3 text-[13px] text-gray-600 align-top">{row.sNo}</td>
                                                <td className="py-4 px-3 text-[13px] text-gray-700 align-top">{row.lab}</td>
                                                <td className="py-4 px-3 text-[13px] align-top">{row.r27 && <span className="text-[#00A3FF] hover:underline cursor-pointer">Click here</span>}</td>
                                                <td className="py-4 px-3 text-[13px] align-top">{row.r28 && <span className="text-[#00A3FF] hover:underline cursor-pointer">Click here</span>}</td>
                                                <td className="py-4 px-3 text-[13px] align-top">{row.r29 && <span className="text-[#00A3FF] hover:underline cursor-pointer">Click here</span>}</td>
                                                <td className="py-4 px-3 text-[13px] align-top">{row.r30 && <span className="text-[#00A3FF] hover:underline cursor-pointer">Click here</span>}</td>
                                                <td className="py-4 px-3 text-[13px] align-top">{row.r31 && <span className="text-[#00A3FF] hover:underline cursor-pointer">Click here</span>}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {/* Lab Sampling Charges */}
                    {selectedItem === "Lab Sampling Charges" && (
                        <div className="space-y-10">
                            <p className="text-[14px] text-center mb-6">Sampling Charges(Applicable w.e.f.April 01, 2010)</p>

                            {/* Ambient Air Section */}
                            <div>
                                <h3 className="text-[16px] font-semibold text-gray-800 mb-4">Sampling charges for Ambient Air/ Fugitive Emission Samples</h3>
                                <div className="border border-gray-200 rounded-[25px] overflow-hidden overflow-x-auto">
                                    <table className="w-full border-collapse">
                                        <thead>
                                            <tr className="border-b border-gray-200 bg-gray-50">
                                                <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700 w-16">Sr. No</th>
                                                <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700">Type of sampling</th>
                                                <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700 w-32">Charges in Rs.</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            {labSamplingChargesData.ambientAir.map((row, idx) => (
                                                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                                    <td className="py-4 px-4 text-[13px] text-gray-600 align-top">{row.sNo}</td>
                                                    <td className="py-4 px-4 text-[13px] text-gray-700 align-top leading-relaxed">{row.type}</td>
                                                    <td className="py-4 px-4 text-[13px] text-gray-700 align-top">{row.charges}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-3 text-[12px] text-gray-600 space-y-1">
                                    <p><span className="font-semibold">Note: -</span></p>
                                    <p>(i) Sample collection charges includes transportation and visit charges unless mentioned specially.</p>
                                    <p>(ii) Sample analysis charges of respective parameters are separate as per list.</p>
                                </div>
                            </div>

                            {/* Source Emission Section */}
                            <div>
                                <h3 className="text-[16px] font-semibold text-gray-800 mb-4">Source Emission Monitoring / Sampling Charge</h3>
                                <div className="border border-gray-200 rounded-[25px] overflow-hidden overflow-x-auto">
                                    <table className="w-full border-collapse">
                                        <thead>
                                            <tr className="border-b border-gray-200 bg-gray-50">
                                                <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700 w-16">Sr. No</th>
                                                <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700">Type of sampling</th>
                                                <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700 w-32">Charges in Rs.</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            {labSamplingChargesData.sourceEmission.map((row, idx) => (
                                                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                                    <td className="py-4 px-4 text-[13px] text-gray-600 align-top">{row.sNo}</td>
                                                    <td className="py-4 px-4 text-[13px] text-gray-700 align-top leading-relaxed">{row.type}</td>
                                                    <td className="py-4 px-4 text-[13px] text-gray-700 align-top">{row.charges}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-3 text-[12px] text-gray-600 space-y-1">
                                    <p><span className="font-semibold">Note: -</span></p>
                                    <p>(i) Sampling collection charges includes transportation and visit charges unless mentioned specifically..</p>
                                    <p>(ii) Sample analysis charges of respective parameters are seperate.</p>
                                    <p>as per list.</p>
                                </div>
                            </div>

                            {/* Noise Monitoring Section */}
                            <div>
                                <h3 className="text-[16px] font-semibold text-gray-800 mb-4">Noise Monitoring</h3>
                                <div className="border border-gray-200 rounded-[25px] overflow-hidden overflow-x-auto">
                                    <table className="w-full border-collapse">
                                        <thead>
                                            <tr className="border-b border-gray-200 bg-gray-50">
                                                <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700 w-16">Sr. No</th>
                                                <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700">Type of sampling</th>
                                                <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700 w-32">Charges in Rs.</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            {labSamplingChargesData.noiseMonitoring.map((row, idx) => (
                                                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                                    <td className="py-4 px-4 text-[13px] text-gray-600 align-top">{row.sNo}</td>
                                                    <td className="py-4 px-4 text-[13px] text-gray-700 align-top leading-relaxed">{row.type}</td>
                                                    <td className="py-4 px-4 text-[13px] text-gray-700 align-top">{row.charges}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-3 text-[12px] text-gray-600">
                                    <p><span className="font-semibold">Note: -</span> Sample collection charges includes transportation and visit charges unless mentioned specifically.</p>
                                </div>
                            </div>

                            {/* Bio-Medical Waste Section */}
                            <div>
                                <h3 className="text-[16px] font-semibold text-gray-800 mb-4">Bio-Medical Waste:</h3>
                                <div className="border border-gray-200 rounded-[25px] overflow-hidden overflow-x-auto">
                                    <table className="w-full border-collapse">
                                        <thead>
                                            <tr className="border-b border-gray-200 bg-gray-50">
                                                <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700 w-16">Sr. No</th>
                                                <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700">Type of sampling</th>
                                                <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700 w-32">Charges in Rs.</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            {labSamplingChargesData.bioMedicalWaste.map((row, idx) => (
                                                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                                    <td className="py-4 px-4 text-[13px] text-gray-600 align-top">{row.sNo}</td>
                                                    <td className="py-4 px-4 text-[13px] text-gray-700 align-top leading-relaxed">{row.type}</td>
                                                    <td className="py-4 px-4 text-[13px] text-gray-700 align-top">{row.charges}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-3 text-[12px] text-gray-600">
                                    <p><span className="font-semibold">Note: -</span> Sample collection charges includes transportation and visit charges unless mentioned specifically.</p>
                                </div>
                            </div>

                            {/* Water and Waste Water Samples Section */}
                            <div>
                                <h3 className="text-[16px] font-semibold text-gray-800 mb-4">Sampling charges for Water and Waste Water Samples</h3>
                                <div className="border border-gray-200 rounded-[25px] overflow-hidden overflow-x-auto">
                                    <table className="w-full border-collapse">
                                        <thead>
                                            <tr className="border-b border-gray-200 bg-gray-50">
                                                <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700 w-16">Sr. No</th>
                                                <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700">Type of sampling</th>
                                                <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700 w-32">Charges in Rs.</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            {labSamplingChargesData.waterSamples.map((row, idx) => (
                                                row.isHeader ? (
                                                    <tr key={idx} className="bg-gray-100/50">
                                                        <td className="py-4 px-4 text-[13px] text-gray-600 align-top">{row.sNo}</td>
                                                        <td className="py-4 px-4 text-[13px] font-bold text-gray-800 align-top">{row.type}</td>
                                                        <td className="py-4 px-4 text-[13px] text-gray-700 align-top">{row.charges}</td>
                                                    </tr>
                                                ) : (
                                                    <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                                        <td className="py-4 px-4 text-[13px] text-gray-600 align-top">{row.sNo}</td>
                                                        <td className="py-4 px-4 text-[13px] text-gray-700 align-top leading-relaxed">{row.type}</td>
                                                        <td className="py-4 px-4 text-[13px] text-gray-700 align-top">{row.charges}</td>
                                                    </tr>
                                                )
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-3 text-[12px] text-gray-600 space-y-1">
                                    <p><span className="font-semibold">Note:</span>(i) Sample collection charges includes transportation and visit charges unless mentioned specifically.(ii) Sample analysis charges of respective parameters are separate as per list.</p>
                                </div>
                            </div>

                            {/* Soil Samples Section */}
                            <div>
                                <h3 className="text-[16px] font-semibold text-gray-800 mb-4">Sampling Charges for Soil Samples</h3>
                                <div className="border border-gray-200 rounded-[25px] overflow-hidden overflow-x-auto">
                                    <table className="w-full border-collapse">
                                        <thead>
                                            <tr className="border-b border-gray-200 bg-gray-50">
                                                <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700 w-16">Sr. No</th>
                                                <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700">Type of sampling</th>
                                                <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700 w-32">Charges in Rs.</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            {labSamplingChargesData.soilSamples.map((row, idx) => (
                                                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                                    <td className="py-4 px-4 text-[13px] text-gray-600 align-top">{row.sNo}</td>
                                                    <td className="py-4 px-4 text-[13px] text-gray-700 align-top leading-relaxed">{row.type}</td>
                                                    <td className="py-4 px-4 text-[13px] text-gray-700 align-top">{row.charges}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-3 text-[12px] text-gray-600">
                                    <p><span className="font-semibold">Note:</span>i) Sample collection charges includes transportation and visit charges unless mentioned specifically. ii)Sample analysis charges of respective parameters are separate as per list.</p>
                                </div>
                            </div>

                            {/* Hazardous Waste Samples Section */}
                            <div>
                                <h3 className="text-[16px] font-semibold text-gray-800 mb-4">Hazardous Waste Sample collection charges at the premises of Industry/Import site/Disposal site.</h3>
                                <div className="border border-gray-200 rounded-[25px] overflow-hidden overflow-x-auto">
                                    <table className="w-full border-collapse">
                                        <thead>
                                            <tr className="border-b border-gray-200 bg-gray-50">
                                                <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700 w-16">Sr. No</th>
                                                <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700">Type of sampling</th>
                                                <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700 w-32">Charges in Rs.</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            {labSamplingChargesData.hazardousWasteSamples.map((row, idx) => (
                                                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                                    <td className="py-4 px-4 text-[13px] text-gray-600 align-top">{row.sNo}</td>
                                                    <td className="py-4 px-4 text-[13px] text-gray-700 align-top leading-relaxed">{row.type}</td>
                                                    <td className="py-4 px-4 text-[13px] text-gray-700 align-top">{row.charges}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-3 text-[12px] text-gray-600 space-y-1">
                                    <p><span className="font-semibold">Note: -</span></p>
                                    <p>(i) Sample Collection charges includes transportation and visit charges unless mentioned specifically..</p>
                                    <p>(ii) Sample analysis charges of respective parameters are separate as per list.</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Committee Table */}
                    {selectedItem === "Committee" && (
                        <div>
                            <div className="border border-gray-200 rounded-[25px] overflow-hidden overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="border-b border-gray-200 bg-gray-50">
                                            <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700 w-16">Sr. No.</th>
                                            <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700">Laboratory Committee Details</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {committeeData.map((row, idx) => (
                                            <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                                <td className="py-4 px-4 text-[13px] text-gray-600 align-top">{row.sNo}</td>
                                                <td className="py-4 px-4 text-[13px] text-[#00A3FF] hover:underline cursor-pointer align-top leading-relaxed">{row.details}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {/* Environmental Parameters Table */}
                    {selectedItem === "List of Environmental Parameters monitor by MPCB Laboratories" && (
                        <div className="border border-gray-200 rounded-[25px] overflow-hidden overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-gray-50">
                                        <th colSpan={2} className="bg-gray-50 border-gray-200"></th>
                                        <th colSpan={8} className="py-3 px-4 text-center text-[14px] font-bold text-gray-800 border-b border-l border-gray-200">
                                            Existing Facilities (Yes/No)
                                        </th>
                                    </tr>
                                    <tr className="border-b border-gray-200 bg-gray-50">
                                        <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700 whitespace-nowrap">Sr. No.</th>
                                        <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700 min-w-[50px]">Parameters</th>
                                        <th className="py-4 px-4 text-center text-[13px] font-semibold text-gray-700 whitespace-nowrap">Central Laboratory<br />Mahape</th>
                                        <th className="py-4 px-4 text-center text-[13px] font-semibold text-gray-700 whitespace-nowrap">R.Lab<br />Chhatrapati Sambhaji Nagar</th>
                                        <th className="py-4 px-4 text-center text-[13px] font-semibold text-gray-700 whitespace-nowrap">R.Lab<br />Pune</th>
                                        <th className="py-4 px-4 text-center text-[13px] font-semibold text-gray-700 whitespace-nowrap">R.Lab<br />Thane</th>
                                        <th className="py-4 px-4 text-center text-[13px] font-semibold text-gray-700 whitespace-nowrap">R.Lab<br />Nashik</th>
                                        <th className="py-4 px-4 text-center text-[13px] font-semibold text-gray-700 whitespace-nowrap">R.Lab<br />Chiplun</th>
                                        <th className="py-4 px-4 text-center text-[13px] font-semibold text-gray-700 whitespace-nowrap">R.Lab<br />Chandrapur</th>
                                        <th className="py-4 px-4 text-center text-[13px] font-semibold text-gray-700 whitespace-nowrap">R.Lab<br />Nagpur</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {environmentalParametersMonitorData.map((row, idx) => (
                                        row.type === "section" ? (
                                            <tr key={idx} className="bg-gray-50">
                                                <td colSpan={10} className="py-4 px-4 text-[14px] font-bold text-black">
                                                    {row.content}
                                                </td>
                                            </tr>
                                        ) : (
                                            <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                                <td className="py-4 px-4 text-[13px] text-gray-600 align-top">{row.s_no}</td>
                                                <td className="py-4 px-4 text-[13px] text-gray-700 align-top">{row.parameter}</td>
                                                <td className="py-4 px-4 text-[13px] text-gray-700 text-center align-top">{row.central_lab_mahape}</td>
                                                <td className="py-4 px-4 text-[13px] text-gray-700 text-center align-top">{row.rlab_csn}</td>
                                                <td className="py-4 px-4 text-[13px] text-gray-700 text-center align-top">{row.rlab_pune}</td>
                                                <td className="py-4 px-4 text-[13px] text-gray-700 text-center align-top">{row.rlab_thane}</td>
                                                <td className="py-4 px-4 text-[13px] text-gray-700 text-center align-top">{row.rlab_nashik}</td>
                                                <td className="py-4 px-4 text-[13px] text-gray-700 text-center align-top">{row.rlab_chiplun}</td>
                                                <td className="py-4 px-4 text-[13px] text-gray-700 text-center align-top">{row.rlab_chandrapur}</td>
                                                <td className="py-4 px-4 text-[13px] text-gray-700 text-center align-top">{row.rlab_nagpur}</td>
                                            </tr>
                                        )
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {/* Equipment List Table */}
                    {selectedItem === "List of equipment and instruments at Laboratories (as on 2025)" && (
                        <div className="border border-gray-200 rounded-[25px] overflow-hidden overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-gray-50">
                                        <th colSpan={2} className="bg-gray-50 border-gray-200"></th>
                                        <th colSpan={8} className="py-3 px-4 text-center text-[14px] font-bold text-gray-800 border-b border-l border-gray-200">
                                            Existing Facilities (Yes/No)
                                        </th>
                                        <th className="bg-gray-50 border-gray-200"></th>
                                    </tr>
                                    <tr className="border-b border-gray-200 bg-gray-50">
                                        <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700 whitespace-nowrap">Sr. No.</th>
                                        <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700 min-w-[100px]">Name of Instruments / Equipment</th>
                                        <th className="py-4 px-4 text-center text-[13px] font-semibold text-gray-700 whitespace-nowrap">Central Laboratory<br />Mahape</th>
                                        <th className="py-4 px-4 text-center text-[13px] font-semibold text-gray-700 whitespace-nowrap">R.Lab<br />Chhatrapati Sambhaji Nagar</th>
                                        <th className="py-4 px-4 text-center text-[13px] font-semibold text-gray-700 whitespace-nowrap">R.Lab<br />Pune</th>
                                        <th className="py-4 px-4 text-center text-[13px] font-semibold text-gray-700 whitespace-nowrap">R.Lab<br />Thane</th>
                                        <th className="py-4 px-4 text-center text-[13px] font-semibold text-gray-700 whitespace-nowrap">R.Lab<br />Nashik</th>
                                        <th className="py-4 px-4 text-center text-[13px] font-semibold text-gray-700 whitespace-nowrap">R.Lab<br />Chiplun</th>
                                        <th className="py-4 px-4 text-center text-[13px] font-semibold text-gray-700 whitespace-nowrap">R.Lab<br />Chandrapur</th>
                                        <th className="py-4 px-4 text-center text-[13px] font-semibold text-gray-700 whitespace-nowrap">R.Lab<br />Nagpur</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {labEquipmentData.map((row, idx) => (
                                        <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="py-4 px-4 text-[13px] text-gray-600 align-top">{row.s_no}</td>
                                            <td className="py-4 px-4 text-[13px] text-gray-700 align-top">{row.instrument_name}</td>
                                            <td className="py-4 px-4 text-[13px] text-gray-700 text-center align-top">{row.central_lab}</td>
                                            <td className="py-4 px-4 text-[13px] text-gray-700 text-center align-top">{row.csn_lab}</td>
                                            <td className="py-4 px-4 text-[13px] text-gray-700 text-center align-top">{row.pune_lab}</td>
                                            <td className="py-4 px-4 text-[13px] text-gray-700 text-center align-top">{row.thane_lab}</td>
                                            <td className="py-4 px-4 text-[13px] text-gray-700 text-center align-top">{row.nashik_lab}</td>
                                            <td className="py-4 px-4 text-[13px] text-gray-700 text-center align-top">{row.chiplun_lab}</td>
                                            <td className="py-4 px-4 text-[13px] text-gray-700 text-center align-top">{row.chandrapur_lab}</td>
                                            <td className="py-4 px-4 text-[13px] text-gray-700 text-center align-top">{row.nagpur_lab}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {/* Placeholder for other sections */}
                    {selectedItem !== "Laboratories" &&
                        selectedItem !== "Functional Performance" &&
                        selectedItem !== "Laboratory Functions" &&
                        selectedItem !== "List of Recognised Laboratories" &&
                        selectedItem !== "Laboratory Services" &&
                        selectedItem !== "Proficiency Report" &&
                        selectedItem !== "Lab Sampling Charges" &&
                        selectedItem !== "Committee" &&
                        selectedItem !== `Lab Analysis: ${labAnalysisChargesItems[0]}` &&
                        selectedItem !== `Lab Analysis: ${labAnalysisChargesItems[1]}` &&
                        selectedItem !== `Lab Analysis: ${labAnalysisChargesItems[2]}` &&
                        selectedItem !== `Lab Analysis: ${labAnalysisChargesItems[3]}` &&
                        selectedItem !== `Lab Analysis: ${labAnalysisChargesItems[4]}` &&
                        selectedItem !== `Lab Analysis: ${labAnalysisChargesItems[5]}` &&
                        selectedItem !== `Lab Analysis: ${labAnalysisChargesItems[6]}` &&
                        selectedItem !== `Lab Analysis: ${labAnalysisChargesItems[7]}` &&
                        selectedItem !== "List of Environmental Parameters monitor by MPCB Laboratories" &&
                        selectedItem !== "List of equipment and instruments at Laboratories (as on 2025)" &&
                        !laboratoryDocuments[selectedItem] && (
                            <div className="text-gray-500 text-[15px]">
                                Content for "{selectedItem.startsWith("Lab Analysis:") ? selectedItem.replace("Lab Analysis: ", "") : selectedItem}" will be displayed here.
                            </div>
                        )}

                    {/* Document Cards Section */}
                    {laboratoryDocuments[selectedItem] && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <DocumentCard document={laboratoryDocuments[selectedItem]} />
                        </div>
                    )}
                </div>
            </div>
        </div >
    );
}

export default Laboratories;