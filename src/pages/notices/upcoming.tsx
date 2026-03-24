import { useState } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

const standingorders = "/assets/standingorders.svg";

// Year options for dropdown - dynamically populated
const yearOptions = [
    { value: "any", label: "Any" },
    { value: "2026", label: "2026" },
    { value: "2025", label: "2025" },
    { value: "2024", label: "2024" },
    { value: "2023", label: "2023" },
    { value: "2022", label: "2022" },
    { value: "2021", label: "2021" },
    { value: "2020", label: "2020" },
    { value: "2019", label: "2019" },
    { value: "2018", label: "2018" },
    { value: "2017", label: "2017" },
    { value: "2016", label: "2016" },
    { value: "2015", label: "2015" },
    { value: "2014", label: "2014" },
    { value: "2013", label: "2013" },
    { value: "2012", label: "2012" },
];

// Type definition for upcoming hearing data
interface UpcomingHearingRow {
    srNo: number;
    nameOfIndustryAddress: string;
    executiveSummaryCRZ: string;
    dateTime: string;
    environmentalPublicHearingOrder: string;
    remarksAdvertisement: string;
}

// Sample data for upcoming hearings - dynamically populated from JSON
const upcomingHearingsData: UpcomingHearingRow[] = [
    {
        srNo: 1,
        nameOfIndustryAddress: "Installation of 3 x 600 TPD (6,12,000 TPA) Sponge Iron Plant, 8x25 T (6,66,000 TPA) Induction Furnace, 80 T (6,66,000 TPA) EAF, 6,00,000 TPA Rolling Mill (HBR), 3,00,000 TPA Rolling Mill (RHF), 3,60,000 TPA Flat Product Rolling Mill, 3,00,000 TPA Section Rolling Mill, 1,00,000 TPA Forging, Pickling, Bright Bar, 1,00,000 TPA Ingot Casting & 40 MW WHRB, 40 MW (AFBC)Thermal Power Plant and 4x9MVA Submerged Arc Furnace Proposed by M/s. Varad Ferro Alloys Private Limited, Survey No. 137, Part Opp. Dhawleshwar Temple, Jalna- Bhokardan Road, Jalna – 431203, Jalna, Maharashtra.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "17 Feb 2026",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: "Click Here"
    },
    {
        srNo: 2,
        nameOfIndustryAddress: "Bulk Drug & intermediates manufacturing unit\"by M/s. Smruthi Organics Ltd. (SOL) located at Plot No. A-27, in Chincholi MIDC & Gat No.230, 231,232,&233 in Village Chincholi, Tal. Mohol, Dist. Solapur. EIC is requested to upload the same on Board's web-site (Public Hearing)",
        executiveSummaryCRZ: "Click Here",
        dateTime: "03 Feb 2026",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: "Click Here"
    },
    {
        srNo: 3,
        nameOfIndustryAddress: "Proposed project development of Economic Corridors, inter corridor, feeder.. proposed by National Highways Authority of Inida, Project implementation unit-Panvel, Raigad.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "30 Jan 2026",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 4,
        nameOfIndustryAddress: "Establishment of 207 KLPD Grain Based Distillery Plant to Manufacture RS/ENA/Impure Spirit/Technical Spirit/Absolute Alcohol/Ethanol and IMFL Bottling Plant along with 6 MW Co-generation Power Plant proposed by M/s. Veer Vallabh Green Bio Energy Private Limited, at Gat No. 187, 189/1/1, 190, 193, 194, 195, 200, 201, 203, 204/1, 205/1, 205/1/2, 205/2, 208, 209 & 211/1, Nimgaon Khalu Village, Taluka Shrigonda, District Ahilyanagar.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "29 Jan 2026",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 5,
        nameOfIndustryAddress: "Proposed Expansion of WCL Ghonsa Expansion (Deep) Opencast Coal Mine to increase production capacity from 0.60 MTPA to 1.50 MTPA within existing ML area of 523.313 hectares located at Ghonsa Village. Tal. Wani, Dist. Yavatmal. Proposed by Area General Manager, Western Coal Fields Ltd. WCL Wani North Area. Tal.Wani, Dist. Yavatmal.",
        executiveSummaryCRZ: "EIA Summary",
        dateTime: "21 Jan 2026",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 6,
        nameOfIndustryAddress: "Proposed public hearing of project 0.3 MTPA cement grinding unit project at gat no. 129/3/A/1, Pt. village Prakasha, Tal. Shahada, Dist. Nandurbar (Maharashtra) Proposed public hearing of M/s Bagul Exim Pvt Ltd",
        executiveSummaryCRZ: "EIA Summary",
        dateTime: "21 Jan 2026",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 7,
        nameOfIndustryAddress: "Proposed Amalgamated Gauri-Pauni Expansion OC of Ballarpur Area, WCL for increase in production capacity from 6.75 MTPA to 9.0 MTPA along with increase in mining lease area from 2386.94 Ha to 3158.79 Ha. Proposed by M/s. Western Coalfields Limited.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "06 Jan 2026",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 8,
        nameOfIndustryAddress: "Baranj Opencast Coal Mining Project,Village: Somnala, Bonthala, Chek Baranj, Kadholi, Kesurli, Chichordi & Baranj Mokasa, District: Chandrapur for Mining lease area: 1457.20 Ha Expansion in capacity from 3.50 MTPA to 5.00 MTPA proposed by M/s Karnataka Power Corporation Ltd.Shakti Bhawan No. 82, Race Course Road, , Bengaluru Urban, Karnataka, 560001",
        executiveSummaryCRZ: "Click Here",
        dateTime: "30 Dec 2025",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: "Click Here"
    },
    {
        srNo: 9,
        nameOfIndustryAddress: "M/s. Shri Sant Shiromani Maruti Maharaj SSK, Latur, for proposed project for 105 KLPD Molasses/sugarcane syrup based distillery village-Maulinagar, Belkund, Tal-Ausa, Dist-Latur.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "24 Dec 2025",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 10,
        nameOfIndustryAddress: "Shakteepeeth Mahamarg in Parbhani District. The public Hearing is schedule on 24.12.2025 at 11.00 am at DPDC Hall, Collector office, Parbhani. It is requested to issue panel Order for said public hearing.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "24 Dec 2025",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: "Click Here"
    },
    {
        srNo: 11,
        nameOfIndustryAddress: "Maharashtra State Road Development Corporation Limited (MSRDC) - Project Proponent has been entrusted with the development of Access Controlled Super Communication Expressways which connect the shaktipeeth in Vidarbha, Marathwada and Konkan region in Maharashtra.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "24 Dec 2025",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 12,
        nameOfIndustryAddress: "Construction of Pavner (District Wardha) to Patradevi (District Sindhudurg) at Maharashtra – Goa Border- Super communication Maharashtra Shaktipeet Expressway-Package-II(Nanded , Hingoli, Beed, Latur, Parbhani and Dharashiv), total length 267, 480 Km, in the state of Maharashtra, Proposed by MSRDC Ltd., Camp Office, Chhatrapati Sambhajinagar. The Public hearing is scheduled on 23.12.2025 at 11.30 a.m. At Collector Office, Latur.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "23 Dec 2025",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 13,
        nameOfIndustryAddress: "Shakteepeeth Mahamarg in Hingoli District. The public Hearing is schedule on 19.12.2025 at 11.00 am at DPDC Hall, Collector office, Hingoli. It is requested to issue panel Order for said public hearing.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "19 Dec 2025",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: "Click Here"
    },
    {
        srNo: 14,
        nameOfIndustryAddress: "PH for Ethyl Acetate mfg with production capacity of 40 TPD, Proposed by M/s. Ashirwad Industries, Satara. on dt. 16.12.2025 time 11.00.AM",
        executiveSummaryCRZ: "EIA Summary",
        dateTime: "16 Dec 2025",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 15,
        nameOfIndustryAddress: "M/S. Mowa Distilleries Pvt. Ltd., At S. No. 8/1, 8/2 & 8/5, Village - Ambivali T. Kotal Khalati, Tal. Karjat, Dist. Raigad for conducting Environmental Public Hearing in respect of Proposed 3 KLPD Mahua Flower Based Heritage Liquor Manufacturing Unit and Bottling Plant at S. No. 8/1, 8/2 & 8/5, Village - Ambivali T. Kotal Khalati, Tal. Karjat, Dist. Raigad",
        executiveSummaryCRZ: "Click Here",
        dateTime: "05 Dec 2025",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: "Click Here"
    },
    {
        srNo: 16,
        nameOfIndustryAddress: "Proposed 3 KLPD Mahua Flower Based Heritage Liquor Manufacturing Unit & Bottling Plant Located at S. No. 8/1, 8/2 & 8/5, Village- Ambivali T. Kotalkhalati, Tal. Karjat, Dist. Raigad,by M/S. MOWA DISTILLERIES PVT. LTD",
        executiveSummaryCRZ: "Click Here",
        dateTime: "05 Dec 2025",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: "Click Here"
    },
    {
        srNo: 17,
        nameOfIndustryAddress: "Proposed public hearing for Maharashtra State Road Development Corporation Limited (MSRDC) - Project Proponent has been entrusted with the development of Access Controlled Super Communication Expressways which connect the shaktipeeth in Vidarbha, Marathwada and Konkan region in Maharashtra",
        executiveSummaryCRZ: "Click Here",
        dateTime: "03 Dec 2025",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: "Click Here"
    },
    {
        srNo: 18,
        nameOfIndustryAddress: "Public hearing for Proposed 18 Sand Ghats in Yavatmal District at Babulgaon Taluka,Fatiyabad (1.68 Ha), Arni Taluka Aayta-1 (2.70 Ha), Aayta-2 (2.70 Ha), Jalandri-2 (1.80 Ha), Rani Dhanora-1 (4.50), Rani Dhanora-2 (4.80 Ha), Ralegaon Taluka Zullar (1.10 Ha), , Mudhapur (1.20 Ha),Hirapur (1.01 Ha), Jagjai (1.01 Ha), Wani Taluka Bhurki-1 (2.50 Ha), Bhurki-2 (3.0 Ha), Shelu Khu (1.0 Ha), Kolgaon (2.10 Ha), Sakhra Ko. (2.70 Ha), Zarijamni Taluka Durba-1 (1.40 Ha), Durba-2 (1.0 Ha), Wetholi-1 (1.26 Ha) Proposed by District Mining Office, Collector Office, Yavatmal.",
        executiveSummaryCRZ: "EIA Summary",
        dateTime: "06 Nov 2025",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 19,
        nameOfIndustryAddress: "Executive summary for Proposed Public hearing of 4 Sand Ghat located in Latur Dist. Proposed by District",
        executiveSummaryCRZ: "Click Here",
        dateTime: "30 Oct 2025",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 20,
        nameOfIndustryAddress: "PROPOSED EXPANSION OF SUGAR PLANT FROM 7200 TCD TO 15000 TCD & COGENERATION POWER PLANT FROM 30MW TO 68MW, at AT: PRAVARANAGAR- LONI, TALUKA: RAHATA, DISTRICT: AHMEDNAGAR., Proposed by M/S. PADMASHRI DR. VITTHALRAO VIKHE PATIL SSK",
        executiveSummaryCRZ: "Click Here",
        dateTime: "30 Sep 2025",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: "Click Here"
    },
    {
        srNo: 21,
        nameOfIndustryAddress: "PROPOSED AMBIVLI CEMENT GRINDING UNIT WITH PRODUCTION CAPACITY OF 2 x 3 MMTPA (6.0 MMTPA) Located At VILLAGE – AMBIVLI, TALUKA - KALYAN, DISTRICT- THANE, MAHARASHTRA-421102. Proposed by M/s. AMBUJA CEMENTS LIMITED (ADANI CEMENT BUSINESS) Adani Corporate House, Shantigram, Khodiyar, SG Highway, Ahmedabad, Gujarat- 382421.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "16 Sep 2025",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: "Click Here"
    },
    {
        srNo: 22,
        nameOfIndustryAddress: "Proposed public hearing for DEVELOPMENT AND OPERATION OF DAHEGAON GOWARI UNDERGROUND COAL MINE, Dahegaon-Gowari Underground Coal Mine Area: 1562 ha for production capacity of 1 MTPA, proposed by M/s Ambuja Cements Limited At- Adani Corporate House, Shantigram, Nr. Vaishno Devi Circle, SG Highway, Khodiyar, Ahmedabad, Gujarat – 382421",
        executiveSummaryCRZ: "Click Here",
        dateTime: "10 Sep 2025",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 23,
        nameOfIndustryAddress: "38 sand Ghats of Hingoli District, proposed by District Minning Officer, Collector office, Hingoli",
        executiveSummaryCRZ: "Click Here",
        dateTime: "19 Aug 2025",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: "Click Here"
    },
    {
        srNo: 24,
        nameOfIndustryAddress: "PROPOSED 300 KLPD SUGAR CANE SYRUP/MOLASSES & GRAIN BASED DISTILLERY PLANT Gat. No. 2100, Village- Rajuri, Tal. Junnar, Dist. Pune, Maharashtra PROPOSED BY M/s. JUNNAR SUGARS LIMITED",
        executiveSummaryCRZ: "Click Here",
        dateTime: "04 July 2025",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 25,
        nameOfIndustryAddress: "Public Hearing of proposed Greenfield project of standalone Grinding unit with cement production capacity of 6 MMTPA (2 x 3 MMTPA), located at Village-Bornar, Tal & Dist- Jalgaon.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "19 June 2025",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: "Click Here"
    },
    {
        srNo: 26,
        nameOfIndustryAddress: "Proposed 90,000 TPA of Bauxite having 13.86 Ha (Forest land) includes ML area of 10.65 Ha for mining & 0.17 Ha for road at Gat No. 685(Part) of village Ghungur and 3.04 Ha for road at Gat No. 921 (Part) of village Ambarde, Taluka Shahuwadi, Dist.-Kolhapur under ‘B’ Category for product Bauxite, At/Post: Village Gungur, Taluka-Shahuwadi, District-Kolhapur Maharashtra. Proposed by M/s. Shri Jugai Minerals, Ghungur Main Road, Post-Bandiwadi, Tal. Shahuwadi, Dist.-Kolhapur, Maharashtra-416230 proposed project at Ghungur Bauxite Block-II, village Ghungur, Taluka-Shahuwadi, District-Kolhapur, State Maharashtra-416230.",
        executiveSummaryCRZ: "EIA Summary",
        dateTime: "06 June 2025",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 27,
        nameOfIndustryAddress: "Public hearing for Increase in ML area from 919.69 ha to 1120.48 ha With existing production capacity of 2.50 MTPA Proposed by SASTI EXPANSION OC MINE Ballarpur Area, WCL.near Sasti village in the Rajura tehsil of Chandrapur district of Maharashtra state",
        executiveSummaryCRZ: "Click Here",
        dateTime: "02 June 2025",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 28,
        nameOfIndustryAddress: "M/s. Million Steels Pvt. Ltd., Plot No. 1417-A, Deshpande Layout, Wardhaman Nagar, Nagpur",
        executiveSummaryCRZ: "Click Here",
        dateTime: "30 May 2025",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: "Click Here"
    },
    {
        srNo: 29,
        nameOfIndustryAddress: "Construction of Nagpur - Gondia Access Controlled Super Communication Expressway Starting at Gavasi in Nagpur District and ends at Lodhi Tola in Gondia district (Ch. 0.000 to Ch. 144.807). In addition to the main alignment two feeder routes are included in Package I i.e., Gondia Bypass (Ch. 0.000 to Ch. 13.744) and Tiroda Feeder Route (Ch. 0.000 to Ch. 3.826). - Nagpur",
        executiveSummaryCRZ: "Click Here",
        dateTime: "16 May 2025",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 30,
        nameOfIndustryAddress: "Bhandara-Gadchiroli Access controlled express way (Nagpur District Component)",
        executiveSummaryCRZ: "Click Here",
        dateTime: "16 May 2025",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: "Click Here"
    },
    {
        srNo: 31,
        nameOfIndustryAddress: "Ghungur Bauxite Block-II Villages - Ghungur, Taluka –Shahuwadi, District – Kolhapur, State - Maharashtra Peak production capacity - 90,000 TPA Mining Lease Area 10.65 Ha (Forest Land), & Area for Transportation Road 3.21 Ha (Forest Land), Proposed by Shri Jugai Minerals Ghungur Main Road, Post – Bandiwadi Taluka – Shahuwadi, District – Kolhapur",
        executiveSummaryCRZ: "Click Here",
        dateTime: "29 Apr 2025",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 32,
        nameOfIndustryAddress: "Parli Bauxite Mine is located in villages Parli of Shahuwadi Taluka of Kolhapur District, Maharashtra. By M/s. Shree Malhar Minerals, Sita Colony, Opp Jain Boading, Karveer, Dist-Kolhapur",
        executiveSummaryCRZ: "Click Here",
        dateTime: "23 Apr 2025",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: "Click Here"
    },
    {
        srNo: 33,
        nameOfIndustryAddress: "Proposed Expansion in Limestone Production Capacity from 2.0 Million TPA to 3.5 Million TPA, in Maratha Limestone Mine - II (ML Area – 880.31 ha) in Villages- Bakhardi, Upparwahi, Chandur, Pimpalgaon, Lakhmapur and Thutra (Tehsil: Korpana) and Sonapur (Tehsil: Rajura), District: Chandrapur, State: Maharashtra. Proposed by M/s. Ambuja Cements Ltd, (unit Maratha Cements works).",
        executiveSummaryCRZ: "Click Here",
        dateTime: "03 Feb 2025",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 34,
        nameOfIndustryAddress: "Proposed public hearing 12 Nos,11 Nos, 12 Nos,26 Nos & 6 Nos of sand belts in Nanded District. Proposed by District Mining Officer Nanded, Collector office Nanded.",
        executiveSummaryCRZ: "EIA Summary",
        dateTime: "16 Jan 2025",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: "Click Here"
    },
    {
        srNo: 35,
        nameOfIndustryAddress: "The proposed Shirawta Off-stream Open Loop Pumped Storage Hydro Project (1800 MW), Proposed by M/s.The Tata Power Co. Ltd. Vill- Khandshi, Tal-Maval, Dist-Pune.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "29 Oct 2024",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: "Click Here"
    },
    {
        srNo: 36,
        nameOfIndustryAddress: "Public hearing for Proposed 37 Sand Ghats in Yavatmal District at Yavatmal Taluka, Bori Gosavi-1 (1.00 Ha.), Ramnagar Bori Gosavi-2 (1.00 Ha.), at Arni Taluka Mukindpur (2.70 Ha.), Jalandri (3.60 Ha.), At Ghatanji Taluka Bilayta (1.30 Ha.), Manusdhari (3.30 Ha.), Ratnapur (1.20 Ha.), Wetholi (4.80 Ha.), Kamalveli (1.25 Ha.), Durbha (1.20 Ha.), Hirapur (1.05 Ha.), Karankhed (1.00 Ha.), Thar (Khu) (4.20 Ha.), Januna (1.00 Ha.), Bhosa (1.05 Ha.), Warodi (1.35 Ha.), Unchwadad (1.69 Ha.), Lohara (1.04 Ha.), Chalgani (1.00 Ha.), Gurfali (1.13 Ha.), Savaleshwar (4.50 Ha.), Nandla (1.05 Ha.), Pimpri Divat (1.00 Ha.), Tiwadi (1.05 Ha.), Dighdi (1.35 Ha.), Hatla (1.00 Ha.), Palshi (1.05 Ha.), Sindgi (1.00 Ha.), Kopra (Bu.) (1.10 Ha.), Devsari (1.23 Ha.), Apti (Dakshin) (3.96 Ha.), Belora (1.20 Ha.), Surjapur (1.00 Ha.), Ijasan (1.25 Ha.), Hirapur (1.08 Ha.), Rohini-2 (1.75 Ha.), Sawangi (1.08 Ha.). Proposed by District Mining Office, Collector Office, Yavatmal.",
        executiveSummaryCRZ: "EIA Summary",
        dateTime: "07 Oct 2024",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 37,
        nameOfIndustryAddress: "Humdara-Ghodepaiwadi Bauxite Ore Mine ML Area : 120.48 Ha. Humdara-Ghodepaiwadi (Sagave Village), Rajapur Taluka, Ratnagiri District, Maharashtra State. Proposed by M/S. GAMMA IRON INDIA LTD Rajapur Taluka, Ratnagiri District, Maharashtra State.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "05 Sep 2024",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 38,
        nameOfIndustryAddress: "Proposed project for public hearing, proposed by M/s. Sociedade De Fomento Industrial Private Limited, Proposed NANAR BAUXITE BLOCK Area : 144.95 Ha. Proposed Production : 0.9 MTPA of Bauxite Location - Nanar Village, Taluka - Rajapur, District- Ratnagiri, Maharashtra State.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "29 Aug 2024",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 39,
        nameOfIndustryAddress: "ENVIRONMENTAL MANAGEMENT PLAN FOR SAND GHATS AT JALNA DISTRICT STATE – MAHARASHTRA FOR PUBLIC HEARING FOR 05 SAND GHATS PROPONENT DISTRICT MINING OFFICER, COLLECTOR OFFICE, JALNA.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "23 Aug 2024",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 40,
        nameOfIndustryAddress: "Proposed installation of 2X350 TPD DRI plant for the production of 2, 31,000TPA of Sponge Iron, 2X40T of Induction Furnace along with CCM for production of 2, 64,000 TPA of Billets and Rolling Mill for the production of 2, 64,000 TPA TMT bars and 32 MW of AFBC, 19 MW of WHRB At. Plot No. B-3, MIDC Mul, Tal. Mul, Dist. Chandrapur",
        executiveSummaryCRZ: "Click Here",
        dateTime: "07 May 2024",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: "Click Here"
    },
    {
        srNo: 41,
        nameOfIndustryAddress: "Proposed installation of Induction Furnaces (Billets / Ingots / Hot Billets – 5,28,000 TPA), Rolling Mill through Hot Charging (TMT Bars /Structural Steel – 5,00,000 TPA) & Ferro Alloys Unit (FeMn – 70,000 TPA / SiMn – 56,000 TPA/ Pig Iron – 1,40,000 TPA) Project by M/s Rajuri Steels & Alloys India Private Limited At Plot No. A – 29, MIDC, Mul Growth Centre, District Chandrapur, Maharashtra.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "23 Apr 2024",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 42,
        nameOfIndustryAddress: "M/s. Rajuri Steels & Alloys Pvt. Ltd., Plot No. B-6, 7 & 8, MIDC Mul, Tal. Mul, Dist. Chandrapur.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "23 Apr 2024",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: "Click Here"
    },
    {
        srNo: 43,
        nameOfIndustryAddress: "Public hearing of M/s. Sunflag Iron & Steel Co. Ltd., Bhivkund Underground Mine, Tal. Ballarpur, Chandrapur",
        executiveSummaryCRZ: "Click Here",
        dateTime: "20 Mar 2024",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: "Click Here"
    },
    {
        srNo: 44,
        nameOfIndustryAddress: "Proposed 04 Sand Ghats in Hingoli District",
        executiveSummaryCRZ: "Click Here",
        dateTime: "06 Mar 2024",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: "Click Here"
    },
    {
        srNo: 45,
        nameOfIndustryAddress: "PRODUCTION OF PATHARI SAND MINE; M.L AREA: 40.41 HA. FOR MINERAL- BAJRI (RIVER SAND) EXISTING PRODUCTION – 50,000 Cu.M/Annum & AFTER EXPANSION PRODUCTION – 1,00,000 Cu.M. /Annum (EXPANSION PROJECT) LOCATION NEAR VILLAGE PATHARI, TEHSIL TUMSAR, DISTRICT BHANDARA, MAHARASHTRA. Proposed by MOIL LIMITED MOIL Bhavan, 1-A, Katol Road, Nagpur.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "06 Feb 2024",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: "Click Here"
    },
    {
        srNo: 46,
        nameOfIndustryAddress: "Auction of Sand ghat spots located in Akkalkot, Mohol, Mangalwedha, South Solapur, Madha, Pandharpur talukas on river bhima in Solapur district",
        executiveSummaryCRZ: "Click Here",
        dateTime: "02 Feb 2024",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: "Click Here"
    },
    {
        srNo: 47,
        nameOfIndustryAddress: "Proposed public hearing for proposed SAND GHATS AT PARBHANI DISTRICT, STATE MAHARASTHRA FOR 58 SAND GHATS PROJECT PROPONENT DISTRICT MINING OFFICER, COLLECTOR OFFICE, PARBHANI.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "01 Feb 2024",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: "Click Here"
    },
    {
        srNo: 48,
        nameOfIndustryAddress: "5 Sand Ghats At Nagpur District, State Maharashtra, proposed by District Mining Officer, Collector Office, Nagpur",
        executiveSummaryCRZ: "Click Here",
        dateTime: "22 Jan 2024",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: "Click Here"
    },
    {
        srNo: 49,
        nameOfIndustryAddress: "M/s. Sanvijay Rolling & Engineering Ltd. Plot No. B-202 to 206, MIDC Butibori, Dist-Nagpur",
        executiveSummaryCRZ: "Click Here",
        dateTime: "04 Jan 2024",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: "Click Here"
    },
    {
        srNo: 50,
        nameOfIndustryAddress: "3 SAND GHATS AT LATUR DISTRICT",
        executiveSummaryCRZ: "Click Here",
        dateTime: "29 Dec 2023",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 51,
        nameOfIndustryAddress: "15 spot of sand mining at Jalgaon District",
        executiveSummaryCRZ: "Click Here",
        dateTime: "13 Dec 2023",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: "Click Here"
    },
    {
        srNo: 52,
        nameOfIndustryAddress: "Proposed Public hearing for Sand Ghats At Nagpur District, State Maharashtra for Public Hearing for 22 Sand Ghats Project Proponent District Mining Officer, Collector Office, Nagpur.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "03 Dec 2023",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: "Click Here"
    },
    {
        srNo: 53,
        nameOfIndustryAddress: "(Akola) Proposed project of Kurha-Vadhoda Islampur Lift Irrigation Scheme, UPSA Sinchan Yojna with CCA 32372 Ha at Village Rigaon, Tehsil- Muktainagar, District- Jalgaon, Maharashtra,",
        executiveSummaryCRZ: "Click Here",
        dateTime: "30 Nov 2023",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: "Click Here"
    },
    {
        srNo: 54,
        nameOfIndustryAddress: "proposed public hearing for Command Area Development Under LakdiNimbodi Lift Irrigation Schemes having 11154 Ha CCA, A/P Kumbhargaon, Taluka – Indapur, District – Pune, Proposed by Water Resources Management, Maharashtra, Irrigation Department (SLTAC-II) Ujjani Canal Division No. 8, Gurunanak Chowk, Solapur",
        executiveSummaryCRZ: "Click Here",
        dateTime: "03 Nov 2023",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: "Click Here"
    },
    {
        srNo: 55,
        nameOfIndustryAddress: "11-SAND GHATS OSMANABAD DISTRICT Tal-Parandar Aavarpimpri River Bed Sand Mine / Sand Ghat Khasra No: - Aavarpimpri:- 30,31,32,33,34,3,2,1,151,21,148,147,146,29,28, 27,4,12,11,13,14,15,16 Area (1.00 Ha) Village-Aavarpimpri, Tehsil-Paranda, District- Osmanabad.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "31 Oct 2023",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 56,
        nameOfIndustryAddress: "Mandivali Bauxite Block (ML Area 139.05 ha) with Bauxite production capacity 0.22 Million TPA along with installation of crusher with capacity of 200 TPH at Village- Mandivali, Tal-Dapoli, Dist-Ratnagiri, Maharashtra by Smt.Hanifa Haroon Fazlani, Potto Plaza, Panaji, Dist-North Goa, Goa.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "18 Oct 2023",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 57,
        nameOfIndustryAddress: "KANDRI MANGANESE MINE MINE LEASE AREA: 86.06 HECTARE LOCATION: - NEAR VILLAGE(s) – KANDARI, TEHSIL RAMTEK, DISTRICT NAGPUR, MAHARASHTRA by MOIL LIMITED",
        executiveSummaryCRZ: "Click Here",
        dateTime: "18 Oct 2023",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 58,
        nameOfIndustryAddress: "proposed PH for Proposed Sand Ghats of 1) Girna River at Utran A.H. Tal. Erandol, 2)Tapi River at Pimpri, Shiragad, Patharale, Thorgavan, Tal. Yawal 3) Tapi River at Jalod, Tal. Amalner, 4) Tapi River at Budhgaon, Tal. Chopda, 5) Tapi River at Nanded, and Girna River at Bambhori pra.Cha.Tal. Dharangaon, Dist. Jalgaon. Proposed by The Additional District Collector, Jalgaon., Maharashtra.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "17 Oct 2023",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 59,
        nameOfIndustryAddress: "Proposed Zendepar Iron Ore Mine (4.0 Ha) KH.No.82 Part (82/5), Zendepar, Tal-Korchi, Nandli, Maseli, Navargaon,Kotra, Botekasa,Bihatekal, Bedgaon, Jambhli, Aaswai Hudki Betkathi,Navezarai,Murkuti,belgoanid of Korchi taluka.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "10 Oct 2023",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: "Click Here"
    },
    {
        srNo: 60,
        nameOfIndustryAddress: "Environmental Impact Assessment For Proposed Zendepar Iron Ore Mining Project having Mine Lease Area of 8.0 Ha. by Shri. R. M. Rajurkar at Khasra No.: 82 Part (82/1) of Zendepar Village, Tahsil: Korchi, Dist.: Gadchiroli, Maharashtra by Shri. R. M. Rajurkar",
        executiveSummaryCRZ: "Click Here",
        dateTime: "10 Oct 2023",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 61,
        nameOfIndustryAddress: "Executive Summary of M/s. Shree Tuljabhavani Sugar Pvt. Ltd. Aadgaon Darade, Tal. Selu Dist. Parbhani.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "27 Sep 2023",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: "Click Here"
    },
    {
        srNo: 62,
        nameOfIndustryAddress: "PROPOSED 65 KPD MOLASSES AND SUGARCANE SYRUP/JUICE BASED DISTILLERY.. Proposed by M/S. SHRIPATI SUGAR & POWER LTD., at Tal. Jat, District Sangli, Maharashtra.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "27 Sep 2023",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 63,
        nameOfIndustryAddress: "Office order for Proposed Installation of Ferro-Alloys unit to manufacture 66,000 TPA (Ferro Manganese/Silico Manganese) by Installing 2x18 MVA SAF and Installation of Steel plant to manufacture 2000 TPD Billets by Installing 2x60 MT Induction Furnace, 1500 TPD Rolling Mill of TMT Bars/Round Bars/Wire Rods and 500 TPD Strip Rolling Mill of MS Sheets/MS Pipes/MS Flats/MS Angles/MS Square Bars/MS Channels/MS Beams/MS Plates project Location at Plot No. D-57, Phase-I, MIDC Jalna & Gat. No. 66, Village Daregaon, Tal & Dist. Jalna. Proposed by M/s. Paavan Steel-Tech Pvt. Ltd, Village Daregaon, Tal & Dist. Jalna, Maharashtra.",
        executiveSummaryCRZ: "EIA Summary",
        dateTime: "21 Sep 2023",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 64,
        nameOfIndustryAddress: "EXPANSION PROJECT OF SILICA SAND MINE AND CRUSHING, WASHING WITH PRODUCTION CAPACITY FROM 1,50,000 MTPA TO 4,50,551 MTPA By M/s, Kasarde Co operative Mining Society Limited AT SY. NO. 114, 116, 52, 23, 51, 84, 52 & 50, KASARDE VILLAGE, KANKAVALI TAHSIL, SINDHURDURG DISTRICT, M.S.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "28 Aug 2023",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: "Click Here"
    },
    {
        srNo: 65,
        nameOfIndustryAddress: "EXECUTIVE SUMMARY ON ENVIRONMENTAL IMPACT ASSESSMENT (EIA) REPORT Proposed New API & Intermediate Manufacturing Unit of M/s. Saroja Pharma Industries India Pvt. Ltd.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "08 Aug 2023",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 66,
        nameOfIndustryAddress: "Adani Power Maharashtra Limited (APML) applying to grant Environmental Clearance for Gondkhari Underground Coal mine (ML Area 862.00 Ha. and Production Capacity is 2.00 MTPA (rated capacity) / 3.0 MTPA (Peak Capacity).",
        executiveSummaryCRZ: "Click Here",
        dateTime: "13 July 2023",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 67,
        nameOfIndustryAddress: "Proposed Expansion Project for Production of MS Billets from 28,000 TPA to 72,600TPA and MS. Angle Channel, M.S. Flat, TMT Bars, M.S.Beam, T Angle, Pipe, Round Square, and Strips from 28,000 TPA to 70,000 TPA., Proposed by M/s. Gopal Ferrous Private Limited At Plot No. 92 - 104 Amgaon Industrial Area, Survey No. 114/2 L, 2 PT., Village – Amgaon, Tal – Talasari, District– Palghar, Maharashtra",
        executiveSummaryCRZ: "Click Here",
        dateTime: "10 July 2023",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: "Click Here"
    },
    {
        srNo: 68,
        nameOfIndustryAddress: "M/s. Lloyds Metals and Energy Ltd, Expansion of Project by Installation of 2x4.5MTPA Iron Ore Grinding Unit, 10MTPA Thickening & Filtration Unit & 2X4MTPA Iron Ore Pellet Plant at MIDC Konsari, Dist. Gadchiroli",
        executiveSummaryCRZ: "Click Here",
        dateTime: "07 July 2023",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: "Click Here"
    },
    {
        srNo: 69,
        nameOfIndustryAddress: "EXECUTIVE SUMMARY For Proposed installation of 2 x 40T Induction Furnace for production of 3,96,000 TPA M.S. Billets & Rolling Mill for 3,88,080 TPA TMT Bars by Hot Rolled Process & 1,06,920 TPA by Reheating Furnace At Plot No. A-8 & A-13, Phase-III, Additional MIDC Jalna, Taluka & District Jalna, Maharashtra Project Proponent Ved Steels & Alloys Private Limited",
        executiveSummaryCRZ: "Click Here",
        dateTime: "23 May 2023",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: "Click Here"
    },
    {
        srNo: 70,
        nameOfIndustryAddress: "Proposed Expansion of Krishna-Koyna Lift Irrigation Project, in districts Sangli and Solapur, Proposed by Executive Engineer Mhaisal Pump House Division No. 2, Sangli",
        executiveSummaryCRZ: "Click Here",
        dateTime: "17 May 2023",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 71,
        nameOfIndustryAddress: "EXECUTIVE SUMMARY OF DRAFT ENVIRONMENTAL IMPACT ASSESSMENT REPORT FOR Expansion of Integrated Cement Project (Clinker - 2.85 to 6.15 MTPA, Cement - 4.75 to 10 MTPA and WHR - 45 MW) by Installation of new Line-II Villages: Upparwahi & Kukkudsat (Taluka: Korpana) and Villages: Bhendvi & Hardona (Taluka: Rajura), District: Chandrapur, Maharashtra APPLICANT M/s. Ambuja Cements Limited (Unit: Maratha Cement Works)",
        executiveSummaryCRZ: "Click Here",
        dateTime: "04 May 2023",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: "Click Here"
    },
    {
        srNo: 72,
        nameOfIndustryAddress: "ENVIRONMENTAL IMPACT ASSESSMENT REPORT & ENVIRONMENTAL MANAGEMENT PLAN FOR PUBLIC HEARING OF Expansion in Limestone Production Capacity from 1.5 Million TPA to 3.5 Million TPA, Top Soil 0.13 Million TPA, Waste/OB/IB 2.26 Million TPA, Sub Grade 0.50 Million TPA (Total Excavation 6.39 Million TPA) and Proposed crusher of 1600 TPH in Maratha Limestone Mine, ML - I (ML Area - 579.90 ha) At Thutra and Lakhmapur (Tehsil: Korpana) and Hirapur, Isapur and Sonapur (Tehsil: Rajura), District-Chandrapur, State: Maharashtra Baseline Period Study period: Summer Season (March to May, 2021) by M/s Ambuja Cements Ltd.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "03 May 2023",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 73,
        nameOfIndustryAddress: "M/s. WCL Sasti Expansion Opencast Mines, WCL Ballarpur Area, Tal. Rajura, Dist. Chandrapur",
        executiveSummaryCRZ: "Click Here",
        dateTime: "16 Mar 2023",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: "Click Here"
    },
    {
        srNo: 74,
        nameOfIndustryAddress: "Public hearing for New nano Urea Fertilisers plant at RCF Ltd, Trombay, Mumbai",
        executiveSummaryCRZ: "Click Here",
        dateTime: "02 Mar 2023",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: "Click Here"
    },
    {
        srNo: 75,
        nameOfIndustryAddress: "PROPOSED MANUFACTURING OF FERRO ALLOYS BY THERMITE PROCESS Project Proponent B.B. Minerals and Metals At Plot No. SZ-4 & SZ-5, Butibori Industrial Area, Tehsil Hingna District Nagpur, State Maharashtra.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "17 Feb 2023",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 76,
        nameOfIndustryAddress: "Proposed Expansion of Integrated Sugar Complex By M/s. Twentyone Sugars Ltd (Unit II) At survey no. 407, Devinagar Tanda, Taluka- Sonpeth, Dist. Parbhani.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "15 Feb 2023",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: "Click Here"
    },
    {
        srNo: 77,
        nameOfIndustryAddress: "Guguldoh Manganese Ore Block (Lease Area: 105.0 Ha), Village – Guguldoh – Manegaon, Tehsil – Ramtek, District Nagpur, Maharashtra of M/s Shanti G.D. Ispat & Power Pvt. Ltd.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "14 Feb 2023",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 78,
        nameOfIndustryAddress: "2 Nos of Sand spots in Dhule Taluka",
        executiveSummaryCRZ: "Click Here",
        dateTime: "15 Dec 2022",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 79,
        nameOfIndustryAddress: "Fertilizer mfg unit (Pulgoan) proposed by M/s. BEC Fertilizer, Pulgaon, Dist. Wardha",
        executiveSummaryCRZ: "Click Here",
        dateTime: "07 Dec 2022",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 80,
        nameOfIndustryAddress: "Environmental Public Hearing For Expansion of Existing Steel Plant for Integrated Steel Plant with Iron Ore Beneficiation (3.36 MTPA), Pellets (3.205 MTPA), Sponge Iron (1.848 MTPA), Billets / MS Slab /MS Bloom (2.881 MTPA), TMT bars/Angles/Sheets/Pipes (2.8298 MTPA), Ferro Alloys (0.216 MTPA), Pig Iron (0.28875 MTPA) and Captive Power Generation (348 MW) along with a private siding At Plot Nos. A-24, A-25, A-30, A-31, D-14 and private land over an area of 123.077 Ha. Proposed by M/S GRACE INDUSTRIES LIMITED Tadali Growth center, chandrapur",
        executiveSummaryCRZ: "Click Here",
        dateTime: "17 Nov 2022",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 81,
        nameOfIndustryAddress: "25 sand ghats Public Hearing Project of Hingoli District (Area of sand ghats- 1-4.99 Ha) Proposed by District Mining Officer, Hingoli",
        executiveSummaryCRZ: "Click Here",
        dateTime: "17 Nov 2022",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 82,
        nameOfIndustryAddress: "Proposed Bhivdoni Quartz & Quartzite Mining Project, Bhivdoni Village, Taluka – Sauser, District – Chhindwara, MP Project Area 90.06 Ha, Peak Production Capacity 0.025 MTPA (Total Excavation), (Category ‘A’ Greenfield Project) Proposed by M/s. Flex Minerals, 117, Prashant Nagar, Near Masjid, Opposite Police Line, Takil Road, Nagpur Maharashtra.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "28 Oct 2022",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 83,
        nameOfIndustryAddress: "Enhancement of Production capacity by putting up Coating Line, Cast House, Cold Rolling Mill and Associated Machineries at Plot No. 2, MIDC, Taloja AV, Dist. Raigad.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "13 Oct 2022",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: "Click Here"
    },
    {
        srNo: 84,
        nameOfIndustryAddress: "Proposed expansion of manufacturing of M.S. Billets from 20,000 TPM (2,40,000 TPA) and TMT Bars from 20,000 TPM (2,40,000) TO M.S. Billets: 60,000 TPM (7,20,000 TPA) and TMT Bars/ Channels/ Angels/ Beam/ Structure/ Rod/Wire Rod: 60,000 TPM (7,20,000 TPA) Proponent M/s Guardian Casting Pvt Ltd, Gat. No. 57(pt),116,120, 135(pt), and Gat. No. 92/1 Abitghar, Tal. Wada & Dist. Palghar",
        executiveSummaryCRZ: "Click Here",
        dateTime: "12 Oct 2022",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: "Click Here"
    },
    {
        srNo: 85,
        nameOfIndustryAddress: "26 Sand Spots located in Parbhani, Manwat, Selu, Gangakhed, Puma, Sonpeth, Palem and Jintur Talukas in Parbhani District.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "30 Sep 2022",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 86,
        nameOfIndustryAddress: "Proposed 150 KLPD Sugar Syrup/ Molasses based Distillery Sr. No. 612, Village Matori, Tal. Shirur Kasar, Dist. Beed, Maharashtra Proposed by M/s. Mohatadevi Sugar Mills and Agro Limited",
        executiveSummaryCRZ: "Click Here",
        dateTime: "19 Sep 2022",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: "Click Here"
    },
    {
        srNo: 87,
        nameOfIndustryAddress: "Expansion of Mineral Ore Beneficiation at Kh. No. 307, Mouza Hardoli, Tahsil Tumsar, District Bhandara, Maharashtra, Proposed by M/s. Shri Sainath Manganese Processing & Trading.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "14 Sep 2022",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: "Click Here"
    },
    {
        srNo: 88,
        nameOfIndustryAddress: "Expansion of Ferro Alloy Plant by Installing 7.5 MVA of Submerged Arc Furnace and Manufacturing of Noble Ferro Alloys through Thermite Process with Sinter Plant PROJECT PROPONENT Balaji Electro Smelters Private Limited",
        executiveSummaryCRZ: "Click Here",
        dateTime: "25 July 2022",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 89,
        nameOfIndustryAddress: "M/s. Team Ferro Alloys Pvt. Ltd.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "24 June 2022",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: "Click Here"
    },
    {
        srNo: 90,
        nameOfIndustryAddress: "M/s. Wanjari Limestone Mine, At. Wanjari Tal. Wani, Dist. Yavatmal",
        executiveSummaryCRZ: "Click Here",
        dateTime: "19 May 2022",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: "Click Here"
    },
    {
        srNo: 91,
        nameOfIndustryAddress: "M/s. Gauri Pauni OC mine WCL Ballarpur Area",
        executiveSummaryCRZ: "Click Here",
        dateTime: "05 May 2022",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: "Click Here"
    },
    {
        srNo: 92,
        nameOfIndustryAddress: "M/s MOIL Limited formerly Manganese Ore (India) Ltd. (Proposed Installation of Silico-Manganese Plant (25000TPA) Through Setting up of 1 x 18 MVA Submerged Arc Furnace Near Gumgaon Mines, Vill – Ranjhana, Khapa; Dist.Nagpur; Maharashtra)",
        executiveSummaryCRZ: "Click Here",
        dateTime: "11 Mar 2022",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: "Click Here"
    },
    {
        srNo: 93,
        nameOfIndustryAddress: "Proposed SSP/Fortified (Zincated/Boronated) SSP, GSSP/Fortified (Zincated/Boronated),GSSP and Mixed Fertilizer (NPK/PROM) Manufacturing Plant at Mouza, Marajghat, Nagpur, Maharashtra by M/s The Vidarbha Co-operative Marketing Federation Limited, Nagpur (VCMF)",
        executiveSummaryCRZ: "Click Here",
        dateTime: "09 Mar 2022",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: "Click Here"
    },
    {
        srNo: 94,
        nameOfIndustryAddress: "Environmental Public hearing for proposed 10 Nosof sand beltsat Tal-wasi, Tal-Paranda and Tal-Kallamb, Proposed by District Mining officer, Collector office, Osmanabad.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "31 Jan 2022",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: "Click Here"
    },
    {
        srNo: 95,
        nameOfIndustryAddress: "Shri Siddik M Hafizi CA to Owner (M/s. Hi-Tech City Hafizi Developers) “Pramilanagar Co.op. Housing Society Ltd.” (Wing A and B) on Plot Bearing C.T.S. No. 48/A (Pt) of Village Dahisar, at Dahisar (W), Mumbai. Pin 400103",
        executiveSummaryCRZ: "Click Here",
        dateTime: "18 Jan 2022",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 96,
        nameOfIndustryAddress: "M/s. Krish Construction , Plot No.09., Union Park Pali Hill Road No.3, Village Bandra (West), Mumbai",
        executiveSummaryCRZ: "Click Here",
        dateTime: "11 Jan 2022",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 97,
        nameOfIndustryAddress: "New Laxmi co-operative housing society limited plot no. 707, 21st road, khar west, mumbai-400025",
        executiveSummaryCRZ: "Click Here",
        dateTime: "11 Jan 2022",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 98,
        nameOfIndustryAddress: "15 Nos of Sand belts in the Hingoli District. Proposed by M/s. District Mining officer, Collector office Hingoli.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "05 Jan 2022",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: "Click Here"
    },
    {
        srNo: 99,
        nameOfIndustryAddress: "39 Sand Mining of Wardha district",
        executiveSummaryCRZ: "Click Here",
        dateTime: "03 Jan 2022",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 100,
        nameOfIndustryAddress: "25 Sand Ghats of Buldhana District",
        executiveSummaryCRZ: "Click Here",
        dateTime: "16 Dec 2021",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 101,
        nameOfIndustryAddress: "5 Sand Spots located in Malegaon, Kalwan Talukas in Nashik District.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "30 Nov 2021",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 102,
        nameOfIndustryAddress: "M/s. Reface Buildcon LLP “Mayura Co.op. Housing Society” on Plot Bearing C.T.S. No. 305/6, Govind Pariyani Lane, Valnai Village, Marve Road , Malad (West), Mumbai-400 064M/s. Reface Buildcon LLP “Mayura Co.op. Housing Society” on Plot Bearing C.T.S. No. 305/6, Govind Pariyani Lane, Valnai Village, Marve Road , Malad (West), Mumbai-400 064",
        executiveSummaryCRZ: "Click Here",
        dateTime: "30 Nov 2021",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 103,
        nameOfIndustryAddress: "M/s. Dinanath Allied Steel Manufacturing Pvt. Ltd. Plot No B-3/1, Mul MIDC,Mul, District Chandrapur",
        executiveSummaryCRZ: "Click Here",
        dateTime: "30 Nov 2021",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: "Click Here"
    },
    {
        srNo: 104,
        nameOfIndustryAddress: "4 Sand spots of Sakri, Shirpur and Dhule Talukas, Dhule District, Maharashtra",
        executiveSummaryCRZ: "Click Here",
        dateTime: "26 Nov 2021",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 105,
        nameOfIndustryAddress: "29 sand ghats Executive summary for Environment management plan of Amravati District Sand Ghats (Area of sand ghats- 0-5 Ha)",
        executiveSummaryCRZ: "Click Here",
        dateTime: "23 Nov 2021",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 106,
        nameOfIndustryAddress: "Pune Ring Road, Eastern Alignment (Part 2)– 66.560 km Start from Solu Village and Ends at Varve (Kelawade)village",
        executiveSummaryCRZ: "Click Here",
        dateTime: "17 Nov 2021",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: "Click Here"
    },
    {
        srNo: 107,
        nameOfIndustryAddress: "85 Nos. of Sand Belts for Nanded District",
        executiveSummaryCRZ: "Click Here",
        dateTime: "16 Nov 2021",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 108,
        nameOfIndustryAddress: "12 sand spot Ahmednagar District, Maharashtra",
        executiveSummaryCRZ: "Click Here",
        dateTime: "09 Nov 2021",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 109,
        nameOfIndustryAddress: "Proposed New Specialty Chemicals Manufacturing Plant with Total production capacity of 72,740 MTPA at Mawal Taluka, Dist-Pune (M/s.Elantas Beck India Ltd)",
        executiveSummaryCRZ: "Click Here",
        dateTime: "28 Oct 2021",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 110,
        nameOfIndustryAddress: "Proposed public hearing for proposed expansion of sugar and cogeneration power plant manufacturing activity, Proposed by f M/s.Baramati Agro Limited unit-3 (BAL U-3). at Gat Nos: 192, 267, 275, 276, 277, 278 and 279 Halgaon, Taluka Jamkhed, District Ahmednagar (New Name Ahilyanagar), Maharashtra.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 111,
        nameOfIndustryAddress: "Singardip (Rithi) Stone & Murrum Quarry Project having Mine Lease Area: 1.12 Ha. Proposed Production of Stone & Murrum is 95,088 TPA Project Cost: 64.33 Lakh located at Gut No.: 137/3 (Part), Village: Singardip (Rithi), Tehsil: Hingna,Nagpur, Proposed by M/s. Jagruteshwar Metals Pvt. Ltd. through Shri Rakesh Omprakash Hemrajani Address: Singardip (Rithi), Post + Tehsil: Hingna, Dist. Nagpur,",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 112,
        nameOfIndustryAddress: "public hearing for Expansion of Sugar Factory from 7,500 TCD to 13,500 TCD & Distillery Unit from 150 KLPD to 220 KLPD by using C/B heavy Molasses/ Cane Juice/ Cane Syrup along with Power Generation from 1.9 MW to 3 MW by Jaywant Sugars Ltd",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 113,
        nameOfIndustryAddress: "Public hearing for proposed pilot project for manufacturing of 1 KLD Potable Ethanol at Plot No.A-13/1, MIDC industrial Area. Gadchiroli, State Maharashtra-442605 Proposed by M/s. LTB Beverages",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 114,
        nameOfIndustryAddress: "Expansion of Synthetic Organic Chemicals Manufacturing Unit from Existing 700 TPM Production Capacity to Total 7000 TPM Production Capacity and Unsaturated Polyester Resin (by mixing & blending) capacity of 1565 TPM, Proposed by M/s. Orson Resins and Coatings Private Limited Address - Gut No. 398/1&2, 459/1, At/Post: Dinkarpada, Kudus, Taluka - Wada, District-Palghar.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 115,
        nameOfIndustryAddress: "Marki Mangli IV Coal Mine, Villages Hirapur, Mangli & Bhendala, Tehsil – Jhari Jamni, Yavatmal for Mining lease area: 201.69 Ha (Non-Forest) Proposed Production: 0.2 MTPA Coal, proposed by M/s Sobhagya Mercantile Limited (SML) B-61, Floor 6, Plot No.210, B-Wing, Mittal Tower, Free Press Journal Marg, Nariman Point, Mumbai.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 116,
        nameOfIndustryAddress: "Kolgaon Expansion (Deep) open cast Mine, Wani Area WCL, Wani Tehsil Yavatmal for increase in production capacity from 0.60 MTPA to 0.80 MTPA and increse in project area from 397.25 Ja 1520.60 Ha-reg. You are requested the upload the executive summary in English and Marathi on MPCB (web-site) public hearing.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 117,
        nameOfIndustryAddress: "Proposed Singardip (Rithi) Stone & Murrum Quarry Project having Mine Lease Area: 1.50 Ha. Proposed Production of Stone & Murrum is 67,920 TPA,Gut No.: 65 (Part), Village: Singardip (Rithi), Hingna,Nagpur, Shri. Rahul Yogendra Pandit, Nagpur",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 118,
        nameOfIndustryAddress: "Proposed Public hearing for Proposed Singardip (Rithi) Stone & Murrum Quarry Project having Mine Lease Area: 4.06 Ha. Proposed Production of Stone & Murrum is 3,39,600 TPA, Survey/Gut No.: 71 (Part), Land type: Private Land, Village: Singardip (Rithi), Hingna, Nagpur. Proposed by M/s. Ramdev Stone Crusher Pvt. Ltd.,Nagpur.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 119,
        nameOfIndustryAddress: "Proposed Singardip (Rithi) Stone & Murrum Quarry Project having Mine Lease Area: 2.00 Ha. Proposed Production of Stone & Murrum is 4,07,520 TPA.Gut No.: 68 (Part), Village: Singardip (Rithi), Hingna, Nagpur. Shri. Sayyaparaju Rakesh Varma Sayyaparaju Appala Narasimha Raju & Shri Nadella Venkata Rajesh Nadella Ramesh Babu, Aparna County, Near State Bank of India, Miyapur, Hyderabad, Telangana",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 120,
        nameOfIndustryAddress: "Proposed Singardip (Rithi) Stone & Murrum Quarry Project having Mine Lease Area: 2.82 Ha. Proposed Production of Stone & Murrum is 1,94,793 TPA, Survey/Gut No.: 24/1 (Part), Land type: Private Land, Village: Singardip (Rithi), Tehsil: Hingna, Nagpur, Proposed by Shri. Satish Rushiraj Hiranwar & Shri. Tarun Rushiraj Hiranwar, Nagpur.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 121,
        nameOfIndustryAddress: "proposed public hearing for Proposed Singardip (Rithi) Stone & Murrum Quarry Project having Mine Lease Area: 2.30 Ha. Proposed Production of Stone & Murrum is 2,03,760 TPA, located atGut No.: 73 (Part), Village: Singardip (Rithi), Tehsil: Hingna, Dist.: Nagpur.Proposed by Smt. Arti Anand Chandak & Smt. Jaya Sumit Khedkar Office Address: “C.A. Road, Sevasadan Square, Mahatma Fule Bazar, Nagpur, 440018, Nagpur.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 122,
        nameOfIndustryAddress: "Sugar unit from 4750 TCD to 7500 TCD of M/s. Vikasratna Vilasrao Deshmukh Manjara Shetkari SSK ltd,Vilasnagar, Chincholirao wadi,Tal & Dist-Latur.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 123,
        nameOfIndustryAddress: "18 Sand Ghats of Yavatmal District Proposed by District Mining Officer, Mining Department, Yavatmal",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 124,
        nameOfIndustryAddress: "M/s. Sobhagya Mercantile Limited (SML), B-61, floor 6, Plot No.210, B-Wing, Mittal Tower, Nariman Point, Mumbai, for proposed project for Marki Mangli IV Coal Mine, Village-Hirapur, Mangli & Bhendala, Tehsil-Jhari Jamni, District-Yavatmal, Maharashtra.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 125,
        nameOfIndustryAddress: "Integrated solid waste management project at Atkoli Village Thane, Proposed by Thane Municipal Corporation. You are requested to upload the same on Board web-site",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 126,
        nameOfIndustryAddress: "PROPOSED 3 KLPD MAHUA FLOWER BASED HERITAGE LIQUOR MANUFACTURING UNIT & BOTTLING PLANT AT S. NO. 8/1, 8/2 & 8/5, VILLAGE-AMBIVALI T. KOTALKHALATI, TAL. KARJAT, DIST. RAIGAD, STATE MAHARASHTRA BY M/S. MOWA DISTILLERIES PVT. LTD. (MDPL),AT S. NO. 8/1, 8/2 & 8/5, VILLAGE- AMBIVALI T. KOTALKHALATI, TAL. KARJAT, DIST. RAIGAD, STATE MAHARASHTRA.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 127,
        nameOfIndustryAddress: "Expansion of Sugar Factory from 5,500 to 9,000 TCD & Co-generation Plant from 32 to 39 MW Gangamai Industries And Constructions Ltd., (GIACL) located at Harinagar, Najik Babhulgaon, Post: Rakshi, Tal.: Shevgaon, Dist.: Ahmednagar.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 128,
        nameOfIndustryAddress: "Proposed Expansion of Dharamtar Jetty Facility (Phase-III) in village Dolvi of District Raigad, Maharashtra, Proposed by JSW Dharamtar Port Private Limited JSW Centre, Bandra Kurla Complex (BKC), Bandra East, Mumbai - 400051.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 129,
        nameOfIndustryAddress: "Intergated steel plant capacity from 10 MTPA to 15 MTPA at village Dolvi, Raigad District. Proposed by JSW Steel Limited, Dolvi Works, Dolvi, Raigad.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 130,
        nameOfIndustryAddress: "PROPOSED GREENFIELD PROJECT OF STANDALONE GRINDING UNIT WITH CEMENT PRODUCTION CAPACITY OF 6 MMTPA (2 X 3 MMTPA) Located at VILLAGE- BORNAR, TALUKA & DISTRICT-JALGAON, MAHARASHTRA- 425116. Proposed by M/s. AMBUJA CONCRETE NORTH PRIVATE LIMITED ADANI CORPORATE HOUSE, SHANTIGRAM, KHODIYAR, SG HIGHWAY, AHMEDABAD - 382421 (GUJARAT)",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 131,
        nameOfIndustryAddress: "Proposed public hearing for proposed by M/s. Kumbhi–Kasari Sahakari Sakhar Karkhana Ltd., (KKSSKL). for proposed crushing capacity from 5000 TCD to 10,000 TCD, cogeneration 19.5 MW to 30 MW and distillery 30 KLPD to 100 KLPD. This is brown field project",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 132,
        nameOfIndustryAddress: "Nagpur-Gondia Access controlled express way (Nagpur District Component)",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: "Click Here"
    },
    {
        srNo: 133,
        nameOfIndustryAddress: "M/s. AMBUJA CONCRETE NORTH PRIVATE LIMITED ADANI CORPORATE HOUSE, SHANTIGRAM, KHODIYAR, SG HIGHWAY, AHMEDABAD - 382421 (GUJARAT)",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 134,
        nameOfIndustryAddress: "Kumbhi Kasari Sahakari Sakhar Karkhana Ltd. Kuditre, Kolhapur.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 135,
        nameOfIndustryAddress: "proposed public hearing for expansion of Distillery (45 KLPD to 700 KLPD) by New Installation of 655 KLPD Multi Feedstock",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 136,
        nameOfIndustryAddress: "Environmental public hearing to be conducted for Proposed Greenfield Project of standalone Grinding unit with cement production capacity of 6 MMTPA (2 x 3 MMTPA)” at Village – Malkhed & Udkhed, Taluka – Chandur Railway & Amravati, District- Amravati",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: "Click Here"
    },
    {
        srNo: 137,
        nameOfIndustryAddress: "Executive Summary on Environmental Impact Assessment Report Of Greta Energy Limited",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 138,
        nameOfIndustryAddress: "PROPOSED EXPANSION OF SUGAR PLANT FROM 3500 TCD TO 10000 TCD & COGENERATION POWER PLANT FROM 15MW TO 40MW AT KANADKHED, TAL. PURNA, DIST. PARBHANI, MAHARASHTRA BY M/S. BALIRAJA SAKHAR KARKHANA LIMITED",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 139,
        nameOfIndustryAddress: "Establishment of 1.6 MTPA Beneficiation Plant, 1.2 MTPA Pellet Plant and Sponge Iron plant of 8x350 TPD, along with the installation of Induction Furnace 0.75 MTPA & Rolling Mill of 0.75 MTPA and Captive Power Plant of 120 MW",
        executiveSummaryCRZ: "EIA Summary",
        dateTime: "",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 140,
        nameOfIndustryAddress: "Setting up 70KLPD Malt Distillery and Malt Spirit Maturation plant along with 6MW Cogeneration power plant",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 141,
        nameOfIndustryAddress: "Proposed Expansion for Manufacturing of 1,000 Tonne Per Month of Manganese Oxide At Plot No. J-34, MIDC Hingna, Tehsil-Hingna, District-Nagpur, Maharashtra",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 142,
        nameOfIndustryAddress: "Proposed Manufacturing of 2,500TPM of Manganese Oxide (Greenfield Project) At Plot No. D-50, MIDC Butibori, Tehsil-Hingna, District -Nagpur, Maharashtra",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 143,
        nameOfIndustryAddress: "Expansion of Dharamtar Jetty Facility (Phase-III) in village Dolvi of District Raigad.. Proposed by JSW Dharamtar Port Private Limited, JSW Centre, Bandra Kurla Complex (BKC), Bandra East, Mumbai.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 144,
        nameOfIndustryAddress: "Expansion of Integrated Steel Plant Capacity from 10 MTPA to 15 MTPA at Village Dolvi, Raigad District Maharashtra., Proposed by JSW Steel Ltd, (JSWSL) at Dolvi.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 145,
        nameOfIndustryAddress: "Public hearing of 67 Sand spots located in Nanded District proposed by District mining officer, Collector office Nanded.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 146,
        nameOfIndustryAddress: "Proposed public hearing of M/s. Shree Malhar Minerals for proposed project area-7.54 Ha, Mining lease area-7.12 ha, approach road 0.40.. at Gat No.223 (P) of village parli Tal-Shahuwadi, dist-Kolhapur.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 147,
        nameOfIndustryAddress: "EXPANSION OF IRON ORE PRODUCTION CAPACITY FROM 10 MTPA TO 26 MTPA HEMATITE, 45 MTPA BHQ, 5 MTPA WASTE (TOTAL EXCAVATION: 60.0 MTPA) ALONG WITH CRUSHING AND SCREENING PLANT VILLAGE SURJAGARH TEHSIL ETAPALLI GADCHIROLI DISTRICT, MAHARASHTRA. Proposed by M/s.LLOYDS METALS AND ENERGY LIMITED.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 148,
        nameOfIndustryAddress: "Public hearing for proposed Greenfield 3x15 (45) MTPA Low Grade Iron Ore /BHQ Beneficiation Plant at Survey Nos. 10, 12, 79, 84, 17-18, 56-79, 101, 182-203, 205 & 217, Villages Bande (m), Hedri and Pursalgundi (s), Tehsil Etapalli, Gadchiroli District, Maharashtra, Proposed by M/s Lloyd Metals and Energy Limited",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 149,
        nameOfIndustryAddress: "Public hearing for proposed EXPANSION OF SUGAR FACTORY FROM 5,500 TO 9,000 TCD & CO-GENERATION PLANT FROM 32 TO 39 MW BY AT: HARINAGAR, NAJIK BABHULGAON, POST: RAKSHI, TAL.: SHEVGAON, DIST.: AHMEDNAGAR, MAHARASHTRA STATE GANGAMAI INDUSTRIES AND CONSTRUCTIONS LTD.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 150,
        nameOfIndustryAddress: "Public Hearing for Kumbhi-Kasari, SSK, Tal-Karvir, Dist-Kolhapur",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 151,
        nameOfIndustryAddress: "Proposed 15 Ghats in the Akola District, Proposed by District Mining Officer, Collector Office, Akola. Maharashtra.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 152,
        nameOfIndustryAddress: "Proposed public hearing for SAKHARI BAUXITE ORE MINE ML Area : 62.77 Ha. Sakhari -village of Mandangad Taluka, Ratnagiri - District, Maharashtra State, proposed by M/s. Ashapura Minechem Ltd.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 153,
        nameOfIndustryAddress: "proposed Expansion of Secondary Metallurgical Processing Unit to produce Aluminum Ingots from 60,000 TPA to 2,47,000 TPA, Aluminum Extrusion from 12,000 TPA to 50,000 TPA along with Alloy Corrugated Product for 1,35,000 TPA from 1,95,000 TPA Aluminum Billet, Copper Ingots from 4,000 TPA to 5,950 TPA, Steel Forging from 8,100 TPA to 1,00,000 TPA with addition of Aluminum Cables of 50,000 TPA, Aluminum Flats of 50,000 TPA , Aluminum Strip Cast of 50,000 TPA, Ferro alloys production for 72,000 TPA & Hot Rolled Steel Products of 95,000 TPA, by installing 2x 30 T Induction Furnace (IF) , 8x10 MT Re-melting Furnaces, 4x10 MT Holding Furnaces along with LRF, CCMs, Extrusion / Anodizing Chamber, 2 x 0.5 T Crucible Furnace & 2x18 MVA SAF. Proposed by M/s. Varron Autokast Limited Survey No. 174, 175, 176/1, 176/2, 185, 186/2,188, 189, 191, 196, 201/2, 201/3 & 201/5, Vill. Chimnazari, Taluka & District Nagpur. Maharashtra.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 154,
        nameOfIndustryAddress: "M/s. Rajuri Steels & Alloys Pvt. Ltd., Plot No. A-29, MIDC Mul, Tal. Mul, Dist. Chandrapur.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 155,
        nameOfIndustryAddress: "M/s. Rajuri Steels & Alloys Pvt. Ltd. Plot No. A-29, MIDC Mul, Tal. Mul, Dist. Chandrapur",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 156,
        nameOfIndustryAddress: "M/s. Rajuri Steels & Alloys Pvt. Ltd. Plot No. B-6,7,8, MIDC Mul, Tal. Mul, Dist. Chandrapur",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 157,
        nameOfIndustryAddress: "Public hearing for M/s. G.R.Krishna Ferro Alloys Pvt. Ltd., Plot No. B-4, MIDC Mul, Tal. Mul, Dist. Chandrapur.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 158,
        nameOfIndustryAddress: "Public hearing of NHAI dhrashiv",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 159,
        nameOfIndustryAddress: "Proposed installation of 2x350 TPD DRI plant for the production of 2,31,000 TPA of Sponge Iron, 2 x 40T of Induction Furnace along with CCM for production of 2,64,000 TPA of Billets and Rolling Mill for the production of 2,64,000 TPA TMT bars and 32 MW of AFBC, 19 MW of WHRB Project Proposed by M/s Dinanath Allied Steel Manufacturing Private Limited At Plot No. B-3 MIDC Mul, District Chandrapur, Maharashtra.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 160,
        nameOfIndustryAddress: "SAND GHATS at SOLAPUR DISTRICT, for 13 SAND GHATS PROJECT , proposed by District MINING OFFICER, COLLECTOR OFFICE, SOLAPUR.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 161,
        nameOfIndustryAddress: "Proposed expansion of the existing Sponge Iron Plant from 33.000 TPA to 3,96,000 TPA and establishment of 29 MW WHRB based power plant and 54 MW Coal Based Power Plant Project by M/s Rajuri Steels & Alloys India Pvt. Ltd. At Plot B-6, 7 & 8, MIDC, Mul Growth Centre, District – Chandrapur, Maharashtra.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 162,
        nameOfIndustryAddress: "Jawaharlal Nehru Port Authority, Navi Mumbai",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: "Click Here"
    },
    {
        srNo: 163,
        nameOfIndustryAddress: "ESTABLISHMENT OF COMMON BIOMEDICAL WASTE TREATMENT & DISPOSAL FACILITY (CBWTF) BY SATYAJEET ENVIRO SOLUTIONS,GAT NO. 65/2A/1, VELAPUR, VELAPUR - SANGOLA ROAD, TAL.: MALSHIRAS, DIST.: SOLAPUR, MAHARASHTRA.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 164,
        nameOfIndustryAddress: "Jawaharlal Nehru Port Authority, Navi Mumbai",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: "Click Here"
    },
    {
        srNo: 165,
        nameOfIndustryAddress: "Regularization and Expansion of manufacturing capacity through Rolling Mill from 3,96,000 TPA to 4,50,000 TPA and Expansion of Manufacturing of M.S. Billets through Induction Furnace from 2,00,000 to 3,00,000 TPA by Sanvijay Rolling & Engineering Ltd. At Plot.B-202 to 206 MIDC Butibori, Tahsil– Hingna, District– Nagpur, Proposed by M/s Sanvijay Rolling & Engineering Ltd, Nagpur.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 166,
        nameOfIndustryAddress: "PROPOSED PRODUCTION OF 9998.0 METRIC TON / YEAR HIGHLY PURE ESTERS DERIVED FROM A COMBINATION OF FATTY ACIDS & FATTY ALCOHOLS OF VEGETABLE OILS , Proposed by M/S. JORINCO SPECIALITIES PRIVATE LIMITED (JSPL) at GAT NO. 351/1, BHARE, NEXT TO INDUS BIOTECH PVT. LTD., TEHSIL: MULSHI, DISTRICT: PUNE.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 167,
        nameOfIndustryAddress: "Swami Samarth Sahakari Sakhar Karkhana Limited (SSSSKL)",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 168,
        nameOfIndustryAddress: "BHIVKUND COAL MINE (UNDERGROUND MINING METHOD) (CAPACITY: RATED: 0.72 MILLION TONNES PER ANNUM, PEAK: 1.08 MILLION TONNES PER ANNUM, ML AREA: 802.00 HECTARE) AT VILLAGES VISAPUR AND NANDGAONPODE AND URBAN AREA OF BALLARPUR, TEHSIL BALLARPUR, DISTRICT CHANDRAPUR BY SUNFLAG IRON & STEEL COMPANY LTD. 33 Mount Road, Sadar, Nagpur, Maharashtra.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 169,
        nameOfIndustryAddress: "11 District Level Sand Spots, Osmanabad District.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 170,
        nameOfIndustryAddress: "Proposed Expansion of SS Round/ Square/ Rectangle/Bars/Flat/Patti, Billets, Hexagonal, Angle, RCS, Bloom, Slabs, Alloy Ingot/Nickel Alloy by M/s Skytech Rolling Mill Pvt. Ltd. located at survey no. 473,479,481, Village -Usar Tehsil Wada, District Palghar.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 171,
        nameOfIndustryAddress: "M/s. Skytech Rolling Mills Pvt. Ltd.",
        executiveSummaryCRZ: "EIA Summary",
        dateTime: "",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 172,
        nameOfIndustryAddress: "PROPOSED ESTABLISHMENT OF 200 KLPD MULTIFEED DISTILLERY TO MANUFACTURE RECTIFIED SPIRIT/EXTRA NEUTRAL ALCOHOL/ETHANOL. Proposed by M/s. SANT MUKTAI SUGAR AND ENERGY LIMITED AT GHODASGAON, TALUKA MUKTAINAGAR, DISTRICT JALGAON, MAHARASHTRA.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 173,
        nameOfIndustryAddress: "PROPOSED FERTILIZER MANUFACTURING Plant at Plot No. A93/2 of Kurkumbh MIDC Industrial Area & Gut No. 280 of Village Kurkumbh , Taluka-Daund, District-Pune, by M/s RK Agro Industries",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 174,
        nameOfIndustryAddress: "Executive Summary of Draft Environmental Impact Assessment for M/s. Vasudha Alloys Pvt. Ltd., Expansion of Rolling Mill for Production of TMT Bars from 5,000 MTM to 30,000 MTM and New MS Billets Manufacturing Unit of Proposed Capacity 30,000 MTM at Gut No. 86, Village: Khadgaon, Taluka: Badnapur, District: Jalna, Maharashtra.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 175,
        nameOfIndustryAddress: "Proposed Steel Manufacturing Industry at Plot No. E-14 (MIDC, Butibori) and Survey No. 67 and 70/B, Mouza, Kinhi, Butibori, District Nagpur, State- Maharashtra. Proposed By Sharda Shree Ispat Ltd",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 176,
        nameOfIndustryAddress: "MARKAGONDI LATERITE MINE AT VILLAGE MARKAGONDI, TEHSIL JIWATI, DISTRICT CHANDRAPUR, STATE MAHARASHTRA LEASE AREA OF 54.25 HA PRODUCTION QUANTITY: 7,00,000 TPA. Proposed by M/s. Ultratech Cement Limited Unit – Manikgarh Cement Works, Post – Gadchandur, Tehsil – Korpana, District – Chandrapur, Maharashtra",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 177,
        nameOfIndustryAddress: "PROPOSED EXPANSION OF SUGAR UNIT FROM 2500 TCD TO 4800 TCD, COGENERATION 18 MW AND 150 KLPD MULTIFEED DISTILLERY PLANT BASED ON CMOLASSES/ B- HEAVY MOLASSES/ SYRUP AND GRAIN AS RAW MATERIAL AT AMBULGA (BK), TAL; NILANGA, DIST LATUR MAHARASHTRA",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 178,
        nameOfIndustryAddress: "Integrated Solid Waste Management Facility by Naded Waghala City Municipal Corporation (NWCMC)",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 179,
        nameOfIndustryAddress: "Proposed EXPANSION OF Installation of 2 x 1000 TPD Iron ore Pellet Plant along with coal Gasifier of 26000 M3/hr, 2 x 500 TPD Sponge Iron plant and 50 MW CPP (25 MW WHRB + 25 MW AFBC) At Plot No:-, B-1/2, B-1/3, B-1/4, R2 and R3 MIDC Deoli and Survey no.:- SR- 46/2, 562, 564, 565, Deoli, District –Wardha. Proposed by M/s. SMW Ispat Pvt. Ltd, District –Wardha, Maharashtra.",
        executiveSummaryCRZ: "EIA Summary",
        dateTime: "",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 180,
        nameOfIndustryAddress: "Proposed Manufacturing of Castor Oil Derivatives (Production Quantity: 363 MT/M), proposed by M/s. Panchaganga Industries Private Limited Gut No. 352, Talegaon (Dindori), Taluka: Dindori, District: Nashik, Pincode - 422004, Maharashtra, India",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 181,
        nameOfIndustryAddress: "M/s. Bhagyalaxmi Metals Pvt. Ltd., proposed to establish a steel plant at Plot No: B-1, Mul Growth Center Mul Village & Tehsil, Chandrapur District, Maharashtra.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 182,
        nameOfIndustryAddress: "Proposed Expansion Project for Production of MS Billets from 28,000 TPA to 72,600TPA and MS. Angle Channel, M.S. Flat, TMT Bars, M.S.Beam, T Angle, Pipe, Round Square, and Strips from 28,000 TPA to 70,000 TPA Project Proponent M/s. Gopal Ferrous Private Limited",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 183,
        nameOfIndustryAddress: "Proposed EXPANSION IN PRODUCTION OF QUARTZITE MINERALS FROM 9000 TPA TO 84916 TPA (EXISTING PRODUCTION OF KYANITE, SILLIMANITE, CORRUNDUM AND PYROPHILLITE 4000 TPA AND QUARTZITE 9000 TPA), 14.33 HECTARES AT KHASARA NO. 155, DIGHORI VILLAGE, TAHSIL LAKHANDUR, DISTRICT BHANDARA, M.S, Proposed by M/S. DIGHORI KYANITE MINE Shri P. M Golchha Civil Lines, Nagpur, Maharashtra.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 184,
        nameOfIndustryAddress: "M/s. Marki Mangli Coal Block-II, Village Savli, Mukutban, Pardi & Ruikot, Tal. Zarijamni, Dist. Yavatmal ML area 339.467 Ha.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: "Click Here"
    },
    {
        srNo: 185,
        nameOfIndustryAddress: "M/s. Ambuja Cement Ltd. Limestone Mines, Vill. Thutra, & Lakhamapur of Tal. Korpana and Vill. Hirapur, Isapur & Sonapur of Tal.Rajura, Dist. Chandrapur",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: "Click Here"
    },
    {
        srNo: 186,
        nameOfIndustryAddress: "M/s. Ambuja Cement Ltd., (Unit Maratha Cement Works), Tal. Korpana, Dist. Chandrapur",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: "Click Here"
    },
    {
        srNo: 187,
        nameOfIndustryAddress: "Establishment of 200 KLPD Molasses (B & C heavy)/Grain/ Cane Juice/Syrup Based Distillery Unit with 5MW CPP. Proposed by M/s. Flagship Sugar Industries Pvt. Ltd. Dagadwadi (Panchincholi), Tal. Nilanga, Dist. Latur, Maharashtra",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 188,
        nameOfIndustryAddress: "Expansion of Project by Installation of 2 x 4.5 MTPA Iron Ore Grinding Unit, 10 MTPA Thickening & Filtration Unit and 2 X 4 MTPA Iron Ore Pellet Plant. Proposed by M/s. Lloyds Metals and Energy Limited., MIDC Konsari, Village: Konsari, Tahsil: Chamorshi, Dist: Gadchiroli, Maharashtra",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 189,
        nameOfIndustryAddress: "2 X 660 MW COAL BASED SUPERCRITICAL THERMAL POWER PLANT PROJECT PROPONENT MAHAGENCO MAHARASHTRA STATE POWER GENERATION COMPANY LIMITED",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 190,
        nameOfIndustryAddress: "2 X 660 MW COAL BASED SUPERCRITICAL THERMAL POWER PLANT PROJECT PROPONENT MAHAGENCO",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 191,
        nameOfIndustryAddress: "Environmental Impact Assessment For Proposed Zendepar Iron Ore Mining Project having Mine Lease Area of 12.0 Ha. by M/s. Anoj Kumar Agarwala at Khasra No.: 82 Part (82/4) of Zendepar Village, Tahsil: Korchi, Dist.: Gadchiroli, Maharashtra by M/s. Anoj Kumar Agarwala",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 192,
        nameOfIndustryAddress: "ENVIRONMENTAL IMPACT ASSESSMENT & ENVIRONMENTAL MANAGEMENT PLAN FOR Conducting Public Consultation AS PER EIA NOTIFICATION, 2006 OF BHATADI EXPANSION OC MINE (2.0MTPA) (CHANDRAPUR AREA, WCL) For Expansion in Production Capacity from 1.465 MTPA to 2.0 MTPA With increase in Mine Lease Area from 847.37 ha to 1423.75 ha (PREPARED AS PER TOR J-11015/151/2014-IA-II (M) dated 02.06.2021)",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 193,
        nameOfIndustryAddress: "Proposed Zendepar Iron Ore Mining Project having Mine Lease Area of 4.0 Ha. by Shri. Manoj Kumar Ajitsaria at Khasra No.: 82 Part (82/5) of Zendepar Village, Tahsil: Korchi, Dist.: Gadchiroli, Maharashtra by Shri. Manoj Kumar Ajitsaria",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 194,
        nameOfIndustryAddress: "Environmental Impact Assessment For Proposed Zendepar Iron Ore Mining Project having Mine Lease Area of 10.37 Ha. by Shri. Nirmal Chand Jain at Khasra No.: 82 Part (82/3) of Zendepar Village, Tahsil: Korchi, Dist.: Gadchiroli, Maharashtra by Shri. Nirmal Chand Jain",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 195,
        nameOfIndustryAddress: "EXECUTIVE SUMMARY OF ENVIRONMENTAL IMPACT ASSESSMENT & ENVIRONMENTAL MANAGEMENT PLAN FOR Conducting Public Consultation AS PER EIA NOTIFICATION, 2006 OF BHATADI EXPANSION OC MINE (2.0MTPA) (CHANDRAPUR AREA, WCL) For Expansion in Production Capacity from 1.465 MTPA to 2.0 MTPA With increase in Mine Lease Area from 847.37 ha to 1423.75 ha (PREPARED AS PER TOR J-11015/151/2014-IA-II (M) dated 02.06.2021)",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 196,
        nameOfIndustryAddress: "ESTABLISHMENT OF 220 KLPD DISTILLERY UNIT BASED ON SUGARCANE JUICE/SYRUP/C/B HEVY MOLASSES/GRAINS AS A RAW MATERIAL TO PRODUCE RECTIFIED SPIRIT/EXTRA NEUTRAL ALCOHOL/ETHANOL ALONG WITH SUGARCANE CRUSHING CAPACITY OF 12000 TCD AND CO-GENERATION POWER PLANT OF 40 MW AT SY NO. 53, 54, 57, 58, 73, 75, 76, & 80 GUJARWADI AND GAT NO 980 A/P BICHUKLE, TAL. KOREGAON, DIST SATARA, Proposed by HARIPRIYA AGRO ENERGY LIMITED, Satara",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 197,
        nameOfIndustryAddress: "ESTABLISHMENT OF COMMON BIOMEDICAL WASTE TREATMENT FACILITY (CBWTF) & DISPOSAL BY GAT NO. 126, VILLAGE - NAVEGAON, TALUKA - GONDIA, DISTRICT - GONDIA, STATE - MAHARASHTRA BY M/S. VIDHARBHA ENVIRO SOLUTIONS",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 198,
        nameOfIndustryAddress: "M/s Aayan Multitrade LLP (Operative of Banganga Sahakari Sakhar Karkhana Ltd.)",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: "Click Here"
    },
    {
        srNo: 199,
        nameOfIndustryAddress: "EXECUTIVE SUMMARY OF ENVIRONMENTAL IMPACT ASSESSMENT / ENVIRONMENT MANAGEMENT PLAN (As Per EIA Notification No. S.O. 1533(E) dated 14th September 2006 MARKI MANGLI-II OPENCAST COAL MINE PROJECT (Yazdani International (P) Ltd)",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 200,
        nameOfIndustryAddress: "INSTALLATION OF NEW NANO UREA-FERTILIZER PLANT AT RCF, TROMBAY, CHEMBUR, SUBURBAN MUMBAI. Proposed by M/s RASHTRIYA CHEMICALS AND FERTILIZERS LIMITED (Government of India Undertaking) Priyadarshini, Eastern Express Highway, Sion, Mumbai.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: "Click Here"
    },
    {
        srNo: 201,
        nameOfIndustryAddress: "41 Sand Ghats in Nagpur District Proposed by District Mining Officer, Collector Office, Nagpur",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 202,
        nameOfIndustryAddress: "2 Nos of Sand spots two in Sindkheda Tala",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 203,
        nameOfIndustryAddress: "M/s. Grace Industries Ltd. Plot No. A-24, MIDC Tadali, Tal. Dist. Chandrapur",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: "Click Here"
    },
    {
        srNo: 204,
        nameOfIndustryAddress: "M/s. N. N. Global Mercantile Pvt. Ltd., at Muthara village, Tal. Rajura, Dist. Chandrapur",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: "Click Here"
    },
    {
        srNo: 205,
        nameOfIndustryAddress: "34 SAND GHATS at YAVATMAL DISTRICT ,Proposed by DISTRICT MINING OFFICER, COLLECTOR OFFICE, YAVATMAL",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 206,
        nameOfIndustryAddress: "Executive Summary of Draft Environmental Impact Assessment Report Establishment of Fishing Harbour for Providing Fish landing Facilities to Fishermen At Versova, Taluka Andheri, District Mumbai Suburban by Maharashtra Fisheries Development Corporation Ltd., Government of Maharashtra Undertaking",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: "Click Here"
    },
    {
        srNo: 207,
        nameOfIndustryAddress: "10 stone quarry located at Taluka-Umred, Dist-Nagpur",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: "Click Here"
    },
    {
        srNo: 208,
        nameOfIndustryAddress: "Total proposed area-51.07 (i.e. individual lease area of 8.27 Ha, 12.77 Ha,4.65 Ha,14.8 Ha,4.00 Ha,6.58 Ha) ..Village-Haladgaon, Masalkund and Sayki taluka, Umred, Dist-Nagpur",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 209,
        nameOfIndustryAddress: "(1No) Total proposed area-9.98 Ha, Cluster extent-62.02 Ha at Khasra Nos 8 & 9, Village Salaimendha, Tal-Umred, Dist-Nagpur. Proposed by M/s. Pawanputra Buildcon Private limited",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 210,
        nameOfIndustryAddress: "Proposed Expansion of Silica Sand Mining and Washing Project, Kasarde Sindhudurg by (Maharashtra Minerals Corporation Limited (MMCL)) with Production Capacity from 3,00,000 Ton per Annum (TPA) to 4,50,742 TPA and Extension of Mine Lease Period.",
        executiveSummaryCRZ: "EIA Summary",
        dateTime: "",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 211,
        nameOfIndustryAddress: "Proposed Standalone Grinding Unit with Cement Production Capacity of 2.0 MTPA along with D.G Set of 500 KVA At Village: Kachewani, MIDC Industrial area, Taluka: Tirora, District: Gondia, Proposed by M/s. Orient Cement Ltd.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 212,
        nameOfIndustryAddress: "EXPANSION OF FERRO ALLOYS PLANT BY THERMITE PROCESS (Brownfield Project) At Plot No. A-19, MIDC Butibori, Tehsil Hingna, District Nagpur, State Maharashtra. Project Proponent Team Ferro Alloys Private Limited",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 213,
        nameOfIndustryAddress: "Synthetic Organic Chemicals manufacturing facility by M/s.Fibrol Non-Ionics Private Limited , Rasal village, Khopoli-Pali Road Tal.: Sudhagad Pali, Dist.:Raigad",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 214,
        nameOfIndustryAddress: "M/s. RAMA ENTERPRISES At SURVEY NO., 48/1, 48/2, 48/3A, 48/3B, 49/1, 55/1A, VILLAGE – HONAD, TEHSIL – KHALAPUR, DISTRICT – RAIGAD, MAHARASHTRA",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 215,
        nameOfIndustryAddress: "S.No. 795 Area 30 ha Village Adegaon, Tq. Jhari Zamni Dist. Yavatmal (Maharashtra)",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 216,
        nameOfIndustryAddress: "PUBLIC HEARING FOR 25 SAND GHATS PROPONENT DISTRICT MINING OFFICER, COLLECTOR OFFICE, JALNA",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: "Click Here"
    },
    {
        srNo: 217,
        nameOfIndustryAddress: "GAURI PAUNI EXPANSION OCP (Ballarpur Area, WCL) -For Enhancement in production capacity from 3.40 (2.50 + 0.90) MTPA to 3.50 MTPA and increase in project area from 931.53(676.53 + 255.00) Ha to 1618.00 Ha",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: "Click Here"
    },
    {
        srNo: 218,
        nameOfIndustryAddress: "Ten (10) sand spots of Amalner, Erandol and Yawal Talukas, Jalgaon District, Maharashtra .",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 219,
        nameOfIndustryAddress: "ADEGAON LIMESTONE & DOLOMITE MINE Khasra No. 630/1, 2A & 2B and 589(P) of Adegaon Village, Taluka – Zari Jamni, District – Yavatmal (Area 14.63 Ha; Production Capacity @ 0.55 MTPA Limestone/Dolomite), Proposed by Project Proponent Ajay Masih",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 220,
        nameOfIndustryAddress: "28 Sand Mining located in Nagpur district",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 221,
        nameOfIndustryAddress: "M/S. NIRA VALLEY DISTILLERIES PRIVATE LIMITED A/p - Nimgaon, Tal - Malshiras, Dist.- Solapur, Solapur-413113 Maharashtra",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 222,
        nameOfIndustryAddress: "M/s. UDDHAVESH URJA ETHANOL PRODUCTS PVT. LTD. at GUT NO 40, GAON JAMOTI, TALUKA BAGLAN (SATANA), DISTRICT NASHIK, MAHARASHTRA, PIN CODE – 423301.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 223,
        nameOfIndustryAddress: "M/s Lloyds Metals and Energy Limited. At Plot A-1 and A-2, MIDC Area, Ghugus, Chandrapur, Maharashtra.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 224,
        nameOfIndustryAddress: "39 Sand Mining located in Wardha district Disctrict Collector office Wardha",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 225,
        nameOfIndustryAddress: "Expansion of Limestone Mining from 50, 000 TPA to 3,00,000 TPA (Mining Lease Area – 11.898 HaR) Proposed by Avinash N. Warwatkar (Wanjri Limestone Mine-11.898 HaR), Khasra No. 105, 107, 108 & 111, Village - Wanjri, Taluka- Wani, Dist. Yavatmal, Maharashtra.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 226,
        nameOfIndustryAddress: "Exe summary sand ghats in Buldana district",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 227,
        nameOfIndustryAddress: "M/s. Dinanath Allied Steel Manufacturing Pvt. Ltd. MIDC Mul, Tal. Mul, Dist. Chandrapur",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 228,
        nameOfIndustryAddress: "34 SAND GHATS PROPONENT DISTRICT MINING OFFICER, COLLECTOR OFFICE, YAVATMAL",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 229,
        nameOfIndustryAddress: "EXECUTIVE SUMMARY BULDHANA DISTRICT -25 SANDGHATS",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 230,
        nameOfIndustryAddress: "EMPRESS HAMMER REALTY LLP PLOT BEARING C. S. NO. 355 (PT) OF MALABAR AND CUMBALA HILL DIVISION, AT NEPEANSEA ROAD, WARD-D, MUMBAI – 400006",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 231,
        nameOfIndustryAddress: "M/S. PAD. DR. VITTHALRAO VIKHE PATIL SAHAKAARI SAKHAR KARKHANA LTD. GAT NO. 196/1, PRAVARA NAGAR LONI, RAHATA, AHMEDNAGAR, MAHARASHTRA",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 232,
        nameOfIndustryAddress: "M/s. District Mining Office,Environmental Management Plan of Sand Spot Mines of Minor Minerals of Parbhani District, Tehsil Parbhani Parbhani, Maharashtra",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 233,
        nameOfIndustryAddress: "Gokul Mauli Sugars ltd. Tadwal, Tal: Akkalkot, Diatrict: Solapur, Maharashtra",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 234,
        nameOfIndustryAddress: "VINAY ALLOYS Plot No. D -17, MIDC, Umred, District Nagpur",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 235,
        nameOfIndustryAddress: "VINAY ALLOYS Plot No. D -17, MIDC, Umred, District: Nagpur",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 236,
        nameOfIndustryAddress: "M/s SMW Ispat Pvt Ltd (Formerly known as M/s. Mahalaxmi TMT Pvt. Ltd.) Plot No:- B-1/4, B-1/2, SR- 46/2 and Survey no.:- 562, 564, 565, MIDC Deoli, District – Wardha, Maharashtra",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 237,
        nameOfIndustryAddress: "M/s. Lloyds Metals and Energy Limited MIDC Konsari, Village: Konsari, Tahsil: Chamorshi,Dist: Gadchiroli, Maharashtra",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 238,
        nameOfIndustryAddress: "M/s. Shiur Sakhar Karkhana Limited, Wakodi, Tq. Kalamnuri, Dist- Hingoli.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 239,
        nameOfIndustryAddress: "M/s. Hubtown Ltd.is located at Plot bearing C.T.S No. 20 (pt), 22 (pt), 23 (pt), 24 (pt), 32 (pt) & 38 (pt), Worli Division, G/South Ward, Mumbai, Maharashtra.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 240,
        nameOfIndustryAddress: "M/s G.S. Constro & Infra Pvt. Ltd. 501, 5th Floor, Avarsekar Heights, Dr. Annie Besant Road, Siddharth Nagar, Worli, Mumbai – 400 018",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 241,
        nameOfIndustryAddress: "Proposed Common Bio-Medical Waste Treatment Facility At Khasra No. 395/3/A, village-Chitpur (Dhargaon), Taluka & District-Bhandara Maharashtra",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 242,
        nameOfIndustryAddress: "MARATHA LIMESTONE MINE, MINE LEASE III (LEASE AREA: 49.00 HA & Production Capacity 0.5 MTPA) LOCATED AT VILLAGE SONAPUR – THUTRA, TEHSIL RAJURA AND KORPANA, DISTRICT CHANDRAPUR, MAHARASHTRA",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 243,
        nameOfIndustryAddress: "M/s. Dinanath Allied Steel Manufacturing Pvt. Ltd. Kh. No. 311, 312,313,315,351,357,358 & 359, Village: Mohadi (M), Tahsil: Nagbhir, District : Chandrapur, Maharashtra",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 244,
        nameOfIndustryAddress: "ThirtyTwo District Level Sand Spots , Beed District , Maharashtra",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 245,
        nameOfIndustryAddress: "Twenty District Level Sand Spots, Jalna District, Maharashtra",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 246,
        nameOfIndustryAddress: "100 KLPD Molasses based Distillery by Aayan Multirade LLP (Unit-I) (AMLLP), located at, Samsherpur, Tal: Nandurbar, Dist: Nandurbar",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 247,
        nameOfIndustryAddress: "M/s.Veritas Polychem Private Limited At Dighi Port Area Village Nanavali, Tal Shrivardhan, Dist Raigad.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 248,
        nameOfIndustryAddress: "Sand Spot Mines ( 0-5 Ha ) of Buldhana District (29 Mines) for Environmental Clearance of Taluka: Deulgaon Raja , Nandura, Sangrampur ,Shegaon, Malkhapur Lonar & Sindhkhedraja District: Buldana.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 249,
        nameOfIndustryAddress: "Veritas Polychem Pvt. Ltd. At Dighi Port Area, Villege - Nanavli, Tal. Shrivardhan, Dist. Raigad.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 250,
        nameOfIndustryAddress: "Mukteshwar Sugar Mills Ltd, Dhamori (BK), Tal: Gangapur Dist: Aurnagabad.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 251,
        nameOfIndustryAddress: "Mining of Laterite from 1,25,000 TPA to 6,19,030.40 TPA(33.03 Ha.) at sy. No. : 111 & 115 of Markagondi Village, Tahsil: Jiwati, Dist: Chandrapur, Maharashtra",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 252,
        nameOfIndustryAddress: "Dongarkhed – A River Bed Sand Mine / Sand Ghat Khasra No. Purna Gsda approved- 4,5,6,7, Area (0.50Ha) Village- Dongarkhed – ATehsil Shegav, District- Buldhana",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: "Click Here"
    },
    {
        srNo: 253,
        nameOfIndustryAddress: "Prasol Chemicals Private Limited, Survey No. 8, 13, 15, 16, 25, 75, Village Honad, Tal: Khalapur, Dist: Raigad, Maharashtra",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 254,
        nameOfIndustryAddress: "ENVIRONMENTAL CLEARANCE (PUBLIC HEARING) (“B” under category 1(a) of EIA Notification dated 2006,S.O. 141(E) dated 15. 01. 2016, MoEF & CC, S.O. 3611(E), Dated 25.07.2018, Sustainable Sand Mining Management Guidelines 2016, Guidelines for Mining Policy 2020 OF (I) Taluka - SONPETH Distt – Parbhani (Maharashtra) Lease Validity:-2019-2020 (1 YEAR), Study Period:-Nov, Dec & January",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 255,
        nameOfIndustryAddress: "(III) Taluka- PURNA",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 256,
        nameOfIndustryAddress: "(V) Taluka - PALAM",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 257,
        nameOfIndustryAddress: "JSW INFRASTRUCTURE LIMITED, MUMBAI PROPOSED CAPTIVE JETTY FACILITY AT VILLAGE KHARMACHELA, TALUKA PEN, DISTRICT RAIGAD, MAHARASHTRA IN DHARAMTAR CREEK",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 258,
        nameOfIndustryAddress: "Ilmenite Mining at Reel, Undi & Warvade, by Indian Garnet Sand Company Ltd. group III",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 259,
        nameOfIndustryAddress: "MINERAL BENEFICIATION PROJECT AT PLOT NO.B-19/1, BHANDARA INDUSTRIAL AREA,VILLAGE GADEGAON,TALUK LAKHANI, DISTRICT-BHANDARA MH BY VIDYA MINERALS & PROCESSORS CAPACITY: MNO2: 5000 MT/ANNUM AND MNO: 5000 MT/ANNUM CAPACITY.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 260,
        nameOfIndustryAddress: "Deepening and Widening of Approach Channel to Second Chemical Berth (SCB)” at Pir Pau, Mumbai",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 261,
        nameOfIndustryAddress: "M/s. Vidarbha Enviro Solutions LLP Gondia District, Maharashtra.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 262,
        nameOfIndustryAddress: "MITCON Consultancy & Engineering Services Ltd.Environment Management and Engineering Division Behind DIC Office, Agri College Campus, Shivajinagar, Pune 411 005, Maharashtra (INDIA)",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 263,
        nameOfIndustryAddress: "GLENMARK LIFE SCIENCE LTD At Plot No. 141-143, 160-165, 170-172, Chandramouli Sahakari Audyogik Vasahat Maryadit, Pune - Hyderabad Highway, Mohol, Solapur 413213 MH",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 264,
        nameOfIndustryAddress: "Uttam Galva Steels Ltd Expansion of Existing Thermal Power Plant along with coal gasification plant & solar power plant for captive consumption At Village Narangi, Donvat; Taluka Khalapur, District Raigad, Maharashtra-410202",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 265,
        nameOfIndustryAddress: "Uttam Galva Steels Ltd Expansion of Existing Steel Processing Plant at Village Donvat, Taluka Khalapur, District Raigad, Maharashtra - 410202",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 266,
        nameOfIndustryAddress: "M/s. Metarolls Ispat Pvt. Ltd Modernization cum Expansion of Steel Plant at Gut No. 48, Daregaon village, Adjacent to MIDC Phase II, Taluka - Jalna, District - Jalna, Maharashtra State",
        executiveSummaryCRZ: "EIA Summary",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 267,
        nameOfIndustryAddress: "M/s. Ministry of Road Transport and Highway",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 268,
        nameOfIndustryAddress: "M/s Rare Minerals-Kolthare.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 269,
        nameOfIndustryAddress: "M/s Rare Minerals-Dabhol Rare Minerals Mine .",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 270,
        nameOfIndustryAddress: "M/s Rare Minerals -the Dandewadi Rare Minerals Mine .",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 271,
        nameOfIndustryAddress: "SEMI MECHANIZED OPEN CAST LIMESTONE MINING AT VILLAGE ADEGAON YAVATMAL",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 272,
        nameOfIndustryAddress: "Ilmenite Mining at Reel, Undi & Warvade, by Indian Garnet Sand Company Ltd. group II",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 273,
        nameOfIndustryAddress: "Ilmenite Mining at Reel, Undi & Warvade, by Indian Garnet Sand Company Ltd. group I Undi & Warvade, Tal. Ratnagiri, Dist.: Ratnagiri",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 274,
        nameOfIndustryAddress: "GHONSA OC EXPN -Wani North Area, WCL",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 275,
        nameOfIndustryAddress: "PADMAPUR EXTN DEEP OC, Chandrapur",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 276,
        nameOfIndustryAddress: "Dhangarwadi Lift Irrigation Scheme is a part of Krishna Project II and is proposed at Ch. 58/225 of Arphal Canal near Village Helgaon, Taluka – Karad, Dist – Satara.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 277,
        nameOfIndustryAddress: "M/s. Jesons Industries Limited, Taluka palghar",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 278,
        nameOfIndustryAddress: "GLENMARK LIFE SCIENCE LTD At Plot No. 141-143, 160-165, 170-172, Chandramouli Sahakari Audyogik Vasahat Maryadit, Pune - Hyderabad Highway, Mohol, Solapur 413213 MH",
        executiveSummaryCRZ: "Click Here",
        dateTime: "",
        environmentalPublicHearingOrder: "Click Here",
        remarksAdvertisement: ""
    }
];

