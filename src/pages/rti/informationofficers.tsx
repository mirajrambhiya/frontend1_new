const standingorders = "/assets/standingorders.svg";

// Information Officers data from user's images
const officersData = [
    {
        id: 1,
        fieldOffice: "Regional Office, Mumbai.\nKalpataru Point, 2nd floor,Opp. PVR Theatre, Sion (E), Mumbai-400022\nContact: - 24016239/24015269",
        jurisdiction: "Mumbai Island, Ward No. A.B.C D. FF (South) F(North) G(South) and G (North). Part Of Mumbai Suburb, Ward No. M (East), M(West), H(East) H(West) and L. Part Of Mumbai Suburb, Ward No. K(East) K(West), S, N, and (P (South). Suburb of Mumbai, Ward No. P(North), R(North), R(South) and T.",
        informationOfficer: "Mr. Shakil Suleman Shaikh\n(Sub Regional Officer)",
        assistantInfoOfficer: "Mr. Dattatray Gawali\n(Field Officer)",
        appellateOfficer: "Mr. Sujit Dholam\n(Regional Officer)"
    },
    {
        id: 2,
        fieldOffice: "Regional Office,\nNavi Mumbai\nRaigad Bhavan, 7th floor, Sector - 11, C.B.D Belapur, Navi Mumbai Contact: - 02227572739",
        jurisdiction: "Southward direction of Road in front of CETP ( Hills to Pune Highway ).The following areas are included in the jurisdiction of SRI -II Vashi, Borivli, Ravane, Turbhe, Sanpada, Belapur, + CETP activities + Vashi Creek. North limit Navi Mumbai Municipal Corporation (NMMC) starting with village-Dighe The following areas are included in the jurisdiction of SRO-I Mahape Kopar-khairne, Savali, Ghansoli, Rabale, Dive,Airloi, Dighe (NMMC) TTC WMA activities Diva Creek. MIDC Taloja and Uran Taluka.",
        informationOfficer: "Mr. Vikrant Bhalerao\n(Sub Regional Officer)",
        assistantInfoOfficer: "Mrs.Shubhangi Jadhav\n(Field Officer)",
        appellateOfficer: "Mr. Satish Padwal\n(Regional Officer)"
    },
    {
        id: 3,
        fieldOffice: "Regional Office, Raigad.\n6th floor, Sector - 11, C.B.D Belapur, Navi Mumbai. Contact - 022-27576034",
        jurisdiction: "Khalapur Taluka and Panvel Taluka ( Except MIDC - Taloja)Pen , Karjat, Sudhagad Taluka.",
        informationOfficer: "Mr. Prashant Bhosale\n(Sub Regional Officer)",
        assistantInfoOfficer: "Mr. Rajesh Auti\n(Field Officer)",
        appellateOfficer: "Mr. Sanjay Bhosale\n(Regional Officer)"
    },
    {
        id: 4,
        fieldOffice: "Regional Office, Thane\nPlot No P-30, 5th floor Office Complex Building Mulund Checknaka, Thane.",
        jurisdiction: "Thane Municipal Corporation Area. Thane Taluka excluding Thane Municipal Corporation Area Vasai Taluka.",
        informationOfficer: "Mr. Anand Katole\n(Sub Regional Officer)",
        assistantInfoOfficer: "Mrs. Aruna Rokade\n(Field Officer)",
        appellateOfficer: "Mr. Kiran Hasabnis\n(Regional Officer)"
    },
    {
        id: 5,
        fieldOffice: "Regional Office, Kalyan\nSidhivinayak Sankul, 3rd and 4th Floor, Station Road, Kalyan (West)",
        jurisdiction: "Kalyan, Bhiwandi Taluka Ulhasnagar , Badlapur Taluka, Wada, Murbad, Shahapur Taluka, Wada, Murbad, Shahapur Taluka",
        informationOfficer: "Mr. Upendra Kulkarni\n(Sub Regional Officer)",
        assistantInfoOfficer: "Mr. Vishal Singh Rajput\n(Field Officer)",
        appellateOfficer: "Mr. Jayvant Hajare\n(Regional Officer)"
    },
    {
        id: 6,
        fieldOffice: "Regional Office, Pune\nJog Center, 3rd floor, Mumbai Pune Road, Wakdewadi, Pune-411003.Contact - 020-25811694, 020 - 25811627",
        jurisdiction: "Pune Corporation area, Daund, Indapur, Baramati, Purandar, Bhor and Velhe Taluka of Pune District. Haveli Taluka: (excluding Pimpri Chinchwad Corporation Area.) Khed, Mulshi, Ambegaon Junnar, Maval and Shirur Taluka of Pune District.Pimpri Chinchwad",
        informationOfficer: "Mr. Manchak Jadhav\n(Sub Regional Officer)",
        assistantInfoOfficer: "Mrs. Shushma Kumbhar\n(Field Officer)",
        appellateOfficer: "Mr. Babasaheb Kukade\n(Regional Officer)"
    },
    {
        id: 7,
        fieldOffice: "Regional Office, Nasik\nUdyog Bhavan, First Floor, Trimbak Road, Near ITI, Satpur, Nashik-422007. Contact 0253 - 2365150",
        jurisdiction: "Nashik District.",
        informationOfficer: "Mr. Prashant Gaikwad\n(Sub Regional Officer)",
        assistantInfoOfficer: "Mr. Hemant Kulkarni\n(Field Officer)",
        appellateOfficer: "Mr. Limbaji Bhad\n(Regional Officer)"
    },
    {
        id: 8,
        fieldOffice: "Regional Office, Chh.Sambhaji Nagar\nParyavaran Bhavan, A - 4/1, MIDC Area , Chikalthana, Near Seth Nandlal Dhoot Hospital, Jalna Road , Aurangabad - 431 210. Contact - 02402473463",
        jurisdiction: "Chh.Sambhaji Nagar District.",
        informationOfficer: "Mr. Achyut Nandavate\n(Field Officer)",
        assistantInfoOfficer: "Mrs. Dipali Lokhande\n(Field Officer)",
        appellateOfficer: "Mr. Manish Holkar\n(Regional Officer)"
    },
    {
        id: 9,
        fieldOffice: "Regional Office, Amravati\nSahkar Surbhi Bapatwadi, Near Vivekanand Colony,Amravati-444606.\nContact - 0721-2563593",
        jurisdiction: "Amravati District.",
        informationOfficer: "Mrs. Yogini Balankhe\n(Sub Regional Officer)",
        assistantInfoOfficer: "Mr. Jitendra Purate\n(Field Officer)",
        appellateOfficer: "Mr. Sanjay D Patil\n(Regional Officer)"
    },
    {
        id: 10,
        fieldOffice: "Regional Office, Nagpur\nUdyog Bhavan , 6th floor, Near Sales Tax Office, Civil Line , Nagpur - 440 001.\nContact - 0712-2560152",
        jurisdiction: "Wardha District, Hingana taluka, (excluding Nagpur Municipal Corporation area) Umred, Bhivapurkar, Kuhi and Nagpur Gramin Taluka of Nagpur District.",
        informationOfficer: "Mr. Sushilkumar Rathod\n(Sub Regional Officer)",
        assistantInfoOfficer: "Mrs. Shital Udhade\n(Field Officer)",
        appellateOfficer: "Mrs. Hema M. Deshpande\n(Regional Officer)"
    },
    {
        id: 11,
        fieldOffice: "Regional Office, Chandrapur\nMahaveer Tower, 2nd floor, Mul Road, Chandrapur, 442 401. Contact - 07172-272410",
        jurisdiction: "Chandrapur, Yavatmal, Gadchiroli District.",
        informationOfficer: "Mr. Umashankar Bhadule\n(Sub Regional Officer)",
        assistantInfoOfficer: "Mr. Nandkumar Lomate\n(Field Officer)",
        appellateOfficer: "Mr. Tanaji G Yadav\n(Regional Officer)"
    },
    {
        id: 12,
        fieldOffice: "Central Laboratory, Cidco Bhavan\nCentral Laboratory, Maharashtra Pollution Control Board, \"Nirmal Bhavan\", P-3, MIDC Industrial Area, Mahape, Navi Mumbai- 400 701. Contact (022 )67195031/67195032",
        jurisdiction: "---",
        informationOfficer: "Mrs. Yamini Chachad\n(Scientific Officer)",
        assistantInfoOfficer: "Mr. Anil R. Patil\n(Junior Scientific Assistant)",
        appellateOfficer: "Mr. Padmanabh Khadkikar\n(Senior Scientific Officer) I/C"
    },
    {
        id: 13,
        fieldOffice: "Sub Regional Office, Mahad\nSamaik Suvidha Kendra Building, MIDC - Mahad, District Raigad - 402 309.\nContact - 02145232372",
        jurisdiction: "Mahad Mhasla, Mangaon, Shriwardhan and Poladpur Taluka.",
        informationOfficer: "Mr. Tanaji Patil\n(Sub Regional Officer)",
        assistantInfoOfficer: "Mr. Darshan Mhatre\n(Field Officer)",
        appellateOfficer: "Mr. Sanjay Bhosale\n(Regional Officer)"
    },
    {
        id: 14,
        fieldOffice: "Sub Regional Office, Tarapur\nMIDC Office Building Boisar Station, Post Taps, Tarapur, Dist Thane. Contact 02525 -273314/02525 -261581",
        jurisdiction: "Tarapur MIDC and related area. Dahanu, Talasari, Mokhada, Javhar and Vikramgadh Taluka and Palghar Taluka (Except SRO-Tarapur- I jurisdiction).",
        informationOfficer: "Mr. Virendra Singh\n(Sub Regional Officer)",
        assistantInfoOfficer: "Mr. Prakash Tate\n(Field Officer)",
        appellateOfficer: "Mr. Kiran Hasabnis\n(Regional Officer)"
    },
    {
        id: 15,
        fieldOffice: "Sub Regional Office, Ratnagiri\nRevenue Department Employees Co-Op Credit Society Ltd., Office Building, Collectors Office Compound, Zandgaon, Ratnagiri - 415 639. Contact - 02352 - 220813",
        jurisdiction: "Sindhudurga district and Rajapur, Lanja, Ratnagiri Deorukh and Sangmeshwar Taluka",
        informationOfficer: "Mr. Pramod Mane\n(Add. Charge - Sub Regional Officer)",
        assistantInfoOfficer: "Mr. Nilesh Patil\n(Field Officer)",
        appellateOfficer: "Mr. Nikhil Gharat\n(Regional Officer)"
    },
    {
        id: 16,
        fieldOffice: "Sub Regional Office, Chiplun\nParkar Complex , 1st floor, Behind Nagar Parishad Office, Chiplun Taluka.\nChiplun, Dist. Ratnagiri. Contact - 02355 -261570",
        jurisdiction: "Chiplun, Guhagar, Khed, Dapoli and Mandangad, Taluka of Ratnagiri District",
        informationOfficer: "Mr. Shripad Kulkarni\n(Field Officer)",
        assistantInfoOfficer: "Mr. Utkarsha Shingare\n(Junior Scientific Assistant)",
        appellateOfficer: "Mr. Nikhil Gharat\n(Regional Officer)"
    },
    {
        id: 17,
        fieldOffice: "Sub Regional Office, Sangli\n300/2 , Udyog Bhavan , Near GovernmentRest House , Vishrambaug , Sangli - 416 416. Contact - 0233 - 2672032",
        jurisdiction: "Sangli District.",
        informationOfficer: "Mr. Vidyasagar Killedar\n(Sub Regional Officer)",
        assistantInfoOfficer: "Mr. Jaydeep Kumbhar\n(Field Officer)",
        appellateOfficer: "Mr. Nikhil Gharat\n(Regional Officer)"
    },
    // Page 3 data from third image
    {
        id: 18,
        fieldOffice: "Sub Regional Office, Satara\nAdministrative Building, 2nd Floor, Behind S. T. Stand Sadar Bazar, Satara - 415 001. Contact - 02162-233527/237789",
        jurisdiction: "Satara District.",
        informationOfficer: "Mr. Amol Satpute\n(Sub Regional Officer)",
        assistantInfoOfficer: "Mr. Rahul Nimbalkar\n(Field Officer)",
        appellateOfficer: "Mr. Babasaheb Kukade\n(Regional Officer)"
    },
    {
        id: 19,
        fieldOffice: "Sub Regional Office, Solapur\n4/B, Bali Block, Civil Lines, Oppsite Government Milk Scheme, Saat Rasta, Solapur - 413003. Contact - 0217-2319850",
        jurisdiction: "Solapur District.",
        informationOfficer: "Mr. Nikhil More\n(Sub Regional Officer)",
        assistantInfoOfficer: "Mr. Abhijit Lohia\n(Field Officer)",
        appellateOfficer: "Mr. Babasaheb Kukade\n(Regional Officer)"
    },
    {
        id: 20,
        fieldOffice: "Sub Regional Office, Akola\nVijay Smruti, Opp. Dr.Nahahhabde hospital,Birla Rd., Ramdas Peth, Akola, 444 005. Contact - 0724-2442344/2444992",
        jurisdiction: "Akola and Buldhana District.",
        informationOfficer: "Mr. Mahesh Bhiwapurkar\n(Field Officer)",
        assistantInfoOfficer: "Mr. Nitin Chaurdhari\n(Senior Clerk)",
        appellateOfficer: "Mr. Sanjay D Patil\n(Regional Officer)"
    },
    {
        id: 21,
        fieldOffice: "Sub Regional Office, Nanded\nLahoti Complex, 2nd Floor, Near Shivaji Statue, Vajirabad, Nanded-431601.\nContact - 02462 - 242492",
        jurisdiction: "Nanded District.",
        informationOfficer: "Mr. Suryakant Shinde\n(Sub Regional Officer)",
        assistantInfoOfficer: "Mr. Mahesh Chawala\n(Field Officer)",
        appellateOfficer: "Mr. Manish Holkar\n(Regional Officer)"
    },
    {
        id: 22,
        fieldOffice: "Sub Regional Office, Latur\nDev Towers, Opposite Tahsil Office, Latur.413512. Contact - 02382 - 252672",
        jurisdiction: "Latur, Osmanabad District",
        informationOfficer: "Mr. Parmeshwar Naik\n(Sub Regional Officer)",
        assistantInfoOfficer: "Mr. Santosh Kumar Chavan\n(Field Officer)",
        appellateOfficer: "Mr. Manish Holkar\n(Regional Officer)"
    },
    {
        id: 23,
        fieldOffice: "Sub Regional Officer, Jalna\nPlot no. P-3/1 & P-3/2,MIDC Area Jalna, Jalna Aurangabad Road, Jalna 431 203.\nContact - 02482 - 220120",
        jurisdiction: "Jalna and Beed.",
        informationOfficer: "Smt. Sindhu Kapre\n(Sub Regional Officer)",
        assistantInfoOfficer: "Mr. Ravindra Jadhav\n(Field Officer)",
        appellateOfficer: "Mr. Maniesh Holkar\n(Regional Officer)"
    },
    {
        id: 24,
        fieldOffice: "Sub Regional Office, Parbhani\nDevkripa Building, Rangnath Maharaj Nagar, Nandkheda Road, Parbhani 431401. Contact - 02452 - 226687",
        jurisdiction: "Parbhani, Hingoli, District. Tal - Parli-Vaijyanath",
        informationOfficer: "Mr. Somnath Kurmude\n(Sub Regional Officer)",
        assistantInfoOfficer: "Mr. Namdev Darsevad\n(Field Officer)",
        appellateOfficer: "Mr. Manish Holkar\n(Regional Officer)"
    },
    {
        id: 25,
        fieldOffice: "Sub Regional Office, Ahmednagar\nHall No. 2 & 3, Savitribai Phule, Vyaparsankul, Near T.V. centre, Savedi, Ahmednagar-441 003. Contact - 0241 - 2470852",
        jurisdiction: "Ahemdnagar District.",
        informationOfficer: "Mr. Chandrakant Shinde\n(Sub Regional Officer)",
        assistantInfoOfficer: "Mr. Amit Late\n(Field Officer)",
        appellateOfficer: "Mr. Limbaji Bhad\n(Regional Officer)"
    },
    {
        id: 26,
        fieldOffice: "Sub Regional Office,Jalgaon\nLate Shri Bhikamchand Jain Municipal Market Building, Hall No. A , 3rd floor, Jalgaon - 425 001. Contact - 0257 - 2221288",
        jurisdiction: "Jalgaon District.",
        informationOfficer: "Mr. Karan Singh Rajput\n(Sub Regional Officer)",
        assistantInfoOfficer: "Mr. Rajendra P. Suryawanshi\n(Field Officer)",
        appellateOfficer: "Mr. Limbaji Bhad\n(Regional Officer)"
    },
    // Page 4 data - final field offices
    {
        id: 27,
        fieldOffice: "Sub-Regional Office, Dhule\n2nd Floor, Fulchand Plaza, B.C. College Road,Near S.S.V.P.S. Engineering College,Near vidya Nagari,Devpur, Dhule. Contact - 0257 - 2221288",
        jurisdiction: "Dhule, Nandurbar District.",
        informationOfficer: "Mr. Pranav Pakhle\n(Sub Regional Officer)",
        assistantInfoOfficer: "Mr. Nilesh Morankar\n(Field Officer)",
        appellateOfficer: "Mr. Limbaji Bhad\n(Regional Officer)"
    },
    {
        id: 28,
        fieldOffice: "Sub Regional Office, Bhandara\nTatya Tope Ward, Near City Petrol Pump, Miskin Tank, MAHAL Road, Bhandara-441 904. Contact - 07184-258913",
        jurisdiction: "Bhandara and Gondia District.",
        informationOfficer: "Mr. Kishore Pusadkar\n(Sub Regional Officer)",
        assistantInfoOfficer: "Mrs. Shubhangi Sudame\n(Senior Clerk)",
        appellateOfficer: "Mrs. Hema M. Deshpande\n(Regional Officer)"
    },
];

