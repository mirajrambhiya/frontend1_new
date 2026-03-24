import React from 'react';
import PageBanner from '../../../components/PageBanner';

interface ChiefJudicialMagistrateData {
    caseNo: string;
    orderDate: string;
    particulars: string;
    link?: string;
}

const chiefJudicialMagistrateData: ChiefJudicialMagistrateData[] = [
    {
        caseNo: "241/2015",
        orderDate: "23/05/2018",
        particulars: "M/s.Ellora Buildwell pvt Ltd",
        link: "#"
    },
    {
        caseNo: "927/2015",
        orderDate: "22/05/2018",
        particulars: "M/s.Sara Builders and Developers \"Sara city\"",
        link: "#"
    },
    {
        caseNo: "1184/2015",
        orderDate: "22/05/2018",
        particulars: "M/s.Adi Realties",
        link: "#"
    },
    {
        caseNo: "3811/2014",
        orderDate: "15/03/2018",
        particulars: "M/s.Sanskruti and Essen Associates",
        link: "#"
    },
    {
        caseNo: "422/2016",
        orderDate: "13/12/2017",
        particulars: "M/s.Gokuldham CHS Ltd",
        link: "#"
    },
    {
        caseNo: "1411/2017",
        orderDate: "16/11/2017",
        particulars: "M/s.Abhinav Rainbow developers and promotors",
        link: "#"
    },
    {
        caseNo: "245/2012",
        orderDate: "28/06/2016",
        particulars: "Neptune developers",
        link: "#"
    },
    {
        caseNo: "33/2013",
        orderDate: "05/06/2014",
        particulars: "M/s.High Tech. Carbon, Khalapur, Dist: Raigad",
        link: "#"
    },
    {
        caseNo: "371/2001",
        orderDate: "29/07/2013",
        particulars: "M/s. Omega Packaging and others.",
        link: "#"
    },
    {
        caseNo: "381/2009",
        orderDate: "03/03/2010",
        particulars: "Virar Municipal Council.V/s M.P.C.Board.",
        link: "#"
    }
];

const ChiefJudicialMagistrate = () => {
    return (
        <div className="min-h-screen bg-white">
            <PageBanner
                title="CHIEF JUDICIAL MAGISTRATE"
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
                                        Date
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
                            {chiefJudicialMagistrateData.map((row, idx) => (
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

export default ChiefJudicialMagistrate;