const ITEMS_PER_PAGE = 10;

function Upcoming() {
    const [selectedYear, setSelectedYear] = useState("any");
    const [appliedYear, setAppliedYear] = useState("any");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    // Filter data based on applied year
    const filteredData = appliedYear === "any"
        ? upcomingHearingsData
        : upcomingHearingsData.filter(row => row.dateTime.includes(appliedYear));

    // Pagination calculations
    const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedData = filteredData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    // Generate page numbers with ellipsis logic
    const getPageNumbers = (currentPage: number, totalPages: number) => {
        const pages: (number | string)[] = [];

        if (totalPages <= 3) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (currentPage <= 2) {
                pages.push(1, 2, 3, '...', totalPages);
            } else if (currentPage >= totalPages - 1) {
                pages.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
            } else {
                pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
            }
        }

        return pages;
    };

    // Handle page change with scroll to top
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Handle year selection
    const handleYearSelect = (year: string) => {
        setSelectedYear(year);
        setIsDropdownOpen(false);
    };

    // Handle apply button
    const handleApply = () => {
        setAppliedYear(selectedYear);
        setCurrentPage(1);
    };

    // Get current date for header
    const getCurrentDate = () => {
        const date = new Date();
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    return (
        <div className="font-family-helvetica">
            {/* Top Banner Section */}
            <section className="w-full flex justify-center bg-white">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="relative w-full h-[200px] md:h-[250px] lg:h-[280px] rounded-t-[30px] md:rounded-t-[40px] lg:rounded-t-[48px] overflow-hidden">
                        <div
                            className="absolute inset-0 z-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${standingorders})` }}
                        />
                        <div
                            className="absolute inset-0 z-10 bg-cover bg-center blur-sm scale-105"
                            style={{
                                backgroundImage: `url(${standingorders})`,
                                WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 70%)',
                                maskImage: 'linear-gradient(to bottom, black 0%, transparent 70%)'
                            }}
                        />
                        <div className="absolute inset-0 z-20 bg-linear-to-b from-[#00A3FF]/30 via-[#00A3FF]/60 to-white" />

                        <div className="relative z-30 flex flex-col items-center justify-center h-full text-center px-4 md:px-6 mt-[-20px] md:mt-[-30px]">
                            <h1 className="text-[28px] md:text-[36px] lg:text-[40px] font-bold text-[#000000] tracking-tight leading-tight md:leading-none mb-4 md:mb-8">
                                Public Hearings - Upcoming
                            </h1>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 h-10 bg-linear-to-t from-white to-transparent z-40" />
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="w-full flex justify-center bg-white py-12">
                <div className="w-full max-w-[1282px] px-4">
                    {/* Year Filter Section */}
                    <div className="flex items-center justify-center gap-4 mb-8">
                        {/* Year Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="flex items-center justify-between w-[150px] px-4 py-3 bg-white border border-gray-300 rounded-lg text-[14px] text-gray-700 hover:border-[#00A3FF] transition-colors cursor-pointer"
                            >
                                <span>{yearOptions.find(y => y.value === selectedYear)?.label || selectedYear}</span>
                                <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {isDropdownOpen && (
                                <div className="absolute top-full left-0 mt-1 w-[150px] bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-[300px] overflow-y-auto">
                                    {yearOptions.map((option) => (
                                        <div
                                            key={option.value}
                                            onClick={() => handleYearSelect(option.value)}
                                            className={`px-4 py-2.5 text-[14px] cursor-pointer transition-colors
                                                ${selectedYear === option.value
                                                    ? 'bg-[#00A3FF]/10 text-[#00A3FF]'
                                                    : 'text-gray-700 hover:bg-gray-50'
                                                }`}
                                        >
                                            {option.label}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Apply Button */}
                        <button
                            onClick={handleApply}
                            className="px-8 py-3 bg-[#ffffff] border-1 text-[#00A3FF] text-[14px] font-medium rounded-xl hover:bg-[#00A3FF] hover:text-white transition-colors cursor-pointer"
                        >
                            Apply
                        </button>
                    </div>

                    {/* Table Header with Date */}
                    <div className="text-center mb-4">
                        <h2 className="text-[18px] font-semibold text-gray-800">
                            Public Hearing Details as on {getCurrentDate()}
                        </h2>
                    </div>

                    {/* Desktop Table View */}
                    <div className="hidden lg:block border border-gray-200 rounded-[25px] overflow-hidden mb-8">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="border-b border-gray-200 bg-gray-50">
                                    <th className="py-3 px-3 text-left text-[11px] font-semibold text-gray-700 w-12">Sr. No.</th>
                                    <th className="py-3 px-3 text-left text-[11px] font-semibold text-gray-700 min-w-[350px]">Name of Industry & Address</th>
                                    <th className="py-3 px-3 text-center text-[11px] font-semibold text-gray-700 w-[100px]">Executive Summary/CRZ Draft Notification</th>
                                    <th className="py-3 px-3 text-center text-[11px] font-semibold text-gray-700 w-[90px]">Date & Time</th>
                                    <th className="py-3 px-3 text-center text-[11px] font-semibold text-gray-700 w-[100px]">Environmental Public Hearing Order</th>
                                    <th className="py-3 px-3 text-center text-[11px] font-semibold text-gray-700 w-[120px]">Remarks/Advertisement</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {paginatedData.length > 0 ? (
                                    paginatedData.map((row) => (
                                        <tr key={row.srNo} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="py-3 px-3 text-[11px] text-gray-600 align-top">{row.srNo}</td>
                                            <td className="py-3 px-3 text-[11px] text-gray-700 align-top leading-relaxed">{row.nameOfIndustryAddress}</td>
                                            <td className="py-3 px-3 text-[11px] text-center align-top">
                                                {row.executiveSummaryCRZ && (
                                                    <a href="#" className="text-[#00A3FF] hover:underline">{row.executiveSummaryCRZ}</a>
                                                )}
                                            </td>
                                            <td className="py-3 px-3 text-[11px] text-gray-700 text-center align-top">{row.dateTime}</td>
                                            <td className="py-3 px-3 text-[11px] text-center align-top">
                                                {row.environmentalPublicHearingOrder && (
                                                    <a href="#" className="text-[#00A3FF] hover:underline">{row.environmentalPublicHearingOrder}</a>
                                                )}
                                            </td>
                                            <td className="py-3 px-3 text-[11px] text-center align-top">
                                                {row.remarksAdvertisement && (
                                                    <a href="#" className="text-[#00A3FF] hover:underline">{row.remarksAdvertisement}</a>
                                                )}
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={6} className="py-12 text-center text-[16px] text-gray-500">
                                            No results found for {appliedYear === "any" ? "any year" : `year ${appliedYear}`}
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile Card View */}
                    <div className="lg:hidden space-y-4 mb-8">
                        {paginatedData.length > 0 ? (
                            paginatedData.map((row) => (
                                <div key={row.srNo} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                                    <div className="flex justify-between items-start mb-3">
                                        <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-full">
                                            #{row.srNo}
                                        </span>
                                        <span className="text-sm font-semibold text-gray-800 bg-blue-50 px-3 py-1 rounded-lg">
                                            {row.dateTime}
                                        </span>
                                    </div>

                                    <h3 className="text-[15px] font-bold text-gray-800 mb-4 leading-snug">
                                        {row.nameOfIndustryAddress}
                                    </h3>

                                    <div className="grid grid-cols-1 gap-3">
                                        {row.executiveSummaryCRZ && (
                                            <div className="flex items-center justify-between text-sm border-t border-gray-100 pt-3">
                                                <span className="text-gray-500">Executive Summary/CRZ</span>
                                                <a href="#" className="text-[#0085E2] font-medium hover:underline flex items-center gap-1">
                                                    View <ChevronRight className="w-3.5 h-3.5" />
                                                </a>
                                            </div>
                                        )}
                                        {row.environmentalPublicHearingOrder && (
                                            <div className="flex items-center justify-between text-sm border-t border-gray-100 pt-3">
                                                <span className="text-gray-500">Env. Hearing Order</span>
                                                <a href="#" className="text-[#0085E2] font-medium hover:underline flex items-center gap-1">
                                                    View <ChevronRight className="w-3.5 h-3.5" />
                                                </a>
                                            </div>
                                        )}
                                        {row.remarksAdvertisement && (
                                            <div className="flex items-center justify-between text-sm border-t border-gray-100 pt-3">
                                                <span className="text-gray-500">Remarks</span>
                                                <a href="#" className="text-[#0085E2] font-medium hover:underline flex items-center gap-1">
                                                    View <ChevronRight className="w-3.5 h-3.5" />
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-12 text-gray-500 bg-gray-50 rounded-xl border border-dashed border-gray-300">
                                No results found for {appliedYear === "any" ? "any year" : `year ${appliedYear}`}
                            </div>
                        )}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="flex items-center justify-center gap-2 mt-8 pt-6 border-t border-gray-100">
                            {/* First Button */}
                            {currentPage > 2 && (
                                <button
                                    onClick={() => handlePageChange(1)}
                                    className="px-3 py-2 text-[13px] text-gray-600 hover:text-[#0085E2] transition-colors cursor-pointer"
                                >
                                    First
                                </button>
                            )}

                            {/* Previous Button */}
                            {currentPage > 1 && (
                                <button
                                    onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                                    className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:border-[#0085E2] hover:text-[#0085E2] transition-colors cursor-pointer"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </button>
                            )}

                            {/* Page Numbers with Ellipsis */}
                            {getPageNumbers(currentPage, totalPages).map((page, index) => (
                                page === '...' ? (
                                    <span key={`ellipsis-${index}`} className="px-2 text-gray-400">...</span>
                                ) : (
                                    <button
                                        key={page}
                                        onClick={() => handlePageChange(page as number)}
                                        className={`w-10 h-10 flex items-center justify-center rounded-full text-[14px] font-medium transition-colors cursor-pointer
                                            ${currentPage === page
                                                ? 'bg-[#0085E2] text-white'
                                                : 'text-gray-600 hover:bg-gray-100'
                                            }`}
                                    >
                                        {page}
                                    </button>
                                )
                            ))}

                            {/* Next Button */}
                            {currentPage < totalPages && (
                                <button
                                    onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
                                    className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:border-[#0085E2] hover:text-[#0085E2] transition-colors cursor-pointer"
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            )}

                            {/* Last Button */}
                            {currentPage < totalPages - 1 && (
                                <button
                                    onClick={() => handlePageChange(totalPages)}
                                    className="px-3 py-2 text-[13px] text-gray-600 hover:text-[#0085E2] transition-colors cursor-pointer"
                                >
                                    Last
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}

export default Upcoming;
