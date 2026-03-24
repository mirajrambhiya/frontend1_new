import { useState } from 'react';

const standingorders = "/assets/standingorders.svg";

const riverData = {
    "Nag River": {
        location: "Nag River (Nagpur)",
        labelBg: "#631174",
        date: "September 2025",
        metrics: [
            { label: "Approved Project Cost", value: "1926.99 Crore", color: "#3B82B6" },
            { label: "Funds Received", value: "4.59 Crore", color: "#458C5A" },
            { label: "Funds Utilized", value: "4.59 Crore", color: "#D97B1C" },
            { label: "Fund Balance", value: "0", color: "#C0392B" }
        ],
        donutData: [
            { label: "Funds Received", value: 4.59, color: "#2D7D46" },
            { label: "Funds Utilized", value: 4.59, color: "#D17D1F" }
        ],
        barData: [
            { label: "Approved", value: 1926.99, color: "#336B9B" },
            { label: "Received", value: 4.59, color: "#E6E6E6" },
            { label: "Utilized", value: 4.59, color: "#E6E6E6" },
            { label: "Balance", value: 0, color: "#E6E6E6" }
        ],
        financialYear: {
            year: "2024-25",
            data: [
                { label: "Approved GOI", value: 1115.22, color: "#336B9B" },
                { label: "Approved GOM", value: 507.36, color: "#4A90C2" },
                { label: "Approved NMC", value: 304.41, color: "#74B2E0" },
                { label: "Funds Received GOI", value: 4.59, color: "#2D7D46" },
                { label: "Funds Utilized", value: 4.59, color: "#D17D1F" }
            ]
        }
    },
    "Mula Mutha": {
        location: "Mula Mutha",
        labelBg: "#D13A49",
        date: "September 2025",
        metrics: [
            { label: "Approved Project Cost", value: "990.26 Crore", color: "#3B82B6" },
            { label: "Funds Received", value: "731.09 Crore", color: "#2E7D46" },
            { label: "Funds Utilized", value: "640.5 Crore", color: "#D17D1F" },
            { label: "Fund Balance", value: "90.59 Crore", color: "#C0392B" }
        ],
        donutData: [
            { label: "Funds Received", value: 731.09, color: "#2D7D46" },
            { label: "Funds Utilized", value: 640.5, color: "#D17D1F" }
        ],
        barData: [
            { label: "Approved", value: 990.26, color: "#336B9B" },
            { label: "Received", value: 731.09, color: "#2E7D46" },
            { label: "Utilized", value: 640.5, color: "#D17D1F" },
            { label: "Balance", value: 90.59, color: "#C0392B" }
        ],
        financialYear: {
            year: "2024-25",
            data: [
                { label: "Approved GOI", value: 841.72, color: "#336B9B" },
                { label: "Approved PMC", value: 148.54, color: "#4A90C2" },
                { label: "Funds Received GOI", value: 621.45, color: "#2E7D46" },
                { label: "Funds Received PMC", value: 109.64, color: "#45A049" },
                { label: "Funds Utilized GOI", value: 544.45, color: "#D17D1F" },
                { label: "Funds Utilized PMC", value: 96.05, color: "#F0A500" },
                { label: "Funds Balance", value: 90.59, color: "#C0392B" }
            ]
        }
    }
};

const Hexagon = ({ color, label, value }: { color: string, label: string, value: string }) => (
    <div className="flex flex-col items-center gap-2">
        <div
            className="w-24 h-28 relative flex items-center justify-center text-white font-bold p-2 text-center text-[12px] leading-tight"
            style={{
                clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                backgroundColor: color
            }}
        >
            {value}
        </div>
        <span className="text-[11px] font-medium text-gray-600 text-center w-24 leading-tight">{label}</span>
    </div>
);

