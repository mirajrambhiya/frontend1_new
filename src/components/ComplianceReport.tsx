

const standingorders = "/assets/standingorders.svg";

const ambujaData = [
    { quarter: "Oct to Dec 2018" },
    { quarter: "Jan to March 2019" },
    { quarter: "April to June 2019" },
    { quarter: "July to September 2019" }
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
    { quarter: "August 2021" }
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
    { quarter: "July 2021 to Sept 2021" }
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
    { quarter: "July to Sept 2021" }
];

const ReportTable = ({ data, companyName }: { data: { quarter: string }[], companyName: string }) => (
    <div className="mb-12">
        <h3 className="text-[16px] font-semibold text-gray-800 mb-4 pl-2 border-l-4 border-[#0085E2]">
            {companyName}
        </h3>
        <div className="border border-gray-300 rounded-lg overflow-x-auto shadow-sm">
            <table className="w-full border-collapse min-w-[600px]">
                <thead>
                    <tr className="bg-[#EAEAEA] text-[#333333]">
                        <th className="py-3 px-4 text-left font-bold border-r border-gray-300 w-1/3">
                            Quarter
                        </th>
                        <th className="py-3 px-4 text-left font-bold border-r border-gray-300 w-1/3">
                            Compliance Report
                        </th>
                        <th className="py-3 px-4 text-left font-bold w-1/3">
                            Consent Copy
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                    {data.map((row, idx) => (
                        <tr key={idx} className="bg-white hover:bg-gray-50 transition-colors">
                            <td className="py-3 px-4 text-[14px] text-gray-700 border-r border-gray-300 font-medium">
                                {row.quarter}
                            </td>
                            <td className="py-3 px-4 text-[14px] text-[#0085E2] hover:underline cursor-pointer border-r border-gray-300">
                                Click Here
                            </td>
                            <td className="py-3 px-4 text-[14px] text-[#0085E2] hover:underline cursor-pointer">
                                Click Here
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

function ComplianceReport() {
    return (
        <div className="font-family-helvetica min-h-screen bg-white">
            {/* Top Banner Section - RTI Style */}
            <section className="w-full flex justify-center bg-white">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="relative w-full h-[200px] md:h-[280px] rounded-t-[30px] md:rounded-t-[48px] overflow-hidden">
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
                            <h1 className="text-[24px] md:text-[40px] font-bold text-[#000000] tracking-tight leading-tight md:leading-none mb-4">
                                Compliance Report Of Industries Using Petcoke
                            </h1>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 h-10 bg-linear-to-t from-white to-transparent z-40" />
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="w-full flex justify-center bg-white py-12">
                <div className="w-full max-w-[1282px] px-4">

                    {/* Legal Header */}
                    <div className="mb-10 text-center mx-auto max-w-5xl">
                        <h2 className="text-[14px] md:text-[18px] font-bold text-gray-800 leading-relaxed uppercase border-b-2 border-gray-200 pb-4">
                            FORTNIGHTLY REPORT OF AUTHORIZED INDUSTRIES FOR USE OF PET COKE IN REFERENCE TO WRIT PETITION(CIVIL) 13025/1985 TITLED "M.C. MEHTA VERSUS UNION OF INDIA & ORS. PENDING IN HON'BLE SUPREME COURT OF INDIA
                        </h2>
                    </div>

                    {/* Tables */}
                    <div className="max-w-5xl mx-auto">
                        <ReportTable
                            companyName="M/s. Ambuja Cements Limited, Unit - Maratha Cement Works"
                            data={ambujaData}
                        />

                        <ReportTable
                            companyName="M/s UltraTech Cement Ltd (Unit: Awarpur Cement Works)"
                            data={ultraTechData}
                        />

                        <ReportTable
                            companyName="Manikgarh Cement & Manikgarh Cement Unit -II (including 60 MW Captive Power Plant)"
                            data={manikgarhData}
                        />

                        <ReportTable
                            companyName="ACC Ltd Chanda Cement Works"
                            data={accData}
                        />
                    </div>

                </div>
            </section>
        </div>
    );
}

export default ComplianceReport;
