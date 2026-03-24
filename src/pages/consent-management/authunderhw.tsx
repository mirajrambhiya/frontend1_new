const standingorders = "/assets/standingorders.svg";

function AuthUnderHW() {
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
                            <h1 className="text-[20px] md:text-[40px] font-bold text-[#000000] tracking-tight leading-tight mb-4 md:mb-8 max-w-[800px]">
                                Authorization Management Under Hazardous Waste Rules
                            </h1>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 h-10 bg-linear-to-t from-white to-transparent z-40" />
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="w-full flex justify-center bg-white py-8 md:py-12">
                <div className="w-full max-w-[1282px] px-4">
                    {/* Introduction Text */}
                    <div className="mb-8 text-[14px] text-gray-700 leading-relaxed space-y-4">
                        <p>
                            The authorization for collection/reception/treatment /transport/storage/disposal of Hazardous waste as defined under the Rules needs to be obtained by Board.
                        </p>
                        <p>
                            This section provides the information about application form, fees etc.
                        </p>
                    </div>

                    {/* Schedule Section */}
                    <div className="mb-10">
                        <h3 className="text-[14px] font-semibold text-gray-800 mb-6 uppercase">Revision of Authorization Fees under Hazardous Waste Rules (H OWM RULES)</h3>

                        <div className="border border-gray-200 rounded-[20px] md:rounded-[35px] overflow-hidden mb-10 overflow-x-auto">
                            <table className="w-full border-collapse min-w-[500px]">
                                {/* Table content would go here */}
                            </table>
                        </div>

                        <h2 className="text-[20px] font-semibold text-gray-800 mb-6">
                            Schedule I And II of the Hazardous waste (Management and Handling) Rules, 1989 as amended in 2003
                        </h2>

                        <div className="text-[14px] text-gray-700 leading-relaxed space-y-6">
                            <p>
                                The schedule I of the said rules gives the list of the processes generating Hazardous wastes. There are 44 processes listed in this schedule which are called hazardous waste generating processes provided they generate the waste as mentioned in column 3 of the schedule.
                            </p>

                            <p>
                                The schedule II of the Rules gives the list of waste substances with concentration limits for different classes of waste. The hazardous waste can be classified in 5 classes as per the concentration of the waste substances mentioned in the schedule for each class.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AuthUnderHW;
