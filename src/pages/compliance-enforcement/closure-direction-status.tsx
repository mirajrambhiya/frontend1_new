import { useState } from 'react';
import PageBanner from '../../components/PageBanner.tsx';

interface ClosureData {
    sNo: string;
    industryName: string;
    address: string;
    closureDate: string;
    restartApp: string;
    restartIssued: string;
    remark: string;
}

const mumbaiClosureData: ClosureData[] = [
    {
        sNo: "1",
        industryName: "M/s.Ashoka Buildcon ltd.,",
        address: "Opp.I-Max Theater Phase-III wadala Trunk terminal Wadala(E) ,Mumbai-37",
        closureDate: "29.05.2012",
        restartApp: "Not applied for restrat",
        restartIssued: "--",
        remark: "Plant was dismental on said rocation"
    },
    {
        sNo: "2",
        industryName: "M/s.Simplex Infrastructure ltd",
        address: "(RMC Plant),Casting Yard Estern-Freeway project, MMRDA,wadala Trunk Terminal, Anik Link Road, Wadala(E) Mumbai-37",
        closureDate: "29.05.2012",
        restartApp: "Not applied for restrat",
        restartIssued: "--",
        remark: "--"
    },
    {
        sNo: "3",
        industryName: "M/s.Lafarge Aggregate & Concrete India pvt.ltd.,",
        address: "Cs No.08,phase-III, Opp-I-Max Theater,Near Wadala Trunk Terminal,Anik Link Road,Link Road,Wadala(E), Mumbai-37",
        closureDate: "29.05.2012",
        restartApp: "Applied dtd. 02.02.2013",
        restartIssued: "---",
        remark: "Note for prosecution proposal sent to head office on dtd. 08.02.2013"
    },
    {
        sNo: "4",
        industryName: "M/s.Relcon Infraproject pvt.Ltd",
        address: "(RMC Plant)Near Anik Bus Depot,Opp,I-max Ad lab, Wadala Link Road,Wadala (E),Mumbai-37",
        closureDate: "29.05.2012",
        restartApp: "Applied",
        restartIssued: "--",
        remark: "Personal hearing extended infront of M.S on dtd 06.02.2013"
    },
    {
        sNo: "5",
        industryName: "M/s.Acc Cement ltd.,",
        address: "(RMC Plant),C/o Swift Deonar Village,Opp.Deonar Police Station,Deonar(w), Mumbai-48",
        closureDate: "29.06.2012",
        restartApp: "Applied dtd. 02.07.2012",
        restartIssued: "04.12.2012",
        remark: "Restart obtained"
    },
    {
        sNo: "6",
        industryName: "M/s.Sheth Developers pvt.Ltd.",
        address: "Plot No.1090 & 1092 of TPS IV of Mahim,At Appasaheb Marathe marg,prabhadevi, Mumbai",
        closureDate: "12.07.2012",
        restartApp: "Not applied for restrat",
        restartIssued: "--",
        remark: "Closure direction issued because not applied for renewal of consent to operate,thereafter project proponant applied for consent to operate.the same was submitted to head office."
    },
    {
        sNo: "7",
        industryName: "M/s.Tarmat Infrastructure Engg.Pvt.ltd",
        address: "Gen.A.K.Vaidya Marg Filmcity Road,Goregaon Mumbai-400063",
        closureDate: "04.12.2012",
        restartApp: "Not applied for restrat",
        restartIssued: "--",
        remark: "The matter is High Court"
    },
    {
        sNo: "8",
        industryName: "M/s.Gammon India pvt Ltd",
        address: "(RMC Plant),C/o.Runawal Green project,Goregaon Mulund Link Road,Mulund (W),Mumbai-80",
        closureDate: "07.12.2012",
        restartApp: "Applied dtd. 20.01.2012",
        restartIssued: "--",
        remark: "--"
    }
];

interface ThaneClosureData {
    sNo: string;
    industryName: string;
    actionInitiated: string;
}

