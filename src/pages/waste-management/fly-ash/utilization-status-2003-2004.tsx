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
    stowing: string;
    cement: string;
    landfill: string;
    others: string;
    presentFlyAshUtilization: string;
}

const FlyAshUtilization20032004: React.FC = () => {
    const tableData: TableRow[] = [
        {
            srNo: 1,
            nameOfTPS: "Nashik",
            productionLevel: "910",
            coalConsumption: "10411",
            avgAshContent: "34",
            ashGeneration: "3540",
            disposalMethod: "Bricks, Manufacturers, Bunds, Agriculture, Cement & Others",
            bricks: "140.41",
            bunds: "445.2",
            stowing: "39.72",
            cement: "Nil",
            landfill: "177.73",
            others: "82.19",
            presentFlyAshUtilization: "25"
        },
        {
            srNo: 2,
            nameOfTPS: "Parli",
            productionLevel: "690",
            coalConsumption: "8767",
            avgAshContent: "36",
            ashGeneration: "3156",
            disposalMethod: "Bricks, Manufacturers, Bunds, Agriculture, Cement & Others",
            bricks: "15.69",
            bunds: "Nil",
            stowing: "26.67",
            cement: "114.56",
            landfill: "Nil",
            others: "Nil",
            presentFlyAshUtilization: "5"
        },
        {
            srNo: 3,
            nameOfTPS: "Koradi",
            productionLevel: "1080",
            coalConsumption: "12192",
            avgAshContent: "34",
            ashGeneration: "4145",
            disposalMethod: "Bricks, Manufacturers, Bunds, Agriculture, Cement & Others",
            bricks: "400.27",
            bunds: "Nil",
            stowing: "5.47",
            cement: "1.64",
            landfill: "1.64",
            others: "5.47",
            presentFlyAshUtilization: "10"
        },
        {
            srNo: 4,
            nameOfTPS: "Paras",
            productionLevel: "58",
            coalConsumption: "780",
            avgAshContent: "28",
            ashGeneration: "218",
            disposalMethod: "Bricks, Manufacturers, Bunds, Agriculture, Cement & Others",
            bricks: "98.38",
            bunds: "Nil",
            stowing: "Nil",
            cement: "Nil",
            landfill: "Nil",
            others: "Nil",
            presentFlyAshUtilization: "45"
        },
        {
            srNo: 5,
            nameOfTPS: "Chandrapur",
            productionLevel: "2340",
            coalConsumption: "31356",
            avgAshContent: "40",
            ashGeneration: "12542",
            disposalMethod: "Bricks, Manufacturers, Bunds, Agriculture, Cement & Others",
            bricks: "71.23",
            bunds: "Nil",
            stowing: "273.97",
            cement: "1589",
            landfill: "Nil",
            others: "Nil",
            presentFlyAshUtilization: "15"
        },
        {
            srNo: 6,
            nameOfTPS: "Khaperkheda",
            productionLevel: "840",
            coalConsumption: "11507",
            avgAshContent: "34",
            ashGeneration: "3912",
            disposalMethod: "Bricks, Manufacturers, Bunds, Agriculture, Cement & Others",
            bricks: "171.81",
            bunds: "Nil",
            stowing: "17.83",
            cement: "147.59",
            landfill: "Nil",
            others: "149.92",
            presentFlyAshUtilization: "19"
        },
        {
            srNo: 7,
            nameOfTPS: "Bhusa-wal",
            productionLevel: "478",
            coalConsumption: "6575",
            avgAshContent: "34",
            ashGeneration: "2235",
            disposalMethod: "Bricks, Manufacturers, Bunds, Agriculture, Cement & Others",
            bricks: "551.85",
            bunds: "95.89",
            stowing: "26.02",
            cement: "21.91",
            landfill: "13.69",
            others: "146.57",
            presentFlyAshUtilization: "38"
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
                                Fly Ash - Utilization Status for the Year 2003 - 2004
                            </h1>
                        </div>

                        <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            {/* Table Section */}
                            <div className="mt-4">
                                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                                    <h3 className="text-[18px] font-bold text-gray-800 flex items-center gap-3 border-l-4 border-[#0085E2] pl-3">
                                        Fly Ash Utilization Status for the Year 2003 - 2004
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
                                                        Av. Coal consumption per day (MT/D)
                                                    </th>
                                                    <th rowSpan={2} className="py-4 px-3 text-left text-[12px] font-semibold text-gray-700 border-r border-gray-100">
                                                        Av. Ash Content in coal (%)
                                                    </th>
                                                    <th rowSpan={2} className="py-4 px-3 text-left text-[12px] font-semibold text-gray-700 border-r border-gray-100">
                                                        Ash Generation per day (MT/D)
                                                    </th>
                                                    <th rowSpan={2} className="py-4 px-3 text-left text-[12px] font-semibold text-gray-700 border-r border-gray-100">
                                                        Present ash Disposal method
                                                    </th>
                                                    <th colSpan={6} className="py-3 px-3 text-center text-[12px] font-semibold text-gray-700 border-b border-gray-200">
                                                        Category-wise Utilization
                                                    </th>
                                                    <th rowSpan={2} className="py-4 px-3 text-left text-[12px] font-semibold text-gray-700">
                                                        Present fly ash Utilization (%)
                                                    </th>
                                                </tr>
                                                <tr className="bg-gray-50 border-b border-gray-200">
                                                    <th className="py-3 px-2 text-center text-[11px] font-semibold text-gray-600 border-r border-gray-100">Bricks</th>
                                                    <th className="py-3 px-2 text-center text-[11px] font-semibold text-gray-600 border-r border-gray-100">Bunds</th>
                                                    <th className="py-3 px-2 text-center text-[11px] font-semibold text-gray-600 border-r border-gray-100">Stowing</th>
                                                    <th className="py-3 px-2 text-center text-[11px] font-semibold text-gray-600 border-r border-gray-100">Cement</th>
                                                    <th className="py-3 px-2 text-center text-[11px] font-semibold text-gray-600 border-r border-gray-100">Land fill</th>
                                                    <th className="py-3 px-2 text-center text-[11px] font-semibold text-gray-600 border-r border-gray-100">Others</th>
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
                                                        <td className="py-4 px-2 text-[12px] text-gray-600 text-center border-r border-gray-50">{row.stowing}</td>
                                                        <td className="py-4 px-2 text-[12px] text-gray-600 text-center border-r border-gray-50">{row.cement}</td>
                                                        <td className="py-4 px-2 text-[12px] text-gray-600 text-center border-r border-gray-50">{row.landfill}</td>
                                                        <td className="py-4 px-2 text-[12px] text-gray-600 text-center border-r border-gray-50">{row.others}</td>
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

export default FlyAshUtilization20032004;