// Head Office list for Online RTI Application submission
const onlineRTIData = [
    {
        id: 1,
        headOffice: "Scientific & Technical, Legal Establishment and Accounts",
        nodalOfficer: "Mr. Bajirao Malvekar (F.O.)",
        systemAdministrator: "Mr. Dinesh Sonawane (S.O.)"
    },
];

// Head Office list of Information Officers
const headOfficeData = [
    {
        id: 1,
        headOffice: "Scientific & Technical",
        jurisdiction: "Mumbai, Thane, Kalyan, Navi Mumbai, Raigad,Nashik",
        informationOfficer: "Mr. Prakash Jadhav\n(Sub Regional Officer)",
        assistantInfoOfficer: "Mr. Prabhakar Wavade\n(Field Officer)",
        appellateOfficer: "Mr. Satish Padwal\n(I/c Air Pollution Prevention Engineer)"
    },
    {
        id: 2,
        headOffice: "Scientific & Technical",
        jurisdiction: "Pune, Kolhapur, Chh.Sambhaji Nagar, Nagpur, Amravati,Chandrapur",
        informationOfficer: "Mr. Ajit Patil\n(Sub Regional Officer)",
        assistantInfoOfficer: "Mrs. Poonam Parshetye\n(Field Officer)",
        appellateOfficer: "Mr. Jagannath Salunkhe\n(Water Pollution Prevention Technical)"
    },
    {
        id: 3,
        headOffice: "Legal",
        jurisdiction: "All Regional Offices, Sub Regional Offices, Central & Regional Laboratory of Board",
        informationOfficer: "-",
        assistantInfoOfficer: "Shri. Subhash Karande\n(Jr. Clerk)",
        appellateOfficer: "Smt.Netra Chapekar\n(Law Officer - 1)"
    },
    {
        id: 4,
        headOffice: "Administration",
        jurisdiction: "All Regional Offices, Sub Regional Offices, Central & Regional Laboratory of Board",
        informationOfficer: "Shri. Rajendra Vispute\n(Office Superintendent)",
        assistantInfoOfficer: "Mr. Arjun Asgaonkar\n(Junior Clerk)",
        appellateOfficer: "Mrs. Nita Bhorade\nAssistant Secretary (Establishment)"
    },
    {
        id: 5,
        headOffice: "Accounts",
        jurisdiction: "All Regional Offices, Sub Regional Offices, Central & RegionalLaboratory of Board",
        informationOfficer: "Smt. Sujata Shetye\n(Accounts Officer)",
        assistantInfoOfficer: "Mrs. Rajendra Meshram\n(Assist. Accountant)",
        appellateOfficer: "Mr. Shyam Kumar Patil\n(Chief Accounts Officer)"
    },
];

