import { useState } from 'react';

const bannerImage = "/assets/standingorders.svg"; // Reusing RTS banner image as requested style

const sidebarTabs = [
    "Health and Environment",
    "Exposure to Asbestos can lead to Cancer",
    "Environmental Health Crisis in Cotton Belt of Punjab"
];

function HealthEnvironment() {
    const [selectedTab, setSelectedTab] = useState(sidebarTabs[0]);

    const handleTabClick = (tab: string) => {
        setSelectedTab(tab);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const renderAsbestosContent = () => (
        <div className="flex flex-col gap-6 text-[14px] text-gray-700 leading-relaxed text-justify">
            <div>
                <p className="font-bold text-black mb-1">Q. What is Asbestos?</p>
                <p>
                    Asbestos is the name given to a number of naturally occurring fibrous silicate minerals that have been mined for their useful properties such as thermal insulation, chemical and thermal stability, and high tensile strength. Asbestos is commonly used as an acoustic insulator, for thermal insulation, fire proofing and in building materials. Asbestos fibers are strong and have properties that make them resistant to heat. It is often found in ceiling tiles, pipe and vessel insulation, blown on to structural beams and ceilings, and in floor tiles. The term asbestos is derived from a Greek word meaning “inextinguishable, unquenchable or inconsumable”. It is a generic name for a group of fibrous silicate minerals.
                </p>
            </div>
            <div>
                <p className="font-bold text-black mb-1">Q. How many different types of Asbestos are there?</p>
                <p>
                    There are usually six different types of asbestos that are found in commercially manufactured products. Chrysotile, also known as white asbestos is the commonest while amosite (Brown asbestos) and crocidolite (Blue Asbestos) are the other common types of Asbestos. It is naturally occurring and deposits can be found in most countries around the world. Most Asbestos comes from the former Soviet Union, Canada (White Asbestos), South Africa (Brown Asbestos), and Australia (Blue Asbestos).
                </p>
            </div>
            <div>
                <p className="font-bold text-black mb-1">Q. How do we make products from Asbestos?</p>
                <p>
                    Asbestos is mined from the ground usually by open cast method. The raw material is very coarse and looks much like old wood. It is then processed and refined into fluffy fibers. The fibers are then added to some form of binding agent like cement to form an asbestos containing material (ACM). Asbestos cement contains between 10-15% asbestos fibers.
                </p>
            </div>
            <div>
                <p className="font-bold text-black mb-1">Q. Why is Asbestos a Hazard?</p>
                <p>
                    Asbestos is made up of microscopic bundles of fibers that may become air borne when distributed. These fibers get into the air and may be inhaled into the lungs, where they may cause health problems. Medical statistics indicate the more asbestos fibers you inhale the greater the risk of developing a disease. There is no indication yet of a safe amount of exposure.
                </p>
            </div>
            <div>
                <p className="font-bold text-black mb-1">Q. What are the diseases that can be caused by exposure to asbestos?</p>
                <p>
                    Asbestosis is a lung disease first found in naval shipyard workers. As asbestos fibers are inhaled, they may get trapped in the lung tissue. The body tries to dissolve the fibers by producing an acid. This acid, due to chemical resistance of the fiber, but may scar surrounding tissue. Eventually, this scarring may become so severe that the lungs cannot function. The latency period (the time it takes for the disease to become developed) is often 25-40 years. Mesothelioma is the cancer of pleura (the outer lining of the lung and chest cavity). This form of cancer is peculiar because the only known cause is from asbestos exposure. The latency period is often 15-30 years. Lung cancer can also be caused by asbestos and the latency period is 15-30 years.
                </p>
            </div>
            <div>
                <p className="font-bold text-black mb-1">Q. When is asbestos a hazard?</p>
                <p>
                    Asbestos is not always an immediate hazard. It is only when asbestos containing materials are disturbed or the materials become damaged that it becomes a hazard. When the materials become damaged, the fibers separate and may then become airborne.
                </p>
            </div>
            <div>
                <p className="font-bold text-black mb-1">Q. What has been status of litigation with respect to Asbestos?</p>
                <p>
                    Most uses of Asbestos are banned in many countries, especially the West. In the US, asbestos was one of the first hazardous air pollutants to be regulated. One estimate says that, in the 20th Century more than 100 million Americans were exposed to asbestos in the workplace. Today, lawsuits claiming that asbestos caused plaintiffs have so far run into tens of billions of dollars for expenses, settlements and judgments. Over 70 corporations have filed chapter 11 bankruptcy in the face of heavy liability claims. Since the late 1970s 6% of all filing in American courts each year were related to asbestos. But it is also believed by many that asbestos litigation in a lot of cases is fraudulent. A study found that less than half the money spent on asbestos litigation went to injured parties, as opposed to attorneys fees and administrative costs.
                </p>
            </div>
        </div>
    );

    const renderHealthEnvironmentContent = () => (
        <div className="flex flex-col gap-8">
            <div className="text-[14px] text-gray-700 leading-relaxed text-justify">
                <p className="mb-4">
                    Environmental health comprises those aspects of human health, including quality of life, that are determined by physical, chemical, biological, social, and psychosocial factors in the environment. It also refers to the theory and practice of assessing, correcting, controlling, and preventing those factors in the environment that can potentially affect adversely the health of present and future generations.
                </p>
            </div>

            <div>
                <h3 className="text-[20px] font-bold text-white bg-[#0f4c81] p-3 pl-4 mb-6">
                    Related Sites:
                </h3>
                <div className="flex flex-col gap-6">
                    <div>
                        <h4 className="font-bold text-gray-800 mb-1">World Health Organisation</h4>
                        <a href="http://www.who.int/phe/health_topics/en/index.html" target="_blank" rel="noopener noreferrer" className="text-[#0085E2] hover:underline text-[14px]">
                            http://www.who.int/phe/health_topics/en/index.html
                        </a>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-800 mb-1">National Safety Council</h4>
                        <a href="http://www.nsc.org/" target="_blank" rel="noopener noreferrer" className="text-[#0085E2] hover:underline text-[14px]">
                            http://www.nsc.org/
                        </a>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-800 mb-1">Europian Commision funded project on Environment and health</h4>
                        <a href="http://www.environmentandhealth.org/" target="_blank" rel="noopener noreferrer" className="text-[#0085E2] hover:underline text-[14px]">
                            http://www.environmentandhealth.org/
                        </a>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-800 mb-1">New York City Department of Health and Mental Hygine</h4>
                        <a href="http://nyc.gov/health" target="_blank" rel="noopener noreferrer" className="text-[#0085E2] hover:underline text-[14px]">
                            http://nyc.gov/health
                        </a>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-800 mb-1">Environmental Health News</h4>
                        <a href="http://environmentalhealthnews.com/" target="_blank" rel="noopener noreferrer" className="text-[#0085E2] hover:underline text-[14px]">
                            http://environmentalhealthnews.com/
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderPunjabCrisisContent = () => (
        <div className="flex flex-col gap-4 text-[14px] text-gray-700 leading-relaxed text-justify">
            <p>
                Recently a Punjab Pollution Control (PPCB) sponsored epidemiological study done by Post Graduate Institute of Medical Research (PGIMR) Chandigrarh has indicated the rise in cancer cases in cotton belt of Punjab. The study indicates that Cotton belt of Punjab is engulfed by lethal pesticides and causing major health problems. Though this study was done in one Talwandi Sabo block of Bathinda district but the similar symptoms are emerging from entire cotton belt. The situation is so grim that village after village is reporting cancer, reproductive disorder, birth of mentally retarded children and other pesticide related diseases.
            </p>
            <p>
                The PGI study clearly indicts pesticides for high prevalence of cancer in the area. Study found both tap and ground water laced with carcinogenic chemicals. Tap water contains high content of arsenic, chromium, iron, and Hg. Where as ground water also was replete with arsenic, chromium, nickel and iron. Even these deadly pesticides had seeped into locally - grown vegetables as well. The cauliflower was toxicated with Heptachlor Endoepoxide, Chlorpyrifos, Alpha Endosulfan and Alfa HCH.
            </p>
            <p>
                It is also an most worrisome factor that traces of Persistent Organic Pollutants- POPs are found at large in Punjab. This is Slow poisoning of Punjab. POP’s are banned in majority of countries. POP’s are known Endocrine disrupters and the main reason behind neurotoxicity, immunotoxicity, reproductive disorders, testicular cancer, and congenital malformations. Even the motherhood is challenged by POP’s through foetotoxicity.
            </p>
            <p>
                The pollution from POPs knows no boundaries. They travel long distances and get deposited and accumulated in terrestrial and aquatic ecosystems. They are highly toxic even in very low concentrations, and resist degradation. The POPs can accumulate in fatty tissue (Bioaccumulation), becoming more concentrated higher in the food chain and with time by biomagnification process.
            </p>
            <p>
                Kheti Virasat Mission volunteers also came across the frightening truth in Rampura block of Bathinda district in year 2002. Several villages facing acute health problems in this block. The high cases of cancer, reproductive health disorder, congenital abnormities and physical – mental illness is a common factor here. More over the contaminated ground water is also aggravating the devastating situation.
            </p>
            <p>
                Now the cancer cases are reported from other parts of cotton belt too. Villages in Lambi, Giddarbaha, Malout and Abohar also witnessing spreading clutches of deadly cancer.
            </p>
            <p>
                Another aspect of environmental health crisis is that skeletal fluorosis is fast taking the greater cotton belt in its grip. Which is more serious issue to be tackled urgently.
            </p>
            <p>
                It is evident that Punjab is trapped into a disastrous vicious cycle of slow poisoning. The Study conducted by Kheti Virasat and Green Peace in the year 2003, indicated that pesticide exposure to the children in cotton belt is adversely effecting their growth. The children of the study area (Talwandi Sabo Block) has several problems related to their physical and mental growth. A comparative study was taken up in the high pesticide consuming area of Talwandi Sabo block with an average consumption rate of 17.5 liters per acre per annum against the lowest pesticide consuming area of Anandpur Sahib block with average consumpting rate of less then 0.5 liter per acre per annum. This study has shown that pesticides impair the development abilities of children. Documentation of other instances was done to link various disease like cancer, infertility, mental retardation or neural tube defects- NTD and loss of physical stamina to pesticides.
            </p>
            <p>
                It was note worthy that Kheti Virasat has first indicated the higher rate of cancer, infertility and several other health problems in some villages of Bathinda. This was reported in media. Punjab Government took cognizance of this and ordered an inquiry. Then Punjab Pollution Control Board commissioned a study to the PGIMR Chandigarh, which had submitted its final report in February 2005. This report is a clear warning to people of Punjab that they setting on time bomb of environmental health hazards.
            </p>
            <p className="font-bold text-black mt-2">Executive summary of PPCB - PGIMER report:</p>
            <p>
                In the developed world, life expectancy has increased substantially during the last century. Deaths due to infectious diseases also declined in these countries whereas deaths due to cancer and other cardiovascular diseases increased. With the rising socio-economic status, similar health transition is occurring in some of the developing countries. In India, though infectious diseases continue to be a public health problem but an increase in the occurrence of non-communicable diseases has also been noted particularly in urban areas and in economically advanced states.
            </p>
            <p>
                Citizen groups has observed a rising trend of cancer deaths in Jajjal and Giana villages of Bathinda District. Punjab Health Department conducted a preliminary inquiry and found that the prevalence of cancer cases in these villages is similar to the other parts of India. The reasons for higher number of cases were attributed to better awareness about the diseases and availing of medical facilities for its diagnosis.. As local population has suspected water to be cause of this problem, Punjab Pollution Control Board tested the water samples and found traces of DDT and BHC in the canal-based water supply. However, these insecticides were not detected in the underground water. Based on these preliminary observations, it was decided that Community Medicine Department of PGIMER Chandigarh should conduct an epidemiological study to investigate weather cancer cases are higher in Talwandi Sabo block of District Bathinda compared to other areas and if that is the case then what are the possible causes of this problem?
            </p>
            <p>
                A house –to-house survey was conducted in Talwandi Sabo Block in Bathinda District and Chamkaur Sahib Block of Roop Nagar District to identify the number of existing cancer cases, and the number of cancer deaths that have occured in last 10 years. Cancer cases and deaths were found to be significantly higher in Talwandi Sabo compared to Chamkaur Sahib Block. The prevalence of confirmed cancer cases was 103 per lakh at Talwandi Sabo (107/85315) and 71 per lakh at Chamkaur Sahib (71/97928). Cancer of female reproductive system, i.e., breast, uterus/cervix and ovary were more common in Chamkaur Sahib Block. Cancer deaths per lakh per year were 52 in Talwandi Sabo compared to 30 per lakh at Chamkaur Sahib.
            </p>
            <p>
                A comparison of the characteristics of randomly selected individuals, from the villages where a cancer cases existed of death due to cancer had occurred in last 2 years, revealed that involvement in cultivation, pesticides use, alcohol and smoking were more common in Talwandi Sabo Block as compared to Chamkaur Sahib Limited studies show that in drinking water the levels of heavy metals such as As, Cd, Cr, Se, Hg were generally higher, and pesticides such as heptachlor, ethion, and chlorpyrifos were also higher in samples of drinking water, vegetables, and blood in Talwandi Sabo as compared to Chamkaur Sahib.
            </p>
            <p>
                The cancer cases and deaths are higher Talwandi Sabo probably due to more use of pesticides, tobacco and alcohol. It is found that multiple factors were responsible for cancer cases in the Talwandi Sabo area. Therefore, a multi pronged strategy to provide safe water supply, discouraging the indiscriminate use of pesticides. Tobacco and alcohol is recommended. A cancer registry should be established in the region for monitoring the trend of cancer cases in future.
            </p>

            <p className="font-bold text-black mt-2">Recommendations:</p>
            <p>
                As cancer cases and deaths are significantly higher in Talwandi Sabo due to multiple factors such as indiscriminate use of pesticides, tobacco and alcohol, the technical committee of the project recommended that
            </p>
            <ul className="list-disc pl-5 space-y-2">
                <li>
                    Agriculture Department should educate people involved in agriculture about pesticides storage, use, and proper disposal of the empty pesticides containers. Steps should be taken so that pesticides are used judiciously and safely.
                </li>
                <li>
                    Public Health Department should monitor the level of pesticides and heavy metals in drinking water periodically and monitoring reports should be Communicated to Director, Health services for necessary action.
                </li>
                <li>
                    Local Health Authority designated by Health Department under the prevention of food Adulteration act should monitor the level of pesticides and heavy metals in food.
                </li>
                <li>
                    Medical colleges/institutions should set up a cancer registry in the state for monitoring the trend of cancer cases and should also enhance provision of screening, diagnosis and treatment facilities for cancer cases.
                </li>
                <li>
                    Health Department should start a Non-Communicable Diseases Control Programme focused on behavior change communication so as to change the harmful life styles, i.e. tobacco, alcohol, and other substance abuse.
                </li>
                <li>
                    A comprehensive study of the status of environmental health in other cotton growing areas of Punjab should be conducted for which a scheme may be prepared in consultation with Punjab Pollution Control Board and forwarded to Ministry to Environment and Forest for the sanction of funds.
                </li>
            </ul>
        </div>
    );

    return (
        <div className="font-family-helvetica min-h-screen bg-white">
            {/* Top Banner Section - RTS Style */}
            <section className="w-full flex justify-center bg-white">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="relative w-full h-[200px] md:h-[280px] rounded-t-[24px] md:rounded-t-[48px] overflow-hidden">
                        <div
                            className="absolute inset-0 z-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${bannerImage})` }}
                        />
                        <div
                            className="absolute inset-0 z-10 bg-cover bg-center blur-sm scale-105"
                            style={{
                                backgroundImage: `url(${bannerImage})`,
                                WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 70%)',
                                maskImage: 'linear-gradient(to bottom, black 0%, transparent 70%)'
                            }}
                        />
                        <div className="absolute inset-0 z-20 bg-linear-to-b from-[#00A3FF]/30 via-[#00A3FF]/60 to-white" />

                        <div className="relative z-50 flex flex-col items-center justify-center h-full text-center px-4 md:px-6 mt-[-30px]">
                            <h1 className="text-[32px] md:text-[40px] font-bold text-[#000000] tracking-tight leading-none mb-8">
                                Health & Environment
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
                        <div className="flex-1">
                            <div className="rounded-[24px] p-4 md:p-8 min-h-[400px]">
                                <h2 className="text-[20px] md:text-[24px] font-semibold text-gray-800 mb-6 border-b border-gray-100 pb-4 uppercase">
                                    {selectedTab}
                                </h2>

                                {selectedTab === "Health and Environment" ? (
                                    renderHealthEnvironmentContent()
                                ) : selectedTab === "Exposure to Asbestos can lead to Cancer" ? (
                                    renderAsbestosContent()
                                ) : (
                                    renderPunjabCrisisContent()
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HealthEnvironment;
