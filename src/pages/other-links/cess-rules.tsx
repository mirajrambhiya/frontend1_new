import { useState } from 'react';
import DocumentCard from '../../components/DocumentCard';

const standingorders = "/assets/standingorders.svg";

// Sidebar tabs
const sidebarTabs = [
    "Cess",
    "Cess Act",
    "Schedule - 2",
    "Application Form - 1",
    "Application Form - 2"
];

function CessRules() {
    const [selectedTab, setSelectedTab] = useState(sidebarTabs[0]);

    const handleTabClick = (tab: string) => {
        setSelectedTab(tab);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="font-family-helvetica">
            {/* Top Banner Section */}
            <section className="w-full flex justify-center bg-white">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="relative w-full h-[200px] md:h-[250px] lg:h-[280px] rounded-t-[30px] md:rounded-t-[40px] lg:rounded-t-[48px] overflow-hidden">
                        <div
                            className="absolute inset-0 z-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${standingorders})` }}
                        />
                        <div
                            className="absolute inset-0 z-10 bg-cover bg-center blur-sm scale-105"
                            style={{
                                backgroundImage: `url(${standingorders})`,
                                WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 70%)',
                                maskImage: 'linear-gradient(to bottom, black 0%, transparent 70%)'
                            }}
                        />
                        <div className="absolute inset-0 z-20 bg-linear-to-b from-[#00A3FF]/30 via-[#00A3FF]/60 to-white" />

                        <div className="relative z-30 flex flex-col items-center justify-center h-full text-center px-4 md:px-6 mt-[-20px] md:mt-[-30px]">
                            <h1 className="text-[28px] md:text-[36px] lg:text-[40px] font-bold text-[#000000] tracking-tight leading-tight md:leading-none mb-4 md:mb-8">
                                Cess Act and Rules
                            </h1>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 h-10 bg-linear-to-t from-white to-transparent z-40" />
                    </div>
                </div>
            </section>

            {/* Main Content with Sidebar */}
            <section className="w-full flex justify-center bg-white py-12">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                        {/* Left Sidebar */}
                        <div className="w-full lg:w-[320px] flex-shrink-0">
                            <div className="flex flex-col gap-4">
                                {sidebarTabs.map((tab) => {
                                    const isActive = selectedTab === tab;
                                    return (
                                        <div
                                            key={tab}
                                            onClick={() => handleTabClick(tab)}
                                            className={`flex items-center justify-between px-6 py-5 rounded-[20px] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] cursor-pointer transition-all duration-200
                                                ${isActive
                                                    ? 'border-2 border-[#00A3FF] bg-[#00A3FF]/5'
                                                    : 'border border-gray-300 hover:border-[#00A3FF] hover:text-[#00A3FF]'
                                                }`}
                                        >
                                            <span className={`text-[14px] font-normal transition-colors duration-200 ${isActive ? 'text-[#00A3FF] font-medium' : 'text-gray-800'}`}>
                                                {tab}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Right Content Area */}
                        <div className="flex-1 w-full">
                            <div className="rounded-[24px] p-0 md:p-8 min-h-[400px]">
                                <h2 className="text-[20px] md:text-[24px] font-bold text-gray-800 mb-6 uppercase">
                                    {selectedTab}
                                </h2>

                                <div className="text-[14px] text-gray-700 leading-relaxed space-y-6">
                                    {selectedTab === "Cess" ? (
                                        <div className="space-y-6 text-justify">
                                            <p>
                                                The Government of India, vide its Taxation Laws Amendment Act, 2017, has abolished the Water Cess levied under the provisions of the Water (Prevention & Control of Pollution) Act, 1977, effective from the date of implementation of GST i.e. 1st July, 2017.
                                            </p>
                                            <p>
                                                The Water ( Prevention & Control of Pollution ) Cess Act 1977 has been implemented in the state of Maharashtra with effect from 1st April 1983 and it is amended from 26th Jan 1992 and is further amended w.e.f. 5/3/03. As per this amended Act, water Cess is calculated on the basis of water consumed by industry/ local authority for specified purposes. The Water Cess will be levied and collected from all the industries whose water consumption os more than 10 cubic meter per day and not generating hazardous waste. It is also applicable to all local Authorities including Municipal Councils, Corporations, Cantonment Boards and any other body entrusted with the duty of supplying Water. Under the provisions of the Cess Act it is statutory responsibility to submit monthly returns of Water consumption in Form I duly completed before 5th of next month showing water consumed in the previous month. The water can be used for the purposes specified in Schedule II showing rates of Cess. On the basis of information submitted by the industry, Assessment Order will be send for payment. In case of failure to make payment within a period of one month, interest will be charged at the rate of 2% per month not exceeding the amount of Cess. Any amount under this act can be recovered by Central Govt. in the same manner as an arrears of land revenue. If any Industry or local authority installs any plant for treatment of sewage or trade effluent, they are entitled to rebate of 25 % of Cess payable. Rebate under Cess Act can not be considered if
                                            </p>
                                            <ul className="list-disc pl-5 space-y-2">
                                                <li>Water consumption is more than maximum quantity as prescribed for that industry.</li>
                                                <li>They fails to comply with any of the provisions of Sec25 of Water ( P & CP ) Act 1974 or any standards laid down by Central Govt. under Environment (Protection) Act 1986 .</li>
                                            </ul>
                                            <p>
                                                Any person / industry / local authority aggrieved by an order of Assessment made, may appeal within 30 days from date of Assessment in Form II with Appeal fee of Rs.50/-. Every appeal under this section shall be final and shall not be called in question in any court of law.
                                            </p>
                                        </div>
                                    ) : selectedTab === "Cess Act" ? (
                                        <div className="space-y-6 text-justify">
                                            <div className="space-y-4">
                                                <p className="font-bold">The following Act of Parliament received the assent of the President on the 7th December, 1977, and is hereby published for general information:-</p>
                                                <p>An Act to provide for the levy and collection of a cess on water consumed by person carrying on certain industries and by local authorities, with a view to augment the resources of the Central Board and the State Boards for the prevention and control of water pollution constituted under the Water (Prevention and Control of Pollution) Act, 1974.</p>
                                                <p>Be it enacted by Parliament in the Twenty-eighth Year of the Republic of India as follows:-</p>
                                            </div>

                                            <div className="space-y-4">
                                                <h3 className="font-bold uppercase">Section- 1:- SHORT TITLE, EXTENT, APPLICATION AND COMMENCEMENT</h3>
                                                <p>This Act may be called the Water (Prevention and Control of Pollution) Cess Act, 1977</p>
                                                <p>It extends to the Whole of India except the State of Jammu and Kashmir.</p>
                                                <p>Subject to the provisions of sub-section (2), it applies to all the States to which the Water (Prevention and Control of Pollution) Act, 1974 applies and the Union territories.</p>
                                                <p>It shall come into force on such date as the Central Government may, by notification in the Official Gazette, appoint</p>
                                            </div>

                                            <div className="space-y-4">
                                                <h3 className="font-bold uppercase">Section- 2;- DEFINITIONS.</h3>
                                                <p>In this Act, unless the context otherwise requires:--</p>
                                                <ul className="list-disc pl-5 space-y-2">
                                                    <li><span className="font-semibold text-gray-800">"local authority"</span> means a municipal corporation or a municipal council (by whatever name called) or a cantonment board or any other body, entrusted with the duty of supplying the water under the law by or under which it is constituted;</li>
                                                    <li><span className="font-semibold text-gray-800">Prescribed"</span> means prescribed by rules made under the Act;</li>
                                                    <li><span className="font-semibold text-gray-800">"Industry"</span> includes any operation or process, or treatment and disposal system, which consumes water or gives rise to sewage effluent or trade effluent, but does not include and hydel power unit</li>
                                                    <li>words and expressions used but not defined in this Act and defined in the Water (Prevention and Control of Pollution) Act, 1974 (6 of 1974) shall have the meanings respectively assigned to them in that Act</li>
                                                </ul>
                                            </div>

                                            <div className="space-y-4">
                                                <h3 className="font-bold uppercase">Section- 3:- LEVY AND COLLECTION OF CESS.</h3>
                                                <p>There shall be levied and collected a cess for the purpose of the Water (Prevention and Control of Pollution) Act, 1974(6 of 1974) and utilisation there under,</p>
                                                <p>The Cess under sub-section (1) shall be payable by-</p>
                                                <ul className="list-disc pl-5 space-y-2">
                                                    <li>Every person carrying on any 2[industry]; and</li>
                                                    <li>Every local authority, and shall be calculated on the basis of water consumed by such person or local authority, as the case may be, for any of the purpose specified in column (1) of Schedule II, at such rate, not exceeding the rate specified in the corresponding entry in column (2) thereof, as the Central Government may, by notification in the Official Gazette, from time to time, specify</li>
                                                </ul>
                                                <p>1 [(2A) Where any person carrying on any 2[industry] or any local authority consuming water for domestic purpose liable to pay cess fails to comply with any of the provisons of section 25 of the Water (Prevention and Control of Pollution) Act, 1974 (6 of 1974) or any of the standards laid so down by the Central Government under the Environment (Protection) Act, 1986, cess shall be notwithstanding anything contained in sub-section 2 of this section calculated and payable at such rate, not exceeding the rate specified in column (3) of Schedule II, as the Central Government may, by notification in the Official Gazette, from time to time specify.]</p>
                                                <p>Where any local authority supplies water to any person carrying on any 2[industry] or to any other local authority and such person or other local authority is liable to pay cess under sub-section (2) or sub-section (2A) in respect of the water so supplied, then, notwithstanding anything contained in that sub-section, the local authority first mentioned shall not be liable to pay such cess in respect of such water.</p>
                                                <p><span className="font-semibold text-gray-800">Explanation—</span>For the purpose of this section and section 4, "consumption of water" includes supply of water. Some important Provision of the Water (P & C.P.) Cess Act.1977 read with amendment of 1992 & 2003 are submitted as under.</p>
                                            </div>

                                            <div className="space-y-4">
                                                <h3 className="font-bold uppercase">Section- 4:- AFFIXING OF METERS</h3>
                                                <p>For the purpose of measuring and recording the quantity of water consumed, every person carrying on any [industry] and every local authority shall affix meters of such standards and at such places as may be prescribed and it shall be presumed that the quantity indicated by the meter has been consumed by such person or local authority, as the case may be, until the contrary is proved.</p>
                                                <p>Where any person or local authority fails to affix any meter as required by sub-section (1), the Central Government shall after notice to such person or local authority, as the case may be, cause such meter to be affixed and the cost of such meter together with the cost for affixing the meter may be recovered from such person or local authority by the Central Government in the same manner as an arrear of land revenue.</p>
                                            </div>

                                            <div className="space-y-4">
                                                <h3 className="font-bold uppercase">Section – 5:- FURNISHING OF RETURNS</h3>
                                                <p>3[(1)] Every person carrying on any 1[industry] and every local authority, liable to pay the cess under section 3, shall furnish such returns, in such form at such intervals and containing such particulars to such officer or authority, as may be prescribed.</p>
                                                <p>[(2) If a person carrying on any 1[industry] or a local authority, liable to pay the cess under section 3, fails to furnish any return under sub-section (1), the officer or the authority shall give a notice requiring such person or local authority to furnish such return before such date as may be specified in the notice.]</p>
                                            </div>

                                            <div className="space-y-4">
                                                <h3 className="font-bold uppercase">Section -7:- REBATE.</h3>
                                                <p>Where any person or local authority, liable to pay the cess under this Act, installs any plant for the treatment of sewage or trade effluent, such person or local authority shall from such date as may be prescribed, be entitled to a rebate of twenty five per cent of the cess payable by such person or, as the case may be, local authority.</p>
                                                <p>1[Provided that a person or local authority shall not be entitled to a rebate, if he or it</p>
                                                <ul className="list-disc pl-5 space-y-2">
                                                    <li>Consumes water in excess of the maximum quantity as prescribed in this behalf for any 2[Industry] or local authority; or</li>
                                                    <li>fails to comply with any of the provisions of section 25 of the Water (Prevention and control of Pollution) Act, 1974 (6 of 1974) or any of the standards laid down by the Central Government under the Environment (Protection) Act, 1986 (29 of 1986).]</li>
                                                </ul>
                                            </div>

                                            <div className="space-y-4">
                                                <h3 className="font-bold uppercase">Section 10 :- INTEREST PAYABLE FOR DELAY IN PAYMENT OF CESS.</h3>
                                                <p>If any person carrying on any 1[Industry] or any local authority fails to pay any amount of cess payable under section 3 to the State Government within the date specified in the order of assessment made under section 6, such person or local authority, as the case may be, shall be liable to pay 2[interest on the amount to be paid at the rate of two per cent for every month or part of a month comprised in the period from the date on which such payment is due till such amount is actually paid.</p>
                                            </div>

                                            <div className="space-y-4">
                                                <h3 className="font-bold uppercase">Section 11 :- PENALTY FOR NON-PAYMENT OF CESS WITHIN THE SPECIFIED TIME.</h3>
                                                <p>If any amount of cess payable by any person carrying on any 1[industry] or any Local authority under section 3 is not paid to the State Government within the date specified in the order of assessment made under section 6, it shall be deemed to be in arrears and the authority prescribed in this behalf may, after such inquiry as it deems fit, impose on such person or, as the case may be, Local authority, a penalty not exceeding the amount of cess in arrears:</p>
                                                <p>Provided that before imposing any such penalty, such person or, as the case may be, the local authority shall be given as reasonable opportunity of being heard and if after such hearing the said authority is satisfied that the default was for any good and sufficient reason, no penalty shall be imposed under this section.</p>
                                            </div>

                                            <div className="space-y-4">
                                                <h3 className="font-bold uppercase">Section 12 :- RECOVERY OF AMOUNT DUE UNDER THE ACT.</h3>
                                                <p>Any amount due under this Act. (including any interest or penalty payable under section 10 or section 11, as the case may be) from any person carrying on any 3[industry] or from any local authority may be recovered by the Central Government in the same manner as an arrear of land revenue.</p>
                                            </div>

                                            <div className="space-y-4">
                                                <h3 className="font-bold uppercase">Section 13:- APPEALS</h3>
                                                <p>Any Person or local authority aggrieved by an order of assessment made under section 6 or by an order imposing penalty made under section 11 may, within such time as may be prescribed, appeal to such authority in such form and in such manner as may be prescribed.</p>
                                                <p>Every appeal preferred under sub-section (I) shall be accompanied by such fees as may be prescribed.</p>
                                                <p>After the receipt of an appeal under sub-section (1), the appellate authority shall, after giving the appellant an opportunity of being heard in the matter, dispose of the appeal as expeditiously as possible.</p>
                                                <p>Every order passed in appeal under this section shall be final and shall not be called in question in any court of law.</p>
                                            </div>

                                            <div className="space-y-4">
                                                <h3 className="font-bold uppercase">Section 14 :- PENALTY</h3>
                                                <p>Whoever, being under an obligation to furnish a return under this Act, furnishes any return knowing, or having reason to believe, the same to be false shall be punishable with imprisonment which may extend to six months or with fine which may extend to one thousand rupees or with both.</p>
                                                <p>Whoever, being liable to pay cess under this Act willfully or intentionally evades or attempts to evade the payment of such cess shall be punishable with imprisonment which may extend to six months or with fine which may extend to one thousand rupees or with both</p>
                                                <p>No court shall take cognizance of an offence punishable under this section save on a complaint made by or under the authority of the Central Government.</p>
                                            </div>

                                            <div className="space-y-4">
                                                <h3 className="font-bold uppercase">Section 15 :- OFFENCES BY COMPANIES.</h3>
                                                <p>Where an offence under this Act. has been committed by a company, every person who, at the time the offence was committed, was in charge of and was responsible to, the company for the conduct of the business of the company as well as the company, shall be deemed to be guilty of the offence and shall be liable to be proceeded against and punished accordingly:</p>
                                                <p>Provided that nothing contained in this sub-section shall render any such person liable to any punishment, if he proves that the offence was committed without his knowledge or that he exercised all due diligence to prevent the commission of such offence.</p>
                                                <p>Notwithstanding anything contained in sub-section (1), where an offence under this Act has been committed by a company and it is proved that the offence has been committed with the consent or connivance of , or is attributable to any neglect on the part of, any director, manager, secretary or other officer of the company, such director, manager, secretary or other officer shall also be deemed to be guilty of that offence and shall be liable to be proceeded against and punished accordingly.</p>
                                                <p><span className="font-semibold text-gray-800">Explanation :- For the purpose of this section:-</span></p>
                                                <ul className="list-disc pl-5 space-y-2">
                                                    <li>"Company" means any body corporate and includes a firm or other association of individuals; and</li>
                                                    <li>"Director", inrelaion to firm, means a partner in the firm.</li>
                                                </ul>
                                            </div>

                                            <div className="pt-6 border-t border-gray-100 space-y-4">
                                                <p>Further in exercise of the powers conferred bye sub section (i) of section 16 of the water (P&C pollution) cess Act. 1977 (36 of 1977) the central Government herby exempts all industries consuming water less than ten kilo liters per day from the levy of Cess specified in this notification.</p>
                                                <p>Provided that no such exemption shall be applicable in case of industries generation "Hazardous wastes" as defined in clause (i) of rule 3 of the Hazardous waste (Management of Handling) Rules, 1989, made under section 6,8 and 25 of the Environment (Protection) Act, 1986 (29 of 1986)</p>
                                            </div>
                                        </div>
                                    ) : selectedTab === "Schedule - 2" ? (
                                        <div className="space-y-12">
                                            {/* Table 1 */}
                                            <div className="space-y-4">
                                                <h3 className="text-center font-bold text-gray-800">Period 1st April 1983 to 25th January 1992</h3>
                                                <div className="border border-gray-200 rounded-[25px] overflow-hidden overflow-x-auto shadow-sm">
                                                    <table className="w-full border-collapse min-w-[800px]">
                                                        <thead>
                                                            <tr className="border-b border-gray-200 bg-gray-50">
                                                                <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700 w-20">Sr.No.</th>
                                                                <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700">Purpose for which water is consumed</th>
                                                                <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700">Maximum rate under sub-section (2) of section 3</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="divide-y divide-gray-100 italic">
                                                            <tr className="hover:bg-gray-50 transition-colors">
                                                                <td className="py-4 px-4 text-[13px] text-gray-600 align-top">1</td>
                                                                <td className="py-4 px-4 text-[13px] text-gray-700 align-top">Industrial cooling, spraying in mine pits or boiler feeds.</td>
                                                                <td className="py-4 px-4 text-[13px] text-gray-700 align-top">Three -fourths of a paise, per kilo Liter</td>
                                                            </tr>
                                                            <tr className="hover:bg-gray-50 transition-colors">
                                                                <td className="py-4 px-4 text-[13px] text-gray-600 align-top">2</td>
                                                                <td className="py-4 px-4 text-[13px] text-gray-700 align-top">Domestic purpose</td>
                                                                <td className="py-4 px-4 text-[13px] text-gray-700 align-top">One Paise, per Kilo Liter</td>
                                                            </tr>
                                                            <tr className="hover:bg-gray-50 transition-colors">
                                                                <td className="py-4 px-4 text-[13px] text-gray-600 align-top">3</td>
                                                                <td className="py-4 px-4 text-[13px] text-gray-700 align-top">
                                                                    Processing whereby water gets polluted and the pollutants are-<br />
                                                                    (I) easily bio- degradable;<br />
                                                                    (II) non-toxic or<br />
                                                                    (III) both non-toxic and easily biodegradable.
                                                                </td>
                                                                <td className="py-4 px-4 text-[13px] text-gray-700 align-top">Two paise per kilo litre</td>
                                                            </tr>
                                                            <tr className="hover:bg-gray-50 transition-colors">
                                                                <td className="py-4 px-4 text-[13px] text-gray-600 align-top">4</td>
                                                                <td className="py-4 px-4 text-[13px] text-gray-700 align-top">
                                                                    Processing whereby water polluted and the pollutants are-<br />
                                                                    (I) not easily bio- degradable;or<br />
                                                                    (II) toxic; or<br />
                                                                    (III) both toxic and not easily biodegradable.
                                                                </td>
                                                                <td className="py-4 px-4 text-[13px] text-gray-700 align-top">Two and a half paise per kilo litre</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                            {/* Table 2 */}
                                            <div className="space-y-4">
                                                <h3 className="text-center font-bold text-gray-800">Period 26th January 1992 to 5th May 2003</h3>
                                                <div className="border border-gray-200 rounded-[25px] overflow-hidden overflow-x-auto shadow-sm">
                                                    <table className="w-full border-collapse min-w-[800px]">
                                                        <thead>
                                                            <tr className="border-b border-gray-200 bg-gray-50">
                                                                <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700 w-20">Sr.No.</th>
                                                                <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700">Purpose for which water is consumed</th>
                                                                <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700">Maximum rate under sub-section (2) of section 3</th>
                                                                <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700">Maximum rate under sub-section (2A) of section 3</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="divide-y divide-gray-100 italic">
                                                            <tr className="hover:bg-gray-50 transition-colors">
                                                                <td className="py-4 px-4 text-[13px] text-gray-600 align-top">1</td>
                                                                <td className="py-4 px-4 text-[13px] text-gray-700 align-top">Industrial cooling, spraying in mine pits or boiler feeds.</td>
                                                                <td className="py-4 px-4 text-[13px] text-gray-700 align-top">One and a half paise, per kilo liter</td>
                                                                <td className="py-4 px-4 text-[13px] text-gray-700 align-top">Two and one -fourth paise per kilo liter.</td>
                                                            </tr>
                                                            <tr className="hover:bg-gray-50 transition-colors">
                                                                <td className="py-4 px-4 text-[13px] text-gray-600 align-top">2</td>
                                                                <td className="py-4 px-4 text-[13px] text-gray-700 align-top">Domestic purpose</td>
                                                                <td className="py-4 px-4 text-[13px] text-gray-700 align-top">Two paise per kilo litre</td>
                                                                <td className="py-4 px-4 text-[13px] text-gray-700 align-top">Three paise per kilo litre</td>
                                                            </tr>
                                                            <tr className="hover:bg-gray-50 transition-colors">
                                                                <td className="py-4 px-4 text-[13px] text-gray-600 align-top">3</td>
                                                                <td className="py-4 px-4 text-[13px] text-gray-700 align-top">
                                                                    Processing whereby water gets polluted and the pollutants are<br />
                                                                    (i) easily bio- degradable<br />
                                                                    (ii) non-toxic or<br />
                                                                    (iii) both non-toxic and easily biodegradable.
                                                                </td>
                                                                <td className="py-4 px-4 text-[13px] text-gray-700 align-top">Four paise, per kilo litre</td>
                                                                <td className="py-4 px-4 text-[13px] text-gray-700 align-top">Seven & half paise per kilo Liter.</td>
                                                            </tr>
                                                            <tr className="hover:bg-gray-50 transition-colors">
                                                                <td className="py-4 px-4 text-[13px] text-gray-600 align-top">4</td>
                                                                <td className="py-4 px-4 text-[13px] text-gray-700 align-top">
                                                                    Processing whereby water polluted and the pollutants are<br />
                                                                    (i) not easily bio- degradable; or<br />
                                                                    (ii) toxic; or<br />
                                                                    (iii) both -toxic and not easily biodegradable.
                                                                </td>
                                                                <td className="py-4 px-4 text-[13px] text-gray-700 align-top">Five paise per kilo litre</td>
                                                                <td className="py-4 px-4 text-[13px] text-gray-700 align-top">Nine and a half paise per kilo litre.</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                            {/* Table 3 */}
                                            <div className="space-y-4">
                                                <h3 className="text-center font-bold text-gray-800">Period 6th May 2003 to Onward</h3>
                                                <div className="border border-gray-200 rounded-[25px] overflow-hidden overflow-x-auto shadow-sm">
                                                    <table className="w-full border-collapse min-w-[800px]">
                                                        <thead>
                                                            <tr className="border-b border-gray-200 bg-gray-50">
                                                                <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700 w-20">Sr.No.</th>
                                                                <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700">Purpose for which water is consumed</th>
                                                                <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700">Maximum rate under sub-section (2) of section 3</th>
                                                                <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700">Maximum rate under sub-section (2A) of section 3</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="divide-y divide-gray-100 italic">
                                                            <tr className="hover:bg-gray-50 transition-colors">
                                                                <td className="py-4 px-4 text-[13px] text-gray-600 align-top">1</td>
                                                                <td className="py-4 px-4 text-[13px] text-gray-700 align-top">Industrial cooling, spraying in mine pits or boiler feeds.</td>
                                                                <td className="py-4 px-4 text-[13px] text-gray-700 align-top">Five paise per kilo litre</td>
                                                                <td className="py-4 px-4 text-[13px] text-gray-700 align-top">Ten paise per kilo litre.</td>
                                                            </tr>
                                                            <tr className="hover:bg-gray-50 transition-colors">
                                                                <td className="py-4 px-4 text-[13px] text-gray-600 align-top">2</td>
                                                                <td className="py-4 px-4 text-[13px] text-gray-700 align-top">Domestic purpose</td>
                                                                <td className="py-4 px-4 text-[13px] text-gray-700 align-top">Two paise per kilo litre</td>
                                                                <td className="py-4 px-4 text-[13px] text-gray-700 align-top">Three paise per kilo litre</td>
                                                            </tr>
                                                            <tr className="hover:bg-gray-50 transition-colors">
                                                                <td className="py-4 px-4 text-[13px] text-gray-600 align-top">3</td>
                                                                <td className="py-4 px-4 text-[13px] text-gray-700 align-top">
                                                                    Processing whereby water gets polluted and the pollutants are<br />
                                                                    (i) easily bio- degradable; or<br />
                                                                    (ii) non-toxic; or<br />
                                                                    (iii) both non-toxic and easily biodegradable.
                                                                </td>
                                                                <td className="py-4 px-4 text-[13px] text-gray-700 align-top">Ten paise per kilo litre</td>
                                                                <td className="py-4 px-4 text-[13px] text-gray-700 align-top">Twenty paise per kilo litre.</td>
                                                            </tr>
                                                            <tr className="hover:bg-gray-50 transition-colors">
                                                                <td className="py-4 px-4 text-[13px] text-gray-600 align-top">4</td>
                                                                <td className="py-4 px-4 text-[13px] text-gray-700 align-top">
                                                                    Processing whereby water polluted and the pollutants are<br />
                                                                    (i) not easily bio- degradable; or<br />
                                                                    (ii) toxic or<br />
                                                                    (iii) both toxic and not easily biodegradable.
                                                                </td>
                                                                <td className="py-4 px-4 text-[13px] text-gray-700 align-top">Fifteen paise per kilo litre</td>
                                                                <td className="py-4 px-4 text-[13px] text-gray-700 align-top">Thirty paise per kilo litre.</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div>
                                            <DocumentCard
                                                document={{
                                                    id: 1,
                                                    title: selectedTab
                                                }}
                                                wide={false}
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CessRules;
