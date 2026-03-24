import PageBanner from '../../../components/PageBanner';

interface AppellateMatterData {
    srNo: string;
    date: string;
    particulars: string;
    link: string;
}

const appellateWaterActData: AppellateMatterData[] = [
    {
        srNo: "1",
        date: "",
        particulars: "M/s.Biltube Industries Ltd., Panhala, Dist.Kolhapur",
        link: "#"
    }
];

const AppellateWaterAct = () => {
    return (
        <>
            <PageBanner image="/assets/standingorders.svg" title="Other Judical Forums- Orders Passed By Various Appellate Authorities- Under Provisions Of The Water Act, 1974 & Air Act, 1981" />
            <section className="w-full flex justify-center py-16 bg-white font-family-helvetica">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="bg-white rounded-[20px] border border-gray-100 p-8 shadow-[0_2px_12px_rgba(0,0,0,0.03)] min-h-[400px]">
                        <h2 className="text-[24px] font-bold text-gray-800 mb-8 border-b border-gray-100 pb-4 uppercase tracking-wide">
                            OTHER JUDICAL FORUMS- ORDERS PASSED BY VARIOUS APPELLATE AUTHORITIES- UNDER PROVISIONS OF THE WATER ACT, 1974 & AIR ACT, 1981
                        </h2>

                        <div className="border border-gray-200 rounded-[35px] overflow-hidden w-full">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="border-b border-gray-100">
                                        <th className="py-6 px-6 text-left w-[15%]">
                                            <div className="border border-gray-100 rounded-full py-3 px-4 text-center text-[14px] font-semibold bg-gray-50/50">
                                                Sr.No.
                                            </div>
                                        </th>
                                        <th className="py-6 px-2 text-left w-[15%]">
                                            <div className="border border-gray-100 rounded-full py-3 px-6 text-[14px] font-semibold whitespace-nowrap bg-gray-50/50">
                                                Date
                                            </div>
                                        </th>
                                        <th className="py-6 px-2 text-left w-[70%]">
                                            <div className="border border-gray-100 rounded-full py-3 px-6 text-[14px] font-semibold whitespace-nowrap bg-gray-50/50">
                                                Particulars
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    {appellateWaterActData.map((row, idx) => (
                                        <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="py-5 px-8 text-[13px] text-gray-500 font-medium align-top">
                                                {row.srNo}
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

export default AppellateWaterAct;
