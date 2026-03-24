import PageBanner from "../../../components/PageBanner";


interface TableRow {
    srNo: number;
    nameOfTPS: string;
    productionLevel: string;
    coalConsumption: string;
    avgAshContent: string;
    ashGeneration: string;
    disposalMethod: string;
    bricks: string;
    bunds: string;
    cement: string;
    landfill: string;
    others: string;
    total: string;
    presentFlyAshUtilization: string;
}

const FlyAshUtilization20042005: React.FC = () => {
    const tableData: TableRow[] = [
        {
            srNo: 1,
            nameOfTPS: "Chandrapur",
            productionLevel: "2340",
            coalConsumption: "9282344",
            avgAshContent: "40.48",
            ashGeneration: "3757297",
            disposalMethod: "Bricks, Manufacturers, Bunds, Agriculture, Cement & Others",
            bricks: "63664",
            bunds: "-",
            cement: "36000",
            landfill: "2200",
            others: "45894",
            total: "147758",
            presentFlyAshUtilization: "3.93"
        },
        {
            srNo: 2,
            nameOfTPS: "Koradi",
            productionLevel: "1100",
            coalConsumption: "3912242",
            avgAshContent: "37.53",
            ashGeneration: "1468444",
            disposalMethod: "Bricks, Manufacturers, Bunds, Agriculture, Cement & Others",
            bricks: "40295",
            bunds: "-",
            cement: "-",
            landfill: "-",
            others: "49200",
            total: "89495",
            presentFlyAshUtilization: "6.09"
        },
        {
            srNo: 3,
            nameOfTPS: "Khaparkheda",
            productionLevel: "840",
            coalConsumption: "3642407",
            avgAshContent: "35.08",
            ashGeneration: "1277612",
            disposalMethod: "Bricks, Manufacturers, Bunds, Agriculture, Cement & Others",
            bricks: "38175",
            bunds: "-",
            cement: "371445",
            landfill: "-",
            others: "44454",
            total: "454074",
            presentFlyAshUtilization: "35.87"
        },
        {
            srNo: 4,
            nameOfTPS: "Parali",
            productionLevel: "690",
            coalConsumption: "2352607",
            avgAshContent: "37.93",
            ashGeneration: "892354",
            disposalMethod: "Bricks, Manufacturers, Bunds, Agriculture, Cement & Others",
            bricks: "22776",
            bunds: "-",
            cement: "27170",
            landfill: "108000",
            others: "44422",
            total: "202368",
            presentFlyAshUtilization: "22.68"
        },
        {
            srNo: 5,
            nameOfTPS: "Bhusawal",
            productionLevel: "482.5",
            coalConsumption: "1764160",
            avgAshContent: "32.38",
            ashGeneration: "571188",
            disposalMethod: "Bricks, Manufacturers, Bunds, Agriculture, Cement & Others",
            bricks: "186507",
            bunds: "-",
            cement: "69551",
            landfill: "-",
            others: "47953",
            total: "304011",
            presentFlyAshUtilization: "53.22"
        },
        {
            srNo: 6,
            nameOfTPS: "Nashik",
            productionLevel: "910",
            coalConsumption: "2405933",
            avgAshContent: "36.53",
            ashGeneration: "878866",
            disposalMethod: "Bricks, Manufacturers, Bunds, Agriculture, Cement & Others",
            bricks: "18412",
            bunds: "-",
            cement: "28439",
            landfill: "17500",
            others: "1993",
            total: "66344",
            presentFlyAshUtilization: "7.55"
        },
        {
            srNo: 7,
            nameOfTPS: "Paras",
            productionLevel: "56",
            coalConsumption: "263472",
            avgAshContent: "31.22",
            ashGeneration: "82254",
            disposalMethod: "Bricks, Manufacturers, Bunds, Agriculture, Cement & Others",
            bricks: "71160",
            bunds: "-",
            cement: "912",
            landfill: "-",
            others: "1980",
            total: "74052",
            presentFlyAshUtilization: "90.03"
        },
        {
            srNo: 8,
            nameOfTPS: "Dahanu (Reliance Energy)",
            productionLevel: "500",
            coalConsumption: "2366985",
            avgAshContent: "29.08",
            ashGeneration: "584640",
            disposalMethod: "Bricks, Manufacturers, Bunds, Agriculture, Cement & Others",
            bricks: "613",
            bunds: "7040",
            cement: "-",
            landfill: "94",
            others: "140160",
            total: "147907",
            presentFlyAshUtilization: "25.3"
        },
        {
            srNo: 9,
            nameOfTPS: "Tata Power",
            productionLevel: "1330 (only 500 MW coal based)",
            coalConsumption: "1957000",
            avgAshContent: "-",
            ashGeneration: "38081",
            disposalMethod: "Bricks, Manufacturers, Bunds, Agriculture, Cement & Others",
            bricks: "-",
            bunds: "5251",
            cement: "-",
            landfill: "15492",
            others: "17338",
            total: "38081",
            presentFlyAshUtilization: "100"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <PageBanner
                title="Waste Management"
            />

            {/* Main Content without Sidebar */}
            <section className="w-full flex justify-center bg-white py-12">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="rounded-[24px] p-8 min-h-[400px] border border-gray-100 shadow-sm bg-white relative">
                        {/* Header */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 border-b border-gray-200 pb-4 gap-4">
                            <h1 className="text-[24px] font-bold text-gray-900 uppercase">
                                Fly Ash - Utilization Status for the Year 2004 - 2005
                            </h1>
                        </div>

                        <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            {/* Table Section */}
                            <div className="mt-4">
                                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                                    <h3 className="text-[18px] font-bold text-gray-800 flex items-center gap-3 border-l-4 border-[#0085E2] pl-3">
                                        Fly Ash Utilization Status for the Year 2004 - 2005
                                    </h3>
                                </div>

                                {/* Table */}
                                <div className="overflow-x-auto">
                                    <div className="border border-gray-200 rounded-[24px] overflow-hidden">
                                        <table className="w-full border-collapse">
                                            <thead>
                                                <tr className="bg-gray-50 border-b border-gray-200">
                                                    <th rowSpan={2} className="py-4 px-3 text-left text-[12px] font-semibold text-gray-700 border-r border-gray-100">
                                                        Sr No
                                                    </th>
                                                    <th rowSpan={2} className="py-4 px-3 text-left text-[12px] font-semibold text-gray-700 border-r border-gray-100">
                                                        Name of TPS
                                                    </th>
                                                    <th rowSpan={2} className="py-4 px-3 text-left text-[12px] font-semibold text-gray-700 border-r border-gray-100">
                                                        Production level (MW)
                                                    </th>
                                                    <th rowSpan={2} className="py-4 px-3 text-left text-[12px] font-semibold text-gray-700 border-r border-gray-100">
                                                        Coal consumption during the year in MT
                                                    </th>
                                                    <th rowSpan={2} className="py-4 px-3 text-left text-[12px] font-semibold text-gray-700 border-r border-gray-100">
                                                        Av. Ash Content in coal (%)
                                                    </th>
                                                    <th rowSpan={2} className="py-4 px-3 text-left text-[12px] font-semibold text-gray-700 border-r border-gray-100">
                                                        Ash Generation during the year in MT
                                                    </th>
                                                    <th rowSpan={2} className="py-4 px-3 text-left text-[12px] font-semibold text-gray-700 border-r border-gray-100">
                                                        Present ash Disposal method
                                                    </th>
                                                    <th colSpan={6} className="py-3 px-3 text-center text-[12px] font-semibold text-gray-700 border-b border-gray-200">
                                                        Category-wise Utilization in MT/Year
                                                    </th>
                                                    <th rowSpan={2} className="py-4 px-3 text-left text-[12px] font-semibold text-gray-700">
                                                        Present fly ash Utilization (%)
                                                    </th>
                                                </tr>
                                                <tr className="bg-gray-50 border-b border-gray-200">
                                                    <th className="py-3 px-2 text-center text-[11px] font-semibold text-gray-600 border-r border-gray-100">Bricks</th>
                                                    <th className="py-3 px-2 text-center text-[11px] font-semibold text-gray-600 border-r border-gray-100">Bunds</th>
                                                    <th className="py-3 px-2 text-center text-[11px] font-semibold text-gray-600 border-r border-gray-100">Cement</th>
                                                    <th className="py-3 px-2 text-center text-[11px] font-semibold text-gray-600 border-r border-gray-100">Landfill</th>
                                                    <th className="py-3 px-2 text-center text-[11px] font-semibold text-gray-600 border-r border-gray-100">Others</th>
                                                    <th className="py-3 px-2 text-center text-[11px] font-semibold text-gray-600 border-r border-gray-100">Total</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-100">
                                                {tableData.map((row, idx) => (
                                                    <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                                        <td className="py-4 px-3 text-[12px] text-gray-600 border-r border-gray-50">{row.srNo}</td>
                                                        <td className="py-4 px-3 text-[12px] text-gray-700 font-medium border-r border-gray-50">{row.nameOfTPS}</td>
                                                        <td className="py-4 px-3 text-[12px] text-gray-600 border-r border-gray-50">{row.productionLevel}</td>
                                                        <td className="py-4 px-3 text-[12px] text-gray-600 border-r border-gray-50">{row.coalConsumption}</td>
                                                        <td className="py-4 px-3 text-[12px] text-gray-600 border-r border-gray-50">{row.avgAshContent}</td>
                                                        <td className="py-4 px-3 text-[12px] text-gray-600 border-r border-gray-50">{row.ashGeneration}</td>
                                                        <td className="py-4 px-3 text-[12px] text-gray-600 border-r border-gray-50 max-w-[150px]">{row.disposalMethod}</td>
                                                        <td className="py-4 px-2 text-[12px] text-gray-600 text-center border-r border-gray-50">{row.bricks}</td>
                                                        <td className="py-4 px-2 text-[12px] text-gray-600 text-center border-r border-gray-50">{row.bunds}</td>
                                                        <td className="py-4 px-2 text-[12px] text-gray-600 text-center border-r border-gray-50">{row.cement}</td>
                                                        <td className="py-4 px-2 text-[12px] text-gray-600 text-center border-r border-gray-50">{row.landfill}</td>
                                                        <td className="py-4 px-2 text-[12px] text-gray-600 text-center border-r border-gray-50">{row.others}</td>
                                                        <td className="py-4 px-2 text-[12px] text-gray-600 text-center border-r border-gray-50">{row.total}</td>
                                                        <td className="py-4 px-3 text-[12px] text-gray-700 font-medium text-center">{row.presentFlyAshUtilization}</td>
                                                    </tr>
                                                ))}
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

export default FlyAshUtilization20042005;
