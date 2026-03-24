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
            { name: "pH", apr: "#", may: "-", jun: "-", jul: "8.4", aug: "-", sep: "-", oct: "8.36", nov: "-", dec: "-", jan: "8.4", feb: "-", mar: "-", avg: "8.39" },
            { name: "BOD", apr: "#", may: "-", jun: "-", jul: "6.6", aug: "-", sep: "-", oct: "5", nov: "-", dec: "-", jan: "7.0", feb: "-", mar: "-", avg: "6.20" },
            { name: "DO", apr: "#", may: "-", jun: "-", jul: "5.6", aug: "-", sep: "-", oct: "7.5", nov: "-", dec: "-", jan: "6.3", feb: "-", mar: "-", avg: "6.47" },
            { name: "Tot.Coliform", apr: "#", may: "-", jun: "-", jul: "275", aug: "-", sep: "-", oct: "275", nov: "-", dec: "-", jan: "250.0", feb: "-", mar: "-", avg: "266.67" },
        ]
    },
    {
        srNo: "2", stationCode: "1092", stationName: "Kalu river Atale village", parameters: [
            { name: "pH", apr: "7.5", may: "-", jun: "-", jul: "7.86", aug: "-", sep: "-", oct: "8.1", nov: "-", dec: "-", jan: "7.5", feb: "-", mar: "-", avg: "7.74" },
            { name: "BOD", apr: "7", may: "-", jun: "-", jul: "5.5", aug: "-", sep: "-", oct: "5.8", nov: "-", dec: "-", jan: "6.4", feb: "-", mar: "-", avg: "6.18" },
            { name: "DO", apr: "3.1", may: "-", jun: "-", jul: "6.6", aug: "-", sep: "-", oct: "6", nov: "-", dec: "-", jan: "6.3", feb: "-", mar: "-", avg: "5.50" },
            { name: "Tot.Coliform", apr: "225", may: "-", jun: "-", jul: "350", aug: "-", sep: "-", oct: "225", nov: "-", dec: "-", jan: "225.0", feb: "-", mar: "-", avg: "256.25" },
        ]
    },
    {
        srNo: "3", stationCode: "1461", stationName: "Bhatsa river Pisa Dam", parameters: [
            { name: "pH", apr: "7.6", may: "-", jun: "-", jul: "7.98", aug: "-", sep: "-", oct: "8.1", nov: "-", dec: "-", jan: "7.5", feb: "-", mar: "-", avg: "7.80" },
            { name: "BOD", apr: "6.2", may: "-", jun: "-", jul: "5", aug: "-", sep: "-", oct: "5.8", nov: "-", dec: "-", jan: "5.8", feb: "-", mar: "-", avg: "5.70" },
            { name: "DO", apr: "5.1", may: "-", jun: "-", jul: "7", aug: "-", sep: "-", oct: "6", nov: "-", dec: "-", jan: "7.3", feb: "-", mar: "-", avg: "6.35" },
            { name: "Tot.Coliform", apr: "170", may: "-", jun: "-", jul: "175", aug: "-", sep: "-", oct: "175", nov: "-", dec: "-", jan: "170.0", feb: "-", mar: "-", avg: "172.50" },
        ]
    },
    {
        srNo: "4", stationCode: "1212", stationName: "Wardha river Rajura Bridge", parameters: [
            { name: "pH", apr: "8.3", may: "-", jun: "-", jul: "6.86", aug: "-", sep: "-", oct: "8.1", nov: "-", dec: "-", jan: "8.4", feb: "-", mar: "-", avg: "7.92" },
            { name: "BOD", apr: "4.8", may: "-", jun: "-", jul: "6", aug: "-", sep: "-", oct: "4.75", nov: "-", dec: "-", jan: "7.0", feb: "-", mar: "-", avg: "5.64" },
            { name: "DO", apr: "7", may: "-", jun: "-", jul: "6.8", aug: "-", sep: "-", oct: "7.2", nov: "-", dec: "-", jan: "7.0", feb: "-", mar: "-", avg: "7.00" },
            { name: "Tot.Coliform", apr: "275", may: "-", jun: "-", jul: "125", aug: "-", sep: "-", oct: "120", nov: "-", dec: "-", jan: "130.0", feb: "-", mar: "-", avg: "162.50" },
        ]
    },
    {
        srNo: "5", stationCode: "1318", stationName: "Mahim Creek Mahim Bay", parameters: [
            { name: "pH", apr: "7.1", may: "-", jun: "7.2", jul: "7.43", aug: "-", sep: "-", oct: "7.03", nov: "-", dec: "-", jan: "7.9", feb: "-", mar: "-", avg: "7.33" },
            { name: "BOD", apr: "27", may: "-", jun: "44", jul: "12", aug: "-", sep: "-", oct: "22", nov: "-", dec: "-", jan: "8.0", feb: "-", mar: "-", avg: "22.60" },
            { name: "DO", apr: "0.2", may: "-", jun: "0.6", jul: "4.4", aug: "-", sep: "-", oct: "2", nov: "-", dec: "-", jan: "4.7", feb: "-", mar: "-", avg: "2.38" },
            { name: "Tot.Coliform", apr: "350", may: "-", jun: "550", jul: "425", aug: "-", sep: "-", oct: "425", nov: "-", dec: "-", jan: "350.0", feb: "-", mar: "-", avg: "420.00" },
        ]
    },
    {
        srNo: "6", stationCode: "1317", stationName: "Thane Creek ElephantaIsland", parameters: [
            { name: "pH", apr: "7.3", may: "-", jun: "7.5", jul: "7.1", aug: "-", sep: "-", oct: "7.46", nov: "-", dec: "-", jan: "7.7", feb: "-", mar: "-", avg: "7.41" },
            { name: "BOD", apr: "13", may: "-", jun: "21", jul: "16", aug: "-", sep: "-", oct: "18", nov: "-", dec: "-", jan: "8.8", feb: "-", mar: "-", avg: "15.36" },
            { name: "DO", apr: "4.8", may: "-", jun: "3.5", jul: "4.4", aug: "-", sep: "-", oct: "4.2", nov: "-", dec: "-", jan: "4.2", feb: "-", mar: "-", avg: "4.22" },
            { name: "Tot.Coliform", apr: "550", may: "-", jun: "250", jul: "550", aug: "-", sep: "-", oct: "350", nov: "-", dec: "-", jan: "425.0", feb: "-", mar: "-", avg: "425.00" },
        ]
    },
    {
        srNo: "7", stationCode: "1315", stationName: "Wardha river Pulgaon", parameters: [
            { name: "pH", apr: "8.5", may: "8.6", jun: "7.8", jul: "7.97", aug: "8.3", sep: "7.7", oct: "8", nov: "8.2", dec: "7.5", jan: "8.1", feb: "8.2", mar: "7.7", avg: "8.05" },
            { name: "BOD", apr: "6.4", may: "8", jun: "11", jul: "8.5", aug: "5.5", sep: "5.8", oct: "6.75", nov: "6", dec: "5.4", jan: "6.0", feb: "4", mar: "4", avg: "6.45" },
            { name: "DO", apr: "6", may: "5.1", jun: "5.4", jul: "5.6", aug: "6.4", sep: "6", oct: "5.9", nov: "-", dec: "6.5", jan: "5.9", feb: "7", mar: "6.5", avg: "6.03" },
            { name: "Tot.Coliform", apr: "275", may: "150", jun: "550", jul: "350", aug: "350", sep: "140", oct: "200", nov: "250", dec: "250", jan: "250.0", feb: "225", mar: "550", avg: "295.00" },
        ]
    },
    {
        srNo: "8", stationCode: "1463", stationName: "Nira river Sarola Bridge", parameters: [
            { name: "pH", apr: "7.4", may: "7.4", jun: "7.6", jul: "7.77", aug: "7.52", sep: "7.19", oct: "7.8", nov: "7.3", dec: "7.5", jan: "7.8", feb: "6.9", mar: "8.3", avg: "7.54" },
            { name: "BOD", apr: "7", may: "5", jun: "9.8", jul: "8.5", aug: "6", sep: "6", oct: "5", nov: "13", dec: "6.2", jan: "5.0", feb: "4", mar: "3", avg: "6.54" },
            { name: "DO", apr: "7", may: "6.3", jun: "6.6", jul: "5.8", aug: "7", sep: "7", oct: "7", nov: "4.5", dec: "5.9", jan: "7.5", feb: "7.2", mar: "7", avg: "6.57" },
            { name: "Tot.Coliform", apr: "425", may: "130", jun: "250", jul: "120", aug: "170", sep: "550", oct: "250", nov: "175", dec: "225", jan: "250.0", feb: "225", mar: "900", avg: "305.83" },
        ]
    },
    {
        srNo: "9", stationCode: "1192", stationName: "Bhima river Daund", parameters: [
            { name: "pH", apr: "7.3", may: "-", jun: "-", jul: "7.66", aug: "-", sep: "-", oct: "7.75", nov: "-", dec: "-", jan: "8.0", feb: "-", mar: "-", avg: "7.68" },
            { name: "BOD", apr: "20", may: "-", jun: "-", jul: "6", aug: "-", sep: "-", oct: "5", nov: "-", dec: "-", jan: "6.0", feb: "-", mar: "-", avg: "9.25" },
            { name: "DO", apr: "2", may: "-", jun: "-", jul: "6.6", aug: "-", sep: "-", oct: "6", nov: "-", dec: "-", jan: "5.4", feb: "-", mar: "-", avg: "5.00" },
            { name: "Tot.Coliform", apr: "275", may: "-", jun: "-", jul: "250", aug: "-", sep: "-", oct: "175", nov: "-", dec: "-", jan: "225.0", feb: "-", mar: "-", avg: "231.25" },
        ]
    },
    {
        srNo: "10", stationCode: "1191", stationName: "Bhima river Pargaon", parameters: [
            { name: "pH", apr: "7.3", may: "-", jun: "-", jul: "7.63", aug: "-", sep: "-", oct: "7.52", nov: "-", dec: "-", jan: "8.0", feb: "-", mar: "-", avg: "7.61" },
            { name: "BOD", apr: "18", may: "-", jun: "-", jul: "7", aug: "-", sep: "-", oct: "5.6", nov: "-", dec: "-", jan: "7.0", feb: "-", mar: "-", avg: "9.40" },
            { name: "DO", apr: "3.1", may: "-", jun: "-", jul: "6.5", aug: "-", sep: "-", oct: "4", nov: "-", dec: "-", jan: "4.8", feb: "-", mar: "-", avg: "4.60" },
            { name: "Tot.Coliform", apr: "200", may: "-", jun: "-", jul: "275", aug: "-", sep: "-", oct: "275", nov: "-", dec: "-", jan: "250.0", feb: "-", mar: "-", avg: "250.00" },
        ]
    },
    {
        srNo: "11", stationCode: "1190", stationName: "Bhima river D/s of Band-garden", parameters: [
            { name: "pH", apr: "7", may: "-", jun: "-", jul: "7.3", aug: "-", sep: "-", oct: "7.56", nov: "-", dec: "-", jan: "8.5", feb: "-", mar: "-", avg: "7.59" },
            { name: "BOD", apr: "84", may: "-", jun: "-", jul: "8", aug: "-", sep: "-", oct: "8", nov: "-", dec: "-", jan: "23.0", feb: "-", mar: "-", avg: "30.75" },
            { name: "DO", apr: "-", may: "-", jun: "-", jul: "4.2", aug: "-", sep: "-", oct: "3.6", nov: "-", dec: "-", jan: "1.3", feb: "-", mar: "-", avg: "3.03" },
            { name: "Tot.Coliform", apr: "900", may: "-", jun: "-", jul: "150", aug: "-", sep: "-", oct: "350", nov: "-", dec: "-", jan: "425.0", feb: "-", mar: "-", avg: "456.25" },
        ]
    },
    {
        srNo: "12", stationCode: "1189", stationName: "Bhima river Pune D/s ofvithalwadi", parameters: [
            { name: "pH", apr: "7", may: "-", jun: "-", jul: "7.3", aug: "-", sep: "-", oct: "7.63", nov: "-", dec: "-", jan: "8.3", feb: "-", mar: "-", avg: "7.56" },
            { name: "BOD", apr: "80", may: "-", jun: "-", jul: "8", aug: "-", sep: "-", oct: "6", nov: "-", dec: "-", jan: "10.0", feb: "-", mar: "-", avg: "26.00" },
            { name: "DO", apr: "-", may: "-", jun: "-", jul: "4.4", aug: "-", sep: "-", oct: "5.4", nov: "-", dec: "-", jan: "3.9", feb: "-", mar: "-", avg: "4.57" },
            { name: "Tot.Coliform", apr: "550", may: "-", jun: "-", jul: "175", aug: "-", sep: "-", oct: "275", nov: "-", dec: "-", jan: "350.0", feb: "-", mar: "-", avg: "337.50" },
        ]
    },
    {
        srNo: "13", stationCode: "1094", stationName: "Ulhas river Badlapur W/W", parameters: [
            { name: "pH", apr: "7.7", may: "7.3", jun: "7.3", jul: "7.8", aug: "7.53", sep: "7.18", oct: "8.2", nov: "7.6", dec: "7.2", jan: "7.7", feb: "8.3", mar: "7.7", avg: "7.63" },
            { name: "BOD", apr: "6", may: "5.6", jun: "5", jul: "5", aug: "5.8", sep: "5", oct: "6", nov: "4.8", dec: "4.8", jan: "5.0", feb: "5", mar: "4", avg: "5.17" },
            { name: "DO", apr: "6.2", may: "6", jun: "6.4", jul: "6", aug: "7.2", sep: "7", oct: "5", nov: "6.7", dec: "6.2", jan: "7.5", feb: "7.2", mar: "6.6", avg: "6.50" },
            { name: "Tot.Coliform", apr: "175", may: "275", jun: "170", jul: "170", aug: "350", sep: "175", oct: "275", nov: "200", dec: "225", jan: "225.0", feb: "225", mar: "250", avg: "226.25" },
        ]
    },
    {
        srNo: "14", stationCode: "1093", stationName: "Ulhas river Mohane NRC Bund", parameters: [
            { name: "pH", apr: "7.8", may: "7.4", jun: "-", jul: "7.7", aug: "7.45", sep: "7.19", oct: "8.1", nov: "7.7", dec: "7.3", jan: "7.6", feb: "7.7", mar: "7.6", avg: "7.59" },
            { name: "BOD", apr: "6.2", may: "7.6", jun: "8.4", jul: "6.4", aug: "5.4", sep: "5.2", oct: "5.8", nov: "4.6", dec: "5.8", jan: "5.8", feb: "6", mar: "4", avg: "5.93" },
            { name: "DO", apr: "6", may: "5.7", jun: "5.5", jul: "5.4", aug: "7.2", sep: "7.2", oct: "5.5", nov: "6.7", dec: "6", jan: "6.5", feb: "7.1", mar: "6.4", avg: "6.27" },
            { name: "Tot.Coliform", apr: "140", may: "250", jun: "200", jul: "200", aug: "425", sep: "200", oct: "225", nov: "170", dec: "175", jan: "200.0", feb: "225", mar: "175", avg: "215.42" },
        ]
    },
    {
        srNo: "15", stationCode: "1316", stationName: "Basin creek Dist-Thane", parameters: [
            { name: "pH", apr: "7.7", may: "-", jun: "8", jul: "-", aug: "-", sep: "-", oct: "7.6", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "7.77" },
            { name: "BOD", apr: "6", may: "-", jun: "19", jul: "-", aug: "-", sep: "-", oct: "10", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "11.67" },
            { name: "DO", apr: "6.2", may: "-", jun: "4", jul: "-", aug: "-", sep: "-", oct: "5.4", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "5.20" },
            { name: "Tot.Coliform", apr: "175", may: "-", jun: "250", jul: "-", aug: "-", sep: "-", oct: "350", nov: "-", dec: "-", jan: "-", feb: "-", mar: "-", avg: "258.33" },
        ]
    },
    {
        srNo: "16", stationCode: "1462", stationName: "Patalganga river MIDC W/W", parameters: [
            { name: "pH", apr: "7.6", may: "7", jun: "7.6", jul: "6.9", aug: "7.47", sep: "7.08", oct: "7.77", nov: "7.5", dec: "6.9", jan: "6.9", feb: "6.8", mar: "7.2", avg: "7.23" },
            { name: "BOD", apr: "7.2", may: "5.6", jun: "5.2", jul: "9", aug: "5", sep: "4.8", oct: "5.2", nov: "4", dec: "5", jan: "9.0", feb: "5", mar: "4", avg: "5.75" },
            { name: "DO", apr: "5.7", may: "6", jun: "6.6", jul: "4.8", aug: "6.8", sep: "7.2", oct: "7.3", nov: "6.5", dec: "6.3", jan: "5.5", feb: "6.5", mar: "5.4", avg: "6.22" },
            { name: "Tot.Coliform", apr: "350", may: "225", jun: "200", jul: "120", aug: "120", sep: "140", oct: "110", nov: "200", dec: "175", jan: "170.0", feb: "200", mar: "170", avg: "181.67" },
        ]
    },
    {
        srNo: "17", stationCode: "1151", stationName: "Patalganga Shilphata Bridge", parameters: [
            { name: "pH", apr: "7.6", may: "7.1", jun: "7.8", jul: "7.5", aug: "7.36", sep: "6.99", oct: "7.63", nov: "7.6", dec: "7", jan: "7.1", feb: "7.3", mar: "7.4", avg: "7.37" },
            { name: "BOD", apr: "7", may: "5", jun: "5", jul: "6", aug: "5.5", sep: "5.4", oct: "5", nov: "4", dec: "5.2", jan: "10.0", feb: "6", mar: "5", avg: "5.76" },
            { name: "DO", apr: "6.9", may: "6.3", jun: "6.1", jul: "7.2", aug: "6.4", sep: "7", oct: "7.2", nov: "6.4", dec: "6.5", jan: "-", feb: "6.5", mar: "5.77", avg: "6.57" },
            { name: "Tot.Coliform", apr: "550", may: "170", jun: "200", jul: "225", aug: "175", sep: "350", oct: "275", nov: "225", dec: "225", jan: "225.0", feb: "225", mar: "110", avg: "246.25" },
        ]
    },
    {
        srNo: "18", stationCode: "1314", stationName: "Tapi river Ubad village", parameters: [
            { name: "pH", apr: "8.3", may: "8.8", jun: "8.7", jul: "8.1", aug: "7.7", sep: "8.2", oct: "8.58", nov: "8.1", dec: "8.4", jan: "8.2", feb: "7.8", mar: "7.9", avg: "8.23" },
            { name: "BOD", apr: "6.8", may: "6", jun: "10", jul: "7.2", aug: "5.5", sep: "6.4", oct: "5.4", nov: "6", dec: "4", jan: "7.4", feb: "6.5", mar: "5", avg: "6.35" },
            { name: "DO", apr: "4.7", may: "5.8", jun: "4.6", jul: "5.5", aug: "6", sep: "5", oct: "7", nov: "6.9", dec: "6.8", jan: "6.9", feb: "6", mar: "5.5", avg: "5.89" },
            { name: "Tot.Coliform", apr: "200", may: "175", jun: "425", jul: "250", aug: "350", sep: "200", oct: "175", nov: "250", dec: "170", jan: "175.0", feb: "200", mar: "200", avg: "230.83" },
        ]
    },
    {
        srNo: "19", stationCode: "1251", stationName: "Tapi river Bhusaval", parameters: [
            { name: "pH", apr: "8.2", may: "8.9", jun: "8.8", jul: "8.2", aug: "8.12", sep: "8.03", oct: "8.4", nov: "8.2", dec: "8.5", jan: "8.7", feb: "8.8", mar: "8", avg: "8.40" },
            { name: "BOD", apr: "7.4", may: "5", jun: "5.2", jul: "5", aug: "5", sep: "6.4", oct: "5.6", nov: "5", dec: "6", jan: "9.2", feb: "5", mar: "6", avg: "5.90" },
            { name: "DO", apr: "3.7", may: "5.9", jun: "6.2", jul: "5.8", aug: "7", sep: "5.8", oct: "7", nov: "6.6", dec: "6.7", jan: "5.0", feb: "6", mar: "5.1", avg: "5.90" },
            { name: "Tot.Coliform", apr: "250", may: "140", jun: "350", jul: "250", aug: "350", sep: "275", oct: "275", nov: "225", dec: "200", jan: "225.0", feb: "200", mar: "170", avg: "242.50" },
        ]
    },
    {
        srNo: "20", stationCode: "1313", stationName: "Tapi river Ajanad Village", parameters: [
            { name: "pH", apr: "8.8", may: "9.2", jun: "9.1", jul: "8.1", aug: "7.7", sep: "7.83", oct: "8.47", nov: "8.3", dec: "8.3", jan: "8.5", feb: "-", mar: "7.3", avg: "8.33" },
            { name: "BOD", apr: "5.2", may: "5.4", jun: "7.4", jul: "6.2", aug: "5", sep: "6.8", oct: "4.8", nov: "5.8", dec: "5", jan: "6.0", feb: "-", mar: "7", avg: "5.87" },
            { name: "DO", apr: "6.1", may: "6.2", jun: "5.8", jul: "5.2", aug: "6", sep: "5", oct: "7.6", nov: "6.5", dec: "6.6", jan: "7.5", feb: "-", mar: "5.1", avg: "6.15" },
            { name: "Tot.Coliform", apr: "275", may: "130", jun: "275", jul: "350", aug: "225", sep: "350", oct: "130", nov: "200", dec: "175", jan: "200.0", feb: "-", mar: "175", avg: "225.91" },
        ]
    },
    {
        srNo: "21", stationCode: "1311", stationName: "Panchganga river Ichalkaranji", parameters: [
            { name: "pH", apr: "7.7", may: "-", jun: "-", jul: "7.5", aug: "-", sep: "-", oct: "7.26", nov: "-", dec: "-", jan: "7.7", feb: "-", mar: "-", avg: "7.54" },
            { name: "BOD", apr: "6.6", may: "-", jun: "-", jul: "4.6", aug: "-", sep: "-", oct: "5", nov: "-", dec: "-", jan: "9.0", feb: "-", mar: "-", avg: "6.30" },
            { name: "DO", apr: "5.3", may: "-", jun: "-", jul: "6.8", aug: "-", sep: "-", oct: "7.4", nov: "-", dec: "-", jan: "5.3", feb: "-", mar: "-", avg: "6.20" },
            { name: "Tot.Coliform", apr: "225", may: "-", jun: "-", jul: "170", aug: "-", sep: "-", oct: "175", nov: "-", dec: "-", jan: "200.0", feb: "-", mar: "-", avg: "192.50" },
        ]
    },
    {
        srNo: "29", stationCode: "1209", stationName: "Godavari river Raher", parameters: [
            { name: "pH", apr: "7.9", may: "#", jun: "#", jul: "7.7", aug: "8.3", sep: "8.3", oct: "7.81", nov: "8.6", dec: "8.5", jan: "8.0", feb: "8.2", mar: "#", avg: "8.15" },
            { name: "BOD", apr: "6.2", may: "#", jun: "#", jul: "8", aug: "6", sep: "5", oct: "5.6", nov: "4.8", dec: "6", jan: "7.0", feb: "6", mar: "#", avg: "6.07" },
            { name: "DO", apr: "5.8", may: "#", jun: "#", jul: "6.2", aug: "7.2", sep: "7", oct: "6", nov: "7.4", dec: "6", jan: "5.8", feb: "6.3", mar: "#", avg: "6.41" },
            { name: "Tot.Coliform", apr: "425", may: "#", jun: "#", jul: "175", aug: "350", sep: "200", oct: "175", nov: "225", dec: "200", jan: "175.0", feb: "200", mar: "#", avg: "236.11" },
        ]
    },
    {
        srNo: "30", stationCode: "1312", stationName: "Godavari river Jaikwadi", parameters: [
            { name: "pH", apr: "7.4", may: "7.8", jun: "7.8", jul: "7.76", aug: "8", sep: "8.15", oct: "7.43", nov: "8.3", dec: "7.2", jan: "8.0", feb: "7.7", mar: "7.7", avg: "7.77" },
            { name: "BOD", apr: "6.8", may: "8.5", jun: "13", jul: "6", aug: "5.5", sep: "5", oct: "5", nov: "5.8", dec: "6.2", jan: "6.4", feb: "4", mar: "4", avg: "6.35" },
            { name: "DO", apr: "5", may: "5.5", jun: "4.2", jul: "7", aug: "7", sep: "7", oct: "7", nov: "6.8", dec: "5.9", jan: "7.1", feb: "6.9", mar: "6.7", avg: "6.34" },
            { name: "Tot.Coliform", apr: "275", may: "200", jun: "140", jul: "200", aug: "275", sep: "200", oct: "175", nov: "150", dec: "170", jan: "175.0", feb: "170", mar: "140", avg: "189.17" },
        ]
    },
    {
        srNo: "31", stationCode: "1188", stationName: "Bhima river Narsingpur", parameters: [
            { name: "pH", apr: "7.7", may: "7.7", jun: "8", jul: "8.35", aug: "8.3", sep: "7.6", oct: "7.79", nov: "7.6", dec: "8.2", jan: "7.4", feb: "8.2", mar: "7.9", avg: "7.90" },
            { name: "BOD", apr: "6", may: "6.4", jun: "5.4", jul: "6", aug: "5", sep: "5.4", oct: "5.2", nov: "5.6", dec: "6.2", jan: "6.8", feb: "4", mar: "3", avg: "5.42" },
            { name: "DO", apr: "5.1", may: "5.6", jun: "6.3", jul: "7", aug: "6.4", sep: "6.8", oct: "7.3", nov: "5.1", dec: "5.9", jan: "6.9", feb: "7.3", mar: "6", avg: "6.31" },
            { name: "Tot.Coliform", apr: "130", may: "250", jun: "170", jul: "200", aug: "140", sep: "225", oct: "225", nov: "175", dec: "170", jan: "175.0", feb: "175", mar: "170", avg: "183.75" },
        ]
    },
    {
        srNo: "32", stationCode: "1194", stationName: "Krishna river Dhom Dam", parameters: [
            { name: "pH", apr: "7.9", may: "8.3", jun: "7.9", jul: "7.73", aug: "8.3", sep: "8.1", oct: "8.2", nov: "-", dec: "8.6", jan: "8.3", feb: "7.5", mar: "7.6", avg: "8.04" },
            { name: "BOD", apr: "4.4", may: "5.4", jun: "5", jul: "7", aug: "5", sep: "6", oct: "5", nov: "-", dec: "6", jan: "6.0", feb: "4.4", mar: "4", avg: "5.29" },
            { name: "DO", apr: "7.1", may: "6.3", jun: "6.1", jul: "6.8", aug: "7.4", sep: "7.2", oct: "7.3", nov: "-", dec: "5.9", jan: "7.5", feb: "7.1", mar: "6.8", avg: "6.86" },
            { name: "Tot.Coliform", apr: "200", may: "175", jun: "250", jul: "140", aug: "350", sep: "425", oct: "175", nov: "-", dec: "175", jan: "170.0", feb: "170", mar: "225", avg: "223.18" },
        ]
    },
    {
        srNo: "33", stationCode: "1210", stationName: "Godavari river Nanded", parameters: [
            { name: "pH", apr: "8", may: "7.7", jun: "7.5", jul: "7.6", aug: "8.29", sep: "8.35", oct: "7.86", nov: "8.6", dec: "8.4", jan: "8.1", feb: "8.3", mar: "8.1", avg: "8.07" },
            { name: "BOD", apr: "6.4", may: "10", jun: "20", jul: "6.5", aug: "5", sep: "5.8", oct: "5.6", nov: "4", dec: "5.2", jan: "7.0", feb: "5", mar: "4", avg: "7.04" },
            { name: "DO", apr: "5.2", may: "4.2", jun: "3.4", jul: "6.7", aug: "6.6", sep: "6.2", oct: "6", nov: "7.4", dec: "6.3", jan: "5.8", feb: "6.4", mar: "6.3", avg: "5.88" },
            { name: "Tot.Coliform", apr: "225", may: "70", jun: "550", jul: "175", aug: "550", sep: "350", oct: "275", nov: "170", dec: "200", jan: "200.0", feb: "175", mar: "175", avg: "259.58" },
        ]
    },
    {
        srNo: "1", stationCode: "28", stationName: "Bhima river Takli", parameters: [
            { name: "pH", apr: "7.8", may: "7.6", jun: "7.9", jul: "7.53", aug: "8.24", sep: "7.48", oct: "7.66", nov: "7.4", dec: "7.1", jan: "7.7", feb: "8.7", mar: "8", avg: "7.76" },
            { name: "BOD", apr: "6.4", may: "9.6", jun: "6.4", jul: "8", aug: "5.5", sep: "5", oct: "5.4", nov: "5", dec: "6", jan: "6.0", feb: "5", mar: "5", avg: "6.11" },
            { name: "DO", apr: "5.6", may: "5", jun: "6.1", jul: "5.4", aug: "6.4", sep: "6.6", oct: "7.2", nov: "5.9", dec: "6.4", jan: "7.6", feb: "7", mar: "5.8", avg: "6.25" },
            { name: "Tot.Coliform", apr: "275", may: "275", jun: "110", jul: "170", aug: "250", sep: "175", oct: "175", nov: "140", dec: "150", jan: "170.0", feb: "200", mar: "150", avg: "186.67" },
        ]
    },
    {
        srNo: "2", stationCode: "12", stationName: "Godavari river Dhalegaon", parameters: [
            { name: "pH", apr: "#", may: "#", jun: "#", jul: "7.63", aug: "8.3", sep: "8.4", oct: "7.7", nov: "8.5", dec: "8.5", jan: "8.1", feb: "8.3", mar: "#", avg: "8.18" },
            { name: "BOD", apr: "#", may: "#", jun: "#", jul: "7.5", aug: "5.5", sep: "6.2", oct: "5.8", nov: "4", dec: "5", jan: "7.2", feb: "4", mar: "#", avg: "5.65" },
            { name: "DO", apr: "#", may: "#", jun: "#", jul: "6.3", aug: "6.4", sep: "5.8", oct: "6", nov: "7.4", dec: "6.5", jan: "5.5", feb: "8.8", mar: "#", avg: "6.59" },
            { name: "Tot.Coliform", apr: "#", may: "#", jun: "#", jul: "275", aug: "350", sep: "175", oct: "175", nov: "200", dec: "175", jan: "170.0", feb: "200", mar: "#", avg: "215.00" },
        ]
    },
    {
        srNo: "3", stationCode: "37", stationName: "Krishna river Sangli", parameters: [
            { name: "pH", apr: "7.7", may: "8.2", jun: "7.9", jul: "7.9", aug: "7.42", sep: "7.4", oct: "7.26", nov: "7.9", dec: "7", jan: "8.3", feb: "8.5", mar: "7.9", avg: "7.78" },
            { name: "BOD", apr: "7.2", may: "8.5", jun: "5.4", jul: "5", aug: "6", sep: "5.4", oct: "4.8", nov: "6.4", dec: "9", jan: "6.6", feb: "8", mar: "5", avg: "6.44" },
            { name: "DO", apr: "4.1", may: "4.5", jun: "6.4", jul: "6.8", aug: "7", sep: "7.4", oct: "7.4", nov: "5.4", dec: "5.7", jan: "6.8", feb: "6", mar: "5.8", avg: "6.11" },
            { name: "Tot.Coliform", apr: "170", may: "275", jun: "350", jul: "350", aug: "275", sep: "350", oct: "170", nov: "250", dec: "225", jan: "200.0", feb: "225", mar: "150", avg: "249.17" },
        ]
    },
    {
        srNo: "4", stationCode: "36", stationName: "Krishna river Karad", parameters: [
            { name: "pH", apr: "7.5", may: "8.3", jun: "7.6", jul: "7.58", aug: "7.4", sep: "6.8", oct: "7.1", nov: "-", dec: "7.6", jan: "8.3", feb: "7", mar: "7.7", avg: "7.53" },
            { name: "BOD", apr: "7.2", may: "9.4", jun: "11", jul: "9.5", aug: "5.5", sep: "170", oct: "5.75", nov: "-", dec: "8", jan: "7.8", feb: "9", mar: "3", avg: "22.38" },
            { name: "DO", apr: "3.9", may: "5.2", jun: "5", jul: "4.8", aug: "6.6", sep: "-", oct: "6.4", nov: "-", dec: "5.2", jan: "7.2", feb: "4.2", mar: "7.3", avg: "5.58" },
            { name: "Tot.Coliform", apr: "550", may: "140", jun: "170", jul: "200", aug: "250", sep: "1800", oct: "150", nov: "-", dec: "170", jan: "170.0", feb: "300", mar: "350", avg: "386.36" },
        ]
    },
    {
        srNo: "5", stationCode: "11", stationName: "Wainganga river Ashti", parameters: [
            { name: "pH", apr: "8.5", may: "8.3", jun: "9", jul: "7.58", aug: "7.79", sep: "7.8", oct: "8.2", nov: "8.4", dec: "8.8", jan: "8.5", feb: "7.5", mar: "8.2", avg: "8.21" },
            { name: "BOD", apr: "4.8", may: "5", jun: "9", jul: "7", aug: "5.8", sep: "5.8", oct: "4.7", nov: "5.8", dec: "5.8", jan: "7.8", feb: "5", mar: "4", avg: "5.88" },
            { name: "DO", apr: "7", may: "7.4", jun: "5", jul: "6.2", aug: "6", sep: "6", oct: "7.3", nov: "6.8", dec: "6.4", jan: "7.5", feb: "5.5", mar: "6.9", avg: "6.50" },
            { name: "Tot.Coliform", apr: "225", may: "140", jun: "250", jul: "110", aug: "250", sep: "250", oct: "200", nov: "175", dec: "170", jan: "175.0", feb: "200", mar: "250", avg: "199.58" },
        ]
    }
];

