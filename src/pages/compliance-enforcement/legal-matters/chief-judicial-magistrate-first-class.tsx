import React from 'react';
import PageBanner from '../../../components/PageBanner';

interface ChiefJudicialMagistrateFirstClassData {
    caseNo: string;
    orderDate: string;
    particulars: string;
    link?: string;
}

const chiefJudicialMagistrateFirstClassData: ChiefJudicialMagistrateFirstClassData[] = [
    {
        caseNo: "Case No.199/2014",
        orderDate: "08/08/2017",
        particulars: "MPCB v/s M/s.Shree Buildcon & Associates, Nashik Road.",
        link: "#"
    },
    {
        caseNo: "Case No.65/2015",
        orderDate: "28/03/2018",
        particulars: "MPCB v/s M/s.Monarch Solitaire & Ors, Ulhasnagar",
        link: "#"
    },
    {
        caseNo: "Case No.346/2015",
        orderDate: "09/02/2018",
        particulars: "MPCB v/s M/s.Alfa Enterprises & Ors, Thane.",
        link: "#"
    },
    {
        caseNo: "Case No.123/2014",
        orderDate: "06/03/2018",
        particulars: "MPCB v/s M/s.Kashimira Ceramic Products Ltd, Thane.",
        link: "#"
    },
    {
        caseNo: "Case No.18066/2015",
        orderDate: "15/09/2017",
        particulars: "MPCB v/s Nagpur Housing & Area development board,Nagpur",
        link: "#"
    },
    {
        caseNo: "Case No.505/2014",
        orderDate: "05/08/2016",
        particulars: "MPCB v/s Rashmi pvt.ltd mira road,thane",
        link: "#"
    },
    {
        caseNo: "Case No.67/2015",
        orderDate: "05/05/2016",
        particulars: "MPCB v/s Tharwani construction PVT,Ltd,Vashi,Navi Mumbai",
        link: "#"
    },
    {
        caseNo: "Case No.1409/2014",
        orderDate: "16/03/2016",
        particulars: "MPCB v/s M/s.Bharat Infrastructure & Engineering Pvt.Ltd., Thane and Ors.",
        link: "#"
    },
    {
        caseNo: "Case No.862/2014",
        orderDate: "16/02/2016",
        particulars: "MPCB v/s M/s.Konark Township Pvt.Ltd., Navi Mumbai,",
        link: "#"
    },
    {
        caseNo: "Case No.107/2016",
        orderDate: "03/02/2016",
        particulars: "MPCB v/s Reliable Export,Kanjurmarg(West),mumbai",
        link: "#"
    },
    {
        caseNo: "R.C.C.No.746/2014",
        orderDate: "27/07/2015",
        particulars: "MPCB v/s M/s.Shri Gami Infotech Pvt.Ltd",
        link: "#"
    },
    {
        caseNo: "R.C.C.No.125/2008",
        orderDate: "21/11/2014",
        particulars: "Gajanan Baba Bio-Medical Waste",
        link: "#"
    },
    {
        caseNo: "RCC No.207/2014",
        orderDate: "11/04/2014",
        particulars: "MPCB v/s M/s.Paradise Infra-Con Pvt.Ltd.",
        link: "#"
    }
];

const ChiefJudicialMagistrateFirstClass = () => {
    return (
        <div className="min-h-screen bg-white">
            <PageBanner
                title="ORDER PASSED BY VARIOUS TRIAL COURTS - CHIEF JUDICIAL MAGISTRATE FIRST CLASS"
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
                                <th className="py-6 px-6 text-left w-[20%]">
                                    <div className="text-[14px] font-bold text-gray-800">
                                        Order Date
                                    </div>
                                </th>
                                <th className="py-6 px-6 text-left w-[60%]">
                                    <div className="text-[14px] font-bold text-gray-800">
                                        Particulars
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {chiefJudicialMagistrateFirstClassData.map((row, idx) => (
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

export default ChiefJudicialMagistrateFirstClass;
