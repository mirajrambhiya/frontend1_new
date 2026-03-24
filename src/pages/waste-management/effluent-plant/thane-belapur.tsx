import PageBanner from '../../../components/PageBanner';
import Sidebar from '../../../components/Sidebar';
import plant from "/assets/plant.jpeg"

const standingorders = "/assets/standingorders.svg";

const ThaneBelapur = () => {
    return (
        <div className="font-family-helvetica min-h-screen bg-white">
            <PageBanner title="Waste Management" image={standingorders} />

            <section className="w-full flex justify-center bg-white py-12">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Sidebar */}
                        <Sidebar activeItem="Common Effluent Treatment Plant" />

                        {/* Content */}
                        <div className="flex-1">
                            <div className="rounded-[24px] p-8 min-h-[400px] border border-gray-100 shadow-sm bg-white relative">
                                <h1 className="text-[24px] font-bold text-gray-900 uppercase mb-8 border-b border-gray-200 pb-4">
                                    THANE BELAPUR CETP - A SUCCESS STORY
                                </h1>

                                <div className="space-y-8">
                                    {/* Membership Details */}
                                    <div>
                                        <h3 className="text-[16px] font-bold text-gray-800 mb-4">CETP Membership Details</h3>
                                        <div className="border border-gray-200 rounded-lg overflow-hidden">
                                            <table className="w-full text-[14px]">
                                                <tbody className="divide-y divide-gray-200">
                                                    <tr className="bg-gray-50/50">
                                                        <td className="px-4 py-3 text-gray-600 font-medium border-r border-gray-200 w-2/3">Small Scale User Members</td>
                                                        <td className="px-4 py-3 text-gray-800 font-semibold">400 No.s</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-4 py-3 text-gray-600 font-medium border-r border-gray-200">Medium / Large Scale User Members</td>
                                                        <td className="px-4 py-3 text-gray-800 font-semibold">55 No.s</td>
                                                    </tr>
                                                    <tr className="bg-gray-50/50">
                                                        <td className="px-4 py-3 text-gray-600 font-medium border-r border-gray-200">Total Cetp Members</td>
                                                        <td className="px-4 py-3 text-gray-800 font-semibold">455 No.s</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-4 py-3 text-gray-600 font-medium border-r border-gray-200">Non User Members (Associate Members)</td>
                                                        <td className="px-4 py-3 text-gray-800 font-semibold">1905 No.s</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    {/* Details of CETP */}
                                    <div>
                                        <h3 className="text-[16px] font-bold text-gray-800 mb-4">Details of CETP</h3>
                                        <div className="space-y-4 text-[14px]">
                                            <div>
                                                <span className="text-gray-600">Plant Inauguration November 1997</span>
                                            </div>
                                            <div>
                                                <div className="font-bold text-gray-800 mb-2">Project Design Consultant:</div>
                                                <div className="pl-4 text-gray-600">M/s Environmental Engineering Consultants, Mumbai</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Turnkey Contractor */}
                                    <div>
                                        <h3 className="text-[16px] font-bold text-gray-800 mb-2">Turnkey Contractor:</h3>
                                        <div className="pl-4 text-[14px] text-gray-600">M/s Sacede India Ltd., Chennai</div>
                                    </div>

                                    {/* Project Cost */}
                                    <div>
                                        <h3 className="text-[16px] font-bold text-gray-800 mb-1">Project Cost:</h3>
                                        <div className="text-[14px] text-gray-600 mb-4">Financial Contribution:</div>

                                        <div className="border border-gray-200 rounded-lg overflow-hidden">
                                            <table className="w-full text-[14px]">
                                                <tbody className="divide-y divide-gray-200">
                                                    <tr className="bg-gray-50/50">
                                                        <td className="px-4 py-3 text-gray-600 font-bold border-r border-gray-200 w-2/3">Loan from Financial Institution (IDBI)</td>
                                                        <td className="px-4 py-3 text-gray-800">Rs. 140 lacs</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-4 py-3 text-gray-600 font-bold border-r border-gray-200">Subsidy from State & Central Govt.</td>
                                                        <td className="px-4 py-3 text-gray-800">Rs. 100 lacs</td>
                                                    </tr>
                                                    <tr className="bg-gray-50/50">
                                                        <td className="px-4 py-3 text-gray-600 font-bold border-r border-gray-200">Contribution from User Members</td>
                                                        <td className="px-4 py-3 text-gray-800">Rs. 160 lacs</td>
                                                    </tr>
                                                    <tr className="bg-gray-100">
                                                        <td className="px-4 py-3 text-gray-800 font-bold border-r border-gray-200">Total</td>
                                                        <td className="px-4 py-3 text-gray-800 font-bold">Rs. 400 lacs</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <img src={plant} alt="" />
                                </div>

                                {/* Reasons For Success */}
                                <div className="mt-8">
                                    <h3 className="text-[16px] font-bold text-gray-800 mb-4">Reasons For Success</h3>
                                    <ul className="list-disc pl-5 space-y-2 text-[14px] text-gray-600">
                                        <li>Predictive And Periodic Maintenance Of All Equipments</li>
                                        <li>Dilution Effect</li>
                                        <li>Support And Discipline By User Members</li>
                                    </ul>
                                </div>

                                {/* Salient Features Of Success */}
                                <div className="mt-8">
                                    <h3 className="text-[16px] font-bold text-gray-800 mb-4">Salient Features Of Success</h3>
                                    <ul className="list-disc pl-5 space-y-2 text-[14px] text-gray-600">
                                        <li>Commitment And Involvement Of Board Directors</li>
                                        <li>Technically Qualified And Well Experienced Staff</li>
                                        <li>
                                            Upgradation Of Skills And Knowledge Of Staff
                                            <ul className="list-[circle] pl-5 mt-2 space-y-1">
                                                <li>Participation In Training Programmes, Workshops, Conferences Etc.</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>

                                {/* Partners – Success Of CETP */}
                                <div className="mt-8">
                                    <h3 className="text-[16px] font-bold text-gray-800 mb-4">Partners – Success Of CETP</h3>
                                    <ul className="list-disc pl-5 space-y-2 text-[14px] text-gray-600">
                                        <li>
                                            Technical & Financial Contributions
                                            <ul className="list-[circle] pl-5 mt-2 space-y-1">
                                                <li>From MOEF, CPCB, MIDC & MPCB</li>
                                            </ul>
                                        </li>
                                        <li>Mandatory Membership – MPCB</li>
                                        <li>
                                            Enforcement Of Tripartiate Agreement
                                            <ul className="list-[circle] pl-5 mt-2 space-y-1">
                                                <li>With CETP User Members – MIDC</li>
                                            </ul>
                                        </li>
                                        <li>Economical And Simplified Charging Pattern</li>
                                        <li>Monthly CETP Collection Through MIDC</li>
                                        <li>Selection And Involvement Of Professional Operating Agencies</li>
                                    </ul>
                                </div>

                                {/* Development Plans */}
                                <div className="mt-8">
                                    <h3 className="text-[16px] font-bold text-gray-800 mb-4">Development Plans</h3>
                                    <ul className="list-disc pl-5 space-y-2 text-[14px] text-gray-600">
                                        <li>Pilot Plant Operational Studies To Reuse / Recycle Treated Effluent Through Tertiary Treatment</li>
                                        <li>Pilot Plant For Anaerobic Treatment Technology To Tackle The Effluent Streams Of High Organic Load</li>
                                        <li>Installation Of Pilot Plant For Root Zone Technology By Neeri</li>
                                    </ul>
                                </div>

                                {/* Support To Society */}
                                <div className="mt-8">
                                    <h3 className="text-[16px] font-bold text-gray-800 mb-4">Support To Society</h3>
                                    <ul className="list-disc pl-5 space-y-2 text-[14px] text-gray-600">
                                        <li>Conducting In Plant Training Programmes For Various Academic Institutions</li>
                                        <li>Improving Awareness Of Environment Among Students And Professionals From All Disciplines</li>
                                        <li>Well Equipped Laboratory Facilities Made Available To Student Community</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ThaneBelapur;