const thaneClosureData: ThaneClosureData[] = [
    { sNo: "1", industryName: "M/s. Punkit Processors., Mohan Mill Compound, G.B. Road, Thane", actionInitiated: "Closure directions issued vide letter dated 22/3/2012" },
    { sNo: "2", industryName: "M/s.Albright Industries, 59/2,s.v.road,Opp.Shell Petrol Pump.Mira,Dist. Thane", actionInitiated: "Closure directions issued vide letter dated 28/3/2012" },
    { sNo: "3", industryName: "M/s.B.S Metal Finishing C.P.Talao,Near Delco Co.Road No.28,Wagle Indl.Estate,Thane", actionInitiated: "Closure directions issued vide letter dated 28/3/2012" },
    { sNo: "4", industryName: "M/s.jitendra Electro Platers,Arvind indl.Compund,Ganpati Pada,Kalwa,Thane", actionInitiated: "Closure directions issued vide letter dated 28/3/2012" },
    { sNo: "5", industryName: "M/s.Hy-Tech Engineering Pvt.Ltd, A/60,Main Road,wagle Estate,Thane", actionInitiated: "Closure directions issued vide letter dated 28/3/2012" },
    { sNo: "6", industryName: "M/s.Sainath Electroplating,C.P talao,Near delco Co.Road No.28,Wagle indl.estate,Thane", actionInitiated: "Closure directions issued vide letter dated 28/3/2012" },
    { sNo: "7", industryName: "M/s.Sterling Electroplating Buta Compound,Thane", actionInitiated: "Closure directions issued vide letter dated 28/3/2012" },
    { sNo: "8", industryName: "M/s.G.S Metal Finishing,Gala No.D-13 plot No.34 Road No.21,Wagle Estate,Thane", actionInitiated: "Closure directions issued vide letter dated 28/3/2012" },
    { sNo: "9", industryName: "M/s.Komal Processors, B-18,Adivashipada,Mandal Compound,Road No.21,wagle Estate,Thane", actionInitiated: "Closure directions issued vide letter dated 28/3/2012" },
    { sNo: "10", industryName: "M/s.Shri Ram Enterprises, Gala No.1,Road No.28 Wagle Indl.Estate,Thane", actionInitiated: "Closure directions issued vide letter dated 28/3/2012" },
    { sNo: "11", industryName: "M/s.AMJ Corporation A-4666,Road No.28,wagle indl.Estate,Thane", actionInitiated: "Closure directions issued vide letter dated 28/3/2012" },
    { sNo: "12", industryName: "M/s.Shri Durga Metal Finishing C.P Talao,Wagle Indl,Estate,Thane", actionInitiated: "Closure directions issued vide letter dated 28/3/2012" },
    { sNo: "13", industryName: "M/s.Usha Plastic,Gala No.112,Co.Op.Indl.Estate Navghar.Vasai(E)Dist.Thane", actionInitiated: "Closure directions issued vide letter dated 23/5/2012" },
    { sNo: "14", industryName: "M/s.Puja Plastics, Gala No.103,1st Floor,Rajprabha Indl.Estate, Bhoidpada,vasai(E),Dist.Thane", actionInitiated: "Closure directions issued vide letter dated 23/5/2012" },
    { sNo: "15", industryName: "M/s.Resonance Specialties Plot No.T-140 MIDC Tarapur,Tal:Palghar, Dist:Thane", actionInitiated: "Voluntry Closure direction issued by MPCB Board -MPCB/ROT/1085 dated 18.05.2012" },
    { sNo: "16", industryName: "M/s.Alpha Dyechem Plot No N-223 MIDC Tarapur,tal:Palghar, Dist:Thane", actionInitiated: "Voluntry Closure direction issued by MPCB Board -MPCB/ROT/1071 dated 12.04.2012" },
    { sNo: "17", industryName: "M/s.khanvelkar Plasticizer Plot No T-82 MIDC Tarapur,Tal:Palghar,Dist:Thane", actionInitiated: "Voluntry Closure direction issued by MPCB Board -MPCB/ROT/1285 dated 22.06.2012" },
    { sNo: "18", industryName: "M/s.Ravi R.Bhandari Vrindavan Nagari,S.No.33/1 to 33/19 Vill Pantembhi Tai Palghar Dist.Thane", actionInitiated: "Closure directions issued vide letter dated 3/1/2012" },
    { sNo: "19", industryName: "M/s.MAAD Realtors & Infra pvt.Ltd Palghar,Tarapur", actionInitiated: "Closure directions issued vide letter dated 3/1/2012" },
    { sNo: "20", industryName: "M/s.SKD Realty S.No.445(Old),129(New)and s.No.446(Old), 130(New),H.No.3 Vill Navgar,Dist.Thane", actionInitiated: "Closure directions issued vide letter dated 26/12/2012" },
    { sNo: "21", industryName: "M/s.Manan Cotsyn Pvt.Ltd. Plot No.w-198,MIDC Tarapur,Dist.Thane", actionInitiated: "Closure directions issued vide letter dated 10/1/2013" },
    { sNo: "22", industryName: "M/s.kesaram Engineering,plot No.w-198 MIDC Tarapu,dist.Thane", actionInitiated: "Closure directions issued vide letter dated 21/1/2013" },
    { sNo: "23", industryName: "M/s.Novelty Power & infra-Tech ltd., Ganesh Indl.estate Plot No.5 & g NH No.8 Valiv Tal Vasai,Dist.Thane", actionInitiated: "Closure directions issued vide letter dated 29/1/2013" },
    { sNo: "24", industryName: "M/s.B.T.Industries, Genesis Indl.Estate,Palghar,Dist.Thane", actionInitiated: "Closure directions issued vide letter dated 29/01/2013" },
    { sNo: "25", industryName: "M/s.Anil R.Gupta,S.No.180,Vill Nilemore,(Nailasopsara),Tal Vasai,Dist.Thane", actionInitiated: "Closure directions issued vide letter dated 6/02/2013" }
];

interface NaviMumbaiClosureData {
    sNo: string;
    industryName: string;
    closureDate: string;
}

const naviMumbaiClosureData: NaviMumbaiClosureData[] = [
    {
        sNo: "01",
        industryName: "M/s.Saikripa Industries Gala.No.51 Elthanpanda, Digha,TTC,Navi Mumbai",
        closureDate: "05/10/2012"
    },
    {
        sNo: "02",
        industryName: "M/s.Special Purpose Machines Pl.No.R-45,MIDCTurbhe, TTC,Navi Mumbai",
        closureDate: "05/10/2012"
    },
    {
        sNo: "03",
        industryName: "M/s Apollo Boring Company, pl.No.D-22/7,MIDCTurbhe, TTC,Navi Mumbai",
        closureDate: "13/08/2012"
    }
];

interface KalyanClosureData {
    sNo: string;
    industryName: string;
    closureDetails: string;
    presentStatus: string;
}

const kalyanClosureData: KalyanClosureData[] = [
    {
        sNo: "01",
        industryName: "M/s.A.S. Chemopharma,Villkamba post-Varap,Tal-Kalyan, Dist-Thane",
        closureDetails: "ROK/TB/CD/03/130104FT0354 Dtd 03/01/2013",
        presentStatus: "Presently close,this office has received request letter for restart of the unit on 14/01/2013"
    },
    {
        sNo: "02",
        industryName: "M/s Jetson,Vill-Mharal PostVarap,Tal-kalyan,Dist-Thane",
        closureDetails: "ROK/TB/CD/03/130104FT0339 Dtd 03/01/2013",
        presentStatus: "Presently closed,not submitted proposal for restart of the unit."
    },
    {
        sNo: "03",
        industryName: "M/s. Harsh Fine chemical Vill-Mharal,Post-Varap,tal-Kalyan, Dist-Thane",
        closureDetails: "ROK/TB/CD/121206FT0181 Dtd 06/12/2012.",
        presentStatus: "Presently closed,not submitted proposal for restart of the unit."
    },
    {
        sNo: "04",
        industryName: "M/s.A.S.chemocpharma(p)Ltd., S.No.60,H.No.1,Plot No.1, Vill-Mharal,Post-Varap,Tal kalyan,Dist-Thane",
        closureDetails: "ROK/TB/CD/121206FT0193 Dtd 06/12/2012.",
        presentStatus: "Presently closed,this office has received request letter for restart of the unit on 14/01/2013"
    },
    {
        sNo: "05",
        industryName: "M/s.Amerind Color & Chemical Plot No.A-88,MIDC,Ph-I, Dombivali,Dist_Thane",
        closureDetails: "ROK/TB/CD/16/130118FT0298 Dtd 18/01/2013.",
        presentStatus: "Presently closed,not submitted proposal for restart of the unit"
    }
];

interface PuneClosureData {
    sNo: string;
    industryName: string;
    closureDate: string;
    remark: string;
}

