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
        srNo: "1", stationCode: "1092", stationName: "Kalu river, Atale village", regionalOffice: "Kalyan", monitoringFrequency: "Quarterly", parameters: [
            { name: "pH", apr: "7.3", may: "-", jun: "-", jul: "7.4", aug: "-", sep: "-", oct: "6.9", nov: "-", dec: "-", jan: "7.0", feb: "-", mar: "-", avg: "7.2" },
            { name: "BOD", apr: "3.2", may: "-", jun: "-", jul: "5.0", aug: "-", sep: "-", oct: "3.0", nov: "-", dec: "-", jan: "5.5", feb: "-", mar: "-", avg: "4.2" },
            { name: "DO", apr: "7.0", may: "-", jun: "-", jul: "7.0", aug: "-", sep: "-", oct: "7.2", nov: "-", dec: "-", jan: "5.0", feb: "-", mar: "-", avg: "6.6" },
            { name: "Tot.Coliform", apr: "350.0", may: "-", jun: "-", jul: "130.0", aug: "-", sep: "-", oct: "110.0", nov: "-", dec: "-", jan: "350.0", feb: "-", mar: "-", avg: "235.0" },
        ]
    },
    {
        srNo: "2", stationCode: "1093", stationName: "Ulhas river, U/s Mohane NRC, Bund", regionalOffice: "Kalyan", monitoringFrequency: "Monthly", parameters: [
            { name: "pH", apr: "7.0", may: "7.2", jun: "7.4", jul: "7.4", aug: "7.6", sep: "7.5", oct: "7.1", nov: "7.6", dec: "7.3", jan: "6.6", feb: "7.4", mar: "7.6", avg: "7.3" },
            { name: "BOD", apr: "5.6", may: "3.4", jun: "5.5", jul: "5.0", aug: "2.2", sep: "3.2", oct: "3.5", nov: "3.0", dec: "3.0", jan: "3.0", feb: "5.0", mar: "6.0", avg: "4.0" },
            { name: "DO", apr: "6.4", may: "7.0", jun: "5.0", jul: "6.9", aug: "6.9", sep: "7.1", oct: "6.6", nov: "7.7", dec: "7.5", jan: "6.9", feb: "5.0", mar: "5.5", avg: "6.5" },
            { name: "Tot.Coliform", apr: "120.0", may: "350.0", jun: "12.0", jul: "80.0", aug: "95.0", sep: "350.0", oct: "250.0", nov: "110.0", dec: "70.0", jan: "140.0", feb: "70.0", mar: "1600.0", avg: "271.0" },
        ]
    },
    {
        srNo: "3", stationCode: "1094", stationName: "Ulhas river, U/s Badlapur w/w", regionalOffice: "Kalyan", monitoringFrequency: "Monthly", parameters: [
            { name: "pH", apr: "7.3", may: "7.4", jun: "7.2", jul: "7.2", aug: "7.5", sep: "7.5", oct: "7.0", nov: "7.5", dec: "7.6", jan: "7.5", feb: "7.3", mar: "7.5", avg: "7.4" },
            { name: "BOD", apr: "3.2", may: "3.4", jun: "5.0", jul: "4.5", aug: "2.8", sep: "3.0", oct: "3.0", nov: "3.5", dec: "3.5", jan: "3.5", feb: "5.0", mar: "5.0", avg: "3.8" },
            { name: "DO", apr: "6.4", may: "7.0", jun: "5.5", jul: "7.0", aug: "6.8", sep: "7.0", oct: "6.8", nov: "7.5", dec: "7.4", jan: "6.7", feb: "6.3", mar: "6.9", avg: "6.8" },
            { name: "Tot.Coliform", apr: "17.0", may: "250.0", jun: "25.0", jul: "175.0", aug: "110.0", sep: "170.0", oct: "25.0", nov: "140.0", dec: "20.0", jan: "225.0", feb: "80.0", mar: "425.0", avg: "139.0" },
        ]
    },
    {
        srNo: "4", stationCode: "1095", stationName: "Godavari river, U/s Gangapur Dam", regionalOffice: "Nashik", monitoringFrequency: "Monthly", parameters: [
            { name: "pH", apr: "7.3", may: "8.1", jun: "8.6", jul: "7.8", aug: "7.2", sep: "7.9", oct: "7.9", nov: "7.9", dec: "7.0", jan: "7.9", feb: "7.5", mar: "7.4", avg: "7.7" },
            { name: "BOD", apr: "5.0", may: "22.0", jun: "20.0", jul: "5.0", aug: "5.5", sep: "6.5", oct: "5.0", nov: "8.5", dec: "8.0", jan: "5.0", feb: "5.8", mar: "5.0", avg: "8.4" },
            { name: "DO", apr: "7.1", may: "5.7", jun: "6.6", jul: "7.3", aug: "7.9", sep: "7.1", oct: "4.6", nov: "7.2", dec: "6.9", jan: "7.0", feb: "6.7", mar: "6.8", avg: "6.7" },
            { name: "Tot.Coliform", apr: "9.0", may: "14.0", jun: "6.0", jul: "25.0", aug: "17.0", sep: "25.0", oct: "25.0", nov: "16.0", dec: "25.0", jan: "25.0", feb: "25.0", mar: "35.0", avg: "20.6" },
        ]
    },
    {
        srNo: "5", stationCode: "1096", stationName: "Godavari river, Ramkund", regionalOffice: "Nashik", monitoringFrequency: "Monthly", parameters: [
            { name: "pH", apr: "6.7", may: "8.1", jun: "7.4", jul: "7.6", aug: "7.5", sep: "7.8", oct: "7.2", nov: "7.4", dec: "7.1", jan: "5.9", feb: "7.5", mar: "7.2", avg: "7.3" },
            { name: "BOD", apr: "14.0", may: "24.0", jun: "32.0", jul: "4.0", aug: "8.0", sep: "13.0", oct: "10.0", nov: "7.8", dec: "8.6", jan: "7.0", feb: "6.2", mar: "6.3", avg: "11.7" },
            { name: "DO", apr: "5.5", may: "3.4", jun: "3.5", jul: "6.8", aug: "8.1", sep: "6.7", oct: "5.4", nov: "5.7", dec: "6.8", jan: "6.3", feb: "6.4", mar: "5.9", avg: "5.9" },
            { name: "Tot.Coliform", apr: "1600.0", may: "110.0", jun: "250.0", jul: "25.0", aug: "65.0", sep: "35.0", oct: "55.0", nov: "17.0", dec: "1800.0", jan: "1800.0", feb: "1600.0", mar: "900.0", avg: "688.0" },
        ]
    },
    {
        srNo: "6", stationCode: "1151", stationName: "Patalganga, Shilphata Bridge", regionalOffice: "Raigad", monitoringFrequency: "Monthly", parameters: [
            { name: "pH", apr: "6.8", may: "7.1", jun: "7.4", jul: "7.3", aug: "7.5", sep: "7.5", oct: "6.8", nov: "7.3", dec: "6.7", jan: "7.1", feb: "7.5", mar: "6.7", avg: "7.1" },
            { name: "BOD", apr: "4.0", may: "3.8", jun: "8.0", jul: "6.5", aug: "3.0", sep: "2.8", oct: "3.5", nov: "3.5", dec: "3.0", jan: "3.5", feb: "4.0", mar: "4.5", avg: "4.2" },
            { name: "DO", apr: "5.9", may: "6.3", jun: "5.1", jul: "6.3", aug: "6.7", sep: "7.2", oct: "7.5", nov: "7.1", dec: "7.5", jan: "7.2", feb: "5.8", mar: "6.9", avg: "6.6" },
            { name: "Tot.Coliform", apr: "425.0", may: "275.0", jun: "350.0", jul: "95.0", aug: "80.0", sep: "225.0", oct: "130.0", nov: "200.0", dec: "130.0", jan: "350.0", feb: "350.0", mar: "550.0", avg: "263.0" },
        ]
    },
    {
        srNo: "7", stationCode: "1152", stationName: "Kundalika river, Roha Bridge", regionalOffice: "Raigad", monitoringFrequency: "Quarterly", parameters: [
            { name: "pH", apr: "7.6", may: "-", jun: "-", jul: "7.4", aug: "-", sep: "-", oct: "7.2", nov: "-", dec: "-", jan: "8.1", feb: "-", mar: "-", avg: "7.6" },
            { name: "BOD", apr: "4.4", may: "-", jun: "-", jul: "6.0", aug: "-", sep: "-", oct: "3.5", nov: "-", dec: "-", jan: "3.5", feb: "-", mar: "-", avg: "4.4" },
            { name: "DO", apr: "6.7", may: "-", jun: "-", jul: "6.4", aug: "-", sep: "-", oct: "7.1", nov: "-", dec: "-", jan: "7.3", feb: "-", mar: "-", avg: "6.9" },
            { name: "Tot.Coliform", apr: "550.0", may: "-", jun: "-", jul: "140.0", aug: "-", sep: "-", oct: "60.0", nov: "-", dec: "-", jan: "550.0", feb: "-", mar: "-", avg: "325.0" },
        ]
    },
    {
        srNo: "8", stationCode: "1153", stationName: "Krishna river, Rajapur weir", regionalOffice: "Kolhapur", monitoringFrequency: "Monthly", parameters: [
            { name: "pH", apr: "8.2", may: "7.5", jun: "8.1", jul: "6.3", aug: "6.9", sep: "7.7", oct: "7.3", nov: "7.0", dec: "6.9", jan: "7.4", feb: "6.7", mar: "6.8", avg: "7.2" },
            { name: "BOD", apr: "4.2", may: "2.0", jun: "1.6", jul: "2.0", aug: "1.8", sep: "1.2", oct: "1.6", nov: "1.6", dec: "1.8", jan: "2.6", feb: "4.4", mar: "3.2", avg: "2.3" },
            { name: "DO", apr: "3.0", may: "4.0", jun: "5.9", jul: "6.1", aug: "6.0", sep: "7.0", oct: "6.2", nov: "6.7", dec: "6.1", jan: "6.5", feb: "6.5", mar: "5.8", avg: "5.8" },
            { name: "Tot.Coliform", apr: "17.0", may: "70.0", jun: "50.0", jul: "280.0", aug: "220.0", sep: "350.0", oct: "170.0", nov: "90.0", dec: "23.0", jan: "17.0", feb: "9.0", mar: "60.0", avg: "113.0" },
        ]
    },
    {
        srNo: "9", stationCode: "1188", stationName: "Bhima river, Narsingpur", regionalOffice: "Pune", monitoringFrequency: "Monthly", parameters: [
            { name: "pH", apr: "7.3", may: "7.4", jun: "7.9", jul: "7.4", aug: "7.3", sep: "7.4", oct: "7.3", nov: "7.2", dec: "7.2", jan: "7.3", feb: "8.1", mar: "8.3", avg: "7.5" },
            { name: "BOD", apr: "12.2", may: "18.6", jun: "8.0", jul: "6.0", aug: "5.5", sep: "7.0", oct: "5.4", nov: "7.8", dec: "6.6", jan: "4.8", feb: "7.6", mar: "3.4", avg: "7.7" },
            { name: "DO", apr: "4.4", may: "4.9", jun: "6.3", jul: "6.6", aug: "7.0", sep: "6.2", oct: "6.0", nov: "5.1", dec: "5.5", jan: "5.3", feb: "4.9", mar: "6.0", avg: "5.7" },
            { name: "Tot.Coliform", apr: "550.0", may: "275.0", jun: "350.0", jul: "120.0", aug: "95.0", sep: "140.0", oct: "170.0", nov: "172.0", dec: "95.0", jan: "80.0", feb: "140.0", mar: "350.0", avg: "211.0" },
        ]
    },
    {
        srNo: "10", stationCode: "1189", stationName: "Bhima river, Pune D/s of vithalwadi", regionalOffice: "Pune", monitoringFrequency: "Quarterly", parameters: [
            { name: "pH", apr: "7.5", may: "-", jun: "-", jul: "7.2", aug: "-", sep: "-", oct: "7.3", nov: "-", dec: "-", jan: "7.4", feb: "-", mar: "-", avg: "7.4" },
            { name: "BOD", apr: "9.6", may: "-", jun: "-", jul: "9.5", aug: "-", sep: "-", oct: "10.4", nov: "-", dec: "-", jan: "9.8", feb: "-", mar: "-", avg: "9.8" },
            { name: "DO", apr: "4.5", may: "-", jun: "-", jul: "4.3", aug: "-", sep: "-", oct: "2.9", nov: "-", dec: "-", jan: "3.0", feb: "-", mar: "-", avg: "3.7" },
            { name: "Tot.Coliform", apr: "550.0", may: "-", jun: "-", jul: "95.0", aug: "-", sep: "-", oct: "130.0", nov: "-", dec: "-", jan: "95.0", feb: "-", mar: "-", avg: "218.0" },
        ]
    },
    {
        srNo: "11", stationCode: "1190", stationName: "Bhima river, D/s of Bandgarden", regionalOffice: "Pune", monitoringFrequency: "Quarterly", parameters: [
            { name: "pH", apr: "7.3", may: "-", jun: "-", jul: "7.3", aug: "-", sep: "-", oct: "7.2", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "7.3" },
            { name: "BOD", apr: "38.2", may: "-", jun: "-", jul: "12.5", aug: "-", sep: "-", oct: "11.0", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "20.6" },
            { name: "DO", apr: "0.7", may: "-", jun: "-", jul: "3.6", aug: "-", sep: "-", oct: "2.1", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "2.1" },
            { name: "Tot.Coliform", apr: "900.0", may: "-", jun: "-", jul: "80.0", aug: "-", sep: "-", oct: "255.0", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "411.7" },
        ]
    },
    {
        srNo: "12", stationCode: "1191", stationName: "Bhima river, Pargaon", regionalOffice: "Pune", monitoringFrequency: "Quarterly", parameters: [
            { name: "pH", apr: "7.2", may: "-", jun: "-", jul: "7.5", aug: "-", sep: "-", oct: "7.3", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "7.3" },
            { name: "BOD", apr: "15.2", may: "-", jun: "-", jul: "9.0", aug: "-", sep: "-", oct: "10.8", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "11.7" },
            { name: "DO", apr: "4.9", may: "-", jun: "-", jul: "4.3", aug: "-", sep: "-", oct: "2.8", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "4.0" },
            { name: "Tot.Coliform", apr: "225.0", may: "-", jun: "-", jul: "35.0", aug: "-", sep: "-", oct: "175.0", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "145.0" },
        ]
    },
    {
        srNo: "13", stationCode: "1192", stationName: "Bhima river, Daund", regionalOffice: "Pune", monitoringFrequency: "Quarterly", parameters: [
            { name: "pH", apr: "7.2", may: "-", jun: "-", jul: "7.3", aug: "-", sep: "-", oct: "7.3", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "7.3" },
            { name: "BOD", apr: "14.5", may: "-", jun: "-", jul: "7.0", aug: "-", sep: "-", oct: "9.4", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "10.3" },
            { name: "DO", apr: "4.7", may: "-", jun: "-", jul: "5.2", aug: "-", sep: "-", oct: "3.6", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "4.5" },
            { name: "Tot.Coliform", apr: "900.0", may: "-", jun: "-", jul: "250.0", aug: "-", sep: "-", oct: "250.0", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "466.7" },
        ]
    },
    {
        srNo: "14", stationCode: "1194", stationName: "Krishna river, Dhom Dam", regionalOffice: "Pune", monitoringFrequency: "Monthly", parameters: [
            { name: "pH", apr: "7.3", may: "7.2", jun: "7.8", jul: "7.3", aug: "7.4", sep: "7.1", oct: "7.1", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "7.3" },
            { name: "BOD", apr: "8.2", may: "7.8", jun: "6.0", jul: "6.5", aug: "6.5", sep: "6.5", oct: "6.2", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "6.8" },
            { name: "DO", apr: "6.7", may: "6.9", jun: "5.9", jul: "6.3", aug: "6.7", sep: "6.5", oct: "6.4", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "6.5" },
            { name: "Tot.Coliform", apr: "350.0", may: "130.0", jun: "175.0", jul: "70.0", aug: "175.0", sep: "170.0", oct: "130.0", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "171.4" },
        ]
    },
    {
        srNo: "15", stationCode: "1209", stationName: "Godavari river, Raher", regionalOffice: "Aurangabad", monitoringFrequency: "Monthly", parameters: [
            { name: "pH", apr: "8.1", may: "7.3", jun: "8.3", jul: "7.0", aug: "7.5", sep: "8.0", oct: "8.2", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "7.8" },
            { name: "BOD", apr: "4.3", may: "4.4", jun: "7.8", jul: "4.5", aug: "4.0", sep: "3.0", oct: "4.0", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "4.6" },
            { name: "DO", apr: "6.5", may: "6.0", jun: "4.4", jul: "5.0", aug: "6.7", sep: "6.9", oct: "7.6", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "6.2" },
            { name: "Tot.Coliform", apr: "175.0", may: "210.0", jun: "900.0", jul: "350.0", aug: "170.0", sep: "220.0", oct: "220.0", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "320.7" },
        ]
    },
    {
        srNo: "16", stationCode: "1210", stationName: "Godavari river, Nanded", regionalOffice: "Aurangabad", monitoringFrequency: "Monthly", parameters: [
            { name: "pH", apr: "8.2", may: "7.5", jun: "7.6", jul: "7.7", aug: "7.2", sep: "8.0", oct: "7.8", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "7.7" },
            { name: "BOD", apr: "5.2", may: "2.4", jun: "6.4", jul: "4.2", aug: "6.0", sep: "3.1", oct: "4.2", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "4.5" },
            { name: "DO", apr: "6.2", may: "6.4", jun: "4.7", jul: "5.3", aug: "4.4", sep: "6.9", oct: "6.8", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "5.8" },
            { name: "Tot.Coliform", apr: "200.0", may: "280.0", jun: "350.0", jul: "500.0", aug: "220.0", sep: "350.0", oct: "130.0", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "290.0" },
        ]
    },
    {
        srNo: "17", stationCode: "1211", stationName: "Godavari river, D/s of Nashik", regionalOffice: "Nashik", monitoringFrequency: "Monthly", parameters: [
            { name: "pH", apr: "-", may: "8.2", jun: "7.1", jul: "7.5", aug: "7.6", sep: "7.4", oct: "7.5", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "7.6" },
            { name: "BOD", apr: "-", may: "20.0", jun: "32.0", jul: "4.0", aug: "10.0", sep: "10.5", oct: "9.0", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "14.3" },
            { name: "DO", apr: "-", may: "3.7", jun: "2.5", jul: "6.4", aug: "7.6", sep: "6.3", oct: "4.8", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "5.2" },
            { name: "Tot.Coliform", apr: "-", may: "25.0", jun: "50.0", jul: "45.0", aug: "115.0", sep: "45.0", oct: "85.0", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "60.8" },
        ]
    },
    {
        srNo: "18", stationCode: "1212", stationName: "Wardha river, Rajura Bridge", regionalOffice: "Nagpur", monitoringFrequency: "Quarterly", parameters: [
            { name: "pH", apr: "8.4", may: "-", jun: "-", jul: "7.6", aug: "-", sep: "-", oct: "8.3", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "8.1" },
            { name: "BOD", apr: "4.5", may: "-", jun: "-", jul: "5.0", aug: "-", sep: "-", oct: "6.0", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "5.2" },
            { name: "DO", apr: "5.4", may: "-", jun: "-", jul: "5.9", aug: "-", sep: "-", oct: "5.8", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "5.7" },
            { name: "Tot.Coliform", apr: "300.0", may: "-", jun: "-", jul: "34.0", aug: "-", sep: "-", oct: "80.0", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "138.0" },
        ]
    },
    {
        srNo: "19", stationCode: "1251", stationName: "Tapi river, Bhusaval", regionalOffice: "Nashik", monitoringFrequency: "Monthly", parameters: [
            { name: "pH", apr: "8.6", may: "9.3", jun: "9.1", jul: "7.8", aug: "7.9", sep: "7.2", oct: "8.2", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "8.3" },
            { name: "BOD", apr: "18.0", may: "20.0", jun: "16.0", jul: "5.0", aug: "8.0", sep: "11.5", oct: "9.0", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "12.5" },
            { name: "DO", apr: "6.0", may: "4.6", jun: "6.3", jul: "7.8", aug: "7.8", sep: "6.0", oct: "4.7", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "6.2" },
            { name: "Tot.Coliform", apr: "45.0", may: "14.0", jun: "35.0", jul: "30.0", aug: "55.0", sep: "55.0", oct: "25.0", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "37.0" },
        ]
    },
    {
        srNo: "20", stationCode: "1252", stationName: "Girna river, Jalgaon", regionalOffice: "Nashik", monitoringFrequency: "Quarterly", parameters: [
            { name: "pH", apr: "8.6", may: "-", jun: "-", jul: "7.8", aug: "-", sep: "-", oct: "8.4", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "8.3" },
            { name: "BOD", apr: "16.0", may: "-", jun: "-", jul: "6.0", aug: "-", sep: "-", oct: "6.0", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "9.3" },
            { name: "DO", apr: "6.0", may: "-", jun: "-", jul: "7.5", aug: "-", sep: "-", oct: "5.6", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "6.4" },
            { name: "Tot.Coliform", apr: "40.0", may: "-", jun: "-", jul: "7.0", aug: "-", sep: "-", oct: "17.0", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "21.3" },
        ]
    },
    {
        srNo: "21", stationCode: "1253", stationName: "Girna river, Malegaon", regionalOffice: "Nashik", monitoringFrequency: "Quarterly", parameters: [
            { name: "pH", apr: "7.5", may: "-", jun: "-", jul: "7.6", aug: "-", sep: "-", oct: "7.9", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "7.7" },
            { name: "BOD", apr: "4.0", may: "-", jun: "-", jul: "6.0", aug: "-", sep: "-", oct: "7.0", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "5.7" },
            { name: "DO", apr: "7.0", may: "-", jun: "-", jul: "4.6", aug: "-", sep: "-", oct: "5.1", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "5.6" },
            { name: "Tot.Coliform", apr: "5.0", may: "-", jun: "-", jul: "45.0", aug: "-", sep: "-", oct: "55.0", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "35.0" },
        ]
    },
    {
        srNo: "22", stationCode: "1310", stationName: "Krishna river, Kurundwad", regionalOffice: "Kolhapur", monitoringFrequency: "Monthly", parameters: [
            { name: "pH", apr: "8.2", may: "7.4", jun: "7.8", jul: "6.4", aug: "7.4", sep: "8.0", oct: "7.3", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "7.5" },
            { name: "BOD", apr: "2.2", may: "1.8", jun: "2.4", jul: "2.4", aug: "1.4", sep: "1.8", oct: "1.8", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "2.0" },
            { name: "DO", apr: "6.2", may: "5.4", jun: "5.6", jul: "6.0", aug: "6.5", sep: "6.1", oct: "6.1", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "6.0" },
            { name: "Tot.Coliform", apr: "70.0", may: "170.0", jun: "30.0", jul: "350.0", aug: "170.0", sep: "1600.0", oct: "350.0", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "391.4" },
        ]
    },
    {
        srNo: "23", stationCode: "1311", stationName: "Panchganga river, Ichalkaranji", regionalOffice: "Kolhapur", monitoringFrequency: "Quarterly", parameters: [
            { name: "pH", apr: "8.3", may: "-", jun: "-", jul: "6.4", aug: "-", sep: "-", oct: "6.9", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "7.2" },
            { name: "BOD", apr: "3.4", may: "-", jun: "-", jul: "2.0", aug: "-", sep: "-", oct: "1.4", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "2.3" },
            { name: "DO", apr: "5.2", may: "-", jun: "-", jul: "6.8", aug: "-", sep: "-", oct: "6.4", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "6.1" },
            { name: "Tot.Coliform", apr: "1600.0", may: "-", jun: "-", jul: "220.0", aug: "-", sep: "-", oct: "280.0", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "700.0" },
        ]
    },
    {
        srNo: "24", stationCode: "1312", stationName: "Godavari river, Jaikwadi", regionalOffice: "Aurangabad", monitoringFrequency: "Monthly", parameters: [
            { name: "pH", apr: "7.9", may: "7.4", jun: "8.4", jul: "8.2", aug: "7.6", sep: "8.1", oct: "7.9", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "7.9" },
            { name: "BOD", apr: "3.2", may: "3.6", jun: "3.6", jul: "3.5", aug: "3.8", sep: "4.9", oct: "4.2", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "3.8" },
            { name: "DO", apr: "6.4", may: "6.9", jun: "6.7", jul: "6.4", aug: "7.2", sep: "6.7", oct: "7.6", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "6.8" },
            { name: "Tot.Coliform", apr: "140.0", may: "200.0", jun: "500.0", jul: "280.0", aug: "170.0", sep: "110.0", oct: "240.0", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "234.3" },
        ]
    },
    {
        srNo: "25", stationCode: "1313", stationName: "Tapi river, Ajanad Village", regionalOffice: "Nashik", monitoringFrequency: "Monthly", parameters: [
            { name: "pH", apr: "8.7", may: "9.2", jun: "9.2", jul: "7.8", aug: "7.9", sep: "7.8", oct: "8.3", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "8.4" },
            { name: "BOD", apr: "14.0", may: "14.0", jun: "22.0", jul: "5.0", aug: "7.5", sep: "11.5", oct: "11.0", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "12.1" },
            { name: "DO", apr: "6.6", may: "5.4", jun: "4.9", jul: "7.4", aug: "10.0", sep: "9.5", oct: "6.4", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "7.2" },
            { name: "Tot.Coliform", apr: "300.0", may: "25.0", jun: "55.0", jul: "30.0", aug: "45.0", sep: "45.0", oct: "45.0", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "77.9" },
        ]
    },
    {
        srNo: "26", stationCode: "1314", stationName: "Tapi river, Ubad village", regionalOffice: "Nashik", monitoringFrequency: "Monthly", parameters: [
            { name: "pH", apr: "8.6", may: "9.1", jun: "9.2", jul: "7.8", aug: "7.9", sep: "7.5", oct: "8.3", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "8.3" },
            { name: "BOD", apr: "12.0", may: "18.0", jun: "24.0", jul: "6.0", aug: "11.0", sep: "12.0", oct: "10.0", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "13.3" },
            { name: "DO", apr: "6.7", may: "4.7", jun: "5.0", jul: "7.9", aug: "7.1", sep: "2.6", oct: "5.5", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "5.6" },
            { name: "Tot.Coliform", apr: "11.0", may: "20.0", jun: "40.0", jul: "5.0", aug: "35.0", sep: "25.0", oct: "25.0", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "23.0" },
        ]
    },
    {
        srNo: "27", stationCode: "1315", stationName: "Wardha river, Pulgaon", regionalOffice: "Nagpur", monitoringFrequency: "Monthly", parameters: [
            { name: "pH", apr: "8.1", may: "8.6", jun: "7.9", jul: "7.6", aug: "7.4", sep: "8.6", oct: "7.9", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "8.0" },
            { name: "BOD", apr: "5.0", may: "15.0", jun: "8.0", jul: "9.0", aug: "8.5", sep: "7.5", oct: "8.0", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "8.7" },
            { name: "DO", apr: "5.7", may: "4.8", jun: "5.1", jul: "5.0", aug: "5.3", sep: "5.4", oct: "5.3", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "5.2" },
            { name: "Tot.Coliform", apr: "1600.0", may: "500.0", jun: "900.0", jul: "130.0", aug: "140.0", sep: "280.0", oct: "170.0", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "531.4" },
        ]
    },
    {
        srNo: "28", stationCode: "1316", stationName: "Basin creek, Dist-Thane", regionalOffice: "Thane", monitoringFrequency: "Quarterly", parameters: [
            { name: "pH", apr: "7.2", may: "-", jun: "-", jul: "7.2", aug: "-", sep: "-", oct: "7.4", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "7.3" },
            { name: "BOD", apr: "6.0", may: "-", jun: "-", jul: "6.0", aug: "-", sep: "-", oct: "10.0", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "7.3" },
            { name: "DO", apr: "5.2", may: "-", jun: "-", jul: "6.2", aug: "-", sep: "-", oct: "4.8", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "5.4" },
            { name: "Tot.Coliform", apr: "550.0", may: "-", jun: "-", jul: "110.0", aug: "-", sep: "-", oct: "115.0", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "258.3" },
        ]
    },
    {
        srNo: "29", stationCode: "1317", stationName: "Thane Creek, Elephanta Island", regionalOffice: "Mumbai", monitoringFrequency: "Quarterly", parameters: [
            { name: "pH", apr: "7.8", may: "-", jun: "-", jul: "7.3", aug: "-", sep: "-", oct: "7.1", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "7.4" },
            { name: "BOD", apr: "9.5", may: "-", jun: "-", jul: "12.0", aug: "-", sep: "-", oct: "14.0", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "11.8" },
            { name: "DO", apr: "4.0", may: "-", jun: "-", jul: "4.8", aug: "-", sep: "-", oct: "5.7", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "4.8" },
            { name: "Tot.Coliform", apr: "175.0", may: "-", jun: "-", jul: "130.0", aug: "-", sep: "-", oct: "110.0", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "138.3" },
        ]
    },
    {
        srNo: "30", stationCode: "1318", stationName: "Mahim Creek, Mahim Bay", regionalOffice: "Mumbai", monitoringFrequency: "Quarterly", parameters: [
            { name: "pH", apr: "7.8", may: "-", jun: "-", jul: "7.5", aug: "-", sep: "-", oct: "7.2", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "7.5" },
            { name: "BOD", apr: "9.5", may: "-", jun: "-", jul: "14.0", aug: "-", sep: "-", oct: "19.0", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "14.2" },
            { name: "DO", apr: "4.0", may: "-", jun: "-", jul: "3.7", aug: "-", sep: "-", oct: "2.9", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "3.5" },
            { name: "Tot.Coliform", apr: "175.0", may: "-", jun: "-", jul: "225.0", aug: "-", sep: "-", oct: "350.0", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "250.0" },
        ]
    },
    {
        srNo: "31", stationCode: "1461", stationName: "Bhatsa river, D/s of Pise Dam", regionalOffice: "Kalyan", monitoringFrequency: "Quarterly", parameters: [
            { name: "pH", apr: "8.0", may: "-", jun: "-", jul: "7.3", aug: "-", sep: "-", oct: "6.9", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "7.4" },
            { name: "BOD", apr: "3.4", may: "-", jun: "-", jul: "5.5", aug: "-", sep: "-", oct: "3.0", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "4.0" },
            { name: "DO", apr: "7.1", may: "-", jun: "-", jul: "7.2", aug: "-", sep: "-", oct: "6.9", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "7.1" },
            { name: "Tot.Coliform", apr: "250.0", may: "-", jun: "-", jul: "95.0", aug: "-", sep: "-", oct: "350.0", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "231.7" },
        ]
    },
    {
        srNo: "32", stationCode: "1462", stationName: "Patalganga river- MIDC w/w", regionalOffice: "Raigad", monitoringFrequency: "Monthly", parameters: [
            { name: "pH", apr: "8.1", may: "8.1", jun: "7.3", jul: "7.3", aug: "7.8", sep: "7.0", oct: "6.9", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "7.5" },
            { name: "BOD", apr: "4.0", may: "3.4", jun: "4.0", jul: "5.5", aug: "2.4", sep: "3.0", oct: "3.0", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "3.6" },
            { name: "DO", apr: "5.8", may: "6.5", jun: "6.0", jul: "6.9", aug: "6.8", sep: "7.1", oct: "6.8", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "6.6" },
            { name: "Tot.Coliform", apr: "25.0", may: "175.0", jun: "275.0", jul: "70.0", aug: "95.0", sep: "95.0", oct: "115.0", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "121.4" },
        ]
    },
    {
        srNo: "33", stationCode: "1463", stationName: "Nira river, Sarola Bridge", regionalOffice: "Pune", monitoringFrequency: "Monthly", parameters: [
            { name: "pH", apr: "7.7", may: "7.2", jun: "7.9", jul: "7.5", aug: "7.6", sep: "7.1", oct: "7.1", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "7.4" },
            { name: "BOD", apr: "9.9", may: "8.8", jun: "9.5", jul: "10.0", aug: "6.5", sep: "6.0", oct: "7.2", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "8.3" },
            { name: "DO", apr: "6.7", may: "6.8", jun: "4.4", jul: "4.0", aug: "6.6", sep: "7.2", oct: "5.8", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "5.9" },
            { name: "Tot.Coliform", apr: "225.0", may: "35.0", jun: "70.0", jul: "225.0", aug: "80.0", sep: "175.0", oct: "350.0", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "165.7" },
        ]
    },
    {
        srNo: "34", stationCode: "1904", stationName: "Panchaganga River, U/S of Kolhapur", regionalOffice: "Kolhapur", monitoringFrequency: "Monthly", parameters: [
            { name: "pH", apr: "8.3", may: "7.4", jun: "7.9", jul: "6.4", aug: "7.9", sep: "8.0", oct: "7.6", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "7.6" },
            { name: "BOD", apr: "1.4", may: "2.4", jun: "2.6", jul: "2.2", aug: "1.8", sep: "1.4", oct: "1.4", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "1.9" },
            { name: "DO", apr: "7.5", may: "3.4", jun: "6.1", jul: "6.6", aug: "6.8", sep: "6.8", oct: "6.8", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "6.3" },
            { name: "Tot.Coliform", apr: "300.0", may: "350.0", jun: "220.0", jul: "350.0", aug: "220.0", sep: "500.0", oct: "280.0", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "317.1" },
        ]
    },
    {
        srNo: "35", stationCode: "1905", stationName: "Panchaganga River, D/S of Kolhapur", regionalOffice: "Kolhapur", monitoringFrequency: "Monthly", parameters: [
            { name: "pH", apr: "8.0", may: "7.3", jun: "7.9", jul: "6.4", aug: "7.1", sep: "8.0", oct: "7.5", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "7.5" },
            { name: "BOD", apr: "10.0", may: "3.0", jun: "3.6", jul: "2.2", aug: "2.0", sep: "1.8", oct: "1.6", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "3.5" },
            { name: "DO", apr: "1.4", may: "2.8", jun: "5.2", jul: "6.5", aug: "6.6", sep: "6.7", oct: "6.2", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "5.1" },
            { name: "Tot.Coliform", apr: "1600.0", may: "1600.0", jun: "280.0", jul: "220.0", aug: "280.0", sep: "280.0", oct: "350.0", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "658.6" },
        ]
    },
    {
        srNo: "36", stationCode: "1906", stationName: "Krishna river, D/S of Islampur", regionalOffice: "Kolhapur", monitoringFrequency: "Monthly", parameters: [
            { name: "pH", apr: "8.2", may: "7.7", jun: "7.4", jul: "7.2", aug: "7.0", sep: "7.8", oct: "7.2", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "7.5" },
            { name: "BOD", apr: "2.2", may: "2.0", jun: "2.8", jul: "2.4", aug: "1.2", sep: "1.2", oct: "1.6", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "1.9" },
            { name: "DO", apr: "7.0", may: "6.0", jun: "4.7", jul: "6.3", aug: "7.2", sep: "7.0", oct: "6.5", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "6.4" },
            { name: "Tot.Coliform", apr: "110.0", may: "280.0", jun: "140.0", jul: "17.0", aug: "130.0", sep: "13.0", oct: "170.0", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "122.9" },
        ]
    },
    {
        srNo: "37", stationCode: "1907", stationName: "Rangavali River, D/s of Navapur", regionalOffice: "Nashik", monitoringFrequency: "Quarterly", parameters: [
            { name: "pH", apr: "8.6", may: "-", jun: "-", jul: "7.9", aug: "-", sep: "-", oct: "8.2", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "8.2" },
            { name: "BOD", apr: "15.0", may: "-", jun: "-", jul: "4.0", aug: "-", sep: "-", oct: "6.0", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "8.3" },
            { name: "DO", apr: "6.5", may: "-", jun: "-", jul: "8.0", aug: "-", sep: "-", oct: "5.3", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "6.6" },
            { name: "Tot.Coliform", apr: "50.0", may: "-", jun: "-", jul: "17.0", aug: "-", sep: "-", oct: "30.0", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "32.3" },
        ]
    },
    {
        srNo: "38", stationCode: "1908", stationName: "Kolar River, Kampthee Bridge", regionalOffice: "Nagpur", monitoringFrequency: "Quarterly", parameters: [
            { name: "pH", apr: "8.5", may: "-", jun: "-", jul: "7.6", aug: "-", sep: "-", oct: "8.2", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "8.1" },
            { name: "BOD", apr: "6.5", may: "-", jun: "-", jul: "6.5", aug: "-", sep: "-", oct: "7.0", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "6.7" },
            { name: "DO", apr: "5.5", may: "-", jun: "-", jul: "5.6", aug: "-", sep: "-", oct: "5.5", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "5.5" },
            { name: "Tot.Coliform", apr: "900.0", may: "-", jun: "-", jul: "17.0", aug: "-", sep: "-", oct: "130.0", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "349.0" },
        ]
    },
    {
        srNo: "39", stationCode: "1909", stationName: "Kanhan River, Agargaon D/s. of Nagpur", regionalOffice: "Nagpur", monitoringFrequency: "Quarterly", parameters: [
            { name: "pH", apr: "8.6", may: "-", jun: "-", jul: "7.2", aug: "-", sep: "-", oct: "7.5", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "7.8" },
            { name: "BOD", apr: "9.5", may: "-", jun: "-", jul: "18.0", aug: "-", sep: "-", oct: "13.0", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "13.5" },
            { name: "DO", apr: "4.8", may: "-", jun: "-", jul: "4.5", aug: "-", sep: "-", oct: "4.7", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "4.7" },
            { name: "Tot.Coliform", apr: "500.0", may: "-", jun: "-", jul: "350.0", aug: "-", sep: "-", oct: "350.0", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "400.0" },
        ]
    },
    {
        srNo: "40", stationCode: "1910", stationName: "Wainganga River, After confluence with Kanhan", regionalOffice: "Nagpur", monitoringFrequency: "Quarterly", parameters: [
            { name: "pH", apr: "8.6", may: "-", jun: "-", jul: "7.6", aug: "-", sep: "-", oct: "7.8", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "8.0" },
            { name: "BOD", apr: "9.0", may: "-", jun: "-", jul: "17.0", aug: "-", sep: "-", oct: "9.0", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "11.7" },
            { name: "DO", apr: "4.9", may: "-", jun: "-", jul: "4.7", aug: "-", sep: "-", oct: "5.1", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "4.9" },
            { name: "Tot.Coliform", apr: "900.0", may: "-", jun: "-", jul: "540.0", aug: "-", sep: "-", oct: "170.0", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "536.7" },
        ]
    },
    {
        srNo: "41", stationCode: "1911", stationName: "Chandrabhaga (Bhima) U/s. of Pandarpur Town", regionalOffice: "Pune", monitoringFrequency: "Quarterly", parameters: [
            { name: "pH", apr: "7.2", may: "-", jun: "-", jul: "7.8", aug: "-", sep: "-", oct: "7.2", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "7.4" },
            { name: "BOD", apr: "14.2", may: "-", jun: "-", jul: "7.0", aug: "-", sep: "-", oct: "6.6", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "9.3" },
            { name: "DO", apr: "4.2", may: "-", jun: "-", jul: "6.5", aug: "-", sep: "-", oct: "6.4", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "5.7" },
            { name: "Tot.Coliform", apr: "900.0", may: "-", jun: "-", jul: "95.0", aug: "-", sep: "-", oct: "250.0", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "415.0" },
        ]
    },
    {
        srNo: "42", stationCode: "1912", stationName: "Chandrabhaga (Bhima) D/s. Of Pandarpur Town", regionalOffice: "Pune", monitoringFrequency: "Quarterly", parameters: [
            { name: "pH", apr: "7.5", may: "-", jun: "-", jul: "7.7", aug: "-", sep: "-", oct: "7.1", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "7.4" },
            { name: "BOD", apr: "16.8", may: "-", jun: "-", jul: "6.0", aug: "-", sep: "-", oct: "6.5", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "9.8" },
            { name: "DO", apr: "4.7", may: "-", jun: "-", jul: "7.1", aug: "-", sep: "-", oct: "6.2", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "6.0" },
            { name: "Tot.Coliform", apr: "1800.0", may: "-", jun: "-", jul: "80.0", aug: "-", sep: "-", oct: "275.0", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "718.3" },
        ]
    },
    {
        srNo: "43", stationCode: "1913", stationName: "Purna River, Dhupeshwar w/w", regionalOffice: "Nagpur", monitoringFrequency: "Quarterly", parameters: [
            { name: "pH", apr: "8.4", may: "-", jun: "-", jul: "7.9", aug: "-", sep: "-", oct: "8.2", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "8.2" },
            { name: "BOD", apr: "5.0", may: "-", jun: "-", jul: "8.0", aug: "-", sep: "-", oct: "8.0", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "7.0" },
            { name: "DO", apr: "6.3", may: "-", jun: "-", jul: "5.2", aug: "-", sep: "-", oct: "5.3", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "5.6" },
            { name: "Tot.Coliform", apr: "900.0", may: "-", jun: "-", jul: "4.0", aug: "-", sep: "-", oct: "140.0", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "348.0" },
        ]
    },
    {
        srNo: "44", stationCode: "11", stationName: "Wainganga river, Ashti", regionalOffice: "Nagpur", monitoringFrequency: "Monthly", parameters: [
            { name: "pH", apr: "8.4", may: "8.3", jun: "8.4", jul: "7.9", aug: "-", sep: "-", oct: "8.3", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "8.3" },
            { name: "BOD", apr: "3.0", may: "5.0", jun: "6.0", jul: "6.0", aug: "-", sep: "-", oct: "6.5", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "5.3" },
            { name: "DO", apr: "5.6", may: "5.7", jun: "5.5", jul: "5.7", aug: "-", sep: "-", oct: "5.6", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "5.6" },
            { name: "Tot.Coliform", apr: "220.0", may: "1600.0", jun: "500.0", jul: "220.0", aug: "-", sep: "-", oct: "110.0", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "530.0" },
        ]
    },
    {
        srNo: "45", stationCode: "12", stationName: "Godavari river, Dhalegaon", regionalOffice: "Nagpur", monitoringFrequency: "Monthly", parameters: [
            { name: "pH", apr: "7.9", may: "-", jun: "-", jul: "7.8", aug: "7.2", sep: "8.3", oct: "7.6", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "7.8" },
            { name: "BOD", apr: "5.8", may: "-", jun: "-", jul: "4.0", aug: "6.4", sep: "3.7", oct: "3.8", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "4.7" },
            { name: "DO", apr: "6.5", may: "-", jun: "-", jul: "5.7", aug: "4.0", sep: "6.8", oct: "7.8", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "6.2" },
            { name: "Tot.Coliform", apr: "275.0", may: "-", jun: "-", jul: "280.0", aug: "130.0", sep: "350.0", oct: "170.0", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "241.0" },
        ]
    },
    {
        srNo: "46", stationCode: "28", stationName: "Bhima river, Takli", regionalOffice: "Pune", monitoringFrequency: "Monthly", parameters: [
            { name: "pH", apr: "7.5", may: "7.2", jun: "7.7", jul: "7.5", aug: "7.5", sep: "7.2", oct: "7.2", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "7.4" },
            { name: "BOD", apr: "16.0", may: "16.4", jun: "10.0", jul: "7.5", aug: "6.0", sep: "7.0", oct: "6.8", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "10.0" },
            { name: "DO", apr: "4.7", may: "4.6", jun: "6.7", jul: "6.1", aug: "6.9", sep: "6.4", oct: "5.5", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "5.8" },
            { name: "Tot.Coliform", apr: "1600.0", may: "75.0", jun: "350.0", jul: "70.0", aug: "110.0", sep: "225.0", oct: "275.0", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "386.4" },
        ]
    },
    {
        srNo: "47", stationCode: "36", stationName: "Krishna river, Karad", regionalOffice: "Pune", monitoringFrequency: "Monthly", parameters: [
            { name: "pH", apr: "7.6", may: "7.2", jun: "7.9", jul: "7.8", aug: "7.4", sep: "7.2", oct: "7.1", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "7.5" },
            { name: "BOD", apr: "12.8", may: "14.8", jun: "7.5", jul: "6.0", aug: "5.5", sep: "7.5", oct: "7.1", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "8.7" },
            { name: "DO", apr: "5.7", may: "5.1", jun: "6.6", jul: "6.5", aug: "7.4", sep: "6.4", oct: "4.8", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "6.1" },
            { name: "Tot.Coliform", apr: "140.0", may: "170.0", jun: "275.0", jul: "95.0", aug: "550.0", sep: "130.0", oct: "175.0", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "219.3" },
        ]
    },
    {
        srNo: "48", stationCode: "37", stationName: "Krishna river, Sangli", regionalOffice: "Pune", monitoringFrequency: "Monthly", parameters: [
            { name: "pH", apr: "7.6", may: "7.6", jun: "7.4", jul: "7.1", aug: "7.1", sep: "7.5", oct: "6.7", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "7.3" },
            { name: "BOD", apr: "3.4", may: "2.2", jun: "2.2", jul: "2.2", aug: "2.0", sep: "2.0", oct: "1.4", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "2.2" },
            { name: "DO", apr: "5.7", may: "6.9", jun: "6.0", jul: "6.1", aug: "6.9", sep: "6.7", oct: "6.8", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "6.4" },
            { name: "Tot.Coliform", apr: "12.0", may: "130.0", jun: "34.0", jul: "33.0", aug: "280.0", sep: "8.0", oct: "220.0", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "102.4" },
        ]
    }
];

