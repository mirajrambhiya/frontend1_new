import { useState } from 'react';
import DocumentCard from '../../components/DocumentCard';

const standingorders = "/assets/standingorders.svg";

// Sidebar tabs
const sidebarTabs = [
    "Your Service is Our Duty",
    "Maharashtra RTS Act, 2015",
    "RTS Rules Gazette",
    "List of MPCB Services Notified",
    "Envt.& CC Department RTS Notification"
];

// Data for the services table
const servicesData = [
    {
        srNo: "1",
        publicServiceDetails: "Consent to Establish/ Operate/ Renewal under Water (Prevention & Control of Pollution) Act, 1974 and Air (Prevention & Control of Pollution) Act, 1981 and Authorization under Hazardous & Other Wastes (Management & Transboundary Movement) Rules, 2016.\nGrant or Refusal of:",
        isHeader: true,
        colspan: true
    },
    {
        srNo: "a",
        publicServiceDetails: "Consent to Establish: Green Category Industry having Capital Investment upto Rs. 100 crore.",
        red: "-",
        orange: "-",
        green: "30",
        designatedOfficer: "Sub-Regional Officer",
        firstAppellateOfficer: "Regional Offier",
        secondAppellateOfficer: "HoD",
        availableOnPortal: "Yes"
    },
    {
        srNo: "b",
        publicServiceDetails: "Consent to Establish:\nRed category industry having capital Investment (C.I.) Upto Rs. 10 crores (excluding industries listed in Annexure – 'A');\nOrange category industry having C.I. Upto Rs. 150 crores;\nGreen category industry having C.I. Above Rs. 100 crores upto Rs. 500 crores;\nInfrastructure Project having C.I. Upto Rs. 25 crores.",
        red: "60",
        orange: "45",
        green: "30",
        designatedOfficer: "Regional Officer",
        firstAppellateOfficer: "HoD",
        secondAppellateOfficer: "Member Secretary",
        availableOnPortal: "Yes"
    },
    {
        srNo: "c",
        publicServiceDetails: "Consent to Establish:\nRed category industry having C.I. Above Rs. 10 crores upto Rs. 50 crores;\nOrange category industry having C.I. Above Rs. 150 crores upto Rs. 500 crores;\nGreen category industry having C.I. Above Rs. 500 crores upto Rs. 1000 crores;\nInfrastructure Project having C.I. Above Rs. 25 crores upto Rs. 100 crores.",
        red: "60",
        orange: "45",
        green: "30",
        designatedOfficer: "HoD",
        firstAppellateOfficer: "Member Secretary",
        secondAppellateOfficer: "Chairman",
        availableOnPortal: "Yes"
    },
    {
        srNo: "d",
        publicServiceDetails: "Consent to Establish:\nRed category industry having C.I. Above Rs. 50 crores upto Rs. 150 crores;\nOrange category industry having C.I. Above Rs. 500 crores upto Rs. 1500 crores;\nGreen category industry having C.I. Above Rs. 1000 crores upto Rs. 4000 crores;\nInfrastructure Project having C.I. Above Rs. 100 crores upto Rs. 750 crores.",
        red: "60",
        orange: "45",
        green: "30",
        designatedOfficer: "Consent Committee",
        firstAppellateOfficer: "Chairman",
        secondAppellateOfficer: "Principle Secretary, EnvCC, GoM",
        availableOnPortal: "Yes"
    },
    {
        srNo: "e",
        publicServiceDetails: "Consent to Establish:\nRed category industry having C.I. More than Rs. 150 crores;\nOrange category industry having C.I. More than Rs. 1500 crores;\nGreen category industry having C.I. More than Rs. 4000 crores;\nInfrastructure Project having C.I. More than Rs. 750 crores",
        red: "60",
        orange: "45",
        green: "30",
        designatedOfficer: "Consent Appraisal Committee",
        firstAppellateOfficer: "Principle Secretary, EnvCC, GoM",
        secondAppellateOfficer: "-",
        availableOnPortal: "Yes"
    },
    {
        srNo: "f",
        publicServiceDetails: "Consent to Operate (first time): Green Category Industry having Capital Investment upto Rs. 100 crore.",
        red: "-",
        orange: "-",
        green: "30",
        designatedOfficer: "Sub-Regional Officer",
        firstAppellateOfficer: "Regional Officer",
        secondAppellateOfficer: "HoD",
        availableOnPortal: "Yes"
    },
    {
        srNo: "g",
        publicServiceDetails: "Consent to Operate (first time):\nRed category industry having capital Investment (C.I.) Upto Rs. 10 crores (excluding industries listed in Annexure – 'A');\nOrange category industry having C.I. Upto Rs. 150 crores;\nGreen category industry having C.I. Above Rs. 100 crores upto Rs. 500 crores;\nInfrastructure Project having C.I. Upto Rs. 25 crores.",
        red: "90",
        orange: "60",
        green: "30",
        designatedOfficer: "Regional Officer",
        firstAppellateOfficer: "HoD",
        secondAppellateOfficer: "Member Secretary",
        availableOnPortal: "Yes"
    },
    {
        srNo: "h",
        publicServiceDetails: "Consent to Operate (first time):\nRed category industry having C.I. Above Rs. 10 crores upto Rs. 50 crores;\nOrange category industry having C.I. Above Rs. 150 crores upto Rs. 500 crores;\nGreen category industry having C.I. Above Rs. 500 crores upto Rs. 1000 crores;\nInfrastructure Project having C.I. Above Rs. 25 crores upto Rs. 100 crores.",
        red: "90",
        orange: "60",
        green: "30",
        designatedOfficer: "HoD",
        firstAppellateOfficer: "Member Secretary",
        secondAppellateOfficer: "Chairman",
        availableOnPortal: "Yes"
    },
    {
        srNo: "i",
        publicServiceDetails: "Consent to Operate (first time):\nRed category industry having C.I. Above Rs. 50 crores upto Rs. 150 crores;\nOrange category industry having C.I. Above Rs. 500 crores upto Rs. 1500 crores;\nGreen category industry having C.I. Above Rs. 1000 crores upto Rs. 4000 crores;\nInfrastructure Project having C.I. Above Rs. 100 crores upto Rs. 750 crores.",
        red: "90",
        orange: "60",
        green: "30",
        designatedOfficer: "Consent Committee",
        firstAppellateOfficer: "Chairman",
        secondAppellateOfficer: "Principle Secretary, EnvCC, GoM",
        availableOnPortal: "Yes"
    },
    {
        srNo: "j",
        publicServiceDetails: "Consent to Operate (first time):\nRed category industry having C.I. More than Rs. 150 crores;\nOrange category industry having C.I. More than Rs. 1500 crores;\nGreen category industry having C.I. More than Rs. 4000 crores;\nInfrastructure Project having C.I. More than Rs. 750 crores",
        red: "90",
        orange: "60",
        green: "30",
        designatedOfficer: "Consent Appraisal Committee",
        firstAppellateOfficer: "Priciple Secretary, EnvCC, GoM",
        secondAppellateOfficer: "-",
        availableOnPortal: "Yes"
    },
    {
        srNo: "k",
        publicServiceDetails: "Consent to Renewal/ Amendment/ Expansion: Green Category Industry having Capital Investment upto Rs. 100 crore.",
        red: "-",
        orange: "-",
        green: "30",
        designatedOfficer: "Sub-Regional Officer",
        firstAppellateOfficer: "Regional Offier",
        secondAppellateOfficer: "HoD",
        availableOnPortal: "Yes"
    },
    {
        srNo: "l",
        publicServiceDetails: "Consent to Renewal/ Amendment/ Expansion:\nRed category industry having capital Investment (C.I.) Upto Rs. 10 crores (excluding industries listed in Annexure – 'A');\nOrange category industry having C.I. Upto Rs. 150 crores;\nGreen category industry having C.I. Above Rs. 100 crores upto Rs. 500 crores;\nInfrastructure Project having C.I. Upto Rs. 25 crores.",
        red: "120",
        orange: "60",
        green: "30",
        designatedOfficer: "Regional Officer",
        firstAppellateOfficer: "HoD",
        secondAppellateOfficer: "Member Secretary",
        availableOnPortal: "Yes"
    },
    {
        srNo: "m",
        publicServiceDetails: "Consent to Renewal/ Amendment/ Expansion:\nRed category industry having C.I. Above Rs. 10 crores upto Rs. 50 crores;\nOrange category industry having C.I. Above Rs. 150 crores upto Rs. 500 crores;\nGreen category industry having C.I. Above Rs. 500 crores upto Rs. 1000 crores;\nInfrastructure Project having C.I. Above Rs. 25 crores upto Rs. 100 crores.",
        red: "120",
        orange: "60",
        green: "30",
        designatedOfficer: "HoD",
        firstAppellateOfficer: "Member Secretary",
        secondAppellateOfficer: "Chairman",
        availableOnPortal: "Yes"
    },
    {
        srNo: "n",
        publicServiceDetails: "Consent to Renewal/ Amendment/ Expansion:\nRed category industry having C.I. Above Rs. 50 crores upto Rs. 150 crores;\nOrange category industry having C.I. Above Rs. 500 crores upto Rs. 1500 crores;\nGreen category industry having C.I. Above Rs. 1000 crores upto Rs. 4000 crores;\nInfrastructure Project having C.I. Above Rs. 100 crores upto Rs. 750 crores.",
        red: "120",
        orange: "60",
        green: "30",
        designatedOfficer: "Consent Committee",
        firstAppellateOfficer: "Chairman",
        secondAppellateOfficer: "Principle Sectretary, EnvCC, GoM",
        availableOnPortal: "Yes"
    },
    {
        srNo: "o",
        publicServiceDetails: "Consent to Renewal/ Amendment/ Expansion:\nRed category industry having C.I. More than Rs. 150 crores;\nOrange category industry having C.I. More than Rs. 1500 crores;\nGreen category industry having C.I. More than Rs. 4000 crores;\nInfrastructure Project having C.I. More than Rs. 750 crores",
        red: "120",
        orange: "60",
        green: "30",
        designatedOfficer: "Consent Appraisal Committee",
        firstAppellateOfficer: "Principle Secretary, EnvCC, GoM",
        secondAppellateOfficer: "-",
        availableOnPortal: "Yes"
    },
    {
        srNo: "2",
        publicServiceDetails: "Authorization under Hazardous and Other Waste (Management & Transboundary Movement) Rules, 2016 and amendment thereto:",
        isHeader: true,
        colspan: true
    },
    {
        srNo: "a",
        publicServiceDetails: "Authorization for processing, recycling and recovery of Hazardous waste under Hazardous and Other Waste (Management & Transboundary Movement) Rules, 2016 and amendment thereto.",
        red: "120",
        orange: "",
        green: "",
        mergedTimeColumn: true,
        designatedOfficer: "HoD",
        firstAppellateOfficer: "Member Secretary",
        secondAppellateOfficer: "Chairman",
        availableOnPortal: "Yes"
    },
    {
        srNo: "b",
        publicServiceDetails: "One-time Authorization for import of Hazardous Waste as per Part-D Schedule-III of Hazardous and Other Waste (Management & Transboundary Movement) Rules, 2016 and amendment thereto.",
        red: "120",
        orange: "",
        green: "",
        mergedTimeColumn: true,
        designatedOfficer: "HoD",
        firstAppellateOfficer: "Member Secretary",
        secondAppellateOfficer: "Chairman",
        availableOnPortal: "Yes"
    },
    {
        srNo: "c",
        publicServiceDetails: "Authorization to transporters for transportation of Hazardous Waste through vehicle in the state of Maharashtra under Rule 18 of Hazardous and Other Waste (Management & Transboundary Movement) Rules, 2016 and amendment thereto.",
        red: "120",
        orange: "",
        green: "",
        mergedTimeColumn: true,
        designatedOfficer: "HoD",
        firstAppellateOfficer: "Member Secretary",
        secondAppellateOfficer: "Chairman",
        availableOnPortal: "Yes"
    },
    {
        srNo: "3",
        publicServiceDetails: "Authorization under Solid Waste Management Rules 2016 for:",
        isHeader: true,
        colspan: true
    },
    {
        srNo: "a",
        publicServiceDetails: "'C' Class Municipal councils",
        red: "60",
        orange: "",
        green: "",
        mergedTimeColumn: true,
        designatedOfficer: "Sub-Regional Officer",
        firstAppellateOfficer: "Regional Officer",
        secondAppellateOfficer: "HoD",
        availableOnPortal: "Yes"
    },
    {
        srNo: "b",
        publicServiceDetails: "'B' Class Municipal Councils and Cantonment Boards",
        red: "60",
        orange: "",
        green: "",
        mergedTimeColumn: true,
        designatedOfficer: "Regional Officer",
        firstAppellateOfficer: "HoD",
        secondAppellateOfficer: "Member Secretary",
        availableOnPortal: "Yes"
    },
    {
        srNo: "c",
        publicServiceDetails: "'A' Class Municipal Council",
        red: "60",
        orange: "",
        green: "",
        mergedTimeColumn: true,
        designatedOfficer: "HoD",
        firstAppellateOfficer: "Member Secretary",
        secondAppellateOfficer: "Chairman",
        availableOnPortal: "Yes"
    },
    {
        srNo: "d",
        publicServiceDetails: "All Municipal Corporations",
        red: "60",
        orange: "",
        green: "",
        mergedTimeColumn: true,
        designatedOfficer: "Consent Committee",
        firstAppellateOfficer: "Chairman",
        secondAppellateOfficer: "Principle Secretary, EnvCC",
        availableOnPortal: "Yes"
    },
    {
        srNo: "4",
        publicServiceDetails: "Authorization under Construction and Demolition Management Waste Rules 2016 for:",
        isHeader: true,
        colspan: true
    },
    {
        srNo: "a",
        publicServiceDetails: "'C' Class Municipal Councils",
        red: "120",
        orange: "",
        green: "",
        mergedTimeColumn: true,
        designatedOfficer: "Sub-regional Officer",
        firstAppellateOfficer: "Regional Officer",
        secondAppellateOfficer: "HoD",
        availableOnPortal: "Yes"
    },
    {
        srNo: "b",
        publicServiceDetails: "'B' Class Municipal Councils and Cantonment Boards",
        red: "120",
        orange: "",
        green: "",
        mergedTimeColumn: true,
        designatedOfficer: "Regional Officer",
        firstAppellateOfficer: "HoD",
        secondAppellateOfficer: "Member Secretary",
        availableOnPortal: "Yes"
    },
    {
        srNo: "c",
        publicServiceDetails: "'A' Class Municipal Council",
        red: "120",
        orange: "",
        green: "",
        mergedTimeColumn: true,
        designatedOfficer: "HoD",
        firstAppellateOfficer: "Member Secretary",
        secondAppellateOfficer: "Chaiman",
        availableOnPortal: "Yes"
    },
    {
        srNo: "d",
        publicServiceDetails: "All Municipal Corporations",
        red: "120",
        orange: "",
        green: "",
        mergedTimeColumn: true,
        designatedOfficer: "Consent Committee",
        firstAppellateOfficer: "Chaiman",
        secondAppellateOfficer: "Principle Secretary, EnvCC",
        availableOnPortal: "Yes"
    },
    {
        srNo: "5",
        publicServiceDetails: "Combined Consent and Biomedical Waste Authorization for Health Care Establishments (HCEs) under the provisions of Water (P & CP) Act, 1974, Air (P & CP) Act, 1981 and Bio-Medical Waste Management Rules, 2016 as amended and Hazardous Waste (M & TM) Rules, 2016.\nGrant or Refusal of:",
        isHeader: true,
        colspan: true
    },
    {
        srNo: "a",
        publicServiceDetails: "Consent to establish: 1-25 Beds",
        red: "60",
        orange: "45",
        green: "30",
        designatedOfficer: "Sub-Regional Officer",
        firstAppellateOfficer: "Regional Officer",
        secondAppellateOfficer: "HoD",
        availableOnPortal: "Yes"
    },
    {
        srNo: "b",
        publicServiceDetails: "Consent to establish: 26-50 Beds",
        red: "60",
        orange: "45",
        green: "30",
        designatedOfficer: "Regional Officer",
        firstAppellateOfficer: "HoD",
        secondAppellateOfficer: "Member Secretary",
        availableOnPortal: "Yes"
    },
    {
        srNo: "c",
        publicServiceDetails: "Consent to establish: 51-100 Beds",
        red: "60",
        orange: "45",
        green: "30",
        designatedOfficer: "HoD",
        firstAppellateOfficer: "Member Secretary",
        secondAppellateOfficer: "Chairman",
        availableOnPortal: "Yes"
    },
    {
        srNo: "d",
        publicServiceDetails: "Consent to establish: 101-200 Beds",
        red: "60",
        orange: "45",
        green: "30",
        designatedOfficer: "Consent Committee",
        firstAppellateOfficer: "Chairman",
        secondAppellateOfficer: "Principle Secretary, EnvCC, GoM",
        availableOnPortal: "Yes"
    },
    {
        srNo: "e",
        publicServiceDetails: "Consent to establish: 201 and above Beds",
        red: "60",
        orange: "45",
        green: "30",
        designatedOfficer: "Consent Appraisal Committee",
        firstAppellateOfficer: "Principle Secretary, EnvCC, GoM",
        secondAppellateOfficer: "-",
        availableOnPortal: "Yes"
    },
    {
        srNo: "f",
        publicServiceDetails: "Consent to operate (first time) : 1-25 Beds",
        red: "90",
        orange: "60",
        green: "30",
        designatedOfficer: "Sub-Regional Officer",
        firstAppellateOfficer: "Regional Officer",
        secondAppellateOfficer: "HoD",
        availableOnPortal: "Yes"
    },
    {
        srNo: "g",
        publicServiceDetails: "Consent to operate (first time): 26-50 Beds",
        red: "90",
        orange: "60",
        green: "30",
        designatedOfficer: "Regional Officer",
        firstAppellateOfficer: "HoD",
        secondAppellateOfficer: "Member Secretary",
        availableOnPortal: "Yes"
    },
    {
        srNo: "h",
        publicServiceDetails: "Consent to operate (first time): 51-100 Beds",
        red: "90",
        orange: "60",
        green: "30",
        designatedOfficer: "HoD",
        firstAppellateOfficer: "Member Secretary",
        secondAppellateOfficer: "Chairman",
        availableOnPortal: "Yes"
    },
    {
        srNo: "i",
        publicServiceDetails: "Consent to operate (first time): 101-200 Beds",
        red: "90",
        orange: "60",
        green: "30",
        designatedOfficer: "Consent Committee",
        firstAppellateOfficer: "Chairman",
        secondAppellateOfficer: "Principle Secretary, EnvCC, GoM",
        availableOnPortal: "Yes"
    },
    {
        srNo: "j",
        publicServiceDetails: "Consent to operate (first time): 201 and above Beds",
        red: "90",
        orange: "60",
        green: "30",
        designatedOfficer: "Consent Appraisal Committee",
        firstAppellateOfficer: "Principle Secretary, EnvCC, GoM",
        secondAppellateOfficer: "-",
        availableOnPortal: "Yes"
    },
    {
        srNo: "k",
        publicServiceDetails: "Consent to Renewal/ Amendment/ Expansion: 1-25 Beds",
        red: "120",
        orange: "60",
        green: "30",
        designatedOfficer: "Sub-Regional Officer",
        firstAppellateOfficer: "Regional Officer",
        secondAppellateOfficer: "HoD",
        availableOnPortal: "Yes"
    },
    {
        srNo: "l",
        publicServiceDetails: "Consent to Renewal/ Amendment/ Expansion: 26-50 Beds",
        red: "120",
        orange: "60",
        green: "30",
        designatedOfficer: "Regional Officer",
        firstAppellateOfficer: "HoD",
        secondAppellateOfficer: "Member Secretary",
        availableOnPortal: "Yes"
    },
    {
        srNo: "m",
        publicServiceDetails: "Consent to Renewal/ Amendment/ Expansion: 51-100 Beds",
        red: "120",
        orange: "60",
        green: "30",
        designatedOfficer: "HoD",
        firstAppellateOfficer: "Member Secretary",
        secondAppellateOfficer: "Chairman",
        availableOnPortal: "Yes"
    },
    {
        srNo: "n",
        publicServiceDetails: "Consent to Renewal/ Amendment/ Expansion: 101-200 Beds",
        red: "120",
        orange: "60",
        green: "30",
        designatedOfficer: "Consent Committee",
        firstAppellateOfficer: "Chairman",
        secondAppellateOfficer: "Principle Secretary, EnvCC, GoM",
        availableOnPortal: "Yes"
    },
    {
        srNo: "o",
        publicServiceDetails: "Consent to Renewal/ Amendment/ Expansion: 201 and above Beds",
        red: "120",
        orange: "60",
        green: "30",
        designatedOfficer: "Consent Appraisal Committee",
        firstAppellateOfficer: "Principle Secretary, EnvCC, GoM",
        secondAppellateOfficer: "-",
        availableOnPortal: "Yes"
    },
    {
        srNo: "6",
        publicServiceDetails: "Plastic EPR Registration under Plastic Waste Management Rules, 2016 and amendment, thereto.",
        red: "15 days from receipt of application",
        orange: "",
        green: "",
        mergedTimeColumn: true,
        designatedOfficer: "HoD",
        firstAppellateOfficer: "Member Secretary",
        secondAppellateOfficer: "Chairman",
        availableOnPortal: "Yes"
    },
    {
        srNo: "7",
        publicServiceDetails: "EPR Registration under Battery Waste Management Rules, 2022.",
        red: "15 days from receipt of application",
        orange: "",
        green: "",
        mergedTimeColumn: true,
        designatedOfficer: "HoD",
        firstAppellateOfficer: "Member Secretary",
        secondAppellateOfficer: "Chairman",
        availableOnPortal: "Yes"
    }
];

