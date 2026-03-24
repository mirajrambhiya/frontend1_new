import { useState } from 'react';
import AboutUsBanner from "../AboutUs";
import Banner from "../navbanner-aboutus";

// Type definitions
interface OfficeRow {
    sNo: string;
    regionalOffice: string;
    address: string;
    jurisdiction: string;
    phone: string[];
    fax: string;
    email: string[];
    isSubHeader?: boolean;
}

interface CityData {
    title: string;
    data: OfficeRow[];
}

// City data with dummy office information
const citiesData: Record<string, CityData> = {
    "Kalyan": {
        title: "KALYAN",
        data: [
            {
                sNo: "1.",
                regionalOffice: "Kalyan",
                address: "Maharashtra Pollution Control Board, Sidhivinayak Sankul, 3rd and 4th Floor, Station Road, Kalyan (West) - 421301",
                jurisdiction: "Kalyan, Bhiwandi, Ulhasnagar, Badlapur, Wada Murbad and Shahapur talukas of Thane District.",
                phone: ["0251-2027343", "0251-2310212"],
                fax: "0251-2310192",
                email: ["rokalyan@mpcb.gov.in", "mpcbkalyan@mpcb.gov.in"]
            },
            { sNo: "", regionalOffice: "Sub-Regional Offices", address: "", jurisdiction: "", phone: [], fax: "", email: [], isSubHeader: true },
            {
                sNo: "i.",
                regionalOffice: "S.R.O. Kalyan I",
                address: "Maharashtra Pollution Control Board, Sidhivinayak Sankul, 3rd and 4th Floor, Station Road, Kalyan (West) - 421301",
                jurisdiction: "Kalyan, Bhiwandi taluka.",
                phone: ["0251-2310167"],
                fax: "-",
                email: ["srokalyan1@mpcb.gov.in"]
            },
            {
                sNo: "ii.",
                regionalOffice: "S.R.O. Kalyan II",
                address: "Maharashtra Pollution Control Board, Sidhivinayak Sankul, 3rd and 4th Floor, Station Road, Kalyan (West) - 421301",
                jurisdiction: "Ulhasnagar, Badlapur taluka.",
                phone: ["0251-2310167"],
                fax: "-",
                email: ["srokalyan2@mpcb.gov.in"]
            },
            {
                sNo: "iii.",
                regionalOffice: "S.R.O. Kalyan III",
                address: "Maharashtra Pollution Control Board, Sidhivinayak Sankul, 3rd and 4th Floor, Station Road, Kalyan (West) - 421301",
                jurisdiction: "Wada, Murbad, Shahapur Taluka",
                phone: ["0251-2310167"],
                fax: "-",
                email: ["srokalyan3@mpcb.gov.in"]
            },
            {
                sNo: "iv.",
                regionalOffice: "S.R.O. Bhiwandi",
                address: "Maharashtra Pollution Control Board, Sidhivinayak Sankul, 3rd and 4th Floor, Station Road, Kalyan (West) - 421301",
                jurisdiction: "Sarvali MIDC and Bhiwandi District",
                phone: ["0251-2310167"],
                fax: "-",
                email: ["srobhiwandi@mpcb.gov.in"]
            },
        ]
    },
    "Kolhapur": {
        title: "KOLHAPUR",
        data: [
            {
                sNo: "1.",
                regionalOffice: "Kolhapur",
                address: "Maharashtra Pollution Control Board, Udyog Bhavan Building, Near Collectarate Office, Kolhapur - 416 002",
                jurisdiction: "Sangli, Kolhapur and Sindhudurga district.",
                phone: ["0231-2652952"],
                fax: "0231-2660448",
                email: ["rokolhapur@mpcb.gov.in", "mpcbkolhapur@mpcb.gov.in"]
            },
            { sNo: "", regionalOffice: "Sub-Regional Offices", address: "", jurisdiction: "", phone: [], fax: "", email: [], isSubHeader: true },
            {
                sNo: "i.",
                regionalOffice: "S.R.O. Kolhapur",
                address: "Udyog Bhavan Building, Near Collectarate Office, Kolhapur-416 002",
                jurisdiction: "Kolhapur district.",
                phone: ["0231-2652952"],
                fax: "0231-2660448",
                email: ["srokolhapur@mpcb.gov.in"]
            },
            {
                sNo: "ii.",
                regionalOffice: "S.R.O. Sangli",
                address: "300/2, Udyog Bhavan, Near Government Rest House, Vishrambaug, Sangli - 416 416",
                jurisdiction: "Sangli district.",
                phone: ["0233-2672032"],
                fax: "0233-2323732",
                email: ["srosangli@mpcb.gov.in"]
            },
            {
                sNo: "iii.",
                regionalOffice: "S.R.O. Ratnagiri",
                address: "Central Administrative Building No. 2, 2nd Floor, Collectors Office Compound, Ratnagiri - 415612",
                jurisdiction: "Sindhudurga district and Rajapur, Lanja, Ratnagiri, Deorukh and Sangmeshwar taluka",
                phone: ["02352-220813"],
                fax: "02352-220713",
                email: ["sroratnagiri@mpcb.gov.in"]
            },
            {
                sNo: "iv.",
                regionalOffice: "S.R.O. Chiplun",
                address: "Parkar Complex, 1st floor, Behind Nagar Parishad Office, Chiplun Taluka. Chiplun Dist. Ratnagiri - 415 605",
                jurisdiction: "Chiplun, Guhagar, Khed, Dapoli and Mandangad taluka of Ratnagiri district",
                phone: ["02355-261570"],
                fax: "02355-261570",
                email: ["srochiplun@mpcb.gov.in"]
            },
            {
                sNo: "v.",
                regionalOffice: "Chiplun Lab",
                address: "Parkar Complex, 1st floor, Behind Nagar Parishad Office, Chiplun Taluka. Chiplun Dist. Ratnagiri - 415 605",
                jurisdiction: "Chiplun, Guhagar, Khed, Dapoli and Mandangad taluka of Ratnagiri district",
                phone: ["02355-261570"],
                fax: "02355-261570",
                email: ["mpcbchiplunlab@mpcb.gov.in"]
            },
        ]
    },
    "Mumbai": {
        title: "MUMBAI",
        data: [
            {
                sNo: "1.",
                regionalOffice: "Mumbai",
                address: "Kalpataru Point, 2nd floor, Opp. PVR Theatre, Sion (E), Mumbai-400022, Maharashtra",
                jurisdiction: "Mumbai Municipal Corporation Area",
                phone: ["24016239/24015269"],
                fax: "25505926",
                email: ["romumbai@mpcb.gov.in", "mpcbmumbai@mpcb.gov.in"]
            },
            { sNo: "", regionalOffice: "Sub-Regional Offices", address: "", jurisdiction: "", phone: [], fax: "", email: [], isSubHeader: true },
            {
                sNo: "i.",
                regionalOffice: "S.R.O. Mumbai-I",
                address: "Kalpataru Point, 2nd floor, Opp. PVR Theatre, Sion (E), Mumbai-400022, Maharashtra",
                jurisdiction: "Mumbai Island, Ward No. A.B.C D. FF(South) F(North) G(South) and G(North).",
                phone: ["24016239/24015269"],
                fax: "-",
                email: ["sromumbai1@mpcb.gov.in"]
            },
            {
                sNo: "ii.",
                regionalOffice: "S.R.O. Mumbai-II",
                address: "Kalpataru Point, 2nd floor, Opp. PVR Theatre, Sion(E), Mumbai-400022, Maharashtra",
                jurisdiction: "Part Of Mumbai Suburb, Ward No. M(East) M(West), H(East) H(West) and L.",
                phone: ["24016239/24015269"],
                fax: "-",
                email: ["sromumbai2@mpcb.gov.in"]
            },
            {
                sNo: "iii.",
                regionalOffice: "S.R.O. Mumbai-III",
                address: "Kalpataru Point, 2nd floor, Opp. PVR Theatre, Sion (E), Mumbai-400022, Maharashtra",
                jurisdiction: "Part Of Mumbai Suburb, Ward No. K(East) K(West), S, N, and (P (South).",
                phone: ["24016239/24015269"],
                fax: "-",
                email: ["sromumbai3@mpcb.gov.in"]
            },
            {
                sNo: "iv.",
                regionalOffice: "S.R.O. Mumbai-IV",
                address: "Kalpataru Point, 2nd floor, Opp. PVR Theatre, Sion (E), Mumbai-400022, Maharashtra",
                jurisdiction: "Suburb of Mumbai, Ward No. P(North), R(North), R(South) and T.",
                phone: ["24016239/24015269"],
                fax: "-",
                email: ["sromumbai4@mpcb.gov.in"]
            },
        ]
    },
    "Nagpur": {
        title: "NAGPUR",
        data: [
            {
                sNo: "1.",
                regionalOffice: "Nagpur",
                address: "Udyog Bhavan, 5th floor, Near Sales Tax Office, Civil Line, Nagpur - 440 001",
                jurisdiction: "Nagpur, Wardha, Bhandara, Gondia, Chandrapur and Godchiroli district.",
                phone: ["0712-2565308"],
                fax: "0712-2560851",
                email: ["ronagpur@mpcb.gov.in", "mpcbnagpur@mpcb.gov.in"]
            },
            { sNo: "", regionalOffice: "Sub-Regional Offices", address: "", jurisdiction: "", phone: [], fax: "", email: [], isSubHeader: true },
            {
                sNo: "i.",
                regionalOffice: "S.R.O. Nagpur I",
                address: "Udyog Bhavan, 5th floor, Near Sales Tax Office, Civil Line, Nagpur - 440 001",
                jurisdiction: "Nagpur district.",
                phone: ["0712-2560152"],
                fax: "0712-2560139",
                email: ["sronagpur1@mpcb.gov.in"]
            },
            {
                sNo: "ii.",
                regionalOffice: "S.R.O. Nagpur II",
                address: "Udyog Bhavan, 5th floor, Near Sales Tax Office, Civil Line, Nagpur - 440 001",
                jurisdiction: "Wardha district, Hingana taluka, (excluding Nagpur Municipal Corporation area) Umred, Bhivapur, Kuhi and Nagpur Gramin taluka of Nagpur district.",
                phone: ["0712-2560152"],
                fax: "-",
                email: ["sronagpur2@mpcb.gov.in"]
            },
            {
                sNo: "iii.",
                regionalOffice: "S.R.O. Bhandara",
                address: "Sub-Regional Office, Bhandara, Tatya tope ward near city petrol pump miskin, mahal road bhandara-441904",
                jurisdiction: "Bhandara and Gondia district.",
                phone: ["07184260629"],
                fax: "07184-260629",
                email: ["srobhandara@mpcb.gov.in"]
            },
            {
                sNo: "iv.",
                regionalOffice: "Nagpur Lab",
                address: "Udyog Bhavan, 5th floor, Near Sales Tax Office, Civil Line, Nagpur - 440 001",
                jurisdiction: "Nagpur district.",
                phone: ["0712-2560152"],
                fax: "0712-2560139",
                email: ["mpcbnagpurlab@mpcb.gov.in"]
            },
        ]
    },
    "Chhatrapati Sambhaji Nagar": {
        title: "CHHATRAPATI SAMBHAJI NAGAR",
        data: [
            {
                sNo: "1.",
                regionalOffice: "Chhatrapati Sambhaji Nagar",
                address: "Paryavaran Bhavan, A - 4/1, MIDC Area, Chikalthana, Near Seth Nandlal Dhoot Hospital,",
                jurisdiction: "Chhatrapati Sambhaji Nagar, Jalna, Parbhani, Hingoli, Nanded, Beed, Latur",
                phone: ["0240-2993004"],
                fax: "0240-2473461",
                email: ["rochhatrapatisambhajinagar@mpcb.gov.in", "mpcbchhatrapatisambhajinagar@mpcb.gov.in"]
            },
            { sNo: "", regionalOffice: "Sub-Regional Offices", address: "", jurisdiction: "", phone: [], fax: "", email: [], isSubHeader: true },
            {
                sNo: "i.",
                regionalOffice: "S.R.O.Chhatrapati Sambhaji Nagar",
                address: "Paryavaran Bhavan, A - 4/1, MIDC Area, Chikalthana, Near Seth Nandlal Dhoot Hospital, Jalna Road, Chatrapati Sambhaji Nagar - 431 210",
                jurisdiction: "Chhatrapati Sambhaji Nagar district.",
                phone: ["0240-2993004"],
                fax: "0240-2473462",
                email: ["srochhatrapatisambhajinagar1@mpcb.gov.in"]
            },
            {
                sNo: "ii.",
                regionalOffice: "S.R.O.Jalna",
                address: "Sub-Regional Office, Jalna, plot no. p 3/1 and p 3/2, Phase-2, MIDC Jalna, Near Hotel Aadarsh Palace, Jalna Chhatrapati Sambhaji Nagar Road - 431203",
                jurisdiction: "Jalna and Beed.",
                phone: ["02482-220120"],
                fax: "02482-220120",
                email: ["srochhatrapatisambhajinagar2@mpcb.gov.in"]
            },
            {
                sNo: "iii.",
                regionalOffice: "S.R.O.Latur",
                address: "Sub Regional Office, Maharashtra Pollution Control Board, Plot NO. P- 10, Latur Udyog Samuh Building, MIDC Latur.",
                jurisdiction: "Latur, Dharashiv district.",
                phone: ["02382-299645"],
                fax: "-",
                email: ["srolatur@mpcb.gov.in"]
            },
            {
                sNo: "iv.",
                regionalOffice: "S.R.O.Nanded",
                address: "Sub-Regional Office Nanded, Lahuti Complex, 2nd Floor, Near Shivaji Statue, Vajirabad Nanded- 431601",
                jurisdiction: "Nanded distritct.",
                phone: ["02462-242492"],
                fax: "02462-242492",
                email: ["sronanded@mpcb.gov.in"]
            },
            {
                sNo: "v.",
                regionalOffice: "S.R.O.Parbhani",
                address: "Sub-Regional Office Parbhani, Devkripa Building, 1st Floor, Rangnath Maharaj Nagar, Nandkheda Road, Parbhani - 431401",
                jurisdiction: "Parbhani, Hingoli, distritct. Tal - Parli-Vaijyanath",
                phone: ["02452-226687"],
                fax: "-",
                email: ["sroparbhani@mpcb.gov.in"]
            },
            {
                sNo: "vi.",
                regionalOffice: "Lab Chhatrapati Sambhaji Nagar",
                address: "Paryavaran Bhavan, A - 4/1, MIDC Area, Chikalthana, Near Seth Nandlal Dhoot Hospital, Jalna Road, Chhatrapati Sambhaji Nagar - 431 210",
                jurisdiction: "-",
                phone: ["0240-2473463"],
                fax: "-",
                email: ["mpcbchhatrapatisambhajinagarlab@mpcb.gov.in"]
            },
        ]
    },
    "Nashik": {
        title: "NASHIK",
        data: [
            {
                sNo: "1.",
                regionalOffice: "Nashik",
                address: "Udyog Bhavan, First Floor, Trimbak Road, Near ITI, Satpur, Nashik - 422007",
                jurisdiction: "Nashik, Ahilyanagar, Jalgaon, Dhule, Nandurbar district.",
                phone: ["0253-2365150"],
                fax: "0253-2365150",
                email: ["ronashik@mpcb.gov.in", "mpcbnashik@mpcb.gov.in"]
            },
            { sNo: "", regionalOffice: "Sub-Regional Offices", address: "", jurisdiction: "", phone: [], fax: "", email: [], isSubHeader: true },
            {
                sNo: "i.",
                regionalOffice: "S.R.O.Nashik",
                address: "Udyog Bhavan, First Floor, Trimbak Road, Near ITI, Satpur, Nashik - 422007",
                jurisdiction: "Nashik distrct.",
                phone: ["0253-2365161"],
                fax: "0253-2365161",
                email: ["sronashik@mpcb.gov.in"]
            },
            {
                sNo: "ii.",
                regionalOffice: "S.R.O. Jalgaon",
                address: "Old Shri Bhikamchand Jain Municipal Market Building, Hall No. A, 3rd floor, Jalgaon - 425 001",
                jurisdiction: "Jalgaon district",
                phone: ["0257-2221288"],
                fax: "0257-2221288",
                email: ["srojalgaon1@mpcb.gov.in"]
            },
            {
                sNo: "iii.",
                regionalOffice: "S.R.O. Dhule",
                address: "2nd Floor, Fulchand Plaza, B.C. College Road, Near S.S.V.P.S. Engineering College, Near vidya Nagari, Devpur, Dhule- 424 001",
                jurisdiction: "Dhule, Nandurbar district.",
                phone: ["02562-273730/273731"],
                fax: "-",
                email: ["srodhule@mpcb.gov.in"]
            },
            {
                sNo: "iv.",
                regionalOffice: "S.R.O. Ahilyanagar",
                address: "Savitribai Fule Vyapari Sankul, 1st Floor, Hall No. 2 & 3, Near TV Center, Savedi, Ahilyanagar - 414003",
                jurisdiction: "Ahilyanagar district.",
                phone: ["0241-2470852"],
                fax: "0241-2353852",
                email: ["sroahilyanagar@mpcb.gov.in"]
            },
            {
                sNo: "v.",
                regionalOffice: "Nashik Lab",
                address: "Udyog Bhavan, First Floor, Trimbak Road, Near ITI, Satpur, Nashik - 422007",
                jurisdiction: "-",
                phone: ["0253-2365150"],
                fax: "0241-2353852",
                email: ["mpcbnashiklab@mpcb.gov.in"]
            },
        ]
    },
    "Navi-Mumbai": {
        title: "NAVI-MUMBAI",
        data: [
            {
                sNo: "1.",
                regionalOffice: "Navi Mumbai",
                address: "Maharashtra Pollution Control Board, Raigad Bhavan, 7th floor, Sector - 11, C.B.D Belapur, Navi Mumbai",
                jurisdiction: "Part of Thane and Raigad district as mentioned against the Sub-Regional Offices.",
                phone: ["022-27572739"],
                fax: "022-27571586",
                email: ["ronavimumbai@mpcb.gov.in", "mpcbnavimumbai@mpcb.gov.in"]
            },
            { sNo: "", regionalOffice: "Sub-Regional Offices", address: "", jurisdiction: "", phone: [], fax: "", email: [], isSubHeader: true },
            {
                sNo: "i.",
                regionalOffice: "S.R.O.Navi Mumbai-I",
                address: "Raigad Bavan, 7th floor Sector - 11, C.B.D Belapur, Navi Mumbai",
                jurisdiction: "Vashi, Pavane, Turbhe, Sanpada, Belapur",
                phone: ["022-27572740"],
                fax: "-",
                email: ["sronavimumbai1@mpcb.gov.in"]
            },
            {
                sNo: "ii.",
                regionalOffice: "S.R.O. Navi Mumbai - II",
                address: "Raigad Bavan, 7th floor Sector - 11, C.B.D Belapur, Navi Mumbai",
                jurisdiction: "Mahape, Kopar-khairne, Sarvali, Ghansoli, Rabale, Airoli, Dighe",
                phone: ["022-27572740"],
                fax: "022-27571586",
                email: ["sronavimumbai2@mpcb.gov.in"]
            },
            {
                sNo: "iii.",
                regionalOffice: "S.R.O. Taloja",
                address: "Raigad Bavan, 7th floor Sector - 11, C.B.D Belapur, Navi Mumbai",
                jurisdiction: "MIDC Taloja and Uran Taluka.",
                phone: ["022-27572740"],
                fax: "022-27571586",
                email: ["srotaloja@mpcb.gov.in"]
            },
        ]
    },
    "Pune": {
        title: "PUNE",
        data: [
            {
                sNo: "1.",
                regionalOffice: "Pune",
                address: "Jog Center, 3rd floor, Mumbai Pune Road, Wakdewadi, Pune - 411003.",
                jurisdiction: "Pune Satara and Solapur district.",
                phone: ["020-25811627"],
                fax: "020-25811029",
                email: ["ropune@mpcb.gov.in", "mpcbpune@mpcb.gov.in"]
            },
            { sNo: "", regionalOffice: "Sub-Regional Offices", address: "", jurisdiction: "", phone: [], fax: "", email: [], isSubHeader: true },
            {
                sNo: "i.",
                regionalOffice: "S.R.O.Pune-I",
                address: "Jog Center, 3rd floor, Mumbai Pune Road, Wakdewadi, Pune - 411003.",
                jurisdiction: "Pune Corporation area, Daund, Indapur, Baramati, Purandar, Bhor and Velhe taluka of Pune district.",
                phone: ["020-25811694"],
                fax: "-",
                email: ["sropune1@mpcb.gov.in"]
            },
            {
                sNo: "ii.",
                regionalOffice: "S.R.O. Pune - II",
                address: "Jog Center, 3rd floor, Mumbai Pune Road, Wakdewadi, Pune - 411003.",
                jurisdiction: "Haveli taluka: (excluding Pimpri Chinchwad Corporation Area.) Khed, Mulshi, Ambegaon, Junnar, Maval and Shirur taluka of Pune district..",
                phone: ["020-25816451"],
                fax: "-",
                email: ["sropune2@mpcb.gov.in"]
            },
            {
                sNo: "iii.",
                regionalOffice: "S.R.O.Pimpri-Chichwad",
                address: "Jog Center, 3rd floor, Mumbai Pune Road, Wakdewadi, Pune - 411003.",
                jurisdiction: "Pimpri Chinchwad Municipal Corporation area including MIDC Pimpri, Bhosari and Akurdi.",
                phone: ["020-25810222"],
                fax: "-",
                email: ["sropimprichichwad@mpcb.gov.in"]
            },
            {
                sNo: "iv.",
                regionalOffice: "S.R.O.Satara",
                address: "Sub-Regional Office, Satara New Government Bhavan, 2nd Floor, Near S.T. Sand, Sadar Bazar, Satara - 415 001..",
                jurisdiction: "Satara district..",
                phone: ["02162-233527/237789"],
                fax: "02162-233527",
                email: ["srosatara@mpcb.gov.in"]
            },
            {
                sNo: "v.",
                regionalOffice: "S.R.O.Solapur",
                address: "4/B, Bali Block, Civil Lines, Oppsite Government Milk Scheme, Saat Rasta, Solapur - 413003.",
                jurisdiction: "Solapur district.",
                phone: ["0217-2319850"],
                fax: "0217",
                email: ["srosolapur@mpcb.gov.in"]
            },
            {
                sNo: "vi.",
                regionalOffice: "Pune Lab",
                address: "Jog Center, 3rd floor, Mumbai Pune Road, Wakdewadi, Pune - 411003.",
                jurisdiction: "Pune Corporation area, Daund, Indapur, Baramati, Purandar, Bhor and Velhe taluka of Pune district.",
                phone: ["020-25811694"],
                fax: "-",
                email: ["mpcbpunelab@mpcb.gov.in"]
            },
        ]
    },
    "Raigad": {
        title: "RAIGAD",
        data: [
            {
                sNo: "1.",
                regionalOffice: "Raigad",
                address: "Maharashtra Pollution Control Board, Raigad Bhavan, 6th floor, Sector - 11, C.B.D Belapur, Navi Mumbai- 400 614",
                jurisdiction: "Part of Raigad district as mentioned against the Sub-Regional Offices under him.",
                phone: ["022-27572620"],
                fax: "022-27562132",
                email: ["roraigad@mpcb.gov.in", "mpcbraigad@mpcb.gov.in"]
            },
            { sNo: "", regionalOffice: "Sub-Regional Offices", address: "", jurisdiction: "", phone: [], fax: "", email: [], isSubHeader: true },
            {
                sNo: "i.",
                regionalOffice: "S.R.O.Raigad-I",
                address: "Maharashtra Pollution Control Board, Raigad Bhavan, 6th floor, Sector - 11, C.B.D Belapur, Navi Mumbai.",
                jurisdiction: "Khalapur taluka and Panvel taluka (Except MIDC - Taloja).",
                phone: ["022-27572739"],
                fax: "022-27572620",
                email: ["sroraigad1@mpcb.gov.in"]
            },
            {
                sNo: "ii.",
                regionalOffice: "S.R.O. Raigad II",
                address: "Maharashtra Pollution Control Board, Raigad Bhavan, 6th floor, Sector - 11, C.B.D Belapur, Navi Mumbai.",
                jurisdiction: "Pen, Karjat, Sudhagad-Pali, Roha, Alibag and Murud taluka.",
                phone: ["022-022-27572739"],
                fax: "-",
                email: ["sroraigad2@mpcb.gov.in"]
            },
            {
                sNo: "iii.",
                regionalOffice: "S.R.O. Mahad",
                address: "Samaik Suvidha Kendra Building, MIDC - Mahad, District Raigad - 402 309",
                jurisdiction: "Mahad Mhasla, Mangaon, Shriwardhan and Poladpur taluka.",
                phone: ["02145-232372"],
                fax: "02145-232373",
                email: ["sromahad@mpcb.gov.in"]
            },
        ]
    },
    "Thane": {
        title: "THANE",
        data: [
            {
                sNo: "1.",
                regionalOffice: "Thane",
                address: "Maharashtra Pollution Control Board, Plot No P-30, 5th floor Office Complex Building Mulund Checknaka, Thane - 400 604",
                jurisdiction: "Part of Thane district as mentioned against the Sub-Regional Offices.",
                phone: ["022-25802272"],
                fax: "022-25805398",
                email: ["rothane@mpcb.gov.in", "mpcbthane@mpcb.gov.in"]
            },
            { sNo: "", regionalOffice: "Sub-Regional Offices", address: "", jurisdiction: "", phone: [], fax: "", email: [], isSubHeader: true },
            {
                sNo: "i.",
                regionalOffice: "SRO Thane I",
                address: "Plot No. P-30, 5th floor, Office Complex Building Mulund Checknaka, Thane.",
                jurisdiction: "Thane Municipal Corporation Area.",
                phone: ["022-25829582"],
                fax: "022-25805398",
                email: ["srothane1@mpcb.gov.in"]
            },
            {
                sNo: "ii.",
                regionalOffice: "S.R.O.Thane II",
                address: "Plot No. P - 30, 5th floor, Office Complex Mulund Checknaka, Thane.",
                jurisdiction: "Thane taluka excluding Thane Municipal Corporation Area Vasai taluka.",
                phone: ["022-25829582"],
                fax: "022-25805398",
                email: ["srothane2@mpcb.gov.in"]
            },
            {
                sNo: "iii.",
                regionalOffice: "S.R.O.Tarapur",
                address: "MIDC Office Building, Boisar Station, Post Taps, Tarapur, Dist Thane.",
                jurisdiction: "Tarapur MIDC and related area.",
                phone: ["02525-273314"],
                fax: "-",
                email: ["srotarapur1@mpcb.gov.in"]
            },
            {
                sNo: "iv.",
                regionalOffice: "SRO Tarapur II",
                address: "MIDC Office Building Boisar Station, Post Taps, Tarapur, Dist Thane",
                jurisdiction: "Dahanu, Talasari, Mokhada, Javhar and Vikramgadh taluka and Palghar taluka (Except SRO-Tarapur-I jurisdiction).",
                phone: ["02525-273314"],
                fax: "-",
                email: ["srotarapur2@mpcb.gov.in"]
            },
            {
                sNo: "v.",
                regionalOffice: "Thane Lab",
                address: "Plot No. P-30, 5th floor, Office Complex Building Mulund Checknaka, Thane.",
                jurisdiction: "Thane Municipal Corporation Area.",
                phone: ["022-25829582"],
                fax: "022-25805398",
                email: ["mpcbthanelab@mpcb.gov.in"]
            },
        ]
    },
    "Chandrapur": {
        title: "CHANDRAPUR",
        data: [
            {
                sNo: "1.",
                regionalOffice: "Chandrapur",
                address: "Udyog Bhavan, 1st Floor, Opp. Bus Stand, Railway Station Road, Chandrapur - 442401",
                jurisdiction: "Chandrapur, Gadchiroli district.",
                phone: ["07172-251965"],
                fax: "07172-251965",
                email: ["rochandrapur@mpcb.gov.in", "mpcbchandrapur@mpcb.gov.in"]
            },
            { sNo: "", regionalOffice: "Sub-Regional Offices", address: "", jurisdiction: "", phone: [], fax: "", email: [], isSubHeader: true },
            {
                sNo: "i.",
                regionalOffice: "S.R.O.Chandrapur-I",
                address: "Udyog Bhavan, 1st Floor, Opp. Bus Stand, Railway Station Road, Chandrapur - 442401",
                jurisdiction: "Chandrapur, district.",
                phone: ["07172-251965"],
                fax: "07172-251965",
                email: ["srochandrapur@mpcb.gov.in"]
            },
            {
                sNo: "ii.",
                regionalOffice: "Chandrapur Lab",
                address: "Regional Laboratory, Udyog Bhavan, 1st Floor, Opp. Bus Stand, Railway Station Road, Chandrapur - 442401",
                jurisdiction: "Chandrapur, Yavatmal district.",
                phone: ["(07172) 272416"],
                fax: "07172-251965",
                email: ["mpcbchandrapurlab@mpcb.gov.in"]
            },
        ]
    },
    "Amravati": {
        title: "AMRAVATI",
        data: [
            {
                sNo: "1.",
                regionalOffice: "Amravati",
                address: "Sahakar Surbhi* Bapatwadi near Vivekanand Colony, Amravati - 444606",
                jurisdiction: "Amravati, Akola, Buldhana, Vashim, Yavatmal",
                phone: ["0721-2563592/93/94/97"],
                fax: "0721-2563597",
                email: ["roamravati@mpcb.gov.in", "mpcbamravati@mpcb.gov.in"]
            },
            { sNo: "", regionalOffice: "Sub-Regional Offices", address: "", jurisdiction: "", phone: [], fax: "", email: [], isSubHeader: true },
            {
                sNo: "i.",
                regionalOffice: "S.R.O. Amravati I",
                address: "Sahakar Surbhi Bapatwadi near Vivekanand Colony, Amravati - 444606",
                jurisdiction: "Amravati district",
                phone: ["0721-2563592/93/94/97"],
                fax: "0721-2563593",
                email: ["sroamravati1@mpcb.gov.in"]
            },
            {
                sNo: "ii.",
                regionalOffice: "S.R.O. Amravati II",
                address: "Sahakar Surbhi Bapatwadi near Vivekanand Colony, Amravati - 444606",
                jurisdiction: "Vashim, Yavatmal District.",
                phone: ["0721-2563592/93/94/97"],
                fax: "0721-2563592",
                email: ["sroamravati2@mpcb.gov.in"]
            },
            {
                sNo: "iii.",
                regionalOffice: "S.R.O. Akola",
                address: "Sub-Regional Office, M.P.C. Board, Alsi Plot, Opp. Hutatma Smarak, Nehru Park Chowk, Akola - 444001.",
                jurisdiction: "Akola and Buldhana District.",
                phone: ["0724-2402344"],
                fax: "0724-2442344",
                email: ["sroakola@mpcb.gov.in"]
            },
        ]
    },
};