const puneClosureData: PuneClosureData[] = [
    {
        sNo: "01",
        industryName: "M/s.Bhima SSK(Sugar Unit), Madhukar Nagar,Paras,tal Daund,Dist-Pune",
        closureDate: "26.03.2012",
        remark: "--"
    },
    {
        sNo: "02",
        industryName: "M/s W.S.Developers Pvt.Ltd. gat No.226,A/p Wadebolhai, Tal:-Haveli,Dist:-Pune",
        closureDate: "02.02.2013 (stop operational work)",
        remark: "--"
    },
    {
        sNo: "03",
        industryName: "Slaughter House of Pimpri Chinchwad Municipal Corporation,Pimpri,Pune-18",
        closureDate: "Closure directions are issued vide Letter No. MPCB/ROP/2819 dated 22/11/2011",
        remark: "Presently slaughter house is not in operation The Kureshi Association has requested the Board to grant them temporary permission for slaughtering activities at existing site till new site is developed The note is submitted to Board Office Mumbai for further guidance & decision in this regard"
    },
    {
        sNo: "04",
        industryName: "Executive Engineer-BSUP Project Pimpri-Chinchwad Municipal Corpration,Pimpri Pune-18",
        closureDate: "Directions are issued vide Letter No. MPCB/ROP/2759/12 dated 04/10/2012 to stop the construction activity immediately until obtaining necessary NOC from Defence Authority at Sector 22,Nigdi Project",
        remark: "Present construction is stopped"
    },
    {
        sNo: "05",
        industryName: "M/s.Charushilla Handmade Paper Industry,S.No.41/1B, A/p.Kiwale,Tai Haveli,Dist.Pune",
        closureDate: "Closure directions are issued vide Letter No.08/11/2011",
        remark: "Presently industry is closed"
    },
    {
        sNo: "06",
        industryName: "Saurabh Electroplaters No.399,Warunji Phata,Tal-Karad Dist-Satara",
        closureDate: "MPCB/ROP/381/12 dt.02/05/2012",
        remark: "--"
    },
    {
        sNo: "07",
        industryName: "Radhika E-Coats & Enginnering W-23,Ogalewadi,Tal-Karad Dist-Satara",
        closureDate: "MPCB/ROP/385/12 dt.02/05/2012 No.08/11/2011",
        remark: "--"
    },
    {
        sNo: "08",
        industryName: "Shriram Electro Platers, Ogalewadi Industrial Estate,Ogalewadi,Tal-Karad Dist-Satara",
        closureDate: "MPCB/ROP/386/12 dt.02/05/2012",
        remark: "--"
    },
    {
        sNo: "09",
        industryName: "M/S.Son Ankur Exports Pvt. Ltd.,Gat No.67,A/P Mulegaon Tanda Tal:S Solapur,Dist:Solapur",
        closureDate: "3742/12 Dated:28/12/2012",
        remark: "--"
    },
    {
        sNo: "10",
        industryName: "M/S.Arun Subrao kapse (Stone Crusher)Gat No.416, A/P Zaregaon,tal:Barshi, Dist:Solapur",
        closureDate: "MPCB/ROP/159 Dated: 05/01/2013",
        remark: ""
    }
];

interface KolhapurClosureData {
    sNo: string;
    industryName: string;
    closureDetails: string;
    remarks: string;
}

const kolhapurClosureData: KolhapurClosureData[] = [
    {
        sNo: "1",
        industryName: "M/s. JSW Jaigad Port Ltd. Dhamankhol Bay, Jaigad, Tal. & Dist. Ratnagiri",
        closureDetails: "MPCB/RO/KOP/3870/12 dated 19/10/2012",
        remarks: "Yet not issued restart order"
    },
    {
        sNo: "2",
        industryName: "M/s. Thouwfeeq Fish Meal and Oil Company Plot NO. 27/28, MIDC Mirjole, Tal.& Dist.Ratnagiri",
        closureDetails: "MPCB/RO/KOP/4701/13 Dated 21/01/2013",
        remarks: "Yet not issued restart order"
    },
    {
        sNo: "3",
        industryName: "M/s. Chiplun Steel Rolling Mill, Plot No. C-10, MIDC Kherdi, Tal. Chiplun, Dist. Ratnagiri.",
        closureDetails: "MPCB/RO/KOP/4766/13 Dated 30/01/2013",
        remarks: "Yet not issued restart order"
    }
];

interface NashikClosureData {
    sNo: string;
    industryName: string;
    closureDetails: string;
    restartDetails: string;
}