function RTS() {
    const [selectedTab, setSelectedTab] = useState(sidebarTabs[0]);

    const handleTabClick = (tab: string) => {
        setSelectedTab(tab);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Content for "Your Service is Our Duty" tab
    const renderYourServiceContent = () => (
        <div className="text-[14px] text-gray-700 leading-relaxed space-y-4">
            <p>
                The Maharashtra Right to Public Services Act, 2015 is enacted and is in force since 28.04.2015 to ensure that notified services are provided to the citizens in a transparent, speedy and time-bound manner by various Government Departments and Public Authorities under the Government. Its objective is to provide easy, prompt and time bound services to the citizens.
            </p>
            <p>
                The Maharashtra State Commission for Right to Public Service has been constituted under the above Act to monitor, coordinate, control and improve the public services being provided by the Government. The Commission consists of a Chief Commissioner and six Commissioners. The headquarter of the Commission is at the New Administrative Building, Opposite Mantralaya, Mumbai and the Divisional Offices of the Commissioners are at the six Divisional Headquarters.
            </p>
            <p>
                If any notified service is not provided to any eligible person within stipulated time or is rejected without proper grounds, the concerned person may file 1st and 2nd appeals with the higher authorities and if he is not satisfied with their decision, he may prefer third appeal to the Commission. The erring officer is liable for a penalty up to Rs 5000/- per case. Notified Services rendered by this Department are as below:
            </p>
            <p>
                Website of the Maharashtra State Commission for Right to Services is :- {' '}
                <a
                    href="https://aaplesarkar.mahaonline.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0085E2] hover:underline"
                >
                    https://aaplesarkar.mahaonline.gov.in
                </a>
            </p>
        </div>
    );

    // Render table for "List of MPCB Services Notified"
    const renderServicesTable = () => (
        <>
            {/* Desktop Table */}
            <div className="hidden lg:block border border-gray-200 rounded-[25px] overflow-hidden">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="border-b border-gray-200 bg-gray-50">
                            <th rowSpan={2} className="py-4 px-3 text-center text-[13px] font-semibold text-gray-700 border-r border-gray-200 w-12">Sr. No.</th>
                            <th rowSpan={2} className="py-4 px-3 text-center text-[13px] font-semibold text-gray-700 border-r border-gray-200 min-w-[300px]">Public Service details</th>
                            <th colSpan={3} className="py-3 px-3 text-center text-[13px] font-semibold text-gray-700 border-r border-gray-200 border-b border-gray-200">Time limit for providing Service (Days)</th>
                            <th rowSpan={2} className="py-4 px-3 text-center text-[13px] font-semibold text-gray-700 border-r border-gray-200 w-28">Designated Officer</th>
                            <th rowSpan={2} className="py-4 px-3 text-center text-[13px] font-semibold text-gray-700 border-r border-gray-200 w-24">First Appellate Officer</th>
                            <th rowSpan={2} className="py-4 px-3 text-center text-[13px] font-semibold text-gray-700 border-r border-gray-200 w-28">Second Appellate officer</th>
                            <th rowSpan={2} className="py-4 px-3 text-center text-[13px] font-semibold text-gray-700 w-24">Available on Aaple sarkar portal</th>
                        </tr>
                        <tr className="border-b border-gray-200 bg-gray-50">
                            <th className="py-3 px-3 text-center text-[13px] font-semibold text-gray-700 border-r border-gray-200 w-16">Red</th>
                            <th className="py-3 px-3 text-center text-[13px] font-semibold text-gray-700 border-r border-gray-200 w-16">Orange</th>
                            <th className="py-3 px-3 text-center text-[13px] font-semibold text-gray-700 border-r border-gray-200 w-16">Green</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {servicesData.map((row, idx) => (
                            row.isHeader ? (
                                <tr key={idx} className="bg-white">
                                    <td className="py-4 px-3 text-[13px] text-gray-700 align-top text-center border-r border-gray-200">{row.srNo}</td>
                                    <td colSpan={8} className="py-4 px-3 text-[13px] text-gray-700 align-top whitespace-pre-line">
                                        {row.publicServiceDetails}
                                    </td>
                                </tr>
                            ) : row.mergedTimeColumn ? (
                                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="py-4 px-3 text-[13px] text-gray-600 align-top text-center border-r border-gray-200">{row.srNo}</td>
                                    <td className="py-4 px-3 text-[13px] text-gray-700 align-top whitespace-pre-line border-r border-gray-200">{row.publicServiceDetails}</td>
                                    <td colSpan={3} className="py-4 px-3 text-[13px] text-gray-700 align-top text-center border-r border-gray-200">{row.red}</td>
                                    <td className="py-4 px-3 text-[13px] text-gray-700 align-top text-center border-r border-gray-200">{row.designatedOfficer}</td>
                                    <td className="py-4 px-3 text-[13px] text-gray-700 align-top text-center border-r border-gray-200">{row.firstAppellateOfficer}</td>
                                    <td className="py-4 px-3 text-[13px] text-gray-700 align-top text-center border-r border-gray-200">{row.secondAppellateOfficer}</td>
                                    <td className="py-4 px-3 text-[13px] text-gray-700 align-top text-center">{row.availableOnPortal}</td>
                                </tr>
                            ) : (
                                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="py-4 px-3 text-[13px] text-gray-600 align-top text-center border-r border-gray-200">{row.srNo}</td>
                                    <td className="py-4 px-3 text-[13px] text-gray-700 align-top whitespace-pre-line border-r border-gray-200">{row.publicServiceDetails}</td>
                                    <td className="py-4 px-3 text-[13px] text-gray-700 align-top text-center border-r border-gray-200">{row.red}</td>
                                    <td className="py-4 px-3 text-[13px] text-gray-700 align-top text-center border-r border-gray-200">{row.orange}</td>
                                    <td className="py-4 px-3 text-[13px] text-gray-700 align-top text-center border-r border-gray-200">{row.green}</td>
                                    <td className="py-4 px-3 text-[13px] text-gray-700 align-top text-center border-r border-gray-200">{row.designatedOfficer}</td>
                                    <td className="py-4 px-3 text-[13px] text-gray-700 align-top text-center border-r border-gray-200">{row.firstAppellateOfficer}</td>
                                    <td className="py-4 px-3 text-[13px] text-gray-700 align-top text-center border-r border-gray-200">{row.secondAppellateOfficer}</td>
                                    <td className="py-4 px-3 text-[13px] text-gray-700 align-top text-center">{row.availableOnPortal}</td>
                                </tr>
                            )
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile Card View */}
            <div className="lg:hidden space-y-4">
                {servicesData.map((row, idx) => {
                    if (row.isHeader) {
                        return (
                            <div key={idx} className="bg-blue-50/50 border border-blue-100 rounded-xl p-4 mt-6 first:mt-0">
                                <div className="flex gap-2">
                                    <span className="font-bold text-[#0085E2] text-sm shrink-0">{row.srNo}.</span>
                                    <p className="font-semibold text-[#0085E2] text-sm leading-relaxed whitespace-pre-line">
                                        {row.publicServiceDetails}
                                    </p>
                                </div>
                            </div>
                        );
                    }

                    return (
                        <div key={idx} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                            <div className="flex gap-3 mb-3">
                                <div className="shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600">
                                    {row.srNo}
                                </div>
                                <p className="text-[14px] text-gray-800 font-medium leading-snug whitespace-pre-line">
                                    {row.publicServiceDetails}
                                </p>
                            </div>

                            <div className="space-y-3 pt-3 border-t border-gray-100">
                                {/* Timelines */}
                                <div className="bg-gray-50 rounded-lg p-3 space-y-2">
                                    <p className="text-[12px] font-semibold text-gray-900 mb-1">Time Limit (Days)</p>
                                    {row.mergedTimeColumn ? (
                                        <div className="flex justify-between text-[12px]">
                                            <span className="text-gray-600">Timeline:</span>
                                            <span className="font-medium text-gray-900">{row.red}</span>
                                        </div>
                                    ) : (
                                        <div className="grid grid-cols-3 gap-2 text-center">
                                            <div className="bg-white p-1.5 rounded border border-gray-100">
                                                <div className="text-[10px] text-red-500 font-medium mb-0.5">Red</div>
                                                <div className="text-[12px] font-bold text-gray-800">{row.red || "-"}</div>
                                            </div>
                                            <div className="bg-white p-1.5 rounded border border-gray-100">
                                                <div className="text-[10px] text-orange-500 font-medium mb-0.5">Orange</div>
                                                <div className="text-[12px] font-bold text-gray-800">{row.orange || "-"}</div>
                                            </div>
                                            <div className="bg-white p-1.5 rounded border border-gray-100">
                                                <div className="text-[10px] text-green-600 font-medium mb-0.5">Green</div>
                                                <div className="text-[12px] font-bold text-gray-800">{row.green || "-"}</div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Officers */}
                                <div className="grid gap-2">
                                    <div className="flex justify-between items-start text-[12px]">
                                        <span className="text-gray-500">Designated Officer:</span>
                                        <span className="text-gray-900 font-medium text-right max-w-[60%]">{row.designatedOfficer}</span>
                                    </div>
                                    <div className="flex justify-between items-start text-[12px]">
                                        <span className="text-gray-500">First Appellate:</span>
                                        <span className="text-gray-900 font-medium text-right max-w-[60%]">{row.firstAppellateOfficer}</span>
                                    </div>
                                    <div className="flex justify-between items-start text-[12px]">
                                        <span className="text-gray-500">Second Appellate:</span>
                                        <span className="text-gray-900 font-medium text-right max-w-[60%]">{row.secondAppellateOfficer}</span>
                                    </div>
                                </div>

                                {/* Portal Availability */}
                                <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                                    <span className="text-[12px] text-gray-500">Available on Portal:</span>
                                    <span className={`px-2 py-0.5 rounded text-[11px] font-bold ${row.availableOnPortal === 'Yes' ? 'bg-green-50 text-green-600' : 'bg-gray-100 text-gray-500'}`}>
                                        {row.availableOnPortal}
                                    </span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );

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
                                Right to Services (RTS)
                            </h1>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 h-10 bg-linear-to-t from-white to-transparent z-40" />
                    </div>
                </div>
            </section>

            {/* Main Content with Sidebar */}
            <section className="w-full flex justify-center bg-white py-12">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                        {/* Left Sidebar */}
                        <div className="w-full lg:w-[320px] flex-shrink-0">
                            <div className="flex flex-col gap-4">
                                {sidebarTabs.map((tab) => {
                                    const isActive = selectedTab === tab;
                                    return (
                                        <div
                                            key={tab}
                                            onClick={() => handleTabClick(tab)}
                                            className={`flex items-center justify-between px-6 py-5 rounded-[20px] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] cursor-pointer transition-all duration-200
                                                ${isActive
                                                    ? 'border-2 border-[#00A3FF] bg-[#00A3FF]/5'
                                                    : 'border border-gray-300 hover:border-[#00A3FF] hover:text-[#00A3FF]'
                                                }`}
                                        >
                                            <span className={`text-[14px] font-normal transition-colors duration-200 ${isActive ? 'text-[#00A3FF] font-medium' : 'text-gray-800'}`}>
                                                {tab}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Right Content Area */}
                        <div className="flex-1 w-full">
                            <div className="rounded-[24px] p-0 md:p-8 min-h-[400px]">
                                <h2 className="text-[20px] md:text-[24px] font-semibold text-gray-800 mb-6">
                                    {selectedTab}
                                </h2>

                                {/* Content based on selected tab */}
                                {selectedTab === "Your Service is Our Duty" ? (
                                    renderYourServiceContent()
                                ) : selectedTab === "List of MPCB Services Notified" ? (
                                    renderServicesTable()
                                ) : selectedTab === "Maharashtra RTS Act, 2015" ||
                                    selectedTab === "RTS Rules Gazette" ||
                                    selectedTab === "Envt.& CC Department RTS Notification" ? (
                                    <div>
                                        <DocumentCard
                                            document={{
                                                id: 1,
                                                title: selectedTab
                                            }}
                                            wide={false}
                                        />
                                    </div>
                                ) : (
                                    <div className="text-[14px] text-gray-700 leading-relaxed">
                                        <p>
                                            Content for "{selectedTab}" will be displayed here.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default RTS;
