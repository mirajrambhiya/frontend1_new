import { useState } from 'react';
import AboutUsBanner from "../AboutUs";
import Banner from "../navbanner-aboutus";
import DocumentCard from '../../components/DocumentCard';
const training1 = "/assets/training1.png";
const training2 = "/assets/training2.jpg";

const trainingItems = [
    "Training & Sensitization programme to MPCB Officials, At Yashada, Pune (Period 29th July 2024 To 22nd Aug 2024)",
    "Annual Training Imparted To MPCB Officials"
];

const trainingProgrammes = [
    { id: 'tp1', title: "Training Programme for the Year 2019-20", date: "2020-03-31", pdfUrl: "#" },
    { id: 'tp2', title: "Training Programme for the Year 2020-21", date: "2021-03-31", pdfUrl: "#" },
    { id: 'tp3', title: "Training Programme for the Year 2021-22", date: "2022-03-31", pdfUrl: "#" },
    { id: 'tp4', title: "Training Programme for the Year 2022-23", date: "2023-03-31", pdfUrl: "#" }
];

const archiveTrainingProgrammes = [
    { id: 'atp1', title: "Training Programme for the Year April 2012 to March 2013", date: "2013-03-31", pdfUrl: "#" },
    { id: 'atp2', title: "Training Programme Abstract from 2012 to 2013", date: "2013-03-31", pdfUrl: "#" },
    { id: 'atp3', title: "Training programme for the Year April 2010 to March 2011", date: "2011-03-31", pdfUrl: "#" },
    { id: 'atp4', title: "Training programme for the Year April 2011 to March 2012", date: "2012-03-31", pdfUrl: "#" },
    { id: 'atp5', title: "Training Programme Abstract from 2010 to 2012", date: "2012-03-31", pdfUrl: "#" }
];

function Training() {
    const [selectedItem, setSelectedItem] = useState<string>(trainingItems[0]);
    const [isArchive, setIsArchive] = useState(false);

    return (
        <div>
            <AboutUsBanner />
            <Banner bannerSection="training" />

            <div className="flex flex-col md:flex-row gap-8 md:gap-16 p-4 md:p-12 bg-white min-h-screen font-family-helvetica text-[#333] mx-0 md:ml-[90px] md:mr-[120px]">

                {/* Left Sidebar - Training Items */}
                <div className="w-full md:w-[280px] flex flex-col gap-3 md:gap-5 shrink-0">
                    {trainingItems.map((item) => {
                        const isActive = selectedItem === item;
                        return (
                            <div
                                key={item}
                                onClick={() => setSelectedItem(item)}
                                className={`flex items-center justify-between px-4 md:px-6 py-4 md:py-5 rounded-[20px] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] cursor-pointer transition-all duration-200
                                    ${isActive
                                        ? 'border-2 border-[#00A3FF] bg-[#00A3FF]/5'
                                        : 'border border-gray-300 hover:border-[#00A3FF] hover:text-[#00A3FF]'
                                    }`}
                            >
                                <span className={`text-[14px] md:text-[16px] font-normal transition-colors duration-200 ${isActive ? 'text-[#00A3FF] font-medium' : 'text-gray-800'}`}>
                                    {item}
                                </span>
                            </div>
                        );
                    })}
                </div>

                {/* Right Content */}
                <div className="flex-1 w-full min-w-0">
                    <h1 className="text-[20px] md:text-[28px] font-bold mb-6 md:mb-8 text-black border-b border-gray-200 pb-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <span>{selectedItem}</span>
                        {/* Show toggle only for "Annual Training Imparted To MPCB Officials" */}
                        {selectedItem === trainingItems[1] && (
                            <div className="flex items-center bg-gray-100 p-1 rounded-full shrink-0 w-fit self-start md:self-auto">
                                <button
                                    onClick={() => setIsArchive(false)}
                                    className={`cursor-pointer px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${!isArchive ? 'bg-white text-[#0085E2] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                                >
                                    Current
                                </button>
                                <button
                                    onClick={() => setIsArchive(true)}
                                    className={`cursor-pointer px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${isArchive ? 'bg-white text-[#0085E2] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                                >
                                    Archive
                                </button>
                            </div>
                        )}
                    </h1>

                    {selectedItem === trainingItems[0] && (
                        <div className="space-y-6">
                            <p className="text-[14px] md:text-[15px] leading-relaxed text-gray-700">
                                The Maharashtra Pollution Control Board (MPCB) has successfully organized a series of comprehensive residential training sessions for the Board’s officials at various levels of the organization, in collaboration with YASHADA, Pune, which handled the logistical arrangements. These training sessions were meticulously designed to establish, implement, and maintain a structured approach, ensuring that all personnel acquire the necessary training and competency relevant to their roles and responsibilities.
                            </p>
                            <p className="text-[14px] md:text-[15px] leading-relaxed text-gray-700">
                                The training initiative started from an in-depth gap analysis conducted by the Board, which provided valuable insights into the specific training needs of officials. This analysis enabled the Board to tailor training modules to align precisely with the job requirements of the participants. Subject matter experts in each relevant field were identified and invited to deliver specialized lectures, ensuring that the content was both relevant and high-quality.
                            </p>
                            <p className="text-[14px] md:text-[15px] leading-relaxed text-gray-700">
                                The training program is scheduled to take place from July to September 2024, with the inaugural ceremony held on July 29, 2024, at YASHADA, Pune. The event was graced by the presence of the Board’s esteemed Chairman; Shri. Siddhesh Kadam, and the Hon’ble Member Secretary; Dr. Avinash Dhakne (IAS), along with the Course Coordinator, Shri. Nandkumar Gurav (Assistant Secretary - Technical). During the inauguration, Chairman Kadam emphasized the significance of these training sessions and highlighted the need for continued training to enhance organizational performance. Member Secretary; Dr. Avinash Dhakne (IAS) underscored the importance of translating available information into actionable knowledge and encouraged participants to provide detailed feedback on the training sessions.
                            </p>

                            <div className="flex flex-col md:flex-row gap-6 mt-8">
                                <img src={training1} alt="Training Session Inauguration" className="w-full md:w-1/2 rounded-[25px] shadow-md object-cover h-auto aspect-video md:h-[300px]" />
                                <img src={training2} alt="Group Photo" className="w-full md:w-1/2 rounded-[25px] shadow-md object-cover h-auto aspect-video md:h-[300px]" />
                            </div>
                        </div>
                    )}

                    {selectedItem === trainingItems[1] && (
                        <div>
                            {!isArchive ? (
                                <div className="space-y-4">
                                    {trainingProgrammes.map((doc) => (
                                        <DocumentCard
                                            key={doc.id}
                                            document={doc}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {archiveTrainingProgrammes.map((doc) => (
                                        <DocumentCard
                                            key={doc.id}
                                            document={doc}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {selectedItem !== trainingItems[0] && selectedItem !== trainingItems[1] && (
                        <div className="text-gray-500 text-[14px] md:text-[15px]">
                            Content for "{selectedItem}" will be displayed here.
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}

export default Training;