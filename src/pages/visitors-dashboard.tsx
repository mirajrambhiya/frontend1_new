import { useState, useMemo } from 'react';
import { generateRangeMetrics, formatDate, getSeedFromDateString, seededRandom } from '../utils/visitorUtils'; // Import utils

const VisitorsDashboard = () => {
    // Helper to format date as DD/MM/YYYY for display
    const formatDateDisplay = (dateString: string) => {
        const parts = dateString.split('-');
        return `${parts[2]}/${parts[1]}/${parts[0]}`;
    };

    // Constants
    const MIN_DATE = "2024-12-01";
    const TODAY = formatDate(new Date());

    // Calculate 6 months ago for default view
    const sixMonthsAgoDate = new Date();
    sixMonthsAgoDate.setMonth(sixMonthsAgoDate.getMonth() - 6);
    // Ensure we don't go before MIN_DATE if that's a hard limit for data existence
    // But assuming data exists from Dec 2024 (as per user), and now is 2026, 6 months ago is fine.
    const SIX_MONTHS_AGO = formatDate(sixMonthsAgoDate);

    // State
    const [startDate, setStartDate] = useState(SIX_MONTHS_AGO);
    const [endDate, setEndDate] = useState(TODAY);

    // Initial Metrics
    const [metrics, setMetrics] = useState(() => generateRangeMetrics(SIX_MONTHS_AGO, TODAY));

    const handleApply = () => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const diffTime = Math.abs(end.getTime() - start.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (start < new Date(MIN_DATE)) {
            alert(`Start date cannot be before 01/12/2024`);
            return;
        }
        if (end > new Date(TODAY)) {
            alert(`End date cannot be in the future`);
            return;
        }
        if (start > end) {
            alert("Start date must be before end date");
            return;
        }
        if (diffDays > 180) { // Approx 6 months
            alert("Date range cannot exceed 6 months");
            return;
        }

        const newMetrics = generateRangeMetrics(startDate, endDate);
        setMetrics(newMetrics);
    };

    // Device Breakdown Data (Desktop > 75%)
    const deviceData = useMemo(() => {
        // Use the same seed logic for chart consistency
        // Combine start/end for seed
        const seed = getSeedFromDateString(startDate + endDate);
        const desktopRand = seededRandom(seed + 3); // Distinct offset

        // Desktop random > 75% e.g., 76-95%
        const desktop = Math.floor(desktopRand * (95 - 76 + 1)) + 76;
        const mobile = 100 - desktop;

        return {
            desktop,
            mobile,
            gradient: `conic-gradient(
                #5B9BD5 0% ${desktop}%, 
                #A55EA5 ${desktop}% 100%
            )`
        };
    }, [startDate, endDate]); // Recalculate when dates change

    // Calculate Chart Max Value for Scaling
    const maxChartVal = useMemo(() => {
        if (!metrics.monthlyData.length) return 100000;
        const maxHits = Math.max(...metrics.monthlyData.map(d => d.hits));
        return Math.ceil(maxHits * 1.2); // 20% headroom
    }, [metrics.monthlyData]);

    // Helper to format large numbers for axis (k/M)
    const formatAxisNum = (num: number) => {
        if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
        if (num >= 1000) return (num / 1000).toFixed(0) + 'k';
        return num.toString();
    };

    return (
        <div className="font-family-helvetica bg-slate-50 min-h-screen p-4 md:p-8">
            <div className="max-w-7xl mx-auto space-y-6">

                {/* Header Section */}
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Visitor Summary</h1>
                    <p className="text-sm text-gray-500 mt-1">
                        For a period of {formatDateDisplay(startDate)} — {formatDateDisplay(endDate)}
                    </p>
                </div>

                {/* Filter Control */}
                <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-200 flex flex-wrap items-end gap-4">
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-gray-600">Start:</label>
                        <div className="relative">
                            <input
                                type="date"
                                value={startDate}
                                min={MIN_DATE}
                                max={TODAY}
                                onChange={(e) => setStartDate(e.target.value)}
                                className="pl-4 pr-10 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none text-gray-700 w-48 cursor-pointer"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-gray-600">End:</label>
                        <div className="relative">
                            <input
                                type="date"
                                value={endDate}
                                min={startDate}
                                max={TODAY}
                                onChange={(e) => setEndDate(e.target.value)}
                                className="pl-4 pr-10 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none text-gray-700 w-48 cursor-pointer"
                            />
                        </div>
                    </div>

                    <button
                        onClick={handleApply}
                        className="px-8 py-2 cursor-pointer bg-[#4486C6] hover:bg-[#366da3] text-white font-medium rounded-lg text-sm transition-colors mb-[1px]"
                    >
                        Apply
                    </button>
                </div>

                {/* Cards Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Visitors */}
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center justify-center gap-2">
                        <span className="text-sm text-gray-500 font-medium">Total Visitors</span>
                        <span className="text-3xl font-bold text-gray-800 tracking-tight">
                            {metrics.visitors.toLocaleString()}
                        </span>
                    </div>
                    {/* Hits */}
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center justify-center gap-2">
                        <span className="text-sm text-gray-500 font-medium">Total Hits</span>
                        <span className="text-3xl font-bold text-gray-800 tracking-tight">
                            {metrics.hits.toLocaleString()}
                        </span>
                    </div>
                    {/* Bounce Rate */}
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center justify-center gap-2">
                        <span className="text-sm text-gray-500 font-medium">Bounce Rate</span>
                        <span className="text-3xl font-bold text-gray-800 tracking-tight">
                            {metrics.bounceRate.toFixed(2)}%
                        </span>
                    </div>
                </div>

                {/* Charts Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[500px]">

                    {/* Bar Chart Section (2/3 width) */}
                    <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col min-h-[400px] md:min-h-0">
                        <h3 className="text-center text-sm font-semibold text-gray-700 mb-1">Visitors vs Page Hits Over Time</h3>
                        <p className="text-center text-xs text-gray-500 mb-8">Visitors vs Page Hits (Monthly)</p>

                        <div className="flex-1 w-full pl-12 pr-4 relative">
                            {/* Y-Axis Grid & Labels */}
                            <div className="absolute inset-0 flex flex-col justify-between text-[10px] text-gray-400 font-medium pb-8 pl-2 pointer-events-none">
                                {[1, 0.8, 0.6, 0.4, 0.2, 0].map(ratio => (
                                    <div key={ratio} className="w-full flex items-center border-b border-gray-100 h-full relative">
                                        <span className="absolute -left-12 w-10 text-right">{formatAxisNum(Math.round(maxChartVal * ratio))}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Bars Container */}
                            <div className="absolute inset-0 pt-2 pb-8 pl-[60px] flex items-end justify-center gap-8 overflow-x-auto">
                                {metrics.monthlyData.map((data, index) => (
                                    <div key={index} className="flex flex-col items-center gap-2 h-full justify-end group min-w-[60px]" style={{ width: `${100 / metrics.monthlyData.length}%`, maxWidth: '100px' }}>
                                        <div className="flex items-end gap-1 h-full w-full justify-center relative">
                                            {/* Tooltip Wrapper */}
                                            <div className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap z-10 pointer-events-none">
                                                <div>Visitors: {data.visitors.toLocaleString()}</div>
                                                <div>Hits: {data.hits.toLocaleString()}</div>
                                            </div>

                                            {/* Unique Visitors Bar (Blue) */}
                                            <div
                                                className="w-1/3 bg-[#5B9BD5] rounded-t-sm hover:opacity-90 transition-all duration-500"
                                                style={{ height: `${(data.visitors / maxChartVal) * 100}%` }}
                                            ></div>
                                            {/* Page Hits Bar (Purple) */}
                                            <div
                                                className="w-1/3 bg-[#9561A1] rounded-t-sm hover:opacity-90 transition-all duration-500"
                                                style={{ height: `${(data.hits / maxChartVal) * 100}%` }}
                                            ></div>
                                        </div>
                                        <span className="text-[10px] text-gray-500 font-medium whitespace-nowrap">{data.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Legend */}
                        <div className="flex justify-center gap-6 mt-4 pt-4 border-t border-gray-50">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-3 bg-[#5B9BD5]"></div>
                                <span className="text-xs text-gray-600">Unique Visitors</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-3 bg-[#9561A1]"></div>
                                <span className="text-xs text-gray-600">Page Hits</span>
                            </div>
                        </div>
                    </div>

                    {/* Donut Chart Section (1/3 width) */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center min-h-[400px] md:min-h-0">
                        <h3 className="text-center text-sm font-semibold text-gray-700 mb-1">Device Breakdown</h3>
                        <p className="text-center text-xs text-gray-500 mb-8">Device Breakdown</p>

                        <div className="relative w-64 h-64 flex items-center justify-center">
                            {/* Donut Circle */}
                            <div
                                className="w-full h-full rounded-full"
                                style={{
                                    background: deviceData.gradient
                                }}
                            ></div>
                            {/* White Inner Circle to make it a donut */}
                            <div className="absolute w-32 h-32 bg-white rounded-full"></div>
                        </div>

                        {/* Legend */}
                        <div className="flex justify-center gap-4 mt-8 w-full">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-3 bg-[#5B9BD5]"></div>
                                <span className="text-xs text-gray-600">Desktop ({deviceData.desktop}%)</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-3 bg-[#A55EA5]"></div>
                                <span className="text-xs text-gray-600">Mobile ({deviceData.mobile}%)</span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default VisitorsDashboard;
