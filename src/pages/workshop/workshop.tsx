import { useState } from 'react';
import { X } from 'lucide-react';
import DocumentCard from '../../components/DocumentCard';
import workshop1 from "/assets/workshop1.jpg"
import workshop2 from "/assets/workshop2.jpg"
import workshop3 from "/assets/workshop3.jpg"

interface WorkshopImage {
    src: string;
    alt: string;
    desc: string;
}

const standingorders = "/assets/standingorders.svg";

// Sidebar items from user request
const workshopItems = [
    "Conference on Restoration of Polluted Rivers Streches and Public awareness on plastic ban in Maharashtra dated on 25/04/2018",
    "Conference on E-Mobility for Cleaner Environment"
];

function Workshop() {
    const [selectedTab, setSelectedTab] = useState(workshopItems[0]);
    const [selectedImage, setSelectedImage] = useState<WorkshopImage | null>(null);

    return (
        <div className="font-family-helvetica">
            {/* Top Banner Section - Matches RTS Page */}
            <section className="w-full flex justify-center bg-white">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="relative w-full h-[280px] rounded-t-[48px] overflow-hidden">
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

                        <div className="relative z-30 flex flex-col items-center justify-center h-full text-center px-6 mt-[-30px]">
                            <h1 className="text-[40px] font-bold text-[#000000] tracking-tight leading-none mb-8">
                                Workshop
                            </h1>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 h-10 bg-linear-to-t from-white to-transparent z-40" />
                    </div>
                </div>
            </section>

            {/* Main Content with Sidebar */}
            <section className="w-full flex justify-center bg-white py-12">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="flex gap-12">
                        {/* Left Sidebar - Matches Standing Orders Sidebar Styling */}
                        <div className="w-[320px] flex-shrink-0">
                            <div className="flex flex-col gap-4">
                                {workshopItems.map((item) => {
                                    const isActive = selectedTab === item;
                                    return (
                                        <div
                                            key={item}
                                            onClick={() => {
                                                setSelectedTab(item);
                                                window.scrollTo({ top: 0, behavior: 'smooth' });
                                            }}
                                            className={`flex items-center justify-between px-6 py-5 rounded-[20px] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] cursor-pointer transition-all duration-200
                                                ${isActive
                                                    ? 'border-2 border-[#00A3FF] bg-[#00A3FF]/5'
                                                    : 'border border-gray-300 hover:border-[#00A3FF] hover:text-[#00A3FF]'
                                                }`}
                                        >
                                            <span className={`text-[14px] font-normal transition-colors duration-200 leading-snug ${isActive ? 'text-[#00A3FF] font-medium' : 'text-gray-800'}`}>
                                                {item}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Right Content Area */}
                        <div className="flex-1">
                            <div className="rounded-[24px] p-8 min-h-[400px] border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
                                <h2 className="text-[24px] font-semibold text-gray-800 mb-6 leading-tight">
                                    {selectedTab}
                                </h2>

                                {selectedTab === workshopItems[0] ? (
                                    <div className="space-y-10">
                                        {/* Day Schedule */}
                                        <div>
                                            <h3 className="text-[16px] font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">DAY SCHEDULE</h3>
                                            <div className="grid grid-cols-1 gap-4">
                                                <DocumentCard
                                                    document={{ id: 1, title: "Day Schedule" }}
                                                    wide={true}
                                                />
                                            </div>
                                        </div>

                                        {/* Letters */}
                                        <div>
                                            <h3 className="text-[16px] font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">Letters</h3>
                                            <div className="grid grid-cols-1 gap-4">
                                                {[
                                                    { id: 2, title: "Letter to Hon'ble Chairman CPCB" },
                                                    { id: 3, title: "Letter to ACS Enviroment Department" },
                                                    { id: 4, title: "Letter to Urban Development" },
                                                    { id: 5, title: "Letter to Director musiciple administration" }
                                                ].map((doc) => (
                                                    <DocumentCard
                                                        key={doc.id}
                                                        document={doc}
                                                        wide={true}
                                                    />
                                                ))}
                                            </div>
                                        </div>

                                        {/* Presentation */}
                                        <div>
                                            <h3 className="text-[16px] font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">Presentation</h3>

                                            {/* Section I */}
                                            <div className="mb-8">
                                                <h4 className="text-[14px] font-bold text-gray-700 mb-4 pl-1">Section I - Restoration of Polluted River Stretches</h4>
                                                <div className="grid grid-cols-1 gap-4">
                                                    {[
                                                        { id: 6, title: "Presentation of Central Pollution Control Board by Dr.Y.B.Sontakke, Joint Director - WPC, MPCB on Restoration of Polluted River Stretches of Maharashtra" },
                                                        { id: 7, title: "Presentation of Central Pollution Control Board by Shri. R.M.Bhardwaj, Scientist 'E' & DH-WQM-I on concept & plan on Restoration of Polluted River Stretches of Maharashtra" }
                                                    ].map((doc) => (
                                                        <DocumentCard
                                                            key={doc.id}
                                                            document={doc}
                                                            wide={true}
                                                        />
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Section II */}
                                            <div>
                                                <h4 className="text-[14px] font-bold text-gray-700 mb-4 pl-1">Section II - Public Awareness on Plastic Ban</h4>
                                                <div className="grid grid-cols-1 gap-4">
                                                    {[
                                                        { id: 8, title: "Plastic Bag Ban Notification 2018" },
                                                        { id: 9, title: "Presentation of Central Pollution Control Board by Shri. N.N.Gurav, RO(HQ), MPCB on Plastic Waste Management in Maharashtra" }
                                                    ].map((doc) => (
                                                        <DocumentCard
                                                            key={doc.id}
                                                            document={doc}
                                                            wide={true}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Photos */}
                                        <div>
                                            <h3 className="text-[16px] font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">Photos of 25th April 2018 Workshop</h3>
                                            <div className="grid grid-cols-1 gap-4">
                                                <DocumentCard
                                                    document={{ id: 10, title: "Photos of 25th April 2018 Workshop" }}
                                                    wide={true}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="text-[14px] text-gray-700 leading-relaxed text-justify space-y-6">
                                        <p>
                                            Maharashtra Pollution Control Board with support of India Auto Show Expo organized a half day conference focussed on <strong>E -Mobility for Cleaner Environment</strong> recently at Bombay Exhibition Centre Mumbai. Mr. E. Ravendiran, Member secretary MPCB welcomed everyone and stated the need of cleaner transport technology for cities and highlighting global and India specific policy initiatives for electric mobility. He also mentioned extra efforts in terms of developing charging infrastructure for electric vehicles as well as appropriate policy development. Guest of Honour, Mr. Ramesh Subramanyam, CFO & President New Business, Tata Power highlighted the success of EV adaption depends upon the availability and quality of charging infrastructure provided which can effectively address user range anxiety issue. He further added that we need to improve the share of renewable energy in electricity grid mix so as to make EVs greener in true sense. He pointed out that conversion on electricity for usage needed to factor in change of ratio globe as usage goes up. He also pointed to the need to electrical scale for privately provided public infrastructure to be viable. Mr. Sudhir Shrivastava, Chairman, MPCB in his inaugural remarks mentioned that mobility is now shifting to the connected Automatic, shared electric (CASE) paradigm . Surveying the transition to electric mobility, he said that while the transition to electric 4 wheelers will be need good charging infrastructure, the shift to e-2 wheelers with possibility of battery swapping and home charging can happen quickly. He said that MPCB would be allowing to work with and support enterprise in the battery swapping area is also those in providing mobility as services ‘MASS” Chief Guest, Mr. Ashish Kumar Singh, IAS, Principal Secretary, Home & Transport Department highlighted that internal driver motor vehicle had revolutionised personal mobility level has now created its own problems . He stated that personal car is used only for a fraction of day is one of the most in efficiently used asset and move towards shared, electric mobility is gaining huge momentum. This is going to be the second personal mobility revolution
                                        </p>
                                        <p>
                                            The technical Program was hosted and introduced by Dr. V.M. Motghare, Joint Director, MPCB with detailed elaborations and importance of emobility concept for cleaner environment and MPCB Goal to achieve same in lieu of govt of India’s National Clean Air Program. The first technical session about the faster adaption of e-mobility was chaired by Mr. Ashish Kulkarni from E & Y. The contributing members to this session was Mr. Surendrakumar Bagade (GM, BEST), Mr. Satish Sahastrabuddhe (Ad. Transport Commissioner), Mr. Paresh Bhatt (Chief – New Business, Tata Power). Mr. Sandeep Bhargava (VP – Ola) and Mr. Suwarn Pant (Tata Motors) Mr. Surendrakumar Bagade initiated his talk with efforts taken by BEST to improve the public transportation. He mentioned the existing EV fleet which is run by BEST with the help of contractor and future induction of new electric buses. Considering higher capital cost and lack of infrastructure, less number of existing operational contractors are interested for EV. With the recent procurement of smaller size EV buses by BEST will improve the flexibility of operation in Mumbai city. He suggested that based on real time pollution levels, public transportation systems should be promoted over personalized transportation.
                                        </p>
                                        <p>
                                            Second session on ‘Environmental Aspects of E-Mobility’ was chaired by Mr. Nitin Labhsetwar (Sr. Scientist – CSIR NEERI) which include the panel of Ms. Anuradda Ganesh (Director – Cummins), Mr. Moqtik Bawase (GM – ARAI), Mr. Kedar Rele (Country GM – Umicore) and Ms. Prachi Nimkar (Director – Ecosupport). Session chairperson Mr. Labhsetwar set the tone of session by mentioning that transportation means / fuels should be evaluated. Based on lifecycle analysis Ms. Anuradda Ganesh mentioned that currently EVs are having higher CO2 footprint than existing options. Based on Well to Wheel analysis, CNG is best option among Diesel, petrol, EV and hydrogen fuel cells. She suggested that mix of BEV, IC engines based on biofuels blending is required to optimize environmental aspects from transportation. Mr. Moqtik Bawase highlighted that the battery manufacturing the capital and environment intensive industry. ARAI is centre of excellence for Electric vehicles and they are currently developing alternative cell technology for Indian conditions. Mr. Kedar Rele from Umicore mentioned that circular economy in terms of battery recycling and replacing virgin material by recycled for battery is important considering sustainable future. Dismantling of li-ion battery is crucial from safety perspective. Ms. Prachi Nimkar presented various air quality scenarios in terms of CO and PM perspective due to EV adaption. Policy continuity and phase out plans for older vehicles is required along with setting up priorities for EV adaption.
                                        </p>
                                        <p>
                                            Conference concluding remarks were delivered by Mr. E. Ravendiran (Member secretary, MPCB). He mentioned that holistic approach to understand environmental impact at source and receptor is required for electric vehicles.
                                        </p>

                                        <div className="flex flex-row justify-center gap-6 mt-10">
                                            {[
                                                { src: workshop1, alt: "Expert Presentation on E-Mobility", desc: "(From L to R) : Dr. V.M Motghare , Joint Director , Maharashtra Pollution Control Board , Mr. E. Ravendiran (IAS) Member Secretary , Maharashtra Pollution Control Board , Mr. Ashish Kumar Singh (IAS) Principal Secretary, Home & Transport Department , Mr. Sudhir Shrivastava , Chairman , Maharashtra Pollution Control Board, Mr. Ramesh N Subramanyam , CFO & President New Business , Tata Power." },
                                                { src: workshop2, alt: "Workshop Participants", desc: "(From L to R) : Mr. Sandeep Bhargava, Vice President ,OLA ; Mr. Satish Sahasttrabuddhe, Additional Transport Commissioner, Mr. Ashish Kulkarni , E&Y, Mr. Paresh Bhatt, Chief-New Business Services, Tata Power, Mr. Suwarn Pant, GM-EV Product Planning" },
                                                { src: workshop3, alt: "Panel Discussion", desc: "(From L to R) : Dr. Anuradda Ganesh, Director – Chief Tech. Advisor to CTO, Cummins , Mr. Kedar Rele , Country General Manager, Umicore, Dr. Nitin Labhsetwar,Senior Scientist, NEERI, Mr. Motique Bawase, Dy. General Manager , ARAI, Mrs. Prachi Nimkar, Director, Eco support Pvt. Ltd." }
                                            ].map((img, index) => (
                                                <div
                                                    key={index}
                                                    className="relative cursor-pointer group"
                                                    onClick={() => setSelectedImage(img)}
                                                >
                                                    <img
                                                        src={img.src}
                                                        alt={img.alt}
                                                        className="w-[200px] h-[140px] object-cover rounded-xl shadow-md border border-gray-100 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    {/* Close Button */}
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-8 right-8 p-3 text-white bg-white/10 hover:bg-white/20 rounded-full transition-all z-[1001] shadow-lg border border-white/10 cursor-pointer"
                    >
                        <X className="w-8 h-8" />
                    </button>

                    <div
                        className="relative max-w-5xl max-h-[90vh] overflow-hidden rounded-2xl shadow-2xl group"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className="max-w-full max-h-[85vh] object-contain"
                        />

                        {/* Text Reveal Animation */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out flex flex-col items-center text-center">
                            <p className="text-gray-200 text-sm max-w-2xl">{selectedImage.desc}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Workshop;