const nashikClosureData: NashikClosureData[] = [
    {
        sNo: "1",
        industryName: "M/s.Glenmark Pharmaceuticals Ltd., Dist. Nagpur",
        closureDetails: "MPCB/RONK/CD-244/2482 dated 19/06/2010",
        restartDetails: "MPCB/BO/P&L Divn/B-4134 dated 28/06/2010"
    },
    {
        sNo: "2",
        industryName: "M/s. Bedmutha Industry Ltd, Unit No. II), Plot No. A-70-72, STICE Musalgaon, Sinnar, Dist. Nashik",
        closureDetails: "MPCB/RONK/ CD 530/ 9405 17/05/2012",
        restartDetails: "MPCB/BO/JD(APC)/DIR-81/TB-1/B-32285 dated 23.05.2012"
    },
    {
        sNo: "3",
        industryName: "M/s. ADF Foods Ltd. , Plot No. E-5, MIDC Malegaon, Tal. Sinnar, Dist. Nashik",
        closureDetails: "MPCB/RONK/ CD/ 495/ 935/27/02/2012",
        restartDetails: "MPCB/RONK/06/2037/2012 dtd. 14.03.2012"
    },
    {
        sNo: "4",
        industryName: "M/s. B. S. Metals, Plot No. D-21, MIDC Ambad, Dist.Nashik",
        closureDetails: "MPCB/RONK/CD/511/8029/18/04/2012",
        restartDetails: "Industry is permanently close down the activity"
    },
    {
        sNo: "5",
        industryName: "M/s. Vinod Engineering, Plot No. M-80, MIDC Ambad, Dist.Nashik",
        closureDetails: "MPCB/RONK /CD/513/8032/18/04/2012",
        restartDetails: "MPCB/RONK/2012/11218 dtd. 13.12.2012"
    },
    {
        sNo: "6",
        industryName: "M/s. Avdhoot Enterprises, Plot No. M-58, MIDC Ambad, Nashik",
        closureDetails: "MPCB/RONK/CD/514/8030/18/04/2012",
        restartDetails: "Industry is permanently close down the activity"
    },
    {
        sNo: "7",
        industryName: "M/s. Shri Sai Industry, Plot No. - D-25, MIDC Ambad, Nashik.",
        closureDetails: "MPCB/RONK/CD/515/ 8031/18/04/2012",
        restartDetails: "MPCB/RONK/2012/11257 dtd. 18.12.2012"
    },
    {
        sNo: "8",
        industryName: "M/s. Saptashrungi Electroplating, Plot No. B-58, NICE, MIDC Satpur, Nashik",
        closureDetails: "MPCB/RONK/CD/544/9915/03/07/2012",
        restartDetails: "Industry is permanently close down the activity"
    },
    {
        sNo: "9",
        industryName: "M/s. Sai Enterprises, (M/s. HemEnterprises) Plot No. B-58, NICE Satpur, Nashik",
        closureDetails: "MPCB/RONK/CD/546/9957/ 07/07/2012",
        restartDetails: "Industry is permanently close down the activity"
    },
    {
        sNo: "10",
        industryName: "Shri Ram Enterprises, Plot No. B – 58, NICE MIDC Satpur, Nashik",
        closureDetails: "MPCB/RONK/CD/547/9956/07/07/2012",
        restartDetails: "Industry is permanently close down the activity"
    },
    {
        sNo: "11",
        industryName: "M/s. Belmarks Metal Works Plot No. B-273, MIDC Malegaon, Tal. Sinnar, Nashik",
        closureDetails: "MPCB/RONK/CD/575/10586/15/09/2012",
        restartDetails: "BO/JD(APC)/DIR/B-5839dated 26.09.2012"
    },
    {
        sNo: "12",
        industryName: "M/s. Bhagwati Ferro Metal Pvt Ltd., Plot No. G -7, MIDC Malegaon, Sinnar, Nashik",
        closureDetails: "MPCB/RONK/ID/668/11460/31/12/2012",
        restartDetails: "Not submitted proposal of restart by the industry"
    },
    {
        sNo: "13",
        industryName: "M/s. Apporva Industry, Plot No.W-82/A, MIDC Satpur, Nashik",
        closureDetails: "MPCB/RONK/TB/2874 dtd. 14.07.2011",
        restartDetails: "MPCB /RONK/R. Dir - 02/11 /2011 /4911 dtd. 19.11.2011."
    },
    {
        sNo: "14",
        industryName: "M/s. Nayan Metal, Plot No. H-43, MIDC Satpur,",
        closureDetails: "MPCB/RONK/TB/2876 dtd. 14.07.2011",
        restartDetails: "MPCB /RONK/R. Dir - 02/11 /2011 /4912 dtd. 19.11.2011."
    },
    {
        sNo: "15",
        industryName: "M/s. Kunal Enterprises, W-84/A, MIDC Satpur, Nashik",
        closureDetails: "MPCB/RONK/TB/2875 dtd. 14.07.2011",
        restartDetails: "MPCB /RONK/R. Dir - 02/11 /2011 /4913 dtd. 19.11.2011."
    },
    {
        sNo: "16",
        industryName: "M/s. D. M. Enterprises, Plot No. F-33, MIDC Satpur, Dist. -Nashik.",
        closureDetails: "MPCB/RONK/TB/2873 dtd. 14.07.2011",
        restartDetails: "MPCB /RONK/R. Dir - 02/11 /2011 /4914 dtd. 19.11.2011"
    },
    {
        sNo: "17",
        industryName: "M/s. Shri Ganesh Industries, Plot No. F-33, MIDC Satpur, Nashik",
        closureDetails: "MPCB/RONK/TB/2877 dtd. 14.07.2011",
        restartDetails: "MPCB /RONK/R. Dir - 02/11 /2011 /4915 dtd. 19.11.2011."
    },
    {
        sNo: "18",
        industryName: "M/s. Waxen Pharma, Plot No.77,Station Road Co-Op. Ind. Estate Ltd., Kopergaon Tal. kopergaon Dist. A'nagar",
        closureDetails: "MPCB/RONK/CD-215/244 dtd.27/01/2010",
        restartDetails: "The closure direction is issued due to explosion in the industry now, industry is permanently Closed"
    },
    {
        sNo: "19",
        industryName: "M/s. Galco Extrusions Pvt. Ltd., Gat No.192/196, 1A,near MIDC Nimblak, Ahmednagar",
        closureDetails: "MPCB/RONK/CD-439/2287 dytd.09/06/2011",
        restartDetails: "BO/JD(APC) Dir -64-Restart/B 3342/ dtd. 16.06.2011."
    },
    {
        sNo: "20",
        industryName: "M/s. Mula SSSK Ltd.,",
        closureDetails: "MPCB/RONK/CD-541/9816 dtd.18/06/2012",
        restartDetails: "BO/P&L Div/B-3953 dtd.27/06/2012"
    },
    {
        sNo: "21",
        industryName: "M/s. Shirdi Country inn Pvt. Ltd., (ST.LAUREN SUITES) Sr.No.5/19 Mouje-Shirdi Tal. Rahata.Dist. Ahmednagar",
        closureDetails: "MPCB/RONK/CD-549/9981 dtd. 10/07/2012",
        restartDetails: "MPCB/PAMS/Con Dir/B-4862 dtd.07/08/2012"
    },
    {
        sNo: "22",
        industryName: "M/s. Kamakhimata Stone Crusher, Gat No.220 A/P. Bhorwadi Tal. & Dist. Ahmednagar.",
        closureDetails: "MPCB/RONK/CD-557/10215 dtd.01/08/2012",
        restartDetails: "Proposal for restary submitted by Regional Office, to head office vide letter No. 11349 dated 20.12.2012 restart direction yet tobe received. However, head office has directed SRO, A'nagar to submit the present status of the said industry. The same is awaited."
    },
    {
        sNo: "23",
        industryName: "M/s. Narmada Crush Metal Gat. No. 105 A/P-Saundala Tal. Newasa, Dist. Ahmednagar ( for refusal)",
        closureDetails: "MPCB/RONK/CD-671/2012 dtd.23/01/2013",
        restartDetails: "MPCB/PAMS/NCM/B-3564 dtd. 08/06/2012"
    },
    {
        sNo: "24",
        industryName: "M/s. Shrigonda S.S.K Ltd., (Sugar Division), Shrigonda Factory, Tal. Shrigonda Dist. Ahmednagar",
        closureDetails: "MPCB/RONK/CD-671/2012 dtd.23/01/2013",
        restartDetails: "RPAD/Fax/Hand Delivery No.6965 dtd.23/11/2012"
    },
    {
        sNo: "25",
        industryName: "M/s. Kalpataru Agro Chem Industries, Plot No. N-110, MIDC Jalgaon, Jalgaon.",
        closureDetails: "MPC/RONK/CD-586/10808 /2012 dtd. 22/10/12",
        restartDetails: "Now, industry is closed and not applied for restart."
    }
];

interface AurangabadClosureData {
    sNo: string;
    industryName: string;
    closureDetails: string;
}

