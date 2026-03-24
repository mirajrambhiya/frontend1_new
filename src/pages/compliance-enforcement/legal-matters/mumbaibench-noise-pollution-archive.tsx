import PageBanner from '../../../components/PageBanner';

interface NoisePollutionData {
    caseNo: string;
    orderDate: string;
    particulars: string;
    link?: string;
}

const noisePollutionData: NoisePollutionData[] = [
    {
        caseNo: "PIL No 173/2010",
        orderDate: "16/08/2016 and 10/11/2012",
        particulars: "Mahesh Bedekar V/s. State of Maharashtra",
        link: "#"
    },
    {
        caseNo: "PIL W.P.nos.2053/2003 & 74/2007",
        orderDate: "26/02/2009",
        particulars: "Awaaz foundation & The State of Maharashtra & Others",
        link: "#"
    },
    {
        caseNo: "PIL No.32/2006",
        orderDate: "22/03/2007",
        particulars: "Mr. Gaurang R. Vora V/s State of Maharashtra and Others.",
        link: "#"
    }
];

const NoisePollutionArchive = () => {
    return (
        <div className="min-h-screen bg-white">
            <PageBanner
                title="MUMBAI BENCH- THE NOISE POLLUTION (REGULATION AND CONTROL) RULES, 2000"
                subTitle="ARCHIVE"
                image="/assets/standingorders.svg"
            />

            <div className="max-w-[1280px] mx-auto px-4 py-12">
                <div className="border border-gray-200 rounded-[35px] overflow-hidden w-full shadow-sm">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="border-b border-gray-100 bg-gray-50/50">
                                <th className="py-6 px-6 text-left w-[25%]">
                                    <div className="text-[14px] font-bold text-gray-800">
                                        Case No.
                                    </div>
                                </th>
                                <th className="py-6 px-6 text-left w-[20%]">
                                    <div className="text-[14px] font-bold text-gray-800">
                                        Order Date
                                    </div>
                                </th>
                                <th className="py-6 px-6 text-left w-[55%]">
                                    <div className="text-[14px] font-bold text-gray-800">
                                        particulars
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {noisePollutionData.map((row, idx) => (
                                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="py-5 px-6 text-[14px] text-gray-600 font-medium align-top">
                                        {row.caseNo}
                                    </td>
                                    <td className="py-5 px-6 text-[14px] text-gray-600 font-medium align-top">
                                        {row.orderDate}
                                    </td>
                                    <td className="py-5 px-6 text-[14px] leading-relaxed align-top">
                                        {row.link ? (
                                            <a
                                                href={row.link}
                                                className="hover:underline cursor-pointer text-[#0085E2] font-medium"
                                            >
                                                {row.particulars}
                                            </a>
                                        ) : (
                                            <span className="text-gray-700">{row.particulars}</span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default NoisePollutionArchive;
