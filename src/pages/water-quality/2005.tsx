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
        srNo: "1", stationCode: "1092", stationName: "Kalu river, Atale village", parameters: [
            { name: "pH", apr: "7.8", may: "-", jun: "-", jul: "7.5", aug: "-", sep: "-", oct: "7.1", nov: "-", dec: "-", jan: "7.1", feb: "-", mar: "-", avg: "7.4" },
            { name: "BOD", apr: "16.0", may: "-", jun: "-", jul: "5.5", aug: "-", sep: "-", oct: "6.0", nov: "-", dec: "-", jan: "8.0", feb: "-", mar: "-", avg: "8.9" },
            { name: "DO", apr: "3.9", may: "-", jun: "-", jul: "6.6", aug: "-", sep: "-", oct: "5.5", nov: "-", dec: "-", jan: "5.0", feb: "-", mar: "-", avg: "5.3" },
            { name: "Tot.Coliform", apr: "200.0", may: "-", jun: "-", jul: "225.0", aug: "-", sep: "-", oct: "275.0", nov: "-", dec: "-", jan: "140.0", feb: "-", mar: "-", avg: "210.0" },
        ]
    },
    {
        srNo: "2", stationCode: "1093", stationName: "Ulhas river, U/s Mohane NRC, Bund", parameters: [
            { name: "pH", apr: "7.6", may: "7.7", jun: "7.2", jul: "7.6", aug: "7.2", sep: "7.7", oct: "7.2", nov: "7.5", dec: "7.2", jan: "7.2", feb: "7.2", mar: "7.2", avg: "7.4" },
            { name: "BOD", apr: "3.0", may: "5.0", jun: "5.5", jul: "5.0", aug: "5.5", sep: "4.0", oct: "6.0", nov: "5.0", dec: "6.0", jan: "3.6", feb: "3.6", mar: "4.0", avg: "4.7" },
            { name: "DO", apr: "6.8", may: "7.1", jun: "6.0", jul: "6.4", aug: "6.0", sep: "7.0", oct: "5.3", nov: "7.0", dec: "6.4", jan: "7.1", feb: "6.0", mar: "7.4", avg: "6.5" },
            { name: "Tot.Coliform", apr: "275.0", may: "275.0", jun: "275.0", jul: "350.0", aug: "275.0", sep: "120.0", oct: "350.0", nov: "250.0", dec: "350.0", jan: "275.0", feb: "275.0", mar: "200.0", avg: "272.5" },
        ]
    },
    {
        srNo: "3", stationCode: "1094", stationName: "Ulhas river, U/s Badlapur W/W", parameters: [
            { name: "pH", apr: "7.5", may: "7.3", jun: "-", jul: "7.7", aug: "7.4", sep: "7.2", oct: "7.0", nov: "7.4", dec: "7.4", jan: "7.7", feb: "7.2", mar: "7.2", avg: "7.4" },
            { name: "BOD", apr: "4.0", may: "4.0", jun: "-", jul: "4.0", aug: "4.5", sep: "4.0", oct: "5.0", nov: "4.0", dec: "5.0", jan: "3.4", feb: "3.0", mar: "4.5", avg: "4.1" },
            { name: "DO", apr: "6.6", may: "7.1", jun: "-", jul: "7.4", aug: "6.6", sep: "7.2", oct: "5.7", nov: "6.1", dec: "6.5", jan: "7.2", feb: "6.6", mar: "7.2", avg: "6.7" },
            { name: "Tot.Coliform", apr: "120.0", may: "350.0", jun: "-", jul: "350.0", aug: "225.0", sep: "175.0", oct: "350.0", nov: "275.0", dec: "275.0", jan: "95.0", feb: "350.0", mar: "225.0", avg: "253.6" },
        ]
    },
    {
        srNo: "4", stationCode: "1095", stationName: "Godavari river, U/s Gangapur Dam", parameters: [
            { name: "pH", apr: "8.4", may: "7.9", jun: "-", jul: "7.7", aug: "7.7", sep: "7.9", oct: "8.7", nov: "7.6", dec: "8.1", jan: "7.9", feb: "7.8", mar: "8.0", avg: "7.9" },
            { name: "BOD", apr: "5.0", may: "6.0", jun: "-", jul: "5.5", aug: "15.5", sep: "5.0", oct: "9.0", nov: "5.0", dec: "5.0", jan: "8.0", feb: "4.0", mar: "3.0", avg: "6.5" },
            { name: "DO", apr: "7.2", may: "7.0", jun: "-", jul: "7.2", aug: "5.8", sep: "6.6", oct: "7.1", nov: "7.2", dec: "7.2", jan: "6.6", feb: "8.0", mar: "7.8", avg: "7.1" },
            { name: "Tot.Coliform", apr: "24.0", may: "9.0", jun: "-", jul: "1800.0", aug: "45.0", sep: "275.0", oct: "17.0", nov: "6.0", dec: "20.0", jan: "25.0", feb: "7.0", mar: "2.0", avg: "202.7" },
        ]
    },
    {
        srNo: "5", stationCode: "1096", stationName: "Godavari river, Ramkund", parameters: [
            { name: "pH", apr: "7.4", may: "7.9", jun: "-", jul: "7.9", aug: "7.8", sep: "7.9", oct: "8.0", nov: "8.1", dec: "7.9", jan: "7.2", feb: "7.9", mar: "7.6", avg: "7.8" },
            { name: "BOD", apr: "6.0", may: "4.0", jun: "-", jul: "10.0", aug: "12.0", sep: "6.0", oct: "8.0", nov: "4.0", dec: "9.0", jan: "3.0", feb: "14.0", mar: "6.0", avg: "7.5" },
            { name: "DO", apr: "7.2", may: "6.5", jun: "-", jul: "6.2", aug: "5.6", sep: "6.6", oct: "6.9", nov: "7.0", dec: "4.8", jan: "7.2", feb: "7.3", mar: "7.2", avg: "6.5" },
            { name: "Tot.Coliform", apr: "1100.0", may: "130.0", jun: "-", jul: "900.0", aug: "350.0", sep: "12.0", oct: "140.0", nov: "25.0", dec: "110.0", jan: "250.0", feb: "30.0", mar: "500.0", avg: "322.5" },
        ]
    },
    {
        srNo: "6", stationCode: "1151", stationName: "Patalganga, Shilphata Bridge", parameters: [
            { name: "pH", apr: "8.0", may: "7.3", jun: "-", jul: "7.4", aug: "7.0", sep: "7.7", oct: "7.3", nov: "7.3", dec: "7.4", jan: "7.2", feb: "6.9", mar: "6.8", avg: "7.3" },
            { name: "BOD", apr: "5.0", may: "3.0", jun: "-", jul: "5.0", aug: "5.5", sep: "5.5", oct: "5.0", nov: "5.5", dec: "4.0", jan: "2.8", feb: "2.4", mar: "4.0", avg: "4.3" },
            { name: "DO", apr: "7.0", may: "6.4", jun: "-", jul: "7.0", aug: "6.4", sep: "5.7", oct: "6.0", nov: "7.1", dec: "6.8", jan: "7.0", feb: "7.0", mar: "7.0", avg: "6.7" },
            { name: "Tot.Coliform", apr: "350.0", may: "350.0", jun: "-", jul: "200.0", aug: "550.0", sep: "175.0", oct: "350.0", nov: "275.0", dec: "250.0", jan: "350.0", feb: "275.0", mar: "275.0", avg: "309.1" },
        ]
    },
    {
        srNo: "7", stationCode: "1152", stationName: "Kundalika river, Roha Bridge", parameters: [
            { name: "pH", apr: "8.1", may: "-", jun: "-", jul: "7.8", aug: "-", sep: "-", oct: "7.3", nov: "-", dec: "-", jan: "7.3", feb: "-", mar: "-", avg: "7.6" },
            { name: "BOD", apr: "3.0", may: "-", jun: "-", jul: "4.0", aug: "-", sep: "-", oct: "5.0", nov: "-", dec: "-", jan: "2.8", feb: "-", mar: "-", avg: "3.7" },
            { name: "DO", apr: "6.0", may: "-", jun: "-", jul: "6.8", aug: "-", sep: "-", oct: "6.8", nov: "-", dec: "-", jan: "7.0", feb: "-", mar: "-", avg: "6.7" },
            { name: "Tot.Coliform", apr: "170.0", may: "-", jun: "-", jul: "275.0", aug: "-", sep: "-", oct: "225.0", nov: "-", dec: "-", jan: "225.0", feb: "-", mar: "-", avg: "223.8" },
        ]
    },
    {
        srNo: "8", stationCode: "1153", stationName: "Krishna river, Rajapur weir", parameters: [
            { name: "pH", apr: "8.4", may: "8.1", jun: "-", jul: "6.9", aug: "6.5", sep: "6.9", oct: "7.6", nov: "8.3", dec: "7.1", jan: "8.2", feb: "8.1", mar: "7.4", avg: "7.6" },
            { name: "BOD", apr: "6.0", may: "3.0", jun: "-", jul: "2.2", aug: "1.8", sep: "2.0", oct: "1.2", nov: "2.0", dec: "2.6", jan: "2.8", feb: "2.6", mar: "3.0", avg: "2.6" },
            { name: "DO", apr: "6.7", may: "6.9", jun: "-", jul: "6.8", aug: "7.7", sep: "5.1", oct: "6.8", nov: "8.0", dec: "7.7", jan: "5.6", feb: "5.7", mar: "6.6", avg: "6.7" },
            { name: "Tot.Coliform", apr: "350.0", may: "275.0", jun: "-", jul: "240.0", aug: "110.0", sep: "110.0", oct: "220.0", nov: "580.0", dec: "50.0", jan: "500.0", feb: "90.0", mar: "4.0", avg: "229.9" },
        ]
    },
    {
        srNo: "9", stationCode: "1188", stationName: "Bhima river, Narsingpur", parameters: [
            { name: "pH", apr: "7.7", may: "8.1", jun: "-", jul: "7.7", aug: "7.6", sep: "7.7", oct: "8.1", nov: "8.3", dec: "7.7", jan: "7.9", feb: "7.9", mar: "7.8", avg: "7.9" },
            { name: "BOD", apr: "7.4", may: "8.4", jun: "-", jul: "8.6", aug: "11.4", sep: "8.8", oct: "8.2", nov: "9.4", dec: "9.2", jan: "18.8", feb: "10.2", mar: "10.2", avg: "10.1" },
            { name: "DO", apr: "6.8", may: "7.2", jun: "-", jul: "5.3", aug: "6.3", sep: "6.5", oct: "6.9", nov: "6.8", dec: "6.8", jan: "5.1", feb: "6.1", mar: "5.8", avg: "6.3" },
            { name: "Tot.Coliform", apr: "1600.0", may: "900.0", jun: "-", jul: "175.0", aug: "45.0", sep: "30.0", oct: "65.0", nov: "80.0", dec: "900.0", jan: "900.0", feb: "350.0", mar: "900.0", avg: "540.5" },
        ]
    },
    {
        srNo: "10", stationCode: "1189", stationName: "Bhima river, Pune D/s of vithalwadi", parameters: [
            { name: "pH", apr: "7.3", may: "-", jun: "-", jul: "7.8", aug: "-", sep: "-", oct: "7.8", nov: "-", dec: "-", jan: "7.8", feb: "-", mar: "-", avg: "7.7" },
            { name: "BOD", apr: "7.0", may: "-", jun: "-", jul: "8.8", aug: "-", sep: "-", oct: "8.2", nov: "-", dec: "-", jan: "20.0", feb: "-", mar: "-", avg: "11.0" },
            { name: "DO", apr: "6.8", may: "-", jun: "-", jul: "5.8", aug: "-", sep: "-", oct: "5.4", nov: "-", dec: "-", jan: "3.5", feb: "-", mar: "-", avg: "5.4" },
            { name: "Tot.Coliform", apr: "1800.0", may: "-", jun: "-", jul: "900.0", aug: "-", sep: "-", oct: "350.0", nov: "-", dec: "-", jan: "55.0", feb: "-", mar: "-", avg: "776.3" },
        ]
    },
    {
        srNo: "11", stationCode: "1190", stationName: "Bhima river, D/s of Band-garden", parameters: [
            { name: "pH", apr: "6.9", may: "-", jun: "-", jul: "7.4", aug: "-", sep: "-", oct: "7.7", nov: "-", dec: "-", jan: "7.7", feb: "-", mar: "-", avg: "7.4" },
            { name: "BOD", apr: "36.0", may: "-", jun: "-", jul: "12.6", aug: "-", sep: "-", oct: "27.4", nov: "-", dec: "-", jan: "46.0", feb: "-", mar: "-", avg: "30.5" },
            { name: "DO", apr: "0.8", may: "-", jun: "-", jul: "4.6", aug: "-", sep: "-", oct: "2.3", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "2.6" },
            { name: "Tot.Coliform", apr: "1800.0", may: "-", jun: "-", jul: "1600.0", aug: "-", sep: "-", oct: "425.0", nov: "-", dec: "-", jan: "15.0", feb: "-", mar: "-", avg: "960.0" },
        ]
    },
    {
        srNo: "12", stationCode: "1191", stationName: "Bhima river, Pargaon", parameters: [
            { name: "pH", apr: "7.2", may: "-", jun: "-", jul: "7.4", aug: "-", sep: "-", oct: "7.9", nov: "-", dec: "-", jan: "7.9", feb: "-", mar: "-", avg: "7.6" },
            { name: "BOD", apr: "14.0", may: "-", jun: "-", jul: "7.4", aug: "-", sep: "-", oct: "8.9", nov: "-", dec: "-", jan: "22.0", feb: "-", mar: "-", avg: "13.1" },
            { name: "DO", apr: "5.9", may: "-", jun: "-", jul: "6.2", aug: "-", sep: "-", oct: "5.9", nov: "-", dec: "-", jan: "1.8", feb: "-", mar: "-", avg: "4.9" },
            { name: "Tot.Coliform", apr: "1600.0", may: "-", jun: "-", jul: "550.0", aug: "-", sep: "-", oct: "170.0", nov: "-", dec: "-", jan: "250.0", feb: "-", mar: "-", avg: "642.5" },
        ]
    },
    {
        srNo: "13", stationCode: "1192", stationName: "Bhima river, Daund", parameters: [
            { name: "pH", apr: "7.4", may: "-", jun: "-", jul: "7.4", aug: "-", sep: "-", oct: "8.1", nov: "-", dec: "-", jan: "7.9", feb: "-", mar: "-", avg: "7.7" },
            { name: "BOD", apr: "5.4", may: "-", jun: "-", jul: "8.2", aug: "-", sep: "-", oct: "9.4", nov: "-", dec: "-", jan: "16.0", feb: "-", mar: "-", avg: "9.8" },
            { name: "DO", apr: "4.7", may: "-", jun: "-", jul: "6.2", aug: "-", sep: "-", oct: "6.4", nov: "-", dec: "-", jan: "3.8", feb: "-", mar: "-", avg: "5.3" },
            { name: "Tot.Coliform", apr: "1600.0", may: "-", jun: "-", jul: "900.0", aug: "-", sep: "-", oct: "50.0", nov: "-", dec: "-", jan: "175.0", feb: "-", mar: "-", avg: "681.3" },
        ]
    },
    {
        srNo: "14", stationCode: "1194", stationName: "Krishna river, Dhom Dam", parameters: [
            { name: "pH", apr: "7.9", may: "8.2", jun: "-", jul: "-", aug: "7.4", sep: "7.3", oct: "7.7", nov: "7.5", dec: "7.6", jan: "7.8", feb: "7.7", mar: "7.9", avg: "7.7" },
            { name: "BOD", apr: "6.4", may: "10.0", jun: "-", jul: "-", aug: "8.2", sep: "3.2", oct: "6.8", nov: "8.4", dec: "9.6", jan: "12.8", feb: "8.6", mar: "10.6", avg: "8.5" },
            { name: "DO", apr: "6.9", may: "6.9", jun: "-", jul: "-", aug: "5.6", sep: "7.1", oct: "6.8", nov: "7.1", dec: "7.3", jan: "7.1", feb: "6.8", mar: "6.6", avg: "6.8" },
            { name: "Tot.Coliform", apr: "1800.0", may: "1800.0", jun: "-", jul: "-", aug: "55.0", sep: "45.0", oct: "40.0", nov: "225.0", dec: "130.0", jan: "15.0", feb: "40.0", mar: "50.0", avg: "420.0" },
        ]
    },
    {
        srNo: "15", stationCode: "1209", stationName: "Godavari river, Raher", parameters: [
            { name: "pH", apr: "7.3", may: "8.3", jun: "-", jul: "8.2", aug: "7.7", sep: "8.4", oct: "8.4", nov: "8.1", dec: "8.4", jan: "8.5", feb: "8.3", mar: "7.8", avg: "8.1" },
            { name: "BOD", apr: "4.2", may: "4.7", jun: "-", jul: "3.4", aug: "4.2", sep: "4.2", oct: "2.8", nov: "4.9", dec: "3.5", jan: "4.8", feb: "2.1", mar: "3.7", avg: "4.2" },
            { name: "DO", apr: "5.7", may: "7.5", jun: "-", jul: "6.0", aug: "5.7", sep: "6.7", oct: "7.3", nov: "7.9", dec: "8.5", jan: "8.7", feb: "8.3", mar: "6.0", avg: "7.1" },
            { name: "Tot.Coliform", apr: "200.0", may: "175.0", jun: "-", jul: "228.0", aug: "240.0", sep: "200.0", oct: "240.0", nov: "540.0", dec: "200.0", jan: "240.0", feb: "140.0", mar: "215.0", avg: "238.0" },
        ]
    },
    {
        srNo: "16", stationCode: "1210", stationName: "Godavari river, Nanded", parameters: [
            { name: "pH", apr: "7.4", may: "-", jun: "-", jul: "-", aug: "8.1", sep: "7.9", oct: "8.1", nov: "8.5", dec: "7.9", jan: "8.4", feb: "8.3", mar: "8.0", avg: "8.1" },
            { name: "BOD", apr: "4.0", may: "-", jun: "-", jul: "-", aug: "4.2", sep: "2.8", oct: "4.0", nov: "1.5", dec: "4.4", jan: "2.0", feb: "1.8", mar: "1.9", avg: "2.9" },
            { name: "DO", apr: "4.9", may: "-", jun: "-", jul: "-", aug: "6.9", sep: "6.7", oct: "3.3", nov: "7.3", dec: "7.5", jan: "8.6", feb: "7.9", mar: "7.5", avg: "6.7" },
            { name: "Tot.Coliform", apr: "200.0", may: "-", jun: "-", jul: "-", aug: "270.0", sep: "350.0", oct: "370.0", nov: "470.0", dec: "275.0", jan: "120.0", feb: "280.0", mar: "270.0", avg: "289.4" },
        ]
    },
    {
        srNo: "17", stationCode: "1211", stationName: "Godavari river, D/s of Nashik", parameters: [
            { name: "pH", apr: "7.5", may: "7.8", jun: "-", jul: "7.7", aug: "-", sep: "7.9", oct: "7.8", nov: "8.2", dec: "7.8", jan: "7.5", feb: "7.7", mar: "7.4", avg: "7.7" },
            { name: "BOD", apr: "8.01", may: "10.0", jun: "-", jul: "13.0", aug: "-", sep: "11.0", oct: "13.0", nov: "9.0", dec: "7.0", jan: "15.0", feb: "20.0", mar: "12.0", avg: "11.8" },
            { name: "DO", apr: "6.5", may: "5.9", jun: "-", jul: "4.5", aug: "-", sep: "7.0", oct: "5.2", nov: "6.4", dec: "6.2", jan: "4.2", feb: "6.5", mar: "6.3", avg: "5.9" },
            { name: "Tot.Coliform", apr: "900.0", may: "175.0", jun: "-", jul: "1600.0", aug: "-", sep: "20.0", oct: "1600.0", nov: "1600.0", dec: "550.0", jan: "50.0", feb: "17.0", mar: "500.0", avg: "701.2" },
        ]
    },
    {
        srNo: "18", stationCode: "1212", stationName: "Wardha river, Rajura Bridge", parameters: [
            { name: "pH", apr: "7.6", may: "-", jun: "-", jul: "7.8", aug: "-", sep: "-", oct: "8.3", nov: "-", dec: "-", jan: "8.2", feb: "-", mar: "-", avg: "7.9" },
            { name: "BOD", apr: "5.7", may: "-", jun: "-", jul: "11.5", aug: "-", sep: "-", oct: "7.2", nov: "-", dec: "-", jan: "4.2", feb: "-", mar: "-", avg: "7.2" },
            { name: "DO", apr: "5.2", may: "-", jun: "-", jul: "5.8", aug: "-", sep: "-", oct: "5.2", nov: "-", dec: "-", jan: "5.4", feb: "-", mar: "-", avg: "5.4" },
            { name: "Tot.Coliform", apr: "220.0", may: "-", jun: "-", jul: "1600.0", aug: "-", sep: "-", oct: "1600.0", nov: "-", dec: "-", jan: "1600.0", feb: "-", mar: "-", avg: "1255.0" },
        ]
    },
    {
        srNo: "19", stationCode: "1251", stationName: "Tapi river, Bhusaval", parameters: [
            { name: "pH", apr: "9.2", may: "8.9", jun: "-", jul: "8.9", aug: "7.8", sep: "7.5", oct: "8.1", nov: "8.9", dec: "8.1", jan: "8.7", feb: "9.1", mar: "9.2", avg: "8.6" },
            { name: "BOD", apr: "7.0", may: "9.0", jun: "-", jul: "24.6", aug: "10.5", sep: "12.0", oct: "18.0", nov: "5.0", dec: "9.0", jan: "4.0", feb: "10.0", mar: "5.0", avg: "10.4" },
            { name: "DO", apr: "6.5", may: "7.0", jun: "-", jul: "4.1", aug: "6.8", sep: "7.0", oct: "6.7", nov: "7.2", dec: "6.8", jan: "5.6", feb: "6.7", mar: "7.6", avg: "6.5" },
            { name: "Tot.Coliform", apr: "2.0", may: "7.0", jun: "-", jul: "110.0", aug: "175.0", sep: "45.0", oct: "40.0", nov: "9.0", dec: "275.0", jan: "17.0", feb: "14.0", mar: "12.0", avg: "64.2" },
        ]
    },
    {
        srNo: "20", stationCode: "1252", stationName: "Girna river, Jalgaon", parameters: [
            { name: "pH", apr: "-", may: "-", jun: "-", jul: "-", aug: "-", sep: "-", oct: "7.7", nov: "-", dec: "-", jan: "8.8", feb: "-", mar: "-", avg: "8.3" },
            { name: "BOD", apr: "-", may: "-", jun: "-", jul: "-", aug: "-", sep: "-", oct: "14.0", nov: "-", dec: "-", jan: "2.0", feb: "-", mar: "-", avg: "8.0" },
            { name: "DO", apr: "-", may: "-", jun: "-", jul: "-", aug: "-", sep: "-", oct: "6.9", nov: "-", dec: "-", jan: "7.2", feb: "-", mar: "-", avg: "7.1" },
            { name: "Tot.Coliform", apr: "-", may: "-", jun: "-", jul: "-", aug: "-", sep: "-", oct: "55.0", nov: "-", dec: "-", jan: "20.0", feb: "-", mar: "-", avg: "37.5" },
        ]
    },
    {
        srNo: "21", stationCode: "1253", stationName: "Girna river, Malegaon", parameters: [
            { name: "pH", apr: "-", may: "8.3", jun: "-", jul: "8.7", aug: "-", sep: "-", oct: "8.0", nov: "-", dec: "-", jan: "7.7", feb: "-", mar: "-", avg: "8.2" },
            { name: "BOD", apr: "-", may: "6.0", jun: "-", jul: "6.0", aug: "-", sep: "-", oct: "10.0", nov: "-", dec: "-", jan: "10.0", feb: "-", mar: "-", avg: "8.0" },
            { name: "DO", apr: "-", may: "6.9", jun: "-", jul: "7.3", aug: "-", sep: "-", oct: "4.9", nov: "-", dec: "-", jan: "6.9", feb: "-", mar: "-", avg: "6.5" },
            { name: "Tot.Coliform", apr: "-", may: "900.0", jun: "-", jul: "1800.0", aug: "-", sep: "-", oct: "45.0", nov: "-", dec: "-", jan: "25.0", feb: "-", mar: "-", avg: "692.5" },
        ]
    },
    {
        srNo: "22", stationCode: "1310", stationName: "Krishna river, Kurundwad", parameters: [
            { name: "pH", apr: "8.3", may: "7.8", jun: "6.5", jul: "7.0", aug: "6.5", sep: "6.9", oct: "7.6", nov: "7.7", dec: "6.9", jan: "7.8", feb: "7.9", mar: "7.3", avg: "7.4" },
            { name: "BOD", apr: "4.0", may: "4.0", jun: "1.6", jul: "1.8", aug: "1.6", sep: "2.0", oct: "2.4", nov: "2.4", dec: "2.8", jan: "1.6", feb: "2.6", mar: "3.0", avg: "2.5" },
            { name: "DO", apr: "6.2", may: "6.3", jun: "7.6", jul: "7.4", aug: "7.6", sep: "5.1", oct: "5.5", nov: "6.2", dec: "8.0", jan: "5.6", feb: "7.5", mar: "6.5", avg: "6.6" },
            { name: "Tot.Coliform", apr: "350.0", may: "200.0", jun: "170.0", jul: "220.0", aug: "170.0", sep: "90.0", oct: "170.0", nov: "580.0", dec: "240.0", jan: "350.0", feb: "240.0", mar: "12.0", avg: "232.7" },
        ]
    },
    {
        srNo: "23", stationCode: "1311", stationName: "Panchganga river, Ichalkaranji", parameters: [
            { name: "pH", apr: "7.4", may: "-", jun: "-", jul: "-", aug: "6.6", sep: "-", oct: "-", nov: "-", dec: "-", jan: "8.2", feb: "-", mar: "-", avg: "7.4" },
            { name: "BOD", apr: "4.0", may: "-", jun: "-", jul: "-", aug: "2.0", sep: "-", oct: "-", nov: "-", dec: "-", jan: "2.2", feb: "-", mar: "-", avg: "2.7" },
            { name: "DO", apr: "6.5", may: "-", jun: "-", jul: "-", aug: "7.8", sep: "-", oct: "-", nov: "-", dec: "-", jan: "4.0", feb: "-", mar: "-", avg: "6.1" },
            { name: "Tot.Coliform", apr: "550.0", may: "-", jun: "-", jul: "-", aug: "140.0", sep: "-", oct: "-", nov: "-", dec: "-", jan: "500.0", feb: "-", mar: "-", avg: "396.7" },
        ]
    },
    {
        srNo: "24", stationCode: "1312", stationName: "Godavari river, Jaikwadi", parameters: [
            { name: "pH", apr: "8.1", may: "8.4", jun: "-", jul: "7.8", aug: "7.9", sep: "8.9", oct: "8.3", nov: "8.4", dec: "8.3", jan: "8.5", feb: "8.4", mar: "8.1", avg: "8.3" },
            { name: "BOD", apr: "4.4", may: "4.0", jun: "-", jul: "4.0", aug: "3.8", sep: "3.8", oct: "2.3", nov: "2.3", dec: "3.8", jan: "2.7", feb: "2.5", mar: "5.1", avg: "3.5" },
            { name: "DO", apr: "6.0", may: "7.4", jun: "-", jul: "6.2", aug: "6.8", sep: "6.9", oct: "6.8", nov: "7.5", dec: "8.2", jan: "8.0", feb: "8.6", mar: "7.0", avg: "7.2" },
            { name: "Tot.Coliform", apr: "180.0", may: "170.0", jun: "-", jul: "189.0", aug: "210.0", sep: "175.0", oct: "200.0", nov: "460.0", dec: "170.0", jan: "500.0", feb: "170.0", mar: "175.0", avg: "236.3" },
        ]
    },
    {
        srNo: "25", stationCode: "1313", stationName: "Tapi river, Ajanad Village", parameters: [
            { name: "pH", apr: "9.4", may: "8.8", jun: "-", jul: "9.1", aug: "7.8", sep: "-", oct: "8.6", nov: "8.9", dec: "8.6", jan: "8.7", feb: "9.1", mar: "8.7", avg: "8.8" },
            { name: "BOD", apr: "5.0", may: "10.0", jun: "-", jul: "21.7", aug: "11.5", sep: "-", oct: "16.0", nov: "4.0", dec: "8.0", jan: "2.0", feb: "12.0", mar: "2.0", avg: "9.2" },
            { name: "DO", apr: "6.9", may: "7.0", jun: "-", jul: "4.4", aug: "6.4", sep: "-", oct: "7.1", nov: "7.4", dec: "5.8", jan: "7.0", feb: "6.5", mar: "7.8", avg: "6.6" },
            { name: "Tot.Coliform", apr: "2.0", may: "50.0", jun: "-", jul: "35.0", aug: "550.0", sep: "-", oct: "50.0", nov: "55.0", dec: "250.0", jan: "20.0", feb: "25.0", mar: "30.0", avg: "102.7" },
        ]
    },
    {
        srNo: "26", stationCode: "1314", stationName: "Tapi river, Ubad village", parameters: [
            { name: "pH", apr: "9.0", may: "8.7", jun: "-", jul: "8.7", aug: "7.7", sep: "7.6", oct: "8.5", nov: "8.7", dec: "8.9", jan: "8.7", feb: "8.6", mar: "9.0", avg: "8.5" },
            { name: "BOD", apr: "8.0", may: "5.0", jun: "-", jul: "25.1", aug: "22.0", sep: "11.8", oct: "10.0", nov: "4.5", dec: "9.0", jan: "2.0", feb: "5.0", mar: "10.0", avg: "10.2" },
            { name: "DO", apr: "6.6", may: "7.1", jun: "-", jul: "5.6", aug: "3.9", sep: "7.7", oct: "6.4", nov: "7.3", dec: "6.8", jan: "7.3", feb: "7.8", mar: "5.2", avg: "6.5" },
            { name: "Tot.Coliform", apr: "2.0", may: "17.0", jun: "-", jul: "11.0", aug: "1800.0", sep: "140.0", oct: "130.0", nov: "20.0", dec: "550.0", jan: "20.0", feb: "20.0", mar: "25.0", avg: "248.6" },
        ]
    },
    {
        srNo: "27", stationCode: "1315", stationName: "Wardha river, Pulgaon", parameters: [
            { name: "pH", apr: "8.7", may: "7.8", jun: "-", jul: "8.5", aug: "8.4", sep: "7.7", oct: "7.9", nov: "7.9", dec: "8.2", jan: "8.3", feb: "8.0", mar: "8.2", avg: "8.1" },
            { name: "BOD", apr: "3.0", may: "4.2", jun: "-", jul: "6.6", aug: "5.8", sep: "6.2", oct: "9.8", nov: "14.0", dec: "8.5", jan: "3.2", feb: "3.8", mar: "4.2", avg: "6.3" },
            { name: "DO", apr: "5.4", may: "5.4", jun: "-", jul: "6.1", aug: "6.2", sep: "6.3", oct: "5.9", nov: "6.5", dec: "6.2", jan: "6.5", feb: "6.4", mar: "6.2", avg: "6.1" },
            { name: "Tot.Coliform", apr: "110.0", may: "500.0", jun: "-", jul: "1600.0", aug: "1600.0", sep: "280.0", oct: "1600.0", nov: "1600.0", dec: "110.0", jan: "1600.0", feb: "1600.0", mar: "170.0", avg: "979.0" },
        ]
    },
    {
        srNo: "28", stationCode: "1316", stationName: "Basin creek, Dist-Thane", parameters: [
            { name: "pH", apr: "7.5", may: "-", jun: "-", jul: "7.7", aug: "-", sep: "-", oct: "8.0", nov: "-", dec: "-", jan: "7.6", feb: "-", mar: "-", avg: "7.7" },
            { name: "BOD", apr: "9.0", may: "-", jun: "-", jul: "7.0", aug: "-", sep: "-", oct: "12.0", nov: "-", dec: "-", jan: "7.5", feb: "-", mar: "-", avg: "8.9" },
            { name: "DO", apr: "4.2", may: "-", jun: "-", jul: "5.2", aug: "-", sep: "-", oct: "4.3", nov: "-", dec: "-", jan: "3.8", feb: "-", mar: "-", avg: "4.4" },
            { name: "Tot.Coliform", apr: "550.0", may: "-", jun: "-", jul: "175.0", aug: "-", sep: "-", oct: "350.0", nov: "-", dec: "-", jan: "550.0", feb: "-", mar: "-", avg: "406.3" },
        ]
    },
    {
        srNo: "29", stationCode: "1317", stationName: "Thane Creek, Elephanta Island", parameters: [
            { name: "pH", apr: "8.4", may: "-", jun: "-", jul: "6.9", aug: "-", sep: "-", oct: "7.7", nov: "-", dec: "-", jan: "7.8", feb: "-", mar: "-", avg: "7.7" },
            { name: "BOD", apr: "10.0", may: "-", jun: "-", jul: "7.0", aug: "-", sep: "-", oct: "7.0", nov: "-", dec: "-", jan: "6.0", feb: "-", mar: "-", avg: "7.5" },
            { name: "DO", apr: "4.2", may: "-", jun: "-", jul: "6.2", aug: "-", sep: "-", oct: "5.4", nov: "-", dec: "-", jan: "5.0", feb: "-", mar: "-", avg: "5.2" },
            { name: "Tot.Coliform", apr: "350.0", may: "-", jun: "-", jul: "350.0", aug: "-", sep: "-", oct: "350.0", nov: "-", dec: "-", jan: "250.0", feb: "-", mar: "-", avg: "325.0" },
        ]
    },
    {
        srNo: "30", stationCode: "1318", stationName: "Mahim Creek, Mahim Bay", parameters: [
            { name: "pH", apr: "7.8", may: "-", jun: "-", jul: "7.6", aug: "-", sep: "-", oct: "7.3", nov: "-", dec: "-", jan: "7.4", feb: "-", mar: "-", avg: "7.5" },
            { name: "BOD", apr: "34.0", may: "-", jun: "-", jul: "28.0", aug: "-", sep: "-", oct: "26.0", nov: "-", dec: "-", jan: "10.0", feb: "-", mar: "-", avg: "24.5" },
            { name: "DO", apr: "3.4", may: "-", jun: "-", jul: "1.5", aug: "-", sep: "-", oct: "1.1", nov: "-", dec: "-", jan: "4.0", feb: "-", mar: "-", avg: "2.5" },
            { name: "Tot.Coliform", apr: "425.0", may: "-", jun: "-", jul: "350.0", aug: "-", sep: "-", oct: "425.0", nov: "-", dec: "-", jan: "275.0", feb: "-", mar: "-", avg: "368.8" },
        ]
    },
    {
        srNo: "31", stationCode: "1461", stationName: "Bhatsa river, D/s of Pise Dam", parameters: [
            { name: "pH", apr: "6.9", may: "-", jun: "-", jul: "7.9", aug: "-", sep: "-", oct: "7", nov: "-", dec: "-", jan: "7.2", feb: "-", mar: "-", avg: "7.3" },
            { name: "BOD", apr: "3.0", may: "-", jun: "-", jul: "5.0", aug: "-", sep: "-", oct: "4.0", nov: "-", dec: "-", jan: "5.0", feb: "-", mar: "-", avg: "4.3" },
            { name: "DO", apr: "6.2", may: "-", jun: "-", jul: "6.6", aug: "-", sep: "-", oct: "6.0", nov: "-", dec: "-", jan: "7.0", feb: "-", mar: "-", avg: "6.5" },
            { name: "Tot.Coliform", apr: "170.0", may: "-", jun: "-", jul: "14.0", aug: "-", sep: "-", oct: "275.0", nov: "-", dec: "-", jan: "110.0", feb: "-", mar: "-", avg: "142.3" },
        ]
    },
    {
        srNo: "32", stationCode: "1462", stationName: "Patalganga river- MIDC w/w", parameters: [
            { name: "pH", apr: "7.3", may: "7.0", jun: "-", jul: "7.4", aug: "7.2", sep: "7.7", oct: "7.1", nov: "7.3", dec: "7.5", jan: "7.2", feb: "6.8", mar: "6.8", avg: "7.2" },
            { name: "BOD", apr: "4.0", may: "3.0", jun: "-", jul: "6.5", aug: "5.0", sep: "6.0", oct: "4.0", nov: "5.0", dec: "6.0", jan: "2.0", feb: "3.2", mar: "4.0", avg: "4.4" },
            { name: "DO", apr: "6.5", may: "7.3", jun: "-", jul: "5.8", aug: "6.6", sep: "5.1", oct: "5.9", nov: "7.4", dec: "6.5", jan: "7.2", feb: "6.4", mar: "6.5", avg: "6.5" },
            { name: "Tot.Coliform", apr: "275.0", may: "120.0", jun: "-", jul: "350.0", aug: "200.0", sep: "140.0", oct: "275.0", nov: "250.0", dec: "350.0", jan: "225.0", feb: "200.0", mar: "250.0", avg: "239.5" },
        ]
    },
    {
        srNo: "33", stationCode: "1463", stationName: "Nira river, Sarola Bridge", parameters: [
            { name: "pH", apr: "7.7", may: "7.9", jun: "7.4", jul: "7.6", aug: "7.4", sep: "-", oct: "8.1", nov: "7.9", dec: "7.8", jan: "7.7", feb: "7.9", mar: "7.3", avg: "7.7" },
            { name: "BOD", apr: "6.0", may: "11.2", jun: "10.0", jul: "10.2", aug: "10..0", sep: "-", oct: "6.8", nov: "10.2", dec: "11.0", jan: "11.4", feb: "10.8", mar: "9.8", avg: "9.8" },
            { name: "DO", apr: "6.9", may: "7.4", jun: "6.6", jul: "6.5", aug: "6.6", sep: "-", oct: "6.5", nov: "7.1", dec: "5.6", jan: "6.8", feb: "5.4", mar: "6.6", avg: "6.6" },
            { name: "Tot.Coliform", apr: "1800.0", may: "1800.0", jun: "40.0", jul: "1600.0", aug: "40.0", sep: "-", oct: "35.0", nov: "550.0", dec: "170.0", jan: "140.0", feb: "170.0", mar: "550.0", avg: "626.8" },
        ]
    },
    {
        srNo: "34", stationCode: "1904", stationName: "Panchaganga River, U/s of Kolhapur", parameters: [
            { name: "pH", apr: "7.3", may: "7.8", jun: "-", jul: "6.7", aug: "6.6", sep: "7.2", oct: "7.1", nov: "7.5", dec: "7.4", jan: "8.4", feb: "8.0", mar: "7.6", avg: "7.4" },
            { name: "BOD", apr: "4.0", may: "5.0", jun: "-", jul: "2.0", aug: "2.0", sep: "2.8", oct: "2.4", nov: "2.4", dec: "2.8", jan: "1.8", feb: "1.8", mar: "1.2", avg: "2.6" },
            { name: "DO", apr: "6.3", may: "6.4", jun: "-", jul: "7.3", aug: "7.8", sep: "6.0", oct: "6.0", nov: "6.4", dec: "6.4", jan: "6.9", feb: "5.4", mar: "7.2", avg: "6.6" },
            { name: "Tot.Coliform", apr: "550.0", may: "350.0", jun: "-", jul: "170.0", aug: "140.0", sep: "130.0", oct: "110.0", nov: "170.0", dec: "690.0", jan: "130.0", feb: "600.0", mar: "280.0", avg: "301.8" },
        ]
    },
    {
        srNo: "35", stationCode: "1905", stationName: "Panchaganga River, D/S of Kolhapur", parameters: [
            { name: "pH", apr: "7.0", may: "8.1", jun: "-", jul: "6.9", aug: "6.5", sep: "6.8", oct: "7.3", nov: "7.4", dec: "7.3", jan: "8.4", feb: "7.5", mar: "7.4", avg: "7.3" },
            { name: "BOD", apr: "3.0", may: "4.0", jun: "-", jul: "3.0", aug: "2.2", sep: "2.8", oct: "2.2", nov: "2.2", dec: "3.8", jan: "3.8", feb: "4.2", mar: "9.5", avg: "3.7" },
            { name: "DO", apr: "7.1", may: "6.8", jun: "-", jul: "5.7", aug: "7.7", sep: "5.1", oct: "5.2", nov: "7.5", dec: "4.5", jan: "1.2", feb: "5.6", mar: "2.8", avg: "5.4" },
            { name: "Tot.Coliform", apr: "350.0", may: "225.0", jun: "-", jul: "500.0", aug: "130.0", sep: "80.0", oct: "90.0", nov: "900.0", dec: "90.0", jan: "80.0", feb: "500.0", mar: "1600.0", avg: "413.2" },
        ]
    },
    {
        srNo: "36", stationCode: "1906", stationName: "Krishna river, D/S of Islampur", parameters: [
            { name: "pH", apr: "8.3", may: "8.0", jun: "-", jul: "7.8", aug: "6.9", sep: "7.7", oct: "7.9", nov: "8.2", dec: "7.6", jan: "7.7", feb: "8.2", mar: "-", avg: "7.8" },
            { name: "BOD", apr: "3.0", may: "2.0", jun: "-", jul: "1.8", aug: "1.8", sep: "2.2", oct: "2.2", nov: "2.4", dec: "4.4", jan: "3.0", feb: "3.0", mar: "-", avg: "2.6" },
            { name: "DO", apr: "5.5", may: "5.5", jun: "-", jul: "7.3", aug: "7.7", sep: "7.7", oct: "7.0", nov: "7.4", dec: "2.8", jan: "7.9", feb: "7.5", mar: "-", avg: "6.6" },
            { name: "Tot.Coliform", apr: "250.0", may: "180.0", jun: "-", jul: "300.0", aug: "140.0", sep: "70.0", oct: "140.0", nov: "200.0", dec: "500.0", jan: "50.0", feb: "60.0", mar: "-", avg: "189.0" },
        ]
    },
    {
        srNo: "37", stationCode: "1907", stationName: "Rangavali River, D/s of Navapur", parameters: [
            { name: "pH", apr: "-", may: "-", jun: "-", jul: "-", aug: "-", sep: "-", oct: "7.3", nov: "-", dec: "-", jan: "8.8", feb: "-", mar: "-", avg: "8.0" },
            { name: "BOD", apr: "-", may: "-", jun: "-", jul: "-", aug: "-", sep: "-", oct: "10.0", nov: "-", dec: "-", jan: "5.0", feb: "-", mar: "-", avg: "7.5" },
            { name: "DO", apr: "-", may: "-", jun: "-", jul: "-", aug: "-", sep: "-", oct: "6.2", nov: "-", dec: "-", jan: "8.5", feb: "-", mar: "-", avg: "7.4" },
            { name: "Tot.Coliform", apr: "-", may: "-", jun: "-", jul: "-", aug: "-", sep: "-", oct: "110.0", nov: "-", dec: "-", jan: "17.0", feb: "-", mar: "-", avg: "63.5" },
        ]
    },
    {
        srNo: "38", stationCode: "1908", stationName: "Kolar River, Kampthee Bridge", parameters: [
            { name: "pH", apr: "8.9", may: "-", jun: "-", jul: "8.1", aug: "-", sep: "-", oct: "8.2", nov: "-", dec: "-", jan: "8.2", feb: "-", mar: "-", avg: "8.4" },
            { name: "BOD", apr: "3.1", may: "-", jun: "-", jul: "6.2", aug: "-", sep: "-", oct: "7.0", nov: "-", dec: "-", jan: "5.2", feb: "-", mar: "-", avg: "5.4" },
            { name: "DO", apr: "5.6", may: "-", jun: "-", jul: "6.0", aug: "-", sep: "-", oct: "5.9", nov: "-", dec: "-", jan: "5.9", feb: "-", mar: "-", avg: "5.9" },
            { name: "Tot.Coliform", apr: "140.0", may: "-", jun: "-", jul: "500.0", aug: "-", sep: "-", oct: "170.0", nov: "-", dec: "-", jan: "1600.0", feb: "-", mar: "-", avg: "602.5" },
        ]
    },
    {
        srNo: "39", stationCode: "1909", stationName: "Kanhan River, Agargaon D/s. of Nagpur", parameters: [
            { name: "pH", apr: "8.9", may: "-", jun: "-", jul: "7.6", aug: "-", sep: "-", oct: "7.8", nov: "-", dec: "-", jan: "7.5", feb: "-", mar: "-", avg: "7.9" },
            { name: "BOD", apr: "3.2", may: "-", jun: "-", jul: "10.0", aug: "-", sep: "-", oct: "6.5", nov: "-", dec: "-", jan: "11.0", feb: "-", mar: "-", avg: "7.7" },
            { name: "DO", apr: "6.2", may: "-", jun: "-", jul: "5.3", aug: "-", sep: "-", oct: "6.3", nov: "-", dec: "-", jan: "5.1", feb: "-", mar: "-", avg: "5.7" },
            { name: "Tot.Coliform", apr: "170.0", may: "-", jun: "-", jul: "1600.0", aug: "-", sep: "-", oct: "280.0", nov: "-", dec: "-", jan: "1600.0", feb: "-", mar: "-", avg: "912.5" },
        ]
    },
    {
        srNo: "40", stationCode: "1910", stationName: "Wainganga River, After confluence with Kanhan", parameters: [
            { name: "pH", apr: "9.1", may: "-", jun: "-", jul: "7.5", aug: "-", sep: "-", oct: "7.8", nov: "-", dec: "-", jan: "7.3", feb: "-", mar: "-", avg: "7.9" },
            { name: "BOD", apr: "3.4", may: "-", jun: "-", jul: "11.5", aug: "-", sep: "-", oct: "7.3", nov: "-", dec: "-", jan: "8.6", feb: "-", mar: "-", avg: "7.7" },
            { name: "DO", apr: "5.8", may: "-", jun: "-", jul: "5.8", aug: "-", sep: "-", oct: "6.0", nov: "-", dec: "-", jan: "5.7", feb: "-", mar: "-", avg: "5.8" },
            { name: "Tot.Coliform", apr: "300.0", may: "-", jun: "-", jul: "1600.0", aug: "-", sep: "-", oct: "1600.0", nov: "-", dec: "-", jan: "1600.0", feb: "-", mar: "-", avg: "1275.0" },
        ]
    },
    {
        srNo: "41", stationCode: "1911", stationName: "Chandrabhaga (Bhima) U/s. of Pandarpur Town", parameters: [
            { name: "pH", apr: "7.6", may: "-", jun: "-", jul: "7.6", aug: "-", sep: "-", oct: "8.1", nov: "-", dec: "-", jan: "7.9", feb: "-", mar: "-", avg: "7.8" },
            { name: "BOD", apr: "10.4", may: "-", jun: "-", jul: "9.2", aug: "-", sep: "-", oct: "7.4", nov: "-", dec: "-", jan: "12.0", feb: "-", mar: "-", avg: "9.8" },
            { name: "DO", apr: "6.9", may: "-", jun: "-", jul: "5.4", aug: "-", sep: "-", oct: "6.9", nov: "-", dec: "-", jan: "6.5", feb: "-", mar: "-", avg: "6.4" },
            { name: "Tot.Coliform", apr: "1800.0", may: "-", jun: "-", jul: "115.0", aug: "-", sep: "-", oct: "170.0", nov: "-", dec: "-", jan: "200.0", feb: "-", mar: "-", avg: "571.3" },
        ]
    },
    {
        srNo: "42", stationCode: "1912", stationName: "Chandrabhaga (Bhima) D/s. Of Pandarpur Town", parameters: [
            { name: "pH", apr: "7.5", may: "-", jun: "-", jul: "7.7", aug: "-", sep: "-", oct: "7.9", nov: "-", dec: "-", jan: "7.8", feb: "-", mar: "-", avg: "7.7" },
            { name: "BOD", apr: "14.0", may: "-", jun: "-", jul: "11.6", aug: "-", sep: "-", oct: "9.0", nov: "-", dec: "-", jan: "13.4", feb: "-", mar: "-", avg: "12.0" },
            { name: "DO", apr: "5.9", may: "-", jun: "-", jul: "4.8", aug: "-", sep: "-", oct: "6.0", nov: "-", dec: "-", jan: "6.2", feb: "-", mar: "-", avg: "5.7" },
            { name: "Tot.Coliform", apr: "1800.0", may: "-", jun: "-", jul: "130.0", aug: "-", sep: "-", oct: "225.0", nov: "-", dec: "-", jan: "350.0", feb: "-", mar: "-", avg: "626.3" },
        ]
    },
    {
        srNo: "43", stationCode: "1913", stationName: "Purna River, Dhupeshwar w/w", parameters: [
            { name: "pH", apr: "7.8", may: "-", jun: "-", jul: "8.1", aug: "-", sep: "-", oct: "8.2", nov: "-", dec: "-", jan: "8.4", feb: "-", mar: "-", avg: "8.1" },
            { name: "BOD", apr: "7.6", may: "-", jun: "-", jul: "10.0", aug: "-", sep: "-", oct: "6.8", nov: "-", dec: "-", jan: "3.0", feb: "-", mar: "-", avg: "6.9" },
            { name: "DO", apr: "4.9", may: "-", jun: "-", jul: "5.2", aug: "-", sep: "-", oct: "5.3", nov: "-", dec: "-", jan: "6.7", feb: "-", mar: "-", avg: "5.5" },
            { name: "Tot.Coliform", apr: "280.0", may: "-", jun: "-", jul: "900.0", aug: "-", sep: "-", oct: "1600.0", nov: "-", dec: "-", jan: "1600.0", feb: "-", mar: "-", avg: "1095.0" },
        ]
    },
    {
        srNo: "44", stationCode: "Well Water", stationName: "Shri. Borahate Dattu Kondiba Moshi Haveli, Pimpri-Chinchwad", parameters: [
            { name: "pH", apr: "-", may: "-", jun: "-", jul: "-", aug: "-", sep: "-", oct: "7.6", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "7.6" },
            { name: "BOD", apr: "-", may: "-", jun: "-", jul: "-", aug: "-", sep: "-", oct: "5.8", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "5.8" },
            { name: "DO", apr: "-", may: "-", jun: "-", jul: "-", aug: "-", sep: "-", oct: "5.7", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "5.7" },
            { name: "Tot.Coliform", apr: "-", may: "-", jun: "-", jul: "-", aug: "-", sep: "-", oct: "350.0", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "350.0" },
        ]
    },
    {
        srNo: "45", stationCode: "Well Water", stationName: "Shri Shivaji Baban Darekar Sanaswadi, Shirur, Pune", parameters: [
            { name: "pH", apr: "-", may: "-", jun: "-", jul: "-", aug: "-", sep: "-", oct: "7.6", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "7.6" },
            { name: "BOD", apr: "-", may: "-", jun: "-", jul: "-", aug: "-", sep: "-", oct: "7.0", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "7.0" },
            { name: "DO", apr: "-", may: "-", jun: "-", jul: "-", aug: "-", sep: "-", oct: "6.2", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "6.2" },
            { name: "Tot.Coliform", apr: "-", may: "-", jun: "-", jul: "-", aug: "-", sep: "-", oct: "0.2", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "0.2" },
        ]
    },
    {
        srNo: "46", stationCode: "Borewell Water", stationName: "Sakharale Tal.- Walwa, Dist. - Sangli", parameters: [
            { name: "pH", apr: "-", may: "-", jun: "-", jul: "-", aug: "-", sep: "-", oct: "7.6", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "7.6" },
            { name: "BOD", apr: "-", may: "-", jun: "-", jul: "-", aug: "-", sep: "-", oct: "2.2", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "2.2" },
            { name: "DO", apr: "-", may: "-", jun: "-", jul: "-", aug: "-", sep: "-", oct: "7.0", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "7.0" },
            { name: "Tot.Coliform", apr: "-", may: "-", jun: "-", jul: "-", aug: "-", sep: "-", oct: "170.0", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "170.0" },
        ]
    },
    {
        srNo: "47", stationCode: "Well Water", stationName: "D/s. of Islampur, MIDC, Tal.- Walwa, Dist. - Sangli", parameters: [
            { name: "pH", apr: "-", may: "-", jun: "-", jul: "-", aug: "-", sep: "-", oct: "7.1", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "7.1" },
            { name: "BOD", apr: "-", may: "-", jun: "-", jul: "-", aug: "-", sep: "-", oct: "3.2", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "3.2" },
            { name: "DO", apr: "-", may: "-", jun: "-", jul: "-", aug: "-", sep: "-", oct: "6.3", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "6.3" },
            { name: "Tot.Coliform", apr: "-", may: "-", jun: "-", jul: "-", aug: "-", sep: "-", oct: "70.0", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "70.0" },
        ]
    },
    {
        srNo: "48", stationCode: "Well Water", stationName: "Savli Village, Tal. - Miraj, Dist. - Sangli", parameters: [
            { name: "pH", apr: "-", may: "-", jun: "-", jul: "-", aug: "-", sep: "-", oct: "6.8", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "6.7" },
            { name: "BOD", apr: "-", may: "-", jun: "-", jul: "-", aug: "-", sep: "-", oct: "1.8", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "1.8" },
            { name: "DO", apr: "-", may: "-", jun: "-", jul: "-", aug: "-", sep: "-", oct: "6.2", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "6.2" },
            { name: "Tot.Coliform", apr: "-", may: "-", jun: "-", jul: "-", aug: "-", sep: "-", oct: "50.0", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "50.0" },
        ]
    },
    {
        srNo: "1", stationCode: "11", stationName: "Wainganga river, Ashti", parameters: [
            { name: "pH", apr: "8.8", may: "8.9", jun: "7.8", jul: "7.8", aug: "7.9", sep: "7.9", oct: "8.5", nov: "8.3", dec: "8.4", jan: "8.3", feb: "9.0", mar: "8.4", avg: "8.3" },
            { name: "BOD", apr: "2.9", may: "3.9", jun: "5.7", jul: "10.0", aug: "8.4", sep: "5.2", oct: "5.6", nov: "12.0", dec: "8.0", jan: "2.9", feb: "8.0", mar: "7.0", avg: "6.6" },
            { name: "DO", apr: "5.5", may: "5.8", jun: "5.8", jul: "5.9", aug: "6.2", sep: "6.2", oct: "5.8", nov: "6.8", dec: "7.2", jan: "6.8", feb: "5.4", mar: "5.2", avg: "6.1" },
            { name: "Tot.Coliform", apr: "170.0", may: "110.0", jun: "280.0", jul: "900.0", aug: "1600.0", sep: "350.0", oct: "280.0", nov: "280.0", dec: "90.0", jan: "1600.0", feb: "1600.0", mar: "220.0", avg: "623.3" },
        ]
    },
    {
        srNo: "2", stationCode: "12", stationName: "Godavari river, Dhalegaon", parameters: [
            { name: "pH", apr: "-", may: "-", jun: "-", jul: "-", aug: "8.1", sep: "8.6", oct: "8.0", nov: "8.5", dec: "8.1", jan: "8.5", feb: "8.3", mar: "7.9", avg: "8.3" },
            { name: "BOD", apr: "-", may: "-", jun: "-", jul: "-", aug: "4.0", sep: "3.0", oct: "3.2", nov: "2.58", dec: "4.6", jan: "2.2", feb: "2.3", mar: "4.2", avg: "3.3" },
            { name: "DO", apr: "-", may: "-", jun: "-", jul: "-", aug: "6.7", sep: "7.0", oct: "7.5", nov: "7.3", dec: "7.2", jan: "8.4", feb: "7.6", mar: "7.2", avg: "7.4" },
            { name: "Tot.Coliform", apr: "-", may: "-", jun: "-", jul: "-", aug: "280.0", sep: "370.0", oct: "380.0", nov: "540.01", dec: "175.0", jan: "500.0", feb: "220.0", mar: "280.0", avg: "343.1" },
        ]
    },
    {
        srNo: "3", stationCode: "28", stationName: "Bhima river, Takli", parameters: [
            { name: "pH", apr: "7.7", may: "8.1", jun: "8.1", jul: "7.6", aug: "7.6", sep: "7.9", oct: "8.1", nov: "8.2", dec: "8.1", jan: "7.8", feb: "7.8", mar: "7.8", avg: "7.9" },
            { name: "BOD", apr: "10.0", may: "12.4", jun: "9.4", jul: "9.6", aug: "8.6", sep: "12.6", oct: "7.8", nov: "8.8", dec: "8.8", jan: "12.0", feb: "12.6", mar: "13.6", avg: "10.5" },
            { name: "DO", apr: "6.8", may: "4.7", jun: "6.5", jul: "6.0", aug: "6.9", sep: "6.7", oct: "6.9", nov: "6.9", dec: "7.2", jan: "5.8", feb: "6.9", mar: "5.2", avg: "6.4" },
            { name: "Tot.Coliform", apr: "1800.0", may: "425.0", jun: "1800.0", jul: "350.0", aug: "45.0", sep: "35.0", oct: "50.0", nov: "900.0", dec: "55.0", jan: "65.0", feb: "25.0", mar: "900.0", avg: "537.5" },
        ]
    },
    {
        srNo: "4", stationCode: "36", stationName: "Krishna river, Karad", parameters: [
            { name: "pH", apr: "7.8", may: "8.4", jun: "7.9", jul: "7.6", aug: "7.5", sep: "7.3", oct: "8.1", nov: "7.6", dec: "7.8", jan: "7.9", feb: "7.9", mar: "7.5", avg: "7.8" },
            { name: "BOD", apr: "8.0", may: "12.2", jun: "12.0", jul: "8.2", aug: "10.6", sep: "11.4", oct: "8.4", nov: "9.0", dec: "10.8", jan: "10.2", feb: "8.8", mar: "11.2", avg: "10.1" },
            { name: "DO", apr: "6.9", may: "7.2", jun: "5.6", jul: "6.9", aug: "6.3", sep: "6.9", oct: "6.8", nov: "6.9", dec: "7.2", jan: "7.2", feb: "6.9", mar: "5.5", avg: "6.7" },
            { name: "Tot.Coliform", apr: "1800.0", may: "1800.0", jun: "1800.0", jul: "350.0", aug: "50.0", sep: "40.0", oct: "45.0", nov: "550.0", dec: "45.0", jan: "40.0", feb: "40.0", mar: "350.0", avg: "575.8" },
        ]
    },
    {
        srNo: "5", stationCode: "37", stationName: "Krishna river, Sangli", parameters: [
            { name: "pH", apr: "8.3", may: "7.9", jun: "7.8", jul: "7.7", aug: "6.9", sep: "7.8", oct: "7.7", nov: "8.2", dec: "7.7", jan: "7.9", feb: "8.2", mar: "7.3", avg: "7.8" },
            { name: "BOD", apr: "5.0", may: "2.2", jun: "2.4", jul: "1.0", aug: "1.6", sep: "2.4", oct: "1.8", nov: "2.2", dec: "4.8", jan: "2.4", feb: "3.0", mar: "2.0", avg: "2.6" },
            { name: "DO", apr: "6.4", may: "4.9", jun: "5.9", jul: "7.8", aug: "7.6", sep: "7.4", oct: "7.1", nov: "6.4", dec: "1.4", jan: "7.6", feb: "7.2", mar: "6.8", avg: "6.4" },
            { name: "Tot.Coliform", apr: "275.0", may: "250.0", jun: "480.0", jul: "140.0", aug: "110.0", sep: "130.0", oct: "110.0", nov: "580.0", dec: "1600.0", jan: "300.0", feb: "250.0", mar: "14.0", avg: "353.3" },
        ]
    }
];

