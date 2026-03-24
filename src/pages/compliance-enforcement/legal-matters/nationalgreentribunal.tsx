import PageBanner from '../../../components/PageBanner';

interface BenchMatterData {
    caseNo: string;
    orderDate: string;
    particulars: string;
    link: string;
}

const nationalGreenTribunalData: BenchMatterData[] = [
    {
        caseNo: "APPLICATION NO.139/2016(WZ)",
        orderDate: "07/11/2016",
        particulars: "MPCB V/s M/s Amri India Pvt Ltd & Ors.",
        link: "#"
    },
    {
        caseNo: "APPLICATION No. 47/2013(WZ)",
        orderDate: "11/01/2016",
        particulars: "Asim Sarode V.s District Collector, Nanded",
        link: "#"
    },
    {
        caseNo: "Application No 28 of 2014",
        orderDate: "10/09/2014",
        particulars: "Saiprasad Mangesh Kalyankar",
        link: "#"
    },
    {
        caseNo: "Application No.157(THC)OF 2013",
        orderDate: "08/08/2014",
        particulars: "Society for Environment Protection, Amravati V/s Union of India and Others.",
        link: "#"
    },
    {
        caseNo: "Application No.14/2012",
        orderDate: "01/10/2013",
        particulars: "MR. Pandurang Sitaram Chalke V/s. State Of Maharashtra and Others",
        link: "#"
    },
    {
        caseNo: "Application No. 14/2013(WZ)",
        orderDate: "01/10/2013",
        particulars: "M/s.Sitaram Chalke V/s State of Maharashtra and Others",
        link: "#"
    },
    {
        caseNo: "Application No.2/2013(WZ)",
        orderDate: "19/09/2013",
        particulars: "Grampanchayat Tiroda V/s MoEf, New Delhi",
        link: "#"
    },
    {
        caseNo: "Application No.21/2012",
        orderDate: "24/07/2012",
        particulars: "Dileep Nevatia V/s. Union of India & ors",
        link: "#"
    },
    {
        caseNo: "Application No.28/2014",
        orderDate: "10/9/2014",
        particulars: "Saiprasad Kalyankar & V/s RTO and Others",
        link: "#"
    }
];

const NationalGreenTribunal = () => {
    return (
        <>
            <PageBanner image="/assets/standingorders.svg" title="Order Passed by Other Forums - National Green Tribunal" />
            <section className="w-full flex justify-center py-8 md:py-16 bg-white font-family-helvetica">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="bg-white rounded-[24px] border border-gray-100 p-4 md:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.03)] min-h-[400px]">
                        <h2 className="text-[20px] md:text-[24px] font-bold text-gray-800 mb-6 md:mb-8 border-b border-gray-100 pb-4 uppercase tracking-wide">
                            ORDER PASSED BY OTHER FORUMS -NATIONAL GREEN TRIBUNAL
                        </h2>

                        <div className="border border-gray-200 rounded-[20px] md:rounded-[35px] overflow-hidden w-full overflow-x-auto">
                            <table className="w-full border-collapse min-w-[800px]">
                                <thead>
                                    <tr className="border-b border-gray-100">
                                        <th className="py-6 px-6 text-left w-[25%]">
                                            <div className="border border-gray-100 rounded-full py-3 px-4 text-center text-[14px] font-semibold bg-gray-50/50">
                                                Case No.
                                            </div>
                                        </th>
                                        <th className="py-6 px-2 text-left w-[15%]">
                                            <div className="border border-gray-100 rounded-full py-3 px-6 text-[14px] font-semibold whitespace-nowrap bg-gray-50/50">
                                                Order Date
                                            </div>
                                        </th>
                                        <th className="py-6 px-2 text-left w-[60%]">
                                            <div className="border border-gray-100 rounded-full py-3 px-6 text-[14px] font-semibold whitespace-nowrap bg-gray-50/50">
                                                particulars
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    {nationalGreenTribunalData.map((row, idx) => (
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

export default NationalGreenTribunal;