function NRCDStatus() {
    const [selectedRiver, setSelectedRiver] = useState<keyof typeof riverData>("Nag River");
    const data = riverData[selectedRiver];

    return (
        <div className="font-family-helvetica bg-[#F8F9FA]">
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
                                NRCD STP Projects Status
                            </h1>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 h-10 bg-linear-to-t from-white to-transparent z-40" />
                    </div>
                </div>
            </section>

            {/* Main Dashboard Section */}
            <section className="w-full flex justify-center py-8">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="flex flex-col items-center gap-8">

                        {/* Dropdown Selector */}
                        <div className="relative w-full max-w-[300px]">
                            <select
                                value={selectedRiver}
                                onChange={(e) => setSelectedRiver(e.target.value as keyof typeof riverData)}
                                className="w-full appearance-none bg-[#631174] text-white px-6 py-2.5 rounded-lg text-center font-medium cursor-pointer outline-none shadow-md"
                            >
                                <option value="Nag River">Nag River</option>
                                <option value="Mula Mutha">Mula Mutha</option>
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white">▼</div>
                        </div>

                        {/* Title Header */}
                        <div className="w-full bg-white border border-gray-100 rounded-xl py-4 shadow-sm">
                            <h2 className="text-center font-bold text-[#D97B1C] text-[18px] md:text-[20px]">
                                NRCD STP Projects Status for {selectedRiver}
                            </h2>
                        </div>

                        {/* Summary Metrics Row */}
                        <div className="w-full flex flex-col lg:flex-row gap-6">
                            {/* Left Side Label */}
                            <div
                                className="text-white p-6 rounded-2xl flex items-center justify-center text-center font-bold text-[14px] w-full lg:w-[150px] shadow-lg"
                                style={{ backgroundColor: data.labelBg }}
                            >
                                {data.location}
                            </div>

                            {/* Center Metrics Area */}
                            <div className="flex-1 bg-white rounded-2xl border border-gray-100 p-6 shadow-sm flex flex-col gap-6">
                                <div className="bg-gray-400 text-white py-1 px-4 text-center rounded-lg text-[13px] font-medium">
                                    Total Project Cost Estimation (As on {data.date})
                                </div>
                                <div className="flex flex-wrap justify-center gap-8 md:gap-16 lg:gap-24">
                                    {data.metrics.map((metric, idx) => (
                                        <Hexagon key={idx} color={metric.color} label={metric.label} value={metric.value} />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Charts Row 1 */}
                        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Fund Utilization Donut */}
                            <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm flex flex-col items-center">
                                <h3 className="text-[13px] font-bold text-gray-400 mb-8">% Fund Utilization of {selectedRiver}</h3>
                                <div className="relative w-64 h-64">
                                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                                        <circle
                                            className="text-transparent"
                                            strokeWidth="30"
                                            stroke="currentColor"
                                            fill="transparent"
                                            r="35"
                                            cx="50"
                                            cy="50"
                                        />
                                        <circle
                                            style={{ color: data.donutData[0].color, strokeDasharray: "110 220" }}
                                            strokeWidth="30"
                                            stroke="currentColor"
                                            fill="transparent"
                                            r="35"
                                            cx="50"
                                            cy="50"
                                        />
                                        <circle
                                            style={{ color: data.donutData[1].color, strokeDasharray: "110 220", strokeDashoffset: "-110" }}
                                            strokeWidth="30"
                                            stroke="currentColor"
                                            fill="transparent"
                                            r="35"
                                            cx="50"
                                            cy="50"
                                        />
                                    </svg>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-32 h-32 bg-white rounded-full flex flex-col items-center justify-center">
                                            <span className="text-[12px] font-bold text-gray-700">{data.donutData[0].value} Cr</span>
                                            <span className="text-[12px] font-bold text-gray-700">{data.donutData[1].value} Cr</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-8 mt-8">
                                    {data.donutData.map((d, i) => (
                                        <div key={i} className="flex items-center gap-2">
                                            <div className="w-10 h-3" style={{ backgroundColor: d.color }}></div>
                                            <span className="text-[11px] font-medium text-gray-500">{d.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Project Amount Bar Chart */}
                            <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm flex flex-col items-center">
                                <h3 className="text-[13px] font-bold text-gray-400 mb-8 self-end pr-8">Amount In Crores</h3>
                                <div className="flex items-end justify-around w-full h-64 border-l border-b border-gray-200 pl-4 relative">
                                    {/* Y-Axis Lines */}
                                    <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                                        {[2000, 1800, 1600, 1400, 1200, 1000, 800, 600, 400, 200, 0].map(val => (
                                            <div key={val} className="w-full flex items-center gap-2">
                                                <span className="text-[9px] text-gray-400 w-8 text-right">{val.toLocaleString()}</span>
                                                <div className="flex-1 h-[1px] bg-gray-100"></div>
                                            </div>
                                        ))}
                                    </div>
                                    {/* Bars */}
                                    <div className="flex-1 flex items-end justify-around pl-10 z-10 w-full mb-[-1px]">
                                        {data.barData.map((d, i) => (
                                            <div key={i} className="flex flex-col items-center gap-2 w-full max-w-[60px]">
                                                <div className="relative flex flex-col items-center w-full">
                                                    <span className="text-[10px] font-medium text-gray-500 mb-1">{d.value > 0 ? d.value : ""}</span>
                                                    <div
                                                        className="w-full transition-all duration-500"
                                                        style={{
                                                            height: `${(d.value / 2000) * 200}px`,
                                                            backgroundColor: d.color,
                                                            minHeight: d.value > 0 ? "2px" : "0px"
                                                        }}
                                                    ></div>
                                                </div>
                                                <span className="text-[10px] text-gray-400 font-medium whitespace-nowrap">{d.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Charts Row 2 - Financial Year Breakdown */}
                        <div className="w-full bg-white rounded-2xl border border-gray-100 p-8 shadow-sm flex flex-col items-center">
                            <h3 className="text-[13px] font-bold text-gray-400 mb-8">Financial Year {data.financialYear.year} ({selectedRiver})</h3>

                            {/* Legend */}
                            <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8">
                                {data.financialYear.data.map((d, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <div className="w-10 h-3" style={{ backgroundColor: d.color }}></div>
                                        <span className="text-[10px] font-medium text-gray-500">{d.label}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex items-end justify-around w-full h-80 border-l border-b border-gray-200 pl-4 relative max-w-5xl">
                                {/* Y-Axis Lines */}
                                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                                    {[1200, 1000, 800, 600, 400, 200, 0].map(val => (
                                        <div key={val} className="w-full flex items-center gap-2">
                                            <span className="text-[9px] text-gray-400 w-8 text-right">{val.toLocaleString()}</span>
                                            <div className="flex-1 h-[1px] bg-gray-100"></div>
                                        </div>
                                    ))}
                                </div>
                                {/* Bars */}
                                <div className="flex-1 flex items-end justify-center gap-1 md:gap-4 pl-10 z-10 mb-[-1px]">
                                    {data.financialYear.data.map((d, i) => (
                                        <div key={i} className="flex flex-col items-center gap-2 w-full max-w-[120px]">
                                            <div className="relative flex flex-col items-center w-full">
                                                <span className="text-[10px] font-medium text-gray-500 mb-1">{d.value.toLocaleString()}</span>
                                                <div
                                                    className="w-full transition-all duration-500"
                                                    style={{
                                                        height: `${(d.value / 1200) * 280}px`,
                                                        backgroundColor: d.color
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <span className="text-[12px] font-bold text-gray-500 mt-4">{data.financialYear.year}</span>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default NRCDStatus;
