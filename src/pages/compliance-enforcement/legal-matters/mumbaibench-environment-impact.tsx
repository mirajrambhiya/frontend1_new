import PageBanner from '../../../components/PageBanner';

interface BenchMatterData {
    caseNo: string;
    orderDate: string;
    particulars: string;
    link: string;
}

const mumbaiBenchEnvironmentImpactData: BenchMatterData[] = [
    {
        caseNo: "W.P.No2131/2011",
        orderDate: "24/02/2012",
        particulars: "Shri Bhikaji Nagannath Waghdhare V/s. Nuclear Power Corporation of India Ltd. and Others.",
        link: "#"
    },
    {
        caseNo: "OOCJ WP.No.992/2010",
        orderDate: "31/03/2011",
        particulars: "Shri Dileep Nevatia and Others v/s Ministry of Environment and Forest, Govt of India.",
        link: "#"
    },
    {
        caseNo: "OOCJ/ W.P.No.50/2006",
        orderDate: "12/07/2006",
        particulars: "Save Worli Sea Face Samiti",
        link: "#"
    }
];

const MumbaiBenchEnvironmentImpact = () => {
    return (
        <>
            <PageBanner image="/assets/standingorders.svg" title="Mumbai Bench - Environment Impact Assessment Notification 2006" />
            <section className="w-full flex justify-center py-16 bg-white font-family-helvetica">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="bg-white rounded-[20px] border border-gray-100 p-8 shadow-[0_2px_12px_rgba(0,0,0,0.03)] min-h-[400px]">
                        <h2 className="text-[24px] font-bold text-gray-800 mb-8 border-b border-gray-100 pb-4 uppercase tracking-wide">
                            MUMBAI BENCH - ENVIRONMENT IMPACT ASSESSMENT NOTIFICATION 2006
                        </h2>

                        <div className="border border-gray-200 rounded-[35px] overflow-hidden w-full">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="border-b border-gray-100">
                                        <th className="py-6 px-6 text-left w-[20%]">
                                            <div className="border border-gray-100 rounded-full py-3 px-4 text-center text-[14px] font-semibold bg-gray-50/50">
                                                Case No.
                                            </div>
                                        </th>
                                        <th className="py-6 px-2 text-left w-[15%]">
                                            <div className="border border-gray-100 rounded-full py-3 px-6 text-[14px] font-semibold whitespace-nowrap bg-gray-50/50">
                                                Order Date
                                            </div>
                                        </th>
                                        <th className="py-6 px-2 text-left w-[65%]">
                                            <div className="border border-gray-100 rounded-full py-3 px-6 text-[14px] font-semibold whitespace-nowrap bg-gray-50/50">
                                                particulars
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    {mumbaiBenchEnvironmentImpactData.map((row, idx) => (
                                        <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="py-5 px-8 text-[13px] text-gray-500 font-medium align-top">
                                                {row.caseNo}
                                            </td>
                                            <td className="py-5 px-4 text-[13px] text-gray-700 font-medium align-top">
                                                {row.orderDate}
                                            </td>
                                            <td className="py-5 px-4 text-[13px] font-medium leading-relaxed align-top">
                                                <a href={row.link} className="text-[#0085E2] hover:underline hover:text-blue-700 transition-colors">
                                                    {row.particulars}
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MumbaiBenchEnvironmentImpact;
