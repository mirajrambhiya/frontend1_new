
import React from 'react';
import PageBanner from "../../../components/PageBanner";
import Sidebar from "../../../components/Sidebar";

const FlyAshUtilisation: React.FC = () => {
    return (
        <div className="min-h-screen bg-white">
            <PageBanner
                title="Waste Management"
            />

            <section className="w-full flex justify-center bg-white py-12">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Sidebar */}
                        <Sidebar activeItem="Waste Management" />

                        {/* Content */}
                        <div className="flex-1">
                            <div className="rounded-[24px] p-8 min-h-[400px] border border-gray-100 shadow-sm bg-white relative">
                                {/* Header */}
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 border-b border-gray-200 pb-4 gap-4">
                                    <h1 className="text-[24px] font-bold text-gray-900 uppercase leading-snug">
                                        FLY ASH - UTILISATION OF FLY ASH
                                    </h1>
                                </div>

                                <div className="space-y-6 text-gray-700 text-[15px] leading-relaxed">
                                    {/* Court Header Info */}
                                    <div className="text-center font-semibold text-gray-800 space-y-1 mb-8">
                                        <p>In The High Court Of Delhi At New Delhi</p>
                                        <p>C. W. 2145/1999</p>
                                    </div>

                                    <div className="grid grid-cols-[1fr_auto_1fr] gap-4 mb-8 text-sm">
                                        <div className="text-left font-medium">Centre For Public Interest Litigation</div>
                                        <div className="text-center text-gray-400">---</div>
                                        <div className="text-left font-medium">Petitioner</div>

                                        <div className="col-span-3 text-center font-semibold py-2">Versus</div>

                                        <div className="text-left font-medium">Union of India and anothers</div>
                                        <div className="text-center text-gray-400">---</div>
                                        <div className="text-left font-medium">Respondents</div>
                                    </div>

                                    <div className="text-center font-bold text-gray-900 mb-6">
                                        Affidavit on behalf of Maharashtra Pollution Control Board
                                    </div>

                                    <div className="space-y-6 text-justify">
                                        <p>
                                            I, Dilip Bhaskarrao Boralkar, aged about 51 years, Member Secretary of Maharashtra Pollution Control Board, having my office at Kalpataru Point, Sion, (E), Mumbai : 400 022 do hereby state on solemn affirmation as under :
                                        </p>

                                        <p>
                                            That, I have gone through the contents of the order passed by this Hon’ble Court on 5th of August, 2004 wherein the State Pollution Control Boards have been asked to see that, the brick kilns which are not using fly ash for mixing with clay shall not be allowed to operate. I say that, as per the provisions of the notification dated 14th of Setember, 1999 and 27th of August, 2003, the Regional Officers of the Board have identified the brick kilns in their respective areas which are not complying with the provisions of the said notification. I submit that, as per the information and record available in the Board, there are 4663 brick kilns which are in operation, out of which 3874 are not utilizing fly ash for mixing up with clay while manufacturing bricks. The regionwise information is given in Annexure-I.
                                        </p>

                                        <p>
                                            I say that, the Regional Officers of the Board have taken up the issue with the concerned District Magistrates, who are authorized under the law to grant mining lease / license to the brick kiln owners for excavating clay in their respective areas. The District Magistrates have been asked to cancel the mining lease / license of such brick kilns which are not utilizing fly ash for mixing with clay. It is, however, submitted that, so far the Board has not received adequate response from the District Magistrates in this regard. The Board is following up the matter with the District Administration.
                                        </p>

                                        <p>
                                            I submit that, the Regional Officers of the Board are issuing directions of closure to the non complying brick kilns in the State under the provisions of the Environment (Protection) Act, of 1986 and in compliance of the orders of this Hon’ble Court. The District Magistrates have once again been directed to ensure compliance of these directions and have also been conveyed the seriousness of the issue. I submit that, the Board through its Regional Officers is following up the matter to secure compliance of the orders of this Hon’ble Court. I further submit that, the Board is also taking efforts to see that more and more brick kilns comply with the provisions of the Fly Ash notification dated 14th September, 1999 and 27th August, 2003 issued under the Environment (Protection) Act, 1986.
                                        </p>

                                        <p>
                                            While on the subject, it is respectfully submitted that, the Board was initially constituted under the provisions of Water (Prevention & Control of Pollution) Act, 1974. However, during the last three decades the functions, duties and responsibilities of the Board have increased manifold. The Board has to implement several environmental legislations and the rules made thereunder which include rules on Hazardous Waste Management, Bio-medical Waste Management, Municipal Solid Waste Management, Hazardous Chemicals Rules, Battery Rules, Regulation of thin gauge plastic bags, implementation of CRZ notifications, Environmental Impact Assessment Notification besides compliance of various orders of the Hon’ble High Courts and Supreme Court of India. I submit that, the man power and infrastructure available with the Board is not commensurate with the requirements for added responsibilities as stated above, which at times results in delay in taking timely actions.
                                        </p>

                                        <p>
                                            I submit that, the Board has already initiated the process of institutional strengthening in terms of infrastructure and man power which includes computerization of the activities of the Board. This is in pursuance of the orders of the Hon’ble Supreme Court of India in the matter of WP (C) 657 / 1995 regarding management of hazardous wastes.
                                        </p>

                                        <p>
                                            I submit that, besides taking action of closure of defaulting brick kilns, the Board will also initiate the process of educating different stake holders and inform the importance of utilization of fly ash to the maximum possible extent in co-operation with the Thermal Power Plants in the state. I submit that, the main hurdle in implementation of the notification is the cost of transport of fly ash from the Thermal Power Plants to the end users i.e. brick kilns. The small and medium size brick kilns are not in a position to afford cost of transportation and loading / unloading cost of fly ash. This issue needs consideration by the MoEF.
                                        </p>

                                        <p>
                                            I reiterate that the Board is making all efforts to comply with the provisions of the notifications issued by Ministry of Environment & Forests, Govt. of India on utilization of fly ash and compliance of the orders of this Hon’ble Court.
                                        </p>
                                    </div>

                                    {/* Footer Signatures */}
                                    <div className="mt-12 pt-8 space-y-8 border-b border-gray-200 pb-12">
                                        <div className="text-left">
                                            <p className="font-semibold">Solemnly affirmed at Mumbai on</p>
                                            <p>24th September, 2004.</p>
                                        </div>

                                        <div className="text-right">
                                            <p className="font-bold">Deponent.</p>
                                            <p>(Dilip Bhaskarrao Boralkar)</p>
                                            <p className="font-medium">Member Secretary</p>
                                        </div>

                                        <div className="text-left mt-8 pt-4">
                                            <p className="font-semibold">Identified by me</p>
                                            <p>( A. B. Jain )</p>
                                            <p className="mt-2 text-gray-600">Advocate for Maharashtra Pollution Control Board.</p>
                                        </div>
                                    </div>

                                    {/* Annexure I Table */}
                                    <div className="mt-12">
                                        <div className="text-center mb-8 space-y-2">
                                            <h3 className="font-bold text-gray-900 uppercase">ANNEXURE - I</h3>
                                            <p className="font-semibold text-gray-800">Summary of Brick Manufacturers utilising fly ash in Maharashtra</p>
                                            <p className="text-sm text-gray-600">( With in 100 kms radius from Thermal Power Plants)</p>
                                            <p className="font-bold text-gray-800 uppercase mt-4">NAME OF REGION :- KALYAN</p>
                                            <p className="font-semibold text-gray-800">Industries Established on of before Decemeber 31, 1991</p>
                                        </div>

                                        <div className="overflow-x-auto">
                                            <div className="border border-gray-200 rounded-[24px] overflow-hidden">
                                                <table className="w-full border-collapse">
                                                    <thead>
                                                        <tr className="bg-gray-50 border-b border-gray-100">
                                                            <th className="py-4 px-4 text-left text-xs font-bold text-gray-700 border-r border-gray-100 align-top">Region</th>
                                                            <th className="py-4 px-4 text-left text-xs font-bold text-gray-700 border-r border-gray-100 align-top">District</th>
                                                            <th className="py-4 px-4 text-center text-xs font-bold text-gray-700 border-r border-gray-100 align-top">Total No. of brick Manufacturers</th>
                                                            <th className="py-4 px-4 text-center text-xs font-bold text-gray-700 border-r border-gray-100 align-top">No. of brick Manufacturers utilising fly ash</th>
                                                            <th className="py-4 px-4 text-center text-xs font-bold text-gray-700 border-r border-gray-100 align-top">No.of brick manufacturer not utilising fly ash</th>
                                                            <th className="py-4 px-4 text-center text-xs font-bold text-gray-700 border-r border-gray-100 align-top">No. of brick manufacturers recommended to District Collector for lease cancellation</th>
                                                            <th className="py-4 px-4 text-center text-xs font-bold text-gray-700 border-r border-gray-100 align-top">No.of lease / license canceled</th>
                                                            <th className="py-4 px-4 text-center text-xs font-bold text-gray-700 align-top">Remarks</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-gray-50">
                                                        {/* Kalyan & Thane */}
                                                        <tr className="hover:bg-gray-50/50">
                                                            <td className="py-3 px-4 text-xs font-medium text-gray-800 border-r border-gray-100 align-top">Kalyan & Thane</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 align-top">Thane</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">996</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">33</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">963</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">963</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">--</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 text-center align-top"></td>
                                                        </tr>

                                                        {/* Aurangabad */}
                                                        <tr className="hover:bg-gray-50/50">
                                                            <td rowSpan={5} className="py-3 px-4 text-xs font-medium text-gray-800 border-r border-gray-100 align-top bg-white">Aurangabad</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 align-top">Parbhani</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">265</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">0</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">265</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">265</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">--</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 text-center align-top"></td>
                                                        </tr>
                                                        <tr className="hover:bg-gray-50/50">
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 align-top">Beed</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">280</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">29</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">251</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">251</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top"></td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 text-center align-top"></td>
                                                        </tr>
                                                        <tr className="hover:bg-gray-50/50">
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 align-top">Osmanabad</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">52</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">0</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">52</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">52</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">--</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 text-center align-top"></td>
                                                        </tr>
                                                        <tr className="hover:bg-gray-50/50">
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 align-top">Nanded</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">16</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">0</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">16</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">16</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">--</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 text-center align-top"></td>
                                                        </tr>
                                                        <tr className="hover:bg-gray-50/50">
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 align-top">Latur</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">118</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">5</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">113</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">113</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">--</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 text-center align-top"></td>
                                                        </tr>

                                                        {/* Nagpur */}
                                                        <tr className="hover:bg-gray-50/50">
                                                            <td rowSpan={4} className="py-3 px-4 text-xs font-medium text-gray-800 border-r border-gray-100 align-top bg-white">Nagpur</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 align-top">Nagpur</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">133</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">0</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">133</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">133</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">--</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 text-center align-top"></td>
                                                        </tr>
                                                        <tr className="hover:bg-gray-50/50">
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 align-top">Wardha</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">257</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">160</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">97</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">97</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">--</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 text-center align-top"></td>
                                                        </tr>
                                                        <tr className="hover:bg-gray-50/50">
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 align-top">Bhandara</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">360</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">0</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">360</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">360</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">--</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 text-center align-top"></td>
                                                        </tr>
                                                        <tr className="hover:bg-gray-50/50">
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 align-top">Chandrapur</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">141</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">83</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">58</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">58</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">--</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 text-center align-top"></td>
                                                        </tr>

                                                        {/* Amravati */}
                                                        <tr className="hover:bg-gray-50/50">
                                                            <td rowSpan={3} className="py-3 px-4 text-xs font-medium text-gray-800 border-r border-gray-100 align-top bg-white">Amravati</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 align-top">Amravati</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">23</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">23</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">0</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">0</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">--</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 text-center align-top"></td>
                                                        </tr>
                                                        <tr className="hover:bg-gray-50/50">
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 align-top">Akola</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">195</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">195</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">0</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">0</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">--</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 text-center align-top"></td>
                                                        </tr>
                                                        <tr className="hover:bg-gray-50/50">
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 align-top">Buldhana</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">182</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">182</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">0</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">0</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">--</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 text-center align-top"></td>
                                                        </tr>

                                                        {/* Nashik */}
                                                        <tr className="hover:bg-gray-50/50">
                                                            <td rowSpan={3} className="py-3 px-4 text-xs font-medium text-gray-800 border-r border-gray-100 align-top bg-white">Nashik</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 align-top">Nashik</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">410</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">31</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">379</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">379</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">--</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 text-center align-top"></td>
                                                        </tr>
                                                        <tr className="hover:bg-gray-50/50">
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 align-top">Jalgaon</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">517</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">25</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">492</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">492</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">--</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 text-center align-top"></td>
                                                        </tr>
                                                        <tr className="hover:bg-gray-50/50">
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 align-top">Ahmednagar</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">323</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">23</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">300</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">300</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">--</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 text-center align-top"></td>
                                                        </tr>

                                                        {/* Raigad & Navi Mumbai */}
                                                        <tr className="hover:bg-gray-50/50">
                                                            <td className="py-3 px-4 text-xs font-medium text-gray-800 border-r border-gray-100 align-top">Raigad & Navi Mumbai</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 align-top">Raigad</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">395</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">0</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">395</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">395</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 text-center align-top">--</td>
                                                            <td className="py-3 px-4 text-xs text-gray-600 text-center align-top"></td>
                                                        </tr>

                                                        {/* Total */}
                                                        <tr className="bg-gray-50 font-bold">
                                                            <td className="py-3 px-4 text-xs text-gray-800 border-r border-gray-100 align-top">Total</td>
                                                            <td className="py-3 px-4 text-xs text-gray-800 border-r border-gray-100 align-top"></td>
                                                            <td className="py-3 px-4 text-xs text-gray-800 border-r border-gray-100 text-center align-top">4,663</td>
                                                            <td className="py-3 px-4 text-xs text-gray-800 border-r border-gray-100 text-center align-top">789</td>
                                                            <td className="py-3 px-4 text-xs text-gray-800 border-r border-gray-100 text-center align-top">3,874</td>
                                                            <td className="py-3 px-4 text-xs text-gray-800 border-r border-gray-100 text-center align-top">3,874</td>
                                                            <td className="py-3 px-4 text-xs text-gray-800 border-r border-gray-100 text-center align-top">--</td>
                                                            <td className="py-3 px-4 text-xs text-gray-800 text-center align-top"></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FlyAshUtilisation;
