import DocumentCard from './DocumentCard';

const standingorders = "/assets/standingorders.svg";

const cemsDocuments = [
    {
        id: 1,
        title: "Standard Operating Procedure for Real Time Online Monitoring Of the Effluent & Emission Monitoring System"
    },
    {
        id: 2,
        title: "Boards Circular on Uploading/ Transmission of Online CEMS data"
    },
    {
        id: 3,
        title: "Open API for Online CEMS data submission"
    },
    {
        id: 4,
        title: "Open API for Camera Connectivity"
    },
    {
        id: 5,
        title: "FAQs for Online data submission."
    },
    {
        id: 6,
        title: "Direction for Installation of Remote Calibration Performance Check/Validation from MPCB Server"
    }
];

function OnlineCEMS() {
    return (
        <div className="font-family-helvetica">
            {/* Top Banner Section - RTI Style */}
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
                            <h1 className="text-[24px] md:text-[32px] lg:text-[40px] font-bold text-[#000000] tracking-tight leading-tight md:leading-none mb-4 md:mb-8 uppercase">
                                Guidelines for Online CEMS Data Submission
                            </h1>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 h-10 bg-linear-to-t from-white to-transparent z-40" />
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="w-full flex justify-center bg-white py-12">
                <div className="w-full max-w-[1282px] px-4">

                    {/* Header Link and Buttons */}
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm mb-8 flex flex-wrap items-center gap-y-4 gap-x-6">
                        <div className="text-[15px] font-medium text-gray-800">
                            OCEMS Data of the industries: {' '}
                            <a
                                href="https://onlinecems.ecmpcb.in/#/publicPortal/categoryList"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#0085E2] hover:underline"
                            >
                                https://onlinecems.ecmpcb.in/#/publicPortal/categoryList
                            </a>
                        </div>

                        <div className="flex items-center gap-3">
                            <a
                                href="https://onlinecems.ecmpcb.in/mpcb/registration.html"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-2 bg-white text-[#0085E2] border border-[#0085E2] text-[14px] font-semibold rounded-lg hover:bg-[#0085E2] hover:text-white transition-colors shadow-sm cursor-pointer no-underline text-center"
                            >
                                Register
                            </a>
                            <a
                                href="https://onlinecems.ecmpcb.in/#/login"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-2 bg-white text-[#0085E2] border border-[#0085E2] text-[14px] font-semibold rounded-lg hover:bg-[#0085E2] hover:text-white transition-colors shadow-sm cursor-pointer no-underline text-center"
                            >
                                Login
                            </a>
                        </div>
                    </div>

                    {/* Grid of 3 columns, 2 rows */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {cemsDocuments.map((doc) => (
                            <div key={doc.id} className="flex justify-center">
                                <DocumentCard document={doc} />
                            </div>
                        ))}
                    </div>


                </div>
            </section>
        </div>
    );
}

export default OnlineCEMS;
