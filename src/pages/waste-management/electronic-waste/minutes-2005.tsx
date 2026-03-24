
import PageBanner from '../../../components/PageBanner';
import Sidebar from '../../../components/Sidebar';

const Minutes2005 = () => {
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
                            <h2 className="text-[24px] font-bold text-gray-900 mb-2 border-b-0">
                                MINUTES OF MEETING HELD ON 22.09.2005
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 pb-4 border-b border-gray-200">
                                Minutes of E-waste Meeting held at MPCB on 22nd September 2005
                            </p>

                            <div className="space-y-8 text-[15px] leading-7 text-gray-700">
                                {/* Details Section */}
                                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                                    <div className="mb-4">
                                        <span className="font-bold text-gray-900">Chair:</span> Dr. D. B. Boralkar, Member Secretary (MPCB)
                                    </div>

                                    <div>
                                        <div className="font-bold text-gray-900 mb-2">Speakers:</div>
                                        <ul className="list-disc pl-5 space-y-1">
                                            <li>Dr. D. B. Boralkar, MPCB</li>
                                            <li>Mr. Bas de Leew & Mr. Vu Anh Tuan, UNEP, Paris</li>
                                            <li>Mr. Rolf Widmer, EMPA, St.Gallen</li>
                                            <li>Mr. Rajneesh Sarin, IRG, Delhi</li>
                                            <li>Mr. Vinnie Mehta, MAIT, Delhi</li>
                                        </ul>
                                    </div>

                                    <div className="mt-4">
                                        <span className="font-bold text-gray-900">Participants:</span> List enclosed
                                    </div>
                                </div>

                                <div className="font-semibold text-center py-2 text-gray-800 bg-blue-50/50 rounded-lg">
                                    Opening welcome remarks by Dr. Boralkar.
                                </div>

                                {/* Dr. Boralkar Presentation */}
                                <div>
                                    <h3 className="text-[18px] font-bold text-gray-800 mb-4 text-[#0085E2]">
                                        Dr. Boralkar : Presentation on perspectives of e-waste management in Maharashtra
                                    </h3>
                                    <div className="space-y-4 text-justify">
                                        <p>
                                            Problem of e-waste is at doorstep and it is the right time to design a system to properly collect and recycle e-waste according to EC directive, 12 categories of hazardous e-waste. Per se, the items are not hazardous, but after its end use and if not properly handled, it can become hazardous. Therefore it is important that proper treatment is in place. Mainly components which contain lead, cadmium, brominated flame retardants, CRT's etc.
                                        </p>
                                        <p>
                                            E-waste is being recycled in India and other south east asian countries resulting in health hazards for workers and environment. Eg. CRT breaking resulting in injuries from cuts, acids used for removal of heavy metals and shredding, burning etc causing respiratory problems.
                                        </p>
                                        <p>
                                            Indian scenario – expected growth rate of PC is 60-70% (according to MAIT data). Manufacturing capacity has increased from less than 20,000 in 1991 to more than 1 million now.
                                        </p>
                                        <p>
                                            Pollution problems associated with backyard smelting using crude processes resulting in fugitive emissions and slag containing heavy metals.
                                        </p>
                                        <p>
                                            Study by BAN (Basel Action Network) and Toxics Link on India, China and Pakistan shows large imports of e-waste. Exports from developed countries mainly due to cost and limited capacity. Despite China's ban on e-waste imports, large quantities imported and recycled using crude techniques.
                                        </p>
                                        <p>
                                            In India, as per 1989 Hazardous Waste Rules, e-waste not covered unless proved to have higher concentration of certain substances. PCBs and CRT would always exceed these parameters, therefore there are several grey areas that need to be addressed. In Austria, definitions are clear. Basel Convention has WEEE assemblies in A1180 and mirror entry in B1110, mainly on concerns of mercury, lead and cadmium.
                                        </p>
                                        <p>
                                            Mumbai municipal corporation is already in process of improving solid waste management to collect and dispose in a scientific manner.
                                        </p>
                                        <p>
                                            MIDC (Maharashtra Industrial Development Corporation) concessions for investment in waste management infrastructure &gt;&gt; land and subsidy. MPCB committed to providing 5% capital subsidy for facility.
                                        </p>
                                        <p>
                                            MPCB decision to do a rapid assessment of the Mumbai region. IRG+FEE as local partners proposed to conduct study. Toxics Link would be involved to bring transparency. MAIT would be involved in providing the industry perspective. UNEP has shown an interest and is willing to support the study. EMPA and CPCB+ASEM would also provide technical guidance.
                                        </p>
                                    </div>
                                </div>

                                {/* UNEP Presentation */}
                                <div>
                                    <h3 className="text-[18px] font-bold text-gray-800 mb-4 text-[#0085E2]">
                                        Bas de Leew & Vu Anh Tuan, UNEP: Environment and e-waste in India
                                    </h3>
                                    <div className="space-y-4 text-justify">
                                        <p>
                                            UNEP is leading a global programme on sustainable consumption and production in a broad 10 year framework, working with governments and all regions to move away from throw-away society to a more life cycle pattern.
                                        </p>
                                        <p>
                                            E-waste has environmental, economic and social challenges. For e-waste project, UNEP to join hands with already active communities, take lessons from demonstration projects to other cities in India, Asia etc.
                                        </p>
                                        <p>
                                            Objectives of project: reduce environmental and health impact due to improper recycling of e-waste and improve income generating opportunities, specially in the informal recycling sector.
                                        </p>
                                        <p>
                                            3 levels of objectives: local, national and regional: demonstration projects locally, national level policy and knowledge transfer of experiences and lessons regionally.
                                        </p>
                                    </div>
                                </div>

                                {/* Rolf Widmer Presentation */}
                                <div>
                                    <h3 className="text-[18px] font-bold text-gray-800 mb-4 text-[#0085E2]">
                                        Rolf Widmer, EMPA: Indo-Swiss-German e-waste initiative: Experiences of Bangalore and suggestions for Mumbai
                                    </h3>
                                    <div className="space-y-4 text-justify">
                                        <p>
                                            e-waste is an industrial problem solved by individual people
                                        </p>
                                        <p>
                                            brief introduction to seco global e-waste project: started in 2003, to continue till 2008.
                                        </p>
                                        <p>
                                            brief about indo-german-swiss initiative: with MOEF and ASEM-HAWA
                                        </p>
                                        <p>
                                            Activities under the aegis of the project in Bangalore: WEEE baseline study to know much waste is there now and will be generated in the future– rapid assessment study going on. E-Waste Agency (EWA) launched– formal recycler given approval by KSPCB to start trial run – coordination workshop with informal sector scheduled for October 05.
                                        </p>
                                        <p>
                                            EWA &gt;&gt; no legal framework so far. Set up because of the will of the IT industry to form a voluntary body to meet the needs of the industry to dispose their waste responsibly. To coordinate industries and develop a charter to define and regulate WEEE flows.
                                        </p>
                                        <p>
                                            Suggestions for Mumbai: Use existing experience from Bangalore –additional areas such as imports are unique to Mumbai- form similar industry lead body and rapid assessment simultaneously.
                                        </p>
                                        <p>
                                            3 ways: high tech, low tech and medium tech
                                        </p>
                                    </div>
                                </div>

                                {/* Rajneesh Sareen Presentation */}
                                <div>
                                    <h3 className="text-[18px] font-bold text-gray-800 mb-4 text-[#0085E2]">
                                        Rajneesh Sareen, IRG: Conducting a rapid e-waste assessment in Mumbai
                                    </h3>
                                    <div className="space-y-4 text-justify">
                                        <p>chronological events leading to initiation of Mumbai study</p>
                                        <p>Delhi study findings showing e-waste trade chain</p>
                                        <p>National level study WEEE generation highest in Maharashtra and Mumbai.</p>
                                    </div>
                                </div>

                                {/* Vinnie Mehta Presentation */}
                                <div>
                                    <h3 className="text-[18px] font-bold text-gray-800 mb-4 text-[#0085E2]">
                                        Vinnie Mehta, MAIT: Industry perspectives on WEEE
                                    </h3>
                                    <div className="space-y-4 text-justify">
                                        <p>
                                            industry recognizes e-waste as an emerging large challenge and would definitely like to support e-waste initiative in Mumbai
                                        </p>
                                        <p>
                                            have been involved with EMPA in understanding this issue for the past 2 years and have moved from initial resistance towards collaboration
                                        </p>
                                        <p>
                                            Assured of all possible cooperation from association and industry
                                        </p>
                                        <p>
                                            Open to requirements and suggestions for further involvement
                                        </p>
                                    </div>
                                </div>

                                {/* Q&A Open Discussion */}
                                <div>
                                    <h3 className="text-[18px] font-bold text-gray-800 mb-4 text-[#0085E2]">
                                        Q&A Open Discussion
                                    </h3>
                                    <div className="space-y-4 text-justify">
                                        <p>
                                            <span className="font-bold text-gray-900">Rakesh:</span> Area of study should include Pune as well
                                        </p>
                                        <p>
                                            <span className="font-bold text-gray-900">Deole/ Nandushekhar:</span> first infrastructure should be in place before setting up rules. Example of batteries where the rule exists but is difficult to implement
                                        </p>
                                        <p>
                                            <span className="font-bold text-gray-900">Mr. Nair:</span> Existing authorized recyclers to be identified.
                                        </p>
                                        <p>
                                            <span className="font-bold text-gray-900">Mr. Markandey:</span> explore mandatory take-back by manufacturers.
                                        </p>
                                        <p>
                                            <span className="font-bold text-gray-900">Dr. Boralkar:</span> Example of Switzerland where ARF (Advanced Recycling Fees) charged on buying a product which goes to SWICO to ensure proper recycling of e-waste.
                                        </p>
                                        <p>
                                            <span className="font-bold text-gray-900">Mr. Vinnie Mehta:</span> collaborative campaign to sensitise users. Consumers should pay for recycling of electronic goods.
                                        </p>
                                        <p>
                                            <span className="font-bold text-gray-900">Dr. Boralkar:</span> People willing to pay for better services. To create win win situation, to attract the people to make the payments, confidence building is necessary.
                                        </p>
                                        <p>
                                            <span className="font-bold text-gray-900">Wankhede:</span> current collection system is efficient because nothing that comes out of the household goes into the landfills. Build capacity of existing disposal system.
                                        </p>
                                        <p>
                                            <span className="font-bold text-gray-900">Rakesh:</span> manufacturers should make recyclable components that can extend the life of goods.
                                        </p>
                                        <p>
                                            <span className="font-bold text-gray-900">Mahesh:</span> Share good details of the China model with the entrepreneurs.
                                        </p>
                                    </div>
                                </div>

                                {/* Closing Arguments */}
                                <div>
                                    <h3 className="text-[18px] font-bold text-gray-800 mb-4 text-[#0085E2]">
                                        Dr.Boralkar: Closing arguments and proposal for way forward
                                    </h3>
                                    <div className="space-y-4 text-justify">
                                        <p>
                                            urged that everyone agrees and supports MPCB initiative for the rapid assessment for e-waste. Setting up of proper collection system for e-waste. Will be fully supported by government and industry.
                                        </p>
                                        <p>
                                            proposed that an expert group be set up to steer and guide the initiative. Suggested members: MAIT (as association) + 3 memebers, Toxics Link (NGO), MCGM, academic institute (IGIDR/NEERI), EMPA (Deepali), Representative of media.
                                        </p>
                                        <p>
                                            Meeting to be scheduled in 15 days.
                                        </p>
                                    </div>
                                </div>

                                {/* TOR for Expert Group */}
                                <div>
                                    <h3 className="text-[18px] font-bold text-gray-800 mb-4 text-[#0085E2]">
                                        TOR for expert group:
                                    </h3>
                                    <ul className="list-disc pl-5 space-y-2 text-justify">
                                        <li>finalise protocol for study proposed by IRG and assess cost.</li>
                                        <li>Study legislative requirements within local and state government powers that are needed to set up facility for recycling and collection system</li>
                                        <li>Develop for PPP project proposal (IGIDR, CRISIL etc)</li>
                                    </ul>
                                </div>

                                {/* MPCB Action Items */}
                                <div>
                                    <h3 className="text-[18px] font-bold text-gray-800 mb-4 text-[#0085E2]">
                                        Action Items
                                    </h3>
                                    <ul className="list-disc pl-5 space-y-2 text-justify">
                                        <li>MPCB to assess authorized recyclers and update notified technology requirements</li>
                                        <li>Collection centres and buy-back – study municipal laws eg. Construction and demolition waste</li>
                                        <li>MPCB to send formal request to UNEP with technical details regarding timeframe/ budgetary requirements for assessment and for external short term consultant for the project</li>
                                    </ul>
                                </div>

                                {/* Final Remarks */}
                                <div>
                                    <p className="text-justify mb-4">
                                        <span className="font-bold text-gray-900">Dr. Boralkar:</span> Funding agencies such as ADB and WB are ready to support such projects. Foreign investors have also shown interest in setting up facility.
                                    </p>
                                    <div className="font-semibold italic pt-4 text-center text-gray-700 bg-gray-50 p-4 rounded-lg border border-gray-100">
                                        The meeting ended with a note of thanks proposed by Dr. Katoley to the Chair and the speakers.
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

export default Minutes2005;
