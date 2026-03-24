import { useState, useRef } from 'react';
import { ChevronDown, ChevronUp, ChevronRight, ChevronLeft, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';

const standingorders = "/assets/standingorders.svg";

// Sidebar Data
const sidebarData = [
    {
        title: "Environmental Quality",
        items: ["Air Quality", "Water Quality", "Noise Pollution"]
    },
    {
        title: "Waste Management",
        items: ["Hazardous Waste", "Biomedical Waste", "Solid Waste Management", "Construction and Demolition Waste", "Common Effluent Treatment Plant", "Plastic Waste", "Electronic Waste", "Fly Ash", "Batteries", "End-of-Life Vehicles"]
    },
    {
        title: "Public Hearing",
        items: ["Upcoming Public Hearings", "Archived Public Hearings", "Public Consultation"]
    },
    {
        title: "Public Awareness",
        items: ["Campaigns", "Events", "Newsletters", "Press Releases"]
    },
    {
        title: "Other Links",
        items: ["Important Weblinks", "Related Organizations", "Downloads"]
    }
];

// Table Data from Image
const tableData = [
    {
        srNo: "1", stationCode: "1252", stationName: "Girna river Jalgaon", parameters: [
            { name: "pH", apr: "-", may: "-", jun: "-", jul: "8.3", aug: "-", sep: "-", oct: "7.5", nov: "-", dec: "9.0", jan: "-", feb: "-", mar: "8.3", avg: "8.3" },
            { name: "BOD", apr: "-", may: "-", jun: "-", jul: "8.0", aug: "-", sep: "-", oct: "5.5", nov: "-", dec: "3.0", jan: "-", feb: "-", mar: "5.5", avg: "5.5" },
            { name: "COD", apr: "-", may: "-", jun: "-", jul: "32.0", aug: "-", sep: "-", oct: "16.0", nov: "-", dec: "20.0", jan: "-", feb: "-", mar: "22.7", avg: "22.7" },
            { name: "DO", apr: "-", may: "-", jun: "-", jul: "6.1", aug: "-", sep: "-", oct: "7.0", nov: "-", dec: "7.3", jan: "-", feb: "-", mar: "6.8", avg: "6.8" },
            { name: "Tot.Coliform", apr: "-", may: "-", jun: "-", jul: "175.0", aug: "-", sep: "-", oct: "170.0", nov: "-", dec: "150.0", jan: "-", feb: "-", mar: "165.0", avg: "165.0" },
        ]
    },
    {
        srNo: "2", stationCode: "1092", stationName: "Kalu river Atale village", parameters: [
            { name: "pH", apr: "-", may: "-", jun: "-", jul: "7.7", aug: "-", sep: "-", oct: "7.6", nov: "-", dec: "7.3", jan: "-", feb: "-", mar: "7.5", avg: "7.5" },
            { name: "BOD", apr: "-", may: "-", jun: "-", jul: "7.0", aug: "-", sep: "-", oct: "5.0", nov: "-", dec: "7.0", jan: "-", feb: "-", mar: "6.3", avg: "6.3" },
            { name: "COD", apr: "-", may: "-", jun: "-", jul: "24.0", aug: "-", sep: "-", oct: "16.0", nov: "-", dec: "96.0", jan: "-", feb: "-", mar: "45.3", avg: "45.3" },
            { name: "DO", apr: "-", may: "-", jun: "-", jul: "6.2", aug: "-", sep: "-", oct: "6.5", nov: "-", dec: "5.5", jan: "-", feb: "-", mar: "6.1", avg: "6.1" },
            { name: "Tot.Coliform", apr: "-", may: "-", jun: "-", jul: "140.0", aug: "-", sep: "-", oct: "225.0", nov: "-", dec: "350.0", jan: "-", feb: "-", mar: "238.3", avg: "238.3" },
        ]
    },
    {
        srNo: "3", stationCode: "1461", stationName: "Bhatsa river Pisa Dam", parameters: [
            { name: "pH", apr: "7.0", may: "-", jun: "-", jul: "7.6", aug: "-", sep: "-", oct: "7.6", nov: "-", dec: "7.6", jan: "-", feb: "-", mar: "7.5", avg: "7.5" },
            { name: "BOD", apr: "8.0", may: "-", jun: "-", jul: "5.0", aug: "-", sep: "-", oct: "8.5", nov: "-", dec: "5.4", jan: "-", feb: "-", mar: "6.7", avg: "6.7" },
            { name: "COD", apr: "40.0", may: "-", jun: "-", jul: "20.0", aug: "-", sep: "-", oct: "24.0", nov: "-", dec: "16.0", jan: "-", feb: "-", mar: "25.0", avg: "25.0" },
            { name: "DO", apr: "5.4", may: "-", jun: "-", jul: "5.8", aug: "-", sep: "-", oct: "6.0", nov: "-", dec: "5.9", jan: "-", feb: "-", mar: "5.8", avg: "5.8" },
            { name: "Tot.Coliform", apr: "275.0", may: "-", jun: "-", jul: "175.0", aug: "-", sep: "-", oct: "200.0", nov: "-", dec: "175.0", jan: "-", feb: "-", mar: "206.3", avg: "206.3" },
        ]
    },
    {
        srNo: "4", stationCode: "1212", stationName: "Wardha river Rajura Bridge", parameters: [
            { name: "pH", apr: "7.6", may: "-", jun: "-", jul: "7.9", aug: "-", sep: "-", oct: "8.0", nov: "-", dec: "8.0", jan: "-", feb: "-", mar: "7.9", avg: "7.9" },
            { name: "BOD", apr: "6.0", may: "-", jun: "-", jul: "9.0", aug: "-", sep: "-", oct: "5.5", nov: "-", dec: "5.8", jan: "-", feb: "-", mar: "6.6", avg: "6.6" },
            { name: "COD", apr: "16.0", may: "-", jun: "-", jul: "40.0", aug: "-", sep: "-", oct: "16.0", nov: "-", dec: "32.0", jan: "-", feb: "-", mar: "26.0", avg: "26.0" },
            { name: "DO", apr: "5.5", may: "-", jun: "-", jul: "5.5", aug: "-", sep: "-", oct: "6.5", nov: "-", dec: "5.4", jan: "-", feb: "-", mar: "5.73", avg: "5.73" },
            { name: "Tot.Coliform", apr: "95.0", may: "-", jun: "-", jul: "95.0", aug: "-", sep: "-", oct: "120.0", nov: "-", dec: "200.0", jan: "-", feb: "-", mar: "127.5", avg: "127.5" },
        ]
    },
    {
        srNo: "5", stationCode: "1318", stationName: "Mahim Creek Mahim Bay", parameters: [
            { name: "pH", apr: "7.1", may: "-", jun: "-", jul: "6.8", aug: "-", sep: "-", oct: "-", nov: "-", dec: "7.3", jan: "-", feb: "-", mar: "7.1", avg: "7.1" },
            { name: "BOD", apr: "60.0", may: "-", jun: "-", jul: "28.0", aug: "-", sep: "-", oct: "-", nov: "-", dec: "6.0", jan: "-", feb: "-", mar: "31.3", avg: "31.3" },
            { name: "COD", apr: "376.0", may: "-", jun: "-", jul: "144.0", aug: "-", sep: "-", oct: "-", nov: "-", dec: "184.0", jan: "-", feb: "-", mar: "234.7", avg: "234.7" },
            { name: "DO", apr: "-", may: "-", jun: "-", jul: "3.5", aug: "-", sep: "-", oct: "-", nov: "-", dec: "4.9", jan: "-", feb: "-", mar: "4.2", avg: "4.2" },
            { name: "Tot.Coliform", apr: "275.0", may: "-", jun: "-", jul: "175.0", aug: "-", sep: "-", oct: "-", nov: "-", dec: "175.0", jan: "-", feb: "-", mar: "208.3", avg: "208.3" },
        ]
    },
    {
        srNo: "6", stationCode: "1317", stationName: "Thane Creek ElephantaIsland", parameters: [
            { name: "pH", apr: "7.8", may: "-", jun: "-", jul: "7.0", aug: "-", sep: "-", oct: "-", nov: "-", dec: "7.8", jan: "-", feb: "-", mar: "7.5", avg: "7.5" },
            { name: "BOD", apr: "36.0", may: "-", jun: "-", jul: "32.0", aug: "-", sep: "-", oct: "-", nov: "-", dec: "5.0", jan: "-", feb: "-", mar: "24.3", avg: "24.3" },
            { name: "COD", apr: "364.0", may: "-", jun: "-", jul: "204.0", aug: "-", sep: "-", oct: "-", nov: "-", dec: "172.0", jan: "-", feb: "-", mar: "246.7", avg: "246.7" },
            { name: "DO", apr: "3.4", may: "-", jun: "-", jul: "4.1", aug: "-", sep: "-", oct: "-", nov: "-", dec: "5.2", jan: "-", feb: "-", mar: "4.2", avg: "4.2" },
            { name: "Tot.Coliform", apr: "120.0", may: "-", jun: "-", jul: "200.0", aug: "-", sep: "-", oct: "-", nov: "-", dec: "275.0", jan: "-", feb: "-", mar: "198.3", avg: "198.3" },
        ]
    },
    {
        srNo: "7", stationCode: "1315", stationName: "Wardha river Pulgaon", parameters: [
            { name: "pH", apr: "8.0", may: "8.5", jun: "8.5", jul: "7.6", aug: "8.2", sep: "8.8", oct: "8.4", nov: "7.4", dec: "7.8", jan: "8.7", feb: "8.5", mar: "8.6", avg: "8.3" },
            { name: "BOD", apr: "8.5", may: "10.0", jun: "10.0", jul: "7.5", aug: "11.0", sep: "11.5", oct: "9.5", nov: "4.0", dec: "7.0", jan: "6.2", feb: "6.0", mar: "6.2", avg: "10.9" },
            { name: "COD", apr: "24.0", may: "88.0", jun: "40.0", jul: "24.0", aug: "40.0", sep: "40.0", oct: "32.0", nov: "32.0", dec: "24.0", jan: "32.0", feb: "-", mar: "-", avg: "37.6" },
            { name: "DO", apr: "6.9", may: "5.5", jun: "7.1", jul: "6.3", aug: "5.2", sep: "5.5", oct: "6.2", nov: "6.6", dec: "6.9", jan: "4.6", feb: "5.5", mar: "5.4", avg: "5.9" },
            { name: "Tot.Coliform", apr: "115.0", may: "110.0", jun: "250.0", jul: "225.0", aug: "175.0", sep: "170.0", oct: "200.0", nov: "110.0", dec: "170.0", jan: "150.0", feb: "200.0", mar: "250.0", avg: "177.1" },
        ]
    },
    {
        srNo: "8", stationCode: "1463", stationName: "Nira river Sarola Bridge", parameters: [
            { name: "pH", apr: "-", may: "-", jun: "-", jul: "7.7", aug: "6.8", sep: "6.9", oct: "7.7", nov: "7.4", dec: "7.7", jan: "7.8", feb: "8.3", mar: "8.6", avg: "7.6" },
            { name: "BOD", apr: "-", may: "-", jun: "-", jul: "7.0", aug: "5.0", sep: "7.0", oct: "7.0", nov: "5.0", dec: "13.0", jan: "8.0", feb: "4.0", mar: "5.0", avg: "6.5" },
            { name: "COD", apr: "-", may: "-", jun: "-", jul: "24.0", aug: "32.0", sep: "20.0", oct: "24.0", nov: "16.0", dec: "48.0", jan: "16.0", feb: "24.0", mar: "20.0", avg: "24.0" },
            { name: "DO", apr: "-", may: "-", jun: "-", jul: "6.7", aug: "7.3", sep: "5.9", oct: "5.0", nov: "5.8", dec: "6.3", jan: "5.8", feb: "7.3", mar: "5.3", avg: "6.1" },
            { name: "Tot.Coliform", apr: "-", may: "-", jun: "-", jul: "120.0", aug: "110.0", sep: "175.0", oct: "110.0", nov: "200.0", dec: "120.0", jan: "120.0", feb: "110.0", mar: "70.0", avg: "137.1" },
        ]
    },
    {
        srNo: "9", stationCode: "1192", stationName: "Bhima river Daund", parameters: [
            { name: "pH", apr: "7.0", may: "-", jun: "-", jul: "7.2", aug: "-", sep: "-", oct: "7.2", nov: "-", dec: "-", jan: "6.8", feb: "-", mar: "-", avg: "7.1" },
            { name: "BOD", apr: "6.0", may: "-", jun: "-", jul: "5.5", aug: "-", sep: "-", oct: "8.0", nov: "-", dec: "-", jan: "9.0", feb: "-", mar: "-", avg: "7.1" },
            { name: "COD", apr: "20.0", may: "-", jun: "-", jul: "24.0", aug: "-", sep: "-", oct: "24.0", nov: "-", dec: "-", jan: "24.0", feb: "-", mar: "-", avg: "23.0" },
            { name: "DO", apr: "5.0", may: "-", jun: "-", jul: "5.4", aug: "-", sep: "-", oct: "4.8", nov: "-", dec: "-", jan: "2.9", feb: "-", mar: "-", avg: "4.5" },
            { name: "Tot.Coliform", apr: "225.0", may: "-", jun: "-", jul: "150.0", aug: "-", sep: "-", oct: "175.0", nov: "-", dec: "-", jan: "175.0", feb: "-", mar: "-", avg: "181.3" },
        ]
    },
    {
        srNo: "10", stationCode: "1191", stationName: "Bhima river Pargaon", parameters: [
            { name: "pH", apr: "6.9", may: "-", jun: "-", jul: "7.4", aug: "-", sep: "-", oct: "7.3", nov: "-", dec: "-", jan: "7.0", feb: "-", mar: "-", avg: "7.2" },
            { name: "BOD", apr: "19.0", may: "-", jun: "-", jul: "4.5", aug: "-", sep: "-", oct: "7.5", nov: "-", dec: "-", jan: "8.0", feb: "-", mar: "-", avg: "9.8" },
            { name: "COD", apr: "40.0", may: "-", jun: "-", jul: "16.0", aug: "-", sep: "-", oct: "24.0", nov: "-", dec: "-", jan: "24.0", feb: "-", mar: "-", avg: "26.0" },
            { name: "DO", apr: "3.4", may: "-", jun: "-", jul: "5.7", aug: "-", sep: "-", oct: "5.5", nov: "-", dec: "-", jan: "3.2", feb: "-", mar: "-", avg: "4.5" },
            { name: "Tot.Coliform", apr: "250.0", may: "-", jun: "-", jul: "175.0", aug: "-", sep: "-", oct: "175.0", nov: "-", dec: "-", jan: "225.0", feb: "-", mar: "-", avg: "206.3" },
        ]
    },
    {
        srNo: "11", stationCode: "1190", stationName: "Bhima river D/s of Bandgarden", parameters: [
            { name: "pH", apr: "7.0", may: "-", jun: "-", jul: "7.5", aug: "-", sep: "-", oct: "7.1", nov: "-", dec: "-", jan: "6.8", feb: "-", mar: "-", avg: "7.1" },
            { name: "BOD", apr: "20.0", may: "-", jun: "-", jul: "58.0", aug: "-", sep: "-", oct: "15.0", nov: "-", dec: "-", jan: "26.0", feb: "-", mar: "-", avg: "29.8" },
            { name: "COD", apr: "80.0", may: "-", jun: "-", jul: "96.0", aug: "-", sep: "-", oct: "32.0", nov: "-", dec: "-", jan: "88.0", feb: "-", mar: "-", avg: "74.0" },
            { name: "DO", apr: "4.1", may: "-", jun: "-", jul: "0.5", aug: "-", sep: "-", oct: "2.5", nov: "-", dec: "-", jan: "2.6", feb: "-", mar: "-", avg: "2.4" },
            { name: "Tot.Coliform", apr: "140.0", may: "-", jun: "-", jul: "250.0", aug: "-", sep: "-", oct: "120.0", nov: "-", dec: "-", jan: "115.0", feb: "-", mar: "-", avg: "156.3" },
        ]
    },
    {
        srNo: "12", stationCode: "1189", stationName: "Bhima river Pune D/s ofvithalwadi", parameters: [
            { name: "pH", apr: "7.0", may: "-", jun: "-", jul: "7.5", aug: "-", sep: "-", oct: "7.3", nov: "-", dec: "-", jan: "7.1", feb: "-", mar: "-", avg: "7.2" },
            { name: "BOD", apr: "11.0", may: "-", jun: "-", jul: "44.0", aug: "-", sep: "-", oct: "9.5", nov: "-", dec: "-", jan: "10.0", feb: "-", mar: "-", avg: "18.6" },
            { name: "DO", apr: "3.5", may: "-", jun: "-", jul: "1.2", aug: "-", sep: "-", oct: "4.8", nov: "-", dec: "-", jan: "3.7", feb: "-", mar: "-", avg: "3.3" },
            { name: "Tot.Coliform", apr: "175.0", may: "-", jun: "-", jul: "275.0", aug: "-", sep: "-", oct: "275.0", nov: "-", dec: "-", jan: "175.0", feb: "-", mar: "-", avg: "225.0" },
        ]
    },
    {
        srNo: "13", stationCode: "1094", stationName: "Ulhas river Badlapur W/W", parameters: [
            { name: "pH", apr: "7.4", may: "7.5", jun: "6.5", jul: "6.7", aug: "7.5", sep: "7.6", oct: "8.0", nov: "7.8", dec: "7.7", jan: "7.8", feb: "7.6", mar: "8.2", avg: "7.5" },
            { name: "BOD", apr: "5.0", may: "4.0", jun: "4.5", jul: "9.0", aug: "5.0", sep: "9.5", oct: "4.5", nov: "3.0", dec: "5.0", jan: "4.4", feb: "4.8", mar: "6.2", avg: "5.4" },
            { name: "COD", apr: "16.0", may: "16.0", jun: "16.0", jul: "32.0", aug: "16.0", sep: "24.0", oct: "16.0", nov: "16.0", dec: "20.0", jan: "16.0", feb: "-", mar: "-", avg: "18.8" },
            { name: "DO", apr: "7.1", may: "6.2", jun: "6.3", jul: "6.0", aug: "7.1", sep: "7.0", oct: "6.8", nov: "7.5", dec: "6.9", jan: "7.2", feb: "6.7", mar: "5.6", avg: "6.7" },
            { name: "Tot.Coliform", apr: "170.0", may: "110.0", jun: "150.0", jul: "175.0", aug: "275.0", sep: "200.0", oct: "225.0", nov: "200.0", dec: "175.0", jan: "120.0", feb: "95.0", mar: "175.0", avg: "172.5" },
        ]
    },
    {
        srNo: "14", stationCode: "1093", stationName: "Ulhas river Mohane NRC Bund", parameters: [
            { name: "pH", apr: "7.5", may: "7.5", jun: "6.6", jul: "6.7", aug: "7.6", sep: "7.7", oct: "7.9", nov: "8.0", dec: "7.6", jan: "7.9", feb: "7.5", mar: "8.2", avg: "7.6" },
            { name: "BOD", apr: "6.0", may: "4.0", jun: "6.0", jul: "4.0", aug: "5.0", sep: "6.0", oct: "5.0", nov: "3.0", dec: "4.0", jan: "4.4", feb: "6.0", mar: "6.2", avg: "4.9" },
            { name: "COD", apr: "20.0", may: "16.0", jun: "24.0", jul: "16.0", aug: "16.0", sep: "16.0", oct: "24.0", nov: "24.0", dec: "16.0", jan: "-", feb: "-", mar: "16.0", avg: "18.8" },
            { name: "DO", apr: "6.8", may: "6.7", jun: "6.7", jul: "6.2", aug: "7.0", sep: "6.5", oct: "6.9", nov: "7.7", dec: "7", jan: "7.4", feb: "4.9", mar: "5.7", avg: "6.6" },
            { name: "Tot.Coliform", apr: "110.0", may: "120.0", jun: "150.0", jul: "170.0", aug: "225.0", sep: "175.0", oct: "175.0", nov: "175.0", dec: "170.0", jan: "140.0", feb: "275.0", mar: "200.0", avg: "173.8" },
        ]
    },
    {
        srNo: "15", stationCode: "1316", stationName: "Basin creek Dist-Thane", parameters: [
            { name: "pH", apr: "7.9", may: "-", jun: "-", jul: "6.5", aug: "-", sep: "-", oct: "7.7", nov: "-", dec: "-", jan: "7.9", feb: "-", mar: "-", avg: "7.5" },
            { name: "BOD", apr: "15.0", may: "-", jun: "-", jul: "22.0", aug: "-", sep: "-", oct: "38.0", nov: "-", dec: "-", jan: "6.0", feb: "-", mar: "-", avg: "20.3" },
            { name: "COD", apr: "352.0", may: "-", jun: "-", jul: "56.0", aug: "-", sep: "-", oct: "240.0", nov: "-", dec: "-", jan: "200.0", feb: "-", mar: "-", avg: "212.0" },
            { name: "DO", apr: "4.4", may: "-", jun: "-", jul: "6.0", aug: "-", sep: "-", oct: "2.5", nov: "-", dec: "-", jan: "5.0", feb: "-", mar: "-", avg: "4.5" },
            { name: "Tot.Coliform", apr: "95.0", may: "-", jun: "-", jul: "150.0", aug: "-", sep: "-", oct: "170.0", nov: "-", dec: "-", jan: "200.0", feb: "-", mar: "-", avg: "153.8" },
        ]
    },
    {
        srNo: "16", stationCode: "1462", stationName: "Patalganga river MIDC W/W", parameters: [
            { name: "pH", apr: "7.2", may: "7.3", jun: "7.6", jul: "6.6", aug: "7.9", sep: "7.5", oct: "7.3", nov: "7.3", dec: "7.1", jan: "7.2", feb: "7.3", mar: "7.3", avg: "7.3" },
            { name: "BOD", apr: "5.0", may: "6.0", jun: "4.5", jul: "8.0", aug: "9.5", sep: "8.5", oct: "8.0", nov: "4.0", dec: "4.0", jan: "3.0", feb: "5.0", mar: "4.0", avg: "5.8" },
            { name: "COD", apr: "16.0", may: "20.0", jun: "16.0", jul: "24.0", aug: "24.0", sep: "24.0", oct: "24.0", nov: "16.0", dec: "24.0", jan: "16.0", feb: "-", mar: "-", avg: "20.4" },
            { name: "DO", apr: "5.4", may: "5.6", jun: "6.5", jul: "6.5", aug: "7.1", sep: "6.4", oct: "6.0", nov: "6.5", dec: "6.9", jan: "7.2", feb: "7.0", mar: "7.2", avg: "6.5" },
            { name: "Tot.Coliform", apr: "120.0", may: "120.0", jun: "225.0", jul: "150.0", aug: "120.0", sep: "150.0", oct: "175.0", nov: "120.0", dec: "110.0", jan: "140.0", feb: "175.0", mar: "350.0", avg: "162.9" },
        ]
    },
    {
        srNo: "17", stationCode: "1314", stationName: "Tapi river Ubad village", parameters: [
            { name: "pH", apr: "8.4", may: "8.6", jun: "7.5", jul: "7.0", aug: "8.7", sep: "8.6", oct: "8.3", nov: "8.3", dec: "7.7", jan: "8.9", feb: "7.3", mar: "8.8", avg: "8.2" },
            { name: "BOD", apr: "10.0", may: "5.0", jun: "4.5", jul: "9.0", aug: "5.0", sep: "8.0", oct: "8.0", nov: "3.0", dec: "4.0", jan: "3.2", feb: "5.4", mar: "5.6", avg: "5.9" },
            { name: "COD", apr: "40.0", may: "20.0", jun: "16.0", jul: "32.0", aug: "16.0", sep: "24.0", oct: "24.0", nov: "16.0", dec: "20.0", jan: "32.0", feb: "-", mar: "-", avg: "24.0" },
            { name: "DO", apr: "5.2", may: "6.8", jun: "5.8", jul: "6.0", aug: "7.0", sep: "5.8", oct: "6.8", nov: "7.0", dec: "7.2", jan: "7.4", feb: "7.0", mar: "6.0", avg: "6.5" },
            { name: "Tot.Coliform", apr: "350.0", may: "110.0", jun: "350.0", jul: "200.0", aug: "120.0", sep: "175.0", oct: "175.0", nov: "225.0", dec: "150.0", jan: "120.0", feb: "150.0", mar: "140.0", avg: "188.8" },
        ]
    },
    {
        srNo: "18", stationCode: "1251", stationName: "Tapi river Bhusaval", parameters: [
            { name: "pH", apr: "8.5", may: "-", jun: "7.9", jul: "8.3", aug: "7.4", sep: "8.3", oct: "8.3", nov: "8.5", dec: "7.7", jan: "9.0", feb: "9.0", mar: "8.8", avg: "8.3" },
            { name: "BOD", apr: "4.0", may: "-", jun: "6.0", jul: "5.0", aug: "4.0", sep: "7.0", oct: "7.5", nov: "4.0", dec: "5.0", jan: "3.0", feb: "6.8", mar: "5.4", avg: "5.2" },
            { name: "COD", apr: "16.0", may: "-", jun: "20.0", jul: "16.0", aug: "16.0", sep: "24.0", oct: "24.0", nov: "20.0", dec: "24.0", jan: "32.0", feb: "-", mar: "-", avg: "21.3" },
            { name: "DO", apr: "5.3", may: "-", jun: "5.4", jul: "6.4", aug: "7.0", sep: "6.8", oct: "6.4", nov: "6.3", dec: "6.8", jan: "7.3", feb: "5.1", mar: "6.2", avg: "6.3" },
            { name: "Tot.Coliform", apr: "150.0", may: "-", jun: "140.0", jul: "130.0", aug: "110.0", sep: "225.0", oct: "150.0", nov: "170.0", dec: "275.0", jan: "170.0", feb: "275.0", mar: "120.0", avg: "174.1" },
        ]
    },
    {
        srNo: "19", stationCode: "1313", stationName: "Tapi river Ajanad Village", parameters: [
            { name: "pH", apr: "8.4", may: "8.6", jun: "8.1", jul: "7.9", aug: "8.6", sep: "8.2", oct: "8.4", nov: "8.6", dec: "7.6", jan: "9.0", feb: "9.0", mar: "8.9", avg: "8.4" },
            { name: "BOD", apr: "6.0", may: "6.0", jun: "5.5", jul: "5.5", aug: "9.0", sep: "5.0", oct: "5.0", nov: "4.0", dec: "6.0", jan: "3.0", feb: "6.8", mar: "5.8", avg: "5.6" },
            { name: "COD", apr: "24.0", may: "32.0", jun: "16.0", jul: "24.0", aug: "32.0", sep: "16.0", oct: "16.0", nov: "16.0", dec: "28.0", jan: "28.0", feb: "-", mar: "-", avg: "23.2" },
            { name: "DO", apr: "4.8", may: "6.0", jun: "6.2", jul: "6.1", aug: "6.2", sep: "6.7", oct: "6.4", nov: "6.5", dec: "6.8", jan: "7.4", feb: "5.1", mar: "6.0", avg: "6.2" },
            { name: "Tot.Coliform", apr: "175.0", may: "110.0", jun: "150.0", jul: "170.0", aug: "150.0", sep: "175.0", oct: "170.0", nov: "225.0", dec: "130.0", jan: "175.0", feb: "120.0", mar: "150.0", avg: "158.3" },
        ]
    },
    {
        srNo: "20", stationCode: "1311", stationName: "Panchganga river Ichalkaranji", parameters: [
            { name: "pH", apr: "6.9", may: "-", jun: "-", jul: "-", aug: "-", sep: "-", oct: "7.7", nov: "-", dec: "-", jan: "7.1", feb: "-", mar: "-", avg: "7.2" },
            { name: "BOD", apr: "10.0", may: "-", jun: "-", jul: "-", aug: "-", sep: "-", oct: "8.0", nov: "-", dec: "-", jan: "7.8", feb: "-", mar: "-", avg: "8.6" },
            { name: "COD", apr: "36.0", may: "-", jun: "-", jul: "-", aug: "-", sep: "-", oct: "24.0", nov: "-", dec: "-", jan: "32.0", feb: "-", mar: "-", avg: "30.7" },
            { name: "DO", apr: "4.9", may: "-", jun: "-", jul: "-", aug: "-", sep: "-", oct: "6.2", nov: "-", dec: "-", jan: "3.2", feb: "-", mar: "-", avg: "4.8" },
            { name: "Tot.Coliform", apr: "275.0", may: "-", jun: "-", jul: "-", aug: "-", sep: "-", oct: "250.0", nov: "-", dec: "-", jan: "350.0", feb: "-", mar: "-", avg: "291.7" },
        ]
    },
    {
        srNo: "21", stationCode: "1153", stationName: "Krishna river Rajapur weir", parameters: [
            { name: "pH", apr: "7.6", may: "7.6", jun: "7.1", jul: "7.0", aug: "7.3", sep: "7.8", oct: "8.5", nov: "8.2", dec: "7.8", jan: "7.8", feb: "8.2", mar: "8.0", avg: "7.7" },
            { name: "BOD", apr: "7.0", may: "4.0", jun: "8.0", jul: "4.0", aug: "5.5", sep: "5.0", oct: "5.0", nov: "2.8", dec: "5.0", jan: "6.0", feb: "5.4", mar: "5.4", avg: "5.3" },
            { name: "COD", apr: "24.0", may: "16.0", jun: "24.0", jul: "16.0", aug: "16.0", sep: "16.0", oct: "16.0", nov: "24.0", dec: "28.0", jan: "24.0", feb: "-", mar: "-", avg: "20.4" },
            { name: "DO", apr: "7.5", may: "6.3", jun: "6.0", jul: "6.4", aug: "7.0", sep: "7.0", oct: "6.5", nov: "5.9", dec: "6.2", jan: "5.4", feb: "6.8", mar: "6.3", avg: "6.4" },
            { name: "Tot.Coliform", apr: "275.0", may: "150.0", jun: "175.0", jul: "175.0", aug: "225.0", sep: "175.0", oct: "220.0", nov: "220.0", dec: "175.0", jan: "110.0", feb: "170.0", mar: "170.0", avg: "183.3" },
        ]
    },
    {
        srNo: "22", stationCode: "1310", stationName: "Krishna river Kurundwad", parameters: [
            { name: "pH", apr: "7.6", may: "7.5", jun: "7.3", jul: "7.0", aug: "7.2", sep: "7.9", oct: "8.4", nov: "8.1", dec: "7.7", jan: "7.8", feb: "8.1", mar: "8.1", avg: "7.7" },
            { name: "BOD", apr: "5.0", may: "9.0", jun: "6.0", jul: "5.0", aug: "4.0", sep: "4.5", oct: "7.0", nov: "3.0", dec: "8.0", jan: "6.0", feb: "5.0", mar: "5.0", avg: "5.6" },
            { name: "COD", apr: "24.0", may: "32.0", jun: "16.0", jul: "20.0", aug: "170.0", sep: "16.0", oct: "24.0", nov: "24.0", dec: "24.0", jan: "23.0", feb: "-", mar: "-", avg: "37.5" },
            { name: "DO", apr: "6.7", may: "6.5", jun: "5.5", jul: "6.9", aug: "7.0", sep: "6.9", oct: "6.1", nov: "6.2", dec: "6.6", jan: "5.3", feb: "6.8", mar: "6.7", avg: "6.4" },
            { name: "Tot.Coliform", apr: "250.0", may: "275.0", jun: "275.0", jul: "275.0", aug: "16.0", sep: "200.0", oct: "175.0", nov: "170.0", dec: "350.0", jan: "175.0", feb: "350.0", mar: "175.0", avg: "223.8" },
        ]
    },
    {
        srNo: "23", stationCode: "1152", stationName: "Kundalika river Roha Bridge", parameters: [
            { name: "pH", apr: "-", may: "-", jun: "-", jul: "7.3", aug: "-", sep: "-", oct: "7.5", nov: "-", dec: "-", jan: "8.6", feb: "-", mar: "-", avg: "7.8" },
            { name: "BOD", apr: "-", may: "-", jun: "-", jul: "9.0", aug: "-", sep: "-", oct: "7.5", nov: "-", dec: "-", jan: "4.8", feb: "-", mar: "-", avg: "7.1" },
            { name: "COD", apr: "-", may: "-", jun: "-", jul: "28.0", aug: "-", sep: "-", oct: "24.0", nov: "-", dec: "-", jan: "16.0", feb: "-", mar: "-", avg: "22.7" },
            { name: "DO", apr: "-", may: "-", jun: "-", jul: "5.9", aug: "-", sep: "-", oct: "6.0", nov: "-", dec: "-", jan: "6.0", feb: "-", mar: "-", avg: "5.9" },
            { name: "Tot.Coliform", apr: "-", may: "-", jun: "-", jul: "170.0", aug: "-", sep: "-", oct: "150.0", nov: "-", dec: "-", jan: "275.0", feb: "-", mar: "-", avg: "198.3" },
        ]
    },
    {
        srNo: "24", stationCode: "1253", stationName: "Girna river Malegaon", parameters: [
            { name: "pH", apr: "7.6", may: "-", jun: "-", jul: "7.6", aug: "-", sep: "-", oct: "8.1", nov: "-", dec: "-", jan: "8.0", feb: "-", mar: "-", avg: "7.8" },
            { name: "BOD", apr: "8.0", may: "-", jun: "-", jul: "7.0", aug: "-", sep: "-", oct: "5.5", nov: "-", dec: "-", jan: "3.4", feb: "-", mar: "-", avg: "5.9" },
            { name: "COD", apr: "24.0", may: "-", jun: "-", jul: "20.0", aug: "-", sep: "-", oct: "16.0", nov: "-", dec: "-", jan: "16.0", feb: "-", mar: "-", avg: "19.0" },
            { name: "DO", apr: "6.0", may: "-", jun: "-", jul: "5.6", aug: "-", sep: "-", oct: "5.9", nov: "-", dec: "-", jan: "6.7", feb: "-", mar: "-", avg: "6.1" },
            { name: "Tot.Coliform", apr: "200.0", may: "-", jun: "-", jul: "150.0", aug: "-", sep: "-", oct: "175.0", nov: "-", dec: "-", jan: "170.0", feb: "-", mar: "-", avg: "173.8" },
        ]
    },
    {
        srNo: "25", stationCode: "1211", stationName: "Godavari river D/s of Nashik", parameters: [
            { name: "pH", apr: "7.0", may: "7.3", jun: "7.2", jul: "7.8", aug: "7.7", sep: "8.0", oct: "7.6", nov: "7.5", dec: "7.8", jan: "7.9", feb: "7.5", mar: "7.2", avg: "7.5" },
            { name: "BOD", apr: "5.0", may: "8.0", jun: "36.0", jul: "10.0", aug: "4.0", sep: "2.0", oct: "8.5", nov: "4.0", dec: "5.0", jan: "3.0", feb: "10.0", mar: "7.4", avg: "8.6" },
            { name: "COD", apr: "20.0", may: "44.0", jun: "52.0", jul: "40.0", aug: "20.0", sep: "24.0", oct: "24.0", nov: "24.0", dec: "20.0", jan: "28.0", feb: "-", mar: "-", avg: "29.6" },
            { name: "DO", apr: "5.7", may: "5.9", jun: "3.5", jul: "5.3", aug: "6.5", sep: "7.0", oct: "4.8", nov: "7.0", dec: "7.0", jan: "7.0", feb: "3.6", mar: "4.4", avg: "5.6" },
            { name: "Tot.Coliform", apr: "350.0", may: "115.0", jun: "175.0", jul: "170.0", aug: "150.0", sep: "275.0", oct: "175.0", nov: "110.0", dec: "350.0", jan: "250.0", feb: "350.0", mar: "170.0", avg: "220.0" },
        ]
    },
    {
        srNo: "26", stationCode: "1096", stationName: "Godavari river Ramkund", parameters: [
            { name: "pH", apr: "7.4", may: "7.3", jun: "7.2", jul: "7.7", aug: "7.6", sep: "8.0", oct: "7.4", nov: "7.5", dec: "7.8", jan: "8.0", feb: "7.4", mar: "7.3", avg: "7.6" },
            { name: "BOD", apr: "7.0", may: "5.0", jun: "35.0", jul: "5.5", aug: "4.0", sep: "5.0", oct: "10.0", nov: "3.0", dec: "8.0", jan: "4.0", feb: "10.8", mar: "7.0", avg: "8.7" },
            { name: "COD", apr: "24.0", may: "20.0", jun: "56.0", jul: "24.0", aug: "16.0", sep: "16.0", oct: "32.0", nov: "20.0", dec: "28.0", jan: "16.0", feb: "-", mar: "-", avg: "25.2" },
            { name: "DO", apr: "6.7", may: "6.0", jun: "3.5", jul: "5.5", aug: "6.9", sep: "7.5", oct: "3.8", nov: "6.3", dec: "6.5", jan: "6.8", feb: "3.2", mar: "4.0", avg: "5.6" },
            { name: "Tot.Coliform", apr: "150.0", may: "175.0", jun: "225.0", jul: "175.0", aug: "175.0", sep: "120.0", oct: "200.0", nov: "140.0", dec: "200.0", jan: "250.0", feb: "250.0", mar: "350.0", avg: "200.8" },
        ]
    },
    {
        srNo: "27", stationCode: "1095", stationName: "Godavari river Gangapur Dam", parameters: [
            { name: "pH", apr: "7.0", may: "7.5", jun: "7.7", jul: "7.6", aug: "7.6", sep: "8.1", oct: "8.5", nov: "7.4", dec: "8.2", jan: "8.3", feb: "8.5", mar: "8.0", avg: "7.9" },
            { name: "BOD", apr: "6.0", may: "5.0", jun: "5.5", jul: "9.0", aug: "5.0", sep: "5.5", oct: "9.0", nov: "4.0", dec: "7.0", jan: "4.4", feb: "4.8", mar: "6.0", avg: "5.9" },
            { name: "COD", apr: "20.0", may: "20.0", jun: "16.0", jul: "32.0", aug: "16.0", sep: "16.0", oct: "24.0", nov: "16.0", dec: "24.0", jan: "20.0", feb: "-", mar: "-", avg: "20.4" },
            { name: "DO", apr: "6.4", may: "7.0", jun: "6.2", jul: "6.2", aug: "6.0", sep: "6.5", oct: "5.9", nov: "6.7", dec: "6.8", jan: "6.2", feb: "6.8", mar: "5.4", avg: "6.3" },
            { name: "Tot.Coliform", apr: "225.0", may: "175.0", jun: "350.0", jul: "225.0", aug: "175.0", sep: "175.0", oct: "225.0", nov: "275.0", dec: "250.0", jan: "200.0", feb: "170.0", mar: "175.0", avg: "218.3" },
        ]
    },
    {
        srNo: "29", stationCode: "1209", stationName: "Godavari river Raher", parameters: [
            { name: "pH", apr: "7.8", may: "7.9", jun: "7.0", jul: "7.3", aug: "8.1", sep: "8.0", oct: "8.4", nov: "8.2", dec: "8.8", jan: "8.6", feb: "8.4", mar: "8.2", avg: "8.1" },
            { name: "BOD", apr: "4.0", may: "5.5", jun: "7.0", jul: "27.0", aug: "6.5", sep: "7.5", oct: "5.5", nov: "5.0", dec: "3.5", jan: "3.0", feb: "6.4", mar: "4.4", avg: "7.1" },
            { name: "COD", apr: "16.0", may: "16.0", jun: "24.0", jul: "64.0", aug: "20.0", sep: "24.0", oct: "5.6", nov: "24.0", dec: "20.0", jan: "20.0", feb: "-", mar: "-", avg: "23.4" },
            { name: "DO", apr: "6.0", may: "6.0", jun: "4.6", jul: "3.1", aug: "7.0", sep: "6.3", oct: "6.5", nov: "4.4", dec: "7.0", jan: "7.2", feb: "6.3", mar: "6.4", avg: "5.9" },
            { name: "Tot.Coliform", apr: "200.0", may: "225.0", jun: "150.0", jul: "175.0", aug: "200.0", sep: "175.0", oct: "175.0", nov: "225.0", dec: "120.0", jan: "150.0", feb: "200.0", mar: "170.0", avg: "180.4" },
        ]
    },
    {
        srNo: "30", stationCode: "1312", stationName: "Godavari river Jaikwadi", parameters: [
            { name: "pH", apr: "7.3", may: "7.5", jun: "8.0", jul: "7.8", aug: "7.4", sep: "7.5", oct: "8.7", nov: "7.3", dec: "7.8", jan: "7.5", feb: "7.6", mar: "7.9", avg: "7.7" },
            { name: "BOD", apr: "5.5", may: "9.0", jun: "6.0", jul: "7.0", aug: "5.0", sep: "20.0", oct: "9.0", nov: "3.0", dec: "6.0", jan: "4.2", feb: "5.6", mar: "6.4", avg: "7.2" },
            { name: "COD", apr: "20.0", may: "28.0", jun: "16.0", jul: "24.0", aug: "20.0", sep: "56.0", oct: "24.0", nov: "16.0", dec: "16.0", jan: "24.0", feb: "-", mar: "-", avg: "24.4" },
            { name: "DO", apr: "4.6", may: "5.3", jun: "6.0", jul: "5.0", aug: "6.7", sep: "4.6", oct: "5.6", nov: "5.2", dec: "5.5", jan: "6.7", feb: "7.0", mar: "5.0", avg: "5.6" },
            { name: "Tot.Coliform", apr: "175.0", may: "225.0", jun: "175.0", jul: "170.0", aug: "175.0", sep: "200.0", oct: "225.0", nov: "350.0", dec: "225.0", jan: "350.0", feb: "200.0", mar: "200.0", avg: "222.5" },
        ]
    },
    {
        srNo: "31", stationCode: "1188", stationName: "Bhima river Narsingpur", parameters: [
            { name: "pH", apr: "8.3", may: "8.1", jun: "7.7", jul: "7.9", aug: "27.0", sep: "7.9", oct: "7.9", nov: "7.8", dec: "7.6", jan: "8.0", feb: "8.5", mar: "6.9", avg: "9.5" },
            { name: "BOD", apr: "9.5", may: "4.0", jun: "4.0", jul: "10.0", aug: "9.5", sep: "8.5", oct: "4.5", nov: "6.0", dec: "6.0", jan: "5.0", feb: "4.8", mar: "6.4", avg: "6.5" },
            { name: "COD", apr: "44.0", may: "20.0", jun: "16.0", jul: "32.0", aug: "32.0", sep: "24.0", oct: "16.0", nov: "20.0", dec: "20.0", jan: "24.0", feb: "-", mar: "-", avg: "24.8" },
            { name: "DO", apr: "7.3", may: "6.1", jun: "6.2", jul: "5.3", aug: "6.0", sep: "6.0", oct: "7.0", nov: "7.2", dec: "5.5", jan: "6.2", feb: "7.2", mar: "5.9", avg: "6.3" },
            { name: "Tot.Coliform", apr: "225.0", may: "120.0", jun: "120.0", jul: "150.0", aug: "140.0", sep: "140.0", oct: "140.0", nov: "150.0", dec: "120.0", jan: "140.0", feb: "120.0", mar: "275.0", avg: "153.3" },
        ]
    },
    {
        srNo: "32", stationCode: "1194", stationName: "Krishna river Dhom Dam", parameters: [
            { name: "pH", apr: "8.0", may: "7.0", jun: "7.0", jul: "7.7", aug: "7.7", sep: "8.1", oct: "7.7", nov: "7.1", dec: "7.2", jan: "7.5", feb: "7.3", mar: "7.2", avg: "7.5" },
            { name: "BOD", apr: "6.0", may: "6.5", jun: "4.0", jul: "6.0", aug: "3.8", sep: "6.0", oct: "9.0", nov: "6.0", dec: "3.0", jan: "5.8", feb: "4.8", mar: "4.6", avg: "5.5" },
            { name: "COD", apr: "20.0", may: "16.0", jun: "16.0", jul: "16.0", aug: "16.0", sep: "16.0", oct: "24.0", nov: "32.0", dec: "20.0", jan: "16.0", feb: "-", mar: "-", avg: "11.2" },
            { name: "DO", apr: "7.5", may: "5.0", jun: "5.0", jul: "5.4", aug: "6.4", sep: "7.0", oct: "6.7", nov: "7.0", dec: "5.3", jan: "5.0", feb: "7.2", mar: "6.0", avg: "6.1" },
            { name: "Tot.Coliform", apr: "175.0", may: "115.0", jun: "120.0", jul: "150.0", aug: "225.0", sep: "150.0", oct: "140.0", nov: "70.0", dec: "250.0", jan: "350.0", feb: "170.0", mar: "350.0", avg: "188.8" },
        ]
    },
    {
        srNo: "33", stationCode: "1210", stationName: "Godavari river Nanded", parameters: [
            { name: "pH", apr: "7.7", may: "8.0", jun: "7.3", jul: "7.8", aug: "8.1", sep: "8.0", oct: "8.4", nov: "8.2", dec: "8.8", jan: "8.7", feb: "8.4", mar: "8.1", avg: "8.1" },
            { name: "BOD", apr: "7.0", may: "15.0", jun: "6.0", jul: "78.0", aug: "7.0", sep: "7.0", oct: "9.0", nov: "5.0", dec: "3.0", jan: "2.8", feb: "6.0", mar: "5.5", avg: "12.6" },
            { name: "COD", apr: "24.0", may: "72.0", jun: "16.0", jul: "96.0", aug: "20.0", sep: "24.0", oct: "24.0", nov: "20.0", dec: "24.0", jan: "16.0", feb: "-", mar: "-", avg: "33.6" },
            { name: "DO", apr: "6.5", may: "5.5", jun: "4.4", jul: "-", aug: "6.3", sep: "7.0", oct: "6.5", nov: "5.0", dec: "7.7", jan: "7.4", feb: "6.8", mar: "5.5", avg: "6.2" },
            { name: "Tot.Coliform", apr: "225.0", may: "140.0", jun: "275.0", jul: "140.0", aug: "200.0", sep: "170.0", oct: "150.0", nov: "175.0", dec: "95.0", jan: "120.0", feb: "175.0", mar: "200.0", avg: "172.1" },
        ]
    },
    {
        srNo: "34", stationCode: "28", stationName: "Bhima river Takli", parameters: [
            { name: "pH", apr: "7.6", may: "7.6", jun: "7.6", jul: "7.8", aug: "8.7", sep: "8.6", oct: "7.8", nov: "8.2", dec: "8.0", jan: "8.1", feb: "8.2", mar: "7.0", avg: "7.9" },
            { name: "BOD", apr: "9.0", may: "4.0", jun: "5.0", jul: "8.0", aug: "8.0", sep: "7.5", oct: "5.0", nov: "5.0", dec: "7.0", jan: "6.4", feb: "4.8", mar: "6.6", avg: "6.4" },
            { name: "COD", apr: "52.0", may: "16.0", jun: "20.0", jul: "24.0", aug: "24.0", sep: "24.0", oct: "16.0", nov: "24.0", dec: "24.0", jan: "-", feb: "-", mar: "-", avg: "24.9" },
            { name: "DO", apr: "6.7", may: "6.1", jun: "5.9", jul: "6.2", aug: "6.5", sep: "7.0", oct: "7.0", nov: "4.4", dec: "5.1", jan: "5.0", feb: "7.2", mar: "5.7", avg: "6.1" },
            { name: "Tot.Coliform", apr: "120.0", may: "140.0", jun: "275.0", jul: "170.0", aug: "120.0", sep: "170.0", oct: "175.0", nov: "225.0", dec: "170.0", jan: "350.0", feb: "170.0", mar: "175.0", avg: "188.3" },
        ]
    },
    {
        srNo: "35", stationCode: "12", stationName: "Godavari river Dhalegaon", parameters: [
            { name: "pH", apr: "7.7", may: "8.2", jun: "7.3", jul: "7.6", aug: "8.0", sep: "8.1", oct: "8.5", nov: "7.3", dec: "8.8", jan: "8.7", feb: "8.4", mar: "8.2", avg: "8.1" },
            { name: "BOD", apr: "6.0", may: "4.0", jun: "12.0", jul: "56.0", aug: "6.5", sep: "9.0", oct: "8.5", nov: "7.3", dec: "8.8", jan: "8.7", feb: "8.4", mar: "8.2", avg: "8.1" },
            { name: "COD", apr: "24.0", may: "16.0", jun: "40.0", jul: "88.0", aug: "20.0", sep: "24.0", oct: "24.0", nov: "16.0", dec: "24.0", jan: "-", feb: "-", mar: "-", avg: "25.1" },
            { name: "DO", apr: "6.1", may: "7.0", jun: "5.9", jul: "0.7", aug: "7.1", sep: "5.9", oct: "6.2", nov: "5.2", dec: "7.2", jan: "7.0", feb: "6.8", mar: "6.2", avg: "5.9" },
            { name: "Tot.Coliform", apr: "140.0", may: "120.0", jun: "175.0", jul: "130.0", aug: "150.0", sep: "150.0", oct: "175.0", nov: "350.0", dec: "350.0", jan: "250.0", feb: "150.0", mar: "250.0", avg: "199.2" },
        ]
    },
    {
        srNo: "36", stationCode: "37", stationName: "Krishna river Sangli", parameters: [
            { name: "pH", apr: "7.8", may: "7.8", jun: "7.6", jul: "7.0", aug: "7.9", sep: "8.1", oct: "8.6", nov: "7.8", dec: "8.1", jan: "7.9", feb: "8.1", mar: "7.9", avg: "7.9" },
            { name: "BOD", apr: "6.0", may: "5.0", jun: "8.0", jul: "5.0", aug: "6.0", sep: "8.0", oct: "9.0", nov: "6.0", dec: "4.0", jan: "6.2", feb: "6.2", mar: "6.4", avg: "6.3" },
            { name: "COD", apr: "56.0", may: "20.0", jun: "20.0", jul: "24.0", aug: "20.0", sep: "24.0", oct: "24.0", nov: "20.0", dec: "32.0", jan: "-", feb: "-", mar: "-", avg: "26.7" },
            { name: "DO", apr: "6.2", may: "6.1", jun: "6.6", jul: "6.3", aug: "6.7", sep: "6.4", oct: "5.8", nov: "7.2", dec: "7.0", jan: "4.3", feb: "4.9", mar: "5.3", avg: "6.1" },
            { name: "Tot.Coliform", apr: "95.0", may: "200.0", jun: "110.0", jul: "225.0", aug: "140.0", sep: "150.0", oct: "150.0", nov: "150.0", dec: "250.0", jan: "350.0", feb: "200.0", mar: "175.0", avg: "182.9" },
        ]
    },
    {
        srNo: "37", stationCode: "36", stationName: "Krishna river Karad", parameters: [
            { name: "pH", apr: "8.1", may: "7.7", jun: "7.6", jul: "8.0", aug: "8.1", sep: "7.8", oct: "8.3", nov: "7.1", dec: "7.3", jan: "7.9", feb: "8.5", mar: "7.9", avg: "7.9" },
            { name: "BOD", apr: "10.0", may: "6.0", jun: "5.0", jul: "4.5", aug: "4.0", sep: "8.0", oct: "8.5", nov: "6.0", dec: "6.0", jan: "5.4", feb: "4.6", mar: "4.0", avg: "6.0" },
            { name: "COD", apr: "40.0", may: "20.0", jun: "20.0", jul: "16.0", aug: "20.0", sep: "24.0", oct: "24.0", nov: "32.0", dec: "16.0", jan: "-", feb: "-", mar: "-", avg: "23.5" },
            { name: "DO", apr: "6.8", may: "6.5", jun: "6.1", jul: "6.0", aug: "7.1", sep: "6.0", oct: "6.8", nov: "7.0", dec: "4.2", jan: "5.9", feb: "7.2", mar: "7.0", avg: "6.4" },
            { name: "Tot.Coliform", apr: "115.0", may: "110.0", jun: "140.0", jul: "120.0", aug: "120.0", sep: "120.0", oct: "120.0", nov: "70.0", dec: "140.0", jan: "170.0", feb: "140.0", mar: "170.0", avg: "127.9" },
        ]
    },
    {
        srNo: "38", stationCode: "11", stationName: "Wainganga river Ashti", parameters: [
            { name: "pH", apr: "8.4", may: "7.0", jun: "7.6", jul: "7.9", aug: "7.5", sep: "8.6", oct: "8.3", nov: "8.2", dec: "8.5", jan: "8.5", feb: "7.6", mar: "8.3", avg: "8.0" },
            { name: "BOD", apr: "5.5", may: "5.0", jun: "5.0", jul: "9.5", aug: "10.0", sep: "12.0", oct: "5.0", nov: "5.0", dec: "6.0", jan: "4.4", feb: "5.4", mar: "6.0", avg: "6.6" },
            { name: "COD", apr: "16.0", may: "20.0", jun: "16.0", jul: "32.0", aug: "32.0", sep: "32.0", oct: "16.0", nov: "20.0", dec: "24.0", jan: "-", feb: "-", mar: "-", avg: "23.1" },
            { name: "DO", apr: "6.3", may: "6.2", jun: "7.1", jul: "5.6", aug: "6.2", sep: "6.0", oct: "5.9", nov: "5.0", dec: "7.0", jan: "7.1", feb: "6.2", mar: "6.5", avg: "6.3" },
            { name: "Tot.Coliform", apr: "175.0", may: "150.0", jun: "140.0", jul: "120.0", aug: "150.0", sep: "140.0", oct: "170.0", nov: "175.0", dec: "110.0", jan: "150.0", feb: "170.0", mar: "110.0", avg: "146.7" },
        ]
    }
];

function WaterQuality2002() {
    const navigate = useNavigate();
    const [expandedCategory, setExpandedCategory] = useState<string | null>("Environmental Quality");
    const [selectedItem, setSelectedItem] = useState<string>("Water Quality");
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 7;
    const topRef = useRef<HTMLDivElement>(null);

    // Calculate total pages dynamically
    const totalPages = Math.ceil(tableData.length / ITEMS_PER_PAGE);

    // Get current items
    const currentTableData = tableData.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const toggleCategory = (category: string) => {
        if (expandedCategory === category) {
            setExpandedCategory(null);
        } else {
            setExpandedCategory(category);
        }
    };

    const handleItemClick = (item: string) => {
        setSelectedItem(item);
        if (item === "Air Quality") {
            navigate({ to: '/environmental-quality/air-quality' });
        } else if (item === "Water Quality") {
            navigate({ to: '/environmental-quality/water-quality' });
        } else if (item === "Noise Pollution") {
            navigate({ to: '/environmental-quality/noise-pollution' });
        } else if (item === "Hazardous Waste") {
            navigate({ to: '/waste-management/hazardous-waste' });
        } else if (item === "Biomedical Waste") {
            navigate({ to: '/waste-management/biomedical-waste' });
        }
    };
    const scrollToTop = () => {
        // Try window scroll first
        window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });

        // Also try scrolling the top element into view as a fallback for nested containers
        if (topRef.current) {
            topRef.current.scrollIntoView({ behavior: 'instant' as ScrollBehavior });
        }
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        // Use a small timeout to ensure state update has processed/DOM painted if needed
        setTimeout(scrollToTop, 0);
    };

    const getPageNumbers = (curr: number, total: number) => {
        const pages: any[] = [];
        if (total <= 3) {
            for (let i = 1; i <= total; i++) pages.push(i);
        } else {
            if (curr <= 2) pages.push(1, 2, 3, '...', total);
            else if (curr >= total - 1) pages.push(1, '...', total - 2, total - 1, total);
            else pages.push(1, '...', curr - 1, curr, curr + 1, '...', total);
        }
        return pages;
    };

    return (
        <div ref={topRef} className="font-family-helvetica min-h-screen bg-white">
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
                                Environmental Quality
                            </h1>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 h-10 bg-linear-to-t from-white to-transparent z-40" />
                    </div>
                </div>
            </section>

            {/* Main Content with Sidebar */}
            <section className="w-full flex justify-center bg-white py-12">
                <div className="w-full max-w-[1400px] px-4">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                        {/* Left Sidebar */}
                        <div className="w-full lg:w-[320px] flex-shrink-0">
                            <div className="flex flex-col gap-4">
                                {sidebarData.map((category) => {
                                    const isExpanded = expandedCategory === category.title;
                                    const hasActiveItem = category.items.includes(selectedItem);

                                    return (
                                        <div key={category.title} className="flex flex-col mb-2">
                                            {/* Category Header */}
                                            <div
                                                onClick={() => toggleCategory(category.title)}
                                                className={`flex items-center justify-between px-6 py-4 rounded-xl cursor-pointer transition-all duration-300 z-10 relative group
                                                    ${isExpanded || hasActiveItem
                                                        ? 'bg-linear-to-r from-[#0085E2] to-[#00A3FF] text-white shadow-lg shadow-blue-200 transform scale-[1.02]'
                                                        : 'bg-white hover:bg-gray-50 text-gray-700 hover:text-[#0085E2] border border-gray-100'
                                                    }`}
                                            >
                                                <span className="text-[15px] font-semibold tracking-wide">
                                                    {category.title}
                                                </span>
                                                {isExpanded ? (
                                                    <ChevronUp className={`w-5 h-5 transition-transform duration-300 ${isExpanded || hasActiveItem ? 'text-white' : 'text-gray-400 group-hover:text-[#0085E2]'}`} />
                                                ) : (
                                                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isExpanded || hasActiveItem ? 'text-white' : 'text-gray-400 group-hover:text-[#0085E2]'}`} />
                                                )}
                                            </div>

                                            {/* Dropdown Items */}
                                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                                <div className="mx-4 mt-2 mb-4 bg-white border border-gray-100 rounded-xl flex flex-col gap-1 shadow-sm p-2">
                                                    {category.items.map((item) => {
                                                        const isActive = selectedItem === item;
                                                        return (
                                                            <div
                                                                key={item}
                                                                onClick={() => handleItemClick(item)}
                                                                className={`px-4 py-3 rounded-lg cursor-pointer text-[14px] transition-all duration-200 flex items-center justify-between group
                                                                    ${isActive
                                                                        ? 'bg-blue-50 text-[#0085E2] font-semibold translate-x-1'
                                                                        : 'text-gray-600 hover:text-[#0085E2] hover:bg-gray-50 hover:translate-x-1'
                                                                    }`}
                                                            >
                                                                {item}
                                                                {isActive && <ChevronRight className="w-4 h-4 text-[#0085E2]" />}
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Right Content Area */}
                        <div className="flex-1 w-full overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <h2 className="text-[20px] md:text-[24px] font-bold text-gray-900 mb-6 uppercase border-b border-gray-200 pb-4">
                                WATER QUALITY FOR THE YEAR 2002-2003 UNDER GEMS MINARS PROJECT
                            </h2>

                            <div className="overflow-x-auto pb-4">
                                <div className="border border-gray-200 rounded-[35px] overflow-hidden min-w-[1000px]">
                                    <table className="w-full border-collapse">
                                        <thead>
                                            <tr className="bg-blue-50/50 border-b border-gray-100">
                                                <th className="py-4 px-2 text-center text-xs font-bold text-gray-700 border-r border-gray-100 min-w-[50px]">Sr No</th>
                                                <th className="py-4 px-2 text-center text-xs font-bold text-gray-700 border-r border-gray-100 min-w-[80px]">Station Code</th>
                                                <th className="py-4 px-2 text-center text-xs font-bold text-gray-700 border-r border-gray-100 text-left min-w-[150px]">Station Name</th>
                                                <th className="py-4 px-2 text-center text-xs font-bold text-gray-700 border-r border-gray-100 text-left w-[100px]">Parameter</th>
                                                <th className="py-4 px-1 text-center text-xs font-bold text-gray-700 border-r border-gray-100 w-[50px]">Apr-02</th>
                                                <th className="py-4 px-1 text-center text-xs font-bold text-gray-700 border-r border-gray-100 w-[50px]">May-02</th>
                                                <th className="py-4 px-1 text-center text-xs font-bold text-gray-700 border-r border-gray-100 w-[50px]">Jun-02</th>
                                                <th className="py-4 px-1 text-center text-xs font-bold text-gray-700 border-r border-gray-100 w-[50px]">Jul-02</th>
                                                <th className="py-4 px-1 text-center text-xs font-bold text-gray-700 border-r border-gray-100 w-[50px]">Aug-02</th>
                                                <th className="py-4 px-1 text-center text-xs font-bold text-gray-700 border-r border-gray-100 w-[50px]">Sep-02</th>
                                                <th className="py-4 px-1 text-center text-xs font-bold text-gray-700 border-r border-gray-100 w-[50px]">Oct-02</th>
                                                <th className="py-4 px-1 text-center text-xs font-bold text-gray-700 border-r border-gray-100 w-[50px]">Nov-02</th>
                                                <th className="py-4 px-1 text-center text-xs font-bold text-gray-700 border-r border-gray-100 w-[50px]">Dec-02</th>
                                                <th className="py-4 px-1 text-center text-xs font-bold text-gray-700 border-r border-gray-100 w-[50px]">Jan-03</th>
                                                <th className="py-4 px-1 text-center text-xs font-bold text-gray-700 border-r border-gray-100 w-[50px]">Feb-03</th>
                                                <th className="py-4 px-1 text-center text-xs font-bold text-gray-700 border-r border-gray-100 w-[50px]">Mar-03</th>
                                                <th className="py-4 px-1 text-center text-xs font-bold text-gray-700 w-[60px]">Average</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            {currentTableData.map((row) => (
                                                <tr key={row.srNo} className="hover:bg-gray-50/50 transition-colors">
                                                    <td className="py-3 px-2 text-xs text-gray-600 border-r border-gray-100 text-center align-top">{row.srNo}</td>
                                                    <td className="py-3 px-2 text-xs text-gray-600 border-r border-gray-100 text-center align-top">{row.stationCode}</td>
                                                    <td className="py-3 px-2 text-xs font-medium text-gray-800 border-r border-gray-100 align-top">{row.stationName}</td>
                                                    <td colSpan={14} className="p-0">
                                                        <table className="w-full">
                                                            <tbody>
                                                                {row.parameters.map((param, pIdx) => (
                                                                    <tr key={pIdx} className={pIdx !== row.parameters.length - 1 ? "border-b border-gray-100" : ""}>
                                                                        <td className="py-2 px-2 text-xs text-gray-600 border-r border-gray-100 w-[100px]">{param.name}</td>
                                                                        <td className="py-2 px-1 text-xs text-gray-600 border-r border-gray-100 text-center w-[50px]">{param.apr}</td>
                                                                        <td className="py-2 px-1 text-xs text-gray-600 border-r border-gray-100 text-center w-[50px]">{param.may}</td>
                                                                        <td className="py-2 px-1 text-xs text-gray-600 border-r border-gray-100 text-center w-[50px]">{param.jun}</td>
                                                                        <td className="py-2 px-1 text-xs text-gray-600 border-r border-gray-100 text-center w-[50px]">{param.jul}</td>
                                                                        <td className="py-2 px-1 text-xs text-gray-600 border-r border-gray-100 text-center w-[50px]">{param.aug}</td>
                                                                        <td className="py-2 px-1 text-xs text-gray-600 border-r border-gray-100 text-center w-[50px]">{param.sep}</td>
                                                                        <td className="py-2 px-1 text-xs text-gray-600 border-r border-gray-100 text-center w-[50px]">{param.oct}</td>
                                                                        <td className="py-2 px-1 text-xs text-gray-600 border-r border-gray-100 text-center w-[50px]">{param.nov}</td>
                                                                        <td className="py-2 px-1 text-xs text-gray-600 border-r border-gray-100 text-center w-[50px]">{param.dec}</td>
                                                                        <td className="py-2 px-1 text-xs text-gray-600 border-r border-gray-100 text-center w-[50px]">{param.jan}</td>
                                                                        <td className="py-2 px-1 text-xs text-gray-600 border-r border-gray-100 text-center w-[50px]">{param.feb}</td>
                                                                        <td className="py-2 px-1 text-xs text-gray-600 border-r border-gray-100 text-center w-[50px]">{param.mar}</td>
                                                                        <td className="py-2 px-1 text-xs font-semibold text-gray-800 text-center w-[60px]">{param.avg}</td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Pagination (AirQuality Style) */}
                            {totalPages > 1 && (
                                <div className="flex items-center justify-center gap-2 mt-8 mb-2">
                                    {/* First Page Button */}
                                    <button
                                        onClick={() => handlePageChange(1)}
                                        disabled={currentPage === 1}
                                        className={`w-10 h-10 flex items-center justify-center rounded-full border transition-all duration-300
                                            ${currentPage === 1
                                                ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                                                : 'border-gray-300 text-gray-600 hover:border-[#0085E2] hover:text-[#0085E2] hover:shadow-md cursor-pointer'
                                            }`}
                                    >
                                        <ChevronsLeft className="w-5 h-5" />
                                    </button>

                                    {/* Previous Button */}
                                    <button
                                        onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                                        disabled={currentPage === 1}
                                        className={`w-10 h-10 flex items-center justify-center rounded-full border transition-all duration-300
                                            ${currentPage === 1
                                                ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                                                : 'border-gray-300 text-gray-600 hover:border-[#0085E2] hover:text-[#0085E2] hover:shadow-md cursor-pointer'
                                            }`}
                                    >
                                        <ChevronLeft className="w-5 h-5" />
                                    </button>

                                    {/* Page Numbers */}
                                    {getPageNumbers(currentPage, totalPages).map((page, index) => (
                                        page === '...' ? (
                                            <span key={`ellipsis-${index}`} className="px-2 text-gray-400 text-lg font-medium">...</span>
                                        ) : (
                                            <button
                                                key={page}
                                                onClick={() => handlePageChange(page as number)}
                                                className={`w-10 h-10 flex items-center justify-center rounded-full text-[15px] font-medium transition-all duration-300 cursor-pointer
                                                    ${currentPage === page
                                                        ? 'bg-[#0085E2] text-white shadow-blue-200 scale-110'
                                                        : 'text-gray-600 hover:bg-gray-50'}`}
                                            >
                                                {page}
                                            </button>
                                        )
                                    ))}

                                    {/* Next Button */}
                                    <button
                                        onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
                                        disabled={currentPage === totalPages}
                                        className={`w-10 h-10 flex items-center justify-center rounded-full border transition-all duration-300
                                            ${currentPage === totalPages
                                                ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                                                : 'border-gray-300 text-gray-600 hover:border-[#0085E2] hover:text-[#0085E2] hover:shadow-md cursor-pointer'
                                            }`}
                                    >
                                        <ChevronRight className="w-5 h-5" />
                                    </button>

                                    {/* Last Page Button */}
                                    <button
                                        onClick={() => handlePageChange(totalPages)}
                                        disabled={currentPage === totalPages}
                                        className={`w-10 h-10 flex items-center justify-center rounded-full border transition-all duration-300
                                            ${currentPage === totalPages
                                                ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                                                : 'border-gray-300 text-gray-600 hover:border-[#0085E2] hover:text-[#0085E2] hover:shadow-md cursor-pointer'
                                            }`}
                                    >
                                        <ChevronsRight className="w-5 h-5" />
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default WaterQuality2002;
