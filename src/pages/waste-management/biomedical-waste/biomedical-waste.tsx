import { useState } from 'react';
import { ChevronDown, ChevronUp, FileText, ExternalLink } from 'lucide-react';
import PageBanner from '../../../components/PageBanner.tsx';
import Sidebar from '../../../components/Sidebar.tsx';
import DocumentCard from '../../../components/DocumentCard.tsx';

// Reusable Dropdown/Accordion Section
const DropdownSection = ({ title, items, children, isOpenDefault = false }: { title: string, items?: (string | { text: string; link: string; isNew?: boolean; isExternal?: boolean })[], children?: React.ReactNode, isOpenDefault?: boolean }) => {
    const [isOpen, setIsOpen] = useState(isOpenDefault);

    return (
        <div className="border border-gray-200 rounded-xl overflow-hidden mb-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between px-6 py-4 bg-gray-50/50 cursor-pointer hover:bg-gray-100/80 transition-colors"
            >
                <h4 className="text-[16px] font-bold text-gray-800">{title}</h4>
                {isOpen ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
            </div>
            <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-4 bg-white flex flex-col gap-2">
                    {items && items.map((item, idx) => {
                        if (typeof item === 'string') {
                            return (
                                <div key={idx} className="px-4 py-3 text-[14px] text-gray-600 hover:text-[#0085E2] hover:bg-blue-50 rounded-lg cursor-pointer transition-colors border-b border-gray-50 last:border-0 flex items-center justify-between group">
                                    <div className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#0085E2] mt-1.5 shrink-0" />
                                        <span className="font-medium">{item}</span>
                                    </div>
                                </div>
                            );
                        } else {
                            return (
                                <a
                                    key={idx}
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-3 text-[14px] text-gray-600 hover:text-[#0085E2] hover:bg-blue-50 rounded-lg cursor-pointer transition-colors border-b border-gray-50 last:border-0 flex items-center justify-between group block"
                                >
                                    <div className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#0085E2] mt-1.5 shrink-0" />
                                        <span className="font-medium mr-2">{item.text}</span>
                                        {item.isNew && (
                                            <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full animate-pulse">
                                                NEW
                                            </span>
                                        )}
                                    </div>
                                    {item.isExternal ? (
                                        <ExternalLink className="w-5 h-5 text-[#0085E2] opacity-80 group-hover:opacity-100" />
                                    ) : (
                                        <FileText className="w-5 h-5 text-red-500 opacity-80 group-hover:opacity-100" />
                                    )}
                                </a>
                            );
                        }
                    })}
                    {children}
                </div>
            </div>
        </div>
    );
};

function BiomedicalWaste() {
    const [isArchive, setIsArchive] = useState(false);

    // Data for Accordions
    const feeStructureItems = [
        { text: "Consent Fee (GR Dated 21-08-2024)", link: "#" },
        { text: "Consent Fee (GR Dated 25-08-2011)", link: "#" },
        { text: "Regarding cancellation of GR dated 10/04/2003 regarding BMW Authorization fees (10-10-2022)", link: "#" }
    ];

    const rulesItems = [
        { text: "Biomedical Waste Management Rules, 2016 (Amended) - 10.05.2019", link: "#" },
        { text: "Biomedical Waste Management Rules, 2016 (Amended) - 19.02.2019", link: "#" },
        { text: "Biomedical Waste Management Rules, 2016 (Amended) - 16.03.2018", link: "#" },
        { text: "Biomedical Waste Management Rules, 2016 - 28.03.2016", link: "#" },
        { text: "Biomedical Waste (Management and Handling) (Amendment) Rules, 2003", link: "#" },
        { text: "Biomedical Waste (M and H) Rules, 1998", link: "#" }
    ];

    const guidelinesItems = [
        { text: "CPCB Guidelines for Common Bio-medical Waste Treatment and Disposal Facilities - 12.04.2025", link: "#" },
        { text: "Revision 5 Guidelines for Handling, Treatment and Disposal of Waste Generated during Treatment/Diagnosis/ Quarantine of COVID-19 Patients - 26.04.2022", link: "#" },
        { text: "Revision 4 Guidelines for Handling, Treatmentand Disposal of Waste Generated during TreatmentDiagnosis Quarantine of COVID-19 Patients - 17.07.2020", link: "#" },
        { text: "Guidelines for collection, transportation and disposal of suspected COVID-19 waste and solid waste from quarantined homes and containment areas - 04.04.2020", link: "#" },
        { text: "UDD letter-Guidelines for MSW and BMW management from COVID-19 quarantine households and containment areas - 04.04.2020", link: "#" },
        { text: "Guidelines for Handling,Treatment, and Disposal of Waste Generated during Treatment /Diagnosis /Quarantine of COVID-19 Patients.. - 17.07.2020", link: "#" },
        { text: "MPCB Guidelines for Management of BMW Contaminated with COVID 19 - 20.03.2020", link: "#" },
        { text: "Bio Medical Waste Toolkit", link: "#" },
        { text: "Guidelines for \"Imposition of Environmental Compensation against HCFs and CBWTFs(22.07.2019)", link: "#" },
        { text: "Guidelines for Verification of Two Seconds Residence Time in Secondary Combustion Chamber of the Biomedical Waste Incinerator (Feb 2019)", link: "#" },
        { text: "Guidelines for Handling of Biomedical Waste for Utilization", link: "#" },
        { text: "Guidelines for Management of Healthcare Waste in Health Care Facilities as per Bio Medical Waste Management Rules, 2016", link: "#" },
        { text: "Guidelines for Bar Code System for Effective ManagemeRevised Guidelines for Common Bio-medical Waste Treatment and Disposal Facilitiesnt of Bio-Medical Waste (April 2018)", link: "#" },
        { text: "Environmentally Sound Management of Mercury Waste Generated from Health Care Facilities (31.01.2012)", link: "#" },
        { text: "Guidelines on Management of BMW Generated during UIP November 2004", link: "#" },
        { text: "Guidelines for Disposal of AD Syringe Waste Generated during Universal Immunisation Programme (November 2004)", link: "#" },
        { text: "Guidelines for Handling, Treatment and Disposal of Waste Generated during Treatment/Diagnosis/ Quarantine of COVID-19 Patients – Revision 2 dated 18/04/2020–reg.", link: "#" },
        { text: "CPCB Guideline monitoring CBWTFs", link: "#" },
        { text: "CPCB Revised guidelines for BMW CTF 21.12.2016", link: "#" },
        { text: "CPCB Guideline for BMW utilisation 2019", link: "#" },
        { text: "CPCB Advisory-1-25-03-2020", link: "#" },
        { text: "CPCB BMW ECC Guidelines 21.06.2019", link: "#" },
        { text: "CPCB User Mannual  for  V1 COVID-19 BMW Tracking App", link: "#" },
        { text: "CPCB SOP for COVID Waste management at HW-CTFs Feb.2021", link: "#" },
        { text: "Representation regarding effective management of liquid biomedical waste", link: "#" }
    ];

    const reportYears = [
        { text: "2024", link: "#" },
        { text: "2023", link: "#" },
        { text: "2022", link: "#" },
        { text: "2021", link: "#" },
        { text: "2020", link: "#" },
        { text: "2019", link: "#" },
        { text: "2018", link: "#" },
        { text: "2017", link: "#" },
        { text: "2016", link: "#" }
    ];

    const otherInfoItems = [
        { text: "List of Common Bio Medical Waste Treatment facility in Maharashtra", link: "#" }
    ];

    const advisoryCommitteeItems = [
        { text: "Ahmadnagar", link: "#" },
        { text: "Akola", link: "#" },
        { text: "Amaravati", link: "#" },
        { text: "Aurangabad", link: "#" },
        { text: "Beed", link: "#" },
        { text: "Bhandara", link: "#" },
        { text: "Buldhana", link: "#" },
        { text: "Chandrapur", link: "#" },
        { text: "Dhule", link: "#" },
        { text: "Gadchiroli", link: "#" },
        { text: "Gondia", link: "#" },
        { text: "Hingoli", link: "#" },
        { text: "Jalgaon", link: "#" },
        { text: "Jalna", link: "#" },
        { text: "Kolhapur", link: "#" },
        { text: "Latur", link: "#" },
        { text: "Mumbai City", link: "#" },
        { text: "Mumbai Suburban", link: "#" },
        { text: "Nagpur", link: "#" },
        { text: "Nanded", link: "#" },
        { text: "Nandurbar", link: "#" },
        { text: "Nashik", link: "#" },
        { text: "Osmanabad", link: "#" },
        { text: "Palghar", link: "#" },
        { text: "Parbhani", link: "#" },
        { text: "Pune", link: "#" },
        { text: "Raigad", link: "#" },
        { text: "Ratnagiri", link: "#" },
        { text: "Sangli", link: "#" },
        { text: "Satara", link: "#" },
        { text: "Sindhudurg", link: "#" },
        { text: "Solapur", link: "#" },
        { text: "Thane", link: "#" },
        { text: "Wardha", link: "#" },
        { text: "Washim", link: "#" },
        { text: "Yavatmal", link: "#" }
    ];

    const covidItems = [
        { text: "Regarding Taking action in the context of Biomedical Waste Management for Covid-19", link: "#" },
        { text: "Facilitation of COVID-19 temporary establishments for grant of BMW authorization and Monitoring of COVID-19 waste -reg", link: "#" },
        { text: "Guidelines for collection, transportation and disposal of Covid-19 waste and solid waste from quarantine centers, containment areas and home quarantined patient", link: "#" },
        { text: "Guidelines for collection, transportation and disposal of Covid-19 waste and solid waste from quarantine centers", link: "#" },
        { text: "CPCB Revised 3 Guidelines for treatment and disposal of Covid-19 waste", link: "#" },
        { text: "Improving Health, WASH and Risk Communication forCOVID-19 responseand control in urban slums", link: "#" },
        { text: "FAQ regarding Environmental Sanitation, Wastes Management and Infection Prevention and Control for COVID Cases in densely populated urban settlements", link: "#" },
        { text: "Presentation - Covid-19", link: "#" },
        { text: "PPT regarding Meeting of High Level Task Team with SPCBs/PCCs and State Health, UD and Environment Departments to Review Status of COVID-19 Waste Management by States/UTs", link: "#" },
        { text: "Minutes of Meeting of High Level Task Team with SPCBs/PCCs and State Health, UD and Environment Departments to Review Status of COVID-19 Waste Management by States/UTs", link: "#" }
    ];

    const awarenessItems = [
        { text: "Posters/Advertisementsre/Articles/Research Papers", link: "#" },
        { text: "Safe management of COVID 19 Biomedical waste at Household", link: "#" },
        { text: "Safe management of COVID 19 Biomedical waste at home & quarantine centres", link: "#" },
        { text: "Safe management of COVID 19 Doffing of PPE", link: "#" },
        { text: "Safe management of COVID 19 Donning of PPE", link: "#" },
        { text: "Safe management of COVID 19 Use & Disposal of Mask", link: "#" },
        { text: "Safe management of COVID 19 Collection Transport and Disposal", link: "#" },
        { text: "Safe management of COVID 19 Biomedical Waste", link: "#" }
    ];

    const eventsItems = [
        { text: "UNIDO", link: "#" },
        { text: "Dist. level workshops", link: "#" }
    ];

    const uidItems = [
        { text: "Unique Number of HCF falls in the Jurisdiction of CBWTF, Talegaon Dabhade, Pune", link: "#" },
        { text: "Unique Number of HCF falls in the Jurisdiction of CBWTF, Kudal", link: "#" },
        { text: "Unique Number of HCF falls in the Jurisdiction of CBWTF, Pune", link: "#" },
        { text: "Unique Number of HCF falls in the Jurisdiction of CBWTF, Pimpri-Chinchwad", link: "#" },
        { text: "Unique Number of HCF falls in the Jurisdiction of CBWTF, Nandurbar Dist.", link: "#" },
        { text: "Unique Number of HCF falls in the Jurisdiction of CBWTF, Nagpur", link: "#" },
        { text: "Unique Number of HCF falls in the Jurisdiction of CBWTF, Taloja", link: "#" },
        { text: "Unique Number of HCF falls in the Jurisdiction of CBWTF, Mumbai", link: "#" },
        { text: "Unique Number of HCF falls in the Jurisdiction of CBWTF, Lote", link: "#" },
        { text: "Unique Number of HCF falls in the Jurisdiction of CBWTF, Latur", link: "#" },
        { text: "Unique Number of HCF falls in the Jurisdiction of CBWTF, Kolhapur", link: "#" },
        { text: "Unique Number of HCF falls in the Jurisdiction of CBWTF, Karad", link: "#" },
        { text: "Unique Number of HCF falls in the Jurisdiction of CBWTF, Kalyan", link: "#" },
        { text: "Unique Number of HCF falls in the Jurisdiction of CBWTF, Jalgaon", link: "#" },
        { text: "Unique Number of HCF falls in the Jurisdiction of CBWTF, Ichalkaranji", link: "#" },
        { text: "Unique Number of HCF falls in the Jurisdiction of CBWTF, Chandrapur", link: "#" },
        { text: "Unique Number of HCF falls in the Jurisdiction of CBWTF, Beed", link: "#" },
        { text: "Unique Number of HCF falls in the Jurisdiction of CBWTF, Baramati", link: "#" },
        { text: "Unique Number of HCF falls in the Jurisdiction of CBWTF, Amravati", link: "#" },
        { text: "Unique Number of HCF falls in the Jurisdiction of CBWTF Solapur", link: "#" },
        { text: "Unique Number of HCF falls in the Jurisdiction of CBWTF Satara", link: "#" },
        { text: "Unique Number of HCF falls in the Jurisdiction of CBWTF Sangli", link: "#" },
        { text: "Unique Number of HCF falls in the Jurisdiction of CBWTF Palghar", link: "#" },
        { text: "Unique Number of HCF falls in the Jurisdiction of CBWTF Nashik", link: "#" },
        { text: "Unique Number of HCF falls in the Jurisdiction of CBWTF Nanded", link: "#" },
        { text: "Unique Number of HCF falls in the Jurisdiction of CBWTF Khamgaon", link: "#" },
        { text: "Unique Number of HCF falls in the Jurisdiction of CBWTF Jalna", link: "#" },
        { text: "Unique Number of HCF falls in the Jurisdiction of CBWTF Dhule", link: "#" },
        { text: "Unique Number of HCF falls in the Jurisdiction of CBWTF Chatrapati Sambhaji Nagar", link: "#" },
        { text: "Unique Number of HCF falls in the Jurisdiction of CBWTF A'Nagar", link: "#" }
    ];

    const inventoryItems = [
        { text: "GIS Map of HCF survey", link: "https://mpcbonline.in/MpcbWebportal/home/survey-map", isNew: true, isExternal: true },
        { text: "Information about the Surveyor", link: "https://mpcbonline.in/MpcbWebportal/user/user-master-view", isExternal: true },
        { text: "Letter To Health care Facility", link: "#" },
        { text: "Authority Letter", link: "#" }
    ];

    const archiveDocuments = [
        { id: 1, title: 'Cpcb guidelines for Design and Construction of BMWincinerator', pdfUrl: "#" },
        { id: 2, title: "Status of Biomedical Waste Management in the State of Maharashtra for the year 2011", date: "2011", pdfUrl: "#" },
        { id: 3, title: "Draft Report on Fixing of Reasonable Charges on HCEs by Authorized Operators & Transporters of CBMWTDF", pdfUrl: "#" },
        { id: 4, title: "Achivements with respect to Biomedical Waste Management in Maharashtra (2009-2010)", date: "2009-2010", pdfUrl: "#" },
        { id: 5, title: "Report On Status Of Some Common Facilities For Collection, Treatment And Disposal Of Biomedical Waste In Maharashtra 2004", date: "2004", pdfUrl: "#" },
        { id: 6, title: "List of Common Bio Medical Waste Treatment facility in Maharashtra and jurisdiction", pdfUrl: "#" }
    ];

    const cpcbItems = [
        { text: 'CPCB letter regarding "Plasma Pyrolysis Technology', link: "#" },
        { text: "CPCB Guideline for Common BMW Treatments Facility", link: "#" },
        { text: 'Approval for adoption of "Sharp Blaster (Needle Blaster)" for treatment for bio-medical waste category no. 04', link: "#" },
        { text: "Fire Safety", link: "#" }
    ];


    const inspectionCities = [
        "Amravati", "Aurangabad", "Chandrapur", "Kalyan", "Kolhapur",
        "Mumbai", "Nagpur", "Nashik", "Navi-Mumbai", "Pune", "Thane"
    ];



    return (
        <div className="font-family-helvetica min-h-screen bg-white">
            {/* Top Banner Section */}
            <PageBanner title="Waste Management" />

            {/* Main Content with Sidebar */}
            <section className="w-full flex justify-center bg-white py-12">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Left Sidebar */}
                        <Sidebar activeItem="Biomedical Waste" />

                        {/* Right Content Area */}
                        <div className="flex-1 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="rounded-[24px] p-8 min-h-[400px] border border-gray-100 shadow-sm bg-white relative">
                                {/* Header & Toggle */}
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 border-b border-gray-200 pb-4 gap-4">
                                    <h2 className="text-[24px] font-bold text-gray-900 uppercase">
                                        {isArchive ? "Archive: BIO MEDICAL WASTE MANAGEMENT" : "BIO MEDICAL WASTE MANAGEMENT"}
                                    </h2>

                                    {/* Toggle Switch */}
                                    <div className="flex items-center bg-gray-100 p-1 rounded-full shrink-0 ">
                                        <button
                                            onClick={() => setIsArchive(false)}
                                            className={`cursor-pointer px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${!isArchive ? 'bg-white text-[#0085E2] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                                        >
                                            Current
                                        </button>
                                        <button
                                            onClick={() => setIsArchive(true)}
                                            className={`cursor-pointer px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${isArchive ? 'bg-white text-[#0085E2] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                                        >
                                            Archive
                                        </button>
                                    </div>
                                </div>

                                {!isArchive ? (
                                    <div className="flex flex-col gap-2 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                        <div className="mb-6">
                                            <a href="#" className="text-[#0085E2] font-medium hover:underline text-[15px]">
                                                Click here for Combined Consent and BMW authorization.
                                            </a>
                                        </div>

                                        <DropdownSection title="Fee Structure" items={feeStructureItems} isOpenDefault={true} />
                                        <DropdownSection title="Rules/regulations/ Notifications/Memorandum/ CPCB/MOEF & CC Communications" items={rulesItems} />
                                        <DropdownSection title="Guidelines for Biomedical Waste Management" items={guidelinesItems} />
                                        <DropdownSection title="Reports">
                                            <DropdownSection title="BMW Annual report for Calendar year-" items={reportYears} />
                                            <a
                                                href="#"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-4 py-3 text-[14px] text-gray-600 hover:text-[#0085E2] hover:bg-blue-50 rounded-lg cursor-pointer transition-colors border-b border-gray-50 last:border-0 flex items-center justify-between group block"
                                            >
                                                <div className="flex items-start gap-3">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-[#0085E2] mt-1.5 shrink-0" />
                                                    <span className="font-medium">Training on, Resource book on Response and preparedness during Covid -19 times</span>
                                                </div>
                                                <FileText className="w-5 h-5 text-red-500 opacity-80 group-hover:opacity-100" />
                                            </a>
                                        </DropdownSection>
                                        <DropdownSection title="Other Information" items={otherInfoItems}>
                                            <DropdownSection title="State and district Advisory Committee" items={advisoryCommitteeItems} />
                                        </DropdownSection>
                                        <DropdownSection title="COVID-19 update" items={covidItems} />
                                        <DropdownSection title="Awareness" items={awarenessItems}>
                                            <DropdownSection title="Events" items={eventsItems} />
                                        </DropdownSection>
                                        <DropdownSection title="Unique Identification Number Of HCF In State of Maharashtra" items={uidItems} />
                                        <DropdownSection title="Inventorisation of Health Care Facilities in the state of Maharashtra" items={inventoryItems} />
                                    </div>
                                ) : (
                                    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">

                                        {/* Document Cards Grid */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {archiveDocuments.map((doc) => (
                                                <DocumentCard key={doc.id} document={doc} />
                                            ))}
                                        </div>

                                        {/* Archive Dropdowns */}
                                        <div className="flex flex-col gap-2">
                                            <DropdownSection title="Database of the hospital having 100 beds and above as on 23.02.2012">
                                                <div className="text-[14px] text-gray-600 space-y-4 px-2">
                                                    <p className="leading-relaxed">
                                                        The list of hospital having 100 beds and above to which Board has granted authorization under Bio-Medical waste Rules is prepared and displayed for information of the hospital authority. Comments/ Suggestions are invited from the hospital authority.
                                                    </p>

                                                    <div className="font-semibold text-gray-800 pl-4 border-l-4 border-[#0085E2] py-1 bg-blue-50/50 rounded-r-lg">
                                                        <p>Regional Officer, BMW Division,</p>
                                                        <p>Maharashtra Pollution Control Board</p>
                                                        <p>3rd Floor, Kalpataru Point,</p>
                                                        <p>Opp. Cine Planet Cinema,</p>
                                                        <p>Sion (E), Mumbai – 400 022.</p>
                                                        <p>Phone /Fax – 24044533</p>
                                                        <p>Email : <a href="mailto:robmw@mpcb.gov.in" className="text-[#0085E2] hover:underline">robmw@mpcb.gov.in</a></p>
                                                    </div>

                                                    <p className="leading-relaxed">
                                                        The list has been prepared based on the available data and records and it is possible that some hospitals have been left out inadvertently in this list.
                                                        (<a href="#" className="text-[#0085E2] font-semibold hover:underline">Click here for list</a>)
                                                    </p>

                                                    <p className="leading-relaxed">
                                                        The hospitals falling in this category , but whose names or authorization status is not appearing in the list should immediately, get in touch with If any hospital have applied for renewal, but is not reflected in the list should send details of the application like date of submission, office where application is submitted, fees paid, D.R. No. and date , etc. on above address (i.e. Regional Office, BMW).
                                                    </p>

                                                    <p className="leading-relaxed">
                                                        Board is requesting all the hospital falling in this categories to provide their email address and contact number of the concern personal for faster communication and shall update timely on the above email address i.e. <a href="mailto:robmw@mpcb.gov.in" className="text-[#0085E2] hover:underline">robmw@mpcb.gov.in</a>
                                                    </p>

                                                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-yellow-800 text-sm">
                                                        <strong>Note:</strong> The attention is drawn of all HCEs that an application shall be made by the hospital authority for renewal authorization at least three month before expiry of earlier authorization get expired.
                                                    </div>
                                                </div>
                                            </DropdownSection>

                                            <DropdownSection title="CPCB Communication" items={cpcbItems} />

                                            <DropdownSection title="Inspection report of CBMWTDF from September 2013">
                                                <div className="flex flex-col gap-2 pl-4">
                                                    {inspectionCities.map((city, idx) => {
                                                        if (city === "Amravati") {
                                                            return (
                                                                <DropdownSection key={idx} title={city}>
                                                                    <div className="px-4 pb-4">
                                                                        <h5 className="text-[16px] font-bold text-gray-800 mb-3">2013</h5>
                                                                        <div className="flex flex-col gap-2">
                                                                            <a
                                                                                href="#"
                                                                                className="px-4 py-3 text-[14px] text-gray-600 hover:text-[#0085E2] hover:bg-blue-50 rounded-lg cursor-pointer transition-colors border-b border-gray-50 last:border-0 flex items-center justify-between group block"
                                                                            >
                                                                                <div className="flex items-start gap-3">
                                                                                    <div className="w-1.5 h-1.5 rounded-full bg-[#0085E2] mt-1.5 shrink-0" />
                                                                                    <span className="font-medium mr-2">September</span>
                                                                                </div>
                                                                                <FileText className="w-5 h-5 text-red-500 opacity-80 group-hover:opacity-100" />
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </DropdownSection>
                                                            );
                                                        }
                                                        else if (city === "Chandrapur") {
                                                            return (
                                                                <DropdownSection key={idx} title={city}>
                                                                    <div className="px-4 pb-4">
                                                                        <h5 className="text-[16px] font-bold text-gray-800 mb-3">2013</h5>
                                                                        <div className="flex flex-col gap-2">
                                                                            <a
                                                                                href="#"
                                                                                className="px-4 py-3 text-[14px] text-gray-600 hover:text-[#0085E2] hover:bg-blue-50 rounded-lg cursor-pointer transition-colors border-b border-gray-50 last:border-0 flex items-center justify-between group block"
                                                                            >
                                                                                <div className="flex items-start gap-3">
                                                                                    <div className="w-1.5 h-1.5 rounded-full bg-[#0085E2] mt-1.5 shrink-0" />
                                                                                    <span className="font-medium mr-2">September</span>
                                                                                </div>
                                                                                <FileText className="w-5 h-5 text-red-500 opacity-80 group-hover:opacity-100" />
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </DropdownSection>
                                                            );
                                                        }
                                                        else if (city === "Kalyan") {
                                                            return (
                                                                <DropdownSection key={idx} title={city}>
                                                                    <div className="px-4 pb-4">
                                                                        <h5 className="text-[16px] font-bold text-gray-800 mb-3">2013</h5>
                                                                        <div className="flex flex-col gap-2">
                                                                            <a
                                                                                href="#"
                                                                                className="px-4 py-3 text-[14px] text-gray-600 hover:text-[#0085E2] hover:bg-blue-50 rounded-lg cursor-pointer transition-colors border-b border-gray-50 last:border-0 flex items-center justify-between group block"
                                                                            >
                                                                                <div className="flex items-start gap-3">
                                                                                    <div className="w-1.5 h-1.5 rounded-full bg-[#0085E2] mt-1.5 shrink-0" />
                                                                                    <span className="font-medium mr-2">September 2013</span>
                                                                                </div>
                                                                                <FileText className="w-5 h-5 text-red-500 opacity-80 group-hover:opacity-100" />
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </DropdownSection>
                                                            );
                                                        }
                                                        else if (city === "Aurangabad") {
                                                            return (
                                                                <DropdownSection key={idx} title={city}>
                                                                    <div className="px-4 pb-4 flex flex-col gap-6">
                                                                        {/* 2013 */}
                                                                        <div>
                                                                            <h5 className="text-[16px] font-bold text-gray-800 mb-3">2013</h5>
                                                                            <div className="flex flex-col gap-4">
                                                                                <a href="#" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group border border-gray-100">
                                                                                    <span className="text-sm font-medium text-gray-700 group-hover:text-[#0085E2]">September 2013</span>
                                                                                    <FileText className="w-5 h-5 text-red-500 opacity-80 group-hover:opacity-100" />
                                                                                </a>

                                                                                <div className="flex flex-col gap-1">
                                                                                    <span className="text-xs font-semibold text-gray-500 ml-1">October 2013</span>
                                                                                    <a href="#" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group border border-gray-100">
                                                                                        <span className="text-sm font-medium text-gray-700 group-hover:text-[#0085E2]">Superb Hygienic Disposals District Nanded</span>
                                                                                        <FileText className="w-5 h-5 text-red-500 opacity-80 group-hover:opacity-100" />
                                                                                    </a>
                                                                                </div>

                                                                                <div className="flex flex-col gap-1">
                                                                                    <span className="text-xs font-semibold text-gray-500 ml-1">November 2013</span>
                                                                                    <a href="#" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group border border-gray-100">
                                                                                        <span className="text-sm font-medium text-gray-700 group-hover:text-[#0085E2]">Sangameshwar Pollution Control Society,Dist:-Latur</span>
                                                                                        <FileText className="w-5 h-5 text-red-500 opacity-80 group-hover:opacity-100" />
                                                                                    </a>
                                                                                </div>

                                                                                <div className="flex flex-col gap-1">
                                                                                    <span className="text-xs font-semibold text-gray-500 ml-1">December 2013</span>
                                                                                    <div className="flex flex-col gap-2">
                                                                                        <a href="#" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group border border-gray-100">
                                                                                            <span className="text-sm font-medium text-gray-700 group-hover:text-[#0085E2]">Water Grace Products Ltd.,Dist:-Aurangabad</span>
                                                                                            <FileText className="w-5 h-5 text-red-500 opacity-80 group-hover:opacity-100" />
                                                                                        </a>
                                                                                        <a href="#" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group border border-gray-100">
                                                                                            <span className="text-sm font-medium text-gray-700 group-hover:text-[#0085E2]">Atul Environment Services, Dist.Jalna</span>
                                                                                            <FileText className="w-5 h-5 text-red-500 opacity-80 group-hover:opacity-100" />
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        {/* 2015 */}
                                                                        <div>
                                                                            <h5 className="text-[16px] font-bold text-gray-800 mb-3">2015</h5>
                                                                            <div className="flex flex-col gap-4">
                                                                                <div className="flex flex-col gap-1">
                                                                                    <span className="text-xs font-semibold text-gray-500 ml-1">April 2015</span>
                                                                                    <a href="#" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group border border-gray-100">
                                                                                        <span className="text-sm font-medium text-gray-700 group-hover:text-[#0085E2]">M/s. Superb hygienic Disposal(I) Pvt Ltd Dist Nanded</span>
                                                                                        <FileText className="w-5 h-5 text-red-500 opacity-80 group-hover:opacity-100" />
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </DropdownSection>
                                                            );
                                                        }
                                                        else if (city === "Kolhapur") {
                                                            return (
                                                                <DropdownSection key={idx} title={city}>
                                                                    <div className="px-4 pb-4 flex flex-col gap-6">
                                                                        {/* 2013 */}
                                                                        <div>
                                                                            <h5 className="text-[16px] font-bold text-gray-800 mb-3">2013</h5>
                                                                            <div className="flex flex-col gap-4">
                                                                                <div className="flex flex-col gap-1">
                                                                                    <span className="text-xs font-semibold text-gray-500 ml-1">October</span>
                                                                                    <div className="flex flex-col gap-2">
                                                                                        <a href="#" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group border border-gray-100">
                                                                                            <span className="text-sm font-medium text-gray-700 group-hover:text-[#0085E2]">M/s.Sangli Miraj Kupwad</span>
                                                                                            <FileText className="w-5 h-5 text-red-500 opacity-80 group-hover:opacity-100" />
                                                                                        </a>
                                                                                        <a href="#" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group border border-gray-100">
                                                                                            <span className="text-sm font-medium text-gray-700 group-hover:text-[#0085E2]">M/s.Surya Centrals</span>
                                                                                            <FileText className="w-5 h-5 text-red-500 opacity-80 group-hover:opacity-100" />
                                                                                        </a>
                                                                                    </div>
                                                                                </div>

                                                                                <div className="flex flex-col gap-1">
                                                                                    <span className="text-xs font-semibold text-gray-500 ml-1">November</span>
                                                                                    <div className="flex flex-col gap-2">
                                                                                        <a href="#" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group border border-gray-100">
                                                                                            <span className="text-sm font-medium text-gray-700 group-hover:text-[#0085E2]">M/s.Bio Medical Waste Disposal Association, Gadhinglaj</span>
                                                                                            <FileText className="w-5 h-5 text-red-500 opacity-80 group-hover:opacity-100" />
                                                                                        </a>
                                                                                        <a href="#" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group border border-gray-100">
                                                                                            <span className="text-sm font-medium text-gray-700 group-hover:text-[#0085E2]">M/s.S.S.S.Services, Ichalkaranji</span>
                                                                                            <FileText className="w-5 h-5 text-red-500 opacity-80 group-hover:opacity-100" />
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </DropdownSection>
                                                            );
                                                        }
                                                        else if (city === "Mumbai") {
                                                            return (
                                                                <DropdownSection key={idx} title={city}>
                                                                    <div className="px-4 pb-4">
                                                                        <h5 className="text-[16px] font-bold text-gray-800 mb-3">2013</h5>
                                                                        <div className="flex flex-col gap-2">
                                                                            <a
                                                                                href="#"
                                                                                className="px-4 py-3 text-[14px] text-gray-600 hover:text-[#0085E2] hover:bg-blue-50 rounded-lg cursor-pointer transition-colors border-b border-gray-50 last:border-0 flex items-center justify-between group block"
                                                                            >
                                                                                <div className="flex items-start gap-3">
                                                                                    <div className="w-1.5 h-1.5 rounded-full bg-[#0085E2] mt-1.5 shrink-0" />
                                                                                    <span className="font-medium mr-2">September 2013</span>
                                                                                </div>
                                                                                <FileText className="w-5 h-5 text-red-500 opacity-80 group-hover:opacity-100" />
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </DropdownSection>
                                                            );
                                                        }
                                                        else if (city === "Nagpur") {
                                                            return (
                                                                <DropdownSection key={idx} title={city}>
                                                                    <div className="px-4 pb-4 flex flex-col gap-6">
                                                                        {/* 2013 */}
                                                                        <div>
                                                                            <h5 className="text-[16px] font-bold text-gray-800 mb-3">2013</h5>
                                                                            <div className="flex flex-col gap-4">
                                                                                <div className="flex flex-col gap-1">
                                                                                    <span className="text-xs font-semibold text-gray-500 ml-1">September 2013</span>
                                                                                    <a href="#" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group border border-gray-100">
                                                                                        <span className="text-sm font-medium text-gray-700 group-hover:text-[#0085E2]">September 2013</span>
                                                                                        <FileText className="w-5 h-5 text-red-500 opacity-80 group-hover:opacity-100" />
                                                                                    </a>
                                                                                </div>

                                                                                <div className="flex flex-col gap-1">
                                                                                    <span className="text-xs font-semibold text-gray-500 ml-1">October 2013</span>
                                                                                    <a href="#" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group border border-gray-100">
                                                                                        <span className="text-sm font-medium text-gray-700 group-hover:text-[#0085E2]">October 2013</span>
                                                                                        <FileText className="w-5 h-5 text-red-500 opacity-80 group-hover:opacity-100" />
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </DropdownSection>
                                                            );
                                                        }
                                                        else if (city === "Nashik") {
                                                            return (
                                                                <DropdownSection key={idx} title={city}>
                                                                    <div className="px-4 pb-4">
                                                                        <h5 className="text-[16px] font-bold text-gray-800 mb-3">2013</h5>
                                                                        <div className="flex flex-col gap-2">
                                                                            <div className="flex flex-col gap-1">
                                                                                <span className="text-xs font-semibold text-gray-500 ml-1">October</span>
                                                                                <a href="#" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group border border-gray-100">
                                                                                    <span className="text-sm font-medium text-gray-700 group-hover:text-[#0085E2]">October</span>
                                                                                    <FileText className="w-5 h-5 text-red-500 opacity-80 group-hover:opacity-100" />
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </DropdownSection>
                                                            );
                                                        }
                                                        else if (city === "Navi-Mumbai") {
                                                            return (
                                                                <DropdownSection key={idx} title={city}>
                                                                    <div className="px-4 pb-4">
                                                                        <h5 className="text-[16px] font-bold text-gray-800 mb-3">2013</h5>
                                                                        <div className="flex flex-col gap-2">
                                                                            <a
                                                                                href="#"
                                                                                className="px-4 py-3 text-[14px] text-gray-600 hover:text-[#0085E2] hover:bg-blue-50 rounded-lg cursor-pointer transition-colors border-b border-gray-50 last:border-0 flex items-center justify-between group block"
                                                                            >
                                                                                <div className="flex items-start gap-3">
                                                                                    <div className="w-1.5 h-1.5 rounded-full bg-[#0085E2] mt-1.5 shrink-0" />
                                                                                    <span className="font-medium mr-2">September 2013</span>
                                                                                </div>
                                                                                <FileText className="w-5 h-5 text-red-500 opacity-80 group-hover:opacity-100" />
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </DropdownSection>
                                                            );
                                                        }
                                                        else if (city === "Pune") {
                                                            return (
                                                                <DropdownSection key={idx} title={city}>
                                                                    <div className="px-4 pb-4">
                                                                        <h5 className="text-[16px] font-bold text-gray-800 mb-3">2013</h5>
                                                                        <div className="flex flex-col gap-2">
                                                                            <a
                                                                                href="#"
                                                                                className="px-4 py-3 text-[14px] text-gray-600 hover:text-[#0085E2] hover:bg-blue-50 rounded-lg cursor-pointer transition-colors border-b border-gray-50 last:border-0 flex items-center justify-between group block"
                                                                            >
                                                                                <div className="flex items-start gap-3">
                                                                                    <div className="w-1.5 h-1.5 rounded-full bg-[#0085E2] mt-1.5 shrink-0" />
                                                                                    <span className="font-medium mr-2">September 2013</span>
                                                                                </div>
                                                                                <FileText className="w-5 h-5 text-red-500 opacity-80 group-hover:opacity-100" />
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </DropdownSection>
                                                            );
                                                        }
                                                        else if (city === "Thane") {
                                                            return (
                                                                <DropdownSection key={idx} title={city}>
                                                                    <div className="px-4 pb-4">
                                                                        <h5 className="text-[16px] font-bold text-gray-800 mb-3">2013</h5>
                                                                        <div className="flex flex-col gap-2">
                                                                            <a
                                                                                href="#"
                                                                                className="px-4 py-3 text-[14px] text-gray-600 hover:text-[#0085E2] hover:bg-blue-50 rounded-lg cursor-pointer transition-colors border-b border-gray-50 last:border-0 flex items-center justify-between group block"
                                                                            >
                                                                                <div className="flex items-start gap-3">
                                                                                    <div className="w-1.5 h-1.5 rounded-full bg-[#0085E2] mt-1.5 shrink-0" />
                                                                                    <span className="font-medium mr-2">September 2013</span>
                                                                                </div>
                                                                                <FileText className="w-5 h-5 text-red-500 opacity-80 group-hover:opacity-100" />
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </DropdownSection>
                                                            );
                                                        }
                                                        return (
                                                            <DropdownSection
                                                                key={idx}
                                                                title={city}
                                                                items={[{ text: "No data available", link: "#" }]}
                                                            />
                                                        );
                                                    })}
                                                </div>
                                            </DropdownSection>
                                        </div>
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

export default BiomedicalWaste;
