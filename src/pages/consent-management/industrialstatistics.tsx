import DocumentCard from '../../components/DocumentCard';

const standingorders = "/assets/standingorders.svg";

function IndustrialStatistics() {
    return (
        <div className="font-family-helvetica">
            {/* Top Banner Section */}
            <section className="w-full flex justify-center bg-white">
                <div className="w-full max-w-[1282px] px-0 md:px-4">
                    <div className="relative w-full h-[200px] md:h-[280px] md:rounded-t-[48px] overflow-hidden">
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

                        <div className="relative z-30 flex flex-col items-center justify-center h-full text-center px-6 mt-[-20px] md:mt-[-30px]">
                            <h1 className="text-[32px] md:text-[40px] font-bold text-[#000000] tracking-tight leading-tight mb-4 md:mb-8">
                                Industrial Statistics
                            </h1>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 h-10 bg-linear-to-t from-white to-transparent z-40" />
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="w-full flex justify-center bg-white py-8 md:py-12">
                <div className="w-full max-w-[900px] px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <DocumentCard
                            document={{ id: 1, title: "17 Category Industry Detail As On 31st March 2024" }}
                            wide={false}
                        />
                        <DocumentCard
                            document={{ id: 2, title: "Industrial Statistics 23-24 As On 31st March 2024" }}
                            wide={false}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default IndustrialStatistics;