const aurangabadClosureData: AurangabadClosureData[] = [
    {
        sNo: "1",
        industryName: "M/s.Pranav Enterprises . Plot no.42, Gat No.46, Ghanegaon, tal. Gangapur, Dist. Aurangabad",
        closureDetails: "MPCB/ROA/Dir/2964 dated 17/12/2012"
    },
    {
        sNo: "2",
        industryName: "M/s. Sai Industries, Plot NO. 68,Gat No.46, Ghanegaon, Tal. Gangapur Dist.Aurangabad",
        closureDetails: "MPCB/ROA/Dir/2966 Dated 7/12/2012"
    },
    {
        sNo: "3",
        industryName: "M/s. Atharav Enterprises, Plot No. 100, Gat NO.46 Ghanegaon, Tal. Gangapur Dist.Aurangabad",
        closureDetails: "MPCB/ROA/Dir/2967 Dated 7/12/2012"
    },
    {
        sNo: "4",
        industryName: "M/s.Sai Research Lab., Plot No.77/2, Gat NO.46 Ghanegaon, Tal. Gangapur Dist.Aurangabad",
        closureDetails: "MPCB/ROA/Dir/2968 Dated 7/12/2012"
    },
    {
        sNo: "5",
        industryName: "M/s.Balaji Coating, Plot NO.77/2 ,Gat NO.46, Ghanegaon, Tal. Gangapur Dist.Aurangabad",
        closureDetails: "MPCB/ROA/Dir/2969 Dated 7/12/2012"
    },
    {
        sNo: "6",
        industryName: "M/s. Jai Shivshankar SSK Ltd. Shesh Nagar, Manjel, Tal. Muked, Dist. Nanded",
        closureDetails: "MPCB/ROA/D/3116/2012 Dated 24/12/2012"
    },
    {
        sNo: "7",
        industryName: "M/s.Terna SSK Ltd. (Sugar Divison), Village Dhoki, Tal.& Dist.Osmanabad",
        closureDetails: "MPCB/ROA/Dir/1463 Dated 05/06/2012"
    },
    {
        sNo: "8",
        industryName: "M/s.Tulja Bhavani SSK(Distillery Unit), A/p Naldurg, Tal. Tuljapur, Dist. Osmanabad",
        closureDetails: "MPCB/ROA/Dir/3117 Dated 24/12/2012"
    }
];

interface NagpurClosureData {
    sNo: string;
    industryName: string;
    closureDetails: string;
    remark: string;
}

const nagpurClosureData: NagpurClosureData[] = [
    {
        sNo: "1",
        industryName: "M/s.Taj Ice Factory, Taj Bag, Dist. Nagpur",
        closureDetails: "MPCB/NRO/Direction/137/5347/2010 dated 06/12/2010",
        remark: "Proposal of restart submitted to HQ"
    },
    {
        sNo: "2",
        industryName: "M/s. Bhla Enterprises, Kh NO. 236 & 237,Village.Manegaon Takli, Tal.Saoner, Dist. Nagpur",
        closureDetails: "MPCB/NRO/Direction/32/3502/2012 dated 17/09/2012",
        remark: "Restart proposal submitted by Industry"
    },
    {
        sNo: "3",
        industryName: "M/s. Jagdamba Brick Industry, Village- Koradi(Nanda), Tal.Kamptee, Dist.-Nagpur",
        closureDetails: "MPCB/NRO/Direction/306/1098/2012 dated 16/03/2012",
        remark: "Industry did not submit any representation against the closure order. Similarly, SRO-1 also has not submitted any proposal for restart."
    },
    {
        sNo: "4",
        industryName: "M/s.Om Sheet Metal Works, Plot No.142, Jaihind Nagar, Behind Kunal Hospital, Chindwara Road, Mankapur, Dist.Nagpur",
        closureDetails: "MPCB/NRO/Direction/25/2709/2012 dated 19/07/2012",
        remark: "Applied for Consent and Same is forwarded to HQ"
    },
    {
        sNo: "5",
        industryName: "M/s.Honey Food Products, C/o Eshwar Rokde,Plot NO.1462, Near Binaki Magalwatri, Mehandibagh Road, Dist.Nagpur",
        closureDetails: "MPCB/NRO/Direction/33/3503/2012 dated 17/09/2012",
        remark: "Proposal submitted to HQ"
    },
    {
        sNo: "6",
        industryName: "M/s. Liberty Food Industries, . Plot.No.85, setia Chowk, Jaripatka, Dist.Nagpur",
        closureDetails: "MPCB/NRO/Direction/34/3504/2012 dated 17/09/2012",
        remark: "Proposal submitted to HQ"
    },
    {
        sNo: "7",
        industryName: "M/s.Shiv Shakti Bakery, Sai Basanshah Chowk, Main Road, Janpatka, Dist.Nagpur",
        closureDetails: "MPCB/NRO/Direction/36/3506/2012 dated 17/09/2012",
        remark: "Proposal submitted to HQ"
    },
    {
        sNo: "8",
        industryName: "M/s Shivam Bakery, Plot no.241, Kamal Chowk , Jaripatka, Dist.Nagpur",
        closureDetails: "MPCB/NRO/Direction/36/3506/2012 dated 17/09/2012",
        remark: "Proposal submitted to HQ"
    },
    {
        sNo: "9",
        industryName: "M/s. Shiva Chemical Industries, Kh.no.134/136, Ghontitok, Tal.- Ramtek, Dist.Nagpur",
        closureDetails: "MPCB/NRO/Direction/36/3506/2012 dated 17/09/2012",
        remark: "Industry did not submit any representation against the closure order. Similarly, SRO-1 also has not submitted any proposal for restart."
    }
];

