

const standingorders = "/assets/standingorders.svg";

const FAQ = () => {
    return (
        <div className="font-family-helvetica">
            {/* Top Banner Section */}
            <section className="w-full flex justify-center bg-white">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="relative w-full h-[200px] md:h-[280px] rounded-t-[24px] md:rounded-t-[48px] overflow-hidden">
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

                        <div className="relative z-50 flex flex-col items-center justify-center h-full text-center px-4 md:px-6 mt-[-30px]">
                            <h1 className="text-[32px] md:text-[40px] font-bold text-[#000000] tracking-tight leading-none mb-8">
                                Frequently Asked Questions
                            </h1>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 h-10 bg-linear-to-t from-white to-transparent z-40" />
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="w-full flex justify-center bg-white py-12">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="bg-white rounded-[24px] p-4 md:p-8 shadow-sm border border-gray-100">
                        <div className="space-y-8 text-gray-700">

                            {/* Q1 */}
                            <div className="space-y-2">
                                <h3 className="font-bold text-lg text-gray-900">Q. Which industry needs Consent/permission of MPCB?</h3>
                                <p className="leading-relaxed">
                                    <span className="font-semibold">A.</span> Any industry, operation or process or an extension and addition thereto, which is likely to discharge sewerage or trade effluent into the environment or likely to emit any air pollution into the atmosphere will have to obtain consent of the State Pollution Control Board under the provisions of Water (P & CP) Act, 1974 and Air (P & CP) Act, 1981.
                                </p>
                                <p className="leading-relaxed">
                                    Similarly any industry / process generating, storing, transporting, disposing or handling hazardous waste as defined in schedule 1 and 2 of Hazardous waste (Handing and Management) Rules, 1989, as amended in 2000 are required to obtain authorization from MPC Board under the said rules.
                                </p>
                                <p className="leading-relaxed">
                                    The medical institutions generating biomedical waste as defined in Biomedical Waste (M & H) Rules, 1989 are required to obtain Authorisation under the said rules.
                                </p>
                            </div>

                            {/* Q2 */}
                            <div className="space-y-2">
                                <h3 className="font-bold text-lg text-gray-900">Q. What are the types of consent?</h3>
                                <div className="leading-relaxed">
                                    <p><span className="font-semibold">A.</span> There are three types of consent issued under the provisions of Water (P & CP) Act 1974 and Air (P & CP) Act, 1981.</p>
                                    <div className="ml-4 mt-2 space-y-2">
                                        <div className="flex gap-2">
                                            <span className="font-bold min-w-[15px]">i</span>
                                            <div>
                                                <span className="font-bold">Consent to Establish:</span>
                                                <p className="mt-1">All the industries and activities needing consent must obtain consent to establish before actual commencement of the works for establishing the industry/activity.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <span className="font-bold min-w-[15px]">ii</span>
                                            <div>
                                                <span className="font-bold">Consent to Operate:</span>
                                                <p className="mt-1">This consent needs to be taken before actual commencement of production including trial production. This consent is valid for certain duration.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <span className="font-bold min-w-[15px]">iii</span>
                                            <div>
                                                <span className="font-bold">Renewal of Consent to Operate:</span>
                                                <p className="mt-1">The consent to operate is renewed after certain period.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Q3 */}
                            <div className="space-y-2">
                                <h3 className="font-bold text-lg text-gray-900">Q. Is there any prescribed form for that? If yes, where can I get it?</h3>
                                <p className="leading-relaxed">
                                    <span className="font-semibold">A.</span> Prescribed application forms for the consent under Water (P&CP) Act, 1974 & Air (P&CP) Act, 1981, Hazardous Waste (M&H) Rules, 1989 are available at this website in downloadable format and can also be procured from all the offices of the MPCB on payment basis.
                                </p>
                                <p className="leading-relaxed">
                                    For the convenience of the entrepreneurs, a combined application form for consent under Water & Air Act and Authorisation under Hazardous Waste (M & H) Rules, 1989 has recently been introduced in the state of Maharashtra.
                                </p>
                            </div>

                            {/* Q4 */}
                            <div className="space-y-2">
                                <h3 className="font-bold text-lg text-gray-900">Q. What are the fees applicable and where and how it should be paid?</h3>
                                <p className="leading-relaxed">
                                    <span className="font-semibold">A.</span> The fees for consent under Water & Air Act are payable on the capital investment of the industry (Including land, building and machinery without depreciation). This information is available in the consent/authorisation procedure section of this website. The industries can also pay fees for longer period up to 5 terms for consent to Operate.
                                </p>
                                <p className="leading-relaxed">
                                    The fees for authorization under Biomedical waste (M&H) Rules, 1998 are linked to the bed capacity of hospital. This is also given in consent/authorization procedure section of this website. The fees for authorization under Hazardous waste (M&H) Rules 1989 are Rs.7500/- for a period of 5 years.
                                </p>
                                <p className="leading-relaxed">
                                    The fees are payable in the form of DD at Sub-Regional offices of the Board along with completely filled application form.
                                </p>
                            </div>

                            {/* Q5 */}
                            <div className="space-y-2">
                                <h3 className="font-bold text-lg text-gray-900">Q. What are the restrictions on setting of any Industry in Maharashtra?</h3>
                                <p className="leading-relaxed">
                                    <span className="font-semibold">A.</span> The entrepreneurs are advised to see the applicable restrictions for siting of new industry or its expansion. These restrictions are presented in Consent /authorization procedures/restrictions.
                                </p>
                            </div>

                            {/* Q6 */}
                            <div className="space-y-4">
                                <h3 className="font-bold text-lg text-gray-900">Q. Where shall I register my complaint about noise pollution, automobile exhaust, smell, nuisance, mangrove cutting etc?</h3>
                                <p className="leading-relaxed">
                                    <span className="font-semibold">A.</span> The citizens can register complaint about their environmental concerns as under,
                                </p>
                                <div className="border border-gray-200 rounded-lg overflow-hidden overflow-x-auto w-full max-w-3xl">
                                    <table className="w-full text-sm text-left">
                                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b border-gray-200">
                                            <tr>
                                                <th className="px-6 py-3 border-r border-gray-200 w-2/3">Concern</th>
                                                <th className="px-6 py-3">Agency</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr className="bg-white">
                                                <td className="px-6 py-4 font-medium text-gray-900 border-r border-gray-200">Noise Pollution</td>
                                                <td className="px-6 py-4"></td>
                                            </tr>
                                            <tr className="bg-white">
                                                <td className="px-6 py-4 border-r border-gray-200 pl-8">*Industrial noise pollution</td>
                                                <td className="px-6 py-4">MPCB</td>
                                            </tr>
                                            <tr className="bg-white">
                                                <td className="px-6 py-4 border-r border-gray-200 pl-8">* Non-industrial noise pollution</td>
                                                <td className="px-6 py-4">Police department</td>
                                            </tr>
                                            <tr className="bg-white">
                                                <td className="px-6 py-4 font-medium text-gray-900 border-r border-gray-200">Automobile/vehicle pollution</td>
                                                <td className="px-6 py-4">Transport department</td>
                                            </tr>
                                            <tr className="bg-white">
                                                <td className="px-6 py-4 font-medium text-gray-900 border-r border-gray-200">Complaints of nuisance in Municipal Areas</td>
                                                <td className="px-6 py-4">Municipal Authorities</td>
                                            </tr>
                                            <tr className="bg-white">
                                                <td className="px-6 py-4 font-medium text-gray-900 border-r border-gray-200">Water and Air pollution</td>
                                                <td className="px-6 py-4">MPCB</td>
                                            </tr>
                                            <tr className="bg-white">
                                                <td className="px-6 py-4 font-medium text-gray-900 border-r border-gray-200">CRZ related complaints</td>
                                                <td className="px-6 py-4">Revenue department</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Q7 */}
                            <div className="space-y-2">
                                <h3 className="font-bold text-lg text-gray-900">Q. What is the vision of the MPCB towards futuristic approach?</h3>
                                <p className="leading-relaxed">
                                    <span className="font-semibold">A.</span> MPCB has developed vision statement as: "Improvement in the Board's functional efficiency transparency in operation, and adequate response to growing needs of environmental protection and sustainable development in the State of Maharashtra" and is self explanatory
                                </p>
                            </div>

                            {/* Q8 */}
                            <div className="space-y-2">
                                <h3 className="font-bold text-lg text-gray-900">Q. What role does MPCB play in pollution control ?</h3>
                                <p className="leading-relaxed">
                                    <span className="font-semibold">A.</span> MPCB being a major regulator for implementation of environmental Laws and pollution control in the State, plays an important role in securing sustainable development by enforcing various laws, rules, regulations notifications etc. pertaining to prevention and control of pollution. It is also responsible for monitoring of pollution and for preventive and curative action. MPCB's role has become multi-disciplinary including command and control, Regulator, Facilitator, Management Consultant and Guide to all the stake holders. Monitoring and surveillance has been one of the important function of the Board. Besides that by dissemination of information on Environment Protection and Training to all Stake holders, creation of Awareness become one of the important function of the Board u/s 17 of both the Water (P&CP) and the Air (P&CP) Act, 1981 respectively. MPCB is also supposed to initiate remediation or restoration process by imposing remediation cost and penalty with the approval of the CPCB under the provisions of the Hazardous Waste (Management, Handling & Transboundary Movement) rules, 2008. MPCB is also empowered to carry out certain urgent works, as are within its bound.
                                </p>
                            </div>

                            {/* Q9 */}
                            <div className="space-y-2">
                                <h3 className="font-bold text-lg text-gray-900">Q. Is MPCB's role merely that of a regulator? Or does it play a facilitator's role also</h3>
                                <p className="leading-relaxed">
                                    <span className="font-semibold">A.</span> MPCB's primary role is of a regulator. However, it goes beyond regulation in order to advise all stake-holders involved in environment management and pollution control for compliance of the laws to organize the systems necessary for securing this objective and also to sensitize the laws and their implications
                                </p>
                            </div>

                            {/* Q10 */}
                            <div className="space-y-2">
                                <h3 className="font-bold text-lg text-gray-900">Q. How is MPCB connected to State Govt., CPCB and MoEF ?</h3>
                                <p className="leading-relaxed">
                                    <span className="font-semibold">A.</span> MPCB is an autonomous statutory body. In certain administrative and technical matters, it is responsible to State Government, Central Pollution Control Board and Ministry of Environment and Forests, Govt.of India. In critical matters, it is bound to go by the directions given by the State Government, CPCB or MoEF as the case may be.
                                </p>
                            </div>

                            {/* Q11 */}
                            <div className="space-y-2">
                                <h3 className="font-bold text-lg text-gray-900">Q. What are the environmental and pollution related clearances required to set up and start an industrial unit ?</h3>
                                <p className="leading-relaxed">
                                    <span className="font-semibold">A.</span> Normally the MPCB's No Objection Certificate in the form of combined Consent to establishment under Water Act, Air Act & Hazardous wastes Rules would be required for setting up of an industrial unit. In regard to 39 specified industrial and infrastructure projects, environmental clearance from the MoEF, Govt.of India and State Environment Department are also required as per Environmental Impact Assessment Notification dtd.14/09/2006 hoisted on the MPCB's Website <a href="http://mpcb.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">mpcb.gov.in</a> These industry specific details would be available from the information provided in this Website. For the industrial units, MSW sites and other developmental activities located on the coastal stretches of bays, estuaries, creeks, rivers and back waters, CRZ clearance also is required.
                                </p>
                            </div>

                            {/* Q12 */}
                            <div className="space-y-2">
                                <h3 className="font-bold text-lg text-gray-900">Q. Is MPCB's role confined to regulate industrial pollution only ?</h3>
                                <p className="leading-relaxed">
                                    <span className="font-semibold">A.</span> No. It is also concerned with management of municipal waste, bio-medical wastes, used lead acid batteries, hazardous chemicals, electronic wastes and some other aspects related to pollution. MPCB implements various Regulations and Notifications issued by the Ministry of Environment and Forests, Govt. of India, which are placed on the MPCB's website.
                                </p>
                            </div>

                            {/* Q13 */}
                            <div className="space-y-2">
                                <h3 className="font-bold text-lg text-gray-900">Q. What are the enforcement powers vesting in MPCB ?</h3>
                                <p className="leading-relaxed">
                                    <span className="font-semibold">A.</span> The important enforcement powers vested in MPCB are laying down standards and securing their compliance, inspection and monitoring of all sources of pollution, issuance of notices with time limit to comply with the legal requirements, closure of the defaulter unit in grave cases and prosecution in cases of serious violation.
                                </p>
                            </div>

                            {/* Q14 */}
                            <div className="space-y-2">
                                <h3 className="font-bold text-lg text-gray-900">Q. Can a citizen take recourse to court action against a polluting unit ?</h3>
                                <p className="leading-relaxed">
                                    <span className="font-semibold">A.</span> Yes. If for serious violation of law, no action is taken by the authority, a citizen can approach the court of law a fter giving 60 days notice to MPCB.
                                </p>
                            </div>

                            {/* Q15 */}
                            <div className="space-y-2">
                                <h3 className="font-bold text-lg text-gray-900">Q. Where does one can complaint against a polluting unit ?</h3>
                                <p className="leading-relaxed">
                                    <span className="font-semibold">A.</span> Complaint about violator of pollution control laws can be brought to the notice of the Regional Office of MPCB, Head Office of MPCB at Mumbai or to the State Government. There are certain matters in which the authority lies with the District Collector, Municipal Corporation Municipal local bodies and other authorities in terms of the laws they are implementing. In such cases, the right forum will be those authorities to deal with such matters.
                                </p>
                            </div>

                            {/* Q16 */}
                            <div className="space-y-2">
                                <h3 className="font-bold text-lg text-gray-900">Q. What are the responsibilities of polluting industry to prevent and control pollution ?</h3>
                                <p className="leading-relaxed">
                                    <span className="font-semibold">A.</span> Permission like consent and or Environmental Clearance or CRZ clearance need to be obtained before setting up of an industrial unit and Consent/Authorization are mandatory before starting of the production. Running a polluting industry without the mandatory clearances is an offence and such unit will be liable to face stringent actions like closure and prosecution. Clearances are given for stipulated period and they need to be renewed before the term expires. Activities like contaminating the land by illegal dumping of hazardous wastes will invite penal provisions like fine and restoration of the contaminated land at the cost of the polluter, in addition to other steps.
                                </p>
                            </div>

                            {/* Q17 */}
                            <div className="space-y-2">
                                <h3 className="font-bold text-lg text-gray-900">Q. Is pollution a necessary price that we have to pay for achieving development ?</h3>
                                <p className="leading-relaxed">
                                    <span className="font-semibold">A.</span> No. The laws stipulate that all development should be carried out with minimal occurrence of pollution. Technologies are available for controlling pollution as per the norms prescribed for different processes. Therefore, the perception that pollution is the price for securing fast development is erroneous. However, if necessary steps are not taken by the polluting unit, as per the principles laid down by the Hon'ble Supreme Court of India, the polluter is required to pay the cost of pollution caused by him by not taking anti-pollution measures.
                                </p>
                            </div>

                            {/* Q18 */}
                            <div className="space-y-2">
                                <h3 className="font-bold text-lg text-gray-900">Q. What is the concept of sustainable development ?</h3>
                                <p className="leading-relaxed">
                                    <span className="font-semibold">A.</span> In simple terms, it means that the development process should be carried out in such a way that damage to environment is minimal. It also means that the present generation, should utilize the resources in such a manner that the ability of posterity to have quality of life is not undermined. It also means that irreversible damage to environment should not take place in the process of development and the natural resources are to be protected for future generations
                                </p>
                            </div>

                            {/* Q19 */}
                            <div className="space-y-2">
                                <h3 className="font-bold text-lg text-gray-900">Q. What is the role of MPCB in securing sustainable development ?</h3>
                                <p className="leading-relaxed">
                                    <span className="font-semibold">A.</span> The entire spectrum of laws and regulations which the MPCB is regulating has the aim of minimizing pollution and thereby securing sustainable development. It also advises and enforces measures for prevention of pollution by way of adoption of cleaner technologies and recycling and reuse of wastes. In grave situation, it acts to the extent of closing down the polluting unit which may damage the ecology in an irreversible fashion.
                                </p>
                            </div>

                            {/* Q20 */}
                            <div className="space-y-2">
                                <h3 className="font-bold text-lg text-gray-900">Q. Is MPCB the only authority to control pollution ?</h3>
                                <p className="leading-relaxed">
                                    <span className="font-semibold">A.</span> MPCB is the chief regulator for a number of laws enacted and notified by the Government of India. However, it terms of other laws and also as implementing authority under environmental laws, authorities like District Magistrate, Govt. Departments like Home Department, Transport Department, Inspectorate of Factories, Health Dept., Local Bodies, Forests and Environment Dept., Civil Supplies Dept., Urban Development Dept., Industries Dept. etc. have also very important role to play in controlling pollution.
                                </p>
                            </div>

                            {/* Q21 */}
                            <div className="space-y-2">
                                <h3 className="font-bold text-lg text-gray-900">Q. What can a citizen do to prevent and control pollution ?</h3>
                                <p className="leading-relaxed">
                                    <span className="font-semibold">A.</span> A citizen can do much by adopting a code of conduct for himself as per various Environmental Laws and Rules passed by the Central and State Governments to desist from all activity which may pollute the environment. He can also bring to the notice of the authorities including MPCB about the violation of laws meant to protect environment. He can also sensitize the neighborhood about the right practices for preventing the damage to environment through Neighborhood Associations, Voluntary Organizations etc. In extra-ordinary situation, citizens have the legal right to approach the Court of Law after giving 60 days notice to MPCB and other Government Departments including the violator/s in the prescribed format
                                </p>
                            </div>

                            {/* Q22 */}
                            <div className="space-y-2">
                                <h3 className="font-bold text-lg text-gray-900">Q. What is the purpose behind laying down standards for pollution control?</h3>
                                <p className="leading-relaxed">
                                    <span className="font-semibold">A.</span> The idea behind laying down standards is basically due to the realization that minimal pollution is rather inevitable in the production process. The environment has the capacity to absorb the minimal amount of pollution without any serious adverse impact. However, if this exceeds a certain limit, then the damage to environment cannot be avoided. The standards are fixed at the threshold, where the pollutants released by the production process do not lead to such a situation. In other words the standards are decided to contain the release of pollutant to the environment and thereby protect the overall quality of environment. In some cases, the standards are industry specific as well as location specific
                                </p>
                            </div>

                            {/* Q23 */}
                            <div className="space-y-2">
                                <h3 className="font-bold text-lg text-gray-900">Q. Who prescribes the standards for pollution control?</h3>
                                <p className="leading-relaxed">
                                    <span className="font-semibold">A.</span> The standards are prescribed by the Ministry of Environment & Forest, Govt. of India, which are minimum uniform national standards, which can not be relaxed by any Authority including SPCBs and Maharashtra Pollution Control Board, which can prescribe more stringent standards than whatever laid down by the MoEF, GoI, taking into consideration the local conditions.
                                </p>
                            </div>

                            {/* Q24 */}
                            <div className="space-y-2">
                                <h3 className="font-bold text-lg text-gray-900">Q. What are the parameters for which standards are prescribed?</h3>
                                <p className="leading-relaxed">
                                    <span className="font-semibold">A.</span> Standards are prescribed for following parameters: Water : pH, Colour, BOD, COD, Total Dissolved Solids, Temperature, Suspended Solids, Ammonical Nitrogen, Oil & Grease, Toxicants, Fluorides, Phenol, Cyanides, Heavy Metals, Pesticides, Bacteriology, Fical Coliforms and Fluorides. Air : Suspended Particulate Matters, SOx, NOx, HCl, Cl2Ammonia, RSPM, etc.
                                </p>
                            </div>

                            {/* Q25 */}
                            <div className="space-y-2">
                                <h3 className="font-bold text-lg text-gray-900">Q. What is meant by Command & Control approach towards pollution control?</h3>
                                <p className="leading-relaxed">
                                    <span className="font-semibold">A.</span> Command and control refers to the present "Top down" approach under which the entire pollution control dispensation is prescribed from above. Prescriptions are in the form of orders which all are obliged to comply with. There is no scope for a bottom up approach under which each polluting unit can be given individual set of parameters.
                                </p>
                            </div>

                            {/* Q26 */}
                            <div className="space-y-2">
                                <h3 className="font-bold text-lg text-gray-900">Q. Besides command and control, what other approaches are in practice to prevent and control pollution?</h3>
                                <p className="leading-relaxed">
                                    <span className="font-semibold">A.</span> In certain countries market based instruments have either replaced command and control or practiced in-conjunction with command and control. In this situation, there is possibility of one unit trading its waste load with another unit. However, under the Indian situation as yet command and control reigns supreme with some scope for economic instruments. The industries also adopt voluntary schemes based upon CREP under which they voluntarily submit to adoption of measures aimed at environmental compliance beyond the legal norms. They also benchmark themselves against International Standards, like getting ISO 14001 certificate.
                                </p>
                            </div>

                            {/* Q27 */}
                            <div className="space-y-2">
                                <h3 className="font-bold text-lg text-gray-900">Q. What is meant by "End of the pipe treatment"?</h3>
                                <p className="leading-relaxed">
                                    <span className="font-semibold">A.</span> "End of the pipe treatment" connotes the present arrangements under which the industry is allowed to carry on with the production process and treat the waste as per the stipulated standards and dispose of the same.
                                </p>
                            </div>

                            {/* Q28 */}
                            <div className="space-y-2">
                                <h3 className="font-bold text-lg text-gray-900">Q. What is the alternative to end of the pipeline approach?</h3>
                                <p className="leading-relaxed">
                                    <span className="font-semibold">A.</span> The alternative is waste prevention and minimization, by implementing suitable sound technology for minimization of waste generation. Waste can be effectively segregated, recycled and reused so as to minimize the waste load.
                                </p>
                            </div>

                            {/* Q29 */}
                            <div className="space-y-2">
                                <h3 className="font-bold text-lg text-gray-900">Q. Is it possible to prevent generation of waste by industries?</h3>
                                <p className="leading-relaxed">
                                    <span className="font-semibold">A.</span> Yes. It is a question of using the right process technology and other measures for waste prevention mentioned above. With the advancement of new process technologies and raw materials, there is steady improvement towards prevention of generation of waste in some industrial sectors. These processes, however, have not reached such a stage that complete prevention of waste generation by all industries is possible.
                                </p>
                            </div>

                            {/* Q30 */}
                            <div className="space-y-2">
                                <h3 className="font-bold text-lg text-gray-900">Q. What are the methods in practice for waste reduction, recycling and reuse?</h3>
                                <p className="leading-relaxed">
                                    <span className="font-semibold">A.</span> Cleaner Technological options, ensuring mass balance, stochiometry and to improve the process with respect to yield, Reverse Osmosis, Distillation, solvent recovery, clarification, purification, use of waste as a raw material, waste exchange etc are some of the proven methods.
                                </p>
                            </div>

                            {/* Q31 */}
                            <div className="space-y-2">
                                <h3 className="font-bold text-lg text-gray-900">Q. Are small units exempted from the regulations pertaining to pollution control?</h3>
                                <p className="leading-relaxed">
                                    <span className="font-semibold">A.</span> The law is applicable to all units irrespective of size. SSI units are eligible for few exemptions.
                                </p>
                            </div>

                            {/* Q32 */}
                            <div className="space-y-2">
                                <h3 className="font-bold text-lg text-gray-900">Q. How important is the development of common facilities for waste treatment and disposal.</h3>
                                <p className="leading-relaxed">
                                    <span className="font-semibold">A.</span> The setting up of common facilities like TSDF, CETP, CBWTF, pipelines etc. render it possible for units particularly for small unit to reduce the cost of treatment of waste because of economy of the scale in operation. Besides for every unit to set up all waste disposal requirements individually may not be possible due to shortage of land. This problem also can be resolved through common facilities, where small scale units to provide primary treatment only and for secondary treatment, it has to become a Member of CETP in cluster of industries.
                                </p>
                            </div>

                            {/* Q33 */}
                            <div className="space-y-2">
                                <h3 className="font-bold text-lg text-gray-900">Q. What are the important common waste treatment facilities in Maharashtra?</h3>
                                <p className="leading-relaxed">
                                    <span className="font-semibold">A.</span> The common facilities in the State are CETPs (for effluent treatment), TSDF (for Hazardous Waste Disposal), Common incineration for incinerating certain kinds of waste, Common Bio-Medical Waste Treatment Facilities and Effluent Conveyance pipelines for transporting treated effluent to safer disposal points. The details are placed on the Website of the Maharashtra Pollution Control Board.
                                </p>
                            </div>

                            {/* Q34 */}
                            <div className="space-y-2">
                                <h3 className="font-bold text-lg text-gray-900">Q. How can one make use of common waste treatment facility in the State?</h3>
                                <p className="leading-relaxed">
                                    <span className="font-semibold">A.</span> Maharashtra Pollution Control Board as well as agreement with operator of the common facilities would be necessary for using the common facilities.
                                </p>
                            </div>

                            {/* Q35 */}
                            <div className="space-y-2">
                                <h3 className="font-bold text-lg text-gray-900">Q. What is MPCB doing to correct the situation of Golden Corridor ?</h3>
                                <p className="leading-relaxed">
                                    <span className="font-semibold">A.</span> MPCB has taken up many corrective measures like river monitoring, identification and monitoring of polluted stretches of streams, intensive monitoring by Vigilance Squad as well as strict monitoring of individual industry by surprise monitoring. MPCB has laid down stringent norms for discharges into various Creeks, setting up of common facilities like CETPs, STPs by Municipal Corporations, TSDF, common Bio-medical waste treatment facilities, common incinerators for HW for treated effluent to safe disposal point. MPCB has directed individual industry to upgrade its treatment facilities to meet with MPCB norms and initiated action against the defaulters as and when found necessary. MPCB has prepared Action Plans for control of Air Pollution in Mumbai, Pune, Solapur, Chandrapur area are started implementation. MPCB has also identified illegal dumping site. The one site at Tarapur was scientifically capped and waste from the another sitres shifted to the TSDFs and started the remedification of such sites through concerned Industrial Association and operator of TSDF.
                                </p>
                            </div>

                            {/* Q36 */}
                            <div className="space-y-2">
                                <h3 className="font-bold text-lg text-gray-900">Q. What exactly is meant by monitoring of the industrial unit ?</h3>
                                <p className="leading-relaxed">
                                    <span className="font-semibold">A.</span> Monitoring of the industrial unit means sending out the monitoring teams comprised of skilled technical & scientific officers to verify the compliance of conditions imposed in NOC, Consent, Authorization etc. Monitoring includes performance evaluation of Environment Management System (EMS) in respect of Board's notices/directives and checking the compliance of Environmental Clearance conditions and that no violation of law takes place.
                                </p>
                            </div>

                            {/* Q37 */}
                            <div className="space-y-2">
                                <h3 className="font-bold text-lg text-gray-900">Q. What are the control mechanism developed in MPCB in order to ensure that polluting units are really complying with the regulation ?</h3>
                                <p className="leading-relaxed">
                                    <span className="font-semibold">A.</span> MPCB has set up mechanisms to analyze the reports received from the monitoring teams and the laboratory verifies the samples and also verifies the compliance of other techno-legal requirements that the unit has to comply with. Based upon the findings so arrived at enforcement measures are taken. In certain cases surprise checking through Vigilance Squad are also carried out.
                                </p>
                            </div>

                            {/* Q38 */}
                            <div className="space-y-2">
                                <h3 className="font-bold text-lg text-gray-900">Q. What exactly is the object of MPCB's Charter for Good Governance ?</h3>
                                <p className="leading-relaxed">
                                    <span className="font-semibold">A.</span> MPCB Charter for good governance aims at bringing about quality change in its working by making it a knowledge based organization to cope up with the new challenges through capacity building series, streamlining procedure and also fixing the accountability. It also aims at transparency in working and improving the services rendered by it quality-wise and time-wise.
                                </p>
                            </div>

                            {/* Q39 */}
                            <div className="space-y-2">
                                <h3 className="font-bold text-lg text-gray-900">Q. Is MPCB 'Pro Industry', 'Anti Industry" or something else ?</h3>
                                <p className="leading-relaxed">
                                    <span className="font-semibold">A.</span> MPCB is neither pro industry nor anti industry. It is a regulatory body which is performing its functions in accordance with the law for achieving the ultimate goal of sustainable development through effective environmental pollution control.
                                </p>
                            </div>

                            {/* Q40 */}
                            <div className="space-y-2">
                                <h3 className="font-bold text-lg text-gray-900">Q. What is the set up in MPCB for attending to the complaints and for redressal of grievances?</h3>
                                <p className="leading-relaxed">
                                    <span className="font-semibold">A.</span> MPCB attends to the complaints promptly by inspection, monitoring and verification through its Regional Offices or by sending special teams or by vigilance squad to visit the site and report back. Complaints can be lodged online on the Board's website. Both written and oral complaints are attended on a priority basis.
                                </p>
                            </div>

                            {/* Q41 */}
                            <div className="space-y-2">
                                <h3 className="font-bold text-lg text-gray-900">Q. What exactly is the role of the Vigilance Squad? How does one get in touch with that?</h3>
                                <p className="leading-relaxed">
                                    <span className="font-semibold">A.</span> The Vigilance Squad is set up in a Head Office as well as in the Regional Offices. They can be accessed through telephone, in person or by sending written application. The role of the vigilance squad is to act fast, and report to the highest level (Chairman and MS) for prompt action.
                                </p>
                            </div>

                            {/* Q42 */}
                            <div className="space-y-2">
                                <h3 className="font-bold text-lg text-gray-900">Q. How quickly can one expect the Vigilance Squad to act?</h3>
                                <p className="leading-relaxed">
                                    <span className="font-semibold">A.</span> The Vigilance Squad acts without any loss of time.
                                </p>
                            </div>

                            {/* Q43 */}
                            <div className="space-y-2">
                                <h3 className="font-bold text-lg text-gray-900">Q. Can one approach the Regional Offices for informing about violation of laws and illegal dumping of wastes?</h3>
                                <p className="leading-relaxed">
                                    <span className="font-semibold">A.</span> Yes.
                                </p>
                            </div>

                            {/* Q44 */}
                            <div className="space-y-2">
                                <h3 className="font-bold text-lg text-gray-900">Q. What is the role of Municipalities and Municipal Corporations in preventing and controlling pollution?</h3>
                                <p className="leading-relaxed">
                                    <span className="font-semibold">A.</span> Local Bodies are responsible for proper treatment and safe disposal of Municipal Solid Waste and sewerage as per the law and as per the standards laid down. They need to take consent of MPCB and run these facilities as per the norms laid down. They need to properly attend to the complaints from the public with regard to disposal of sewerage and solid waste. It should also make available space/land for Common Bio-Medical Treatment and Disposal Facility and ensure that within its jurisdiction, the shops and establishments and tiny activities are granted permission only after compliance of the Environmental Norms. For example : there should be integrated Slaughter House Management, Common Solid Waste Management, Bio-Medical Waste Management, Plastic Waste Management, Hotel Waste Management etc.
                                </p>
                            </div>

                            {/* Q45 */}
                            <div className="space-y-2">
                                <h3 className="font-bold text-lg text-gray-900">Q. How does MPCB ensure that Municipalities are discharging their role about pollution control?</h3>
                                <p className="leading-relaxed">
                                    <span className="font-semibold">A.</span> Sewage Treatment Plants and Solid Waste Disposal Facilities have to obtain the Consent/Authorization of the Board and the local bodies are mandated to run them according to the conditions laid down in Consent/Authorization, so as to comply with the Environmental Norms and to have less adverse effect on the environment.
                                </p>
                            </div>

                            {/* Q46 */}
                            <div className="space-y-2">
                                <h3 className="font-bold text-lg text-gray-900">Q. A few river stretches are polluted. What is the reason?</h3>
                                <p className="leading-relaxed">
                                    <span className="font-semibold">A.</span> The reason for pollution of river stretches is illegal discharge into the rivers, by various polluters including local bodies, industries etc.
                                </p>
                            </div>

                            {/* Q47 */}
                            <div className="space-y-2">
                                <h3 className="font-bold text-lg text-gray-900">Q. Is any planning done for remediation of polluted river stretches?</h3>
                                <p className="leading-relaxed">
                                    <span className="font-semibold">A.</span> Yes. MPCB has monitored these river stretches and identified the reasons river-wise. An Action Plans are being prepared for remediation and implementation thereof and is already in process, such as, Godavari/Krishna River Clean Up Projects.
                                </p>
                            </div>

                            {/* Q48 */}
                            <div className="space-y-2">
                                <h3 className="font-bold text-lg text-gray-900">Q. MPCB,s Charter speaks about transforming itself to a "Information based Organization". What is being done in this regard?</h3>
                                <p className="leading-relaxed">
                                    <span className="font-semibold">A.</span> It has started various activities newly to adopt Integrated Management Information System approach i.e. IMIS with E.I.C. Zoning Atlas, Religious Improvement, Demonstration Plants, Role of Management Consultation etc.
                                </p>
                            </div>

                            {/* Q49 */}
                            <div className="space-y-2">
                                <h3 className="font-bold text-lg text-gray-900">Q. What is the strength of Technical and Scientific personnel in MPCB?</h3>
                                <p className="leading-relaxed">
                                    <span className="font-semibold">A.</span> About 350.
                                </p>
                            </div>

                            {/* Q50 */}
                            <div className="space-y-2">
                                <h3 className="font-bold text-lg text-gray-900">Q. Has MPCB any plan to involve people in better control of pollution?</h3>
                                <p className="leading-relaxed">
                                    <span className="font-semibold">A.</span> Yes. MPCB undertakes a variety of programmes for involving people across various groups like NGOs, National Green Cores, Eco Clubs, Schools, Colleges, Media, Industries Associations and also by giving press notes and paid advertisements in the news papers to sensitize all concerned. Public Hearings for Environmental Clearance provides an open stage for people's involvement in project clearance.
                                </p>
                            </div>

                            {/* Q51 */}
                            <div className="space-y-2">
                                <h3 className="font-bold text-lg text-gray-900">Q. If somebody wants to associate himself with MPCB for pollution control, which is the contact point?</h3>
                                <p className="leading-relaxed">
                                    <span className="font-semibold">A.</span> This can be done with Head Office or concerned Regional Office.
                                </p>
                            </div>

                            {/* Q52 */}
                            <div className="space-y-2">
                                <h3 className="font-bold text-lg text-gray-900">Q. For reference purpose, can people access MPCB Library/Website?</h3>
                                <p className="leading-relaxed">
                                    <span className="font-semibold">A.</span> Yes.
                                </p>
                            </div>

                            {/* Q53 */}
                            <div className="space-y-2">
                                <h3 className="font-bold text-lg text-gray-900">Q. Will MPCB officers be available for meaningful inter-action about pollution control matters?</h3>
                                <p className="leading-relaxed">
                                    <span className="font-semibold">A.</span> Yes. MPCB officers participate in several interaction sessions.
                                </p>
                            </div>

                            {/* Q54 */}
                            <div className="space-y-2">
                                <h3 className="font-bold text-lg text-gray-900">Q. Does MPCB order compensation for any damage due to pollution?</h3>
                                <p className="leading-relaxed">
                                    <span className="font-semibold">A.</span> No. In the cases falling under Public Liability Insurance Act, 1991, the affected party can approach the District Collector for awarding compensation against the damages.
                                </p>
                            </div>

                            {/* Q55 */}
                            <div className="space-y-2">
                                <h3 className="font-bold text-lg text-gray-900">Q. What is the policy of MPCB with regard to plastic bags?</h3>
                                <p className="leading-relaxed">
                                    <span className="font-semibold">A.</span> The policy of MPCB in this regard is as per the provisions contained in Maharashtra Non biodegradable Garbage (Control) Act, 2006 and Maharashtra Plastic Carry Bags (Manufacture & Usage) Rules, 2006. No plastic carry bag are allowed to manufacture below the thickness of 50 micron. These standards are more strengthen than the Central Rule "The Recycled Plastics Manufacture and Usage Rules, 1999.".
                                </p>
                            </div>

                            {/* Q56 */}
                            <div className="space-y-2">
                                <h3 className="font-bold text-lg text-gray-900">Q. What are the appeal provisions available in rejection cases?</h3>
                                <p className="leading-relaxed">
                                    <span className="font-semibold">A.</span> Any person aggrieved by the order of Consent under Water/Air can file an appeal with the Appellate Authority constituted by the State Government against the authorization under the Hazardous Waste to the Secretary, Environment Deptt., Govt. of Maharashtra, against the Authorization under the Bio-Medical Waste to the Hon'ble State Environment Minister, Govt. of Maharashtra and against the Assessment Order under Water (Prevention and Control of Pollution) Cess Act, 1977 before the Appellate Authority constituted by the Chairman, MPCB and in the case of Environmental Clearance of the Govt.of India, the aggrieved person can file the appeal with the National Environment Appellate Authority at the National Level.
                                </p>
                            </div>

                            {/* Q57 */}
                            <div className="space-y-2">
                                <h3 className="font-bold text-lg text-gray-900">Q. What can be done with regard to polluting vehicles?</h3>
                                <p className="leading-relaxed">
                                    <span className="font-semibold">A.</span> Norms in this regard have been notified under the Motor Vehicles Act and the same are implemented by Transport Department.
                                </p>
                            </div>

                            {/* Q58 */}
                            <div className="space-y-2">
                                <h3 className="font-bold text-lg text-gray-900">Q. Is it permissible to send reusable hazardous waste for reuse in other States?</h3>
                                <p className="leading-relaxed">
                                    <span className="font-semibold">A.</span> Yes, subject to the provisions contained in Rules of the Hazardous Waste (Management, Handling & Transboundary Movement) Rules, 2008.
                                </p>
                            </div>

                            {/* Q59 */}
                            <div className="space-y-2">
                                <h3 className="font-bold text-lg text-gray-900">Q. Has MPCB fixed any time limit for clearance of cases?</h3>
                                <p className="leading-relaxed">
                                    <span className="font-semibold">A.</span> Yes. Normally all clearances are given within 4 months time.
                                </p>
                            </div>

                            {/* Q60 */}
                            <div className="space-y-2">
                                <h3 className="font-bold text-lg text-gray-900">Q. Is there any provision for fast track clearances by MPCB?</h3>
                                <p className="leading-relaxed">
                                    <span className="font-semibold">A.</span> No such mechanism is developed but all the cases are treated on the fast track. Sometimes, MPCB had taken special drive in compliance of certain Hon'ble Supreme Court of India and High Court's order, such as, Hazardous Waste Management in 1996-1997, Dahanu Actions in 1996 to 1997, BMW in 2008-2009 etc.
                                </p>
                            </div>

                            {/* Q61 */}
                            <div className="space-y-2">
                                <h3 className="font-bold text-lg text-gray-900">Q. What are the incentives offered to the industrial unit going in for "ISO 14001"?</h3>
                                <p className="leading-relaxed">
                                    <span className="font-semibold">A.</span> The units which have got "ISO 14001" are provided incentives in terms of longer period of Consent/Authorization, reduction in the number of routine inspection and expeditious clearance of their renewal applications.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQ;