function WaterQuality2003() {
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
                                WATER QUALITY DATA MONITORED BY M.P.C. BOARD UNDER MINARS PROJECT DURING THE PERIOD APRIL 2003 TO MARCH 2004
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
                                                <th className="py-4 px-1 text-center text-xs font-bold text-gray-700 border-r border-gray-100 w-[50px]">Apr-03</th>
                                                <th className="py-4 px-1 text-center text-xs font-bold text-gray-700 border-r border-gray-100 w-[50px]">May-03</th>
                                                <th className="py-4 px-1 text-center text-xs font-bold text-gray-700 border-r border-gray-100 w-[50px]">Jun-03</th>
                                                <th className="py-4 px-1 text-center text-xs font-bold text-gray-700 border-r border-gray-100 w-[50px]">Jul-03</th>
                                                <th className="py-4 px-1 text-center text-xs font-bold text-gray-700 border-r border-gray-100 w-[50px]">Aug-03</th>
                                                <th className="py-4 px-1 text-center text-xs font-bold text-gray-700 border-r border-gray-100 w-[50px]">Sep-03</th>
                                                <th className="py-4 px-1 text-center text-xs font-bold text-gray-700 border-r border-gray-100 w-[50px]">Oct-03</th>
                                                <th className="py-4 px-1 text-center text-xs font-bold text-gray-700 border-r border-gray-100 w-[50px]">Nov-03</th>
                                                <th className="py-4 px-1 text-center text-xs font-bold text-gray-700 border-r border-gray-100 w-[50px]">Dec-03</th>
                                                <th className="py-4 px-1 text-center text-xs font-bold text-gray-700 border-r border-gray-100 w-[50px]">Jan-04</th>
                                                <th className="py-4 px-1 text-center text-xs font-bold text-gray-700 border-r border-gray-100 w-[50px]">Feb-04</th>
                                                <th className="py-4 px-1 text-center text-xs font-bold text-gray-700 border-r border-gray-100 w-[50px]">Mar-04</th>
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

export default WaterQuality2003;