const ClosureDirectionStatus = () => {
    const [activeCity, setActiveCity] = useState("Mumbai");

    const cities = [
        "Mumbai",
        "Thane",
        "Navi Mumbai",
        "Kalyan",
        "Pune",
        "Kolhapur",
        "Nashik",
        "Aurangabad",
        "Nagpur",
        "Amravati",
        "Chandrapur-Nil",
        "Raigad-Nil"
    ];

    const renderTable = (data: ClosureData[]) => (
        <div className="border border-gray-200 rounded-[20px] md:rounded-[35px] overflow-hidden w-full overflow-x-auto">
            <table className="w-full border-collapse min-w-[1000px]">
                <thead>
                    <tr className="border-b border-gray-100">
                        <th className="py-4 px-2 text-left w-[5%]">
                            <div className="border border-gray-100 rounded-full py-2 px-1 text-center text-[12px] font-semibold bg-gray-50/50">
                                Sr. No
                            </div>
                        </th>
                        <th className="py-4 px-1 text-left w-[18%]">
                            <div className="border border-gray-100 rounded-full py-2 px-3 text-[12px] font-semibold whitespace-nowrap bg-gray-50/50 overflow-hidden text-ellipsis">
                                Name of Industry
                            </div>
                        </th>
                        <th className="py-4 px-1 text-left w-[22%]">
                            <div className="border border-gray-100 rounded-full py-2 px-3 text-[12px] font-semibold whitespace-nowrap bg-gray-50/50 overflow-hidden text-ellipsis">
                                Address
                            </div>
                        </th>
                        <th className="py-4 px-1 text-left w-[10%]">
                            <div className="border border-gray-100 rounded-full py-2 px-2 text-[12px] font-semibold bg-gray-50/50 text-center leading-tight">
                                Closure Issued date
                            </div>
                        </th>
                        <th className="py-4 px-1 text-left w-[15%]">
                            <div className="border border-gray-100 rounded-full py-2 px-3 text-[12px] font-semibold bg-gray-50/50 text-center leading-tight">
                                Application for restart
                            </div>
                        </th>
                        <th className="py-4 px-1 text-left w-[10%]">
                            <div className="border border-gray-100 rounded-full py-2 px-2 text-[12px] font-semibold bg-gray-50/50 text-center leading-tight">
                                Restart issued
                            </div>
                        </th>
                        <th className="py-4 px-2 text-left w-[20%]">
                            <div className="border border-gray-100 rounded-full py-2 px-3 text-[12px] font-semibold bg-gray-50/50 text-center">
                                Remark
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                    {data.map((row, idx) => (
                        <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                            <td className="py-3 px-2 text-[12px] text-gray-500 font-medium text-center align-top">{row.sNo}</td>
                            <td className="py-3 px-1 text-[12px] text-gray-700 font-medium leading-relaxed align-top break-words">
                                {row.industryName}
                            </td>
                            <td className="py-3 px-1 text-[12px] text-gray-600 leading-relaxed align-top break-words">
                                {row.address}
                            </td>
                            <td className="py-3 px-1 text-[12px] text-gray-600 whitespace-nowrap align-top text-center">
                                {row.closureDate}
                            </td>
                            <td className="py-3 px-1 text-[12px] text-gray-600 align-top text-center">
                                {row.restartApp}
                            </td>
                            <td className="py-3 px-1 text-[12px] text-gray-600 text-center align-top">
                                {row.restartIssued}
                            </td>
                            <td className="py-3 px-2 text-[12px] text-gray-600 leading-relaxed align-top break-words">
                                {row.remark}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    const renderThaneTable = (data: ThaneClosureData[]) => (
        <div className="border border-gray-200 rounded-[20px] md:rounded-[35px] overflow-hidden w-full overflow-x-auto">
            <table className="w-full border-collapse min-w-[800px]">
                <thead>
                    <tr className="border-b border-gray-100">
                        <th className="py-4 px-2 text-left w-[8%]">
                            <div className="border border-gray-100 rounded-full py-2 px-1 text-center text-[12px] font-semibold bg-gray-50/50">
                                Sr. No
                            </div>
                        </th>
                        <th className="py-4 px-1 text-left w-[52%]">
                            <div className="border border-gray-100 rounded-full py-2 px-4 text-[12px] font-semibold whitespace-nowrap bg-gray-50/50 overflow-hidden text-ellipsis">
                                Name of Industry
                            </div>
                        </th>
                        <th className="py-4 px-1 text-left w-[40%]">
                            <div className="border border-gray-100 rounded-full py-2 px-4 text-[12px] font-semibold whitespace-nowrap bg-gray-50/50 overflow-hidden text-ellipsis">
                                Action initiated by the Board against defaulting Unit
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                    {data.map((row, idx) => (
                        <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                            <td className="py-3 px-2 text-[12px] text-gray-500 font-medium text-center align-top">{row.sNo}</td>
                            <td className="py-3 px-2 text-[12px] text-gray-700 font-medium leading-relaxed align-top break-words">
                                {row.industryName}
                            </td>
                            <td className="py-3 px-2 text-[12px] text-gray-700 leading-relaxed align-top break-words">
                                {row.actionInitiated}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    const renderKalyanTable = (data: KalyanClosureData[]) => (
        <div className="border border-gray-200 rounded-[20px] md:rounded-[35px] overflow-hidden w-full overflow-x-auto">
            <table className="w-full border-collapse min-w-[800px]">
                <thead>
                    <tr className="border-b border-gray-100">
                        <th className="py-4 px-2 text-left w-[8%]">
                            <div className="border border-gray-100 rounded-full py-2 px-1 text-center text-[12px] font-semibold bg-gray-50/50">
                                Sr. No
                            </div>
                        </th>
                        <th className="py-4 px-1 text-left w-[32%]">
                            <div className="border border-gray-100 rounded-full py-2 px-4 text-[12px] font-semibold whitespace-nowrap bg-gray-50/50 overflow-hidden text-ellipsis">
                                Name of Industry
                            </div>
                        </th>
                        <th className="py-4 px-1 text-left w-[30%]">
                            <div className="border border-gray-100 rounded-full py-2 px-4 text-[12px] font-semibold whitespace-nowrap bg-gray-50/50 overflow-hidden text-ellipsis">
                                Details of Closure Directions issued
                            </div>
                        </th>
                        <th className="py-4 px-1 text-left w-[30%]">
                            <div className="border border-gray-100 rounded-full py-2 px-4 text-[12px] font-semibold whitespace-nowrap bg-gray-50/50 overflow-hidden text-ellipsis">
                                Present Status
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                    {data.map((row, idx) => (
                        <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                            <td className="py-3 px-2 text-[12px] text-gray-500 font-medium text-center align-top">{row.sNo}</td>
                            <td className="py-3 px-2 text-[12px] text-gray-700 font-medium leading-relaxed align-top break-words">
                                {row.industryName}
                            </td>
                            <td className="py-3 px-2 text-[12px] text-gray-700 leading-relaxed align-top break-words">
                                {row.closureDetails}
                            </td>
                            <td className="py-3 px-2 text-[12px] text-gray-700 leading-relaxed align-top break-words">
                                {row.presentStatus}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    const renderPuneTable = (data: PuneClosureData[]) => (
        <div className="border border-gray-200 rounded-[20px] md:rounded-[35px] overflow-hidden w-full overflow-x-auto">
            <table className="w-full border-collapse min-w-[800px]">
                <thead>
                    <tr className="border-b border-gray-100">
                        <th className="py-4 px-2 text-left w-[8%]">
                            <div className="border border-gray-100 rounded-full py-2 px-1 text-center text-[12px] font-semibold bg-gray-50/50">
                                Sr. No
                            </div>
                        </th>
                        <th className="py-4 px-1 text-left w-[32%]">
                            <div className="border border-gray-100 rounded-full py-2 px-4 text-[12px] font-semibold whitespace-nowrap bg-gray-50/50 overflow-hidden text-ellipsis">
                                Name & Address of Industry
                            </div>
                        </th>
                        <th className="py-4 px-1 text-left w-[30%]">
                            <div className="border border-gray-100 rounded-full py-2 px-4 text-[12px] font-semibold whitespace-nowrap bg-gray-50/50 overflow-hidden text-ellipsis">
                                Date of Closure Direction issued
                            </div>
                        </th>
                        <th className="py-4 px-1 text-left w-[30%]">
                            <div className="border border-gray-100 rounded-full py-2 px-4 text-[12px] font-semibold whitespace-nowrap bg-gray-50/50 overflow-hidden text-ellipsis">
                                Remark
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                    {data.map((row, idx) => (
                        <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                            <td className="py-3 px-2 text-[12px] text-gray-500 font-medium text-center align-top">{row.sNo}</td>
                            <td className="py-3 px-2 text-[12px] text-gray-700 font-medium leading-relaxed align-top break-words">
                                {row.industryName}
                            </td>
                            <td className="py-3 px-2 text-[12px] text-gray-700 leading-relaxed align-top break-words">
                                {row.closureDate}
                            </td>
                            <td className="py-3 px-2 text-[12px] text-gray-700 leading-relaxed align-top break-words">
                                {row.remark}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    const renderKolhapurTable = (data: KolhapurClosureData[]) => (
        <div className="border border-gray-200 rounded-[20px] md:rounded-[35px] overflow-hidden w-full overflow-x-auto">
            <table className="w-full border-collapse min-w-[800px]">
                <thead>
                    <tr className="border-b border-gray-100">
                        <th className="py-4 px-2 text-left w-[8%]">
                            <div className="border border-gray-100 rounded-full py-2 px-1 text-center text-[12px] font-semibold bg-gray-50/50">
                                Sr. No.
                            </div>
                        </th>
                        <th className="py-4 px-1 text-left w-[32%]">
                            <div className="border border-gray-100 rounded-full py-2 px-4 text-[12px] font-semibold whitespace-nowrap bg-gray-50/50 overflow-hidden text-ellipsis">
                                Name of Industry
                            </div>
                        </th>
                        <th className="py-4 px-1 text-left w-[30%]">
                            <div className="border border-gray-100 rounded-full py-2 px-4 text-[12px] font-semibold whitespace-nowrap bg-gray-50/50 overflow-hidden text-ellipsis">
                                Closure Direction vide letter no. and Date
                            </div>
                        </th>
                        <th className="py-4 px-1 text-left w-[30%]">
                            <div className="border border-gray-100 rounded-full py-2 px-4 text-[12px] font-semibold whitespace-nowrap bg-gray-50/50 overflow-hidden text-ellipsis">
                                Remarks
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                    {data.map((row, idx) => (
                        <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                            <td className="py-3 px-2 text-[12px] text-gray-500 font-medium text-center align-top">{row.sNo}</td>
                            <td className="py-3 px-2 text-[12px] text-gray-700 font-medium leading-relaxed align-top break-words">
                                {row.industryName}
                            </td>
                            <td className="py-3 px-2 text-[12px] text-gray-700 leading-relaxed align-top break-words">
                                {row.closureDetails}
                            </td>
                            <td className="py-3 px-2 text-[12px] text-gray-700 leading-relaxed align-top break-words">
                                {row.remarks}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    const renderNashikTable = (data: NashikClosureData[]) => (
        <div className="border border-gray-200 rounded-[20px] md:rounded-[35px] overflow-hidden w-full overflow-x-auto">
            <table className="w-full border-collapse min-w-[1000px]">
                <thead>
                    <tr className="border-b border-gray-100">
                        <th className="py-4 px-2 text-left w-[8%]">
                            <div className="border border-gray-100 rounded-full py-2 px-1 text-center text-[12px] font-semibold bg-gray-50/50">
                                Sr. No.
                            </div>
                        </th>
                        <th className="py-4 px-1 text-left w-[32%]">
                            <div className="border border-gray-100 rounded-full py-2 px-4 text-[12px] font-semibold whitespace-nowrap bg-gray-50/50 overflow-hidden text-ellipsis">
                                Name of Industry
                            </div>
                        </th>
                        <th className="py-4 px-1 text-left w-[30%]">
                            <div className="border border-gray-100 rounded-full py-2 px-4 text-[12px] font-semibold whitespace-nowrap bg-gray-50/50 overflow-hidden text-ellipsis">
                                Closure Direction vide letter no. and Date
                            </div>
                        </th>
                        <th className="py-4 px-1 text-left w-[30%]">
                            <div className="border border-gray-100 rounded-full py-2 px-4 text-[12px] font-semibold whitespace-nowrap bg-gray-50/50 overflow-hidden text-ellipsis">
                                Details about restart Direction
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                    {data.map((row, idx) => (
                        <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                            <td className="py-3 px-2 text-[12px] text-gray-500 font-medium text-center align-top">{row.sNo}</td>
                            <td className="py-3 px-2 text-[12px] text-gray-700 font-medium leading-relaxed align-top break-words">
                                {row.industryName}
                            </td>
                            <td className="py-3 px-2 text-[12px] text-gray-700 leading-relaxed align-top break-words">
                                {row.closureDetails}
                            </td>
                            <td className="py-3 px-2 text-[12px] text-gray-700 leading-relaxed align-top break-words">
                                {row.restartDetails}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    const renderAurangabadTable = (data: AurangabadClosureData[]) => (
        <div className="border border-gray-200 rounded-[20px] md:rounded-[35px] overflow-hidden w-full overflow-x-auto">
            <table className="w-full border-collapse min-w-[800px]">
                <thead>
                    <tr className="border-b border-gray-100">
                        <th className="py-4 px-2 text-left w-[8%]">
                            <div className="border border-gray-100 rounded-full py-2 px-1 text-center text-[12px] font-semibold bg-gray-50/50">
                                Sr. No.
                            </div>
                        </th>
                        <th className="py-4 px-1 text-left w-[42%]">
                            <div className="border border-gray-100 rounded-full py-2 px-4 text-[12px] font-semibold whitespace-nowrap bg-gray-50/50 overflow-hidden text-ellipsis">
                                Name of Industry
                            </div>
                        </th>
                        <th className="py-4 px-1 text-left w-[50%]">
                            <div className="border border-gray-100 rounded-full py-2 px-4 text-[12px] font-semibold whitespace-nowrap bg-gray-50/50 overflow-hidden text-ellipsis">
                                Closure Direction vide letter no. and Date
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                    {data.map((row, idx) => (
                        <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                            <td className="py-3 px-2 text-[12px] text-gray-500 font-medium text-center align-top">{row.sNo}</td>
                            <td className="py-3 px-2 text-[12px] text-gray-700 font-medium leading-relaxed align-top break-words">
                                {row.industryName}
                            </td>
                            <td className="py-3 px-2 text-[12px] text-gray-700 leading-relaxed align-top break-words">
                                {row.closureDetails}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    const renderNagpurTable = (data: NagpurClosureData[]) => (
        <div className="border border-gray-200 rounded-[20px] md:rounded-[35px] overflow-hidden w-full overflow-x-auto">
            <table className="w-full border-collapse min-w-[800px]">
                <thead>
                    <tr className="border-b border-gray-100">
                        <th className="py-4 px-2 text-left w-[8%]">
                            <div className="border border-gray-100 rounded-full py-2 px-1 text-center text-[12px] font-semibold bg-gray-50/50">
                                Sr. No.
                            </div>
                        </th>
                        <th className="py-4 px-1 text-left w-[32%]">
                            <div className="border border-gray-100 rounded-full py-2 px-4 text-[12px] font-semibold whitespace-nowrap bg-gray-50/50 overflow-hidden text-ellipsis">
                                Name of Industry
                            </div>
                        </th>
                        <th className="py-4 px-1 text-left w-[30%]">
                            <div className="border border-gray-100 rounded-full py-2 px-4 text-[12px] font-semibold whitespace-nowrap bg-gray-50/50 overflow-hidden text-ellipsis">
                                Closure Direction vide letter no. and Date
                            </div>
                        </th>
                        <th className="py-4 px-1 text-left w-[30%]">
                            <div className="border border-gray-100 rounded-full py-2 px-4 text-[12px] font-semibold whitespace-nowrap bg-gray-50/50 overflow-hidden text-ellipsis">
                                Remark
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                    {data.map((row, idx) => (
                        <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                            <td className="py-3 px-2 text-[12px] text-gray-500 font-medium text-center align-top">{row.sNo}</td>
                            <td className="py-3 px-2 text-[12px] text-gray-700 font-medium leading-relaxed align-top break-words">
                                {row.industryName}
                            </td>
                            <td className="py-3 px-2 text-[12px] text-gray-700 leading-relaxed align-top break-words">
                                {row.closureDetails}
                            </td>
                            <td className="py-3 px-2 text-[12px] text-gray-700 leading-relaxed align-top break-words">
                                {row.remark}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    const renderNaviMumbaiTable = (data: NaviMumbaiClosureData[]) => (
        <div className="border border-gray-200 rounded-[20px] md:rounded-[35px] overflow-hidden w-full overflow-x-auto">
            <table className="w-full border-collapse min-w-[600px]">
                <thead>
                    <tr className="border-b border-gray-100">
                        <th className="py-4 px-2 text-left w-[8%]">
                            <div className="border border-gray-100 rounded-full py-2 px-1 text-center text-[12px] font-semibold bg-gray-50/50">
                                Sr. No
                            </div>
                        </th>
                        <th className="py-4 px-1 text-left w-[62%]">
                            <div className="border border-gray-100 rounded-full py-2 px-4 text-[12px] font-semibold whitespace-nowrap bg-gray-50/50 overflow-hidden text-ellipsis">
                                Name of Industry
                            </div>
                        </th>
                        <th className="py-4 px-1 text-left w-[30%]">
                            <div className="border border-gray-100 rounded-full py-2 px-4 text-[12px] font-semibold whitespace-nowrap bg-gray-50/50 overflow-hidden text-ellipsis">
                                Date of closure direction issued
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                    {data.map((row, idx) => (
                        <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                            <td className="py-3 px-2 text-[12px] text-gray-500 font-medium text-center align-top">{row.sNo}</td>
                            <td className="py-3 px-2 text-[12px] text-gray-700 font-medium leading-relaxed align-top break-words">
                                {row.industryName}
                            </td>
                            <td className="py-3 px-2 text-[12px] text-gray-700 leading-relaxed align-top break-words">
                                {row.closureDate}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    return (
        <>
            <PageBanner image="/assets/standingorders.svg" title="Closure Direction Status" />
            <section className="w-full flex justify-center py-8 md:py-16 bg-white font-family-helvetica">
                <div className="w-full max-w-[1282px] px-4 flex flex-col lg:flex-row gap-8 lg:gap-12">
                    {/* --- LEFT SIDEBAR --- */}
                    <div className="w-full lg:w-[150px] flex flex-col gap-4 shrink-0">
                        <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 custom-scrollbar">
                            {cities.map((city) => (
                                <button
                                    key={city}
                                    onClick={() => setActiveCity(city)}
                                    className={`px-4 lg:px-6 py-3 lg:py-4 rounded-xl text-left text-[14px] lg:text-[15px] font-medium transition-all duration-200 cursor-pointer flex items-center justify-between group whitespace-nowrap lg:whitespace-normal
                                        ${activeCity === city
                                            ? 'bg-blue-50 text-[#0085E2]'
                                            : 'text-gray-600 hover:bg-gray-50 hover:text-[#0085E2]'
                                        }`}
                                >
                                    {city}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* --- RIGHT MAIN CONTENT --- */}
                    <div className="flex-1 flex flex-col gap-8 overflow-hidden">
                        <div className="bg-white rounded-[24px] border border-gray-100 p-4 md:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.03)] min-h-[400px]">
                            <h2 className="text-[20px] md:text-[24px] font-bold text-gray-800 mb-6 md:mb-8 border-b border-gray-100 pb-4 uppercase tracking-wide">
                                {activeCity}
                            </h2>

                            <div className="overflow-x-auto pb-4 custom-scrollbar">
                                {activeCity === "Mumbai" && renderTable(mumbaiClosureData)}
                                {activeCity === "Thane" && renderThaneTable(thaneClosureData)}
                                {activeCity === "Navi Mumbai" && renderNaviMumbaiTable(naviMumbaiClosureData)}
                                {activeCity === "Kalyan" && renderKalyanTable(kalyanClosureData)}
                                {activeCity === "Pune" && renderPuneTable(puneClosureData)}
                                {activeCity === "Kolhapur" && renderKolhapurTable(kolhapurClosureData)}
                                {activeCity === "Nashik" && renderNashikTable(nashikClosureData)}
                                {activeCity === "Aurangabad" && renderAurangabadTable(aurangabadClosureData)}
                                {activeCity === "Nagpur" && renderNagpurTable(nagpurClosureData)}
                                {activeCity !== "Mumbai" && activeCity !== "Thane" && activeCity !== "Navi Mumbai" && activeCity !== "Kalyan" && activeCity !== "Pune" && activeCity !== "Kolhapur" && activeCity !== "Nashik" && activeCity !== "Aurangabad" && activeCity !== "Nagpur" && (
                                    <div className="flex flex-col items-center justify-center py-20 text-center">
                                        <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4 text-gray-400">
                                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                        </div>
                                        <p className="text-gray-500 font-medium">Data coming soon for {activeCity}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ClosureDirectionStatus;
