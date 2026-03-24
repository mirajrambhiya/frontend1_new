const standingorders = "/assets/standingorders.svg";

function AuthUnderBMW() {
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
                                Authorization Management Under Bio-Medical Waste Rules
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
                    <div className="mb-8 text-[14px] text-gray-700 leading-relaxed">
                        <p>
                            The authorization for collection/reception/treatment /transport/storage/disposal of Biomedical waste as defined under the Rules needs to be obtained by Board as Board has been declared as prescribed Authority under the Rules.
                        </p>
                    </div>

                    {/* Schedule Section */}
                    <div className="mb-10">
                        <h2 className="text-[20px] font-semibold text-gray-800 mb-6">
                            Schedule for waste treatment facilities like incinerator/autoclave/microwave system
                        </h2>
                        <h3 className="text-[14px] font-semibold text-gray-800 mb-6 uppercase">Fees for Authorization under BMW Management Rules for H.C.E'S</h3>

                        {/* First Table */}
                        <div className="border border-gray-200 rounded-[20px] md:rounded-[35px] overflow-hidden mb-12 overflow-x-auto">
                            <table className="w-full border-collapse min-w-[500px]">
                                <thead>
                                    <tr className="border-b border-gray-100">
                                        <th className="py-6 px-6 text-left w-16">
                                            <div className="border border-gray-100 rounded-full py-3 px-4 text-center text-[14px] font-semibold">
                                                S.No.
                                            </div>
                                        </th>
                                        <th className="py-6 px-2 text-left">
                                            <div className="border border-gray-100 rounded-full py-3 px-6 text-[14px] font-semibold">
                                                Description
                                            </div>
                                        </th>
                                        <th className="py-6 px-6 text-left w-64">
                                            <div className="border border-gray-100 rounded-full py-3 px-6 text-[14px] font-semibold">
                                                Timeline
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    <tr className="hover:bg-gray-50/50 transition-colors">
                                        <td className="py-5 px-8 text-[13px] text-gray-500">A.</td>
                                        <td className="py-5 px-4 text-[13px] text-gray-700">
                                            Hospitals and nursing homes in towns with populations of 30 lakhs and above.
                                        </td>
                                        <td className="py-5 px-6 text-[13px] text-gray-700">
                                            By 31st December 1999 or earlier.
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-50/50 transition-colors">
                                        <td className="py-5 px-8 text-[13px] text-gray-500">B</td>
                                        <td className="py-5 px-4 text-[13px] text-gray-700" colSpan={2}>
                                            Hospitals and nursing homes in towns with population of below 30 lakhs: -
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-50/50 transition-colors">
                                        <td className="py-5 px-8 text-[13px] text-gray-500"></td>
                                        <td className="py-5 px-4 text-[13px] text-gray-700">
                                            <span className="font-medium">(a)</span> With 500 beds and above
                                        </td>
                                        <td className="py-5 px-6 text-[13px] text-gray-700">
                                            By 31st December 1999 or earlier
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-50/50 transition-colors">
                                        <td className="py-5 px-8 text-[13px] text-gray-500"></td>
                                        <td className="py-5 px-4 text-[13px] text-gray-700">
                                            <span className="font-medium">(b)</span> With 200 beds and above but less than 500 beds
                                        </td>
                                        <td className="py-5 px-6 text-[13px] text-gray-700">
                                            By 31st December 2000 or earlier
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-50/50 transition-colors">
                                        <td className="py-5 px-8 text-[13px] text-gray-500"></td>
                                        <td className="py-5 px-4 text-[13px] text-gray-700">
                                            <span className="font-medium">(c)</span> With 50 beds and above but less than 200 beds
                                        </td>
                                        <td className="py-5 px-6 text-[13px] text-gray-700">
                                            By 31st December 2001 or earlier
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-50/50 transition-colors">
                                        <td className="py-5 px-8 text-[13px] text-gray-500"></td>
                                        <td className="py-5 px-4 text-[13px] text-gray-700">
                                            <span className="font-medium">(d)</span> With less than 50 beds
                                        </td>
                                        <td className="py-5 px-6 text-[13px] text-gray-700">
                                            By 31st December 2002 or earlier
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-50/50 transition-colors">
                                        <td className="py-5 px-8 text-[13px] text-gray-500">C</td>
                                        <td className="py-5 px-4 text-[13px] text-gray-700">
                                            All other institutions generating bio-medical waste not included in A.
                                        </td>
                                        <td className="py-5 px-6 text-[13px] text-gray-700">
                                            By 31st December 2002 or earlier.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Fees Section */}
                    <div className="mb-10">
                        <h2 className="text-[20px] font-semibold text-gray-800 mb-4">
                            Fees for Authorisation under Bio-Medical Waste (Management and Handling) Rules, 1998
                        </h2>
                        <p className="text-[14px] text-gray-700 mb-6">
                            As per Environment Department, Government of Maharashtra Government Resolution No. ENV/1098 / 559 / P.K.259 /T.C.1, dt. 10.04.2003
                        </p>
                        <h3 className="text-[14px] font-semibold text-gray-800 mb-6 uppercase">Fees For CBWTDF</h3>

                        {/* Fees Table */}
                        <div className="border border-gray-200 rounded-[20px] md:rounded-[35px] overflow-hidden overflow-x-auto">
                            <table className="w-full border-collapse min-w-[500px]">
                                <thead>
                                    <tr className="border-b border-gray-100">
                                        <th className="py-6 px-6 text-left w-16">
                                            <div className="border border-gray-100 rounded-full py-3 px-4 text-center text-[14px] font-semibold">
                                                S.No.
                                            </div>
                                        </th>
                                        <th className="py-6 px-2 text-left" colSpan={2}>
                                            <div className="border border-gray-100 rounded-full py-3 px-6 text-[14px] font-semibold">
                                                Description
                                            </div>
                                        </th>
                                        <th className="py-6 px-6 text-left w-48">
                                            <div className="border border-gray-100 rounded-full py-3 px-6 text-[14px] font-semibold">
                                                Fees to be paid (p. a)
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    <tr className="hover:bg-gray-50/50 transition-colors">
                                        <td className="py-5 px-8 text-[13px] text-gray-500">(a)</td>
                                        <td className="py-5 px-4 text-[13px] text-gray-700 font-medium" colSpan={2}>
                                            Bed Capacity
                                        </td>
                                        <td className="py-5 px-6 text-[13px] text-gray-700"></td>
                                    </tr>
                                    <tr className="hover:bg-gray-50/50 transition-colors">
                                        <td className="py-5 px-8 text-[13px] text-gray-500"></td>
                                        <td className="py-5 px-4 text-[13px] text-gray-500 w-16">i)</td>
                                        <td className="py-5 px-4 text-[13px] text-gray-700">Between 01-05</td>
                                        <td className="py-5 px-6 text-[13px] text-gray-700">No Fees</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50/50 transition-colors">
                                        <td className="py-5 px-8 text-[13px] text-gray-500"></td>
                                        <td className="py-5 px-4 text-[13px] text-gray-500 w-16">ii)</td>
                                        <td className="py-5 px-4 text-[13px] text-gray-700">Between 06-25</td>
                                        <td className="py-5 px-6 text-[13px] text-gray-700">Rs. 1,250/-</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50/50 transition-colors">
                                        <td className="py-5 px-8 text-[13px] text-gray-500"></td>
                                        <td className="py-5 px-4 text-[13px] text-gray-500 w-16">iii)</td>
                                        <td className="py-5 px-4 text-[13px] text-gray-700">Between 26-50</td>
                                        <td className="py-5 px-6 text-[13px] text-gray-700">Rs. 2,500/-</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50/50 transition-colors">
                                        <td className="py-5 px-8 text-[13px] text-gray-500"></td>
                                        <td className="py-5 px-4 text-[13px] text-gray-500 w-16">iv)</td>
                                        <td className="py-5 px-4 text-[13px] text-gray-700">Between 50-200</td>
                                        <td className="py-5 px-6 text-[13px] text-gray-700">Rs. 5,000/-</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50/50 transition-colors">
                                        <td className="py-5 px-8 text-[13px] text-gray-500"></td>
                                        <td className="py-5 px-4 text-[13px] text-gray-500 w-16">v)</td>
                                        <td className="py-5 px-4 text-[13px] text-gray-700">Between 201-500</td>
                                        <td className="py-5 px-6 text-[13px] text-gray-700">Rs. 10,000/-</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50/50 transition-colors">
                                        <td className="py-5 px-8 text-[13px] text-gray-500"></td>
                                        <td className="py-5 px-4 text-[13px] text-gray-500 w-16">vi)</td>
                                        <td className="py-5 px-4 text-[13px] text-gray-700">Above 501</td>
                                        <td className="py-5 px-6 text-[13px] text-gray-700">Rs. 15,000/-</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50/50 transition-colors">
                                        <td className="py-5 px-8 text-[13px] text-gray-500">(b)</td>
                                        <td className="py-5 px-4 text-[13px] text-gray-700" colSpan={2}>
                                            Treatment Facility provider for bio-medical waste
                                        </td>
                                        <td className="py-5 px-6 text-[13px] text-gray-700">Rs. 10,000/- per year</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50/50 transition-colors">
                                        <td className="py-5 px-8 text-[13px] text-gray-500">(c)</td>
                                        <td className="py-5 px-4 text-[13px] text-gray-700" colSpan={2}>
                                            Transporter of Bio-Medical Wastes
                                        </td>
                                        <td className="py-5 px-6 text-[13px] text-gray-700">Rs. 07,500/- per year</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50/50 transition-colors">
                                        <td className="py-5 px-8 text-[13px] text-gray-500">(d)</td>
                                        <td className="py-5 px-4 text-[13px] text-gray-700" colSpan={2}>
                                            All other bio-medical waste generating And handling agencies. (Except a, b, c above)
                                        </td>
                                        <td className="py-5 px-6 text-[13px] text-gray-700">Rs. 02,500/- per year</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Note */}
                        <div className="text-[14px] text-gray-700 leading-relaxed">
                            <p>
                                These fees are payable in the form of Demand Draft on any Nationalised Bank at the Respective Sub-Regional or Regional office or at Head Quarter along with the completely filled prescribed application forms.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AuthUnderBMW;