function WaterQuality2005() {
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
                                WATER QUALITY FOR THE YEAR 2005-2006 UNDER GEMS MINARS PROJECT
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
                                                <th className="py-4 px-1 text-center text-xs font-bold text-gray-700 border-r border-gray-100 w-[50px]">Apr-05</th>
                                                <th className="py-4 px-1 text-center text-xs font-bold text-gray-700 border-r border-gray-100 w-[50px]">May-05</th>
                                                <th className="py-4 px-1 text-center text-xs font-bold text-gray-700 border-r border-gray-100 w-[50px]">Jun-05</th>
                                                <th className="py-4 px-1 text-center text-xs font-bold text-gray-700 border-r border-gray-100 w-[50px]">Jul-05</th>
                                                <th className="py-4 px-1 text-center text-xs font-bold text-gray-700 border-r border-gray-100 w-[50px]">Aug-05</th>
                                                <th className="py-4 px-1 text-center text-xs font-bold text-gray-700 border-r border-gray-100 w-[50px]">Sep-05</th>
                                                <th className="py-4 px-1 text-center text-xs font-bold text-gray-700 border-r border-gray-100 w-[50px]">Oct-05</th>
                                                <th className="py-4 px-1 text-center text-xs font-bold text-gray-700 border-r border-gray-100 w-[50px]">Nov-05</th>
                                                <th className="py-4 px-1 text-center text-xs font-bold text-gray-700 border-r border-gray-100 w-[50px]">Dec-05</th>
                                                <th className="py-4 px-1 text-center text-xs font-bold text-gray-700 border-r border-gray-100 w-[50px]">Jan-06</th>
                                                <th className="py-4 px-1 text-center text-xs font-bold text-gray-700 border-r border-gray-100 w-[50px]">Feb-06</th>
                                                <th className="py-4 px-1 text-center text-xs font-bold text-gray-700 border-r border-gray-100 w-[50px]">Mar-06</th>
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

export default WaterQuality2005;