function WaterQuality2006() {
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
                                WATER QUALITY FOR THE YEAR 2006-2007 UNDER GEMS MINARS PROJECT
                            </h2>

                            <div className="overflow-x-auto pb-4">
                                <div className="border border-gray-200 rounded-[35px] overflow-hidden min-w-[1000px]">
                                    <table className="w-full border-collapse">
                                        <thead>
                                            <tr className="bg-blue-50/50 border-b border-gray-100">
                                                <th className="py-4 px-2 text-center text-xs font-bold text-gray-700 border-r border-gray-100 min-w-[60px]">Sr No</th>
                                                <th className="py-4 px-2 text-center text-xs font-bold text-gray-700 border-r border-gray-100 min-w-[80px]">Station Code</th>
                                                <th className="py-4 px-2 text-left text-xs font-bold text-gray-700 border-r border-gray-100 min-w-[150px]">Station Name</th>
                                                <th className="py-4 px-2 text-left text-xs font-bold text-gray-700 border-r border-gray-100 min-w-[100px]">Regional Office</th>
                                                <th className="py-4 px-2 text-left text-xs font-bold text-gray-700 border-r border-gray-100 min-w-[100px]">Monitoring Frequency</th>
                                                <th className="py-4 px-2 text-left text-xs font-bold text-gray-700 border-r border-gray-100 w-[100px]">Parameter</th>
                                                <th className="py-4 px-1 text-center text-xs font-bold text-gray-700 border-r border-gray-100 w-[50px]">Apr-06</th>
                                                <th className="py-4 px-1 text-center text-xs font-bold text-gray-700 border-r border-gray-100 w-[50px]">May-06</th>
                                                <th className="py-4 px-1 text-center text-xs font-bold text-gray-700 border-r border-gray-100 w-[50px]">Jun-06</th>
                                                <th className="py-4 px-1 text-center text-xs font-bold text-gray-700 border-r border-gray-100 w-[50px]">Jul-06</th>
                                                <th className="py-4 px-1 text-center text-xs font-bold text-gray-700 border-r border-gray-100 w-[50px]">Aug-06</th>
                                                <th className="py-4 px-1 text-center text-xs font-bold text-gray-700 border-r border-gray-100 w-[50px]">Sep-06</th>
                                                <th className="py-4 px-1 text-center text-xs font-bold text-gray-700 border-r border-gray-100 w-[50px]">Oct-06</th>
                                                <th className="py-4 px-1 text-center text-xs font-bold text-gray-700 border-r border-gray-100 w-[50px]">Nov-06</th>
                                                <th className="py-4 px-1 text-center text-xs font-bold text-gray-700 border-r border-gray-100 w-[50px]">Dec-06</th>
                                                <th className="py-4 px-1 text-center text-xs font-bold text-gray-700 border-r border-gray-100 w-[50px]">Jan-07</th>
                                                <th className="py-4 px-1 text-center text-xs font-bold text-gray-700 border-r border-gray-100 w-[50px]">Feb-07</th>
                                                <th className="py-4 px-1 text-center text-xs font-bold text-gray-700 border-r border-gray-100 w-[50px]">Mar-07</th>
                                                <th className="py-4 px-1 text-center text-xs font-bold text-gray-700 w-[60px]">Average</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            {currentTableData.map((row) => (
                                                <tr key={row.srNo} className="hover:bg-gray-50/50 transition-colors">
                                                    <td className="py-3 px-2 text-xs text-gray-600 border-r border-gray-100 text-center align-top">{row.srNo}</td>
                                                    <td className="py-3 px-2 text-xs text-gray-600 border-r border-gray-100 text-center align-top">{row.stationCode}</td>
                                                    <td className="py-3 px-2 text-xs font-medium text-gray-800 border-r border-gray-100 align-top">{row.stationName}</td>
                                                    <td className="py-3 px-2 text-xs text-gray-600 border-r border-gray-100 align-top">{row.regionalOffice}</td>
                                                    <td className="py-3 px-2 text-xs text-gray-600 border-r border-gray-100 align-top">{row.monitoringFrequency}</td>
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

export default WaterQuality2006;
