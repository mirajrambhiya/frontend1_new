
import { useState, useRef } from 'react';
import { ChevronRight, ChevronLeft, ChevronsLeft, ChevronsRight } from 'lucide-react';
import PageBanner from '../../../components/PageBanner';

// Type definitions
interface TableRow {
    Sr_No: string;
    Name_Address_of_Company: string;
    Name_of_Product: string;
    Production_Capacity: string;
    Registration_No: string;
    Date_of_Registration: string;
    Validity_of_Registration: string;
}

const StatusOfRegistration = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 20;
    const topRef = useRef<HTMLDivElement>(null);

    // Table Data
    const tableData: TableRow[] = [
        {
            Sr_No: "1",
            Name_Address_of_Company: "M/s Pragati Plastic 136, Shivkrupa Industryal Easte, L.B.S. Marg, Vikhroli(W) Mumbai-83",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "400 kg/d",
            Registration_No: "MPCB/HWMD/PlasticReg/Y/B-1-2006",
            Date_of_Registration: "20/03/2006",
            Validity_of_Registration: "19/03/2011"
        },
        {
            Sr_No: "2",
            Name_Address_of_Company: "M/s New Pack Idustry 4, Janta Industrial Copound, Opp. Phinix Mill, Senapti Bapat Marge, Lower Parel Mumbai-013",
            Name_of_Product: "Carry bag virgin/ recycle",
            Production_Capacity: "600 kg/d",
            Registration_No: "MPCB/HWMD/Plastic Reg/Y/B-2-2006",
            Date_of_Registration: "24/03/2006",
            Validity_of_Registration: "23/03/2011"
        },
        {
            Sr_No: "3",
            Name_Address_of_Company: "M/s Sheetal Tarpulins Gold No. 31, Jamandas Industrial Est, Opp Jawahar tokies, Dr. R.P.Rd, Mulund (W)",
            Name_of_Product: "1. Carry bag virgin/ recycle 2. Container virgin",
            Production_Capacity: "100 kg/d 50 kg/d",
            Registration_No: "MPCB/HWMD/Plastic Reg/Y/B-3-2006",
            Date_of_Registration: "23/03/2006",
            Validity_of_Registration: "22/03/2011"
        },
        {
            Sr_No: "4",
            Name_Address_of_Company: "M/s Four “M” Polymech Industries, E- 8,MIDC Murbad, Dist. Thane",
            Name_of_Product: "Container virgin",
            Production_Capacity: "750 kg/d",
            Registration_No: "MPCB/HWMD/Plastic Reg/Y/B-4-2006",
            Date_of_Registration: "29/03/2006",
            Validity_of_Registration: "28/03/2011"
        },
        {
            Sr_No: "5",
            Name_Address_of_Company: "M/s Hema Plastics, 205 Ramgoapl Industrial Est Dr. R.P.Rd, Mulund (W) Mumbai-80",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "600 kg/d",
            Registration_No: "MPCB/HWMD/Plastic Reg/Y/B-5-2006",
            Date_of_Registration: "29/03/2006",
            Validity_of_Registration: "28/03/2011"
        },
        {
            Sr_No: "6",
            Name_Address_of_Company: "M/s Arun Enterprise 317, Ramgoapl Industrial Est Dr. R.P.Rd, Mulund (W) Mumbai-80",
            Name_of_Product: "Carry bag vrgin",
            Production_Capacity: "400 kg/d",
            Registration_No: "MPCB/HWMD/Plastic Reg/Y/B-6-2006",
            Date_of_Registration: "29/03/2006",
            Validity_of_Registration: "28/03/2011"
        },
        {
            Sr_No: "7",
            Name_Address_of_Company: "M/s Vicky Engineering works, 227, Ramgopal Ind Est. Mulund(W) Mumbai-400 080",
            Name_of_Product: "1.Carry bag virgin recycled 2.Container virgin",
            Production_Capacity: "650 kg/d 200 kg/d",
            Registration_No: "MPCB/HWMD/Plastic Reg/Y/B-7-2006",
            Date_of_Registration: "31/03/2006",
            Validity_of_Registration: "30/03/2011"
        },
        {
            Sr_No: "8",
            Name_Address_of_Company: "M/s Shalimar Pack MIDC TTC Indl Area, Tetavali, Rable, Thane Belaour Rd. Dist - Thane",
            Name_of_Product: "Carry bag virgin / recycled",
            Production_Capacity: "6.5 MT/d",
            Registration_No: "MPCB/HWMD/Plastic Reg/Y/B- 8 -2006",
            Date_of_Registration: "04/04/2006",
            Validity_of_Registration: "03/04/2011"
        },
        {
            Sr_No: "9",
            Name_Address_of_Company: "M/s Raj Plastic Unit No. 122, 1st Floor, Gobind Udyog bhavan Mulund- (w) Mumbai-80",
            Name_of_Product: "Container virgin",
            Production_Capacity: "162 kg/d",
            Registration_No: "MPCB/HWMD/Plastic Reg/Y/B- 9-2006",
            Date_of_Registration: "04/04/2006",
            Validity_of_Registration: "3/4/2011"
        },
        {
            Sr_No: "10",
            Name_Address_of_Company: "M/s Tirupati Print 78 Vishal Indl Easte Village Rd Bhandup-W Mumbai- 78",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "165 kg/d",
            Registration_No: "MPCB/HWMD/Plastic Reg/Y/B-10 -2006",
            Date_of_Registration: "04/04/2006",
            Validity_of_Registration: "03/04/2011"
        },
        {
            Sr_No: "11",
            Name_Address_of_Company: "M/s San-Ya Industries 39, Ground Floor, New Unique Ind Este Dr. R.P.R D Mulund-(w) Mumbai-80",
            Name_of_Product: "Container virgin",
            Production_Capacity: "685 kg/d",
            Registration_No: "MPCB/HWMD/Plastic Reg/Y/B-11 -2006",
            Date_of_Registration: "04/04/2006",
            Validity_of_Registration: "03/04/2011"
        },
        {
            Sr_No: "12",
            Name_Address_of_Company: "M/s Plastika Industries Plot No. R-33, TTC Ind Area, MIDC. Thane Belapur Rd. Tetavali Rabale, Navi Mumbai-01",
            Name_of_Product: "Carry bag virgin /recycled",
            Production_Capacity: "596 kg/d",
            Registration_No: "MPCB/HWMD/Plastic Reg/Y/B-12 -2006",
            Date_of_Registration: "04/04/2006",
            Validity_of_Registration: "03/04/2011"
        },
        {
            Sr_No: "13",
            Name_Address_of_Company: "M/s AMI Pyroflex Pvt. Ltd. F-9, 1/19/1 Hingna MIDC, Nagpur-440 016",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "380 kg/d",
            Registration_No: "MPCB/HWMD/Plastic Reg/Y/B-13 -2006",
            Date_of_Registration: "05/04/2006",
            Validity_of_Registration: "04/04/2011"
        },
        {
            Sr_No: "14",
            Name_Address_of_Company: "M/s Suresh Polymers Pvt. Ltd. U- 145, MIDC Hingana Road, Nagpur – 440016",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "1184 kg/d",
            Registration_No: "MPCB/HWMD/Plastic Reg/Y/B-14-2006",
            Date_of_Registration: "15/05/2006",
            Validity_of_Registration: "14/05/2011"
        },
        {
            Sr_No: "15",
            Name_Address_of_Company: "M/s Sita Packaging P. Ltd. W- 137, MIDC Hingna Rd, Nagpur-440 016",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "513 kg/d",
            Registration_No: "MPCB/HWMD/Plastic Reg/Y/B-15-2006",
            Date_of_Registration: "15/05/2006",
            Validity_of_Registration: "14/05/2011"
        },
        {
            Sr_No: "16",
            Name_Address_of_Company: "M/s Milar Plastic Industries K-47, MIDC Waluj, Albad Nrar Good Year Tyers Co. Aurangabad",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "162 kg/d",
            Registration_No: "MPCB/HWMD/Plastic Reg/Y/B-16-2006",
            Date_of_Registration: "05/04/2006",
            Validity_of_Registration: "04/04/2011"
        },
        {
            Sr_No: "17",
            Name_Address_of_Company: "M/s Mahavir plastics D-22 MIDC Ind Area Nagpur 440 028",
            Name_of_Product: "Container virgin",
            Production_Capacity: "806 kg/d",
            Registration_No: "MPCB/HWMD/Plastic Reg/Y/B-17-2006",
            Date_of_Registration: "05/04/2006",
            Validity_of_Registration: "04/04/2011"
        },
        {
            Sr_No: "18",
            Name_Address_of_Company: "M/s Aditi Enterprises. 6 A, Majithia Indl Este WT, Patil Marg, Chember Mumbai",
            Name_of_Product: "Carry bag recycled",
            Production_Capacity: "400 kg/d",
            Registration_No: "MPCB/HWMD/Plastic Reg/Y/B-18-2006",
            Date_of_Registration: "05/04/2006",
            Validity_of_Registration: "04/04/2011"
        },
        {
            Sr_No: "19",
            Name_Address_of_Company: "M/s Jay Agro Industries A/757. TTC, Area MIDC Mahape Navi Mumbai 400 705",
            Name_of_Product: "Carry bag recycled",
            Production_Capacity: "500 kg/d",
            Registration_No: "MPCB/HWMD/Plastic Reg/Y/B-19-2006",
            Date_of_Registration: "05/04/2006",
            Validity_of_Registration: "04/04/2011"
        },
        {
            Sr_No: "20",
            Name_Address_of_Company: "M/s Vibguor Ployprint 12 Ashok Indl Easte Near Living Room L.B.S Marg. Mulund-W.Mumbai- 80",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "334 kg/d",
            Registration_No: "MPCB/HWMD/Plastic Reg/Y/B-20-2006",
            Date_of_Registration: "15/04/2006",
            Validity_of_Registration: "14/04/2011"
        },
        {
            Sr_No: "21",
            Name_Address_of_Company: "M/s Plasto World, 240, Gobind Udyog Bhavan Indl. Est. Opp. Model Town, B.R. Rd, Mulund-W Mumbai-400 080.",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "334 kg/d",
            Registration_No: "MPCB/HWMD/Plastic Reg/Y/B-21-2006",
            Date_of_Registration: "15/04/2006",
            Validity_of_Registration: "14/04/2011"
        },
        {
            Sr_No: "22",
            Name_Address_of_Company: "M/s Kalptaru Blow Plast Shed No.W-44, Phase III MIDC. Shivni Akola- 444 104(MS).",
            Name_of_Product: "Container virgin / recycled",
            Production_Capacity: "500 kg/d",
            Registration_No: "MPCB/HWMD/Plastic Reg/Y/B-22-2006",
            Date_of_Registration: "15/04/2006",
            Validity_of_Registration: "14/04/2011"
        },
        {
            Sr_No: "23",
            Name_Address_of_Company: "M/s Hiral Prints 8 GR Floor, Anupam Indl Estate Bidg. No.-1 Off L.B.S.Marg, Mulund-W Mumbai - 400 080",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "250 kg/d",
            Registration_No: "MPCB/HWMD/Plastic Reg/Y/B-23-2006",
            Date_of_Registration: "15/04/2006",
            Validity_of_Registration: "14/04/2011"
        },
        {
            Sr_No: "24",
            Name_Address_of_Company: "M/s Manasi Industries Plot No. B- 43/2 MIDC, Ambad Nashik- 422 010",
            Name_of_Product: "Container virgin/ recycled",
            Production_Capacity: "200 kg/d",
            Registration_No: "MPCB/HWMD/Plastic Reg/Y/B-24-2006",
            Date_of_Registration: "15/04/2006",
            Validity_of_Registration: "14/04/2011"
        },
        {
            Sr_No: "25",
            Name_Address_of_Company: "M/s Jyoti Chemicals B-43/1, MIDC, Ambad Nashik-422 010",
            Name_of_Product: "Container virgin/ recycled",
            Production_Capacity: "500 kg/d",
            Registration_No: "MPCB/HWMD/Plastic Reg/Y/B-25-2006",
            Date_of_Registration: "15/04/2006",
            Validity_of_Registration: "14/04/2011"
        },
        {
            Sr_No: "26",
            Name_Address_of_Company: "M/s Swastik Plasto A/19, STICE Musalgaon Tal- Sinar Dist Nashik",
            Name_of_Product: "Carry bag virgin / recycled",
            Production_Capacity: "148 kg /d",
            Registration_No: "MPCB/HSMD/Plastic Reg/Y/B-26-2006",
            Date_of_Registration: "27/04/2006",
            Validity_of_Registration: "26/04/2006"
        },
        {
            Sr_No: "27",
            Name_Address_of_Company: "M/s Navin Plastics Pvt Ltd. D – 12 / 9 T.T.C. Indl Area Rekunda Village Turbhe Navi Mumbai – 400 705",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "400 kg /d",
            Registration_No: "MPCB/HSMD/Plastic Reg/Y/B-27-2006",
            Date_of_Registration: "27/04/2006",
            Validity_of_Registration: "26/04/2011"
        },
        {
            Sr_No: "28",
            Name_Address_of_Company: "M/s Flexo World 241,Govind Udyog,Bhavan Opp Model Town, B.R. Road, Mulund (W) Mumbai-400 080.",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.23MT /d",
            Registration_No: "MPCB/HSMD/Plastic Reg/Y/B-28-2006",
            Date_of_Registration: "27/04/2006",
            Validity_of_Registration: "26/04/2011"
        },
        {
            Sr_No: "29",
            Name_Address_of_Company: "M/s Easy Pack Plastics Pvt.Ltd D / 5 / 6 T.T.C. Indl Area",
            Name_of_Product: "Carry bag virgin/ recycled",
            Production_Capacity: "300 kg /d",
            Registration_No: "MPCB/HSMD/Plastic Reg/Y/B-29-2006",
            Date_of_Registration: "27/04/2006",
            Validity_of_Registration: "26/04/2011"
        },
        {
            Sr_No: "30",
            Name_Address_of_Company: "M/s Elegant Packaging 26 Vardhman Indl Easte S.V. Road Dahisar (E) Mumbai - 68",
            Name_of_Product: "Carry bag virgin / recycled",
            Production_Capacity: "600 kg /d",
            Registration_No: "MPCB/HSMD/Plastic Reg/Y/B-30-2006",
            Date_of_Registration: "27/04/2006",
            Validity_of_Registration: "26/04/2011"
        },
        {
            Sr_No: "31",
            Name_Address_of_Company: "M/s V.K. Printers 348, Kewal Industrial Easte Senapati Bapatb Marg, Lower Parel Mumbai – 400 013",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "500 kg /d",
            Registration_No: "MPCB/HSMD/Plastic Reg/Y/B-31-2006",
            Date_of_Registration: "27/04/2006",
            Validity_of_Registration: "26/04/2011"
        },
        {
            Sr_No: "32",
            Name_Address_of_Company: "M/s Arun Flexo Printers B – 118 Sussex Industrial Easte,Dadoji Kondeo Cross Marg,Byculla, Mumbai – 400 027",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "250 kg /d",
            Registration_No: "MPCB/HSMD/Plastic Reg/Y/B-32-2006",
            Date_of_Registration: "27/04/2006",
            Validity_of_Registration: "26/04/2011"
        },
        {
            Sr_No: "33",
            Name_Address_of_Company: "M/s Thakker nanji Jadavji Shree Bombay Cotton Mills Easte Block No. 23, Kalachoki Rd. Mumbai – 400 033",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "800 kg /d",
            Registration_No: "MPCB/HSMD/Plastic Reg/Y/B-33-2006",
            Date_of_Registration: "27/04/2006",
            Validity_of_Registration: "26/04/2011"
        },
        {
            Sr_No: "34",
            Name_Address_of_Company: "M/s Millennium Plastic 28, Nav Nandanvan Ind. Estate,LAB RD, Mulund (W), Mumbai - 80",
            Name_of_Product: "Container virgin",
            Production_Capacity: "50 MT /d",
            Registration_No: "MPCB/HSMD/Plastic Reg/Y/B-34-2006",
            Date_of_Registration: "26/04/2006",
            Validity_of_Registration: "25/04/2011"
        },
        {
            Sr_No: "35",
            Name_Address_of_Company: "M/s Sejpal Plastic Pvt. Ltd. Plot No. C – 453 TTC Industrial Area, MIDC Turbhe, Navi Mumbai – 400 705",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "1.2 MT /d",
            Registration_No: "MPCB/HSMD/Plastic Reg/Y/B-35-2006",
            Date_of_Registration: "26/04/2006",
            Validity_of_Registration: "25/04/2011"
        },
        {
            Sr_No: "36",
            Name_Address_of_Company: "M/s Shree Govind Business 2111, Govind Niwas Near MIDC, Kudal, Sindhudurg.",
            Name_of_Product: "Carry bag virgin / recycled",
            Production_Capacity: "200 kg /d",
            Registration_No: "MPCB/HSMD/Plastic Reg/Y/B-36-2006",
            Date_of_Registration: "26/04/2006",
            Validity_of_Registration: "25/04/2011"
        },
        {
            Sr_No: "37",
            Name_Address_of_Company: "M/s Mono Plastics 26, Ashok Industrial Easte 1st Floor, L.B.S. Marg Mulund (W), Mumbai – 400 080",
            Name_of_Product: "Container virgin",
            Production_Capacity: "1MT/d",
            Registration_No: "MPCB/HSMD/Plastic Reg/Y/B-37-2006",
            Date_of_Registration: "02/05/2006",
            Validity_of_Registration: "01/05/2011"
        },
        {
            Sr_No: "38",
            Name_Address_of_Company: "M/s Delight Plastics 52,Ramgopal Industrial Easte, PH – II, R.R. Road, Mulund (W) Mumbai-400 080.",
            Name_of_Product: "Container virgin",
            Production_Capacity: "0.33 MT/d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-38-2006",
            Date_of_Registration: "02/05/2006",
            Validity_of_Registration: "01/05/2011"
        },
        {
            Sr_No: "39",
            Name_Address_of_Company: "M/s Kailash Poly Industries Pvt. Ltd. Plot No. A – 7/ 3,MIDC Hingna Nagpur - 440016",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "1.5MT/d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-39-2006",
            Date_of_Registration: "02/05/2006",
            Validity_of_Registration: "01/05/2011"
        },
        {
            Sr_No: "40",
            Name_Address_of_Company: "M/s Sonegaon Wrappers Pvt. Ltd. Plot No. M-11/3, 0MIDC, Hingna Rd, Nagpur",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "1.0 MT/d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-40-2006",
            Date_of_Registration: "02/05/2006",
            Validity_of_Registration: "01/05/2011"
        },
        {
            Sr_No: "41",
            Name_Address_of_Company: "M/s Delta Plastic Unit 112 Bharat Indusrial Easte, T.J. Rd, Sewree, Mumbai- 400 015.",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "200 kg /d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-41-2006",
            Date_of_Registration: "02/05/2006",
            Validity_of_Registration: "01/05/2011"
        },
        {
            Sr_No: "42",
            Name_Address_of_Company: "M/s Polester Plastic Industries 205, Gambhir Ind Estate, Off: Aary Rd,Goregaon (East), Mumbai - 400 063",
            Name_of_Product: "Container virgin",
            Production_Capacity: "60 kg /d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-42-2006",
            Date_of_Registration: "02/05/2006",
            Validity_of_Registration: "01/05/2011"
        },
        {
            Sr_No: "43",
            Name_Address_of_Company: "M/s Mothara Industries W – 63 MIDC Rabale, Thane- Belapur Rd ,Navi Mumbai",
            Name_of_Product: "Carry bag virgin / recycled",
            Production_Capacity: "1000 kg /d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-43-2006",
            Date_of_Registration: "02/05/2006",
            Validity_of_Registration: "01/05/2011"
        },
        {
            Sr_No: "44",
            Name_Address_of_Company: "M/s Jay Plastic Industries 109, Bharat Industrial Easte, Tokorshi Jiviaj Rd ,Sewree  Mumbai- 400 015",
            Name_of_Product: "Carry bag virgin/ recycled",
            Production_Capacity: "150 kg /d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-44-2006",
            Date_of_Registration: "15/05/2006",
            Validity_of_Registration: "14/05/2011"
        },
        {
            Sr_No: "45",
            Name_Address_of_Company: "M/s Shubham Enterprise, 208 Raja Industrial Estate,P.K. Road, Mulund, Mumbai - 80",
            Name_of_Product: "Container virgin",
            Production_Capacity: "200 kg /d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-45-2006",
            Date_of_Registration: "15/05/2006",
            Validity_of_Registration: "14/05/2011"
        },
        {
            Sr_No: "46",
            Name_Address_of_Company: "M/s Ployfeb Plastic Industries  2 /14, Lalwani Industrial Easte,           G.D. Ambekar Rd. Wadala Mumbai-400 031",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "500 kg /d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-46-2006",
            Date_of_Registration: "15/05/2006",
            Validity_of_Registration: "14/05/2011"
        },
        {
            Sr_No: "47",
            Name_Address_of_Company: "M/s  Shreeji Ploypack Nagut Sheet No. 47 Plot No-2, Talav Rd Timber Market , Yavatmal Dist -Yavatmal",
            Name_of_Product: "Carry bag /recycled",
            Production_Capacity: "250 kg /d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-47-2006",
            Date_of_Registration: "15/05/2006",
            Validity_of_Registration: "14/05/2011"
        },
        {
            Sr_No: "48",
            Name_Address_of_Company: "M/s Jai Industries 16, Samrat Silk Mill Compound L.B.S. Marg, Vikhroli –(W), Mubmai-78",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "167 Kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-48-2006",
            Date_of_Registration: "15/05/2006",
            Validity_of_Registration: "14/05/2011"
        },
        {
            Sr_No: "49",
            Name_Address_of_Company: "M/s Trimurti Plastics A-19 MIDC Walne Tal-Dapoli,Dist- Ratnagri",
            Name_of_Product: "Container virgin",
            Production_Capacity: "0.1 MT/ d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-49-2006",
            Date_of_Registration: "15/05/2006",
            Validity_of_Registration: "14/05/2011"
        },
        {
            Sr_No: "50",
            Name_Address_of_Company: "M/s  Saras Industries W-44 (A) MIDC Industrial  Area, Ahmednagar- 414 111",
            Name_of_Product: "Carry bag virgin / recycled",
            Production_Capacity: "500 kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-50 -2006",
            Date_of_Registration: "15/05/2006",
            Validity_of_Registration: "14/05/2011"
        },
        {
            Sr_No: "51",
            Name_Address_of_Company: "M/s Varsha WaterProof Products 79- 81, Shree Bombay Cotton Mills Easte,Gala No. 23/A Dattaram Land Marg, Kalachawki Rd, Mumbai- 400 033",
            Name_of_Product: "Carry bag virgin / recycled",
            Production_Capacity: "500 kg /d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-51-2006",
            Date_of_Registration: "15/05/2006",
            Validity_of_Registration: "14/05/2011"
        },
        {
            Sr_No: "52",
            Name_Address_of_Company: "M/s Sagar Plastic D – 24, MIDC, Nagpur- 440 028",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "300 kg /d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-52-2006",
            Date_of_Registration: "15/05/2006",
            Validity_of_Registration: "14/05/2011"
        },
        {
            Sr_No: "53",
            Name_Address_of_Company: "M/s Shree Bhavani Enggineering Work W- 67 MIDC  Rabale Rd, Navi Mumbai – 400 701",
            Name_of_Product: "Carry bag recycled",
            Production_Capacity: "1000 kg /d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-53-2006",
            Date_of_Registration: "15/05/2006",
            Validity_of_Registration: "14/05/2011"
        },
        {
            Sr_No: "54",
            Name_Address_of_Company: "M/s Soham Industries B-22 Minerva Industrial Easte, Off P.K. Road, Mulund – (w) Mumbai – 400 080",
            Name_of_Product: "Container virgin",
            Production_Capacity: "0.42 MT/ d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-54-2006",
            Date_of_Registration: "15/05/2006",
            Validity_of_Registration: "14/05/2011"
        },
        {
            Sr_No: "55",
            Name_Address_of_Company: "M/s S.K.Implex (India)  32, Minrva Indl Easte, L.B.S. Marg, Mulund –(W) Mumbai–4000 080",
            Name_of_Product: "Container virgin",
            Production_Capacity: "0.33 MT/M",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-55-2006",
            Date_of_Registration: "15/05/2006",
            Validity_of_Registration: "14/05/2011"
        },
        {
            Sr_No: "56",
            Name_Address_of_Company: "M/s Manish Plast F 2/1 MIDC,Amravati Dist – Amravati",
            Name_of_Product: "Carry bag virgin / recycled",
            Production_Capacity: "0.8 T /d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-56-2006",
            Date_of_Registration: "15/05/2006",
            Validity_of_Registration: "14/05/2011"
        },
        {
            Sr_No: "57",
            Name_Address_of_Company: "M/s Crystal Packagings 211, New Stguru, Nanik Industrial Easte,Goregaon- (E) Mumbai – 400 101",
            Name_of_Product: "Carry bag virgin / Container virgin",
            Production_Capacity: "8 T / d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-57-2006",
            Date_of_Registration: "15/05/2006",
            Validity_of_Registration: "14/05/2011"
        },
        {
            Sr_No: "58",
            Name_Address_of_Company: "M/s Raj Plastics Unit No. A / 2 Ground Floor,Minerva Industrial Easte, Off, Ralliwolf, L.B.S. Marg,Mulund-(W) Mumbai – 80",
            Name_of_Product: "Container virgin",
            Production_Capacity: "0.83   MT/d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-58-2006",
            Date_of_Registration: "15/05/2006",
            Validity_of_Registration: "14/05/2011"
        },
        {
            Sr_No: "59",
            Name_Address_of_Company: "M/s Datta Plastics C.S. No. 105 At : Bhore,Post : GhtaeadeTal : Mushi Dist – Pune",
            Name_of_Product: "Container virgin",
            Production_Capacity: "160 kg / d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-59-2006",
            Date_of_Registration: "15/05/2006",
            Validity_of_Registration: "15/05/2011"
        },
        {
            Sr_No: "60",
            Name_Address_of_Company: "M/s Marketing Plastics 3/4 Nahar Parekh Ind. Easte No. 3 Vadkun, Dahanu Road, Dist- Thane",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "12  T /d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-60 -2006",
            Date_of_Registration: "15/05/2006",
            Validity_of_Registration: "14/05/2011"
        },
        {
            Sr_No: "61",
            Name_Address_of_Company: "M/s  Polyfilms Industries Plot No. M – 28, MIDC Hingna Rd. Nagapur",
            Name_of_Product: "Carry bag virgin / recycled",
            Production_Capacity: "3 MT/d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B- 61-2006",
            Date_of_Registration: "15/05/2006",
            Validity_of_Registration: "14/05/2011"
        },
        {
            Sr_No: "62",
            Name_Address_of_Company: "M/s Ravi Packaging C – 31 MIDC Area Amravatim- 444 605",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.5 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B- 62-2006",
            Date_of_Registration: "15/05/2006",
            Validity_of_Registration: "14/05/2011"
        },
        {
            Sr_No: "63",
            Name_Address_of_Company: "M/s JBL Saks Pvt. Ltd. B- 29, MIDC Murbad Rd,Thane Dist-Thane",
            Name_of_Product: "Container virgin",
            Production_Capacity: "1.6 MT/d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-63 -2006",
            Date_of_Registration: "15/05/2006",
            Validity_of_Registration: "14/05/2011"
        },
        {
            Sr_No: "64",
            Name_Address_of_Company: "M/s Mum’s World Baby Products Gala No. 63-64, H Wing,Atgaon Industrialn Complex, Vaillage Atgaon,Tal – Shahapur,Dist– Thane - 421 601",
            Name_of_Product: "Container virgin",
            Production_Capacity: "1 MT/d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-64 -2006",
            Date_of_Registration: "15/05/2006",
            Validity_of_Registration: "14/05/2011"
        },
        {
            Sr_No: "65",
            Name_Address_of_Company: "M/s. Jai Jalaram Poly Industries Kh. No. 219, 220, Pl. No. 61 – A Ph No. 6, Village - Nagalwadi, Tal- Hingna,Dist-Nagpur.",
            Name_of_Product: "Carry bag virgin / recycled",
            Production_Capacity: "0.19 MT/d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B- 65-2006",
            Date_of_Registration: "15/05/2006",
            Validity_of_Registration: "14/05/2011"
        },
        {
            Sr_No: "66",
            Name_Address_of_Company: "M/s  Mayur Plastics G. No. 1034 Laxminagar Bedag, Tal- Miraj Dist – Sangli",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.200  MT/d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B- 66-2006",
            Date_of_Registration: "15/05/2006",
            Validity_of_Registration: "14/05/2011"
        },
        {
            Sr_No: "67",
            Name_Address_of_Company: "M/s  Saras Industries W-21(A)MIDC Indl   Area,Ahmednagar- 414 111.",
            Name_of_Product: "Carry bag virgin / recycled",
            Production_Capacity: "500 kg / d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B- 67-2006",
            Date_of_Registration: "15/05/2006",
            Validity_of_Registration: "14/05/2011"
        },
        {
            Sr_No: "68",
            Name_Address_of_Company: "M/s Major Plastics S. No. 824 / 9 Village Mahim Chintupad, Palghar Dist- Thane-401 404",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.75  MT/d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B- 68-2006",
            Date_of_Registration: "15/05/2006",
            Validity_of_Registration: "14/05/2011"
        },
        {
            Sr_No: "69",
            Name_Address_of_Company: "M/s Shaktiman Plastics Unit no. 129, First Floor,Ramgopal Industrial Easte Opp. Jawaharlal Talkies Dr. R.P. Rd., Mumbai-400 080.",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.2  MT/d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B- 69-2006",
            Date_of_Registration: "15/05/2006",
            Validity_of_Registration: "14/05/2011"
        },
        {
            Sr_No: "70",
            Name_Address_of_Company: "M/s  Mahavir Poly Pack Unit no. 17, GR Floor, Jamnadas  IndustrialEaste, Dr. R.P. Rd.,Mulund-(W)Mumbai- 400 080.",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.33 MT/d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B- 70-2006",
            Date_of_Registration: "15/05/2006",
            Validity_of_Registration: "14/05/2011"
        },
        {
            Sr_No: "71",
            Name_Address_of_Company: "M/s Sanco Plast A – 25 Basarkhed, Tal -Malkapur Dist – Buldhna",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "200 kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B- 71-2006",
            Date_of_Registration: "20/05/2006",
            Validity_of_Registration: "19/05/2011"
        },
        {
            Sr_No: "72",
            Name_Address_of_Company: "M/s Disha Industries C- 38 MIDC Amravati Dist - Amravati",
            Name_of_Product: "Container virgin",
            Production_Capacity: "410 T /d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B- 72 -2006",
            Date_of_Registration: "20/05/2006",
            Validity_of_Registration: "19/05/2011"
        },
        {
            Sr_No: "73",
            Name_Address_of_Company: "M/s Khemka Plastics M – 8, Laxi Industrial Easte, New Link Rd, Andhri-(W), Mumbai- 53.",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "200 kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B- 73-2006",
            Date_of_Registration: "20/05/2006",
            Validity_of_Registration: "19/05/2011"
        },
        {
            Sr_No: "74",
            Name_Address_of_Company: "M/s Dipjim Enterprises Gala No. 12, 1 st Floor Shilay Industrial Estate, Udyog Nagar S.V. Rd, Goregaon- (W) Mumbai – 62,",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "334 kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B- 74-2006",
            Date_of_Registration: "20/05/2006",
            Validity_of_Registration: "19/05/2011"
        },
        {
            Sr_No: "75",
            Name_Address_of_Company: "M/s Moulders poly Print Gala No. 10, Mehats Industrial Estate, I.B. Patel Rd, Goregaon-(E) Mumbai-63.",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.3 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B- 75 -2006",
            Date_of_Registration: "20/05/2006",
            Validity_of_Registration: "19/05/2011"
        },
        {
            Sr_No: "76",
            Name_Address_of_Company: "M/s Parmananddas J Sangani (HUF) 22, Raja Industrial Estate,2 nd Floor, P.K. Rd, Mulund (W) Mumbai - 80",
            Name_of_Product: "Container virgin",
            Production_Capacity: "0.2 MT/d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B- 76-2006",
            Date_of_Registration: "06/06/2006",
            Validity_of_Registration: "05/06/2011"
        },
        {
            Sr_No: "77",
            Name_Address_of_Company: "M/s D.K. Industries B-8 MIDC Area, Amaravati –444 605",
            Name_of_Product: "Carry bag virgin/ recycled",
            Production_Capacity: "0.26 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B- 77 -2006",
            Date_of_Registration: "06/06/2006",
            Validity_of_Registration: "05/06/2011"
        },
        {
            Sr_No: "78",
            Name_Address_of_Company: "M/s Vaibhav Industries MIDC Plot No. D –10, Miraj – 416 410.",
            Name_of_Product: "Container virgin / recycled",
            Production_Capacity: "0.083 MT/d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B- 78 -2006",
            Date_of_Registration: "06/06/2006",
            Validity_of_Registration: "05/06/2011"
        },
        {
            Sr_No: "79",
            Name_Address_of_Company: "M/s Devika Plastics, W – 62, MIDC Kupwad, Sangli- 416 036.",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.350 MT/d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B- 79 -2006",
            Date_of_Registration: "06/06/2006",
            Validity_of_Registration: "05/06/2011"
        },
        {
            Sr_No: "80",
            Name_Address_of_Company: "M/s Prasad Engineers 33, Satyam Easte, 35-A, Erandvana Off Kurve Rd, Pune- 38 .",
            Name_of_Product: "Carry bag virgin / recycled",
            Production_Capacity: "0.5 MT/ d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B- 80 -2006",
            Date_of_Registration: "06/06/2006",
            Validity_of_Registration: "05/06/2011"
        },
        {
            Sr_No: "81",
            Name_Address_of_Company: "M/s Nagpur Polyfilms Pvt. Ltd Plot No. M-91/18 Industrial Area, Hingna Rd , Nagpur .",
            Name_of_Product: "Container virgin /recycled",
            Production_Capacity: "2 MT/d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B- 81 -2006",
            Date_of_Registration: "06/06/2006",
            Validity_of_Registration: "05/06/2011"
        },
        {
            Sr_No: "82",
            Name_Address_of_Company: "M/s Shree Plaste-o-Craft B- 88, Shri Laxmi Co- Oprative Ind Estate, Hatkanagale, Dist- Kolhapur .",
            Name_of_Product: "Carry bag virgin / recycled",
            Production_Capacity: "1MT/d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B- 82 -2006",
            Date_of_Registration: "06/06/2006",
            Validity_of_Registration: "05/06/2011"
        },
        {
            Sr_No: "83",
            Name_Address_of_Company: "M/s Kailash Poly Industries Pvt. Ltd Plot No. A 7/3, MIDC Kalmeshwar, Nagpur.",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "1.5 MT/d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B- 83 -2006",
            Date_of_Registration: "06/06/2006",
            Validity_of_Registration: "05/06/2011"
        },
        {
            Sr_No: "84",
            Name_Address_of_Company: "M/s Pankaj Trading Company, Gala No. 118, 1 st Floor, Plot No.- 7 Udyog Nagar Goregaon –W Mumbai- 62.",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "10 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B- 84 -2006",
            Date_of_Registration: "06/06/2006",
            Validity_of_Registration: "05/06/2011"
        },
        {
            Sr_No: "85",
            Name_Address_of_Company: "M/s Global Plastics At- Temghar Tal- Mahad Dist- Raigad.",
            Name_of_Product: "1. Carry bag virgin / recycled 2. Container virgin / recycled",
            Production_Capacity: "0.4 1T/d 0.41T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B- 85 -2006",
            Date_of_Registration: "06/06/2006",
            Validity_of_Registration: "05/06/2011"
        },
        {
            Sr_No: "86",
            Name_Address_of_Company: "M/s Unique Polyplast Pvt. Ltd Plot No. D- 35, MIDC Mahad,Dist- Raigad.",
            Name_of_Product: "Container virgin / recycled",
            Production_Capacity: "2 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B- 86 -2006",
            Date_of_Registration: "06/06/2006",
            Validity_of_Registration: "05/06/2011"
        },
        {
            Sr_No: "87",
            Name_Address_of_Company: "M/s Unicon Products 29/j Luxmi Indl Estate,New Link Rd, Andheri-(W) Mumbai- 53",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.4 MT / d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B- 87 -2006",
            Date_of_Registration: "06/06/2006",
            Validity_of_Registration: "05/06/2011"
        },
        {
            Sr_No: "88",
            Name_Address_of_Company: "M/s Pooja packwell ( India) Pvt. Ltd M – 25, MIDC Indl Area, Hingna Rd. Nagpur.",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "6.67 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B- 88 -2006",
            Date_of_Registration: "06/06/2006",
            Validity_of_Registration: "05/06/2011"
        },
        {
            Sr_No: "89",
            Name_Address_of_Company: "M/s Pawan Plast C-14, Co-op Indl Estate Saturha Bhandara Rd, Amravati .",
            Name_of_Product: "Containert virgin",
            Production_Capacity: "0.187 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B- 89 -2006",
            Date_of_Registration: "06/06/2006",
            Validity_of_Registration: "05/06/2011"
        },
        {
            Sr_No: "90",
            Name_Address_of_Company: "M/s Pearl Polyplmers Ltd. B-3/5, MIDC Mahad, Dist- Raigad - 309",
            Name_of_Product: "Container virgin",
            Production_Capacity: "16.66 MT/d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B- 90 -2006",
            Date_of_Registration: "06/06/2006",
            Validity_of_Registration: "05/06/2011"
        },
        {
            Sr_No: "91",
            Name_Address_of_Company: "M/s Multi-Flex Lumi-Print Ltd, Plot No. D- 54/58, MIDC Mahad , Dist – Raigad.",
            Name_of_Product: "Container virgin",
            Production_Capacity: "42 MT /d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B- 91 -2006",
            Date_of_Registration: "06/06/2006",
            Validity_of_Registration: "05/06/2011"
        },
        {
            Sr_No: "92",
            Name_Address_of_Company: "M/s Kothari Pastic Industries W – 14 ,MIDC Area, Amravati .",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.18 T/ d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B- 92 -2006",
            Date_of_Registration: "06/06/2006",
            Validity_of_Registration: "05/06/2011"
        },
        {
            Sr_No: "93",
            Name_Address_of_Company: "M/s Kothari Packaging Industries W-14, MIDC Area, Amravati",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.183 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B- 93 -2006",
            Date_of_Registration: "06/06/2006",
            Validity_of_Registration: "05/06/2011"
        },
        {
            Sr_No: "94",
            Name_Address_of_Company: "M/s Sudarshan Plastics K – 42, MIDC, Higna Rd, Nagpur- 440016",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "2 T/ d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B- 94 -2006",
            Date_of_Registration: "06/06/2006",
            Validity_of_Registration: "05/06/2011"
        },
        {
            Sr_No: "95",
            Name_Address_of_Company: "M/s Prasad Plastics W- 164, MIDC PhaseII,Dombivali-E, Thane- 204",
            Name_of_Product: "Carry bag virgin / recycled",
            Production_Capacity: "1.00 MT/ d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B- 95 -2006",
            Date_of_Registration: "06/06/2006",
            Validity_of_Registration: "05/06/2011"
        },
        {
            Sr_No: "96",
            Name_Address_of_Company: "M/s Rasal Plastic Plot No. D-69, MIDC Mahad Dist-Raigad.",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "667 kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B- 96 -2006",
            Date_of_Registration: "06/06/2006",
            Validity_of_Registration: "05/06/2011"
        },
        {
            Sr_No: "97",
            Name_Address_of_Company: "M/s Goavari Polymers Plot No. 34 Estarn Industrial Estate, Chikhali lay out Mini Mata Nagar, Nagpur.",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.4 T/ d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B- 97 -2006",
            Date_of_Registration: "06/06/2006",
            Validity_of_Registration: "05/06/2011"
        },
        {
            Sr_No: "98",
            Name_Address_of_Company: "M/s Print-N-Pack 202, Ashirwad Ind. Estate, Bldg No.-2 Ram Mandhir Rd, Goregaon-W, Mumbai-104.",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.33 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B- 98 -2006",
            Date_of_Registration: "06/06/2006",
            Validity_of_Registration: "05/06/2011"
        },
        {
            Sr_No: "99",
            Name_Address_of_Company: "M/s Shree Balaji Packaging Gala No. 16 Bld. No.- 3, Ground Floor, Ram Mandhir Ind.PRFCo op Soc Ltd.,Goregaon –(E) Mumbai- 63",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.3 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B- 99 -2006",
            Date_of_Registration: "06/06/2006",
            Validity_of_Registration: "05/06/2011"
        },
        {
            Sr_No: "100",
            Name_Address_of_Company: "M/s Bharat Plastic Industries 6 - Kohinoor Textile Printing ompound, L.B.S Marg Mumbai- 86.",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.17 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B- 100 -2006",
            Date_of_Registration: "06/06/2006",
            Validity_of_Registration: "05/06/2011"
        },
        {
            Sr_No: "101",
            Name_Address_of_Company: "M/s Radhakrishna Industries 236, 2 nd Floor, ‘A' Wing Shanti Ind. Estate, S.N. Rd,Tambe Nagar, Mulund-(W) Mumbai – 80.",
            Name_of_Product: "Container virgin",
            Production_Capacity: "0.5 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B- 101 -2006",
            Date_of_Registration: "06/06/2006",
            Validity_of_Registration: "05/06/2011"
        },
        {
            Sr_No: "102",
            Name_Address_of_Company: "M/s Amlik Packaging Pvt. Ltd Village- Sarsang, Tal- Khalapur Dist- Raigad .",
            Name_of_Product: "Container virgin /recycled",
            Production_Capacity: "300 kg /d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B- 102 -2006",
            Date_of_Registration: "06/06/2006",
            Validity_of_Registration: "05/06/2011"
        },
        {
            Sr_No: "103",
            Name_Address_of_Company: "M/s Shreeji Poly Plast 11/C, Samarat Silk Mill Compound, L.B.S. Marg, Vikhroli (W), Mumbai- 79.",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.66 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B- 103 -2006",
            Date_of_Registration: "06/06/2006",
            Validity_of_Registration: "05/06/2011"
        },
        {
            Sr_No: "104",
            Name_Address_of_Company: "M/s Unique Plastics 29, Unique Industrial Estate, Dr. R.P. Rd , Mulund-W, Mumbai – 80.",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "400 kg/day",
            Registration_No: "MPCB/HSMD/Plastic Reg/B- 104 -2006",
            Date_of_Registration: "06/06/2006",
            Validity_of_Registration: "05/06/2011"
        },
        {
            Sr_No: "105",
            Name_Address_of_Company: "M/s Hadrik Plast 122, Unique Industrial Estate, Dr. R.P. Rd , Mulund-(W) Mumbai – 80.",
            Name_of_Product: "Container virgin",
            Production_Capacity: "1 T / d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B- 105 -2006",
            Date_of_Registration: "06/06/2006",
            Validity_of_Registration: "05/06/2011"
        },
        {
            Sr_No: "106",
            Name_Address_of_Company: "M/s Shri Jalaram Industries 257, Small Factory Area, Wardhman Nagar Nagpur-8",
            Name_of_Product: "Carry bag virgin / recycled",
            Production_Capacity: "0.67 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B- 106 -2006",
            Date_of_Registration: "16/06/2006",
            Validity_of_Registration: "15/06/2011"
        },
        {
            Sr_No: "107",
            Name_Address_of_Company: "M/s Shri Jalaram Polymers Pvt. Ltd. Plot No. 54, Chikhali Layout Kalamana Nagpur.",
            Name_of_Product: "Carry bag virgin / recycled",
            Production_Capacity: "1T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B- 107 -2006",
            Date_of_Registration: "16/06/2006",
            Validity_of_Registration: "15/06/2011"
        },
        {
            Sr_No: "108",
            Name_Address_of_Company: "M/s Omega Packging B-3, Gupta Indl. Complex,Sr. No. 84/3, Asangaon (E) shahapur Thane.",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "1.75 MT/d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B- 108 -2006",
            Date_of_Registration: "16/06/2006",
            Validity_of_Registration: "15/06/2011"
        },
        {
            Sr_No: "109",
            Name_Address_of_Company: "M/s Hari Pack Extrusions(V) Pvt. Ltd. K-61, MIDC, Hingna Nagpur-440 016.",
            Name_of_Product: "Carry bag virgin / recycled",
            Production_Capacity: "50 MT/d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B- 109 -2006",
            Date_of_Registration: "26/06/2006",
            Validity_of_Registration: "25/06/2011"
        },
        {
            Sr_No: "110",
            Name_Address_of_Company: "M/s Jalaram Poly Print 13 / 29, First Floor, Malad Ind. Estate, Mulund (W) Mumbai.",
            Name_of_Product: "Carry bag virgin / recycled",
            Production_Capacity: "5 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B- 110 -2006",
            Date_of_Registration: "16/06/2006",
            Validity_of_Registration: "15/06/2011"
        },
        {
            Sr_No: "111",
            Name_Address_of_Company: "M/s Shiv Industries, Plot No. 112, Shahapur Ind. W Estate Village Paundhe Tal –Shahapur Dist – Thane.",
            Name_of_Product: "1. Carry bag virgin / recycled 2. Container virgin / recycled",
            Production_Capacity: "50 MT/d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B- 111 -2006",
            Date_of_Registration: "26/06/06",
            Validity_of_Registration: "25/06/2011"
        },
        {
            Sr_No: "112",
            Name_Address_of_Company: "M/s Nandan Impex Pvt. Ltd. D -365 TTC Industrial Area, Navi Mumbai- 705",
            Name_of_Product: "Container virgin",
            Production_Capacity: "1.67 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B- 112 -2006",
            Date_of_Registration: "26/06/06",
            Validity_of_Registration: "25/06/2011"
        },
        {
            Sr_No: "113",
            Name_Address_of_Company: "M/s Balaji Plastic, Unit No. 223 2nd Floor Ramgopal I E Dr. R.P. Rd. Mulund-80",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "",
            Registration_No: "MPCB/HSMD/Plastic Reg/B- 113 -2006",
            Date_of_Registration: "26/06/06",
            Validity_of_Registration: "25/06/2011"
        },
        {
            Sr_No: "114",
            Name_Address_of_Company: "M/s Khatu Chemicals, W- 2 (C), Lote Industrial Estate. At Post Tal- Khed. Dist- Ratnagiri",
            Name_of_Product: "Container virgin",
            Production_Capacity: "333 kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B- 114 -2006",
            Date_of_Registration: "26/06/06",
            Validity_of_Registration: "25/06/2011"
        },
        {
            Sr_No: "115",
            Name_Address_of_Company: "M/s Viraj Plastic D-18 MIDC Kudal Dist- Sindhudurg",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "160 kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B- 115 -2006",
            Date_of_Registration: "26/06/06",
            Validity_of_Registration: "25/06/2011"
        },
        {
            Sr_No: "116",
            Name_Address_of_Company: "M/s Vinay Plastic Industrial A&P Shroda Bagayat, Wada Tal- Vengurla Dist- Sindhudurg",
            Name_of_Product: "Carry bag virgin / recycled",
            Production_Capacity: "150 kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B- 116 -2006",
            Date_of_Registration: "26/06/06",
            Validity_of_Registration: "25/06/2011"
        },
        {
            Sr_No: "117",
            Name_Address_of_Company: "M/s Karuna Enterprises, Samarat Silks Mills compounds L.B.S. Marg, Vikhroli – W, Mumbai - 79",
            Name_of_Product: "Carry bag virgin / recycled",
            Production_Capacity: "50 MT / d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B- 117 -2006",
            Date_of_Registration: "26/06/06",
            Validity_of_Registration: "25/06/2011"
        },
        {
            Sr_No: "118",
            Name_Address_of_Company: "M/s Pushkaraj Plastic A17/18 Lote Industrial Estate At/Post/Lote Tal- Khed Dist- Ratanagiri",
            Name_of_Product: "Container virgin",
            Production_Capacity: "500 kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B- 118 -2006",
            Date_of_Registration: "26/06/06",
            Validity_of_Registration: "25/06/2011"
        },
        {
            Sr_No: "119",
            Name_Address_of_Company: "M/s Raviraj Plastic, Plot No. A-59, MIDC Lohura Tal & Dist – Yavatmal.",
            Name_of_Product: "Container virgin",
            Production_Capacity: "0.83 T/d kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B- 119 -2006",
            Date_of_Registration: "26/06/06",
            Validity_of_Registration: "25/06/2011"
        },
        {
            Sr_No: "120",
            Name_Address_of_Company: "M/s Aadinath Flexo Printer, New Unique Indl Estate, 2nd Floor opp Jawahar Tokies R.P.Rd Mulund- W Mumbai - 80",
            Name_of_Product: "1. Carry bag virgin 2. Container virgin",
            Production_Capacity: "250 kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B- 120 -2006",
            Date_of_Registration: "26/06/06",
            Validity_of_Registration: "25/06/2011"
        },
        {
            Sr_No: "121",
            Name_Address_of_Company: "M/s D.M. Plastic, Unit No. 44, Ramgopal Ind Estate, Dr. R.D. Rd, Mulund-W Mumbai-80",
            Name_of_Product: "Carry bag virgin / recycled",
            Production_Capacity: "0.15 T / d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B- 121 -2006",
            Date_of_Registration: "26/06/06",
            Validity_of_Registration: "25/06/2011"
        },
        {
            Sr_No: "122",
            Name_Address_of_Company: "M/s Nilkamal Plastic Ltd., Plot No. 971/1A, Stice, sinnar shirdi Rd Musalgaon sinner dist- Nashik",
            Name_of_Product: "Container virgin",
            Production_Capacity: "750 MT/d kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B- 122 -2006",
            Date_of_Registration: "12/7/2006",
            Validity_of_Registration: "11/7/2011"
        },
        {
            Sr_No: "123",
            Name_Address_of_Company: "M/s Arpita Packaging, 72, Akshg Ind. Estate Navghar Vasai Rd- E Thane",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "500 kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B- 123 -2006",
            Date_of_Registration: "12/7/2006",
            Validity_of_Registration: "11/7/2011"
        },
        {
            Sr_No: "124",
            Name_Address_of_Company: "M/s Shree Hari paper & Board Industrial, At Nasdse Post Pareli Tal- Sudhagad dist - Raigad",
            Name_of_Product: "Container recycled",
            Production_Capacity: "",
            Registration_No: "MPCB/HSMD/Plastic Reg/B- 124 -2006",
            Date_of_Registration: "12/7/2006",
            Validity_of_Registration: "11/7/2011"
        },
        {
            Sr_No: "125",
            Name_Address_of_Company: "M/s Polythene Printery, 127 Milan Industrial Estate Cotton Green Mumbai- 033",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "600 kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B- 125 -2006",
            Date_of_Registration: "10/7/2006",
            Validity_of_Registration: "9/7/2011"
        },
        {
            Sr_No: "126",
            Name_Address_of_Company: "M/s J.J. Plastic , C- 35 Addl MIDC, Area Jalana-431 203",
            Name_of_Product: "Carry bag virgin / recycled",
            Production_Capacity: "1200 kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B- 126 -2006",
            Date_of_Registration: "12/7/2006",
            Validity_of_Registration: "11/7/2011"
        },
        {
            Sr_No: "127",
            Name_Address_of_Company: "M/s A.B. Industrial, C-36, Addl MIDC, Area Jalana-431 203",
            Name_of_Product: "Carry bag virgin / recycled",
            Production_Capacity: "300 kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B- 127 -2006",
            Date_of_Registration: "12/7/2006",
            Validity_of_Registration: "11/7/2011"
        },
        {
            Sr_No: "128",
            Name_Address_of_Company: "M/s Vijay Packaging Industrial Unit No. 27/28 , Jamanadas Ind Estate Dr. R.P. Rd Mulund-W Mumbai-80",
            Name_of_Product: "Carry bag virgin / recycled",
            Production_Capacity: "kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B- 128 -2006",
            Date_of_Registration: "10/7/2006",
            Validity_of_Registration: "9/7/2011"
        },
        {
            Sr_No: "129",
            Name_Address_of_Company: "M/s Hansa Plastic, 15, Bahar Udyog Premises Co-op Soc. Ltd, L.B.S. Marg, Mulund-W, Mumbai- 80",
            Name_of_Product: "Carry bag virgin / recycled",
            Production_Capacity: "1 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B- 129 -2006",
            Date_of_Registration: "12/7/2006",
            Validity_of_Registration: "11/7/2011"
        },
        {
            Sr_No: "130",
            Name_Address_of_Company: "M/s Jupiter Plastic Industries G-11 Bharat Industrial Estate Kokersh Jivraj Rd, Sawree Bombay-15",
            Name_of_Product: "",
            Production_Capacity: "",
            Registration_No: "MPCB/HSMD/Plastic Reg/B- 130 -2006",
            Date_of_Registration: "10/7/2006",
            Validity_of_Registration: "9/7/2011"
        },
        {
            Sr_No: "131",
            Name_Address_of_Company: "M/s Nirav Enterprises 93, Unique Industrial Estate, Dr. R. P. Toad, Mulund-W Mumbai-80",
            Name_of_Product: "Container Virgin",
            Production_Capacity: "600 kg/d",
            Registration_No: "MPCB/HSMD/Plastic reg - B - 131 - 2006",
            Date_of_Registration: "12/7/2006",
            Validity_of_Registration: "11/7/2011"
        },
        {
            Sr_No: "132",
            Name_Address_of_Company: "M/s Sumo Plast, Unit No. 61 Ground Floor, Unique Industrial Estate, Dr. R.P. Rd, Mulund – W Mumbai-80.",
            Name_of_Product: "Container Virgin",
            Production_Capacity: "500 kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -132 - 2006",
            Date_of_Registration: "27/07/2006",
            Validity_of_Registration: "26/07/2011"
        },
        {
            Sr_No: "133",
            Name_Address_of_Company: "M/s Noble Plastic Unit No. 106, First floor, K.K. Gupta Industral Estate, Dr. R.P. Road, Mulund – W Mumbai - 80",
            Name_of_Product: "Container Virgin",
            Production_Capacity: "300 kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -133 - 2006",
            Date_of_Registration: "26/07/2006",
            Validity_of_Registration: "25/07/2011"
        },
        {
            Sr_No: "134",
            Name_Address_of_Company: "M/s Arikant Industries Unit No. B/121, Ground floor, Minrva Ind. Estate, Off L.B.S. marg, Mulund – W Mumbai - 80",
            Name_of_Product: "Container Virgin",
            Production_Capacity: "1.2 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -134 - 2006",
            Date_of_Registration: "26/07/2006",
            Validity_of_Registration: "25/07/2011"
        },
        {
            Sr_No: "135",
            Name_Address_of_Company: "M/s Kanhiya Plastic Industries D - 1511, MIDC, Amravati.",
            Name_of_Product: "Carry Bag Virgin",
            Production_Capacity: "200 kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -135 - 2006",
            Date_of_Registration: "27/07/2006",
            Validity_of_Registration: "26/07/2011"
        },
        {
            Sr_No: "136",
            Name_Address_of_Company: "M/s National Plastic Industries Plot No. A/6, MIDC, Amrvati.",
            Name_of_Product: "Container Recycld",
            Production_Capacity: "330 kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -136 - 2006",
            Date_of_Registration: "26/07/2006",
            Validity_of_Registration: "25/07/2011"
        },
        {
            Sr_No: "137",
            Name_Address_of_Company: "M/s Vijay Roto Prints D – 15/2, MIDC, Amravati, Dist – Amravati.",
            Name_of_Product: "Carry Bag Virgin",
            Production_Capacity: "800 kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -137 - 2006",
            Date_of_Registration: "",
            Validity_of_Registration: ""
        },
        {
            Sr_No: "138",
            Name_Address_of_Company: "M/s Mono Yarn, 35, Ashok Ind. Estate, 1st floor, L.B.S. marg, Mulund – W Mumbai - 80",
            Name_of_Product: "Container Virgin",
            Production_Capacity: "1 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -138 - 2006",
            Date_of_Registration: "27/07/2006",
            Validity_of_Registration: "26/07/2011"
        },
        {
            Sr_No: "139",
            Name_Address_of_Company: "M/s Aadarsh Industries. Plot No. B – 317, MIDC, Nanded.",
            Name_of_Product: "Carry Bag Virgin",
            Production_Capacity: "0.20 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -139 - 2006",
            Date_of_Registration: "26/07/2006",
            Validity_of_Registration: "25/07/2011"
        },
        {
            Sr_No: "140",
            Name_Address_of_Company: "M/s King plast, Unit No.3 Ground Floor, Omkar Industrial Estate, Opp. Kanjur marg Rly stn Kanjur (W), Mumbai-78.",
            Name_of_Product: "Container Virgin",
            Production_Capacity: "300 kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -140 - 2006",
            Date_of_Registration: "27/07/06",
            Validity_of_Registration: "26/07/2011"
        },
        {
            Sr_No: "141",
            Name_Address_of_Company: "M/s mono packaging 38 Ashok Ind Estate, 1st floor, L.B.S. marg, Mulund (W), Mumbai-80.",
            Name_of_Product: "Container Virgin",
            Production_Capacity: "1 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -141 - 2006",
            Date_of_Registration: "27/07/06",
            Validity_of_Registration: "26/07/2011"
        },
        {
            Sr_No: "142",
            Name_Address_of_Company: "M/s Laxmi poly plast industries Navi Mumbai W-149, Pawane MIDC, Thane-Belapur Road, Navi Mumbai-400705.",
            Name_of_Product: "Carry Bag Virgin",
            Production_Capacity: "200 kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -142 - 2006",
            Date_of_Registration: "26/07/06",
            Validity_of_Registration: "25/07/2011"
        },
        {
            Sr_No: "143",
            Name_Address_of_Company: "M/s Mono Polymers, 18, Nahar Udyog, Prem co. op. soc. Ltd, L.B.S marg, Mulund - W, Mumbai-80.",
            Name_of_Product: "Container Virgin",
            Production_Capacity: "600 kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -143 - 2006",
            Date_of_Registration: "27/07/06",
            Validity_of_Registration: "26/07/2011"
        },
        {
            Sr_No: "144",
            Name_Address_of_Company: "M/s Unique polymers, 94, Unique Ind Estate, opp. Jawahar Tokies, Dr. R.P. Road, Mulund - W, Mumbai - 80.",
            Name_of_Product: "Container Virgin",
            Production_Capacity: "480 kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -144 - 2006",
            Date_of_Registration: "26/07/2006",
            Validity_of_Registration: "25/07/2011"
        },
        {
            Sr_No: "145",
            Name_Address_of_Company: "M/s Samrat Plastic Industries, 12, Amrapali Industrial Estate, Ram mandir Road, Goregaon – W, Mumbai - 104",
            Name_of_Product: "Carry bag Virgin",
            Production_Capacity: "300 kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -145 - 2006",
            Date_of_Registration: "26/07/2006",
            Validity_of_Registration: "25/07/2011"
        },
        {
            Sr_No: "146",
            Name_Address_of_Company: "M/s Pinku industries, Unit No. 20, Gr. Floor, Nahar Udyog Premises Ltd, L.B.S. marg, Mulund – W, Mumbai - 80",
            Name_of_Product: "Container Virgin",
            Production_Capacity: "400 kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -146 - 2006",
            Date_of_Registration: "26/07/2006",
            Validity_of_Registration: "25/07/2011"
        },
        {
            Sr_No: "147",
            Name_Address_of_Company: "M/s Promp – Plack Industries, Gala No. D/26, Shreyas Ind.Estate, Goregaon – E, Mumbai - 63",
            Name_of_Product: "Carry bag Virgin",
            Production_Capacity: "1 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -147 -2006",
            Date_of_Registration: "27/07/2006",
            Validity_of_Registration: "26/07/2011"
        },
        {
            Sr_No: "148",
            Name_Address_of_Company: "M/s Print – House, 102, Bajaj Indstrial Estate, Navghar, Vasai Road – e, Mumbai - 210",
            Name_of_Product: "Carry bag Virgin",
            Production_Capacity: "1 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -148 -2006",
            Date_of_Registration: "27/07/2006",
            Validity_of_Registration: "26/07/2011"
        },
        {
            Sr_No: "149",
            Name_Address_of_Company: "M/s ShriKrishna Print – N –Pack, Gala No. 5, Gr. Floor, Anjali Udyog Bhavan Premises co. op.Soc. Ltd, Navghar, Vasai -E.",
            Name_of_Product: "Carry Bag Virgin",
            Production_Capacity: "25 kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -149 - 2006",
            Date_of_Registration: "5/8/2006",
            Validity_of_Registration: "4/8/2011"
        },
        {
            Sr_No: "150",
            Name_Address_of_Company: "M/s Santro Plast, 3, Anupam Ind. Estate No. 1, P. K. Road, Mulund - W Mumbai - 80.",
            Name_of_Product: "Container Virgin/ Recycled",
            Production_Capacity: "2 MT/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -150 - 2006",
            Date_of_Registration: "5/8/2006",
            Validity_of_Registration: "4/8/2011"
        },
        {
            Sr_No: "151",
            Name_Address_of_Company: "M/s Dhwani Pet Industries, Unit No. 212, second floor, Raja Industrial Estate, P.K. Road, Mulund - W, Mumbai - 80",
            Name_of_Product: "Container Virgin",
            Production_Capacity: "80 kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -151 - 2006",
            Date_of_Registration: "5/8/2006",
            Validity_of_Registration: "4/8/2011"
        },
        {
            Sr_No: "152",
            Name_Address_of_Company: "M/s Jain Plasto, A – 2, MIDC, Dasakhed Malkapur, Dist – Buldhana.",
            Name_of_Product: "Carry bag Virgin",
            Production_Capacity: "200 kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -152- 2006",
            Date_of_Registration: "5/8/2006",
            Validity_of_Registration: "4/8/2011"
        },
        {
            Sr_No: "153",
            Name_Address_of_Company: "M/s Oswal Industries, Unit No. 12, Unique Ind. Estate, Dr. Rajendraprasad Road, Mulund – W, Mumbai – 80.",
            Name_of_Product: "Container Virgin/ Recycled",
            Production_Capacity: "500 kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -153 - 2006",
            Date_of_Registration: "5/8/2006",
            Validity_of_Registration: "4/8/2011"
        },
        {
            Sr_No: "154",
            Name_Address_of_Company: "M/s Reliance Plastic 11/A,Gr. Floor, Unique Ind. Estate, Opp. Jawahar tokies, Dr. R.P. Road, Mulund – W, Mumbai – 80.",
            Name_of_Product: "Container Virgin/ Recycled",
            Production_Capacity: "1 MT/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -154 - 2006",
            Date_of_Registration: "5/8/2006",
            Validity_of_Registration: "4/8/2011"
        },
        {
            Sr_No: "155",
            Name_Address_of_Company: "M/s Jennings Plastics, F – 5, MIDC Amravati, Dist – Amravati.",
            Name_of_Product: "Container Virgin",
            Production_Capacity: "0.2 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -155 - 2006",
            Date_of_Registration: "4/8/2011",
            Validity_of_Registration: "3/8/2011"
        },
        {
            Sr_No: "156",
            Name_Address_of_Company: "M/s Saibaba Plastic Industries, Sr. No. 15,M.N, 1110, Part – 1, Sukhsagar Nagar, Katraj, Pune.",
            Name_of_Product: "Carry Bag Virgin",
            Production_Capacity: "334 kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -156 - 2006",
            Date_of_Registration: "4/8/2011",
            Validity_of_Registration: "3/8/2011"
        },
        {
            Sr_No: "157",
            Name_Address_of_Company: "M/s Saikripa Plastic Mfg & Printing Bags, Sr. No. 15, M.N.1110, Part – 2, Sukhsagar Nagar, Katraj, Pune – 46.",
            Name_of_Product: "Carry Bag Virgin",
            Production_Capacity: "334 kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -157 - 2006",
            Date_of_Registration: "5/8/2006",
            Validity_of_Registration: "4/8/2011"
        },
        {
            Sr_No: "158",
            Name_Address_of_Company: "M/s Gore Plastics & Carbouys, A – 16, MIDC Jejuri, Tal – Parandar Dist – Pune - 303",
            Name_of_Product: "Container Virgin/Recycled",
            Production_Capacity: "1.1 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -158 - 2006",
            Date_of_Registration: "5/8/2006",
            Validity_of_Registration: "4/8/2011"
        },
        {
            Sr_No: "159",
            Name_Address_of_Company: "M/s Bharati Plastics, 40 – A/II, Ghanshyam Ind. Estate, Veera Desai Road, Andheri – W, Mumbai - 400053",
            Name_of_Product: "Carry Bag Virgin",
            Production_Capacity: "334 kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -159 - 2006",
            Date_of_Registration: "5/8/2006",
            Validity_of_Registration: "4/8/2011"
        },
        {
            Sr_No: "160",
            Name_Address_of_Company: "M/s Ashapura Plastics, PlotNo.23, Amalgamated Ind. Complex, Gut No.166 / A, H.No.1,Village-Asangoan, Tal-Shahapur, Dist-Thane.",
            Name_of_Product: "Carry Bag Virgin/ Recycled",
            Production_Capacity: "1.03 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -160 - 2006",
            Date_of_Registration: "",
            Validity_of_Registration: ""
        },
        {
            Sr_No: "161",
            Name_Address_of_Company: "M/s ShreeSiddhay P.V.C. Products,Plot No.62, MIDC, Amaravati, Dist – Amaravati.",
            Name_of_Product: "Carry Bag Virgin/Container virgin",
            Production_Capacity: "100 kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -161 - 2006",
            Date_of_Registration: "5/8/2006",
            Validity_of_Registration: "4/8/2011"
        },
        {
            Sr_No: "162",
            Name_Address_of_Company: "M/s Plastomatic Industries, Plot No. S-12, MIDC Ind. Area, Hingna Road,Nagpur.",
            Name_of_Product: "Carry Bag Virgin/Recycled",
            Production_Capacity: "334 kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -162 - 2006",
            Date_of_Registration: "5/8/2006",
            Validity_of_Registration: "4/8/2011"
        },
        {
            Sr_No: "163",
            Name_Address_of_Company: "M/s shri Ambay Enterprises,237, Chikhali Davsthan, Kalmana Road, Nagpur.",
            Name_of_Product: "Carry Bag Virgin",
            Production_Capacity: "67 kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -163 - 2006",
            Date_of_Registration: "5/8/2006",
            Validity_of_Registration: "4/8/2011"
        },
        {
            Sr_No: "164",
            Name_Address_of_Company: "M/s Saral Plastics, Sr.No.121, Sawali Datura,Chandrapur Bazar Road Achalpur,Dist – Amaravati",
            Name_of_Product: "Carry Bag Virgin",
            Production_Capacity: "134 kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -164 - 2006",
            Date_of_Registration: "5/8/2006",
            Validity_of_Registration: "4/8/2011"
        },
        {
            Sr_No: "165",
            Name_Address_of_Company: "M/s Anand Plast, W33,MIDC, Amaravati, Dist – Amaravati.",
            Name_of_Product: "Carry Bag Virgin",
            Production_Capacity: "1200 kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -165 - 2006",
            Date_of_Registration: "5/8/2006",
            Validity_of_Registration: "4/8/2011"
        },
        {
            Sr_No: "166",
            Name_Address_of_Company: "M/s Krown Can Works Ltd,8, Ankos Ind. Estate,Village – Dekhu, Tal -Khalapur, Dist – Raigad – Khopoli – 410203",
            Name_of_Product: "Container Virgin/ Recycled",
            Production_Capacity: "40000 Nos/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -166 - 2006",
            Date_of_Registration: "5/8/2006",
            Validity_of_Registration: "4/8/2011"
        },
        {
            Sr_No: "167",
            Name_Address_of_Company: "M/s Plasto Craft India,38 Unique Ind. Estate,Dr. R.P. Road, Mulund (W), Mumbai - 80.",
            Name_of_Product: "Container Virgin",
            Production_Capacity: "235 kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -167 - 2006",
            Date_of_Registration: "5/8/2006",
            Validity_of_Registration: "4/8/2011"
        },
        {
            Sr_No: "168",
            Name_Address_of_Company: "M/s Trimurti Plastic Industries Shirol, Plot No. 13, Chh. Shahu co.op.Ind. Estate, Shirol, Tal - Shirol, Dist – Kolhapur",
            Name_of_Product: "Carry Bag Virgin",
            Production_Capacity: "240 kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -168 - 2006",
            Date_of_Registration: "5/8/2006",
            Validity_of_Registration: "4/8/2011"
        },
        {
            Sr_No: "169",
            Name_Address_of_Company: "M/s Hashmi Plastic Products, Plot No. F – 34, MIDC, Latur.",
            Name_of_Product: "Carry Bag Virgin",
            Production_Capacity: "0.053 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -169 - 2006",
            Date_of_Registration: "5/8/2006",
            Validity_of_Registration: "4/8/2011"
        },
        {
            Sr_No: "170",
            Name_Address_of_Company: "M/s Noble Plastic Industries, Sr. No. 32 A/1/ Sub block No.9, Hadapsar Ind. Estate, Pune - 13",
            Name_of_Product: "Carry Bag Virgin",
            Production_Capacity: "0.13 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -170- 2006",
            Date_of_Registration: "5/8/2006",
            Validity_of_Registration: "4/8/2011"
        },
        {
            Sr_No: "171",
            Name_Address_of_Company: "M/s Shreyash Plastic Industries,Sr.No.1713 – A, Sukhsagar Nagar, Katray, Pune – 46.",
            Name_of_Product: "Carry Bag Virgin",
            Production_Capacity: "0.36 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -171- 2006",
            Date_of_Registration: "5/8/2006",
            Validity_of_Registration: "4/8/2011"
        },
        {
            Sr_No: "172",
            Name_Address_of_Company: "M/s Pioneer Packaging ,Sr.No.27/9/A, Kondhwa (BK), Pune – 411048.",
            Name_of_Product: "Carry Bag Virgin",
            Production_Capacity: "0.13 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -172- 2006",
            Date_of_Registration: "5/8/2006",
            Validity_of_Registration: "4/8/2011"
        },
        {
            Sr_No: "173",
            Name_Address_of_Company: "M/s Dineshchandra Vithaldas & Co, Sr.No.14, Opp. Petrol Pump, Kondhwa(BK), Pune – 411048.",
            Name_of_Product: "Carry Bag Virgin",
            Production_Capacity: "0.16 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -173- 2006",
            Date_of_Registration: "5/8/2006",
            Validity_of_Registration: "4/8/2011"
        },
        {
            Sr_No: "174",
            Name_Address_of_Company: "M/s Suyash Plastic Industries, Sr. No.17/3-A, Sukhsagar Nagar, Katray, Pune – 411046.",
            Name_of_Product: "Carry Bag Virgin",
            Production_Capacity: "335 kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -174- 2006",
            Date_of_Registration: "5/8/2006",
            Validity_of_Registration: "4/8/2011"
        },
        {
            Sr_No: "175",
            Name_Address_of_Company: "M/s Krishna Packaging, Sr.No.40/4B/2A/2/12, Khondhwa Bk,Pune – 48.",
            Name_of_Product: "Carry Bag Virgin",
            Production_Capacity: "300 kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -175- 2006",
            Date_of_Registration: "5/8/2006",
            Validity_of_Registration: "4/8/2011"
        },
        {
            Sr_No: "176",
            Name_Address_of_Company: "M/s Durga sons, W – 10, Additional MIDC,Jalna, Dist – Jalna",
            Name_of_Product: "Carry Bag Virgin",
            Production_Capacity: "0.07 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -176- 2006",
            Date_of_Registration: "10/8/2006",
            Validity_of_Registration: "9/8/2011"
        },
        {
            Sr_No: "177",
            Name_Address_of_Company: "M/s Kachurulal Vinaykumar Abad, D – 24, MIDC Jalna – 431203",
            Name_of_Product: "Carry Bag Virgin",
            Production_Capacity: "0.083 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -177- 2006",
            Date_of_Registration: "10/8/2006",
            Validity_of_Registration: "9/8/2011"
        },
        {
            Sr_No: "178",
            Name_Address_of_Company: "M/s Rainbow Plastics, Samarth Silk Mill, Compound, L.B.S. marg, Vikroli , Mumbai 78.",
            Name_of_Product: "Carry Bag Virgin",
            Production_Capacity: "167 kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -178- 2006",
            Date_of_Registration: "10/8/2006",
            Validity_of_Registration: "9/8/2011"
        },
        {
            Sr_No: "179",
            Name_Address_of_Company: "M/s Hem Plastics, 16, Gr. Floor, Nahur Udyog Premises Soc.Ltd, L.B.S. marg, opp. Rallies India, Mulund(W), Mumbai-80.",
            Name_of_Product: "Container Virgin",
            Production_Capacity: "1 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -179- 2006",
            Date_of_Registration: "10/8/2006",
            Validity_of_Registration: "9/8/2011"
        },
        {
            Sr_No: "180",
            Name_Address_of_Company: "M/s Sujata Plastics,H-65, MIDC-3, Akola, Dist-Akola.",
            Name_of_Product: "Carry Bag Virgin",
            Production_Capacity: "0.16 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -180- 2006",
            Date_of_Registration: "10/8/2006",
            Validity_of_Registration: "9/8/2011"
        },
        {
            Sr_No: "181",
            Name_Address_of_Company: "M/s Rahul Packaging, Plot No.43, MIDC-3, Akola, Dist-Akola.",
            Name_of_Product: "Carry Bag Virgin",
            Production_Capacity: "200 kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -181- 2006",
            Date_of_Registration: "10/8/2006",
            Validity_of_Registration: "9/8/2011"
        },
        {
            Sr_No: "182",
            Name_Address_of_Company: "M/s Perfect Packaging, Sr. No. 13, Kalambeshwar, Tq & Dist - Akola",
            Name_of_Product: "Carry Bag Virgin",
            Production_Capacity: "0.16 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -182- 2006",
            Date_of_Registration: "10/8/2006",
            Validity_of_Registration: "9/8/2011"
        },
        {
            Sr_No: "183",
            Name_Address_of_Company: "M/s Kaushlaya Plastics, Plot No. J – 88, MIDC – 3, Akola Dist – Akola",
            Name_of_Product: "Carry Bag Virgin",
            Production_Capacity: "0.13 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -183- 2006",
            Date_of_Registration: "10/8/2006",
            Validity_of_Registration: "9/8/2011"
        },
        {
            Sr_No: "184",
            Name_Address_of_Company: "M/s Wonderseal Packaging, Plot No. W – 31, MIDC – 3, Akola, Dist Akola",
            Name_of_Product: "Carry Bag Virgin",
            Production_Capacity: "0.31 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -184- 2006",
            Date_of_Registration: "10/8/2006",
            Validity_of_Registration: "9/8/2011"
        },
        {
            Sr_No: "185",
            Name_Address_of_Company: "M/s Flowell Industries,Plot No. c -8, MIDC – 3,Akola, Dist – Akola",
            Name_of_Product: "Carry Bag Virgin",
            Production_Capacity: "0.595T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -185- 2006",
            Date_of_Registration: "10/8/2006",
            Validity_of_Registration: "9/8/2011"
        },
        {
            Sr_No: "186",
            Name_Address_of_Company: "M/s Rathi Udyog, W – 4, MIDC Wardha, Dist – Wardha",
            Name_of_Product: "Container Virgin",
            Production_Capacity: "100 kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -186- 2006",
            Date_of_Registration: "10/8/2006",
            Validity_of_Registration: "9/8/2011"
        },
        {
            Sr_No: "187",
            Name_Address_of_Company: "M/s Vedant Industries, 71213, Mohite Industrial Estate, Mouza, Wanagongri, Dist – Nagpur.",
            Name_of_Product: "Carry Bag Virgin",
            Production_Capacity: "200 kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -187- 2006",
            Date_of_Registration: "10/8/2006",
            Validity_of_Registration: "9/8/2011"
        },
        {
            Sr_No: "188",
            Name_Address_of_Company: "M/s Sanjay Enterprises, Plot No. D – 19, MIDC Post – Nervr, Waghchawadi,Tal – Kudal, Dist – Sindhudurg – 416525.",
            Name_of_Product: "Carry Bag Virgin",
            Production_Capacity: "160 kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -188- 2006",
            Date_of_Registration: "10/8/2006",
            Validity_of_Registration: "9/8/2011"
        },
        {
            Sr_No: "189",
            Name_Address_of_Company: "M/s Neo Pack, R – 678, Rabale MIDC, Navi – Mumbai",
            Name_of_Product: "Container Virgin",
            Production_Capacity: "0.75 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -189- 2006",
            Date_of_Registration: "10/8/2006",
            Validity_of_Registration: "9/8/2011"
        },
        {
            Sr_No: "190",
            Name_Address_of_Company: "M/s Akhil Poly prints, Sai Industrial Estate,Gala No.9, Section-24,Ulhasnagar-3,Dist-Thane.",
            Name_of_Product: "Carry Bag Virgin/recycled",
            Production_Capacity: "0.20T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -190- 2006",
            Date_of_Registration: "10/8/2006",
            Validity_of_Registration: "9/8/2011"
        },
        {
            Sr_No: "191",
            Name_Address_of_Company: "M/s Saneet Industries, Plot No.20/11, MIDC, Hingana Road, Nagpur.",
            Name_of_Product: "Carry Bag Virgin/Recycled",
            Production_Capacity: "0.8 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -191- 2006",
            Date_of_Registration: "10/8/2006",
            Validity_of_Registration: "9/8/2011"
        },
        {
            Sr_No: "192",
            Name_Address_of_Company: "M/s RobinPlasto, 22, Gr. Floor,Shanti IndEstate, S.N. Road Mulund(W), Mumbai – 80.",
            Name_of_Product: "Carry Bag Virgin",
            Production_Capacity: "0.16 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -192- 2006",
            Date_of_Registration: "18/08/2006",
            Validity_of_Registration: "17/08/2011"
        },
        {
            Sr_No: "193",
            Name_Address_of_Company: "M/s F.K.Poly plast,Plot No.R-242, 6th Cross Road,MIDC, Thane – Belapur Road,Village – Rabale, Navi -Mumbai – 701.",
            Name_of_Product: "Carry Bag Virgin/Recycled",
            Production_Capacity: "",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -193- 2006",
            Date_of_Registration: "18/08/2006",
            Validity_of_Registration: "17/08/2011"
        },
        {
            Sr_No: "194",
            Name_Address_of_Company: "M/s Krishna, Plastics,C-11,MIDC Gondia,Tq.& Dist --Gondia.",
            Name_of_Product: "Carry Bag Virgin",
            Production_Capacity: "150 kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -194- 2006",
            Date_of_Registration: "18/08/2006",
            Validity_of_Registration: "17/08/2011"
        },
        {
            Sr_No: "195",
            Name_Address_of_Company: "M/s Shakti Plastics,108, Arvind IndEstate, Navghar Road, Vasai(E), Thane.",
            Name_of_Product: "Carry Bag Virgin",
            Production_Capacity: "2 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -195- 2006",
            Date_of_Registration: "18/08/2006",
            Validity_of_Registration: "17/08/2011"
        },
        {
            Sr_No: "196",
            Name_Address_of_Company: "M/s Sagar Plastics,T – 11/2,Zaivddin Depot, Subhash Road,Nasik Road, Dist-Nasik.",
            Name_of_Product: "Carry Bag Virgin",
            Production_Capacity: "",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -196- 2006",
            Date_of_Registration: "18/08/2006",
            Validity_of_Registration: "17/08/2011"
        },
        {
            Sr_No: "197",
            Name_Address_of_Company: "M/s Paturkar PlasticIndustries, Plot No. D-12, MIDC,Amaravati, Dist – Amaravati.",
            Name_of_Product: "Container Virgin",
            Production_Capacity: "125 kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -197- 2006",
            Date_of_Registration: "18/08/2006",
            Validity_of_Registration: "17/08/2011"
        },
        {
            Sr_No: "198",
            Name_Address_of_Company: "M/s Amrutwel Plastic Ind. Plot No.E-9, MIDC Area, Amaravati, Tq& Dist-Amaravati.",
            Name_of_Product: "",
            Production_Capacity: "36.67 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -198- 2006",
            Date_of_Registration: "18/08/2006",
            Validity_of_Registration: "17/08/2011"
        },
        {
            Sr_No: "199",
            Name_Address_of_Company: "M/s PrincePlastic Industries,42 – C.N.F.E. Co-op.Soc Ltd, Kampatee Road, Uppalwadi, Nagpur.",
            Name_of_Product: "Container Virgin",
            Production_Capacity: "10000 Nos",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -199- 2006",
            Date_of_Registration: "18/08/2006",
            Validity_of_Registration: "17/08/2011"
        },
        {
            Sr_No: "200",
            Name_Address_of_Company: "M/s Bendre Plastics,Plot No.W – 9, MIDC Amaravati,Dist – Amaravati.",
            Name_of_Product: "Container Virgin/recycled",
            Production_Capacity: "",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -200- 2006",
            Date_of_Registration: "18/08/2006",
            Validity_of_Registration: "17/08/2011"
        },
        {
            Sr_No: "201",
            Name_Address_of_Company: "M/s. Anand Plastic Industries, Plot No. C – 26/14, Vinkar Gruha Udyog society,MIDC Akkalkot Road, Solapur, Dist – Solapur.",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "200 kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -201- 2006",
            Date_of_Registration: "4/9/2006",
            Validity_of_Registration: "3/9/2011"
        },
        {
            Sr_No: "202",
            Name_Address_of_Company: "M/s Yashshree Industries,Plot No. D- 57, MIDCNanded, Dist – Nanded",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "600 kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -202- 2006",
            Date_of_Registration: "4/9/2006",
            Validity_of_Registration: "3/9/2011"
        },
        {
            Sr_No: "203",
            Name_Address_of_Company: "M/s Super Plastic Industries, Plot No. 59, At- Vasole, Post – Wadhe,Tq & Dist– Satara.",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "500 kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -203- 2006",
            Date_of_Registration: "4/9/2006",
            Validity_of_Registration: "3/9/2011"
        },
        {
            Sr_No: "204",
            Name_Address_of_Company: "M/s Siddhant Polymers, Plot No. 36, Industrial Estate No.1,Barasti Dist – Solapur.",
            Name_of_Product: "Carry bag virgin,",
            Production_Capacity: "1.275 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -204- 2006",
            Date_of_Registration: "4/9/2006",
            Validity_of_Registration: "3/9/2011"
        },
        {
            Sr_No: "205",
            Name_Address_of_Company: "M/s Devkinandan Industries, Plot No. 02, Vajreshwari Nagar, Akkalkot Road,Solapur, Dist – Solapur",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "200 kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -205- 2006",
            Date_of_Registration: "4/9/2006",
            Validity_of_Registration: "3/9/2011"
        },
        {
            Sr_No: "206",
            Name_Address_of_Company: "M/s Shreeji Pet & Polymers, Plot No. B- 14, MIDC Amaravati, Dist – Amaravati.",
            Name_of_Product: "Container virgin",
            Production_Capacity: "0.1T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -206- 2006",
            Date_of_Registration: "4/9/2006",
            Validity_of_Registration: "3/9/2011"
        },
        {
            Sr_No: "207",
            Name_Address_of_Company: "M/s Paturkar Industries, Plot No. G- 21, MIDC Amaravati, Dist – Amaravati.",
            Name_of_Product: "Container virgin",
            Production_Capacity: "100 kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -207- 2006",
            Date_of_Registration: "4/9/2006",
            Validity_of_Registration: "3/9/2011"
        },
        {
            Sr_No: "208",
            Name_Address_of_Company: "M/s Unik Polypack, Plot No. 2, Gut. No. 196, Darna Road,Near VTC, At –Vadivarkhe, Tal – Igatpuri,Dist – Nasik.",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "1.6 T/D",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -208- 2006",
            Date_of_Registration: "4/9/2006",
            Validity_of_Registration: "3/9/2011"
        },
        {
            Sr_No: "209",
            Name_Address_of_Company: "M/s Mahesh Polymers, Plot No. C- 28/16, MIDC Akkalkot Road,Solapur, Dist – Solapur",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "200Kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -209- 2006",
            Date_of_Registration: "4/9/2006",
            Validity_of_Registration: "3/9/2011"
        },
        {
            Sr_No: "210",
            Name_Address_of_Company: "M/s N.P. Polyprints, B – 211, Virwani Industrial Estate,Goregaon (E) , Mumbai – 63.",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "300 kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -210- 2006",
            Date_of_Registration: "11/9/2006",
            Validity_of_Registration: "10/9/2011"
        },
        {
            Sr_No: "211",
            Name_Address_of_Company: "M/s Ameya Flexo Printers, 36/2, Dandekar Industrial Estate, Kondhwa (Bk), Pune – 48.",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "150 kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -211- 2006",
            Date_of_Registration: "16/09/2006",
            Validity_of_Registration: "15/09/2011"
        },
        {
            Sr_No: "212",
            Name_Address_of_Company: "M/s National Plastics, House No. 38, Mangrulpir, Tal & Dist – Washim.",
            Name_of_Product: "Container virgin",
            Production_Capacity: "333 kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -212- 2006",
            Date_of_Registration: "16/09/2006",
            Validity_of_Registration: "15/09/2011"
        },
        {
            Sr_No: "213",
            Name_Address_of_Company: "M/s Maniraj Plastic Industries, 398, Nana Peth, Laxmi Road, Pune – 02",
            Name_of_Product: "Carry bag virgin /Recycled,",
            Production_Capacity: "200 kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -213- 2006",
            Date_of_Registration: "19/09/2006",
            Validity_of_Registration: "18/09/2011"
        },
        {
            Sr_No: "214",
            Name_Address_of_Company: "M/s Maruti Plastics, Plot No. – 23/3At – Katangikala, Tq & Dist – Gondia.",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "2 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -214- 2006",
            Date_of_Registration: "19/09/2006",
            Validity_of_Registration: "18/09/2011"
        },
        {
            Sr_No: "215",
            Name_Address_of_Company: "M/s Laxbro Manufacturing company, W- 53, MIDC Bhosari,",
            Name_of_Product: "Container virgin",
            Production_Capacity: "335 Kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -215- 2006",
            Date_of_Registration: "19/09/2006",
            Validity_of_Registration: "18/09/2011"
        },
        {
            Sr_No: "216",
            Name_Address_of_Company: "M/s Poona Plast, Plot No. 67/13, D- III Block, M.I.D.C. Chinchwad, Pune – 19.",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.9 T/D",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -216- 2006",
            Date_of_Registration: "19/09/2006",
            Validity_of_Registration: "18/09/2011"
        },
        {
            Sr_No: "217",
            Name_Address_of_Company: "M/s Shakti Plastics, Plot No. C- 50, Addl. MIDC Jalna, Tq. & Dist – Jalna.",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "200Kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -217- 2006",
            Date_of_Registration: "19/09/2006",
            Validity_of_Registration: "18/09/2011"
        },
        {
            Sr_No: "218",
            Name_Address_of_Company: "M/s P.P. Plast Industries, Plot No. 48, Uday Colony, Chakan Talegaon Phata, Vadgaonmaval, Tq. & Dist – Pune.",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "300Kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -218- 2006",
            Date_of_Registration: "19/09/2006",
            Validity_of_Registration: "18/09/2011"
        },
        {
            Sr_No: "219",
            Name_Address_of_Company: "M/s Degradable Polymer , Technologies No.7, Khimsiya wire House, S. No. 32/3B/2 to 5, Pisoli Tal – Haveli Dist – Pune.",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.960 Kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -219- 2006",
            Date_of_Registration: "19/09/2006",
            Validity_of_Registration: "18/09/2011"
        },
        {
            Sr_No: "220",
            Name_Address_of_Company: "M/s Sita Enterprise, D- 61, MIDC Kudal, Dist – Sindhudurge.",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "160 Kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -220- 2006",
            Date_of_Registration: "10/10/2006",
            Validity_of_Registration: "9/10/2011"
        },
        {
            Sr_No: "221",
            Name_Address_of_Company: "M/s Jai Fil Industries, Plot o. W-3 MIDC Tarapur Inudustrial Area Tal- Palghar Dist – Thane.",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "166 Kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -221- 2006",
            Date_of_Registration: "10/10/2006",
            Validity_of_Registration: "9/10/2011"
        },
        {
            Sr_No: "222",
            Name_Address_of_Company: "M/s shri Industries, Plot No. C-58, MIDC Wardha, Dist- waradha.",
            Name_of_Product: "Carry bag virgin,",
            Production_Capacity: "467 Kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -222- 2006",
            Date_of_Registration: "10/10/2006",
            Validity_of_Registration: "9/10/2011"
        },
        {
            Sr_No: "223",
            Name_Address_of_Company: "M/s New Shakti Enterprises, ‘C’ 206 Jzai Bonanaza Indusrial Estate,Ashok chakravarti Rd, Kamdivali Estate, (E) Mumbai-101",
            Name_of_Product: "Carry bag virgin,",
            Production_Capacity: "0.33 Kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -223- 2006",
            Date_of_Registration: "10/10/2006",
            Validity_of_Registration: "9/10/2011"
        },
        {
            Sr_No: "224",
            Name_Address_of_Company: "M /s Kalparaj Packaging Pvt Ltd. , 203, Shreyas Aprtment Plot No. C-1, Sec – 2 3 Nerul Navi Mumbai- 400 706",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "2 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -224- 2006",
            Date_of_Registration: "10/10/2006",
            Validity_of_Registration: "9/10/2011"
        },
        {
            Sr_No: "225",
            Name_Address_of_Company: "M/s Pradeep Polyprint, Gat No. 392/Talegaon Chakan Rd, Village- Mahalvnge Tal- Khed dist – Pune.",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "1.5 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -225- 2006",
            Date_of_Registration: "10/10/2006",
            Validity_of_Registration: "9/10/2011"
        },
        {
            Sr_No: "226",
            Name_Address_of_Company: "M/s Pradeep Laminators Pvt. Ltd, Gat No. 392, Talegaon, chakan Highway, vill- Mahulunge Tal- Khed Dist- Pune",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "4.61 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -226- 2006",
            Date_of_Registration: "10/10/2006",
            Validity_of_Registration: "9/10/2011"
        },
        {
            Sr_No: "227",
            Name_Address_of_Company: "M/s mangaonkar Pvt Ltd. , Gat No.-94, Village- Ghatawade Alibag Roha- Ragaid",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "300Kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -227- 2006",
            Date_of_Registration: "10/10/2006",
            Validity_of_Registration: "9/10/2011"
        },
        {
            Sr_No: "228",
            Name_Address_of_Company: "M/s Ampson Engineering Pvt. Ltd, ( Unit-II) Plot No. N- 26, MIDC Area, Boisar Dist – Thane – 506",
            Name_of_Product: "Carry Bag virgin",
            Production_Capacity: "6 Kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -228- 2006",
            Date_of_Registration: "10/10/2006",
            Validity_of_Registration: "9/10/2011"
        },
        {
            Sr_No: "229",
            Name_Address_of_Company: "M/s Anupam Plastics, W- 5, MIDC, Chandrapur Ghuggas Rd, Chandrapur.",
            Name_of_Product: "Carry bag recycled",
            Production_Capacity: "0.3 T/D",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -229- 2006",
            Date_of_Registration: "10/10/2006",
            Validity_of_Registration: "9/10/2011"
        },
        {
            Sr_No: "230",
            Name_Address_of_Company: "M/s Shagoon Packaging Pvt Ltd., S- 22 MIDC, Tarapur Tal- Palghar, Dist – Thane",
            Name_of_Product: "Carry Bag virgin",
            Production_Capacity: "2 T/D",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -230- 2006",
            Date_of_Registration: "10/10/2006",
            Validity_of_Registration: "9/10/2011"
        },
        {
            Sr_No: "231",
            Name_Address_of_Company: "M/s R. P. Industries, Get No 324 A1, AT – Sanghavi, Shirwal.",
            Name_of_Product: "Container virgin/ recycled",
            Production_Capacity: "180 Kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -231- 2006",
            Date_of_Registration: "10/10/2006",
            Validity_of_Registration: "9/10/2011"
        },
        {
            Sr_No: "232",
            Name_Address_of_Company: "M/s Raj Plastic Industries, Get No. 324, At- Sanghavi, Post – shirwal Dist – Satara.",
            Name_of_Product: "Container virgin/",
            Production_Capacity: "250 Kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -232- 2006",
            Date_of_Registration: "10/10/2006",
            Validity_of_Registration: "9/10/2011"
        },
        {
            Sr_No: "233",
            Name_Address_of_Company: "M/s Bharat Polymer Gxtrusions, W / 64 /A, MIDC Area, New CCL, Satpur, Nasik – 007",
            Name_of_Product: "Carry bags virgin",
            Production_Capacity: "0.6 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -233- 2006",
            Date_of_Registration: "10/10/2006",
            Validity_of_Registration: "9/10/2011"
        },
        {
            Sr_No: "234",
            Name_Address_of_Company: "M/s Ajinkya Plastics, G – 25, Old MIDC, Satara.",
            Name_of_Product: "Carry bags virgin",
            Production_Capacity: "100 Kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -234- 2006",
            Date_of_Registration: "10/10/2006",
            Validity_of_Registration: "9/10/2011"
        },
        {
            Sr_No: "235",
            Name_Address_of_Company: "M/s Vardhaman Packaging, S. No. 207/3, S. No. P 10, Dhanraj Park, Wakad Pune –27",
            Name_of_Product: "Carry bags virgin",
            Production_Capacity: "0.4 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -235- 2006",
            Date_of_Registration: "10/10/2006",
            Validity_of_Registration: "9/10/2011"
        },
        {
            Sr_No: "236",
            Name_Address_of_Company: "M/s Ashwamegh Industries, B-101 MIDC Area, Tal- Karad , Dist – Satara.",
            Name_of_Product: "Carry bags virgin",
            Production_Capacity: "15 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -236- 2006",
            Date_of_Registration: "10/10/2006",
            Validity_of_Registration: "9/10/2011"
        },
        {
            Sr_No: "237",
            Name_Address_of_Company: "M/s Poonam Plastic co, At Post, Malkapur, Tal – Karad Dist- Satara.",
            Name_of_Product: "Carry bags virgin",
            Production_Capacity: "0.1 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -237- 2006",
            Date_of_Registration: "10/10/2006",
            Validity_of_Registration: "9/10/2011"
        },
        {
            Sr_No: "238",
            Name_Address_of_Company: "M/s Roto Plast, 23, Crescent Ind.Estate, Kanjur village Road, Kanjor Marg, (E), Mumbai- 042",
            Name_of_Product: "Carry bags virgin",
            Production_Capacity: "300 Kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -238- 2006",
            Date_of_Registration: "10/10/2006",
            Validity_of_Registration: "9/10/2011"
        },
        {
            Sr_No: "239",
            Name_Address_of_Company: "M/s Nisha Plastics, 102, Gurunanak Udyog Bhavan, Opp Sangrila Biseuits, LBS Marg Bhandup (W), Mumbai- 78",
            Name_of_Product: "Carry bags virgin",
            Production_Capacity: "5 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -239- 2006",
            Date_of_Registration: "10/10/2006",
            Validity_of_Registration: "9/10/2011"
        },
        {
            Sr_No: "240",
            Name_Address_of_Company: "M/s Shiv – Raj Plastics Pvt. Ltd, Plot No. R – 528, T.T.C. Indl Area, Rabale MIDC, Navi Mumbai",
            Name_of_Product: "Container virgin",
            Production_Capacity: "1 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -240- 2006",
            Date_of_Registration: "10/10/2006",
            Validity_of_Registration: "9/10/2011"
        },
        {
            Sr_No: "241",
            Name_Address_of_Company: "M/s Plast-Well Products, Unti No. 7, Gr. Floor, Anupam Industrial Estate, No.1, Mumbai- (W) Mumbai-80",
            Name_of_Product: "Container virgin",
            Production_Capacity: "1T/ day",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -241- 2006",
            Date_of_Registration: "18/10/2006",
            Validity_of_Registration: "17/10/2011"
        },
        {
            Sr_No: "242",
            Name_Address_of_Company: "M/s Kundan Polyplast, Nitin Industrial Estate, Gala No. 220, S P Rd, Dhisar (E) Mumbai- 68",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "1.2 MT/ day",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -242- 2006",
            Date_of_Registration: "18/10/2006",
            Validity_of_Registration: "17/10/2011"
        },
        {
            Sr_No: "243",
            Name_Address_of_Company: "M/s. Vijay Plastics. 413/A Gandhinagar Kolhapur",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.13 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -243- 2006",
            Date_of_Registration: "2/11/2006",
            Validity_of_Registration: "1/11/2011"
        },
        {
            Sr_No: "244",
            Name_Address_of_Company: "M/s Vishal Plastic 413/1A Old Sakal Press Gandhinagar, Kolhapur",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: ".093 T /d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -244- 2006",
            Date_of_Registration: "2/11/2006",
            Validity_of_Registration: "1/11/2011"
        },
        {
            Sr_No: "245",
            Name_Address_of_Company: "M/s Pawan Packaging,Old Sakal Press,Gandhinagar Kolhapur",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.1 T/ d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -245- 2006",
            Date_of_Registration: "2/11/2006",
            Validity_of_Registration: "1/11/2011"
        },
        {
            Sr_No: "246",
            Name_Address_of_Company: "M/s Gyatri Packaging 413/1A, old sakal press, Gandhinagar Kolhapur",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.16 T /d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -246- 2006",
            Date_of_Registration: "2/11/2006",
            Validity_of_Registration: "1/11/2011"
        },
        {
            Sr_No: "247",
            Name_Address_of_Company: "M/s Ashok Plastic Ind. S.no.-1744, Gandhinagar Kolhapur",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -247- 2006",
            Date_of_Registration: "2/11/2006",
            Validity_of_Registration: "1/11/2011"
        },
        {
            Sr_No: "248",
            Name_Address_of_Company: "M/s Jai Prkash Ind. B-44,MIDC Shirol Kolhapur",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "3.33 Kg /d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -248- 2006",
            Date_of_Registration: "2/11/2006",
            Validity_of_Registration: "1/11/2011"
        },
        {
            Sr_No: "249",
            Name_Address_of_Company: "M/s Akash Plastics,Plot No. –F-19, MIDC Shiroli",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "3.23 Kg /d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -249- 2006",
            Date_of_Registration: "2/11/2006",
            Validity_of_Registration: "1/11/2011"
        },
        {
            Sr_No: "250",
            Name_Address_of_Company: "M/s Ambika Plastics, Plot No.- E- 70, MIDC Shiroli (P), Tal- Hatkananagale",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.13 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -250- 2006",
            Date_of_Registration: "2/11/2006",
            Validity_of_Registration: "1/11/2011"
        },
        {
            Sr_No: "251",
            Name_Address_of_Company: "M/s Sai Packaging,R.S. No.-580/1. MIDC Shiroli",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "5 Kg /d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -251- 2006",
            Date_of_Registration: "2/11/2006",
            Validity_of_Registration: "1/11/2011"
        },
        {
            Sr_No: "252",
            Name_Address_of_Company: "M/s Raj enterprises F-19, MIDC Shiroli,Tal- Hatkananagale, Dist- Kolhapur",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "3.23 Kg /d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -252- 2006",
            Date_of_Registration: "2/11/2006",
            Validity_of_Registration: "1/11/2011"
        },
        {
            Sr_No: "253",
            Name_Address_of_Company: "M/s Balaji Plastics Plot No. W-10, MIDC Shiroli Dist-Kolhapur",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.1 T /d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -253- 2006",
            Date_of_Registration: "2/11/2006",
            Validity_of_Registration: "1/11/2011"
        },
        {
            Sr_No: "254",
            Name_Address_of_Company: "M/s SwaroopPlastics, M No-2631, R.S No.132",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "3.33 Kg /d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -254- 2006",
            Date_of_Registration: "2/11/2006",
            Validity_of_Registration: "1/11/2011"
        },
        {
            Sr_No: "255",
            Name_Address_of_Company: "M/s J.K. Packaging, Pl. No. G-70,MIDC, Gokul-shirgaon, Dist- Kolhapur",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.16 T/d /d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -255- 2006",
            Date_of_Registration: "2/11/2006",
            Validity_of_Registration: "1/11/2011"
        },
        {
            Sr_No: "256",
            Name_Address_of_Company: "M/s J.K. Rote Printers, Pl. No. G-70,MIDC, Gokul-shirgaon, Dist- Kolhapur",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.13 T /d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -256- 2006",
            Date_of_Registration: "2/11/2006",
            Validity_of_Registration: "1/11/2011"
        },
        {
            Sr_No: "257",
            Name_Address_of_Company: "M./s Sunil Industries, Near Anant roto Spinning Mills, Kagal",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.16 T /d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -257- 2006",
            Date_of_Registration: "2/11/2006",
            Validity_of_Registration: "1/11/2011"
        },
        {
            Sr_No: "258",
            Name_Address_of_Company: "M/s Amoodi Plast 3-2-22 Iidagh Maidan, Near Water Tank, Degloor- Nanded",
            Name_of_Product: "Container virgin",
            Production_Capacity: "230 Kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -258- 2006",
            Date_of_Registration: "2/11/2006",
            Validity_of_Registration: "1/11/2011"
        },
        {
            Sr_No: "259",
            Name_Address_of_Company: "M/s Adi Plastic Ind. Opp. Anant roto spin Mill kagal",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "50 T /d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -259- 2006",
            Date_of_Registration: "2/11/2006",
            Validity_of_Registration: "1/11/2011"
        },
        {
            Sr_No: "260",
            Name_Address_of_Company: "M/s Little Plastics Plot No. –F-52, Parvati Co- op Ind Est. Yadrav, shirol.",
            Name_of_Product: "Container virgin",
            Production_Capacity: "0.03 T /d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -260- 2006",
            Date_of_Registration: "2/11/2006",
            Validity_of_Registration: "1/11/2011"
        },
        {
            Sr_No: "261",
            Name_Address_of_Company: "M/s Lily Plastis Plot No. –F- 51 Parvati Co-op ind Est. Yadrav, shirol.",
            Name_of_Product: "Container virgin",
            Production_Capacity: "100 Kg /d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -261- 2006",
            Date_of_Registration: "2/11/2006",
            Validity_of_Registration: "1/11/2011"
        },
        {
            Sr_No: "262",
            Name_Address_of_Company: "M/s Perfect Plastics Plot No. F-51, Parvati Co-op ind Est. Yadrav, Shirol, Kolhapur.",
            Name_of_Product: "Container virgin",
            Production_Capacity: "0.03 T /d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -262- 2006",
            Date_of_Registration: "2/11/2006",
            Validity_of_Registration: "1/11/2011"
        },
        {
            Sr_No: "263",
            Name_Address_of_Company: "M/s Data Guru Polu Prints Untis No. S/A, Interlink Estate, Caves Rd. Jogeshweri (E) Mumbai- 60.",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "5 T /d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -263- 2006",
            Date_of_Registration: "18/10/2006",
            Validity_of_Registration: "17/10/2011"
        },
        {
            Sr_No: "264",
            Name_Address_of_Company: "M/s. Jyoti Polycontainers Pvt. Ltd. Plot No. R/554, TTC, Ind. Area, Rabale, MIDC, Navi Mumbai.",
            Name_of_Product: "Container virgin",
            Production_Capacity: "4 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -264- 2006",
            Date_of_Registration: "18/10/2006",
            Validity_of_Registration: "17/10/2011"
        },
        {
            Sr_No: "265",
            Name_Address_of_Company: "M/s Shri Pant Poly Gat No.-202, /P – Tardal, Shirol, Kolhapur.",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "33 Nos /d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -265- 2006",
            Date_of_Registration: "2/11/2006",
            Validity_of_Registration: "1/11/2011"
        },
        {
            Sr_No: "266",
            Name_Address_of_Company: "M/s Naveen Plastic, W-64, MIDC Gokul shrigaon, Tal- Karveer, Kolhapur.",
            Name_of_Product: "Container virgin",
            Production_Capacity: "0.06 T /d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -266- 2006",
            Date_of_Registration: "2/11/2006",
            Validity_of_Registration: "1/11/2011"
        },
        {
            Sr_No: "267",
            Name_Address_of_Company: "M/s Amrut Bhagini Mandal Gat. No- 924B, Amrutnagar, Warnanangar Tal- Panhala, Kolhapur.",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "1. 2 T /d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -267- 2006",
            Date_of_Registration: "2/11/2006",
            Validity_of_Registration: "1/11/2011"
        },
        {
            Sr_No: "268",
            Name_Address_of_Company: "M/s Lotus Packaging Industries C- 44/12, MIDC Industrial Area, Warsha, Dist- Wardha",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "150 Kg /d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -268- 2006",
            Date_of_Registration: "2/12/2006",
            Validity_of_Registration: "1/12/2011"
        },
        {
            Sr_No: "269",
            Name_Address_of_Company: "Mamta Industries Plot No. C- 44/10, MIDC, Wardha – 442 001",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.133 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -269- 2006",
            Date_of_Registration: "2/12/2006",
            Validity_of_Registration: "1/12/2006"
        },
        {
            Sr_No: "270",
            Name_Address_of_Company: "M/s Jyoti Polymers Plot No. – 09, Near M.S.EB. Substation MIDC Malegaon",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "3.33 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -270- 2006",
            Date_of_Registration: "18/10/2006",
            Validity_of_Registration: "17/10/2011"
        },
        {
            Sr_No: "271",
            Name_Address_of_Company: "M/s Prakash Plastics Gala No. 22 (A+B) , Plot No. 41, Dyane Tal- Malegaon dist – Nashik",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "5 MT/M",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -271- 2006",
            Date_of_Registration: "19/10/2006",
            Validity_of_Registration: "18/10/2011"
        },
        {
            Sr_No: "272",
            Name_Address_of_Company: "M./s Jayesh Plastic, 213, small Factory area, Bagadgans Nagpur",
            Name_of_Product: "Container virgin / recycled",
            Production_Capacity: "1.5 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -272- 2006",
            Date_of_Registration: "19/10/2006",
            Validity_of_Registration: "18/10/2011"
        },
        {
            Sr_No: "273",
            Name_Address_of_Company: "M/s Winsome Plastic Industries Nashik",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "150 Kg /d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -273- 2006",
            Date_of_Registration: "1/11/2006",
            Validity_of_Registration: "31/10/2011"
        },
        {
            Sr_No: "274",
            Name_Address_of_Company: "M/s Arihant Plastic Industries Stice sinner C-74 Sinner Nashik",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "400 Kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -274- 2006",
            Date_of_Registration: "1/11/2006",
            Validity_of_Registration: "31/10/2011"
        },
        {
            Sr_No: "275",
            Name_Address_of_Company: "M/s Agree Plastic Pvt. Ltd. Plot No. 224, Block- J, MIDC Bhosari- Pune",
            Name_of_Product: "Container virgin",
            Production_Capacity: "2 MT/d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -275- 2006",
            Date_of_Registration: "2/11/2006",
            Validity_of_Registration: "1/11/2011"
        },
        {
            Sr_No: "276",
            Name_Address_of_Company: "M/s Star Plastic A- 26 MIDC wardha Dist- Wardha",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "200 Kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -276- 2006",
            Date_of_Registration: "2/11/2006",
            Validity_of_Registration: "1/11/2011"
        },
        {
            Sr_No: "277",
            Name_Address_of_Company: "M/s Crystal Plastic IndustriesW-11 A MIDC Ambad Nashik-10",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.33 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -277- 2006",
            Date_of_Registration: "2/11/2006",
            Validity_of_Registration: "1/11/2011"
        },
        {
            Sr_No: "278",
            Name_Address_of_Company: "M/s Mangal Polysacs Pvt. Ltd.B- 144: STICE Sinnar Dist- Nashik-10",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "1333.33 Kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -278- 2006",
            Date_of_Registration: "2/11/2006",
            Validity_of_Registration: "1/11/2011"
        },
        {
            Sr_No: "279",
            Name_Address_of_Company: "M/s Pratibha Packaging and PolymersPvt. Ltd. Plot No. B-142, STICE Sinnar, Dist- Nashik.",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "2 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -279 - 2006",
            Date_of_Registration: "2/11/2006",
            Validity_of_Registration: "1/11/2011"
        },
        {
            Sr_No: "280",
            Name_Address_of_Company: "M/s Pushpa Udyog B-120 : MIDC Malegaon, Sinnar Nashik",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "5.4 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -280 - 2006",
            Date_of_Registration: "2/11/2006",
            Validity_of_Registration: "1/11/2011"
        },
        {
            Sr_No: "281",
            Name_Address_of_Company: "M/s Pearl Plast W/217 MIDC Ambad Nashik-10",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.67 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -281 - 2006",
            Date_of_Registration: "2/11/2006",
            Validity_of_Registration: "1/11/2011"
        },
        {
            Sr_No: "282",
            Name_Address_of_Company: "M/s Pratibha Industries B/15, MIDC Area Malegaon Sinnar Nashik-10",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.5 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -282 - 2006",
            Date_of_Registration: "2/11/2006",
            Validity_of_Registration: "1/11/2011"
        },
        {
            Sr_No: "283",
            Name_Address_of_Company: "M/s Sunita Plastics Industries C-61, S.T.I.C.E: Malegaon Tal- Sinnr dist- Nashik",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.5 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -283 - 2006",
            Date_of_Registration: "2/11/2006",
            Validity_of_Registration: "1/11/2011"
        },
        {
            Sr_No: "284",
            Name_Address_of_Company: "M/s Jai Plastics Plot No. XI- 28 MIDC, Ambad, Nashik-10",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.23 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -284 - 2006",
            Date_of_Registration: "2/11/2006",
            Validity_of_Registration: "1/11/2011"
        },
        {
            Sr_No: "285",
            Name_Address_of_Company: "M./s Smita Plastic, D – 75, MIDC Area, Malegaon Sinnar Dist Nashik",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "5.6 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -285 - 2006",
            Date_of_Registration: "2/11/2006",
            Validity_of_Registration: "1/11/2011"
        },
        {
            Sr_No: "286",
            Name_Address_of_Company: "M/s Mangal Udyog B- 145: STICE, Malegaon Sinnarb",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "3333 Bags/D",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -286- 2006",
            Date_of_Registration: "2/11/2006",
            Validity_of_Registration: "1/11/2011"
        },
        {
            Sr_No: "287",
            Name_Address_of_Company: "M/s Maxworth Plastics Pvt. Ltd H – 127, MIDC C- Ambad Nashik-10.",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "1.67 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -287 - 2006",
            Date_of_Registration: "2/11/2006",
            Validity_of_Registration: "1/11/2011"
        },
        {
            Sr_No: "288",
            Name_Address_of_Company: "M/s Smita Packaging Industries D- 86 MIDC Area Ambad Nashik-10",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "1.33",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -288 - 2006",
            Date_of_Registration: "2/11/2006",
            Validity_of_Registration: "1/11/2011"
        },
        {
            Sr_No: "289",
            Name_Address_of_Company: "M/s Flexi Plast Pachaging C-118: STICE Sinnar: Dist: Nashik",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "1 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -289 - 2006",
            Date_of_Registration: "2/11/2006",
            Validity_of_Registration: "1/11/2011"
        },
        {
            Sr_No: "290",
            Name_Address_of_Company: "M/s Sonu Industries Gala No. C- 101, Building No.5 Mittal, Industrial Estate, A.K. Rd, Andheri",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: " ",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -290-2006",
            Date_of_Registration: " ",
            Validity_of_Registration: " "
        },
        {
            Sr_No: "291",
            Name_Address_of_Company: "M/s Dinesh polymers Unit No. C- 91, Building No.5, MittalIndustrial Estate,A.K. Road, Andheri (E), Mumbai - 59",
            Name_of_Product: "Carry bag virgin / recycled",
            Production_Capacity: "2 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -291- 2006",
            Date_of_Registration: "22/11/2006",
            Validity_of_Registration: "21/11/2011"
        },
        {
            Sr_No: "292",
            Name_Address_of_Company: "M/s Jyoti Industries Gala No. C- 100, Building No.5, Mittal Industrial Estate, A.K. Road, Andheri (E), Mumbai - 59",
            Name_of_Product: "Carry bag virgin/ recycled",
            Production_Capacity: "5 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -292-2006",
            Date_of_Registration: "22/11/2006",
            Validity_of_Registration: "21/11/2011"
        },
        {
            Sr_No: "293",
            Name_Address_of_Company: "M/s Shreeji Packaging Co. Gala No. 1`10 1st Floor, sasti Industrial Estate Co-op Soc, Plot No. -798, MIDC Mahape Navi Mumbai – 400 701",
            Name_of_Product: "Carry bag virgin / Container virgin",
            Production_Capacity: "1.67 T /d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -293- 2006",
            Date_of_Registration: "2/12/2006",
            Validity_of_Registration: "1/12/2011"
        },
        {
            Sr_No: "294",
            Name_Address_of_Company: "M/s Shashikant Plastic 267 , Small Factory Area, Bagadgani, Nagpur",
            Name_of_Product: "Carry bag virgin / recycled",
            Production_Capacity: "0.43 T /d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -294-06",
            Date_of_Registration: "22/11/2006",
            Validity_of_Registration: "21/11/2011"
        },
        {
            Sr_No: "295",
            Name_Address_of_Company: "M/s Ujawal Process M.E Pvt. Ltd Plot No.22, Panvel Industrial Co-op Estate Ltd.Panvel Dist – Raigad.",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.5 T / d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -295-006",
            Date_of_Registration: "11/12/2006",
            Validity_of_Registration: "10/12/2006"
        },
        {
            Sr_No: "296",
            Name_Address_of_Company: "M/s Colour Bond Marketing Pvt. Ltd Plot No.- 5- 174, MIDC, Bhosari, Pune",
            Name_of_Product: "Container virgin / recycled",
            Production_Capacity: "0.43 T / d",
            Registration_No: "MPCB/HSMD/Plastic Reg 296 -- 2006",
            Date_of_Registration: "22/11/2006",
            Validity_of_Registration: "21/11/2011"
        },
        {
            Sr_No: "297",
            Name_Address_of_Company: "M/s Red Ray Laboratories Plot. No.- D-25 MIDC,Higna Rd. Nagpur",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "1.2 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -297- 2006",
            Date_of_Registration: "22/11/2006",
            Validity_of_Registration: "21/11/2011"
        },
        {
            Sr_No: "298",
            Name_Address_of_Company: "M/s Rathi Industry Kondva Haveli Dist – Pune.",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "190 kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -298- 2006",
            Date_of_Registration: "22/11/2006",
            Validity_of_Registration: "21/11/2011"
        },
        {
            Sr_No: "299",
            Name_Address_of_Company: "M/s Caravan Packaging Ltd. B- 82- 23, MIDC, Malegaon Tal- Sinar dist - Nashik",
            Name_of_Product: "Container virgin / Container recycled",
            Production_Capacity: "0.53 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -299 - 2006",
            Date_of_Registration: "22/11/2006",
            Validity_of_Registration: "21/11/2011"
        },
        {
            Sr_No: "300",
            Name_Address_of_Company: "M/s Prabha Plastic Plot No. – V- 114 MIDC, Jalgaon",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "2.5 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -300- 2006",
            Date_of_Registration: "22/11/2006",
            Validity_of_Registration: "21/11/2011"
        },
        {
            Sr_No: "301",
            Name_Address_of_Company: "M/s Lalit Plastics Plot No. B – 13/2, MIDC, Jalgaon",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.26 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -301 - 2006",
            Date_of_Registration: "22/11/2006",
            Validity_of_Registration: "21/11/2011"
        },
        {
            Sr_No: "302",
            Name_Address_of_Company: "M/s Lalit Enterprises Plot No. B – 189, MIDC, Jalgaon.",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.33 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -302- 2006",
            Date_of_Registration: "22/11/2006",
            Validity_of_Registration: "21/11/2011"
        },
        {
            Sr_No: "303",
            Name_Address_of_Company: "M/s Neha Plastics Plot No. V – 113 , MIDC, Jalgaon",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "2.5 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -303- 2006",
            Date_of_Registration: "22/11/2006",
            Validity_of_Registration: "21/11/2011"
        },
        {
            Sr_No: "304",
            Name_Address_of_Company: "M/s Saudhaj Plastics Plot No. J-22, MIDC Area, Ambad, Dist -Nashik - 10",
            Name_of_Product: "Carry bag virgin 2.5",
            Production_Capacity: "0.55 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -304- 2006",
            Date_of_Registration: "22/11/2006",
            Validity_of_Registration: "21/11/2011"
        },
        {
            Sr_No: "305",
            Name_Address_of_Company: "M/s Saurabh Manufactures W- 93 (A) MIDC Ambad Nashik.",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.55 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -305- 2006",
            Date_of_Registration: "22/11/2006",
            Validity_of_Registration: "21/11/2011"
        },
        {
            Sr_No: "306",
            Name_Address_of_Company: "M/s Morya Platics Plot No. 117/2, Ram Nagar, Village Jirewadi, Tal & Dist- Beed.",
            Name_of_Product: "Container virigin",
            Production_Capacity: "2000 Nod",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -306- 2006",
            Date_of_Registration: "22/11/2006",
            Validity_of_Registration: "21/11/2011"
        },
        {
            Sr_No: "307",
            Name_Address_of_Company: "M/s V.M. Polyplast Ploy No. E- 91, MIDC Ambad, Tal- & Dist – Nashik.",
            Name_of_Product: "Carry bag virgin / recycled",
            Production_Capacity: "0.2 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -307- 2006",
            Date_of_Registration: "22/11/2006",
            Validity_of_Registration: "21/11/2011"
        },
        {
            Sr_No: "308",
            Name_Address_of_Company: "M/s Shreeraj Plastics Pvt. Ltd. Plot No.-1 Gat No. 196 wadi warbe Tal- Igatpur Dist- Nashik",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "2.33 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -308- 2006",
            Date_of_Registration: "2/11/2006",
            Validity_of_Registration: "1/12/2011"
        },
        {
            Sr_No: "309",
            Name_Address_of_Company: "M/s Chandra Plastics A- 33/2 MIDC Wardha dist - Wardha",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "200 Kg/ d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -309- 2006",
            Date_of_Registration: "2/12/2006",
            Validity_of_Registration: "1/12/2011"
        },
        {
            Sr_No: "310",
            Name_Address_of_Company: "M/s Thakkar Industries A- 3 MIDC Latur Aurangabad",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "333.33 kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -310- 2006",
            Date_of_Registration: "2/12/2006",
            Validity_of_Registration: "1/12/2011"
        },
        {
            Sr_No: "311",
            Name_Address_of_Company: "M/s Suraj Industires PLOT No. A.33, MIDC Ind Area Wardha Dist- Wardha.",
            Name_of_Product: "Carry bag virgin / Container virgin",
            Production_Capacity: "0.33 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -311- 2006",
            Date_of_Registration: "2/12/2006",
            Validity_of_Registration: "1/12/2011"
        },
        {
            Sr_No: "312",
            Name_Address_of_Company: "M/s Rajani Plastic Industries S. No. 18 D, Ganeshpur, Phandharkawada, Dist - Yavatmal",
            Name_of_Product: "Container virgin / recycle",
            Production_Capacity: "0.25 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -312- 2006",
            Date_of_Registration: "2/12/2006",
            Validity_of_Registration: "1/12/2011"
        },
        {
            Sr_No: "313",
            Name_Address_of_Company: "M/s Giriraj Plastics Plot No. U – 40 MIDC, Hingna Rd, Nagpur, Dist - Nagpur",
            Name_of_Product: "Carry bag virgin / recycle",
            Production_Capacity: "400 Kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -313- 2006",
            Date_of_Registration: "2/12/2006",
            Validity_of_Registration: "1/12/2011"
        },
        {
            Sr_No: "314",
            Name_Address_of_Company: "M/s Baba Enterprises A- 26, MIDC Dasarkhed, Tal- Malkapur Dist Buldhana",
            Name_of_Product: ">Carry bag virgin",
            Production_Capacity: "0.3 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -314- 2006",
            Date_of_Registration: "02/12/2006",
            Validity_of_Registration: "01/12/2011"
        },
        {
            Sr_No: "315",
            Name_Address_of_Company: "M/s Balaji Plastics Plot No. C-32, MIDC, Industrial Estate, Hingna, Dist - Nagpur",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.67 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -315- 2006",
            Date_of_Registration: "2/12/2006",
            Validity_of_Registration: "1/12/2011"
        },
        {
            Sr_No: "316",
            Name_Address_of_Company: "M/s Ambika Plastic Plot No. MIDC, Hingna Rd, Nagpur.",
            Name_of_Product: "Container virgin",
            Production_Capacity: "0.3 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -316- 2006",
            Date_of_Registration: "2/12/2006",
            Validity_of_Registration: "1/12/2011"
        },
        {
            Sr_No: "317",
            Name_Address_of_Company: "M/s Shreekrshina PlasticPlot No. 21- A amalgamed Ind, complex At- Asangaon shahpur Dist- thane",
            Name_of_Product: "Container virgin",
            Production_Capacity: "30 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -317- 2006",
            Date_of_Registration: "2/12/2006",
            Validity_of_Registration: "1/12/2011"
        },
        {
            Sr_No: "318",
            Name_Address_of_Company: "M/s Polymer Products Plot No. E – 48 MIDC Nagpur- 28",
            Name_of_Product: "Carry bag virgin / recycled",
            Production_Capacity: "1 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -318 – 2006",
            Date_of_Registration: "2/12/2006",
            Validity_of_Registration: "1/12/2011"
        },
        {
            Sr_No: "319",
            Name_Address_of_Company: "M/s Jalaram Flexo Lamination Pvt. Ltd. Plot No. U- 137, MIDC Hingna Rd. Nagpur Dist- Nagpur.",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.9 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -319 – 2006",
            Date_of_Registration: "2/12/2006",
            Validity_of_Registration: "1/12/2011"
        },
        {
            Sr_No: "320",
            Name_Address_of_Company: "M/s V.S. Industry Shed No. W. 250 Phase – II MIDC, dombivali dist - Thane",
            Name_of_Product: "Carry bag virgin / Container virgin",
            Production_Capacity: "0.049 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg – B -320 – 2006",
            Date_of_Registration: "2/12/2006",
            Validity_of_Registration: "1/12/2011"
        },
        {
            Sr_No: "321",
            Name_Address_of_Company: "M/s Tejas Polypack Industries U-59 MIDC Hingna Rd. Nagpur-16",
            Name_of_Product: "Carry bag virgin /",
            Production_Capacity: "0.267 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -321 – 2006",
            Date_of_Registration: "2/12/2006",
            Validity_of_Registration: "1/12/2011"
        },
        {
            Sr_No: "322",
            Name_Address_of_Company: "M/s A.B.C. Products Plot No. 49, Bajapai Word, Gautam Nagar Gondia Bhandara",
            Name_of_Product: "Carry bag virgin /",
            Production_Capacity: "2.00 Kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -322 – 2006",
            Date_of_Registration: "2/12/2006",
            Validity_of_Registration: "1/12/2011"
        },
        {
            Sr_No: "323",
            Name_Address_of_Company: "M/s Pappu Plastics 240, Satnami Nagar Nagpur",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.133T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -323 – 2006",
            Date_of_Registration: "11/12/2006",
            Validity_of_Registration: "10/12/2011"
        },
        {
            Sr_No: "324",
            Name_Address_of_Company: "M/s Aditi Plastic 121 Small Factory Area, Bagadgani Nagpur",
            Name_of_Product: "Container virgin",
            Production_Capacity: "0.049 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -324 – 2006",
            Date_of_Registration: "11/12/2006",
            Validity_of_Registration: "10/12/2011"
        },
        {
            Sr_No: "325",
            Name_Address_of_Company: "M/s Gurudeo Plastics Plot No. 7 Opp Power House Hiwari Nagpur Wathoda Rd. nagpur",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.06 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -325 – 2006",
            Date_of_Registration: "11/12/2006",
            Validity_of_Registration: "10/12/2011"
        },
        {
            Sr_No: "326",
            Name_Address_of_Company: "M/s Aadarsh Industries Plot No.B-317 MIDC Nanded",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.1 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -326 – 2006",
            Date_of_Registration: "11/12/2006",
            Validity_of_Registration: "10/12/2011"
        },
        {
            Sr_No: "327",
            Name_Address_of_Company: "M/s Snow Plast Plot No. D- 340 MIDC, Turbhe TTC Indl. Area, Navi Mumbai.",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.5 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -327 – 2006",
            Date_of_Registration: "11/12/2006",
            Validity_of_Registration: "10/12/2011"
        },
        {
            Sr_No: "328",
            Name_Address_of_Company: "M/s Ashiward Industries H. No. 605, Wajegaon Tal- -Dist Nanded.",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "150 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -328 – 2006",
            Date_of_Registration: "11/12/2006",
            Validity_of_Registration: "10/12/2011"
        },
        {
            Sr_No: "329",
            Name_Address_of_Company: "M/s Shri Indusries Plot No. C- 54, Midc Indl. Area,Wardha dist- Wardha",
            Name_of_Product: "Container virgin",
            Production_Capacity: "0.56 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -329 – 2006",
            Date_of_Registration: "11/12/2006",
            Validity_of_Registration: "10/12/2011"
        },
        {
            Sr_No: "330",
            Name_Address_of_Company: "M/s Prakash Polymers Gat No. 518 Vill Karanja Tal-Dist- Gondia.",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.5 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -330 – 2006",
            Date_of_Registration: "11/12/2006",
            Validity_of_Registration: "10/12/2011"
        },
        {
            Sr_No: "331",
            Name_Address_of_Company: "M/s Premier Plastic Industry Plot No. C-1 MIDC Krushroe Tal- Naigaon Dist- Nanaded.",
            Name_of_Product: "Container virgin",
            Production_Capacity: "2 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -331 – 2006",
            Date_of_Registration: "11/12/2006",
            Validity_of_Registration: "10/12/2011"
        },
        {
            Sr_No: "332",
            Name_Address_of_Company: "M/s S.S. Plastics. Gata No. 1, K.K. Gupta Compound, Dr. R.P. Rd, Mulund (W)",
            Name_of_Product: "Carry bag recycle",
            Production_Capacity: "0.2 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -332 – 2006",
            Date_of_Registration: "20/12/06",
            Validity_of_Registration: "19/12/2011"
        },
        {
            Sr_No: "333",
            Name_Address_of_Company: "M/s Tirupati Plastic, Gala No. 8, Bhunasingh, Yadav Compound, Dr. R.P. Rd, Mulund (W), Mumbai- 400 080.",
            Name_of_Product: "Carry bag recycled",
            Production_Capacity: "0.2 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -333 – 2006",
            Date_of_Registration: "20/12/06",
            Validity_of_Registration: "19/12/2011"
        },
        {
            Sr_No: "334",
            Name_Address_of_Company: "M/s Mahavir Traders.,Gala No. -1, Gr. Floor, Damji Shanji Industrial Complex, LBS Marg, Kamani Kurla (W)",
            Name_of_Product: "Carry bag",
            Production_Capacity: "350 Kg /d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -334 – 2006",
            Date_of_Registration: "20/12/06",
            Validity_of_Registration: "19/12/2011"
        },
        {
            Sr_No: "335",
            Name_Address_of_Company: "M/s Neelam Industries., Plot No. W-6, MIDC, Hingna, Dist- Nagpur",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "300 Kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -335 – 2006",
            Date_of_Registration: "22/12/06",
            Validity_of_Registration: "21/12/2011"
        },
        {
            Sr_No: "336",
            Name_Address_of_Company: "M/s Anjali Polyplast Pvt. Ltd. Plot No.-6., Universal Ind. State, Sasagaon, Khopoli, Dist- Raigad.",
            Name_of_Product: "Container virgin",
            Production_Capacity: "0.5 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -336 – 2006",
            Date_of_Registration: "10/1/2007",
            Validity_of_Registration: "9/1/2012"
        },
        {
            Sr_No: "337",
            Name_Address_of_Company: "M/s Udyg Plastics, Plot No. W-71, MIDC Hingna, Dist- Nagpur",
            Name_of_Product: "Container virgin",
            Production_Capacity: "0.22 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -337 – 2006",
            Date_of_Registration: "22/12/06",
            Validity_of_Registration: "21/12/2011"
        },
        {
            Sr_No: "338",
            Name_Address_of_Company: "M/s Vinayak Plastics., Plot No. -5- 104, MIDC, Bhosari, Pune- 39",
            Name_of_Product: "Container virgin",
            Production_Capacity: "1 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -338 – 2006",
            Date_of_Registration: "22/12/06",
            Validity_of_Registration: "21/12/2011"
        },
        {
            Sr_No: "339",
            Name_Address_of_Company: "M/s Sachin Auto Services, Gala No.-1, Khindpade, NAzana Nagar, Link Rd, Bhandup (W) Mumbai- 78",
            Name_of_Product: "Carry bag virgin / Container virgin",
            Production_Capacity: "5 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -339 – 2006",
            Date_of_Registration: "22/12/06",
            Validity_of_Registration: "21/12/2011"
        },
        {
            Sr_No: "340",
            Name_Address_of_Company: "M/s Dhanshree Flexographics., C-19, Samaral Silk Mill Compound, LBS Marg, Vikhroli (W) Mumbai-79",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.167 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -340 – 2006",
            Date_of_Registration: "10/1/2007",
            Validity_of_Registration: "9/1/2012"
        },
        {
            Sr_No: "341",
            Name_Address_of_Company: "M/s M.Amit & Company, Gala No. 104, Sun Mill Comp. Lower Parel, Mumbai-13",
            Name_of_Product: "Carry bag virgin / recycled",
            Production_Capacity: "76.67 Kg/d T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -341 – 2006",
            Date_of_Registration: "10/1/2007",
            Validity_of_Registration: "9/1/2012"
        },
        {
            Sr_No: "342",
            Name_Address_of_Company: "M/s Shri Ganesh Plastic Industries, S.No. 51/1, P.No. 16/17, Tirupati Nagar, Deopur, Dhule",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.2 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -342 – 2006",
            Date_of_Registration: "10/1/2007",
            Validity_of_Registration: "9/1/2012"
        },
        {
            Sr_No: "343",
            Name_Address_of_Company: "M/s Rajendra Plastic Products. Plot No. 3, Satnami Layout , BHandara Rd, Nagpur",
            Name_of_Product: "Container virgin/ recycled",
            Production_Capacity: "0.2 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -343 – 2006",
            Date_of_Registration: "10/1/2007",
            Validity_of_Registration: "9/1/2012"
        },
        {
            Sr_No: "344",
            Name_Address_of_Company: "M/sTrimurti Mahalaxmi Polymers, A-1, Bhinde Comp, Datmandir Rd, Bhandup (W) - 78",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "350 Kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -344– 2006",
            Date_of_Registration: "10/1/2007",
            Validity_of_Registration: "9/1/2012"
        },
        {
            Sr_No: "345",
            Name_Address_of_Company: "M/s Pooja Packaging, Plot No. 8 (13), Sr. No. 220, Near Surya Conductors, Village- Khupri, Tal- Wada, Dist- Thane.",
            Name_of_Product: "Carry bag virgin / recycled",
            Production_Capacity: "280 Kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -345 – 2006",
            Date_of_Registration: "9/1/2007",
            Validity_of_Registration: "8/1/2012"
        },
        {
            Sr_No: "346",
            Name_Address_of_Company: "M/s Yash Packaging, A- 18-19, Ind. Market, Opp Maharashtra Kala, Ghatkopar, Andheri Link Rd, Mumbai-72",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "250 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -346 – 2006",
            Date_of_Registration: "9/1/2007",
            Validity_of_Registration: "8/1/2012"
        },
        {
            Sr_No: "347",
            Name_Address_of_Company: "M/s Navneet Plastic Industries, Ramnagar, 3/8, Khadegovali (E) Vithhal Wadi Kalyan, Dist- Thane.",
            Name_of_Product: "Carry bag virgin (packaging bag)",
            Production_Capacity: "100 Kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -347 – 2007",
            Date_of_Registration: "11/1/2007",
            Validity_of_Registration: "10/1/2012"
        },
        {
            Sr_No: "348",
            Name_Address_of_Company: "M/s Creative Plastics Pvt. Ltd., G- 3/8, MIDC, Ind. Area, Tarapur, Tal- Palghar Dist- Thane.",
            Name_of_Product: "Container virgin",
            Production_Capacity: "1,4,000 Nos/",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -348 – 2007",
            Date_of_Registration: "20/01/07",
            Validity_of_Registration: "19/01/2012"
        },
        {
            Sr_No: "349",
            Name_Address_of_Company: "M/s Unique Enterprise D- 296, TTC, MIDC, Turbhe, Navi Mumbai",
            Name_of_Product: "Container virgin",
            Production_Capacity: "0.1 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -349 – 2007",
            Date_of_Registration: "20/01/07",
            Validity_of_Registration: "19/01/2012"
        },
        {
            Sr_No: "350",
            Name_Address_of_Company: "M/s Nova Packaging B-110, Ghatkopar Ind. Estate, Ghatkopar Mumbai- 78",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.367 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -350 – 2007",
            Date_of_Registration: "20/01/07",
            Validity_of_Registration: "19/01/2012"
        },
        {
            Sr_No: "351",
            Name_Address_of_Company: "M/s Harish Plastics & Rubber Industries, Plot No. 20, Atgaon Ind. Comp. Village – Atgaon Tal- Sahapur, Dist- Thane.",
            Name_of_Product: "Container virgin",
            Production_Capacity: "1.465 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -351 – 2007",
            Date_of_Registration: "20/01/07",
            Validity_of_Registration: "19/01/2012"
        },
        {
            Sr_No: "352",
            Name_Address_of_Company: "M/s Om Sai Plastic. Gala No. 12, Khindpada, Duck Line Rd, Bhandup (W)",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.167 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -352 – 2007",
            Date_of_Registration: " ",
            Validity_of_Registration: " "
        },
        {
            Sr_No: "353",
            Name_Address_of_Company: "M/s Vimal Prints Gala No.-11, Desh Udyog MAndir, Ind. Estate, Caves Rd. Jogeshwari (E), Mumbai- 60.",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "5 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -353 – 2007",
            Date_of_Registration: "20/01/07",
            Validity_of_Registration: "19/01/2012"
        },
        {
            Sr_No: "354",
            Name_Address_of_Company: "M/s Vora Enterprises, 1,Paisham Ganesh Galli, J.M.M. Marg, Asalpha (W), Mumbai- 084.",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "350 Kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -354 – 2007",
            Date_of_Registration: "20/01/07",
            Validity_of_Registration: "19/01/2012"
        },
        {
            Sr_No: "355",
            Name_Address_of_Company: "M/s Sunshine Container (P) Ltd., Plot No. C- 34, MIDC BAramati, Tal- BAramati, Dist- Pune",
            Name_of_Product: "Container virgin",
            Production_Capacity: "0.333 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -355 – 2007",
            Date_of_Registration: "20/01/07",
            Validity_of_Registration: "19/01/2012"
        },
        {
            Sr_No: "356",
            Name_Address_of_Company: "M/s Super Poly Print, Samart Silk Mill Compound LBS. MArg, Vikhroli (W), Mumbai- 79",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.167 /d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -356 – 2007",
            Date_of_Registration: "20/01/07",
            Validity_of_Registration: "19/01/2012"
        },
        {
            Sr_No: "357",
            Name_Address_of_Company: "M/s Premier Plastic Plot. 67/13, D- III, MIDC, Chinchwad Pune.",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.267 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -357 – 2007",
            Date_of_Registration: "09/02/2007",
            Validity_of_Registration: "08/02/2012"
        },
        {
            Sr_No: "358",
            Name_Address_of_Company: "M/s D.S.L. Packaging & Sales Pvt. Ltd. J-63/3, Add. MIDC, Kodavali, Murbad, Dist- Thane",
            Name_of_Product: "Container Virgin",
            Production_Capacity: "6.7 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -358 – 2007",
            Date_of_Registration: "09/02/2007",
            Validity_of_Registration: "08/02/2012"
        },
        {
            Sr_No: "359",
            Name_Address_of_Company: "M/s Gupta Engineering Works Gala No. A-3, Nirabai Ind. Estate, Dattamandir Rd, Bhandup (W) Mumbai-86",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.167 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -359 – 2007",
            Date_of_Registration: "09/02/2007",
            Validity_of_Registration: "08/02/2012"
        },
        {
            Sr_No: "360",
            Name_Address_of_Company: "M/s Anplast Pvt. LTd., 47 Ramgopal Ind.Estate, Dr. R.P. Rd, Mulund – (W), Mumbai",
            Name_of_Product: "Container virgin",
            Production_Capacity: "345 Kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -360 – 2007",
            Date_of_Registration: "09/02/2007",
            Validity_of_Registration: "08/02/2012"
        },
        {
            Sr_No: "361",
            Name_Address_of_Company: "M/s Surya Kirti PolyPrint 3, Badawala Comp. Dargah Cross Rd, Bhandup (W) Mumbai-78",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.167 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -361 – 2007",
            Date_of_Registration: "09/02/2007",
            Validity_of_Registration: "08/02/2012"
        },
        {
            Sr_No: "362",
            Name_Address_of_Company: "M/s Sumario Plasto Unit No. 125, 1st Floor, Ramgopal Ind. Estate Opp. Jawahar Talkies, Mulund- (W) Mumbai-80",
            Name_of_Product: "Container virgin",
            Production_Capacity: "0.6 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -362 – 2007",
            Date_of_Registration: "09/02/2007",
            Validity_of_Registration: "08/02/2012"
        },
        {
            Sr_No: "363",
            Name_Address_of_Company: "M/s Arihant Industries. Unit No. A/17, Ground Floor, Minerva Ind. Estate, Mahur Village Opp L.B.S. Marg. Mulund (W), Mumbai-80",
            Name_of_Product: "Container virgin",
            Production_Capacity: "0.83 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -363 – 2007",
            Date_of_Registration: "09/02/2007",
            Validity_of_Registration: "08/02/2012"
        },
        {
            Sr_No: "364",
            Name_Address_of_Company: "M/s Jayshree Plastics Gala No.1, Gupta Comp.Opp Jawahar Talkies R.P. Rd, Mulund (W), Mumbai - 80",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "350 Kg/d",
            Registration_No: "MPCB/HSMD/Plastic Reg - B -364 – 2007",
            Date_of_Registration: "09/02/2007",
            Validity_of_Registration: "08/02/2012"
        },
        {
            Sr_No: "365",
            Name_Address_of_Company: "M/s. J.B. Industries, Gala No. 114, 1st Floor, Merchant Ind. Co.-Op. Sc., Vill-Waliv, Tal: Vasai, Dist: Thane",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.33 T/D",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-365-2007",
            Date_of_Registration: "09/03/07",
            Validity_of_Registration: "8/3/2012"
        },
        {
            Sr_No: "366",
            Name_Address_of_Company: "M/s. Krishna Plastic, Unit No. 84, 1st Floor, New Unique Ind. Estate, Dr. R.P. Rd, Mulund (W), Mumbai-80",
            Name_of_Product: "Container virgin",
            Production_Capacity: "0.33 T/D",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-366-2007",
            Date_of_Registration: "09/03/07",
            Validity_of_Registration: "8/3/2012"
        },
        {
            Sr_No: "367",
            Name_Address_of_Company: "M/s. Atshay Industries, Plot No. B-5/5, MIDC, Butibori, Dist: Nagpur",
            Name_of_Product: "Container virgin",
            Production_Capacity: "0.67 T/D",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-367-2007",
            Date_of_Registration: "09/03/07",
            Validity_of_Registration: "8/3/2012"
        },
        {
            Sr_No: "368",
            Name_Address_of_Company: "M/s. Trend Enterprises, Gala No. 1780, a/P-Zombadi, Tal: Guhagar, Dist: Ratnagiri",
            Name_of_Product: "Container virgin",
            Production_Capacity: "100 Kg/D",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-368-2007",
            Date_of_Registration: "12/03/07",
            Validity_of_Registration: "11/3/2012"
        },
        {
            Sr_No: "369",
            Name_Address_of_Company: "M/s. Perfect Plastic, Plot No. E-3/1, Old MIDC, Satara, Tal & Dist: Satara,",
            Name_of_Product: "Container virgin",
            Production_Capacity: "0.067 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-369-2007",
            Date_of_Registration: "12/03/07",
            Validity_of_Registration: "11/3/2012"
        },
        {
            Sr_No: "370",
            Name_Address_of_Company: "M/s. Krishna Polymers, P.N. 809, Bajpai Ward, Dist: Gondia,",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "98.63 Kg/D",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-370-2007",
            Date_of_Registration: "09/03/07",
            Validity_of_Registration: "8/3/2012"
        },
        {
            Sr_No: "371",
            Name_Address_of_Company: "M/s. Tejaswani Plastic Ind., Plot No. A-127, MIDC, Chincoli, Tal: N-Solapur, Dist: Solapur",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.2 T/D",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-371-2007",
            Date_of_Registration: "12/03/07",
            Validity_of_Registration: "11/3/2012"
        },
        {
            Sr_No: "372",
            Name_Address_of_Company: "M/s. Premdeep Plastics, Plot No. G-7, MIDC, Kudal, Tal: Kudal, Dist: Sindhudurg",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.4 T/D",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-372-2007",
            Date_of_Registration: "30/03/07",
            Validity_of_Registration: "29/03/2012"
        },
        {
            Sr_No: "373",
            Name_Address_of_Company: "M/s. Essel Propack Ltd, Plot No. B-1/2, MIDC, Murbad, Dist: Thane",
            Name_of_Product: "Container virgin",
            Production_Capacity: "0.4 Million No. /D",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-373-2007",
            Date_of_Registration: "30/03/07",
            Validity_of_Registration: "29/03/2012"
        },
        {
            Sr_No: "374",
            Name_Address_of_Company: "M/s. Essel Propack Ltd, Post: Vashimd, Tal: Shahapur, Dist: Thane",
            Name_of_Product: "Container virgin",
            Production_Capacity: "0.425 Million No./D",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-374-2007",
            Date_of_Registration: "30/03/07",
            Validity_of_Registration: "29/03/2012"
        },
        {
            Sr_No: "375",
            Name_Address_of_Company: "M/s. Asma Plastics, Plot No. 44, Ind. Estate, Takiya Ward, Tal & Dist: Bhandara,",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.167 T/D",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-375-2007",
            Date_of_Registration: "30/03/07",
            Validity_of_Registration: "29/03/2012"
        },
        {
            Sr_No: "376",
            Name_Address_of_Company: "M/s. Essel Propack Ltd., Vill: Vadavall, post: Kudus, Tal: Wada, Dist: Thane",
            Name_of_Product: "Container virgin",
            Production_Capacity: "0.567 Million No./D",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-376-2007",
            Date_of_Registration: "12/04/07",
            Validity_of_Registration: "11/4/2012"
        },
        {
            Sr_No: "377",
            Name_Address_of_Company: "M/s. Naveen Enterprise, A-5, Makharid Compound, Naikwadi, Near Suvega Ind. Ayyapa Lane, Saki naka, Navi Mumbai.",
            Name_of_Product: "Carry bag virgin/Rcycled, Container virgin",
            Production_Capacity: "5 T/D & 3 T/D",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-377-2007",
            Date_of_Registration: "26/04/07",
            Validity_of_Registration: "25/04/2012"
        },
        {
            Sr_No: "378",
            Name_Address_of_Company: "M/s. Shri Tirupati Industries, Plot No. D-1, MIDC-II, Akola, Dist: Akola.",
            Name_of_Product: "Container virgin",
            Production_Capacity: "0.33 T/D",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-378-2007",
            Date_of_Registration: "17/05/07",
            Validity_of_Registration: "16/05/2012"
        },
        {
            Sr_No: "379",
            Name_Address_of_Company: "M/s. Asha Polymers, Bahapavee Ward, Gautam Nagar, Gondia, Tal & Dist: Gondia.",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.267 T/D",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-379-2007",
            Date_of_Registration: "17/05/07",
            Validity_of_Registration: "16/05/2012"
        },
        {
            Sr_No: "380",
            Name_Address_of_Company: "M/s. Mundra Polymers Pvt. Ltd., Nangpura Murri, Gondia, Tal & Dist: Gondia",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.267 T/D",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-380-2007",
            Date_of_Registration: "17/05/07",
            Validity_of_Registration: "16/05/2012"
        },
        {
            Sr_No: "381",
            Name_Address_of_Company: "M/s. Shree Plast Industries, L-66, Additional MIDC, Tal & Dist: Satara",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "58.33 Kg/D",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-381-2007",
            Date_of_Registration: "17/05/07",
            Validity_of_Registration: "16/05/2012"
        },
        {
            Sr_No: "382",
            Name_Address_of_Company: "M/s. Vaidya Industries, S No. 90/4, Ridhora, Tal: Balapur, Dist: Akola.",
            Name_of_Product: "Container virgin",
            Production_Capacity: "0.1 T/D",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-382-2007",
            Date_of_Registration: "17/05/07",
            Validity_of_Registration: "16/05/2012"
        },
        {
            Sr_No: "383",
            Name_Address_of_Company: "M/s. Krishna Plast, P. No. H-65/1, MIDC, Akola, Dist: Akola",
            Name_of_Product: "Container virgin",
            Production_Capacity: "1333.33 Nos./D",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-383-2007",
            Date_of_Registration: "17/05/07",
            Validity_of_Registration: "16/05/2012"
        },
        {
            Sr_No: "384",
            Name_Address_of_Company: "M/s. Heramb Polyprint, Gala No. 17, Ground floor, Bhola Bhagvan Ind. Estate, I.B. Patel Rd, Goregaon (E), Mumbai-63.",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.267 T/D",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-384-2007b",
            Date_of_Registration: "15/05/07",
            Validity_of_Registration: "14/05/2012"
        },
        {
            Sr_No: "385",
            Name_Address_of_Company: "M/s. Prameera Polymers Industries Pvt. Ltd., W-200 (B), MIDC, Phase-II, dombivali, Dist: Thane.",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.5 T/D",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-385-2007",
            Date_of_Registration: "17/05/07",
            Validity_of_Registration: "16/05/2012"
        },
        {
            Sr_No: "386",
            Name_Address_of_Company: "M/s. Cemech Engineering Industries, Plot No. W-21, MIDC, Hingna, Dist: Nagpur",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.67 T/D",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-386-2007",
            Date_of_Registration: "17/05/07",
            Validity_of_Registration: "16/05/2012"
        },
        {
            Sr_No: "387",
            Name_Address_of_Company: "M/s. Rahul Packaging, Gala No. 219, 2nd Floor, Udyog Bhavan, Sharma Ind Estate, Valbhatt Rd, Goregaon (E), Mumbai-63",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.3 T/D",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-387-2007",
            Date_of_Registration: "15/05/07",
            Validity_of_Registration: "14/05/2012"
        },
        {
            Sr_No: "388",
            Name_Address_of_Company: "M/s. Prashant Plastics, Unit No. 103, 1st floor, Build No. 2, Tejapai Ind. Estate, Kurla-Andheri rd. Sakinaka, Mumbai-72",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.167 T/D",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-388-2007",
            Date_of_Registration: "11/09/07",
            Validity_of_Registration: "10/9/2012"
        },
        {
            Sr_No: "389",
            Name_Address_of_Company: "M/s. Nalilni Enterprises, A-51, Osia Mata Compound, Vill- Kalher, Bhiwandi, Dist: Thane.",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "1.167 T/D",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-389-2007",
            Date_of_Registration: "11/09/07",
            Validity_of_Registration: "10/9/2012"
        },
        {
            Sr_No: "390",
            Name_Address_of_Company: "M/s. Neo -Plast, Gala No. 36, Ramgopal Ind., Dr. R. P. Rd, Mulund, Mumbai",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.350 T/D",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-390-2007",
            Date_of_Registration: "05/09/07",
            Validity_of_Registration: "4/9/2012"
        },
        {
            Sr_No: "391",
            Name_Address_of_Company: "M/s. Jay Plastics, 27/28, Jamnadas Ind. Estat, Dr. R. P. Rd, Mulund, Mumbai-80",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.167 T/D",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-391-2007",
            Date_of_Registration: "05/09/07",
            Validity_of_Registration: "4/9/2012"
        },
        {
            Sr_No: "392",
            Name_Address_of_Company: "M/s. Bharat Plastics, G-A, Madani Estate, B. G. Rd, Bhandup(W), Mumbai.",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.167 T/D",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-392-2007",
            Date_of_Registration: "05/09/07",
            Validity_of_Registration: "4/9/2012"
        },
        {
            Sr_No: "393",
            Name_Address_of_Company: "M/s. Pandey plastics, 6, Sai Pooja Ind. Estate, Tulsi Pada, Bhandup (W), Mumbai",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.167 T/D",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-393-2007",
            Date_of_Registration: "05/09/07",
            Validity_of_Registration: "4/9/2012"
        },
        {
            Sr_No: "394",
            Name_Address_of_Company: "M/s. Jill Plast, Gala No. 31, Jamnadas Ind. Estate, Opp. Jawahar Talkies, Mulund (W), Mumbai.",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.350 T/D",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-394-2007",
            Date_of_Registration: "05/09/07",
            Validity_of_Registration: "4/9/2012"
        },
        {
            Sr_No: "395",
            Name_Address_of_Company: "M/s. Maruti Polyplast, Gala No. 12, Kopankar Estate, Bhandup (W), Mumabi",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.350 T/D",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-395-2007",
            Date_of_Registration: "05/09/07",
            Validity_of_Registration: "4/9/2012"
        },
        {
            Sr_No: "396",
            Name_Address_of_Company: "M/s. Jinesh Plast-o-Pack, Gala No. C-113, Bonanza Ind. Estate, Kandivali (E), Mumbai-80",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "1.2 T/D",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-396-2007",
            Date_of_Registration: "31/08/07",
            Validity_of_Registration: "30/08/07"
        },
        {
            Sr_No: "397",
            Name_Address_of_Company: "M/s. Doll Plast, Gala No. 111, Ramgoapal Ind. Dr. R. P. Rd., Mulund (W), Mumbai-80",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "350 Kg/D",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-397-2007",
            Date_of_Registration: "20/07/207",
            Validity_of_Registration: "19/07/07"
        },
        {
            Sr_No: "398",
            Name_Address_of_Company: "M/s. Pareek Plastics, Gala No. 113, Ramgopal Estate, Dr. R. P. Rd, Mulund (W), Mumbai-80",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "350 Kg/ D",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-398-2007",
            Date_of_Registration: "20/07/207",
            Validity_of_Registration: "19/07/07"
        },
        {
            Sr_No: "399",
            Name_Address_of_Company: "M/s. Aurangabad Poly Containers Pvt. Ltd., Plot No. K-127, Unit No. 2, MIDC Area, Waluj, Aurangabad",
            Name_of_Product: "Container virgin",
            Production_Capacity: "1.67 T/D",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-399-2007",
            Date_of_Registration: "26/11/07",
            Validity_of_Registration: "25/11/2012"
        },
        {
            Sr_No: "400",
            Name_Address_of_Company: "M/s. Sunrise Technologies, Plot no. K-3, MIDC Indl. Area, Hingna Road, Nagpur.",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "4.0 T/D",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-400-2007",
            Date_of_Registration: "26/11/07",
            Validity_of_Registration: "25/11/2012"
        },
        {
            Sr_No: "401",
            Name_Address_of_Company: "Prime Poly Print, 2/8, Sabun Bhavan, 187, Sheriff Devji Street, Mumbai-400 003.",
            Name_of_Product: "Carry bag virgin/ recycled",
            Production_Capacity: "3.0 T/D",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-401-2007",
            Date_of_Registration: "19/11/07",
            Validity_of_Registration: "18/11/2012"
        },
        {
            Sr_No: "402",
            Name_Address_of_Company: "M/s. Sky Polymers, H. No. 1836, Sai Colony, Gargoti, Tal:Bhudargad, Dist: Kolhapur.",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.167 T/D",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-402-2007",
            Date_of_Registration: "26/11/07",
            Validity_of_Registration: "25/11/2012"
        },
        {
            Sr_No: "403",
            Name_Address_of_Company: "M/s. N. A. M. Enterprises, Gala No. 3, Madani Estate, Derga Road, Sonapur Lane, Bhandup (W), Mumbai-072",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.350T/D",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-403-2007",
            Date_of_Registration: "26/11/07",
            Validity_of_Registration: "25/11/2012"
        },
        {
            Sr_No: "404",
            Name_Address_of_Company: "M/s. Heena Plastics, Gala No. 6, Singh Chowk, Rajiv Gandhi Nagar, Solapur Lane, Bhandup (W), Mumbai-80.",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.350T/D",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-404-2007",
            Date_of_Registration: "26/11/07",
            Validity_of_Registration: "25/11/2012"
        },
        {
            Sr_No: "405",
            Name_Address_of_Company: "M/s. Suvidhi Plasto Pack Pvt. Ltd., Plot No. 17, Shed No. 9, Dewan & sons Ind. Estate, Village- Mahik, Tal: Plaghar, Dist: Thane.",
            Name_of_Product: "Carry bag virgin",
            Production_Capacity: "0.5 T/D",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-405-2007",
            Date_of_Registration: "26/11/07",
            Validity_of_Registration: "25/11/2012"
        },
        {
            Sr_No: "406",
            Name_Address_of_Company: "M/s. Shree Krishna Plastics & Packaging Pvt. Ltd., B-5, Gupta Indl. Complex, Jayshree Paints Compound, Asangaon, Tal: Shahapur, Dist: Thane.",
            Name_of_Product: "Carry Bag Virgin",
            Production_Capacity: "0.491 MT/D",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-406-2008",
            Date_of_Registration: "23/01/2008",
            Validity_of_Registration: "22/01/2013"
        },
        {
            Sr_No: "407",
            Name_Address_of_Company: "M/s. Ugraya Printing & Packaging Pvt Ltd, Plot No. 26, Survey No. 1/1/4/41, Dhanani Industrial Estate, Village- Manipur, Ganjad, Tal: Dahanu, Dist: Thane-401602",
            Name_of_Product: "Carry Bag Virgin",
            Production_Capacity: "0.367 MT/D",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-407-2008",
            Date_of_Registration: "23/01/2008",
            Validity_of_Registration: "22/01/2013"
        },
        {
            Sr_No: "408",
            Name_Address_of_Company: "M/s. Bombay Products, 833/A-1, Village Saori, Balaghat Road, Gondia, Dist: Gondia.",
            Name_of_Product: "Container virgin",
            Production_Capacity: "0.13 MT/D",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-408-2008",
            Date_of_Registration: "23/01/2008",
            Validity_of_Registration: "22/01/2013"
        },
        {
            Sr_No: "409",
            Name_Address_of_Company: "M/s. Interpack Polymers, 125, Maa Umiya Sahakari Vasahat Maryadit, Mouza- Kapsi, Tal: Kamptee, Dist: Nagpur.",
            Name_of_Product: "Container virgin",
            Production_Capacity: "58333 Nos/D",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-409-2008",
            Date_of_Registration: "23/01/2008",
            Validity_of_Registration: "22/01/2013"
        },
        {
            Sr_No: "410",
            Name_Address_of_Company: "M/s. Nasent Polymers Pvt. Ltd., D65, MIDC Indl. Hingna Road, Nagpur.",
            Name_of_Product: "Container virgin",
            Production_Capacity: "0.1MT/D",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-410-2008",
            Date_of_Registration: "23/01/2008",
            Validity_of_Registration: "22/01/2013"
        },
        {
            Sr_No: "411",
            Name_Address_of_Company: "Ms/. Liberson Industries Pvt. Ltd., Plot No. U-45, MIDC Indl. Area, Hingna Road, Nagpur.",
            Name_of_Product: "Container virgin",
            Production_Capacity: "0.667 MT/D",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-411-2008",
            Date_of_Registration: "23/01/2008",
            Validity_of_Registration: "22/01/2013"
        },
        {
            Sr_No: "412",
            Name_Address_of_Company: "M/s. Indian Plastic Industries, Gala No. B-2/5, S. No. 171 & 165/4, Radheshyam Indl. Complex, Asangaon, Tal: Shahapur, Dist: Thane.",
            Name_of_Product: "Carry Bag Virgin",
            Production_Capacity: "0.2 T/d",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-412-2008",
            Date_of_Registration: "19/03/2008",
            Validity_of_Registration: "18/03/2013"
        },
        {
            Sr_No: "413",
            Name_Address_of_Company: "M/s. Geeta Packaging, Plot No. C-25, Addl. MIDC Area, Nandgaon Peth, Tal & Dist: Amravati",
            Name_of_Product: "Container virgin",
            Production_Capacity: "0.667 MT/D",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-413-2008",
            Date_of_Registration: "19/03/2008",
            Validity_of_Registration: "18/03/2013"
        },
        {
            Sr_No: "414",
            Name_Address_of_Company: "M/s. Hydropol Plastic (India) Pvt. Ltd., Plot No. 14 to 29, Parvati Co-Op. Ind. Estate, Yadrav, Tal: Shirol, Dist: Kolhapur.",
            Name_of_Product: "Container virgin",
            Production_Capacity: "2.5 T/D",
            Registration_No: "MPCB/HSMD/Plastic Reg/B-414-2008",
            Date_of_Registration: "19/03/2008",
            Validity_of_Registration: "18/03/2013"
        }
    ];

    // Calculate total pages dynamically
    const totalPages = Math.ceil(tableData.length / ITEMS_PER_PAGE);

    // Get current items
    const currentTableData = tableData.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const scrollToTop = () => {
        // Try window scroll first
        window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });

        // Also try scrolling the top element into view as a fallback for nested containers
        if (topRef.current) {
            topRef.current.scrollIntoView({ behavior: 'instant' as ScrollBehavior });
        }
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        // Use a small timeout to ensure state update has processed/DOM painted if needed
        setTimeout(scrollToTop, 0);
    };

    const getPageNumbers = (curr: number, total: number) => {
        const pages: any[] = [];
        if (total <= 3) {
            for (let i = 1; i <= total; i++) pages.push(i);
        } else {
            if (curr <= 2) pages.push(1, 2, 3, '...', total);
            else if (curr >= total - 1) pages.push(1, '...', total - 2, total - 1, total);
            else pages.push(1, '...', curr - 1, curr, curr + 1, '...', total);
        }
        return pages;
    };

    return (
        <div ref={topRef} className="min-h-screen bg-white">
            <PageBanner
                title="Waste Management"
            />

            <section className="w-full flex justify-center bg-white py-12">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="w-full">
                        {/* Content */}
                        <div className="w-full">
                            <div className="rounded-[24px] p-8 min-h-[400px] border border-gray-100 shadow-sm bg-white relative">
                                <h1 className="text-[24px] font-bold text-gray-900 uppercase mb-8 border-b border-gray-200 pb-4">
                                    Status of Registration issued under Maharashtra Plastic Carry Bag (M & U ) Rules, 2006
                                </h1>

                                <div className="border border-gray-200 rounded-[35px] overflow-hidden mb-8">
                                    <div className="overflow-x-auto">
                                        <table className="w-full border-collapse min-w-[1000px]">
                                            <thead>
                                                <tr className="border-b border-gray-100 bg-gray-50/50">
                                                    <th className="py-6 px-6 text-left w-20">
                                                        <div className="border border-gray-100 rounded-full py-3 px-4 text-center text-[14px] font-semibold bg-white">
                                                            Sr. No.
                                                        </div>
                                                    </th>
                                                    <th className="py-6 px-2 text-left">
                                                        <div className="border border-gray-100 rounded-full py-3 px-6 text-[14px] font-semibold bg-white">
                                                          Name & Address of the Company
                                                        </div>
                                                    </th>
                                                    <th className="py-6 px-6 text-left w-20">
                                                        <div className="border border-gray-100 rounded-full py-3 px-4 text-center text-[14px] font-semibold bg-white">
                                                            Name of the Product
                                                        </div>
                                                    </th>
                                                    <th className="py-6 px-2 text-left">
                                                        <div className="border border-gray-100 rounded-full py-3 px-6 text-[14px] font-semibold whitespace-nowrap bg-white">
                                                            Production Capacity
                                                        </div>
                                                    </th>
                                                    <th className="py-6 px-2 text-left">
                                                        <div className="border border-gray-100 rounded-full py-3 px-6 text-[14px] font-semibold whitespace-nowrap bg-white">
                                                            Registration No.
                                                        </div>
                                                    </th>
                                                    <th className="py-6 px-2 text-left">
                                                        <div className="border border-gray-100 rounded-full py-3 px-6 text-[14px] font-semibold bg-white">
                                                            Date of Registration No.
                                                        </div>
                                                    </th>
                                                    <th className="py-6 px-6 text-left">
                                                        <div className="border border-gray-100 rounded-full py-3 px-6 text-[14px] font-semibold bg-white">
                                                            Validity of Registration
                                                        </div>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-50">
                                                {currentTableData.map((row, idx) => (
                                                    <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                                        <td className="py-5 px-8 text-[13px] text-gray-500 font-medium text-center">{row.Sr_No}</td>
                                                        <td className="py-5 px-4 text-[13px] text-gray-700 font-medium leading-relaxed">{row.Name_Address_of_Company}</td>
                                                        <td className="py-5 px-4 text-[13px] text-gray-700 whitespace-pre-wrap">{row.Name_of_Product}</td>
                                                        <td className="py-5 px-4 text-[13px] text-gray-700 whitespace-pre-wrap">{row.Production_Capacity}</td>
                                                        <td className="py-5 px-4 text-[13px] text-gray-700 whitespace-nowrap">{row.Registration_No}</td>
                                                        <td className="py-5 px-4 text-[13px] text-gray-700 whitespace-nowrap text-center">{row.Date_of_Registration}</td>
                                                        <td className="py-5 px-6 text-[13px] text-gray-700 whitespace-nowrap text-center">{row.Validity_of_Registration}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                {/* Pagination */}
                                {totalPages > 1 && (
                                    <div className="flex items-center justify-center gap-2 mt-8 mb-2">
                                        {/* First Page Button */}
                                        <button
                                            onClick={() => handlePageChange(1)}
                                            disabled={currentPage === 1}
                                            className={`w-10 h-10 flex items-center justify-center rounded-full border transition-all duration-300
                                                ${currentPage === 1
                                                    ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                                                    : 'border-gray-300 text-gray-600 hover:border-[#0085E2] hover:text-[#0085E2] hover:shadow-md cursor-pointer'
                                                }`}
                                        >
                                            <ChevronsLeft className="w-5 h-5" />
                                        </button>

                                        {/* Previous Button */}
                                        <button
                                            onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                                            disabled={currentPage === 1}
                                            className={`w-10 h-10 flex items-center justify-center rounded-full border transition-all duration-300
                                                ${currentPage === 1
                                                    ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                                                    : 'border-gray-300 text-gray-600 hover:border-[#0085E2] hover:text-[#0085E2] hover:shadow-md cursor-pointer'
                                                }`}
                                        >
                                            <ChevronLeft className="w-5 h-5" />
                                        </button>

                                        {/* Page Numbers */}
                                        {getPageNumbers(currentPage, totalPages).map((page, index) => (
                                            page === '...' ? (
                                                <span key={`ellipsis-${index}`} className="px-2 text-gray-400 text-lg font-medium">...</span>
                                            ) : (
                                                <button
                                                    key={page}
                                                    onClick={() => handlePageChange(page as number)}
                                                    className={`w-10 h-10 flex items-center justify-center rounded-full text-[15px] font-medium transition-all duration-300 cursor-pointer
                                                        ${currentPage === page
                                                            ? 'bg-[#0085E2] text-white shadow-blue-200 scale-110'
                                                            : 'text-gray-600 hover:bg-gray-50'}`}
                                                >
                                                    {page}
                                                </button>
                                            )
                                        ))}

                                        {/* Next Button */}
                                        <button
                                            onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
                                            disabled={currentPage === totalPages}
                                            className={`w-10 h-10 flex items-center justify-center rounded-full border transition-all duration-300
                                                ${currentPage === totalPages
                                                    ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                                                    : 'border-gray-300 text-gray-600 hover:border-[#0085E2] hover:text-[#0085E2] hover:shadow-md cursor-pointer'
                                                }`}
                                        >
                                            <ChevronRight className="w-5 h-5" />
                                        </button>

                                        {/* Last Page Button */}
                                        <button
                                            onClick={() => handlePageChange(totalPages)}
                                            disabled={currentPage === totalPages}
                                            className={`w-10 h-10 flex items-center justify-center rounded-full border transition-all duration-300
                                                ${currentPage === totalPages
                                                    ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                                                    : 'border-gray-300 text-gray-600 hover:border-[#0085E2] hover:text-[#0085E2] hover:shadow-md cursor-pointer'
                                                }`}
                                        >
                                            <ChevronsRight className="w-5 h-5" />
                                        </button>
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

export default StatusOfRegistration;
