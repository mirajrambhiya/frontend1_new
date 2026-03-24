
import PageBanner from '../../components/PageBanner.tsx';
import Sidebar from '../../components/Sidebar.tsx';



const Compliance = () => {

    const ambujaData = [
        { quarter: "Oct to Dec 2018" },
        { quarter: "Jan to March 2019" },
        { quarter: "April to June 2019" },
        { quarter: "July to September 2019" },
    ];

    const ultraTechData = [
        { quarter: "Oct - December 2018" },
        { quarter: "Jan - March 2019" },
        { quarter: "April - June 2019" },
        { quarter: "July - Sept 2019" },
        { quarter: "November 2019" },
        { quarter: "Oct - Dec 2019" },
        { quarter: "December 2019" },
        { quarter: "January 2020" },
        { quarter: "Jan - March 2020" },
        { quarter: "Apr - June 2020" },
        { quarter: "July - Sep 2020" },
        { quarter: "Oct - Dec 2020" },
        { quarter: "february 2020" },
        { quarter: "March-June 2020" },
        { quarter: "September 2020" },
        { quarter: "October 2020" },
        { quarter: "November 2020" },
        { quarter: "Jan - March 2021" },
        { quarter: "Apr - June 2021" },
        { quarter: "July 2021" },
        { quarter: "August 2021" },
    ];

    const manikgarhData = [
        { quarter: "July 2019" },
        { quarter: "July to September 2019" },
        { quarter: "November 2019" },
        { quarter: "December 2019" },
        { quarter: "Oct 2019 to Dec 2019" },
        { quarter: "January 2020" },
        { quarter: "february 2020" },
        { quarter: "March 2020" },
        { quarter: "Jan 2020 to March 2020" },
        { quarter: "April to June 2020" },
        { quarter: "July 2020 to Sep 2020" },
        { quarter: "Oct 2020 to Dec 2020" },
        { quarter: "Jan 2021 to March 2021" },
        { quarter: "April 2021 to June 2021" },
        { quarter: "July 2021 to Sept 2021" },
    ];

    const accData = [
        { quarter: "Oct to Dec 2018" },
        { quarter: "Jan to March 2019" },
        { quarter: "April to June 2019" },
        { quarter: "July to Sept 2019" },
        { quarter: "Oct to Dec 2019" },
        { quarter: "Jan to Mar 2020" },
        { quarter: "Apr to June 2020" },
        { quarter: "July to Sept 2020" },
        { quarter: "Oct to Dec 2020" },
        { quarter: "Jan to Mar 2021" },
        { quarter: "Apr to June 2021" },
        { quarter: "July to Sept 2021" },
    ];

    const TableComponent = ({ data }: { data: { quarter: string }[] }) => (
        <div className="border border-gray-200 rounded-[35px] overflow-hidden mb-8">
            <table className="w-full border-collapse">
                <thead>
                    <tr className="border-b border-gray-100 bg-gray-50/50">
                        <th className="py-6 px-6 text-left">
                            <div className="border border-gray-100 rounded-full py-3 px-6 text-[14px] font-semibold bg-white w-fit">
                                Quarter
                            </div>
                        </th>
                        <th className="py-6 px-6 text-left">
                            <div className="border border-gray-100 rounded-full py-3 px-6 text-[14px] font-semibold bg-white w-fit">
                                Compliance Report
                            </div>
                        </th>
                        <th className="py-6 px-6 text-left">
                            <div className="border border-gray-100 rounded-full py-3 px-6 text-[14px] font-semibold bg-white w-fit">
                                Consent Copy
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                    {data.map((row, idx) => (
                        <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                            <td className="py-5 px-4 text-[13px] text-gray-700 font-medium">{row.quarter}</td>
                            <td className="py-5 px-4 text-[13px] text-[#0085E2] font-medium cursor-pointer hover:underline">Click Here</td>
                            <td className="py-5 px-4 text-[13px] text-[#0085E2] font-medium cursor-pointer hover:underline">Click Here</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

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
                                <h2 className="text-[18px] md:text-[20px] font-bold text-gray-900 border-b border-gray-200 pb-4 mb-6 leading-relaxed">
                                    FORTNIGHTLY REPORT OF AUTHORIZED INDUSTRIES FOR USE OF PET COKE IN REFERENCE TO WRIT PETITION(CIVIL) 13025/1985 TITLED "M.C. MEHTA VERSUS UNION OF INDIA & ORS. PENDING IN HON'BLE SUPREME COURT OF INDIA
                                </h2>

                                <div className="prose max-w-none text-gray-700">
                                    <h3 className="text-[15px] md:text-[16px] font-medium text-gray-600 mb-4">M/s. Ambuja Cements Limited, Unit - Maratha Cement Works</h3>
                                    <div className="overflow-x-auto">
                                        <TableComponent data={ambujaData} />
                                    </div>

                                    <h3 className="text-[15px] md:text-[16px] font-medium text-gray-600 mb-4 mt-8">M/s UltraTech Cement Ltd (Unit: Awarpur Cement Works)</h3>
                                    <div className="overflow-x-auto">
                                        <TableComponent data={ultraTechData} />
                                    </div>

                                    <h3 className="text-[15px] md:text-[16px] font-medium text-gray-600 mb-4 mt-8">Manikgarh Cement & Manikgarh Cement Unit -II (including 60 MW Captive Power Plant)</h3>
                                    <div className="overflow-x-auto">
                                        <TableComponent data={manikgarhData} />
                                    </div>

                                    <h3 className="text-[15px] md:text-[16px] font-medium text-gray-600 mb-4 mt-8">ACC Ltd Chanda Cement Works</h3>
                                    <div className="overflow-x-auto">
                                        <TableComponent data={accData} />
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

export default Compliance;
