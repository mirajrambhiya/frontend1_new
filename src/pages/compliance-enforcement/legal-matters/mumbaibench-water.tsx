import PageBanner from '../../../components/PageBanner';

interface BenchMatterData {
    caseNo: string;
    date: string;
    particulars: string;
    link: string;
}

const mumbaiBenchWaterData: BenchMatterData[] = [
    {
        caseNo: "PIL No 183 of 2012",
        date: "20/05/2013",
        particulars: "Shri Dattatray Hari Mane and others V/s State of Maharashtra and Others",
        link: "#"
    },
    {
        caseNo: "WP No.643/2005",
        date: "10/01/2012",
        particulars: "Solomon Mordecai V/s State of Maharashtra and others",
        link: "#"
    },
    {
        caseNo: "C.A.No.1/2011",
        date: "21/01/2011",
        particulars: "Dighi Port Ltd through its ChairmanV/s Dighi Koli Samaj Mumbai Rahivasi Sangh(Regd.)",
        link: "#"
    },
    {
        caseNo: "W.P.No.97 and 98 /2011",
        date: "12/01/2011",
        particulars: "Black Gold Exim Pvt.Ltd. and another V/s. State of Maharashtra and Others",
        link: "#"
    },
    {
        caseNo: "PIL No.126/2006",
        date: "16/01/2008",
        particulars: "Shetkari Sangharsh Samittee Vs Maharashtra Energy Generation Ltd , State of Maharashtra & Others,M/s.Patni Energy Pvt. Ltd. & Ors..",
        link: "#"
    },
    {
        caseNo: "W.P.No.2565/2005",
        date: "14/03/2007",
        particulars: "Janhit Manch and Others Vs The State of Maharashtra and Others",
        link: "#"
    },
    {
        caseNo: "PIL WP No.2565/2005",
        date: "",
        particulars: "Janhit manch Petition for implementation of Environmental Norms in respect of Tabelas in urban areas.",
        link: "#"
    }
];

const MumbaiBenchWater = () => {
    return (
        <>
            <PageBanner image="/assets/standingorders.svg" title="Mumbai Bench - Water (P & CP) Act 1974" />
            <section className="w-full flex justify-center py-16 bg-white font-family-helvetica">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="bg-white rounded-[20px] border border-gray-100 p-8 shadow-[0_2px_12px_rgba(0,0,0,0.03)] min-h-[400px]">
                        <h2 className="text-[24px] font-bold text-gray-800 mb-8 border-b border-gray-100 pb-4 uppercase tracking-wide">
                            MUMBAI BENCH- WATER (P & CP) ACT 1974
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
                                    {mumbaiBenchWaterData.map((row, idx) => (
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

export default MumbaiBenchWater;
