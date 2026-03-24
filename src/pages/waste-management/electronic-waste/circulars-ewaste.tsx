
import PageBanner from '../../../components/PageBanner';
import Sidebar from '../../../components/Sidebar';

interface CircularData {
    srNo: string;
    date: string;
    department: string;
    circular: string;
    link: string;
}

interface CircularSection {
    title: string;
    data: CircularData[];
}

const CircularsEWaste = () => {
    const sections: CircularSection[] = [
        {
            title: "Circular on Hazardous Waste",
            data: [
                { srNo: "14", date: "24/03/2017", department: "PSO", circular: "Procedure for grant of BMW authorization / Combined consent and authorization as per BMW Management Rules ,2016 .", link: "#" },
                { srNo: "13", date: "16/07/2016", department: "JD(WPC)", circular: "Guidelines to Municipal Corporations regarding 25 % budget utilization.", link: "#" },
                { srNo: "12", date: "25/06/2015", department: "MoEF", circular: "Import of waste/used rubber tyres for production of tyre pyrolysis Oil.", link: "#" },
                { srNo: "11", date: "24/06/2015", department: "RO(HQ)", circular: "Procedure to be followed for Grant of Consent authorisation /Registration to Hazardous Waste recycler / reprocessor and E-waste dismantler / recycler.", link: "#" },
                { srNo: "10", date: "26/12/2014", department: "JD(WPC)", circular: "Thumb Rules for slaughter house waste management and design of pollution control systems/measures", link: "#" },
                { srNo: "9", date: "01/01/2013", department: "Legal", circular: "Writ Petition (Civil) No.657/1995 Research Foundation for Science Technology and Natural Resource Policy.", link: "#" },
                { srNo: "8", date: "30/06/2011", department: "RO(HQ)", circular: "Circular on Last date for Submission Annual Report of Hazardous Waste is 30/06/2011.", link: "#" },
                { srNo: "7", date: "19/01/2011", department: "RO(HQ)", circular: "NOC for destruction of Date expired materials, non-hazardous wastes/chemicals.", link: "#" },
                { srNo: "6", date: "05/01/2010", department: "RO(HQ)", circular: "Indentification of Isolated storages and importer of Hazardous Chemicals under manufacturing Storage, import handling Rules of 1989 and amended Rules 2000.", link: "#" },
                { srNo: "5", date: "12/07/2009", department: "RO(HQ)", circular: "NOC for destruction of date expired materials, non hazardous astes and chemicals.", link: "#" },
                { srNo: "4", date: "11/12/2008", department: "RO(HQ)", circular: "Assigning the areas of Operation of Common Hazardous Waste Collection,Treatment,Storage and disposal facilities in the State of MaHarashtra for Management of Hazardous Waste.", link: "#" },
                { srNo: "3", date: "10/10/2008", department: "RO(HQ)", circular: "All industries generating spent solvents and its reprocessors.", link: "#" },
                { srNo: "2", date: "14/05/2008", department: "", circular: "Assigning the areas of operation of Common Hazardous Waste Collection, Treatment, Storage and Disposal Facilities in the State of Maharashtra for Management of Hazardous Wastes.", link: "#" },
                { srNo: "1", date: "20/10/2005", department: "RO(HQ)", circular: "Area for CHWTSDF", link: "#" },
            ]
        },
        {
            title: "Circular on Bio Medical Waste",
            data: [
                { srNo: "6", date: "30/05/2019", department: "RO(HQ)", circular: "Grant of Combined Consent and Biomedical Waste Authorization to Educational Institute of Physiotherapy in the State", link: "#" },
                { srNo: "5", date: "04/06/2015", department: "MoEF", circular: "Amendment to the EIA notification 2006- Regarding EC to Biomedical Wate Treatment facilities.", link: "#" },
                { srNo: "4", date: "01/03/2014", department: "PSO", circular: "Delegation of Power for Grant of Combined Consent and Authorisation to Health Care Establishment, Industries, Generating/handling BioMedical Waste and CBMWTSDC.(Common Bio Medical Waste Treatment and Storage and Disposal Facility).", link: "#" },
                { srNo: "3", date: "24/09/2013", department: "M.S.", circular: "Constitution of State project Management unit (SPMU) in the State of Maharashtra for implementation of GEE-UNIDO funded MoEF, Project entitled \"Environmentaly Sound Management of Medical Waste in India.", link: "#" },
                { srNo: "2", date: "10/04/2013", department: "PSO", circular: "Uniform Guidelines to obtain Bank Guarantee towards compliance of BMW(M&H) Rules, 1998 from Health Care Establishment BMW transporters and CBMWTSDF Operators.", link: "#" },
                { srNo: "1", date: "11/11/2010", department: "GR-Mantralaya", circular: "BMW GR on formation of State Advisory Committee dated 11th November 2010.", link: "#" },
            ]
        },
        {
            title: "Circular on Municipal Solid Waste",
            data: [
                { srNo: "4", date: "02/04/2014", department: "RO(HQ)", circular: "Office Order - Constitution of Committee for scrutiny of authorizations for all Corporations /Councils as per the Municipal Solid Waste (M&H) Rules, 2000", link: "#" },
                { srNo: "3", date: "10/01/2014", department: "RO(HQ)", circular: "Amendment-Office Order for Constitution of Committee for scrutiny of authorizations for all corporations as per the Municipal Solid Waste (M&H) Rules, 2000", link: "#" },
                { srNo: "2", date: "10/12/2013", department: "RO(HQ)", circular: "Office Order - Constitution of Committee for scrutiny of authorizations for all corporations as per the Municipal Solid Waste (M&H) Rules, 2000", link: "#" },
                { srNo: "1", date: "05/10/2012", department: "GoM", circular: "GR issued by Water Supply Deptt., GoM regarding MSW Rules, 2000", link: "#" },
            ]
        }
    ];

    const renderTable = (data: CircularData[]) => (
        <div className="border border-gray-200 rounded-[35px] overflow-hidden">
            <table className="w-full border-collapse">
                <thead>
                    <tr className="border-b border-gray-100 bg-gray-50/50">
                        <th className="py-6 px-6 text-left w-20">
                            <div className="border border-gray-100 rounded-full py-3 px-4 text-center text-[14px] font-semibold bg-white text-gray-700">
                                Sr.No
                            </div>
                        </th>
                        <th className="py-6 px-2 text-left w-[120px]">
                            <div className="border border-gray-100 rounded-full py-3 px-6 text-[14px] font-semibold whitespace-nowrap bg-white text-gray-700">
                                Date
                            </div>
                        </th>
                        <th className="py-6 px-2 text-left w-[150px]">
                            <div className="border border-gray-100 rounded-full py-3 px-6 text-[14px] font-semibold whitespace-nowrap bg-white text-gray-700">
                                Department
                            </div>
                        </th>
                        <th className="py-6 px-6 text-left">
                            <div className="border border-gray-100 rounded-full py-3 px-6 text-[14px] font-semibold bg-white text-gray-700">
                                Circulars
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                    {data.map((row, idx) => (
                        <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                            <td className="py-5 px-8 text-[13px] text-gray-500 font-medium">{row.srNo}</td>
                            <td className="py-5 px-4 text-[13px] text-gray-700 font-medium">
                                {row.date}
                            </td>
                            <td className="py-5 px-4 text-[13px] text-gray-700">
                                {row.department}
                            </td>
                            <td className="py-5 px-6 text-[13px] leading-relaxed">
                                <a href={row.link} className="text-[#0085E2] hover:underline hover:text-blue-700 transition-colors">
                                    {row.circular}
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    return (
        <div className="min-h-screen bg-white">
            <PageBanner
                title="Waste Management"
            />

            <section className="w-full flex justify-center bg-white py-12">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Sidebar */}
                        <Sidebar activeItem="Waste Management" />

                        {/* Content */}
                        <div className="flex-1">
                            <div className="rounded-[24px] p-8 min-h-[400px] border border-gray-100 shadow-sm bg-white relative space-y-12">
                                {sections.map((section, index) => (
                                    <div key={index}>
                                        <h1 className="text-[24px] font-bold text-gray-900 uppercase mb-8 border-b border-gray-200 pb-4">
                                            {section.title}
                                        </h1>
                                        {renderTable(section.data)}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CircularsEWaste;
