import PageBanner from '../../../components/PageBanner';

interface BenchMatterData {
    caseNo: string;
    date: string;
    particulars: string;
    link: string;
}

const mumbaiBenchAirData: BenchMatterData[] = [
    {
        caseNo: "W.P.No.7042/2012",
        date: "9/5/2014",
        particulars: "M/s.Godrej Tyson Foods Ltd. v/s MS, MPCB & Anr.",
        link: "#"
    },
    {
        caseNo: "W.P.No.1584/2012",
        date: "22/08/2012",
        particulars: "JSW Energy Ltd.V/s Union of India and Others",
        link: "#"
    },
    {
        caseNo: "W.P.No.4012/2011",
        date: "23/12/2011",
        particulars: "Yashwant B.Athalekar & Ors.V/s Union of India & Ors.",
        link: "#"
    },
    {
        caseNo: "W.P.No.4364",
        date: "17/11/2009",
        particulars: "Shri Chandrakant Walchand Shahand Anr. V/s. State of Maharashtra and Others.",
        link: "#"
    },
    {
        caseNo: "PIL No56/2006",
        date: "04/07/2007",
        particulars: "Maza Bharat Samajik Sanstha Vs The State of Maharashtra Others",
        link: "#"
    },
    {
        caseNo: "W.P.No.36/2005",
        date: "05/07/2007",
        particulars: "M/s Sharad Baburao Patil V/s State of Maharashtra and Others",
        link: "#"
    }
];

const MumbaiBenchAir = () => {
    return (
        <>
            <PageBanner image="/assets/standingorders.svg" title="Mumbai Bench - Air (P & CP) Act 1981" />
            <section className="w-full flex justify-center py-16 bg-white font-family-helvetica">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="bg-white rounded-[20px] border border-gray-100 p-8 shadow-[0_2px_12px_rgba(0,0,0,0.03)] min-h-[400px]">
                        <h2 className="text-[24px] font-bold text-gray-800 mb-8 border-b border-gray-100 pb-4 uppercase tracking-wide">
                            MUMBAI BENCH- AIR (P & CP) ACT 1981
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
                                                Date
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
                                    {mumbaiBenchAirData.map((row, idx) => (
                                        <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="py-5 px-8 text-[13px] text-gray-500 font-medium align-top">
                                                {row.caseNo}
                                            </td>
                                            <td className="py-5 px-4 text-[13px] text-gray-700 font-medium align-top">
                                                {row.date}
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

export default MumbaiBenchAir;
