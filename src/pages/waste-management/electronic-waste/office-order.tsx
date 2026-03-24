
import PageBanner from '../../../components/PageBanner';
import Sidebar from '../../../components/Sidebar';

const OfficeOrder = () => {
    return (
        <div className="min-h-screen bg-white">
            <PageBanner
                title="Electronic Waste"
            />

            <section className="w-full flex justify-center bg-white py-12">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Sidebar */}
                        <Sidebar activeItem="Waste Management" />

                        {/* Content */}
                        <div className="flex-1">
                            <h2 className="text-[24px] font-bold text-gray-900 mb-8 pb-4 border-b border-gray-200">
                                FORMATION OF EXPERT GROUP ON E-WASTE MANAGEMENT
                            </h2>

                            <div className="space-y-8 text-[15px] leading-7 text-gray-700">
                                {/* Preamble */}
                                <div>
                                    <h3 className="text-[18px] font-bold text-gray-900 mb-2">
                                        Preamble:
                                    </h3>
                                    <p className="text-justify">
                                        Mumbai is an economic capital of India and also a largest port city. There has been a very rapid growth in Information Technology (IT) Industry in Mumbai and Pune regions. Besides, there are also large number of other electronic and consumer durable manufacturers located in the industrial areas around Mumbai and Pune. The ports in the vicinity are also important gateways for the import of a variety of electronic goods in the country. As a result of these activities and the large scale consumption of electronic goods and consumer durables in this region as well as the fast expanding in cities viz. Nagpur, Aurangabad, Nashik, Kolhapur and others, large quantities of electronic and electrical equipment e-waste is generated in the State of Maharashtra and particularly in Mumbai and Pune belt. Currently there are no regulations to manage this e-waste nor there are any scientifically designed e-waste facilities for the collection, treatment, recycling, reuse and final disposal of the generated e-waste from various sources. MPCB is already seized of these issues and had initiated discussions with the agencies like EMPA ( Switzerland) GTZ and AESM on how to take care of this waste in environmentally compatible manner. MPCB has further decided to initiate a pilot study on the Rapid assessment of e-waste generation in Mumbai and Pune regions to begin with. UNEP has also shown keen interest in the study proposed by MPCB. In order to discuss these issues further, MPCB held meetings with experts of EMPA and UNEP in May, 2005 and September, 2005, respectively. MPCB has prepared draft Terms of Reference of the proposed study. MPCB held a meeting on 22.9.2005 with the experts on e-waste and industries and Manufacturers Association of the Information Technology and Research Institutes.
                                    </p>
                                </div>

                                {/* Order */}
                                <div>
                                    <h3 className="text-[18px] font-bold text-gray-900 mb-2">
                                        Order:
                                    </h3>
                                    <p className="text-justify mb-4">
                                        Since it was decided in the above meeting to form an Expert Group to guide proposed study and also to formulate the Regulations for the e-waste Management in Maharashtra, MPCB hereby constitutes the Group consisting of the following experts and NGO’s:
                                    </p>

                                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                                        <ul className="space-y-3">
                                            <li>1) Dr. D.B. Boralkar, Member Secretary, MPCB - Chairman</li>
                                            <li>2) Mr. Vinnie Mehta, President, MAIT, N. Delhi - Member</li>
                                            <li>3) Shri Kishor Wankhede, Toxic Links, Mumbai - Member</li>
                                            <li>4) Shri B.K.Soni, M.D., Infotrek Syscom Ltd. - Member</li>
                                            <li>5) Shri Markandeya, Chief Engg. (SW), MCGM, Mumbai - Member</li>
                                            <li>6) A representative from CPCB, Delhi - Member</li>
                                            <li>7) Dr. Rakesh Kumar, Dy. Director, NEERI, Mumbai - Member</li>
                                            <li>8) Dr. V.K. Sharma, Prof., IGIDR, Mumbai - Member</li>
                                            <li>9) Mr. Sandeep Tandon, Mumbai - Member</li>
                                            <li>10) Ms. Lalit a Vaidyanathan, P.T.I., - Member</li>
                                            <li>11) Ms. Nidhi Jhamwal, CSE N.Delhi - Member</li>
                                            <li>12) Ms. Deepali Khetriwal, representative of EMPA - Member</li>
                                            <li>13) Mr. P. Venugopal, Director, STPI, Navi Mumbai - Member</li>
                                            <li>14) A Representative from UNEP, Delhi - Member</li>
                                            <li>16) Dr. Ajay Deshpande, R.O. I/c. PCI-II, MPCB - Convener</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Terms of Reference */}
                                <div>
                                    <p className="text-justify mb-4 font-semibold">
                                        The Terms of Reference (TOR) of the Expert Group is as follows:
                                    </p>
                                    <ul className="list-disc pl-5 space-y-2 text-justify">
                                        <li>Finalize the protocols for the study and to assess the cost component of the study.</li>
                                        <li>Study the legislative requirement within a local State Govt. needed for setting up of the facility for recycling and collection system in WEEE.</li>
                                        <li>Monitor the progress of the e-waste assessment study</li>
                                        <li>Examine the issues related to development of recycling facility for e-waste in Maharashtra</li>
                                        <li>Develop for Private Partner Project (PPP) proposal with the help of appropriate institutions</li>
                                        <li>Committee shall meet as frequently as may be required to accomplish the above tasks</li>
                                        <li>TA/DA and honorarium as per rules shall be paid to the private members of the expert group.</li>
                                    </ul>
                                </div>

                                {/* Footer */}
                                <div className="pt-8 border-t border-gray-100 mt-8">
                                    <p className="mb-8">This order comes into force with immediate effect.</p>
                                    <div className="flex justify-end">
                                        <div className="text-center">
                                            <p className="font-bold">(D.B. Boralkar)</p>
                                            <p>Member Secretary</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Copy To Section */}
                                <div className="mt-8 space-y-6">
                                    <div>
                                        <p className="font-bold text-gray-900 mb-2">Copy submitted to :</p>
                                        <p className="text-justify">
                                            Member Secretary, Central Pollution Control Board, Parivesh Bhavan, East Arjun Nagar, New Delhi-110032- It is requested to nominate your representative for above committee.
                                        </p>
                                    </div>

                                    <div>
                                        <p className="font-bold text-gray-900 mb-2">Copy to:</p>
                                        <ul className="space-y-2 text-justify">
                                            <li>1) Mr. Vinnie Mehta, President, MAIT, N. Delhi</li>
                                            <li>2) Shri Kishor Wankhede, Toxic Links, Mumbai</li>
                                            <li>3) Shri B.K.Soni, M.D., Infotrek Syscom Ltd.</li>
                                            <li>4) Shri Markandeya, Chief Engg. (SW), MCGM, Mumbai</li>
                                            <li>5) A representative from CPCB, Delhi</li>
                                            <li>6) Dr. Rakesh Kumar, Dy. Director, NEERI, Mumbai</li>
                                            <li>7) Dr. V.K. Sharma, Prof., IGIDR, Mumbai</li>
                                            <li>8) Mr. Sandeep Tandon, Mumbai</li>
                                            <li>9) Ms. Lalit a Vaidyanathan, P.T.I.,</li>
                                            <li>10) Ms. Nidhi Jhamwal, CSE N.Delhi</li>
                                            <li>11) Ms. Deepali Khetriwal, representative of EMPA</li>
                                            <li>12) Mr. P. Venugopal, Director, STPI, Navi Mumbai</li>
                                            <li>13) A Representative from UNEP, Delhi</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <p className="font-bold text-gray-900 mb-1">Copy to:</p>
                                        <p className="text-justify">
                                            WPAE/PSO/ SLO (J)/SLO (D)/Dr. S.B. Katoley, T.A /R.O(H.Q)/ R.O &I/C-PCI-II/ R.O(P&P)/Ex.Engg.(H.Q)/CAO/AO
                                        </p>
                                    </div>

                                    <div>
                                        <p className="font-bold text-gray-900 mb-1">Copy to:</p>
                                        <p className="text-justify">
                                            PS to Member Secretary, MPCB, Mumbai.
                                        </p>
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

export default OfficeOrder;
