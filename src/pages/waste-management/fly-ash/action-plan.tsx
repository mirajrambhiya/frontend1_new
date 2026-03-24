
import React from 'react';
import PageBanner from "../../../components/PageBanner";

interface ActionPlanRow {
    srNo: number;
    year: string;
    calendarYear: string;
    flyAshMT: string;
    flyAshPercentage: string;
    bottomAshMT: string;
    bottomAshPercentage: string;
    totalAshMT: string;
    totalAshUtilizationPlan: string;
}

interface ParaliRow {
    year: string;
    coalConsumption: string;
    ashPercentage: string;
    ashGeneration: string;
    ashUtilization: string;
    ashUtiPercentage: string;
    bricks: string;
    bunds: string;
    agri: string;
    cement: string;
    landfill: string;
    others: string;
    stowing?: string;
}

const FlyAshActionPlan: React.FC = () => {
    const dahanuData: ActionPlanRow[] = [
        { srNo: 1, year: "1st", calendarYear: "2000-01", flyAshMT: "55346", flyAshPercentage: "9", bottomAshMT: "12299", bottomAshPercentage: "2", totalAshMT: "67645", totalAshUtilizationPlan: "11" },
        { srNo: 2, year: "2nd", calendarYear: "2001-02", flyAshMT: "61495", flyAshPercentage: "10", bottomAshMT: "15374", bottomAshPercentage: "2.5", totalAshMT: "76869", totalAshUtilizationPlan: "12.5" },
        { srNo: 3, year: "3rd", calendarYear: "2002-03", flyAshMT: "104542", flyAshPercentage: "17", bottomAshMT: "18449", bottomAshPercentage: "3", totalAshMT: "122990", totalAshUtilizationPlan: "20" },
        { srNo: 4, year: "4th", calendarYear: "2003-04", flyAshMT: "138364", flyAshPercentage: "22.5", bottomAshMT: "27673", bottomAshPercentage: "4.5", totalAshMT: "166037", totalAshUtilizationPlan: "27" },
        { srNo: 5, year: "5th", calendarYear: "2004-05", flyAshMT: "178336", flyAshPercentage: "29", bottomAshMT: "30748", bottomAshPercentage: "5", totalAshMT: "209084", totalAshUtilizationPlan: "34" },
        { srNo: 6, year: "6th", calendarYear: "2005-06", flyAshMT: "221383", flyAshPercentage: "36", bottomAshMT: "30748", bottomAshPercentage: "5", totalAshMT: "252130", totalAshUtilizationPlan: "41" },
        { srNo: 7, year: "7th", calendarYear: "2006-07", flyAshMT: "252130", flyAshPercentage: "41", bottomAshMT: "43047", bottomAshPercentage: "7", totalAshMT: "295177", totalAshUtilizationPlan: "48" },
        { srNo: 8, year: "8th", calendarYear: "2007-08", flyAshMT: "289027", flyAshPercentage: "47", bottomAshMT: "49196", bottomAshPercentage: "8", totalAshMT: "338224", totalAshUtilizationPlan: "55" },
        { srNo: 9, year: "9th", calendarYear: "2008-09", flyAshMT: "332074", flyAshPercentage: "54", bottomAshMT: "49196", bottomAshPercentage: "8", totalAshMT: "381270", totalAshUtilizationPlan: "62" },
        { srNo: 10, year: "10th", calendarYear: "2009-10", flyAshMT: "368971", flyAshPercentage: "60", bottomAshMT: "55346", bottomAshPercentage: "9", totalAshMT: "424317", totalAshUtilizationPlan: "69" },
        { srNo: 11, year: "11th", calendarYear: "2010-11", flyAshMT: "405868", flyAshPercentage: "66", bottomAshMT: "61495", bottomAshPercentage: "10", totalAshMT: "467364", totalAshUtilizationPlan: "76" },
        { srNo: 12, year: "12th", calendarYear: "2011-12", flyAshMT: "436616", flyAshPercentage: "71", bottomAshMT: "73794", bottomAshPercentage: "12", totalAshMT: "510410", totalAshUtilizationPlan: "83" },
        { srNo: 13, year: "13th", calendarYear: "2012-13", flyAshMT: "461214", flyAshPercentage: "75", bottomAshMT: "92243", bottomAshPercentage: "15", totalAshMT: "553457", totalAshUtilizationPlan: "90" },
        { srNo: 14, year: "14th", calendarYear: "2013-14", flyAshMT: "485812", flyAshPercentage: "79", bottomAshMT: "110691", bottomAshPercentage: "18", totalAshMT: "596503", totalAshUtilizationPlan: "97" },
        { srNo: 15, year: "15th", calendarYear: "2014-15", flyAshMT: "491962", flyAshPercentage: "80", bottomAshMT: "122990", bottomAshPercentage: "20", totalAshMT: "614952", totalAshUtilizationPlan: "100" },
    ];

    const paraliData: ParaliRow[] = [
        { year: "1999-00", coalConsumption: "2959000", ashPercentage: "35.97", ashGeneration: "1064559", ashUtilization: "18142", ashUtiPercentage: "1.70", bricks: "12342", bunds: "0", agri: "5800", cement: "0", landfill: "0", others: "0" },
        { year: "2000-01", coalConsumption: "3236000", ashPercentage: "39", ashGeneration: "1263221", ashUtilization: "28728", ashUtiPercentage: "2.27", bricks: "17323", bunds: "0", agri: "11496", cement: "0", landfill: "0", others: "0" },
        { year: "2001-02", coalConsumption: "3078000", ashPercentage: "38.52", ashGeneration: "1185953", ashUtilization: "47630", ashUtiPercentage: "4.02", bricks: "4630", bunds: "0", agri: "8359", cement: "34641", landfill: "0", others: "0" },
        { year: "2002-03", coalConsumption: "3093701", ashPercentage: "37.78", ashGeneration: "1168687", ashUtilization: "39309", ashUtiPercentage: "3.36", bricks: "5866", bunds: "0", agri: "6101", cement: "27342", landfill: "0", others: "0" },
        { year: "2003-04", coalConsumption: "3200000", ashPercentage: "36", ashGeneration: "1145700", ashUtilization: "57284", ashUtiPercentage: "5.00", bricks: "5728", bunds: "0", agri: "9738", cement: "41818", landfill: "0", others: "0" },
        { year: "2004-05", coalConsumption: "3200000", ashPercentage: "36", ashGeneration: "1145700", ashUtilization: "57284", ashUtiPercentage: "5.00", bricks: "5728", bunds: "0", agri: "9738", cement: "41818", landfill: "0", others: "0" },
        { year: "2005-06", coalConsumption: "3200000", ashPercentage: "36", ashGeneration: "1145700", ashUtilization: "229140", ashUtiPercentage: "20.00", bricks: "22914", bunds: "0", agri: "38954", cement: "167272", landfill: "0", others: "0" },
        { year: "2006-07", coalConsumption: "3200000", ashPercentage: "36", ashGeneration: "1145700", ashUtilization: "286424", ashUtiPercentage: "25.00", bricks: "28642", bunds: "0", agri: "48692", cement: "209090", landfill: "0", others: "0" },
        { year: "2007-08", coalConsumption: "3200000", ashPercentage: "36", ashGeneration: "1145700", ashUtilization: "343710", ashUtiPercentage: "30.00", bricks: "34371", bunds: "0", agri: "58431", cement: "250908", landfill: "0", others: "0" },
        { year: "2008-09", coalConsumption: "3200000", ashPercentage: "36", ashGeneration: "1145700", ashUtilization: "458280", ashUtiPercentage: "40.00", bricks: "45828", bunds: "0", agri: "77908", cement: "334544", landfill: "0", others: "0" },
        { year: "2009-10", coalConsumption: "3200000", ashPercentage: "36", ashGeneration: "1145700", ashUtilization: "572851", ashUtiPercentage: "50.00", bricks: "57285", bunds: "0", agri: "97385", cement: "418181", landfill: "0", others: "0" },
        { year: "2010-11", coalConsumption: "3200000", ashPercentage: "36", ashGeneration: "1145700", ashUtilization: "687420", ashUtiPercentage: "60.00", bricks: "68742", bunds: "0", agri: "116861", cement: "501817", landfill: "0", others: "0" },
        { year: "2011-12", coalConsumption: "3200000", ashPercentage: "36", ashGeneration: "1145700", ashUtilization: "801990", ashUtiPercentage: "70.00", bricks: "80199", bunds: "0", agri: "136338", cement: "585453", landfill: "0", others: "0" },
        { year: "2012-13", coalConsumption: "3200000", ashPercentage: "36", ashGeneration: "1145700", ashUtilization: "973845", ashUtiPercentage: "85.00", bricks: "97384", bunds: "0", agri: "165554", cement: "710907", landfill: "0", others: "0" },
        { year: "2013-14", coalConsumption: "3200000", ashPercentage: "36", ashGeneration: "1145700", ashUtilization: "1145700", ashUtiPercentage: "100.00", bricks: "114570", bunds: "0", agri: "194770", cement: "836360", landfill: "0", others: "0" },
    ];

    const nashikData: ParaliRow[] = [
        { year: "1999-00", coalConsumption: "3787000", ashPercentage: "33.4", ashGeneration: "1265000", ashUtilization: "228410", ashUtiPercentage: "18.06", bricks: "27760", bunds: "176000", agri: "0", cement: "15400", landfill: "0", others: "9250" },
        { year: "2000-01", coalConsumption: "3809000", ashPercentage: "33.89", ashGeneration: "1291173", ashUtilization: "155120", ashUtiPercentage: "12.01", bricks: "30890", bunds: "85800", agri: "10250", cement: "28180", landfill: "0", others: "0" },
        { year: "2001-02", coalConsumption: "3581000", ashPercentage: "32.75", ashGeneration: "1172799", ashUtilization: "71584", ashUtiPercentage: "6.10", bricks: "37720", bunds: "8572", agri: "10190", cement: "6240", landfill: "0", others: "24778" },
        { year: "2002-03", coalConsumption: "3463007", ashPercentage: "34.21", ashGeneration: "1184628", ashUtilization: "131110", ashUtiPercentage: "11.07", bricks: "30478", bunds: "60000", agri: "7634", cement: "220", landfill: "8000", others: "30000" },
        { year: "2003-04", coalConsumption: "3800000", ashPercentage: "34", ashGeneration: "1300000", ashUtilization: "323125", ashUtiPercentage: "24.86", bricks: "51250", bunds: "162500", agri: "14500", cement: "0", landfill: "64875", others: "365000" },
        { year: "2004-05", coalConsumption: "3800000", ashPercentage: "34", ashGeneration: "1300000", ashUtilization: "655500", ashUtiPercentage: "50.42", bricks: "62500", bunds: "150000", agri: "18000", cement: "0", landfill: "60000", others: "730000" },
        { year: "2005-06", coalConsumption: "3800000", ashPercentage: "34", ashGeneration: "1300000", ashUtilization: "861250", ashUtiPercentage: "66.25", bricks: "73750", bunds: "0", agri: "21500", cement: "0", landfill: "36000", others: "910000" },
        { year: "2006-07", coalConsumption: "3800000", ashPercentage: "34", ashGeneration: "1300000", ashUtilization: "1056000", ashUtiPercentage: "81.23", bricks: "85000", bunds: "0", agri: "25000", cement: "0", landfill: "36000", others: "1095000" },
        { year: "2007-08", coalConsumption: "3800000", ashPercentage: "34", ashGeneration: "1300000", ashUtilization: "1255750", ashUtiPercentage: "96.60", bricks: "96250", bunds: "0", agri: "28500", cement: "0", landfill: "36000", others: "1095000" },
        { year: "2008-09", coalConsumption: "3800000", ashPercentage: "34", ashGeneration: "1300000", ashUtilization: "1270500", ashUtiPercentage: "97.73", bricks: "107500", bunds: "0", agri: "32000", cement: "0", landfill: "36000", others: "1095000" },
        { year: "2009-10", coalConsumption: "3800000", ashPercentage: "34", ashGeneration: "1300000", ashUtilization: "1285250", ashUtiPercentage: "98.87", bricks: "118750", bunds: "0", agri: "35500", cement: "0", landfill: "36000", others: "1095000" },
        { year: "2010-11", coalConsumption: "3800000", ashPercentage: "34", ashGeneration: "1300000", ashUtilization: "1300000", ashUtiPercentage: "100.00", bricks: "130000", bunds: "0", agri: "39000", cement: "0", landfill: "36000", others: "1095000" },
        { year: "2011-12", coalConsumption: "3800000", ashPercentage: "34", ashGeneration: "1300000", ashUtilization: "1300000", ashUtiPercentage: "100.00", bricks: "130000", bunds: "0", agri: "39000", cement: "0", landfill: "36000", others: "1095000" },
        { year: "2012-13", coalConsumption: "3800000", ashPercentage: "34", ashGeneration: "1300000", ashUtilization: "1300000", ashUtiPercentage: "100.00", bricks: "130000", bunds: "0", agri: "39000", cement: "0", landfill: "36000", others: "1095000" },
        { year: "2013-14", coalConsumption: "3800000", ashPercentage: "34", ashGeneration: "1300000", ashUtilization: "1300000", ashUtiPercentage: "100.00", bricks: "130000", bunds: "0", agri: "39000", cement: "0", landfill: "36000", others: "1095000" },
    ];

    const parasData: ParaliRow[] = [
        { year: "1999-00", coalConsumption: "282000", ashPercentage: "30.3", ashGeneration: "85461", ashUtilization: "8514", ashUtiPercentage: "9.96", bricks: "8514", bunds: "0", agri: "0", cement: "0", landfill: "0", others: "0" },
        { year: "2000-01", coalConsumption: "299000", ashPercentage: "30.91", ashGeneration: "92440", ashUtilization: "26005", ashUtiPercentage: "28.13", bricks: "26005", bunds: "0", agri: "0", cement: "0", landfill: "0", others: "0" },
        { year: "2001-02", coalConsumption: "281000", ashPercentage: "26.4", ashGeneration: "74358", ashUtilization: "27513", ashUtiPercentage: "37.00", bricks: "27513", bunds: "0", agri: "0", cement: "0", landfill: "0", others: "0" },
        { year: "2002-03", coalConsumption: "226186", ashPercentage: "28.68", ashGeneration: "64875", ashUtilization: "22635", ashUtiPercentage: "34.89", bricks: "22635", bunds: "0", agri: "0", cement: "0", landfill: "0", others: "0" },
        { year: "2003-04", coalConsumption: "285000", ashPercentage: "28", ashGeneration: "79800", ashUtilization: "35910", ashUtiPercentage: "45.00", bricks: "35910", bunds: "0", agri: "0", cement: "0", landfill: "0", others: "0" },
        { year: "2004-05", coalConsumption: "285000", ashPercentage: "28", ashGeneration: "79800", ashUtilization: "43890", ashUtiPercentage: "55.00", bricks: "43890", bunds: "0", agri: "0", cement: "0", landfill: "0", others: "0" },
        { year: "2005-06", coalConsumption: "285000", ashPercentage: "28", ashGeneration: "79800", ashUtilization: "59360", ashUtiPercentage: "74.39", bricks: "55860", bunds: "0", agri: "2000", cement: "1500", landfill: "0", others: "0" },
        { year: "2006-07", coalConsumption: "285000", ashPercentage: "30", ashGeneration: "85500", ashUtilization: "85500", ashUtiPercentage: "100.00", bricks: "75000", bunds: "0", agri: "4500", cement: "4500", landfill: "0", others: "1500" },
        { year: "2007-08", coalConsumption: "285000", ashPercentage: "30", ashGeneration: "85500", ashUtilization: "85500", ashUtiPercentage: "100.00", bricks: "76500", bunds: "0", agri: "4500", cement: "4500", landfill: "0", others: "0" },
        { year: "2008-09", coalConsumption: "285000", ashPercentage: "30", ashGeneration: "85500", ashUtilization: "85500", ashUtiPercentage: "100.00", bricks: "85500", bunds: "0", agri: "0", cement: "0", landfill: "0", others: "0" },
        { year: "2009-10", coalConsumption: "285000", ashPercentage: "30", ashGeneration: "91200", ashUtilization: "91200", ashUtiPercentage: "100.00", bricks: "91200", bunds: "0", agri: "0", cement: "0", landfill: "0", others: "0" },
        { year: "2010-11", coalConsumption: "285000", ashPercentage: "32", ashGeneration: "91200", ashUtilization: "91200", ashUtiPercentage: "100.00", bricks: "91200", bunds: "0", agri: "0", cement: "0", landfill: "0", others: "0" },
        { year: "2011-12", coalConsumption: "285000", ashPercentage: "32", ashGeneration: "91200", ashUtilization: "91200", ashUtiPercentage: "100.00", bricks: "91200", bunds: "0", agri: "0", cement: "0", landfill: "0", others: "0" },
        { year: "2012-13", coalConsumption: "285000", ashPercentage: "32", ashGeneration: "91200", ashUtilization: "91200", ashUtiPercentage: "100.00", bricks: "91200", bunds: "0", agri: "0", cement: "0", landfill: "0", others: "0" },
        { year: "2013-14", coalConsumption: "285000", ashPercentage: "32", ashGeneration: "91200", ashUtilization: "91200", ashUtiPercentage: "100.00", bricks: "91200", bunds: "0", agri: "0", cement: "0", landfill: "0", others: "0" },
    ];

    const bhusawalData: ParaliRow[] = [
        { year: "1999-00", coalConsumption: "2454000", ashPercentage: "39.75", ashGeneration: "975508", ashUtilization: "221932", ashUtiPercentage: "22.75", bricks: "183354", bunds: "26978", agri: "11600", cement: "0", landfill: "0", others: "0" },
        { year: "2000-01", coalConsumption: "2041000", ashPercentage: "40.27", ashGeneration: "822080", ashUtilization: "420173", ashUtiPercentage: "51.11", bricks: "385400", bunds: "15440", agri: "13700", cement: "0", landfill: "5633", others: "0" },
        { year: "2001-02", coalConsumption: "2362489", ashPercentage: "39.89", ashGeneration: "942565", ashUtilization: "376232", ashUtiPercentage: "29.31", bricks: "242982", bunds: "24600", agri: "3250", cement: "0", landfill: "5400", others: "0" },
        { year: "2002-03", coalConsumption: "1798646", ashPercentage: "38.29", ashGeneration: "688750", ashUtilization: "322832", ashUtiPercentage: "46.87", bricks: "225830", bunds: "44900", agri: "1500", cement: "2943", landfill: "0", others: "47659" },
        { year: "2003-04", coalConsumption: "2400000", ashPercentage: "34", ashGeneration: "816000", ashUtilization: "312428", ashUtiPercentage: "38.29", bricks: "201428", bunds: "35000", agri: "9500", cement: "8000", landfill: "5000", others: "53500" },
        { year: "2004-05", coalConsumption: "2400000", ashPercentage: "34", ashGeneration: "816000", ashUtilization: "323823", ashUtiPercentage: "39.68", bricks: "211823", bunds: "0", agri: "29000", cement: "16000", landfill: "7000", others: "60000" },
        { year: "2005-06", coalConsumption: "2400000", ashPercentage: "34", ashGeneration: "816000", ashUtilization: "383091", ashUtiPercentage: "46.95", bricks: "217091", bunds: "0", agri: "50000", cement: "40000", landfill: "6000", others: "70000" },
        { year: "2006-07", coalConsumption: "2400000", ashPercentage: "34", ashGeneration: "816000", ashUtilization: "420884", ashUtiPercentage: "51.58", bricks: "230884", bunds: "0", agri: "55000", cement: "55000", landfill: "10000", others: "70000" },
        { year: "2007-08", coalConsumption: "2400000", ashPercentage: "34", ashGeneration: "816000", ashUtilization: "458677", ashUtiPercentage: "56.21", bricks: "199677", bunds: "30000", agri: "57000", cement: "88000", landfill: "9000", others: "75000" },
        { year: "2008-09", coalConsumption: "2400000", ashPercentage: "34", ashGeneration: "816000", ashUtilization: "514080", ashUtiPercentage: "63.00", bricks: "222880", bunds: "35000", agri: "62700", cement: "105500", landfill: "10000", others: "78000" },
        { year: "2009-10", coalConsumption: "2400000", ashPercentage: "34", ashGeneration: "816000", ashUtilization: "571200", ashUtiPercentage: "70.00", bricks: "244100", bunds: "55000", agri: "67000", cement: "126600", landfill: "8500", others: "70000" },
        { year: "2010-11", coalConsumption: "2400000", ashPercentage: "34", ashGeneration: "816000", ashUtilization: "636480", ashUtiPercentage: "78.00", bricks: "275480", bunds: "58000", agri: "72500", cement: "145500", landfill: "10000", others: "75000" },
        { year: "2011-12", coalConsumption: "2400000", ashPercentage: "34", ashGeneration: "816000", ashUtilization: "696048", ashUtiPercentage: "85.30", bricks: "300500", bunds: "58500", agri: "98500", cement: "151048", landfill: "12500", others: "75000" },
        { year: "2012-13", coalConsumption: "2400000", ashPercentage: "34", ashGeneration: "816000", ashUtilization: "767040", ashUtiPercentage: "94.00", bricks: "309380", bunds: "57500", agri: "81200", cement: "222260", landfill: "18700", others: "78000" },
        { year: "2013-14", coalConsumption: "2400000", ashPercentage: "34", ashGeneration: "816000", ashUtilization: "816000", ashUtiPercentage: "100.00", bricks: "297000", bunds: "59000", agri: "80500", cement: "280000", landfill: "20000", others: "79500" },
    ];

    const khaperkhedaData: ParaliRow[] = [
        { year: "1999-00", coalConsumption: "1894000", ashPercentage: "42.98", ashGeneration: "814220", ashUtilization: "23097", ashUtiPercentage: "2.84", bricks: "18425", bunds: "0", stowing: "0", agri: "4672", cement: "0", landfill: "0", others: "0" },
        { year: "2000-01", coalConsumption: "2618000", ashPercentage: "35.34", ashGeneration: "925417", ashUtilization: "24984", ashUtiPercentage: "2.70", bricks: "20507", bunds: "0", stowing: "0", agri: "0", cement: "714", landfill: "3763", others: "0" },
        { year: "2001-02", coalConsumption: "4174000", ashPercentage: "41", ashGeneration: "1707144", ashUtilization: "17911", ashUtiPercentage: "1.05", bricks: "13082", bunds: "0", stowing: "0", agri: "0", cement: "2056", landfill: "1761", others: "1012" },
        { year: "2002-03", coalConsumption: "4894993", ashPercentage: "44.68", ashGeneration: "2187268", ashUtilization: "152706", ashUtiPercentage: "6.98", bricks: "37604", bunds: "0", stowing: "0", agri: "6510", cement: "53871", landfill: "0", others: "54721" },
        { year: "2003-04", coalConsumption: "4200000", ashPercentage: "34", ashGeneration: "1428000", ashUtilization: "274512", ashUtiPercentage: "19.22", bricks: "62712", bunds: "0", stowing: "0", agri: "1200", cement: "170000", landfill: "30600", others: "10000" },
        { year: "2004-05", coalConsumption: "4200000", ashPercentage: "34", ashGeneration: "1428000", ashUtilization: "416136", ashUtiPercentage: "29.14", bricks: "120736", bunds: "0", stowing: "0", agri: "2400", cement: "250000", landfill: "32000", others: "11000" },
        { year: "2005-06", coalConsumption: "4200000", ashPercentage: "34", ashGeneration: "1428000", ashUtilization: "663824", ashUtiPercentage: "46.49", bricks: "188224", bunds: "50000", stowing: "100000", agri: "3600", cement: "300000", landfill: "10000", others: "12000" },
        { year: "2006-07", coalConsumption: "4200000", ashPercentage: "34", ashGeneration: "1428000", ashUtilization: "741352", ashUtiPercentage: "51.92", bricks: "263552", bunds: "0", stowing: "200000", agri: "4800", cement: "250000", landfill: "10000", others: "13000" },
        { year: "2007-08", coalConsumption: "4200000", ashPercentage: "34", ashGeneration: "1428000", ashUtilization: "811240", ashUtiPercentage: "56.81", bricks: "330240", bunds: "0", stowing: "200000", agri: "6000", cement: "250000", landfill: "10000", others: "15000" },
        { year: "2008-09", coalConsumption: "4200000", ashPercentage: "34", ashGeneration: "1428000", ashUtilization: "875640", ashUtiPercentage: "61.32", bricks: "396640", bunds: "0", stowing: "200000", agri: "6000", cement: "250000", landfill: "10000", others: "13000" },
        { year: "2009-10", coalConsumption: "4200000", ashPercentage: "34", ashGeneration: "1428000", ashUtilization: "954040", ashUtiPercentage: "66.81", bricks: "463040", bunds: "0", stowing: "200000", agri: "6000", cement: "250000", landfill: "10000", others: "25000" },
        { year: "2010-11", coalConsumption: "4200000", ashPercentage: "34", ashGeneration: "1428000", ashUtilization: "1428000", ashUtiPercentage: "100.00", bricks: "678000", bunds: "0", stowing: "445000", agri: "6000", cement: "250000", landfill: "10000", others: "39000" },
        { year: "2011-12", coalConsumption: "4200000", ashPercentage: "34", ashGeneration: "1428000", ashUtilization: "1428000", ashUtiPercentage: "100.00", bricks: "678000", bunds: "0", stowing: "445000", agri: "6000", cement: "250000", landfill: "10000", others: "39000" },
        { year: "2012-13", coalConsumption: "4200000", ashPercentage: "34", ashGeneration: "1428000", ashUtilization: "1428000", ashUtiPercentage: "100.00", bricks: "678000", bunds: "0", stowing: "445000", agri: "6000", cement: "250000", landfill: "10000", others: "39000" },
        { year: "2013-14", coalConsumption: "4200000", ashPercentage: "34", ashGeneration: "1428000", ashUtilization: "1428000", ashUtiPercentage: "100.00", bricks: "678000", bunds: "0", stowing: "445000", agri: "6000", cement: "250000", landfill: "10000", others: "39000" },
    ];

    const koradiData: ParaliRow[] = [
        { year: "1999-00", coalConsumption: "4957000", ashPercentage: "41.13", ashGeneration: "2039307", ashUtilization: "2035", ashUtiPercentage: "0.00", bricks: "2035", bunds: "0", agri: "0", cement: "0", landfill: "0", others: "0" },
        { year: "2000-01", coalConsumption: "4223000", ashPercentage: "40", ashGeneration: "1689432", ashUtilization: "44894", ashUtiPercentage: "3.00", bricks: "44894", bunds: "0", agri: "0", cement: "0", landfill: "0", others: "0" },
        { year: "2001-02", coalConsumption: "4454000", ashPercentage: "34.8", ashGeneration: "1552930", ashUtilization: "72462", ashUtiPercentage: "5.00", bricks: "72462", bunds: "0", agri: "0", cement: "0", landfill: "0", others: "0" },
        { year: "2002-03", coalConsumption: "4573078", ashPercentage: "37.47", ashGeneration: "1713543", ashUtilization: "77480", ashUtiPercentage: "4.50", bricks: "77480", bunds: "0", agri: "0", cement: "0", landfill: "0", others: "0" },
        { year: "2003-04", coalConsumption: "4450000", ashPercentage: "34", ashGeneration: "1513000", ashUtilization: "151300", ashUtiPercentage: "10.00", bricks: "146100", bunds: "0", agri: "2000", cement: "600", landfill: "600", others: "2000" },
        { year: "2004-05", coalConsumption: "4450000", ashPercentage: "34", ashGeneration: "1513000", ashUtilization: "302600", ashUtiPercentage: "20.00", bricks: "245200", bunds: "50000", agri: "3000", cement: "700", landfill: "700", others: "3000" },
        { year: "2005-06", coalConsumption: "4450000", ashPercentage: "34", ashGeneration: "1513000", ashUtilization: "453900", ashUtiPercentage: "30.00", bricks: "444300", bunds: "0", agri: "4000", cement: "800", landfill: "800", others: "4000" },
        { year: "2006-07", coalConsumption: "4450000", ashPercentage: "34", ashGeneration: "1513000", ashUtilization: "605200", ashUtiPercentage: "40.00", bricks: "593400", bunds: "0", agri: "5000", cement: "900", landfill: "900", others: "5000" },
        { year: "2007-08", coalConsumption: "4450000", ashPercentage: "34", ashGeneration: "1513000", ashUtilization: "756500", ashUtiPercentage: "50.00", bricks: "743500", bunds: "0", agri: "5000", cement: "1000", landfill: "1000", others: "6000" },
        { year: "2008-09", coalConsumption: "4450000", ashPercentage: "34", ashGeneration: "1513000", ashUtilization: "907800", ashUtiPercentage: "60.00", bricks: "893600", bunds: "0", agri: "5000", cement: "1100", landfill: "1100", others: "7000" },
        { year: "2009-10", coalConsumption: "4450000", ashPercentage: "34", ashGeneration: "1513000", ashUtilization: "1059100", ashUtiPercentage: "70.00", bricks: "993700", bunds: "50000", agri: "5000", cement: "1200", landfill: "1200", others: "8000" },
        { year: "2010-11", coalConsumption: "4450000", ashPercentage: "34", ashGeneration: "1513000", ashUtilization: "1210400", ashUtiPercentage: "80.00", bricks: "1193800", bunds: "0", agri: "5000", cement: "1300", landfill: "1300", others: "9000" },
        { year: "2011-12", coalConsumption: "4450000", ashPercentage: "34", ashGeneration: "1513000", ashUtilization: "1361700", ashUtiPercentage: "90.00", bricks: "1343900", bunds: "0", agri: "5000", cement: "1400", landfill: "1400", others: "10000" },
        { year: "2012-13", coalConsumption: "4450000", ashPercentage: "34", ashGeneration: "1513000", ashUtilization: "1513000", ashUtiPercentage: "100.00", bricks: "1495000", bunds: "0", agri: "5000", cement: "1500", landfill: "1500", others: "10000" },
        { year: "2013-14", coalConsumption: "4450000", ashPercentage: "34", ashGeneration: "1513000", ashUtilization: "1513000", ashUtiPercentage: "100.00", bricks: "1494800", bunds: "0", agri: "5000", cement: "1600", landfill: "1600", others: "10000" },
    ];

    const chandrapurData: ParaliRow[] = [
        { year: "1999-00", coalConsumption: "11099000", ashPercentage: "35", ashGeneration: "3884800", ashUtilization: "14095", ashUtiPercentage: "0.36", bricks: "14095", bunds: "0", stowing: "0", agri: "0", cement: "0", landfill: "0", others: "0" },
        { year: "2000-01", coalConsumption: "11049000", ashPercentage: "38.77", ashGeneration: "4283270", ashUtilization: "45353", ashUtiPercentage: "1.06", bricks: "28941", bunds: "0", stowing: "0", agri: "0", cement: "611", landfill: "15801", others: "0" },
        { year: "2001-02", coalConsumption: "12061000", ashPercentage: "38.62", ashGeneration: "4658186", ashUtilization: "24748", ashUtiPercentage: "0.53", bricks: "6900", bunds: "0", stowing: "0", agri: "0", cement: "17348", landfill: "200", others: "300" },
        { year: "2002-03", coalConsumption: "10899159", ashPercentage: "40.31", ashGeneration: "4393459", ashUtilization: "100820", ashUtiPercentage: "2.29", bricks: "29272", bunds: "0", stowing: "13000", agri: "0", cement: "58548", landfill: "0", others: "0" },
        { year: "2003-04", coalConsumption: "11445000", ashPercentage: "40", ashGeneration: "4578000", ashUtilization: "706000", ashUtiPercentage: "15.42", bricks: "26000", bunds: "0", stowing: "100000", agri: "0", cement: "580000", landfill: "0", others: "0" },
        { year: "2004-05", coalConsumption: "11480000", ashPercentage: "40", ashGeneration: "4592000", ashUtilization: "751000", ashUtiPercentage: "16.35", bricks: "26000", bunds: "0", stowing: "125000", agri: "0", cement: "600000", landfill: "0", others: "0" },
        { year: "2005-06", coalConsumption: "12000000", ashPercentage: "38.33", ashGeneration: "4600000", ashUtilization: "785333", ashUtiPercentage: "17.07", bricks: "28889", bunds: "0", stowing: "100000", agri: "0", cement: "644444", landfill: "6000", others: "6000" },
        { year: "2006-07", coalConsumption: "12000000", ashPercentage: "38.33", ashGeneration: "4600000", ashUtilization: "1244666", ashUtiPercentage: "27.06", bricks: "31778", bunds: "0", stowing: "500000", agri: "0", cement: "688888", landfill: "12000", others: "12000" },
        { year: "2007-08", coalConsumption: "12000000", ashPercentage: "38.33", ashGeneration: "4600000", ashUtilization: "1803900", ashUtiPercentage: "39.22", bricks: "34567", bunds: "0", stowing: "1000000", agri: "0", cement: "733333", landfill: "18000", others: "18000" },
        { year: "2008-09", coalConsumption: "12000000", ashPercentage: "38.33", ashGeneration: "4600000", ashUtilization: "2466109", ashUtiPercentage: "53.61", bricks: "37556", bunds: "0", stowing: "1602776", agri: "0", cement: "777777", landfill: "24000", others: "24000" },
        { year: "2009-10", coalConsumption: "12000000", ashPercentage: "38.33", ashGeneration: "4600000", ashUtilization: "2894887", ashUtiPercentage: "62.93", bricks: "40445", bunds: "0", stowing: "1972220", agri: "0", cement: "822222", landfill: "30000", others: "30000" },
        { year: "2010-11", coalConsumption: "12000000", ashPercentage: "38.33", ashGeneration: "4600000", ashUtilization: "3323664", ashUtiPercentage: "72.25", bricks: "43334", bunds: "0", stowing: "2341664", agri: "0", cement: "866666", landfill: "36000", others: "36000" },
        { year: "2011-12", coalConsumption: "12000000", ashPercentage: "38.33", ashGeneration: "4600000", ashUtilization: "3752442", ashUtiPercentage: "81.57", bricks: "46223", bunds: "0", stowing: "2711108", agri: "0", cement: "911111", landfill: "42000", others: "42000" },
        { year: "2012-13", coalConsumption: "12000000", ashPercentage: "38.33", ashGeneration: "4600000", ashUtilization: "4181219", ashUtiPercentage: "90.90", bricks: "49112", bunds: "0", stowing: "3080552", agri: "0", cement: "955555", landfill: "48000", others: "48000" },
        { year: "2013-14", coalConsumption: "12000000", ashPercentage: "38.33", ashGeneration: "4600000", ashUtilization: "4600000", ashUtiPercentage: "100.00", bricks: "50000", bunds: "0", stowing: "345000", agri: "0", cement: "1000000", landfill: "50000", others: "50000" },
    ];

    return (
        <div className="min-h-screen bg-white">
            <PageBanner
                title="Waste Management"
            />

            <section className="w-full flex justify-center bg-white py-12">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="rounded-[24px] p-8 min-h-[400px] border border-gray-100 shadow-sm bg-white relative">
                        {/* Header */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 border-b border-gray-200 pb-4 gap-4">
                            <h1 className="text-[24px] font-bold text-gray-900 uppercase">
                                Action Plan for utilization of Fly Ash by Coal Based Thermal Power Plants in Maharashtra
                            </h1>
                        </div>

                        {/* Sub Header - Dahanu TPS */}
                        <div className="bg-[#43a047] text-white p-3 font-bold mb-4 rounded-t-lg">
                            DAHANU Thermal Power Station
                        </div>

                        <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500 mb-12">
                            {/* Table */}
                            <div className="overflow-x-auto">
                                <div className="border border-gray-200 rounded-[24px] overflow-hidden">
                                    <table className="w-full border-collapse">
                                        <thead>
                                            <tr className="border-b border-gray-100">
                                                <th rowSpan={2} className="py-6 px-6 text-left border-r border-gray-100 align-top">
                                                    <div className="text-[14px] font-semibold text-gray-700">
                                                        Sr. No.
                                                    </div>
                                                </th>
                                                <th rowSpan={2} className="py-6 px-6 text-left border-r border-gray-100 align-top">
                                                    <div className="text-[14px] font-semibold text-gray-700">
                                                        Year
                                                    </div>
                                                </th>
                                                <th rowSpan={2} className="py-6 px-6 text-left border-r border-gray-100 align-top">
                                                    <div className="text-[14px] font-semibold text-gray-700">
                                                        Calender Year
                                                    </div>
                                                </th>
                                                <th colSpan={2} className="py-6 px-6 text-center border-r border-gray-100 border-b border-gray-100">
                                                    <div className="text-[14px] font-semibold text-gray-700">
                                                        Fly Ash
                                                    </div>
                                                </th>
                                                <th colSpan={2} className="py-6 px-6 text-center border-r border-gray-100 border-b border-gray-100">
                                                    <div className="text-[14px] font-semibold text-gray-700">
                                                        Bottom & Coarse Ash
                                                    </div>
                                                </th>
                                                <th rowSpan={2} className="py-6 px-6 text-left border-r border-gray-100 align-top">
                                                    <div className="text-[14px] font-semibold text-gray-700">
                                                        Total Ash <br /><span className="text-[12px] font-normal">(MT)</span>
                                                    </div>
                                                </th>
                                                <th rowSpan={2} className="py-6 px-6 text-left align-top">
                                                    <div className="text-[14px] font-semibold text-gray-700">
                                                        Total Ash Utilisation Plan <br /><span className="text-[12px] font-normal">(%)</span>
                                                    </div>
                                                </th>
                                            </tr>
                                            <tr className="border-b border-gray-100">
                                                <th className="py-3 px-4 text-left border-r border-gray-100">
                                                    <span className="text-[12px] font-semibold text-gray-600">(MT)</span>
                                                </th>
                                                <th className="py-3 px-4 text-left border-r border-gray-100">
                                                    <span className="text-[12px] font-semibold text-gray-600">(%)</span>
                                                </th>
                                                <th className="py-3 px-4 text-left border-r border-gray-100">
                                                    <span className="text-[12px] font-semibold text-gray-600">(MT)</span>
                                                </th>
                                                <th className="py-3 px-4 text-left border-r border-gray-100">
                                                    <span className="text-[12px] font-semibold text-gray-600">(%)</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-50">
                                            {dahanuData.map((row, idx) => (
                                                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                                    <td className="py-4 px-6 text-[13px] text-gray-600 border-r border-gray-50">{row.srNo}</td>
                                                    <td className="py-4 px-6 text-[13px] text-gray-700 font-medium border-r border-gray-50">{row.year}</td>
                                                    <td className="py-4 px-6 text-[13px] text-gray-600 border-r border-gray-50">{row.calendarYear}</td>
                                                    <td className="py-4 px-6 text-[13px] text-gray-600 border-r border-gray-50">{row.flyAshMT}</td>
                                                    <td className="py-4 px-6 text-[13px] text-gray-600 border-r border-gray-50">{row.flyAshPercentage}</td>
                                                    <td className="py-4 px-6 text-[13px] text-gray-600 border-r border-gray-50">{row.bottomAshMT}</td>
                                                    <td className="py-4 px-6 text-[13px] text-gray-600 border-r border-gray-50">{row.bottomAshPercentage}</td>
                                                    <td className="py-4 px-6 text-[13px] text-gray-600 border-r border-gray-50">{row.totalAshMT}</td>
                                                    <td className="py-4 px-6 text-[13px] text-gray-700 font-medium">{row.totalAshUtilizationPlan}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>


                        {/* Sub Header - PARALI TPS */}
                        <div className="bg-[#43a047] text-white p-3 font-bold mb-4 rounded-t-lg">
                            PARALI Thermal Power Station
                        </div>

                        <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500 mb-12">
                            {/* Table */}
                            <div className="overflow-x-auto">
                                <div className="border border-gray-200 rounded-[24px] overflow-hidden">
                                    <table className="w-full border-collapse">
                                        <thead>
                                            <tr className="border-b border-gray-100">
                                                <th rowSpan={2} className="py-6 px-6 text-left border-r border-gray-100 align-top">
                                                    <div className="text-[14px] font-semibold text-gray-700">
                                                        Year
                                                    </div>
                                                </th>
                                                <th rowSpan={2} className="py-6 px-6 text-left border-r border-gray-100 align-top">
                                                    <div className="text-[14px] font-semibold text-gray-700">
                                                        Coal consumption
                                                    </div>
                                                </th>
                                                <th rowSpan={2} className="py-6 px-6 text-left border-r border-gray-100 align-top">
                                                    <div className="text-[14px] font-semibold text-gray-700">
                                                        Ash %
                                                    </div>
                                                </th>
                                                <th rowSpan={2} className="py-6 px-6 text-left border-r border-gray-100 align-top">
                                                    <div className="text-[14px] font-semibold text-gray-700">
                                                        Ash Generation
                                                    </div>
                                                </th>
                                                <th rowSpan={2} className="py-6 px-6 text-left border-r border-gray-100 align-top">
                                                    <div className="text-[14px] font-semibold text-gray-700">
                                                        Ash utilization
                                                    </div>
                                                </th>
                                                <th rowSpan={2} className="py-6 px-6 text-left border-r border-gray-100 align-top">
                                                    <div className="text-[14px] font-semibold text-gray-700">
                                                        Ash Uti %
                                                    </div>
                                                </th>
                                                <th colSpan={6} className="py-6 px-6 text-center border-b border-gray-100">
                                                    <div className="text-[14px] font-semibold text-gray-700">
                                                        Categorywise Utilisation
                                                    </div>
                                                </th>
                                            </tr>
                                            <tr className="border-b border-gray-100">
                                                <th className="py-3 px-4 text-center border-r border-gray-100">
                                                    <span className="text-[12px] font-semibold text-gray-600">Bricks</span>
                                                </th>
                                                <th className="py-3 px-4 text-center border-r border-gray-100">
                                                    <span className="text-[12px] font-semibold text-gray-600">Bunds</span>
                                                </th>
                                                <th className="py-3 px-4 text-center border-r border-gray-100">
                                                    <span className="text-[12px] font-semibold text-gray-600">Agri.</span>
                                                </th>
                                                <th className="py-3 px-4 text-center border-r border-gray-100">
                                                    <span className="text-[12px] font-semibold text-gray-600">Cement</span>
                                                </th>
                                                <th className="py-3 px-4 text-center border-r border-gray-100">
                                                    <span className="text-[12px] font-semibold text-gray-600">Landfill</span>
                                                </th>
                                                <th className="py-3 px-4 text-center">
                                                    <span className="text-[12px] font-semibold text-gray-600">Others</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-50">
                                            {paraliData.map((row, idx) => (
                                                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                                    <td className="py-4 px-6 text-[13px] text-gray-700 font-medium border-r border-gray-50">{row.year}</td>
                                                    <td className="py-4 px-6 text-[13px] text-gray-600 border-r border-gray-50">{row.coalConsumption}</td>
                                                    <td className="py-4 px-6 text-[13px] text-gray-600 border-r border-gray-50">{row.ashPercentage}</td>
                                                    <td className="py-4 px-6 text-[13px] text-gray-600 border-r border-gray-50">{row.ashGeneration}</td>
                                                    <td className="py-4 px-6 text-[13px] text-gray-600 border-r border-gray-50">{row.ashUtilization}</td>
                                                    <td className="py-4 px-6 text-[13px] text-gray-600 border-r border-gray-50 text-center">{row.ashUtiPercentage}</td>
                                                    <td className="py-4 px-4 text-[13px] text-gray-600 border-r border-gray-50 text-center">{row.bricks}</td>
                                                    <td className="py-4 px-4 text-[13px] text-gray-600 border-r border-gray-50 text-center">{row.bunds}</td>
                                                    <td className="py-4 px-4 text-[13px] text-gray-600 border-r border-gray-50 text-center">{row.agri}</td>
                                                    <td className="py-4 px-4 text-[13px] text-gray-600 border-r border-gray-50 text-center">{row.cement}</td>
                                                    <td className="py-4 px-4 text-[13px] text-gray-600 border-r border-gray-50 text-center">{row.landfill}</td>
                                                    <td className="py-4 px-4 text-[13px] text-gray-600 text-center">{row.others}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Sub Header - NASHIK TPS */}
                        <div className="bg-[#43a047] text-white p-3 font-bold mb-4 rounded-t-lg">
                            NASHIK Thermal Power Station
                        </div>

                        <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            {/* Table */}
                            <div className="overflow-x-auto">
                                <div className="border border-gray-200 rounded-[24px] overflow-hidden">
                                    <table className="w-full border-collapse">
                                        <thead>
                                            <tr className="border-b border-gray-100">
                                                <th rowSpan={2} className="py-6 px-6 text-left border-r border-gray-100 align-top">
                                                    <div className="text-[14px] font-semibold text-gray-700">
                                                        Year
                                                    </div>
                                                </th>
                                                <th rowSpan={2} className="py-6 px-6 text-left border-r border-gray-100 align-top">
                                                    <div className="text-[14px] font-semibold text-gray-700">
                                                        Coal consumption
                                                    </div>
                                                </th>
                                                <th rowSpan={2} className="py-6 px-6 text-left border-r border-gray-100 align-top">
                                                    <div className="text-[14px] font-semibold text-gray-700">
                                                        Ash %
                                                    </div>
                                                </th>
                                                <th rowSpan={2} className="py-6 px-6 text-left border-r border-gray-100 align-top">
                                                    <div className="text-[14px] font-semibold text-gray-700">
                                                        Ash Generation
                                                    </div>
                                                </th>
                                                <th rowSpan={2} className="py-6 px-6 text-left border-r border-gray-100 align-top">
                                                    <div className="text-[14px] font-semibold text-gray-700">
                                                        Ash utilization
                                                    </div>
                                                </th>
                                                <th rowSpan={2} className="py-6 px-6 text-left border-r border-gray-100 align-top">
                                                    <div className="text-[14px] font-semibold text-gray-700">
                                                        Ash Uti %
                                                    </div>
                                                </th>
                                                <th colSpan={6} className="py-6 px-6 text-center border-b border-gray-100">
                                                    <div className="text-[14px] font-semibold text-gray-700">
                                                        Categorywise Utilisation
                                                    </div>
                                                </th>
                                            </tr>
                                            <tr className="border-b border-gray-100">
                                                <th className="py-3 px-4 text-center border-r border-gray-100">
                                                    <span className="text-[12px] font-semibold text-gray-600">Bricks</span>
                                                </th>
                                                <th className="py-3 px-4 text-center border-r border-gray-100">
                                                    <span className="text-[12px] font-semibold text-gray-600">Bunds</span>
                                                </th>
                                                <th className="py-3 px-4 text-center border-r border-gray-100">
                                                    <span className="text-[12px] font-semibold text-gray-600">Agri.</span>
                                                </th>
                                                <th className="py-3 px-4 text-center border-r border-gray-100">
                                                    <span className="text-[12px] font-semibold text-gray-600">Cement</span>
                                                </th>
                                                <th className="py-3 px-4 text-center border-r border-gray-100">
                                                    <span className="text-[12px] font-semibold text-gray-600">Landfill</span>
                                                </th>
                                                <th className="py-3 px-4 text-center">
                                                    <span className="text-[12px] font-semibold text-gray-600">Others/DIPL</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-50">
                                            {nashikData.map((row, idx) => (
                                                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                                    <td className="py-4 px-6 text-[13px] text-gray-700 font-medium border-r border-gray-50">{row.year}</td>
                                                    <td className="py-4 px-6 text-[13px] text-gray-600 border-r border-gray-50">{row.coalConsumption}</td>
                                                    <td className="py-4 px-6 text-[13px] text-gray-600 border-r border-gray-50">{row.ashPercentage}</td>
                                                    <td className="py-4 px-6 text-[13px] text-gray-600 border-r border-gray-50">{row.ashGeneration}</td>
                                                    <td className="py-4 px-6 text-[13px] text-gray-600 border-r border-gray-50">{row.ashUtilization}</td>
                                                    <td className="py-4 px-6 text-[13px] text-gray-600 border-r border-gray-50 text-center">{row.ashUtiPercentage}</td>
                                                    <td className="py-4 px-4 text-[13px] text-gray-600 border-r border-gray-50 text-center">{row.bricks}</td>
                                                    <td className="py-4 px-4 text-[13px] text-gray-600 border-r border-gray-50 text-center">{row.bunds}</td>
                                                    <td className="py-4 px-4 text-[13px] text-gray-600 border-r border-gray-50 text-center">{row.agri}</td>
                                                    <td className="py-4 px-4 text-[13px] text-gray-600 border-r border-gray-50 text-center">{row.cement}</td>
                                                    <td className="py-4 px-4 text-[13px] text-gray-600 border-r border-gray-50 text-center">{row.landfill}</td>
                                                    <td className="py-4 px-4 text-[13px] text-gray-600 text-center">{row.others}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Sub Header - PARAS TPS */}
                        <div className="bg-[#43a047] text-white p-3 font-bold mb-4 rounded-t-lg">
                            PARAS Thermal Power Station
                        </div>

                        <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            {/* Table */}
                            <div className="overflow-x-auto">
                                <div className="border border-gray-200 rounded-[24px] overflow-hidden">
                                    <table className="w-full border-collapse">
                                        <thead>
                                            <tr className="border-b border-gray-100">
                                                <th rowSpan={2} className="py-6 px-6 text-left border-r border-gray-100 align-top">
                                                    <div className="text-[14px] font-semibold text-gray-700">
                                                        Year
                                                    </div>
                                                </th>
                                                <th rowSpan={2} className="py-6 px-6 text-left border-r border-gray-100 align-top">
                                                    <div className="text-[14px] font-semibold text-gray-700">
                                                        Coal consumption
                                                    </div>
                                                </th>
                                                <th rowSpan={2} className="py-6 px-6 text-left border-r border-gray-100 align-top">
                                                    <div className="text-[14px] font-semibold text-gray-700">
                                                        Ash %
                                                    </div>
                                                </th>
                                                <th rowSpan={2} className="py-6 px-6 text-left border-r border-gray-100 align-top">
                                                    <div className="text-[14px] font-semibold text-gray-700">
                                                        Ash Generation
                                                    </div>
                                                </th>
                                                <th rowSpan={2} className="py-6 px-6 text-left border-r border-gray-100 align-top">
                                                    <div className="text-[14px] font-semibold text-gray-700">
                                                        Ash utilization
                                                    </div>
                                                </th>
                                                <th rowSpan={2} className="py-6 px-6 text-left border-r border-gray-100 align-top">
                                                    <div className="text-[14px] font-semibold text-gray-700">
                                                        Ash Uti %
                                                    </div>
                                                </th>
                                                <th colSpan={6} className="py-6 px-6 text-center border-b border-gray-100">
                                                    <div className="text-[14px] font-semibold text-gray-700">
                                                        Categorywise Utilisation
                                                    </div>
                                                </th>
                                            </tr>
                                            <tr className="border-b border-gray-100">
                                                <th className="py-3 px-4 text-center border-r border-gray-100">
                                                    <span className="text-[12px] font-semibold text-gray-600">Bricks</span>
                                                </th>
                                                <th className="py-3 px-4 text-center border-r border-gray-100">
                                                    <span className="text-[12px] font-semibold text-gray-600">Bunds</span>
                                                </th>
                                                <th className="py-3 px-4 text-center border-r border-gray-100">
                                                    <span className="text-[12px] font-semibold text-gray-600">Agri.</span>
                                                </th>
                                                <th className="py-3 px-4 text-center border-r border-gray-100">
                                                    <span className="text-[12px] font-semibold text-gray-600">Cement</span>
                                                </th>
                                                <th className="py-3 px-4 text-center border-r border-gray-100">
                                                    <span className="text-[12px] font-semibold text-gray-600">Landfill</span>
                                                </th>
                                                <th className="py-3 px-4 text-center">
                                                    <span className="text-[12px] font-semibold text-gray-600">Others</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-50">
                                            {parasData.map((row, idx) => (
                                                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                                    <td className="py-4 px-6 text-[13px] text-gray-700 font-medium border-r border-gray-50">{row.year}</td>
                                                    <td className="py-4 px-6 text-[13px] text-gray-600 border-r border-gray-50">{row.coalConsumption}</td>
                                                    <td className="py-4 px-6 text-[13px] text-gray-600 border-r border-gray-50">{row.ashPercentage}</td>
                                                    <td className="py-4 px-6 text-[13px] text-gray-600 border-r border-gray-50">{row.ashGeneration}</td>
                                                    <td className="py-4 px-6 text-[13px] text-gray-600 border-r border-gray-50">{row.ashUtilization}</td>
                                                    <td className="py-4 px-6 text-[13px] text-gray-600 border-r border-gray-50 text-center">{row.ashUtiPercentage}</td>
                                                    <td className="py-4 px-4 text-[13px] text-gray-600 border-r border-gray-50 text-center">{row.bricks}</td>
                                                    <td className="py-4 px-4 text-[13px] text-gray-600 border-r border-gray-50 text-center">{row.bunds}</td>
                                                    <td className="py-4 px-4 text-[13px] text-gray-600 border-r border-gray-50 text-center">{row.agri}</td>
                                                    <td className="py-4 px-4 text-[13px] text-gray-600 border-r border-gray-50 text-center">{row.cement}</td>
                                                    <td className="py-4 px-4 text-[13px] text-gray-600 border-r border-gray-50 text-center">{row.landfill}</td>
                                                    <td className="py-4 px-4 text-[13px] text-gray-600 text-center">{row.others}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Sub Header - BHUSAWAL TPS */}
                        <div className="bg-[#43a047] text-white p-3 font-bold mb-4 rounded-t-lg">
                            BHUSAWAL Thermal Power Station
                        </div>

                        <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            {/* Table */}
                            <div className="overflow-x-auto">
                                <div className="border border-gray-200 rounded-[24px] overflow-hidden">
                                    <table className="w-full border-collapse">
                                        <thead>
                                            <tr className="border-b border-gray-100">
                                                <th rowSpan={2} className="py-6 px-6 text-left border-r border-gray-100 align-top">
                                                    <div className="text-[14px] font-semibold text-gray-700">
                                                        Year
                                                    </div>
                                                </th>
                                                <th rowSpan={2} className="py-6 px-6 text-left border-r border-gray-100 align-top">
                                                    <div className="text-[14px] font-semibold text-gray-700">
                                                        Coal consumption
                                                    </div>
                                                </th>
                                                <th rowSpan={2} className="py-6 px-6 text-left border-r border-gray-100 align-top">
                                                    <div className="text-[14px] font-semibold text-gray-700">
                                                        Ash %
                                                    </div>
                                                </th>
                                                <th rowSpan={2} className="py-6 px-6 text-left border-r border-gray-100 align-top">
                                                    <div className="text-[14px] font-semibold text-gray-700">
                                                        Ash Generation
                                                    </div>
                                                </th>
                                                <th rowSpan={2} className="py-6 px-6 text-left border-r border-gray-100 align-top">
                                                    <div className="text-[14px] font-semibold text-gray-700">
                                                        Ash utilization
                                                    </div>
                                                </th>
                                                <th rowSpan={2} className="py-6 px-6 text-left border-r border-gray-100 align-top">
                                                    <div className="text-[14px] font-semibold text-gray-700">
                                                        Ash Uti %
                                                    </div>
                                                </th>
                                                <th colSpan={6} className="py-6 px-6 text-center border-b border-gray-100">
                                                    <div className="text-[14px] font-semibold text-gray-700">
                                                        Categorywise Utilisation
                                                    </div>
                                                </th>
                                            </tr>
                                            <tr className="border-b border-gray-100">
                                                <th className="py-3 px-4 text-center border-r border-gray-100">
                                                    <span className="text-[12px] font-semibold text-gray-600">Bricks</span>
                                                </th>
                                                <th className="py-3 px-4 text-center border-r border-gray-100">
                                                    <span className="text-[12px] font-semibold text-gray-600">Bunds</span>
                                                </th>
                                                <th className="py-3 px-4 text-center border-r border-gray-100">
                                                    <span className="text-[12px] font-semibold text-gray-600">Agri.</span>
                                                </th>
                                                <th className="py-3 px-4 text-center border-r border-gray-100">
                                                    <span className="text-[12px] font-semibold text-gray-600">Cement</span>
                                                </th>
                                                <th className="py-3 px-4 text-center border-r border-gray-100">
                                                    <span className="text-[12px] font-semibold text-gray-600">Landfill</span>
                                                </th>
                                                <th className="py-3 px-4 text-center">
                                                    <span className="text-[12px] font-semibold text-gray-600">Others</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-50">
                                            {bhusawalData.map((row, idx) => (
                                                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                                    <td className="py-4 px-6 text-[13px] text-gray-700 font-medium border-r border-gray-50">{row.year}</td>
                                                    <td className="py-4 px-6 text-[13px] text-gray-600 border-r border-gray-50">{row.coalConsumption}</td>
                                                    <td className="py-4 px-6 text-[13px] text-gray-600 border-r border-gray-50">{row.ashPercentage}</td>
                                                    <td className="py-4 px-6 text-[13px] text-gray-600 border-r border-gray-50">{row.ashGeneration}</td>
                                                    <td className="py-4 px-6 text-[13px] text-gray-600 border-r border-gray-50">{row.ashUtilization}</td>
                                                    <td className="py-4 px-6 text-[13px] text-gray-600 border-r border-gray-50 text-center">{row.ashUtiPercentage}</td>
                                                    <td className="py-4 px-4 text-[13px] text-gray-600 border-r border-gray-50 text-center">{row.bricks}</td>
                                                    <td className="py-4 px-4 text-[13px] text-gray-600 border-r border-gray-50 text-center">{row.bunds}</td>
                                                    <td className="py-4 px-4 text-[13px] text-gray-600 border-r border-gray-50 text-center">{row.agri}</td>
                                                    <td className="py-4 px-4 text-[13px] text-gray-600 border-r border-gray-50 text-center">{row.cement}</td>
                                                    <td className="py-4 px-4 text-[13px] text-gray-600 border-r border-gray-50 text-center">{row.landfill}</td>
                                                    <td className="py-4 px-4 text-[13px] text-gray-600 text-center">{row.others}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Sub Header - KHAPERKHEDA TPS */}
                        <div className="bg-[#43a047] text-white p-3 font-bold mb-4 rounded-t-lg">
                            KHAPERKHEDA Thermal Power Station
                        </div>

                        <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            {/* Table */}
                            <div className="overflow-x-auto">
                                <div className="border border-gray-200 rounded-[24px] overflow-hidden">
                                    <table className="w-full border-collapse">
                                        <thead>
                                            <tr className="border-b border-gray-100">
                                                <th rowSpan={2} className="py-6 px-6 text-left border-r border-gray-100 align-top">
                                                    <div className="text-[14px] font-semibold text-gray-700">
                                                        Year
                                                    </div>
                                                </th>
                                                <th rowSpan={2} className="py-6 px-6 text-left border-r border-gray-100 align-top">
                                                    <div className="text-[14px] font-semibold text-gray-700">
                                                        Coal consumption
                                                    </div>
                                                </th>
                                                <th rowSpan={2} className="py-6 px-6 text-left border-r border-gray-100 align-top">
                                                    <div className="text-[14px] font-semibold text-gray-700">
                                                        Ash %
                                                    </div>
                                                </th>
                                                <th rowSpan={2} className="py-6 px-6 text-left border-r border-gray-100 align-top">
                                                    <div className="text-[14px] font-semibold text-gray-700">
                                                        Ash Generation
                                                    </div>
                                                </th>
                                                <th rowSpan={2} className="py-6 px-6 text-left border-r border-gray-100 align-top">
                                                    <div className="text-[14px] font-semibold text-gray-700">
                                                        Ash utilization
                                                    </div>
                                                </th>
                                                <th rowSpan={2} className="py-6 px-6 text-left border-r border-gray-100 align-top">
                                                    <div className="text-[14px] font-semibold text-gray-700">
                                                        Ash Uti %
                                                    </div>
                                                </th>
                                                <th colSpan={7} className="py-6 px-6 text-center border-b border-gray-100">
                                                    <div className="text-[14px] font-semibold text-gray-700">
                                                        Categorywise Utilisation
                                                    </div>
                                                </th>
                                            </tr>
                                            <tr className="border-b border-gray-100">
                                                <th className="py-3 px-4 text-center border-r border-gray-100">
                                                    <span className="text-[12px] font-semibold text-gray-600">Bricks</span>
                                                </th>
                                                <th className="py-3 px-4 text-center border-r border-gray-100">
                                                    <span className="text-[12px] font-semibold text-gray-600">Bunds</span>
                                                </th>
                                                <th className="py-3 px-4 text-center border-r border-gray-100">
                                                    <span className="text-[12px] font-semibold text-gray-600">Stowing</span>
                                                </th>
                                                <th className="py-3 px-4 text-center border-r border-gray-100">
                                                    <span className="text-[12px] font-semibold text-gray-600">Agri.</span>
                                                </th>
                                                <th className="py-3 px-4 text-center border-r border-gray-100">
                                                    <span className="text-[12px] font-semibold text-gray-600">Cement</span>
                                                </th>
                                                <th className="py-3 px-4 text-center border-r border-gray-100">
                                                    <span className="text-[12px] font-semibold text-gray-600">Landfill</span>
                                                </th>
                                                <th className="py-3 px-4 text-center">
                                                    <span className="text-[12px] font-semibold text-gray-600">Others</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-50">
                                            {khaperkhedaData.map((row, idx) => (
                                                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                                    <td className="py-4 px-6 text-[13px] text-gray-700 font-medium border-r border-gray-50">{row.year}</td>
                                                    <td className="py-4 px-6 text-[13px] text-gray-600 border-r border-gray-50">{row.coalConsumption}</td>
                                                    <td className="py-4 px-6 text-[13px] text-gray-600 border-r border-gray-50">{row.ashPercentage}</td>
                                                    <td className="py-4 px-6 text-[13px] text-gray-600 border-r border-gray-50">{row.ashGeneration}</td>
                                                    <td className="py-4 px-6 text-[13px] text-gray-600 border-r border-gray-50">{row.ashUtilization}</td>
                                                    <td className="py-4 px-6 text-[13px] text-gray-600 border-r border-gray-50 text-center">{row.ashUtiPercentage}</td>
                                                    <td className="py-4 px-4 text-[13px] text-gray-600 border-r border-gray-50 text-center">{row.bricks}</td>
                                                    <td className="py-4 px-4 text-[13px] text-gray-600 border-r border-gray-50 text-center">{row.bunds}</td>
                                                    <td className="py-4 px-4 text-[13px] text-gray-600 border-r border-gray-50 text-center">{row.stowing || "0"}</td>
                                                    <td className="py-4 px-4 text-[13px] text-gray-600 border-r border-gray-50 text-center">{row.agri}</td>
                                                    <td className="py-4 px-4 text-[13px] text-gray-600 border-r border-gray-50 text-center">{row.cement}</td>
                                                    <td className="py-4 px-4 text-[13px] text-gray-600 border-r border-gray-50 text-center">{row.landfill}</td>
                                                    <td className="py-4 px-4 text-[13px] text-gray-600 text-center">{row.others}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Sub Header - KORADI TPS */}
                        <div className="bg-[#43a047] text-white p-3 font-bold mb-4 rounded-t-lg">
                            KORADI Thermal Power Station
                        </div>

                        <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            {/* Table */}
                            <div className="overflow-x-auto">
                                <div className="border border-gray-200 rounded-[24px] overflow-hidden">
                                    <table className="w-full border-collapse">
                                        <thead>
                                            <tr className="border-b border-gray-100">
                                                <th rowSpan={2} className="py-6 px-6 text-left border-r border-gray-100 align-top">
                                                    <div className="text-[14px] font-semibold text-gray-700">
                                                        Year
                                                    </div>
                                                </th>
                                                <th rowSpan={2} className="py-6 px-6 text-left border-r border-gray-100 align-top">
                                                    <div className="text-[14px] font-semibold text-gray-700">
                                                        Coal consumption
                                                    </div>
                                                </th>
                                                <th rowSpan={2} className="py-6 px-6 text-left border-r border-gray-100 align-top">
                                                    <div className="text-[14px] font-semibold text-gray-700">
                                                        Ash %
                                                    </div>
                                                </th>
                                                <th rowSpan={2} className="py-6 px-6 text-left border-r border-gray-100 align-top">
                                                    <div className="text-[14px] font-semibold text-gray-700">
                                                        Ash Generation
                                                    </div>
                                                </th>
                                                <th rowSpan={2} className="py-6 px-6 text-left border-r border-gray-100 align-top">
                                                    <div className="text-[14px] font-semibold text-gray-700">
                                                        Ash utilization
                                                    </div>
                                                </th>
                                                <th rowSpan={2} className="py-6 px-6 text-left border-r border-gray-100 align-top">
                                                    <div className="text-[14px] font-semibold text-gray-700">
                                                        Ash Uti %
                                                    </div>
                                                </th>
                                                <th colSpan={6} className="py-6 px-6 text-center border-b border-gray-100">
                                                    <div className="text-[14px] font-semibold text-gray-700">
                                                        Categorywise Utilisation
                                                    </div>
                                                </th>
                                            </tr>
                                            <tr className="border-b border-gray-100">
                                                <th className="py-3 px-4 text-center border-r border-gray-100">
                                                    <span className="text-[12px] font-semibold text-gray-600">Bricks</span>
                                                </th>
                                                <th className="py-3 px-4 text-center border-r border-gray-100">
                                                    <span className="text-[12px] font-semibold text-gray-600">Bunds</span>
                                                </th>
                                                <th className="py-3 px-4 text-center border-r border-gray-100">
                                                    <span className="text-[12px] font-semibold text-gray-600">Agri.</span>
                                                </th>
                                                <th className="py-3 px-4 text-center border-r border-gray-100">
                                                    <span className="text-[12px] font-semibold text-gray-600">Cement</span>
                                                </th>
                                                <th className="py-3 px-4 text-center border-r border-gray-100">
                                                    <span className="text-[12px] font-semibold text-gray-600">Landfill</span>
                                                </th>
                                                <th className="py-3 px-4 text-center">
                                                    <span className="text-[12px] font-semibold text-gray-600">Others</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-50">
                                            {koradiData.map((row, idx) => (
                                                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                                    <td className="py-4 px-6 text-[13px] text-gray-700 font-medium border-r border-gray-50">{row.year}</td>
                                                    <td className="py-4 px-6 text-[13px] text-gray-600 border-r border-gray-50">{row.coalConsumption}</td>
                                                    <td className="py-4 px-6 text-[13px] text-gray-600 border-r border-gray-50">{row.ashPercentage}</td>
                                                    <td className="py-4 px-6 text-[13px] text-gray-600 border-r border-gray-50">{row.ashGeneration}</td>
                                                    <td className="py-4 px-6 text-[13px] text-gray-600 border-r border-gray-50">{row.ashUtilization}</td>
                                                    <td className="py-4 px-6 text-[13px] text-gray-600 border-r border-gray-50 text-center">{row.ashUtiPercentage}</td>
                                                    <td className="py-4 px-4 text-[13px] text-gray-600 border-r border-gray-50 text-center">{row.bricks}</td>
                                                    <td className="py-4 px-4 text-[13px] text-gray-600 border-r border-gray-50 text-center">{row.bunds}</td>
                                                    <td className="py-4 px-4 text-[13px] text-gray-600 border-r border-gray-50 text-center">{row.agri}</td>
                                                    <td className="py-4 px-4 text-[13px] text-gray-600 border-r border-gray-50 text-center">{row.cement}</td>
                                                    <td className="py-4 px-4 text-[13px] text-gray-600 border-r border-gray-50 text-center">{row.landfill}</td>
                                                    <td className="py-4 px-4 text-[13px] text-gray-600 text-center">{row.others}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Sub Header - CHANDRAPUR TPS */}
                        <div className="bg-[#43a047] text-white p-3 font-bold mb-4 rounded-t-lg">
                            CHANDRAPUR Thermal Power Station
                        </div>

                        <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500 mb-8">
                            {/* Table */}
                            <div className="overflow-x-auto">
                                <div className="border border-gray-200 rounded-[24px] overflow-hidden">
                                    <table className="w-full border-collapse">
                                        <thead>
                                            <tr className="border-b border-gray-100">
                                                <th rowSpan={2} className="py-6 px-6 text-left border-r border-gray-100 align-top">
                                                    <div className="text-[14px] font-semibold text-gray-700">
                                                        Year
                                                    </div>
                                                </th>
                                                <th rowSpan={2} className="py-6 px-6 text-left border-r border-gray-100 align-top">
                                                    <div className="text-[14px] font-semibold text-gray-700">
                                                        Coal consumption
                                                    </div>
                                                </th>
                                                <th rowSpan={2} className="py-6 px-6 text-left border-r border-gray-100 align-top">
                                                    <div className="text-[14px] font-semibold text-gray-700">
                                                        Ash %
                                                    </div>
                                                </th>
                                                <th rowSpan={2} className="py-6 px-6 text-left border-r border-gray-100 align-top">
                                                    <div className="text-[14px] font-semibold text-gray-700">
                                                        Ash Generation
                                                    </div>
                                                </th>
                                                <th rowSpan={2} className="py-6 px-6 text-left border-r border-gray-100 align-top">
                                                    <div className="text-[14px] font-semibold text-gray-700">
                                                        Ash utilization
                                                    </div>
                                                </th>
                                                <th rowSpan={2} className="py-6 px-6 text-left border-r border-gray-100 align-top">
                                                    <div className="text-[14px] font-semibold text-gray-700">
                                                        Ash Uti %
                                                    </div>
                                                </th>
                                                <th colSpan={6} className="py-6 px-6 text-center border-b border-gray-100">
                                                    <div className="text-[14px] font-semibold text-gray-700">
                                                        Categorywise Utilisation
                                                    </div>
                                                </th>
                                            </tr>
                                            <tr className="border-b border-gray-100">
                                                <th className="py-3 px-4 text-center border-r border-gray-100">
                                                    <span className="text-[12px] font-semibold text-gray-600">Bricks</span>
                                                </th>
                                                <th className="py-3 px-4 text-center border-r border-gray-100">
                                                    <span className="text-[12px] font-semibold text-gray-600">Bunds</span>
                                                </th>
                                                <th className="py-3 px-4 text-center border-r border-gray-100">
                                                    <span className="text-[12px] font-semibold text-gray-600">Stowing</span>
                                                </th>
                                                <th className="py-3 px-4 text-center border-r border-gray-100">
                                                    <span className="text-[12px] font-semibold text-gray-600">Cement</span>
                                                </th>
                                                <th className="py-3 px-4 text-center border-r border-gray-100">
                                                    <span className="text-[12px] font-semibold text-gray-600">Landfill</span>
                                                </th>
                                                <th className="py-3 px-4 text-center">
                                                    <span className="text-[12px] font-semibold text-gray-600">Others</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-50">
                                            {chandrapurData.map((row, idx) => (
                                                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                                    <td className="py-4 px-6 text-[13px] text-gray-700 font-medium border-r border-gray-50">{row.year}</td>
                                                    <td className="py-4 px-6 text-[13px] text-gray-600 border-r border-gray-50">{row.coalConsumption}</td>
                                                    <td className="py-4 px-6 text-[13px] text-gray-600 border-r border-gray-50">{row.ashPercentage}</td>
                                                    <td className="py-4 px-6 text-[13px] text-gray-600 border-r border-gray-50">{row.ashGeneration}</td>
                                                    <td className="py-4 px-6 text-[13px] text-gray-600 border-r border-gray-50">{row.ashUtilization}</td>
                                                    <td className="py-4 px-6 text-[13px] text-gray-600 border-r border-gray-50 text-center">{row.ashUtiPercentage}</td>
                                                    <td className="py-4 px-4 text-[13px] text-gray-600 border-r border-gray-50 text-center">{row.bricks}</td>
                                                    <td className="py-4 px-4 text-[13px] text-gray-600 border-r border-gray-50 text-center">{row.bunds}</td>
                                                    <td className="py-4 px-4 text-[13px] text-gray-600 border-r border-gray-50 text-center">{row.stowing || "0"}</td>
                                                    <td className="py-4 px-4 text-[13px] text-gray-600 border-r border-gray-50 text-center">{row.cement}</td>
                                                    <td className="py-4 px-4 text-[13px] text-gray-600 border-r border-gray-50 text-center">{row.landfill}</td>
                                                    <td className="py-4 px-4 text-[13px] text-gray-600 text-center">{row.others}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Footer Notes */}
                        <div className="space-y-2 mb-12 border-t border-gray-100 pt-6">
                            <p className="text-[13px] text-gray-600 font-medium">
                                NOTE: Figures 03-04 and onwards are estimated figures.
                            </p>
                            <p className="text-[13px] text-gray-600">
                                *This ash utilisation programme as per affidavit filed in Delhi High Court is revised after review in anticipated improved coal quality having less ash content.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FlyAshActionPlan;
