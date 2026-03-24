import React from 'react';
import PageBanner from '../../../components/PageBanner';

interface MetropolitanMagistrateData {
    caseNo: string;
    orderDate: string;
    particulars: string;
    link?: string;
}

const metropolitanMagistrateData: MetropolitanMagistrateData[] = [
    {
        caseNo: "Case No.164 of 2014",
        orderDate: "20/03/2017",
        particulars: "Case No.164 of 2014 -Order passed for Court of the Metropolitan Magistrate, 73rd Court, Vikroli, Mumbai",
        link: "#"
    },
    {
        caseNo: "Case No.207/SW/14",
        orderDate: "19/01/2017",
        particulars: "Case No.207/SW/14 -Order passed for Court of the Metropolitan Magistrate, 65th Court, Andheri, Mumbai",
        link: "#"
    },
    {
        caseNo: "Case No.599/SS/2015",
        orderDate: "27/07/2016",
        particulars: "Case No.599/SS/2015 -Order passed for Court of the Metropolitan Magistrate, 28th Court, Esplanade, Mumbai",
        link: "#"
    },
    {
        caseNo: "Case No.159/SW/14",
        orderDate: "07/04/2016",
        particulars: "Case No.159/SW/14 -Order passed for Court of the Metropolitan Magistrate, 65th Court, Andheri, Mumbai",
        link: "#"
    },
    {
        caseNo: "Case No.317/SW/2015",
        orderDate: "18/08/2016",
        particulars: "Case No.317/SW/2015 -Order passed for carrying out construction activity without obtaining Environment Clearance(M/s Anshuman Developers)",
        link: "#"
    },
    {
        caseNo: "Case No.599/SS/2015",
        orderDate: "27/07/2016",
        particulars: "Case No.599/SS/2015 - Order passed for carrying out construction activity without obtaining Environment Clearance(M/s Roksina Real Estate Pvt Ltd).",
        link: "#"
    },
    {
        caseNo: "Case No.121/SW/2014",
        orderDate: "09/02/2022",
        particulars: "Case No. 121/SW/2014 -Order passed for Court of the Metropolitan Magistrate, 49th Court, Vikhroli, Mumbai",
        link: "#"
    }
];

const MetropolitanMagistrate = () => {
    return (
        <div className="min-h-screen bg-white">
            <PageBanner
                title="ORDER PASSED BY TRIAL COURTS UNDER VARIOUS ENVIRONMENT LAW'S BEFORE THE :-METROPOLITAN MAGISTRATE"
                image="/assets/standingorders.svg"
            />

            <div className="max-w-[1280px] mx-auto px-4 py-12">
                <div className="border border-gray-200 rounded-[35px] overflow-hidden w-full shadow-sm">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="border-b border-gray-100 bg-gray-50/50">
                                <th className="py-6 px-6 text-left w-[20%]">
                                    <div className="text-[14px] font-bold text-gray-800">
                                        Case No.
                                    </div>
                                </th>
                                <th className="py-6 px-6 text-left w-[15%]">
                                    <div className="text-[14px] font-bold text-gray-800">
                                        Order Date
                                    </div>
                                </th>
                                <th className="py-6 px-6 text-left w-[65%]">
                                    <div className="text-[14px] font-bold text-gray-800">
                                        particulars
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {metropolitanMagistrateData.map((row, idx) => (
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

export default MetropolitanMagistrate;
