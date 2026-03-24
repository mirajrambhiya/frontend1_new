
// Seeded Random Helper (0 to 1)
export const seededRandom = (seed: number) => {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
};

// Generate seed from date string YYYY-MM-DD
export const getSeedFromDateString = (dateString: string) => {
    let hash = 0;
    for (let i = 0; i < dateString.length; i++) {
        const char = dateString.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return Math.abs(hash);
};

export const getDailyMetrics = (dateString: string) => {
    const seed = getSeedFromDateString(dateString);
    // Daily ranges (customized to sum up to reasonable monthly totals)
    // Visitors: 2100 - 3055/day (~2578 avg to hit ~1.08M total over 421 days)
    // Hits: 8000 - 12000/day
    // Bounce: 60% - 85%

    const r1 = seededRandom(seed);
    const r2 = seededRandom(seed + 1);
    const r3 = seededRandom(seed + 2);

    const visitors = Math.floor(r1 * (3055 - 2100 + 1)) + 2100;
    const hits = Math.floor(r2 * (12000 - 8000 + 1)) + 8000;
    const bounceRate = (r3 * (85 - 60) + 60);
    const bouncedVisitors = Math.floor(visitors * (bounceRate / 100));

    return { visitors, hits, bouncedVisitors };
};

// Helper to format date as YYYY-MM-DD
export const formatDate = (date: Date) => {
    return date.toISOString().split('T')[0];
};

export const generateRangeMetrics = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    let totalVisitors = 0;
    let totalHits = 0;
    let totalBounced = 0;
    const monthlyAggregation: Record<string, { visitors: number, hits: number }> = {};

    // Loop through each day
    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
        const dateStr = formatDate(d);
        const daily = getDailyMetrics(dateStr);

        totalVisitors += daily.visitors;
        totalHits += daily.hits;
        totalBounced += daily.bouncedVisitors;

        // Monthly breakdown for chart
        const monthLabel = d.toLocaleString('default', { month: 'short', year: 'numeric' }); // e.g., Jan 2026
        if (!monthlyAggregation[monthLabel]) {
            monthlyAggregation[monthLabel] = { visitors: 0, hits: 0 };
        }
        monthlyAggregation[monthLabel].visitors += daily.visitors;
        monthlyAggregation[monthLabel].hits += daily.hits;
    }

    const avgBounceRate = totalVisitors > 0 ? (totalBounced / totalVisitors) * 100 : 0;

    // Convert monthlyAggregation object to array
    const monthlyData = Object.keys(monthlyAggregation).map(label => ({
        label,
        ...monthlyAggregation[label]
    }));

    return {
        visitors: totalVisitors,
        hits: totalHits,
        bounceRate: avgBounceRate,
        monthlyData
    };
};
