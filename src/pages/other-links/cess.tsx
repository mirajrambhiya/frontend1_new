const standingorders = "/assets/standingorders.svg";

function CessAct() {
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
                                Related Topics & Information - Cess
                            </h1>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 h-10 bg-linear-to-t from-white to-transparent z-40" />
                    </div>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="w-full flex justify-center bg-white py-12">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="bg-white rounded-[24px] p-6 md:p-8 border border-gray-100 shadow-sm">
                        <div className="text-[14px] text-gray-700 leading-relaxed space-y-6 text-justify">
                            <p>
                                The Water (Prevention & Control of Pollution) Cess Act 1977 has been implemented in the state of Maharashtra with effect from 1st April 1983 and it is amended from 26th Jan 1992 and is further amended w.e.f. 5/3/03. As per this amended Act, water Cess is calculated on the basis of water consumed by industry/ local authority for specified purposes.
                            </p>
                            <p>
                                The Water Cess will be levied and collected from all the industries whose water consumption is more than 10 cubic meter per day and not generating hazardous waste. It is also applicable to all local Authorities including Municipal Councils, Corporations, Cantonment Boards and any other body entrusted with the duty of supplying Water.
                            </p>
                            <p>
                                Under the provisions of the Cess Act it is statutory responsibility to submit monthly returns of Water consumption in Form I duly completed before 5th of next month showing water consumed in the previous month. The water can be used for the purposes specified in Schedule II showing rates of Cess.
                            </p>
                            <p>
                                On the basis of information submitted by the industry, Assessment Order will be send for payment. In case of failure to make payment within a period of one month, interest will be charged at the rate of 2% per month not exceeding the amount of Cess. Any amount under this act can be recovered by Central Govt. in the same manner as an arrears of land revenue.
                            </p>
                            <p>
                                If any Industry or local authority installs any plant for treatment of sewage or trade effluent, they are entitled to rebate of 25 % of Cess payable. Rebate under Cess Act cannot be considered if:
                            </p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Water consumption is more than maximum quantity as prescribed for that industry.</li>
                                <li>They fails to comply with any of the provisions of Sec25 of Water ( P & CP ) Act 1974 or any standards laid down by Central Govt. under Environment (Protection) Act 1986.</li>
                            </ul>
                            <p>
                                Any person / industry / local authority aggrieved by an order of Assessment made, may appeal within 30 days from date of Assessment in Form II with Appeal fee of Rs.50/-. Every appeal under this section shall be final and shall not be called in question in any court of law.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CessAct;
