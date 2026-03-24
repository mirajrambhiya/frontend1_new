
import PageBanner from '../../components/PageBanner.tsx';
import Sidebar from '../../components/Sidebar.tsx';



const Strengthening = () => {

    // Table Data
    const tableData = [
        { srNo: "1.", city: "Mumbai", stations: "3", operatedBy: "NEERI", remarks: "Managed by CPCB" },
        { srNo: "2.", city: "Thane", stations: "3", operatedBy: "Thane Municipal Corporation", remarks: "In Operation since July,2005" },
        { srNo: "3.", city: "Pune", stations: "3", operatedBy: "University of Pune", remarks: "In Operation since July,2005" },
        { srNo: "4", city: "Nagpur", stations: "3", operatedBy: "Vishveshrayya National Institute of Technology", remarks: "In Operation since July,2005" },
        { srNo: "", city: "", stations: "3", operatedBy: "NEERI", remarks: "" }, // Second row for Nagpur
        { srNo: "5.", city: "Chandrapur", stations: "3", operatedBy: "MPCB", remarks: "In Operation since July,2005" },
        { srNo: "6.", city: "Aurangabad", stations: "3", operatedBy: "Saraswati Bhuvan College, Aurangabad", remarks: "In Operation since July,2005" },
        { srNo: "7.", city: "Dombivali -Ambarnath", stations: "2", operatedBy: "MPCB", remarks: "Operational since Oct. 2004" },
        { srNo: "8.", city: "Nashik", stations: "3", operatedBy: "K T H M College, Nashik.", remarks: "In Operation since July,2005" },
        { srNo: "9.", city: "Solapur", stations: "2", operatedBy: "Walchand Institute of Technology.", remarks: "In Operation since July,2005" },
        { srNo: "10.", city: "Kolhapur", stations: "3", operatedBy: "Shivaji University, Kolhapur", remarks: "In Operation since December 2005" },
        { srNo: "11.", city: "Tarapur MIDC", stations: "3", operatedBy: "MPCB", remarks: "In operation since Jan - 2006" },
        { srNo: "12.", city: "Lote MIDC", stations: "2", operatedBy: "MPCB", remarks: "In operation since March – 2006" },
        { srNo: "13.", city: "Taloja MIDC", stations: "3", operatedBy: "K.B.P.College, Vashi", remarks: "In operation since April – 2006" },
        { srNo: "14.", city: "Navi Mumbai (TTC)", stations: "3", operatedBy: "K.B.P.College, Vashi", remarks: "In operation since April – 2006" },
        { srNo: "15.", city: "Amaravati", stations: "3", operatedBy: "Govt. Engg. College, Amaravati", remarks: "In operation since Nov. – 2006" },
    ];

    // SAMP Table Data
    const sampTableData = [
        { srNo: "1.", city: "Ulhasnagar", stations: "3", operatedBy: "CHM College, Ulhas Nagar", remarks: "" },
        { srNo: "2.", city: "Jalna", stations: "2", operatedBy: "MPCB", remarks: "" },
        { srNo: "3.", city: "Pune", stations: "1", operatedBy: "University of Pune", remarks: "" },
        { srNo: "4.", city: "Nashik", stations: "1", operatedBy: "MPCB", remarks: "" },
        { srNo: "5.", city: "Nagpur", stations: "1", operatedBy: "MPCB", remarks: "" },
        { srNo: "6.", city: "Aurangabad", stations: "1", operatedBy: "MPCB", remarks: "" },
    ];

    // Proposed Stations Table Data
    const proposedStationsTableData = [
        { srNo: "1.", city: "Mumbai", namp: "3", samp: "4", total: "7", remarks: "The city presently has only 3 NAMP stations which are grossly inadequate." },
        { srNo: "2.", city: "Pune", namp: "1", samp: "--", total: "1", remarks: "City is among 11 highly polluting industrial cities and need more stations for proper distribution of air quality stations." },
        { srNo: "3.", city: "Kalyan-Dombivali", namp: "--", samp: "2", total: "2", remarks: "Dombivali is also an industrialized area where residential development is in the vicinity and Kalyan is also a municipal corporation and need more AAQM stations." },
        { srNo: "5.", city: "Bhiwandi", namp: "--", samp: "2", total: "2", remarks: "Bhiwandi is an industrialized municipal corporation city and receives regular complaints of air pollution. AAQM is required to collect AAQ data on regular basis." },
        { srNo: "6.", city: "Roha", namp: "--", samp: "2", total: "2", remarks: "Roha is a major established industrialized area and need regular AAQM stations." },
        { srNo: "7.", city: "Chandrapur", namp: "--", samp: "3", total: "3", remarks: "" },
        { srNo: "8.", city: "Akola", namp: "1", samp: "2", total: "3", remarks: "It is a Municipal Corporation and need AAQM stations." },
        { srNo: "9.", city: "Mahad", namp: "3", samp: "--", total: "3", remarks: "Mahad is a major established industrialized area and need regular AAQM stations." },
        { srNo: "10.", city: "Jalgaon", namp: "--", samp: "3", total: "3", remarks: "It is municipal corporation and need AAQM stations." },
        { srNo: "11.", city: "Ahmed-nagar", namp: "3", samp: "2", total: "5", remarks: "It is municipal Corporation and need AAQM stations." },
        { srNo: "12.", city: "Sangli", namp: "--", samp: "3", total: "3", remarks: "It is municipal corporation and need AAQM stations." },
        { srNo: "13.", city: "Nanded", namp: "--", samp: "3", total: "3", remarks: "It is municipal corporation and need AAQM stations." },
        { srNo: "14.", city: "Latur", namp: "--", samp: "3", total: "3", remarks: "It is municipal corporation and need AAQM stations." },
        { srNo: "15.", city: "Dhule", namp: "--", samp: "3", total: "3", remarks: "It is municipal corporation and need AAQM stations." },
    ];
    // CAAQMS Table Data
    const caaqmsTableData = [
        { srNo: "1.", city: "Bandra, Mumbai", stations: "1", operatedBy: "M/s Chemtrols Engineering Ltd", remarks: "" },
        { srNo: "2.", city: "Solapur", stations: "1", operatedBy: "M/s Chemtrols Engineering Ltd", remarks: "" },
        { srNo: "3.", city: "Pune", stations: "1", operatedBy: "M/s Honeywell Automation Ltd", remarks: "" },
        { srNo: "4.", city: "Chandrapur", stations: "1", operatedBy: "M/s Alfatech Services", remarks: "" },
        { srNo: "5.", city: "Vashi, Navi Mumbai", stations: "1", operatedBy: "M/s Chemtrols Engineering Ltd", remarks: "Managed by Navi Mumbai.M.C" },
        { srNo: "6.", city: "Mulund, Mumbai", stations: "1", operatedBy: "M/s Alfatech Services", remarks: "" },
        { srNo: "7.", city: "Sion, Mumbai", stations: "1", operatedBy: "MPCB", remarks: "" },
    ];

    return (
        <div className="font-family-helvetica min-h-screen bg-white">
            {/* Top Banner Section */}
            <PageBanner title="Environmental Quality" />

            {/* Main Content with Sidebar */}
            <section className="w-full flex justify-center bg-white py-12">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Left Sidebar */}
                        <Sidebar activeItem="Air Quality" />

                        {/* Right Content Area */}
                        <div className="flex-1 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="rounded-[24px] md:p-8 p-4 min-h-[400px] border border-gray-100 shadow-sm bg-white relative">
                                <h2 className="text-[20px] md:text-[24px] font-bold text-gray-900 uppercase border-b border-gray-200 pb-4 mb-6">
                                    AIR QUALITY - STRENGTHENING OF AMBIENT AIR QUALITY MONITORING
                                </h2>

                                <div className="prose max-w-none text-gray-700">
                                    <h3 className="text-lg font-bold mb-3">Introduction:</h3>
                                    <p className="mb-4 text-justify leading-relaxed">
                                        MPCB is operating air quality monitoring at 45 stations of Maharashtra spread in 10 districts covering 15 towns. This is being done as part of National Air Monitoring program (NAMP), through independent institutes who directly report to CPCB. It is observed of-late that the air quality information from these stations is not readily available to MPCB. We do not have regular supervision or quality control checks on operation of these air monitoring stations and data generated. MPCB, as the regulatory agency in the state, require the information of air quality levels at different locations for planning the pollution control strategy, for dissemination of information, and other related matters. MPCB is making the AAQM data available for public information through electronic and print media and also, MPCB website on a daily basis..
                                    </p>
                                    <p className="mb-4 text-justify leading-relaxed">
                                        There is MPCB has increasing need of the AAQM stations in the State for covering important cities, industrial areas and also, sensitive areas. The present network of AAQM of 45 stations is not adequate to represent entire Maharashtra.
                                    </p>
                                    <p className="mb-8 text-justify leading-relaxed">
                                        Considering the various aspects, we had proposed to CPCB that all these already approved NAMP stations will be managed by MPCB, by augmenting the entire Air quality monitoring network. In the augmentation and strengthening process, some stations will be added at cities covered under NAMP and some new cities/ industrial areas will be monitored.
                                    </p>

                                    <h3 className="text-lg font-bold mb-3">Present Scenario:</h3>
                                    <p className="mb-8 text-justify leading-relaxed">
                                        Central Pollution Control Board has 45 sanctioned NAMP stations in the state of Maharashtra. The present scenario of the NAMP in Maharashtra is presented in Table-1. Recently, MPCB has already made three stations at Aurangabad and two stations at Dombivali-Ambernath operational. Three new stations at Kolhapur are also made operational recently through Department of Environmental Sciences, Shivaji University, Kolhapur.
                                    </p>

                                    <h3 className="text-lg font-bold mb-4">Monitoring stations under NAMP --(present status)</h3>

                                    {/* Table with custom styling */}
                                    <div className="border border-gray-200 rounded-[35px] overflow-hidden mb-8 overflow-x-auto">
                                        <table className="w-full border-collapse min-w-[600px]">
                                            <thead>
                                                <tr className="border-b border-gray-100 bg-gray-50/50">
                                                    <th className="py-6 px-6 text-left w-20">
                                                        <div className="border border-gray-100 rounded-full py-3 px-4 text-center text-[14px] font-semibold bg-white">
                                                            Sr. No.
                                                        </div>
                                                    </th>
                                                    <th className="py-6 px-2 text-left">
                                                        <div className="border border-gray-100 rounded-full py-3 px-6 text-[14px] font-semibold whitespace-nowrap bg-white">
                                                            Name of City
                                                        </div>
                                                    </th>
                                                    <th className="py-6 px-2 text-left">
                                                        <div className="border border-gray-100 rounded-full py-3 px-6 text-[14px] font-semibold whitespace-nowrap bg-white">
                                                            No. of stations
                                                        </div>
                                                    </th>
                                                    <th className="py-6 px-2 text-left">
                                                        <div className="border border-gray-100 rounded-full py-3 px-6 text-[14px] font-semibold whitespace-nowrap bg-white">
                                                            Operated by
                                                        </div>
                                                    </th>
                                                    <th className="py-6 px-6 text-left">
                                                        <div className="border border-gray-100 rounded-full py-3 px-6 text-[14px] font-semibold bg-white">
                                                            Remarks
                                                        </div>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-50">
                                                {tableData.map((row, idx) => (
                                                    <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                                        <td className="py-5 px-4 text-[13px] text-gray-500 font-medium">{row.srNo}</td>
                                                        <td className="py-5 px-4 text-[13px] text-gray-700 font-medium">{row.city}</td>
                                                        <td className="py-5 px-4 text-[13px] text-gray-700 pl-12">{row.stations}</td>
                                                        <td className="py-5 px-4 text-[13px] text-gray-700">{row.operatedBy}</td>
                                                        <td className="py-5 px-6 text-[13px] text-gray-700 leading-relaxed">{row.remarks}</td>
                                                    </tr>
                                                ))}
                                                {/* Total Row */}
                                                <tr className="bg-gray-50 font-semibold">
                                                    <td className="py-5 px-4 text-[13px] text-gray-800"></td>
                                                    <td className="py-5 px-4 text-[13px] text-gray-800">Total</td>
                                                    <td className="py-5 px-4 text-[13px] text-gray-800 pl-12">45</td>
                                                    <td className="py-5 px-4 text-[13px] text-gray-800"></td>
                                                    <td className="py-5 px-6 text-[13px] text-gray-800"></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <h3 className="text-lg font-bold mb-4">Monitoring stations under SAMP --(present status)</h3>

                                    <div className="border border-gray-200 rounded-[35px] overflow-hidden mb-8 overflow-x-auto">
                                        <table className="w-full border-collapse min-w-[600px]">
                                            <thead>
                                                <tr className="border-b border-gray-100 bg-gray-50/50">
                                                    <th className="py-6 px-6 text-left w-20">
                                                        <div className="border border-gray-100 rounded-full py-3 px-4 text-center text-[14px] font-semibold bg-white">
                                                            Sr. No.
                                                        </div>
                                                    </th>
                                                    <th className="py-6 px-2 text-left">
                                                        <div className="border border-gray-100 rounded-full py-3 px-6 text-[14px] font-semibold whitespace-nowrap bg-white">
                                                            Name of City
                                                        </div>
                                                    </th>
                                                    <th className="py-6 px-2 text-left">
                                                        <div className="border border-gray-100 rounded-full py-3 px-6 text-[14px] font-semibold whitespace-nowrap bg-white">
                                                            No. of stations
                                                        </div>
                                                    </th>
                                                    <th className="py-6 px-2 text-left">
                                                        <div className="border border-gray-100 rounded-full py-3 px-6 text-[14px] font-semibold whitespace-nowrap bg-white">
                                                            Operated by
                                                        </div>
                                                    </th>
                                                    <th className="py-6 px-6 text-left">
                                                        <div className="border border-gray-100 rounded-full py-3 px-6 text-[14px] font-semibold bg-white">
                                                            Remarks
                                                        </div>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-50">
                                                {sampTableData.map((row, idx) => (
                                                    <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                                        <td className="py-5 px-4 text-[13px] text-gray-500 font-medium">{row.srNo}</td>
                                                        <td className="py-5 px-4 text-[13px] text-gray-700 font-medium">{row.city}</td>
                                                        <td className="py-5 px-4 text-[13px] text-gray-700 pl-12">{row.stations}</td>
                                                        <td className="py-5 px-4 text-[13px] text-gray-700">{row.operatedBy}</td>
                                                        <td className="py-5 px-6 text-[13px] text-gray-700 leading-relaxed">{row.remarks}</td>
                                                    </tr>
                                                ))}
                                                {/* Total Row */}
                                                <tr className="bg-gray-50 font-semibold">
                                                    <td className="py-5 px-4 text-[13px] text-gray-800"></td>
                                                    <td className="py-5 px-4 text-[13px] text-gray-800">Total</td>
                                                    <td className="py-5 px-4 text-[13px] text-gray-800 pl-12">9</td>
                                                    <td className="py-5 px-4 text-[13px] text-gray-800"></td>
                                                    <td className="py-5 px-6 text-[13px] text-gray-800"></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <h3 className="text-lg font-bold mb-4">List of CAAQMS--(present status)</h3>

                                    {/* CAAQMS Table */}
                                    <div className="border border-gray-200 rounded-[35px] overflow-hidden mb-8 overflow-x-auto">
                                        <table className="w-full border-collapse min-w-[600px]">
                                            <thead>
                                                <tr className="border-b border-gray-100 bg-gray-50/50">
                                                    <th className="py-6 px-6 text-left w-20">
                                                        <div className="border border-gray-100 rounded-full py-3 px-4 text-center text-[14px] font-semibold bg-white">
                                                            Sr. No.
                                                        </div>
                                                    </th>
                                                    <th className="py-6 px-2 text-left">
                                                        <div className="border border-gray-100 rounded-full py-3 px-6 text-[14px] font-semibold whitespace-nowrap bg-white">
                                                            Name of City
                                                        </div>
                                                    </th>
                                                    <th className="py-6 px-2 text-left">
                                                        <div className="border border-gray-100 rounded-full py-3 px-6 text-[14px] font-semibold whitespace-nowrap bg-white">
                                                            No. of stations
                                                        </div>
                                                    </th>
                                                    <th className="py-6 px-2 text-left">
                                                        <div className="border border-gray-100 rounded-full py-3 px-6 text-[14px] font-semibold whitespace-nowrap bg-white">
                                                            Operated by
                                                        </div>
                                                    </th>
                                                    <th className="py-6 px-6 text-left">
                                                        <div className="border border-gray-100 rounded-full py-3 px-6 text-[14px] font-semibold bg-white">
                                                            Remarks
                                                        </div>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-50">
                                                {caaqmsTableData.map((row, idx) => (
                                                    <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                                        <td className="py-5 px-4 text-[13px] text-gray-500 font-medium">{row.srNo}</td>
                                                        <td className="py-5 px-4 text-[13px] text-gray-700 font-medium">{row.city}</td>
                                                        <td className="py-5 px-4 text-[13px] text-gray-700 pl-12">{row.stations}</td>
                                                        <td className="py-5 px-4 text-[13px] text-gray-700">{row.operatedBy}</td>
                                                        <td className="py-5 px-6 text-[13px] text-gray-700 leading-relaxed">{row.remarks}</td>
                                                    </tr>
                                                ))}
                                                {/* Total Row */}
                                                <tr className="bg-gray-50 font-semibold">
                                                    <td className="py-5 px-4 text-[13px] text-gray-800"></td>
                                                    <td className="py-5 px-4 text-[13px] text-gray-800">Total</td>
                                                    <td className="py-5 px-4 text-[13px] text-gray-800 pl-12">7</td>
                                                    <td className="py-5 px-4 text-[13px] text-gray-800"></td>
                                                    <td className="py-5 px-6 text-[13px] text-gray-800"></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <h3 className="text-lg font-bold mb-3">Strengthening Proposal:</h3>
                                    <p className="mb-4 text-justify leading-relaxed">
                                        CPCB has already emphasized the need to strengthening the national air monitoring program network to include mega cities, metro cities and important industrial areas. MPCB has conducted detailed in-house exercise for identifying new stations for AAQM monitoring. MPCB has prepared a proposal for strengthening of AAQM network in Maharashtra which is presented in Table-2. It is proposed that the above listed stations shall be monitored by the identified external educational institutions in Maharashtra under the overall supervision and control of MPCB.
                                    </p>
                                    <p className="mb-8 text-justify leading-relaxed">
                                        The justification for selection of the identified locations is also presented in the table. The major cities need a systematic air quality data in view of the increasing public awareness. The major industrial areas like Tarapur, TTC, Taloja etc. also require extensive air monitoring, as there are residential growth centers near all major industrial areas. The strengthening also include developing a systematic State Air Monitoring Program to support the NAMP. The activities under SAMP will be independently be handled by MPCB.
                                    </p>

                                    <h3 className="text-lg font-bold mb-3">Working Arrangements:</h3>
                                    <p className="mb-4 text-justify leading-relaxed">
                                        The proposed strengthening of AAQM network in Maharashtra was discussed with Chairman CPCB on 17.1.05. The record notes of the discussions are enclosed as Annexure I. CPCB has already emphasized the need for augmentation of the AAQM network and has also approved 50% matching contribution to SPCB's for the O&M, besides initial capital contribution, for the proposed augmentation as per decision of 118th Board meeting dated 11.12.2000.
                                    </p>
                                    <p className="mb-4 text-justify leading-relaxed">
                                        Accordingly, we have submitted a detailed proposal on the strengthening of AAQM to CPCB for providing financial support on 18.3.05. The proposed strengthening of NAMP stations from 28 to 58 stations will be supported by CPCB by providing 50% matching contribution to MPCB. The proposed SAMP covering 27 stations will be managed by MPCB on its own.
                                    </p>
                                    <p className="mb-4 text-justify leading-relaxed">
                                        All these AAQM stations will be operated by MPCB through the external educational/research institutions. The proposed augmentation program also indicates identified educational institutes for each station. MPCB will coordinate all activities of NAMP and MPCB and will provide CPCB a consolidated data for the state of Maharashtra. MPCB will also regularly supervise the operation of these stations and ensure the quality control aspects. MPCB also intend to give a short training for these institutes for the effective operation of the stations.
                                    </p>
                                    <p className="mb-4 text-justify leading-relaxed">
                                        The data base management for such extensive air quality network involves expert computational capabilities. The data generated through this network needs to be regularly uploaded on website after necessary validation. This data also needs to be published on minimum six monthly basis for public information and further uses. It is therefore proposed that this work related to collection, compilation, validation and publishing of the data can be handed over to reputed institutes like Science and Technology Park, University of Pune.
                                    </p>
                                    <p className="mb-8 text-justify leading-relaxed">
                                        It is also proposed that the proposed arrangements with the institutions can be for longer duration, can be about 5 years. After 5 years, the equipments will have to replace. This will offer better utilization of the capital support given by MPCB and will also generated more interest at the institute's level. It is intended to enter into an MoU with these institutes for the proposed association.
                                    </p>

                                    <h3 className="text-lg font-bold mb-4">List of proposed stations approved in the 146th Board Meeting (proposal)</h3>

                                    {/* Proposed Stations Table */}
                                    <div className="border border-gray-200 rounded-[35px] overflow-hidden mb-8 overflow-x-auto">
                                        <table className="w-full border-collapse min-w-[800px]">
                                            <thead>
                                                <tr className="border-b border-gray-100 bg-gray-50/50">
                                                    <th className="py-6 px-6 text-left w-20">
                                                        <div className="border border-gray-100 rounded-full py-3 px-4 text-center text-[14px] font-semibold bg-white">
                                                            Sr. No.
                                                        </div>
                                                    </th>
                                                    <th className="py-6 px-2 text-left">
                                                        <div className="border border-gray-100 rounded-full py-3 px-6 text-[14px] font-semibold whitespace-nowrap bg-white">
                                                            Name of City
                                                        </div>
                                                    </th>
                                                    <th className="py-6 px-2 text-left">
                                                        <div className="border border-gray-100 rounded-full py-3 px-6 text-[14px] font-semibold whitespace-nowrap bg-white">
                                                            Proposed NAMP
                                                        </div>
                                                    </th>
                                                    <th className="py-6 px-2 text-left">
                                                        <div className="border border-gray-100 rounded-full py-3 px-6 text-[14px] font-semibold whitespace-nowrap bg-white">
                                                            Proposed SAMP
                                                        </div>
                                                    </th>
                                                    <th className="py-6 px-2 text-left">
                                                        <div className="border border-gray-100 rounded-full py-3 px-6 text-[14px] font-semibold whitespace-nowrap bg-white">
                                                            Total
                                                        </div>
                                                    </th>
                                                    <th className="py-6 px-6 text-left">
                                                        <div className="border border-gray-100 rounded-full py-3 px-6 text-[14px] font-semibold bg-white">
                                                            Remarks
                                                        </div>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-50">
                                                {proposedStationsTableData.map((row, idx) => (
                                                    <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                                        <td className="py-5 px-4 text-[13px] text-gray-500 font-medium">{row.srNo}</td>
                                                        <td className="py-5 px-4 text-[13px] text-gray-700 font-medium">{row.city}</td>
                                                        <td className="py-5 px-4 text-[13px] text-gray-700">{row.namp}</td>
                                                        <td className="py-5 px-4 text-[13px] text-gray-700">{row.samp}</td>
                                                        <td className="py-5 px-4 text-[13px] text-gray-700 font-semibold">{row.total}</td>
                                                        <td className="py-5 px-6 text-[13px] text-gray-700 leading-relaxed">{row.remarks}</td>
                                                    </tr>
                                                ))}
                                                {/* Total Row */}
                                                <tr className="bg-gray-50 font-semibold">
                                                    <td className="py-5 px-4 text-[13px] text-gray-800"></td>
                                                    <td className="py-5 px-4 text-[13px] text-gray-800">Total</td>
                                                    <td className="py-5 px-4 text-[13px] text-gray-800">11</td>
                                                    <td className="py-5 px-4 text-[13px] text-gray-800">32</td>
                                                    <td className="py-5 px-4 text-[13px] text-gray-800">43</td>
                                                    <td className="py-5 px-6 text-[13px] text-gray-800"></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Strengthening;
