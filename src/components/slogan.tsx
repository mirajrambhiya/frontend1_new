const maharashtraflag = "/assets/maharshtra.png";
const mpcbfilled = "/assets/mpcb_filled.svg";

function Slogan() {
    return (
        <div className="flex items-center justify-center relative font-family-helvetica py-10 md:py-0 overflow-hidden md:overflow-visible h-[400px] md:h-auto">
            <img
                src={maharashtraflag}
                alt="maharashtra flag"
                className="w-[280px] h-[280px] md:w-[980px] md:h-[980px] opacity-10 mt-[-20px] md:mt-[-50px]"
            />
            <img
                src={mpcbfilled}
                alt="mpcb"
                className="w-[200px] h-auto md:w-[670px] md:h-[182px] absolute mt-[-180px] md:mt-[-500px]"
            />
            <div
                className="flex flex-col items-center justify-center text-center px-4 md:p-8 w-[340px] md:w-[800px] h-auto md:h-[250px] absolute"
            >
                <h2 className="text-[16px] md:text-[30px] font-medium text-gray-900 mb-3 md:mb-4 leading-tight mt-[60px] md:mt-[90px]">
                    50+ Years of Environmental Protection
                </h2>

                <p className="text-[12px] md:text-[22px] text-gray-600 leading-snug max-w-[280px] md:max-w-[800px] mb-6 md:mb-15 items-center">
                    Improved in the Board’s functional efficiency, transparency in operation and adequate response to
                    <span className="font-semibold text-gray-800"> growing need</span> of
                    <span className="font-semibold text-gray-800"> environmental protection</span> and
                    <span className="font-semibold text-gray-800"> sustainable development</span> in state of Maharashtra.
                </p>

                <button
                    onClick={() => window.location.href = '/about/introduction'}
                    className="px-4 py-1.5 md:px-8 md:py-3 bg-[#0096FF] text-white text-[12px] md:text-[22px] rounded-xl md:rounded-2xl transition-colors duration-300 cursor-pointer hover:bg-[#007acc]"
                >
                    Read More
                </button>
            </div>
        </div>
    )
}

export default Slogan