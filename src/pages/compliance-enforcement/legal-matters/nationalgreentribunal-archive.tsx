import React from 'react';
import PageBanner from '../../../components/PageBanner';

interface NationalGreenTribunalArchiveData {
    caseNo: string;
    orderDate: string;
    particulars: string;
    link?: string;
}

const nationalGreenTribunalArchiveData: NationalGreenTribunalArchiveData[] = [
    { caseNo: "Original Application No.98/2015 (WZ)", orderDate: "30/09/2016", particulars: "Shivaji Girijappa Vatkar", link: "#" },
    { caseNo: "Original Application No.8/2015 (WZ)", orderDate: "03/07/2017", particulars: "Sujal Sahakari Gruha Rachana Sanstha Maryadit V/s The Commissioner, Pune Municipal Corporation & Ors.", link: "#" },
    { caseNo: "APPLICATION NO. 199 OF 2014", orderDate: "22/12/2016", particulars: "Mrs. Almitra H. Patel Vs Union of India", link: "#" },
    { caseNo: "APPLICATION NO.139/2016(WZ)", orderDate: "07/11/2016", particulars: "MPCB V/s M/s Amri India Pvt Ltd & Ors.", link: "#" },
    { caseNo: "APPLICATION NO.21 OF 2014", orderDate: "11/07/2016", particulars: "Vardhaman Kaushik V/s Union of India and Others", link: "#" },
    { caseNo: "Application No 95 of 2014, 21 of 2014 and 303 of 2014", orderDate: "31/5/2016", particulars: "Vardhaman Kaushik V/s Union of India and Others", link: "#" },
    { caseNo: "APPLICATION NO. 47/2013(WZ)", orderDate: "11/01/2016", particulars: "Asim Sarode V.s District Collector, Nanded", link: "#" },
    { caseNo: "Application No 28 of 2014", orderDate: "10/09/2014", particulars: "Saiprasad Mangesh Kalyankar", link: "#" },
    { caseNo: "Appeal No. 5 of 2014", orderDate: "27/05/2014", particulars: "M/s Ardent Steel Limited V/.s MoEF and Others", link: "#" },
    { caseNo: "Application No.157(THC)OF 2013", orderDate: "08/08/2014", particulars: "Society for Environment Protection, Amravati V/s Union of India and Others.", link: "#" },
    { caseNo: "Application No 30/2013", orderDate: "30/07/2014", particulars: "Shri Vithhal Gopichand Bhungase V/ .s Gangakhed Sugar and Energy Ltd.", link: "#" },
    { caseNo: "Application No. 45/2013", orderDate: "16/05/2014", particulars: "Munnilal Shukla & Anr. v/s Union of India & Ors.", link: "#" },
    { caseNo: "Application No.29/2013", orderDate: "17/12/2013", particulars: "Mrs. Shalini N. Raskar V/S. MPCB & Others", link: "#" },
    { caseNo: "Application No.42/2013", orderDate: "17/12/2013", particulars: "MR. Mayur Harishchandra Raskar & Anr Vs.Saswad Mali Sugar Factory Ltd. & Others", link: "#" },
    { caseNo: "Application No.21/2013", orderDate: "29/11/2013", particulars: "MR. Akhil Bharat Goseva Sangh( Mumbai) V/s. MPCB and Others", link: "#" },
    { caseNo: "Application No.14/2012", orderDate: "01/10/2013", particulars: "MR. Pandurang Sitaram Chalke V/s. State Of Maharashtra and Others", link: "#" },
    { caseNo: "PIL No.240 of 2009", orderDate: "25/10/2013", particulars: "M/s. Janardan Kundalikrao Pharande and Ors. V/s. MoEF", link: "#" },
    { caseNo: "Application No.5/2013", orderDate: "23/10/2013", particulars: "Videocon Tower a Co-operative HSG.Ltd V/s Principal Secretary, Environment Deptt.State of Mah &Ors", link: "#" },
    { caseNo: "Application No.202/2013", orderDate: "11/10/2013", particulars: "Dileep Nevathiya V/s State of Maharashtra and Others", link: "#" },
    { caseNo: "Application No. 14/2013(WZ)", orderDate: "01/10/2013", particulars: "M/s.Sitaram Chalke V/s State of Maharashtra and Others", link: "#" },
    { caseNo: "Application No.2/2013(WZ)", orderDate: "19/09/2013", particulars: "Grampanchayat Tiroda V/s MoEf, New Delhi", link: "#" },
    { caseNo: "Application No.37/2013", orderDate: "08/05/2013", particulars: "Wasaan Singh V/s State of Punjab & Ors.", link: "#" },
    { caseNo: "Application No.65/2012", orderDate: "09/05/2013", particulars: "Shri Sureshbhai Keshavbhai Waghvankar & Others Vs The State of Gujarat through Addl. Chief Secretary, Home Dept Sachivalaya.", link: "#" },
    { caseNo: "Application No.36/2011", orderDate: "09/01/2013", particulars: "Shri Dileep Nevatia V.s State of Maharashtra and others", link: "#" },
    { caseNo: "Appeal No.37/2012", orderDate: "03/10/2012", particulars: "M/s. Real Gem Buildtech V/s. State of Maharashtra and Ors", link: "#" },
    { caseNo: "Appeal No.16/2012", orderDate: "03/10/2012", particulars: "M/s. Kshitija Infrastructure Ltd.Mumbai & Union of India", link: "#" },
    { caseNo: "Appeal No. 7/2011(T)", orderDate: "20/09/2012", particulars: "M/s. Krishi Vigyan Arogya Sanstha Dhanwate V/s. MOEF", link: "#" },
    { caseNo: "Apepal No.28/2012", orderDate: "29/08/2012", particulars: "M/s. Diana Infrastructure Ltd.V/s.The State Level Environment Impact Assessment Authority(SEIAA)", link: "#" },
    { caseNo: "Application No.21/2012", orderDate: "24/07/2012", particulars: "Dileep Nevatia V/s. Union of India & ors", link: "#" },
    { caseNo: "Misc.ApplicationNo.20/2012", orderDate: "27/03/2012", particulars: "Suresh Banjan V/s State of Maharashtra & Ors.", link: "#" },
    { caseNo: "Appeal No. 1/2012", orderDate: "15/03/2012", particulars: "M/S.Real Gem Buildtech V/S.State of Maharashtra and Ors.", link: "#" },
    { caseNo: "Appeal.No.30/2011", orderDate: "14/12/2011", particulars: "M/s. Athiappa Chemicals(P) Ltd., Puducherry and OthersV/s.Puducherry Pollution Control COmmittee.", link: "#" },
    { caseNo: "PIL W.P. No.1325/2003", orderDate: "22/07/2008", particulars: "Janhit Manch & Others ddvs MPCB & Others", link: "#" },
    { caseNo: "Application No.28/2014", orderDate: "10/9/2014", particulars: "Saiprasad Kalyankar & V/s RTO and Others", link: "#" }
];

const NationalGreenTribunalArchive = () => {
    return (
        <div className="min-h-screen bg-white">
            <PageBanner
                title="ORDER PASSED BY OTHER FORUMS -NATIONAL GREEN TRIBUNAL - ARCHIVE"
                image="/assets/standingorders.svg"
            />

            <div className="max-w-[1280px] mx-auto px-4 py-12">
                <div className="border border-gray-200 rounded-[35px] overflow-hidden w-full shadow-sm">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="border-b border-gray-100 bg-gray-50/50">
                                <th className="py-6 px-6 text-left w-[30%]">
                                    <div className="text-[14px] font-bold text-gray-800">
                                        Case No.
                                    </div>
                                </th>
                                <th className="py-6 px-6 text-left w-[15%]">
                                    <div className="text-[14px] font-bold text-gray-800">
                                        Order Date
                                    </div>
                                </th>
                                <th className="py-6 px-6 text-left w-[55%]">
                                    <div className="text-[14px] font-bold text-gray-800">
                                        particulars
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {nationalGreenTribunalArchiveData.map((row, idx) => (
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

export default NationalGreenTribunalArchive;