function InfoOfficers() {
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
                                Information Officers
                            </h1>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 h-10 bg-linear-to-t from-white to-transparent z-40" />
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="w-full flex justify-center bg-white py-12">
                <div className="w-full max-w-[1000px] px-4">
                    {/* Title */}
                    <h2 className="text-[18px] font-semibold text-[#C17A00] mb-8 text-center">
                        Field office list of Information and Assistant Information Officers and Appelate Officers appointed by the MPCB under the provision of Maharashtra Right to Information Act 2005
                    </h2>

                    {/* Desktop Table View */}
                    <div className="hidden lg:block border border-gray-200 rounded-[35px] overflow-hidden mb-8">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="border-b border-gray-100 bg-gray-50/50">
                                    <th className="py-5 px-4 text-left w-[200px]">
                                        <div className="border border-gray-100 rounded-full py-3 px-4 text-center text-[13px] font-semibold bg-white">
                                            Field Office
                                        </div>
                                    </th>
                                    <th className="py-5 px-2 text-left">
                                        <div className="border border-gray-100 rounded-full py-3 px-4 text-center text-[13px] font-semibold bg-white">
                                            Jurisdiction
                                        </div>
                                    </th>
                                    <th className="py-5 px-2 text-left w-[130px]">
                                        <div className="border border-gray-100 rounded-full py-3 px-4 text-center text-[13px] font-semibold bg-white">
                                            Information officer
                                        </div>
                                    </th>
                                    <th className="py-5 px-2 text-left w-[130px]">
                                        <div className="border border-gray-100 rounded-full py-3 px-4 text-center text-[13px] font-semibold bg-white whitespace-nowrap">
                                            Assistant Information Officer
                                        </div>
                                    </th>
                                    <th className="py-5 px-4 text-left w-[120px]">
                                        <div className="border border-gray-100 rounded-full py-3 px-4 text-center text-[13px] font-semibold bg-white">
                                            Appelate Officer
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {officersData.map((row) => (
                                    <tr key={row.id} className="hover:bg-gray-50/50 transition-colors align-top">
                                        <td className="py-5 px-4 text-[12px] text-gray-700 whitespace-pre-line leading-relaxed">{row.fieldOffice}</td>
                                        <td className="py-5 px-4 text-[12px] text-gray-700 leading-relaxed">{row.jurisdiction}</td>
                                        <td className="py-5 px-4 text-[12px] text-[#0085E2] whitespace-pre-line leading-relaxed">{row.informationOfficer}</td>
                                        <td className="py-5 px-4 text-[12px] text-gray-700 whitespace-pre-line leading-relaxed">{row.assistantInfoOfficer}</td>
                                        <td className="py-5 px-4 text-[12px] text-[#0085E2] whitespace-pre-line leading-relaxed">{row.appellateOfficer}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile Card View */}
                    <div className="lg:hidden space-y-4 mb-12">
                        {officersData.map((row) => (
                            <div key={row.id} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                                <h3 className="text-[15px] font-bold text-gray-800 mb-3 whitespace-pre-line leading-snug">
                                    {row.fieldOffice}
                                </h3>

                                <div className="space-y-3">
                                    <div className="bg-gray-50 rounded-lg p-3 text-[13px] text-gray-700">
                                        <span className="font-semibold block mb-1 text-gray-900">Jurisdiction:</span>
                                        {row.jurisdiction}
                                    </div>

                                    <div className="grid grid-cols-1 gap-2 border-t border-gray-100 pt-3">
                                        <div className="flex justify-between items-start">
                                            <span className="text-[12px] font-medium text-gray-500">Information Officer</span>
                                            <span className="text-[12px] text-[#0085E2] font-medium text-right whitespace-pre-line">{row.informationOfficer}</span>
                                        </div>
                                        <div className="flex justify-between items-start">
                                            <span className="text-[12px] font-medium text-gray-500">Asst. Info Officer</span>
                                            <span className="text-[12px] text-gray-700 text-right whitespace-pre-line">{row.assistantInfoOfficer}</span>
                                        </div>
                                        <div className="flex justify-between items-start">
                                            <span className="text-[12px] font-medium text-gray-500">Appellate Officer</span>
                                            <span className="text-[12px] text-[#0085E2] font-medium text-right whitespace-pre-line">{row.appellateOfficer}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Online RTI Application Section */}
                    <h2 className="text-[16px] font-semibold text-[#C17A00] mb-6 mt-12">
                        Head Office list for Online RTI Application submission to these following Officers appointed by the MPCB under the provision of Maharashtra Right to Information Act 2005 (As on 21st May 2025)
                    </h2>

                    {/* Desktop Table View */}
                    <div className="hidden lg:block border border-gray-200 rounded-[35px] overflow-hidden mb-8">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="border-b border-gray-100 bg-gray-50/50">
                                    <th className="py-5 px-4 text-left">
                                        <div className="border border-gray-100 rounded-full py-3 px-4 text-center text-[13px] font-semibold bg-white">
                                            Head Office
                                        </div>
                                    </th>
                                    <th className="py-5 px-4 text-left">
                                        <div className="border border-gray-100 rounded-full py-3 px-4 text-center text-[13px] font-semibold bg-white">
                                            Nodal Officer
                                        </div>
                                    </th>
                                    <th className="py-5 px-4 text-left">
                                        <div className="border border-gray-100 rounded-full py-3 px-4 text-center text-[13px] font-semibold bg-white">
                                            System Administrator
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {onlineRTIData.map((row) => (
                                    <tr key={row.id} className="hover:bg-gray-50/50 transition-colors align-top">
                                        <td className="py-5 px-4 text-[12px] text-gray-700">{row.headOffice}</td>
                                        <td className="py-5 px-4 text-[12px] text-[#0085E2]">{row.nodalOfficer}</td>
                                        <td className="py-5 px-4 text-[12px] text-[#0085E2]">{row.systemAdministrator}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile Card View */}
                    <div className="lg:hidden space-y-4 mb-8">
                        {onlineRTIData.map((row) => (
                            <div key={row.id} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                                <h3 className="text-[15px] font-bold text-gray-800 mb-3">
                                    {row.headOffice}
                                </h3>

                                <div className="space-y-3 pt-2 border-t border-gray-100">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[12px] font-medium text-gray-500">Nodal Officer</span>
                                        <span className="text-[13px] text-[#0085E2] font-medium">{row.nodalOfficer}</span>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[12px] font-medium text-gray-500">System Administrator</span>
                                        <span className="text-[13px] text-[#0085E2] font-medium">{row.systemAdministrator}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Head Office Information Officers Section */}
                    <h2 className="text-[16px] font-semibold text-[#C17A00] mb-6 mt-12">
                        Head Office list of Information and Assistant Information Officers and Appelate Officers appointed by the MPCB under the provision of Maharashtra Right to Information Act 2005 (As on 04th Oct 2024) & (As on 21st May 2025)
                    </h2>

                    {/* Desktop Table View */}
                    <div className="hidden lg:block border border-gray-200 rounded-[35px] overflow-hidden mb-8">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="border-b border-gray-100 bg-gray-50/50">
                                    <th className="py-5 px-4 text-left w-[150px]">
                                        <div className="border border-gray-100 rounded-full py-3 px-4 text-center text-[13px] font-semibold bg-white">
                                            Head Office
                                        </div>
                                    </th>
                                    <th className="py-5 px-2 text-left">
                                        <div className="border border-gray-100 rounded-full py-3 px-4 text-center text-[13px] font-semibold bg-white">
                                            Jurisdiction
                                        </div>
                                    </th>
                                    <th className="py-5 px-2 text-left w-[150px]">
                                        <div className="border border-gray-100 rounded-full py-3 px-4 text-center text-[13px] font-semibold bg-white">
                                            Information officer
                                        </div>
                                    </th>
                                    <th className="py-5 px-2 text-left w-[150px]">
                                        <div className="border border-gray-100 rounded-full py-3 px-4 text-center text-[13px] font-semibold bg-white whitespace-nowrap">
                                            Assitant Information Officer
                                        </div>
                                    </th>
                                    <th className="py-5 px-4 text-left w-[150px]">
                                        <div className="border border-gray-100 rounded-full py-3 px-4 text-center text-[13px] font-semibold bg-white">
                                            Appelate Officer
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {headOfficeData.map((row) => (
                                    <tr key={row.id} className="hover:bg-gray-50/50 transition-colors align-top">
                                        <td className="py-5 px-4 text-[12px] text-gray-700">{row.headOffice}</td>
                                        <td className="py-5 px-4 text-[12px] text-gray-700">{row.jurisdiction}</td>
                                        <td className="py-5 px-4 text-[12px] text-[#0085E2] whitespace-pre-line">{row.informationOfficer}</td>
                                        <td className="py-5 px-4 text-[12px] text-gray-700 whitespace-pre-line">{row.assistantInfoOfficer}</td>
                                        <td className="py-5 px-4 text-[12px] text-[#0085E2] whitespace-pre-line">{row.appellateOfficer}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile Card View */}
                    <div className="lg:hidden space-y-4 mb-8">
                        {headOfficeData.map((row) => (
                            <div key={row.id} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                                <h3 className="text-[15px] font-bold text-gray-800 mb-3">
                                    {row.headOffice}
                                </h3>

                                <div className="space-y-3">
                                    <div className="bg-gray-50 rounded-lg p-3 text-[13px] text-gray-700">
                                        <span className="font-semibold block mb-1 text-gray-900">Jurisdiction:</span>
                                        {row.jurisdiction}
                                    </div>

                                    <div className="grid grid-cols-1 gap-2 border-t border-gray-100 pt-3">
                                        <div className="flex justify-between items-start">
                                            <span className="text-[12px] font-medium text-gray-500">Information Officer</span>
                                            <span className="text-[12px] text-[#0085E2] font-medium text-right whitespace-pre-line">{row.informationOfficer}</span>
                                        </div>
                                        <div className="flex justify-between items-start">
                                            <span className="text-[12px] font-medium text-gray-500">Asst. Info Officer</span>
                                            <span className="text-[12px] text-gray-700 text-right whitespace-pre-line">{row.assistantInfoOfficer}</span>
                                        </div>
                                        <div className="flex justify-between items-start">
                                            <span className="text-[12px] font-medium text-gray-500">Appellate Officer</span>
                                            <span className="text-[12px] text-[#0085E2] font-medium text-right whitespace-pre-line">{row.appellateOfficer}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default InfoOfficers;