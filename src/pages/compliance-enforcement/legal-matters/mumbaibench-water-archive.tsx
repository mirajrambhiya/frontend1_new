
import PageBanner from '../../../components/PageBanner';

interface MumbaiBenchWaterArchiveData {
    caseNo: string;
    date: string;
    particulars: string;
    link?: string;
    isHeader?: boolean;
}

const mumbaiBenchWaterArchiveData: MumbaiBenchWaterArchiveData[] = [
    {
        caseNo: "PUBLIC INTEREST LITIGATION NO.173 OF 2010",
        date: "10/11/12 and 16/08/2016",
        particulars: "Suresh Lachmandas Ahuja v/s MPCB & Ors",
        link: "#"
    },
    {
        caseNo: "Civil Writ Petition No.8504/2012",
        date: "11/12/2013",
        particulars: "Suresh Lachmandas Ahuja v/s MPCB & Ors",
        link: "#"
    },
    {
        caseNo: "PIL No.240 of 2009",
        date: "25/10/2013",
        particulars: "M/s. Janardan Kundalikrao Pharande and Ors. V/s. MoEF",
        link: "#"
    },
    {
        caseNo: "WP No 7089 of 2013",
        date: "06/08/2013",
        particulars: "M/s AVH Pvt Ltd Vs State of Maharashtra and Others",
        link: "#"
    },
    {
        caseNo: "PIL No 183 of 2012",
        date: "20/05/2013",
        particulars: "Shri Dattatray Hari Mane and others V/s State of Maharashtra and Others",
        link: "#"
    },
    {
        caseNo: "WP NO.643/2005",
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
        caseNo: "PIL No.35/2007",
        date: "18/10/2010",
        particulars: "Harit Vasai Saurakshan Samitiv/s The State of Maharashtra and others",
        link: "#"
    },
    {
        caseNo: "PIL No.83/2006",
        date: "18/06/2008",
        particulars: "Akhil Bharat Krishi Go-Seva sangh V/s.M/s.Sonankur Exports P. Ltd. and others",
        link: "#"
    },
    {
        caseNo: "PIL No.126/2006",
        date: "16/01/2008",
        particulars: "Shetkari Sangharsh Samittee Vs Maharashtra Energy Generation Ltd , State of Maharashtra &amp; Others,M/s.Patni Energy Pvt. Ltd. &amp; Ors..",
        link: "#"
    },
    {
        caseNo: "W.P.No.2565/2005",
        date: "14/03/2007",
        particulars: "Janhit Manch and Others Vs The State of Maharashtra and Others",
        link: "#"
    },
    {
        caseNo: "",
        date: "29/01/2007",
        particulars: "M/s. Anuraj Sugar Ltd V/s State of Maharashtra and Others",
        link: "#"
    },
    {
        caseNo: "W.P.No.2116/2005",
        date: "17/01/2007",
        particulars: "Shri Kirti Sommaiya, Ex-MP V/s State of Maharashtra",
        link: "#"
    },
    {
        caseNo: "W.P.No.2116/2005",
        date: "",
        particulars: "Kirit Somaiya,Ex. MP petition for protection and Development of Mithi river",
        link: "#"
    },
    {
        caseNo: "PIL WP No.2565/2005",
        date: "",
        particulars: "Janhit manch Petition for implementation of Environmental Norms in respect of Tabelas in urban areas.",
        link: "#"
    },
    {
        caseNo: "OOCJ PIL W.P.2116/2005",
        date: "01/03/2006",
        particulars: "Work of development action of plan for the environmental improvement of Mithi river.",
        link: "#"
    },
    {
        caseNo: "PIL No.44/2001",
        date: "08/02/2006",
        particulars: "Janadhan Pharande petition for securing Environment Complaince from M/s. Vam Organic Chemical Ltd.,Nira,Nimbuti",
        link: "#"
    }
];

const MumbaiBenchWaterArchive = () => {
    return (
        <div className="min-h-screen bg-white">
            <PageBanner
                title="MUMBAI BENCH- WATER (P & CP) ACT 1974"
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
                                <th className="py-6 px-6 text-left w-[15%]">
                                    <div className="text-[14px] font-bold text-gray-800">
                                        Date
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
                            {mumbaiBenchWaterArchiveData.map((row, idx) => (
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
                                                className={`hover:underline cursor-pointer text-[#0085E2] font-medium`}
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

export default MumbaiBenchWaterArchive;
