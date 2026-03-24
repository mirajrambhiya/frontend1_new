import React from 'react';
import PageBanner from '../../../components/PageBanner';

interface BiomedicalArchiveData {
    caseNo: string;
    date: string;
    particulars: string;
    link?: string;
}

const biomedicalArchiveData: BiomedicalArchiveData[] = [
    {
        caseNo: "PIL No.32/2006",
        date: "31/08/2012",
        particulars: "Mumbai Midwaste Action Group V/s.Union of India and Others.",
        link: "#"
    },
    {
        caseNo: "W.P.No.1003/2006",
        date: "21/08/2006",
        particulars: "Kalina Co-operative Housing Society V/s. MCGM and Others.",
        link: "#"
    },
    {
        caseNo: "W.P.No.4776/2005",
        date: "18/10/2010",
        particulars: "Grant Medical Foundation V/s.M.P.C.Board",
        link: "#"
    },
    {
        caseNo: "PIL No.83/2006",
        date: "18/06/2008",
        particulars: "Consumer Welfare Association V/s Union of India and Others",
        link: "#"
    }
];

const BiomedicalArchive = () => {
    return (
        <div className="min-h-screen bg-white">
            <PageBanner
                title="MUMBAI BENCH- BIO MEDICAL WASTE (M. H. AND T. M.)RULES 1998"
                subTitle="ARCHIVE"
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
                                        particulars
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {biomedicalArchiveData.map((row, idx) => (
                                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="py-5 px-6 text-[14px] text-gray-600 font-medium align-top">
                                        {row.caseNo}
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

export default BiomedicalArchive;
