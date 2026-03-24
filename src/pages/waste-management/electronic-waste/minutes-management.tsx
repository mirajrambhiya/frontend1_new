
import PageBanner from '../../../components/PageBanner';
import Sidebar from '../../../components/Sidebar';

interface Attendee {
    name: string;
    designation: string;
}

const MinutesManagement = () => {
    const attendees: Attendee[] = [
        { name: "Dr. D. B. Boralkar", designation: "Member Secretary (MPCB)" },
        { name: "Dr. S.B.Katoley", designation: "Tech. Adviser (MPCB)" },
        { name: "Mr. Rolf Widmer", designation: "Project Manager, EMPA" },
        { name: "Dr. Umesh S. Kulkarni", designation: "Fine Envirotech Engineers" },
        { name: "Ms. Deepali Sinha", designation: "EMPA e-Waste Project Team Member" },
        { name: "Mr. Ashok Saraf", designation: "Executive Director (Sarex Overseas)" },
    ];

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
                                Minutes of meeting to discuss Management of Electronic Wastes held on 09/05/05 in the chamber of Member Secretary, MPCB, Mumbai.
                            </h2>

                            {/* Attendees Table */}
                            <div className="mb-8 overflow-hidden rounded-xl border border-gray-200 shadow-sm">
                                <table className="w-full border-collapse bg-white">
                                    <tbody>
                                        {attendees.map((attendee, index) => (
                                            <tr key={index} className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50/50 transition-colors">
                                                <td className="p-4 text-[15px] font-medium text-gray-700 w-1/2 border-r border-gray-100">
                                                    {attendee.name}
                                                </td>
                                                <td className="p-4 text-[15px] text-gray-600 w-1/2">
                                                    {attendee.designation}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Meeting Minutes Content */}
                            <div className="space-y-6 text-[15px] leading-7 text-gray-700 text-justify">
                                <p>
                                    Dr. D. B. Boralkar welcomed Mr. Rolf and others and mentioned about the opportunities available in Mumbai –Pune industrial belt on e-waste collection, recycling, reuse etc. He also felt that after the January meeting, the work on the project has progressed very slowly which is not in the interest of e-waste management in Mumbai and adjoining areas. Mr. Rolf Widmer informed about the developments in similar project work in Bangalore and explained the various steps taken by the KSPCB (Karnataka State Pollution Control Board) He also informed that he will be submitting the proposal to Swiss Government (www.seco-cooperation.ch) for the third phase of the Swiss support programme "Knowledge Partnerships in e-Waste Recycling".
                                </p>

                                <p>
                                    Dr. D. B. Boralkar mentioned about the keenness shown Additional Commissioner, Municipal Corporation of Greater Mumbai to have in place a system to manage the e-waste and resolution adopted by the Standing committee of MCGM in this regard. Dr. Katoley mentioned about the situation in Mumbai and nearby areas and the studies initiated by the post graduate students in Mumbai on the current scenario on e-waste management. He also mentioned about the illegal purchase of the e-waste by Big Bazaar in Mumbai by issuing advertisements in the newspapers. MPCB had tried to get information from the Big Bazaar on the quantity of e-waste purchased by them and its disposal. However, it was not possible to get a feedback from the Big Bazaar in spite of the efforts. The matter is still being followed up to track down the waste accumulation and disposal by the above agency.
                                </p>

                                <p>
                                    Dr. D. B. Boralkar felt that inventorisation of e-waste generated in the city was essential so as to explore the possibilities of setting up of a facility for this waste management. Several concessions are available for this industry including land on nominal charges and it could thus be a very lucrative business. He further mentioned that a separate legislation is needed for e-waste management. He is also working on the task to prepare such a legislation as suggested by Chairman, CPCB. Dr Boralkar is also a Member of the special committee appointed by CPCB on e-waste management.
                                </p>

                                <p>
                                    Dr. Umesh S. Kulkarni showed his willingness to get associated with the proposed study on e-wastes in Mumbai with Ms. Deepali Sinha. He further mentioned that the study can begin within a month's time from now, after completing the preliminaries. Mr. Ashok Saraf of Sarex Overseas, who was present at the time of meeting, felt that the industries may come forward to invest in the e-waste projects once they are sure of the returns. He suggested that a detailed feasibility report may therefore be prepared immediately. He assured full support from the industry.
                                </p>

                                <p>
                                    Mr. Rolf Widmer explained the scope of the proposed e-waste studies and the methodology to be adopted for the same. He explained the existing situation regarding e-waste management in Bangalore. He also explained about Extended Producer Responsibility (EPR) and the importance of involvement of producers associations, MAIT, etc. in the proposed feasibility study from the beginning. Dr. D. B. Boralkar explained the need of actual field survey, tracking of e- waste, existing disposal facility etc. He was of the opinion that after setting up a proper facility even if 10- 20 % electronic waste is received, it will be sufficient quantity for recycling facility for its techno-economic feasibility. Mr. Rolf Widmer suggested that the study could begin from June 1 st 2005. Dr. Umesh S. Kulkarni expressed his readiness to initiate the studies as may be decided.. Dr. D. B. Boralkar further suggested that an active NGO should be involved in the proposed study.
                                </p>

                                <p>
                                    Mr. Rolf Widmer further explained the procedure for carrying out feasibility study and mentioned that the detailed term of references (TOR) for the same are being currently prepared by the Indo-Swiss-German e-Waste Project and circulated to all concerned to elucidate their views. Dr. Umesh S. Kulkarni offered to prepare the draft TORs at the earliest and send these to all concerned, so that TORs are finalized expeditiously. Ms. Deepali Sinha desired to meet some of the metal processors in and around Mumbai to get first hand information on the usage of the materials derived from smelting of the e-wastes as raw materials by them. Dr. Katoley suggested her to identify such units so that necessary help can be rendered by MPCB.
                                </p>

                                <p>
                                    The modalities of funding were also discussed by Dr. D. B. Boralkar and Mr. Rolf Widmer for carrying out the feasibility study. Mr. Rolf Widmer mentioned that approx US$ 10,000 were initially budgeted for so called "Rapid City eWaste Assessments" and that the Indo – German ASEM Programme has planned to conduct such assessments in 4 major Indian cities - Mumbai is one of them. Within ASEM the HAWA Project (Hazardous Waste) in Bangalore is appointed to manage the operational part of the e-waste activities. Funds might be readily available for the studies. However, Dr. D. B. Boralkar felt that this line of funding may not be sufficient and minimum US$ 15,000 – 20,000 should be provided for the study. Mr.Rolf Widmer assured that necessary action shall be taken in this regard. Dr. D. B. Boralkar mentioned that a letter from ASEM/HAWA could be sent to MPCB about the confirmation of funds for this study. Additional funding required to fill up the gap shall be provided by MPCB up to the extent of Rs. 2.5 lakhs (About $ US 5000). With the sanction of funds from ASEM the work on the project can be taken up immediately. Mr. Rolf Widmer assured that he will discuss these issues in his coming meetings at ASEM/HAWA and initiate necessary actions in this regard as suggested by Dr. Boralkar.
                                </p>

                                <p className="font-semibold italic pt-4">
                                    The meeting ended with a vote of thanks to the Chair.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MinutesManagement;
