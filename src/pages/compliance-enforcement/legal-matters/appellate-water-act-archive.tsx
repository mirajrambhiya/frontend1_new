import React from 'react';
import PageBanner from '../../../components/PageBanner';

interface AppellateWaterActArchiveData {
    srNo: string;
    date: string;
    particulars: string;
    link?: string;
}

const appellateWaterActArchiveData: AppellateWaterActArchiveData[] = [
    { srNo: "1", date: "19/07/2018", particulars: "M/s.Shree OM Enterprises, Plot No.81, NMC House No.1077, Mudliyar Layout, Shantinagar, Nagpur, Tal, & Dist: Nagpur", link: "#" },
    { srNo: "2", date: "28/03/2016", particulars: "M/s.Lloyds Metals & Energy Ltd.", link: "#" },
    { srNo: "3", date: "15/04/2015", particulars: "M/s.Shrigonda SSK Ltd.", link: "#" },
    { srNo: "4", date: "15/04/2015", particulars: "M/s.Jean Washing Units Ulhasnagar", link: "#" },
    { srNo: "5", date: "15/04/2015", particulars: "M/s.Jawala Rel Estate Pvt.Ltd., Worli Mumbai", link: "#" },
    { srNo: "6", date: "31/03/2015", particulars: "M/s.N.Kumar Project & Infrastructure (P) Ltd., Nagpur", link: "#" },
    { srNo: "7", date: "30/10/2013", particulars: "M/s.Powerdeal Energy System Pvt. Ltd., Dist. Nashik", link: "#" },
    { srNo: "8", date: "08/02/2012", particulars: "M/s.Godavari Biorefinaries,Dist.Ahmednagar", link: "#" },
    { srNo: "9", date: "", particulars: "M/s.Kisanveer Satara SSK Ltd., Wai, Dist. Satara", link: "#" },
    { srNo: "10", date: "", particulars: "M/s.Biltube Industries Ltd., Panhala, Dist.Kolhapur", link: "#" },
    { srNo: "11", date: "13/02/2012", particulars: "M/s.Chinteshwar Industries Ltd., Kamptee, Dist.Nagpur", link: "#" },
    { srNo: "12", date: "", particulars: "M/s.Cognizant Technology Solutions India Pvt.Ltd., Hinjewadi, Dist.Pune.", link: "#" },
    { srNo: "13", date: "", particulars: "M/s.Jayaswal Neco Inds.Ltd.", link: "#" },
    { srNo: "14", date: "21/08/2014", particulars: "M/s.Western Coalfield Ltd., At & Post : Kanhan, Tal: Personi, Dist: Nagpur", link: "#" },
    { srNo: "15", date: "30/07/2015", particulars: "M/s.Western Coalfiled Ltd. v/s MPCB", link: "#" }
];

const AppellateWaterActArchive = () => {
    return (
        <div className="min-h-screen bg-white">
            <PageBanner
                title="OTHER JUDICAL FORUMS- ORDERS PASSED BY VARIOUS APPELLATE AUTHORITIES- UNDER PROVISIONS OF THE WATER ACT, 1974 & AIR ACT, 1981 - ARCHIVE"
                image="/assets/standingorders.svg"
            />

            <div className="max-w-[1280px] mx-auto px-4 py-12">
                <div className="border border-gray-200 rounded-[35px] overflow-hidden w-full shadow-sm">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="border-b border-gray-100 bg-gray-50/50">
                                <th className="py-6 px-6 text-left w-[10%]">
                                    <div className="text-[14px] font-bold text-gray-800">
                                        Sr.No.
                                    </div>
                                </th>
                                <th className="py-6 px-6 text-left w-[15%]">
                                    <div className="text-[14px] font-bold text-gray-800">
                                        Date
                                    </div>
                                </th>
                                <th className="py-6 px-6 text-left w-[75%]">
                                    <div className="text-[14px] font-bold text-gray-800">
                                        Particulars
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {appellateWaterActArchiveData.map((row, idx) => (
                                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="py-5 px-6 text-[14px] text-gray-600 font-medium align-top">
                                        {row.srNo}
                                    </td>
                                    <td className="py-5 px-6 text-[14px] text-gray-600 font-medium align-top">
                                        {row.date}
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

export default AppellateWaterActArchive;