const cities = Object.keys(citiesData);

function Offices() {
    const [selectedCity, setSelectedCity] = useState<string>(cities[0]);

    const currentCityData = citiesData[selectedCity];

    return (
        <div>
            <AboutUsBanner />
            <Banner bannerSection="offices" />

            <div className="flex flex-col md:flex-row gap-8 md:gap-16 p-4 md:p-12 bg-white min-h-screen font-family-helvetica text-[#333] mx-0 md:ml-[90px] md:mr-[120px]">

                {/* Left Sidebar - City buttons */}
                <div className="w-full md:w-[280px] flex flex-col gap-3 md:gap-5">
                    {cities.map((city) => {
                        const isActive = selectedCity === city;
                        return (
                            <div
                                key={city}
                                onClick={() => setSelectedCity(city)}
                                className={`flex items-center justify-between px-4 md:px-6 py-4 md:py-5 rounded-[20px] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] cursor-pointer transition-all duration-200
                                    ${isActive
                                        ? 'border-2 border-[#00A3FF] bg-[#00A3FF]/5'
                                        : 'border border-gray-300 hover:border-[#00A3FF] hover:text-[#00A3FF]'
                                    }`}
                            >
                                <span className={`text-[14px] md:text-[16px] font-normal transition-colors duration-200 ${isActive ? 'text-[#00A3FF] font-medium' : 'text-gray-800'}`}>
                                    {city}
                                </span>
                            </div>
                        );
                    })}
                </div>

                {/* Right Content - Table */}
                <div className="flex-1 w-full min-w-0">
                    <h1 className="text-[24px] md:text-[28px] font-bold mb-6 md:mb-8 text-black border-b border-gray-200 pb-4">
                        {currentCityData?.title}
                    </h1>

                    {/* Table */}
                    <div className="border border-gray-200 rounded-[25px] overflow-hidden overflow-x-auto">
                        <table className="w-full border-collapse min-w-[1000px]">
                            <thead>
                                <tr className="border-b border-gray-200 bg-gray-50">
                                    <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700 w-16">Sr No</th>
                                    <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700 w-28">Regional Office</th>
                                    <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700 min-w-[150px]">Address</th>
                                    <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700">Jurisdiction</th>
                                    <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700 w-24">Phone</th>
                                    <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700 w-24">Fax</th>
                                    <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700">Email</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {currentCityData?.data.map((row, idx) => (
                                    row.isSubHeader ? (
                                        <tr key={idx} className="bg-gray-50">
                                            <td colSpan={7} className="py-4 px-4 text-[14px] font-bold text-black">
                                                {row.regionalOffice}
                                            </td>
                                        </tr>
                                    ) : (
                                        <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="py-4 px-4 text-[13px] text-gray-600 align-top">{row.sNo}</td>
                                            <td className="py-4 px-4 text-[13px] text-[#00A3FF] font-medium align-top">{row.regionalOffice}</td>
                                            <td className="py-4 px-4 text-[13px] text-gray-700 align-top">{row.address}</td>
                                            <td className="py-4 px-4 text-[13px] text-gray-700 align-top">{row.jurisdiction}</td>
                                            <td className="py-4 px-4 text-[13px] text-gray-700 align-top">
                                                {row.phone.map((p, i) => <div key={i}>{p}</div>)}
                                            </td>
                                            <td className="py-4 px-4 text-[13px] text-gray-700 align-top">{row.fax}</td>
                                            <td className="py-4 px-4 text-[13px] text-[#00A3FF] align-top">
                                                {row.email.map((e, i) => <div key={i}>{e}</div>)}
                                            </td>
                                        </tr>
                                    )
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Offices;
