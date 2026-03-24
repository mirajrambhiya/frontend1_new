import { useState } from 'react';
import PageBanner from '../../../components/PageBanner';

interface AppellateData {
    appealNo: string;
    hearingDate: string;
    particulars: string;
    link?: string;
}

const currentData: AppellateData[] = [
    { appealNo: "06/2015", hearingDate: "08/01/2015", particulars: "Shri Parag Vittal Chavan", link: "#" },
    { appealNo: "01/2013", hearingDate: "25/04/2013", particulars: "Shri Debi Goenka", link: "#" },
    { appealNo: "04/2012", hearingDate: "05/10/2012", particulars: "Shri Anand Nana (Shindekar)", link: "#" },
    { appealNo: "01/2012", hearingDate: "27/06/2012", particulars: "Shri G.V.Rajput", link: "#" },
    { appealNo: "01/2012", hearingDate: "05/05/2012", particulars: "Shri Anil a.Mokashi", link: "#" },
    { appealNo: "18/2012", hearingDate: "16/03/2012", particulars: "Shri D.K.Khedkar", link: "#" },
    { appealNo: "17/2012", hearingDate: "21/02/2012", particulars: "Shri Kishore Baburao Takne", link: "#" },
    { appealNo: "15/2011", hearingDate: "14/12/2011", particulars: "Shri Kishore Baburao Takne", link: "#" },
    { appealNo: "14/2011", hearingDate: "14/12/2011", particulars: "Shri G.V.Rajput", link: "#" },
    { appealNo: "10/2011", hearingDate: "14/09/2011", particulars: "Shri Kishore Baburao Takne", link: "#" },
    { appealNo: "07/2011", hearingDate: "08/06/2011, 09/06/2011", particulars: "Shri G.V.Rajput", link: "#" },
    { appealNo: "07/2011", hearingDate: "07/05/2011", particulars: "Shri Kishore Baburao Takne", link: "#" },
    { appealNo: "05/2011", hearingDate: "20/04/2011", particulars: "Shri Kishore Baburao Takne", link: "#" },
    { appealNo: "/2011", hearingDate: "28/03/2011", particulars: "Shri Rajkumar Waghmare", link: "#" },
    { appealNo: "04/2011", hearingDate: "15/03/2011", particulars: "Shri Kishore Baburao Takne", link: "#" },
    { appealNo: "03/2011", hearingDate: "08/03/2011", particulars: "Shri G.V.Rajput", link: "#" }
];

const archiveData: { name: string, link?: string }[] = [
    { name: "Shri Amogh G. Sawant" }, { name: "Shri Milind Kamble" }, { name: "Shri Kanhyalal C.Jalgaonkar" },
    { name: "Shri Attar Azeemi" }, { name: "Shri Kris C.James" }, { name: "Shri Uday L. Mayekar" },
    { name: "Shri Shivnand R.Ankolekar" }, { name: "Shri Awdesh K. Jha" }, { name: "Shri Kartikeya S.Langote" },
    { name: "Shri Sukhdev Tupsunder" }, { name: "Shri Sandeep B.Kale" }, { name: "Shri Popatrao Kaware" },
    { name: "Shri Sushilkumar Sawant" }, { name: "Shri Rajendra U.Patil" }, { name: "Shri Sushilkumar Sawant" },
    { name: "Shri Nitin Nerkar" }, { name: "Shri Kishore Takne" }, { name: "Shri Ramesh Elle" },
    { name: "Shri Ravi G. Punjabi" }, { name: "Shri D.M.Shah" }, { name: "Shri Sushikumar Sawant" },
    { name: "Shri Sushilkumar Sawant" }, { name: "Shri Gandhi Kaundar" }, { name: "Shri Sushilkumar Sawant" },
    { name: "Shri Anil A.Mokashi" }, { name: "Shri Swapnil Nikam" }, { name: "Shri G.V Rajput" },
    { name: "Shri V.B.Waghjale" }, { name: "Shri Ajay Marathe" }, { name: "Shri G.V.Rajput" },
    { name: "Shri Kishore Takne-20/01/2010", link: "#" }, { name: "Shri G.V.Rajput-03/03/2010", link: "#" }, { name: "Shri Swapnil Nikam-03/03/2010", link: "#" },
    { name: "Shri Swapnil Nikam- 27/04/2010", link: "#" }, { name: "Shri M.S.Rakh-28/04/2010", link: "#" }, { name: "Shri Kishore Takne -31/05/2010", link: "#" },
    { name: "Shri Kishore Takane" }, { name: "Shri G.V.Rajput" }, { name: "Shri Kishore Takne" }
];

const FirstAppellateAuthority = () => {
    const [showArchive, setShowArchive] = useState(false); // Default to current data

    return (
        <div className="min-h-screen bg-white">
            <PageBanner
                title="RIGHT TO INFORMATION ACT 2005- IMPORTANT ORDERS PASSED BY FIRST APPELLATE AUTHORITY"
                image="/assets/standingorders.svg"
            />

            <div className="max-w-[1280px] mx-auto px-4 py-12">
                {/* Toggle */}
                <div className="flex items-center justify-end gap-3 mb-6">
                    <button
                        onClick={() => setShowArchive(!showArchive)}
                        className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer ${showArchive ? 'bg-[#0085E2]' : 'bg-gray-200'}`}
                    >
                        <div className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-all ${showArchive ? 'left-7' : 'left-1'}`} />
                    </button>
                    <span className="text-sm font-medium text-gray-700">Archive</span>
                </div>

                <div className="border border-gray-200 rounded-[35px] overflow-hidden w-full shadow-sm">
                    {showArchive ? (
                        <div className="p-6 bg-white">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4">
                                {archiveData.map((item, idx) => (
                                    item.link ? (
                                        <a
                                            key={idx}
                                            href={item.link}
                                            className="p-3 bg-gray-50/50 rounded-lg text-[14px] text-[#0085E2] font-medium border border-gray-100 hover:bg-blue-50 hover:underline transition-colors block"
                                        >
                                            {item.name}
                                        </a>
                                    ) : (
                                        <div
                                            key={idx}
                                            className="p-3 bg-white rounded-lg text-[14px] text-gray-700 font-medium border border-gray-100 block"
                                        >
                                            {item.name}
                                        </div>
                                    )
                                ))}
                            </div>
                        </div>
                    ) : (
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="border-b border-gray-100 bg-gray-50/50">
                                    <th className="py-6 px-6 text-left w-[15%]">
                                        <div className="text-[14px] font-bold text-gray-800">
                                            Appeal No.
                                        </div>
                                    </th>
                                    <th className="py-6 px-6 text-left w-[15%]">
                                        <div className="text-[14px] font-bold text-gray-800">
                                            Hearing Date
                                        </div>
                                    </th>
                                    <th className="py-6 px-6 text-left w-[70%]">
                                        <div className="text-[14px] font-bold text-gray-800">
                                            Particulars
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {currentData.length > 0 ? (
                                    currentData.map((row, idx) => (
                                        <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="py-5 px-6 text-[14px] text-gray-600 font-medium align-top">
                                                {row.appealNo}
                                            </td>
                                            <td className="py-5 px-6 text-[14px] text-gray-600 font-medium align-top">
                                                {row.hearingDate}
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
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={3} className="py-8 text-center text-gray-500">
                                            No records found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FirstAppellateAuthority;
