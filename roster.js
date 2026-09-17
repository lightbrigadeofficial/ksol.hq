/* =========================================================
   KSOL PERSONNEL REGISTER
   ========================================================= */


/*
    =========================================================
    PERSONNEL DATABASE
    =========================================================

    Every actual person is stored here.

    The organizational hierarchy is defined separately below.

    IMPORTANT:

    A PERSON has:
        - name
        - rank
        - status
        - unit
        - appointment

    A UNIT has:
        - command appointment
        - child units
        - directly assigned personnel


    Example:

        Vex
        unit: "7 PARA"
        appointment: "CO, Parachute Regiment"

    This means Vex belongs to 7 PARA while holding the
    regimental CO appointment.

    The hierarchy therefore becomes:

        Parachute Regiment
        ├── CO, Parachute Regiment — Vex
        │
        └── 7 Para Bn
            ├── CO, 7 Para Bn — Diabeto
            └── Alpha Coy
*/


const personnel = {

    /* =====================================================
       HEADQUARTERS
    ===================================================== */

    obi: {
        name: 'GEN. "Obi"',
        rank: "GEN",
        callsign: "COMMANDER",
        serviceNumber: "KSOL-2601",
        status: "active",
        unit: "HQ",
        appointment: "Commander, KSOL",
        joinDate: "2026",
        note: "Commander, Kali Special Operations Legion."
    },

    wolf: {
        name: 'LTG. "Wolf"',
        rank: "LTG",
        callsign: "2I/C",
        serviceNumber: "KSOL-2611",
        status: "active",
        unit: "HQ",
        appointment: "2i/c, KSOL",
        joinDate: "2026",
        note: "Second-in-command, Kali Special Operations Legion."
    },


    /* =====================================================
       DIRECTOR GENERAL APPOINTMENTS
    ===================================================== */

    dgTraining: {
        name: "N/A",
        rank: "—",
        callsign: "—",
        serviceNumber: "-",
        status: "vacant",
        unit: "Training Command",
        appointment: "Director General, Training Command",
        joinDate: "-",
        note: "Current Director General of Training Command."
    },

    dgRecruitment: {
        name: "N/A",
        rank: "—",
        callsign: "—",
        serviceNumber: "-",
        status: "vacant",
        unit: "Recruitment Command",
        appointment: "Director General, Recruitment Command",
        joinDate: "-",
        note: "Current Director General of Recruitment Command."
    },

    dgOperations: {
        name: 'COL. "Councillor Jasko"',
        rank: "COL",
        callsign: "—",
        serviceNumber: "-",
        status: "active",
        unit: "Military Operations",
        appointment: "Director General, Military Operations",
        joinDate: "2026",
        note: "Current Director General of Military Operations."
    },

    dgInternal: {
        name: 'COL. "Border"',
        rank: "—",
        callsign: "—",
        serviceNumber: "-",
        status: "active",
        unit: "Internal Affairs",
        appointment: "Director General, Internal Affairs",
        joinDate: "2026",
        note: "Current Director General of Internal Affairs."
    },

    dgPublicRelations: {
        name: 'COL. "Fuego"',
        rank: "—",
        callsign: "—",
        serviceNumber: "KSOL-DG05",
        status: "active",
        unit: "Public Relations",
        appointment: "Director General, Public Relations",
        joinDate: "2026",
        note: "Current Director General of Public Relations."
    },

    dgAdministrative: {
        name: 'COL. "Golden"',
        rank: "COL",
        callsign: "—",
        serviceNumber: "-",
        status: "active",
        unit: "Administrative Duties",
        appointment: "Director General, Administrative Duties",
        joinDate: "2026",
        note: "Current Director General of Administrative Duties."
    },


    /* =====================================================
       TRAINING COMMAND
    ===================================================== */

    john: {
        name: "N/A",
        rank: "—",
        callsign: "—",
        serviceNumber: "KSOL-0101",
        status: "active",
        unit: "Training Command",
        appointment: "Adjutant, Military Training Command",
        joinDate: "2026",
        note: ""
    },

    doe: {
        name: "N/A",
        rank: "—",
        callsign: "—",
        serviceNumber: "-",
        status: "active",
        unit: "Training Command",
        appointment: "Adjutant, Aerial Training Command",
        joinDate: "2026",
        note: ""
    },

    lorem: {
        name: "N/A",
        rank: "—",
        callsign: "—",
        serviceNumber: "KSOL-0103",
        status: "active",
        unit: "Training Command",
        appointment: "Adjutant, Overwatch Training Command",
        joinDate: "2026",
        note: ""
    },

    ipsum: {
        name: "N/A",
        rank: "—",
        callsign: "—",
        serviceNumber: "KSOL-0104",
        status: "active",
        unit: "Training Command",
        appointment: "Adjutant, Officers Training Academy",
        joinDate: "2026",
        note: ""
    },

    ary: {
        name: 'COL. "Border"',
        rank: "—",
        callsign: "—",
        serviceNumber: "KSOL-0110",
        status: "active",
        unit: "Training Command",
        appointment: "Instructor",
        joinDate: "2026",
        note: ""
    },

    raine: {
        name: 'COL. "Fuego"',
        rank: "—",
        callsign: "—",
        serviceNumber: "KSOL-0111",
        status: "active",
        unit: "Training Command",
        appointment: "Instructor",
        joinDate: "2026",
        note: ""
    },

    caleb: {
        name: "",
        rank: "—",
        callsign: "—",
        serviceNumber: "KSOL-0112",
        status: "active",
        unit: "Training Command",
        appointment: "Instructor",
        joinDate: "2026",
        note: ""
    },


    /* =====================================================
       RECRUITMENT COMMAND
    ===================================================== */

    max: {
        name: 'COL. "Maverick"',
        rank: "—",
        callsign: "—",
        serviceNumber: "-",
        status: "active",
        unit: "Recruitment Command",
        appointment: "Recruiter",
        joinDate: "2026",
        note: ""
    },

    lewes: {
        name: 'CPT. "Dark"',
        rank: "—",
        callsign: "—",
        serviceNumber: "KSOL-0202",
        status: "active",
        unit: "Recruitment Command",
        appointment: "Recruiter",
        joinDate: "2026",
        note: ""
    },

    freddie: {
        name: "",
        rank: "—",
        callsign: "—",
        serviceNumber: "KSOL-0203",
        status: "active",
        unit: "Recruitment Command",
        appointment: "Recruiter",
        joinDate: "2026",
        note: ""
    },


    /* =====================================================
       PARACHUTE REGIMENT
    ===================================================== */

    vex: {
        name: 'COL. "Vex"',
        rank: "COL",
        callsign: "—",
        serviceNumber: "KSOL-0301",
        status: "active",

        /*
            Vex belongs to 7 PARA.

            However, his appointment is:

                CO, Parachute Regiment
        */

        unit: "7 PARA",
        appointment: "CO, Parachute Regiment",

        joinDate: "2026",
        note: "Regimental Commanding Officer; assigned to 7 PARA."
    },


    /* =====================================================
       7 PARA BATTALION
    ===================================================== */

    vexa: {
        name: 'LTC. "Diabeto"',
        rank: "COL",
        callsign: "—",
        serviceNumber: "KSOL-0302",
        status: "active",
        unit: "7 PARA",
        appointment: "CO, 7 Para Bn",
        joinDate: "2026",
        note: ""
    },

    dark: {
        name: 'CPT. "Dark"',
        rank: "MAJ",
        callsign: "—",
        serviceNumber: "KSOL-0303",
        status: "active",
        unit: "7 PARA",
        appointment: "Alpha Coy Cdr",
        joinDate: "2026",
        note: ""
    },

    bravo: {
        name: '2LT. "Max"',
        rank: "2LT",
        callsign: "—",
        serviceNumber: "KSOL-0304",
        status: "active",
        unit: "7 PARA",
        appointment: "1st Platoon Cdr",
        joinDate: "2026",
        note: ""
    },

    border: {
        name: 'SSG. "Slowed"',
        rank: "SSG",
        callsign: "—",
        serviceNumber: "KSOL-0305",
        status: "active",
        unit: "7 PARA",
        appointment: "1st Squad Leader",
        joinDate: "2026",
        note: "Operational element — 9 personnel including Squad Leader."
    },

    x: {
        name: 'SGT. "Mos"',
        rank: "SSG",
        callsign: "—",
        serviceNumber: "KSOL-0306",
        status: "active",
        unit: "7 PARA",
        appointment: "2nd Squad Leader",
        joinDate: "2026",
        note: ""
    },

    y: {
        name: "N/A",
        rank: "SSG",
        callsign: "—",
        serviceNumber: "KSOL-0307",
        status: "active",
        unit: "7 PARA",
        appointment: "3rd Squad Leader",
        joinDate: "2026",
        note: ""
    },


    /* =====================================================
       OTHER UNITS
    ===================================================== */

    z: {
        name: 'GEN. "Obi"',
        rank: "COL",
        callsign: "—",
        serviceNumber: "KSOL-0401",
        status: "active",
        unit: "SIS",
        appointment: "CO, Special Insertion Service",
        joinDate: "2026",
        note: ""
    },

    a: {
        name: 'COL. "Enoch"',
        rank: "COL",
        callsign: "—",
        serviceNumber: "KSOL-0501",
        status: "active",
        unit: "AAC",
        appointment: "CO, Army Aviation Corps",
        joinDate: "2026",
        note: ""
    },

    b: {
        name: 'COL. "Rook"',
        rank: "COL",
        callsign: "Rook",
        serviceNumber: "KSOL-0601",
        status: "active",
        unit: "AMC",
        appointment: "CO, Army Medical Corps",
        joinDate: "2026",
        note: ""
    },

    c: {
        name: 'COL. "NaCl"',
        rank: "COL",
        callsign: "—",
        serviceNumber: "KSOL-0701",
        status: "active",
        unit: "RECON",
        appointment: "CO, Recon Group",
        joinDate: "2026",
        note: ""
    },

    e: {
        name: 'COL. "Maverick"',
        rank: "COL",
        callsign: "—",
        serviceNumber: "KSOL-0801",
        status: "active",
        unit: "ASC",
        appointment: "CO, Army Service Corps",
        joinDate: "2026",
        note: ""
    }
,


    /* =====================================================
       ADDITIONAL PERSONNEL — ADDED ROSTER RECORDS
    ===================================================== */

    // paraReg01: { name: 'MAJ. "Hawk"', rank: "MAJ", callsign: "—", serviceNumber: "KSOL-0310", status: "active", unit: "Parachute Regiment", appointment: "Regimental Staff", joinDate: "2026", note: "" },
    // paraReg02: { name: 'CPT. "Raven"', rank: "CPT", callsign: "—", serviceNumber: "KSOL-0311", status: "active", unit: "Parachute Regiment", appointment: "Regimental Staff", joinDate: "2026", note: "" },
    // paraReg03: { name: 'WO1. "Atlas"', rank: "WO1", callsign: "—", serviceNumber: "KSOL-0312", status: "active", unit: "Parachute Regiment", appointment: "Regimental Staff", joinDate: "2026", note: "" },

    // para7_01: { name: 'MAJ. "Stone"', rank: "MAJ", callsign: "—", serviceNumber: "KSOL-0313", status: "active", unit: "7 PARA", appointment: "Battalion Staff", joinDate: "2026", note: "" },
    // para7_02: { name: 'SSG. "Rook"', rank: "SSG", callsign: "—", serviceNumber: "KSOL-0314", status: "active", unit: "7 PARA", appointment: "Battalion Staff", joinDate: "2026", note: "" },
    // para7_03: { name: 'SGT. "Nomad"', rank: "SGT", callsign: "—", serviceNumber: "KSOL-0315", status: "active", unit: "7 PARA", appointment: "Battalion Staff", joinDate: "2026", note: "" },

    // alpha01: { name: 'CPL. "Viper"', rank: "CPL", callsign: "—", serviceNumber: "KSOL-0316", status: "active", unit: "7 PARA", appointment: "Alpha Coy", joinDate: "2026", note: "" },
    // alpha02: { name: 'LCPL. "Raptor"', rank: "LCPL", callsign: "—", serviceNumber: "KSOL-0317", status: "active", unit: "7 PARA", appointment: "Alpha Coy", joinDate: "2026", note: "" },
    // alpha03: { name: 'PTE. "Ghost"', rank: "PTE", callsign: "—", serviceNumber: "KSOL-0318", status: "active", unit: "7 PARA", appointment: "Alpha Coy", joinDate: "2026", note: "" },

    platoon1_01: { name: '"Border"', rank: "COL", callsign: "Border", serviceNumber: "KS-2602", status: "active", unit: "7th PARA BN", appointment: "1st Platoon", joinDate: "09 Aug 2026", note: "" },
    platoon1_02: { name: '"Golden"', rank: "COL", callsign: "Golden", serviceNumber: "KS-2617", status: "active", unit: "7th PARA BN", appointment: "1st Platoon", joinDate: "26 Jul 2026", note: "" },
    platoon1_03: { name: '"Coolguy"', rank: "LGN", callsign: "Coolguy", serviceNumber: "KS-2627", status: "inactive", unit: "7th PARA BN", appointment: "1st Platoon", joinDate: "21 Jul 2026", note: "" },
    platoon1_04: { name: '"Cats"', rank: "LGN", callsign: "Cats", serviceNumber: "KS-2628", status: "active", unit: "7th PARA BN", appointment: "1st Platoon", joinDate: "10 Aug 2026", note: "" },
    platoon1_05: { name: '"Templar"', rank: "LGN", callsign: "Templar", serviceNumber: "KS-2632", status: "active", unit: "7th PARA BN", appointment: "1st Platoon", joinDate: "13 Aug 2026", note: "" },
    platoon1_06: { name: '"Rysea"', rank: "LGN", callsign: "Rysea", serviceNumber: "KS-2634", status: "active", unit: "7th PARA BN", appointment: "1st Platoon", joinDate: "02 Sep 2026", note: "" },
    platoon1_07: { name: '"Sansi"', rank: "LGN", callsign: "Sansi", serviceNumber: "KS-2620", status: "active", unit: "7th PARA BN", appointment: "1st Platoon", joinDate: "31 Aug 2026", note: "" },
    platoon1_08: { name: '"Hotdog"', rank: "LGN", callsign: "Hotdog", serviceNumber: "KS-2633", status: "active", unit: "7th PARA BN", appointment: "1st Platoon", joinDate: "09 Aug 2026", note: "" },
    platoon1_09: { name: '"Fallen"', rank: "LGN", callsign: "Fallen", serviceNumber: "KS-2610", status: "active", unit: "7th PARA BN", appointment: "1st Platoon", joinDate: "10 Aug 2026", note: "" },


    // bravo01: { name: 'CPT. "Archer"', rank: "CPT", callsign: "—", serviceNumber: "KSOL-0322", status: "active", unit: "7 PARA", appointment: "Bravo Coy", joinDate: "2026", note: "" },
    // bravo02: { name: 'SGT. "Kodiak"', rank: "SGT", callsign: "—", serviceNumber: "KSOL-0323", status: "active", unit: "7 PARA", appointment: "Bravo Coy", joinDate: "2026", note: "" },
    // bravo03: { name: 'PTE. "Ranger"', rank: "PTE", callsign: "—", serviceNumber: "KSOL-0324", status: "active", unit: "7 PARA", appointment: "Bravo Coy", joinDate: "2026", note: "" },

    sis01: { name: '"Wolf"', rank: "LTG", callsign: "Wolf", serviceNumber: "KS-2611", status: "loa", unit: "SIS", appointment: "Operator", joinDate: "29 Jul 2026", note: "" },
    sis02: { name: 'SSG. "Cipher"', rank: "SSG", callsign: "—", serviceNumber: "KSOL-0403", status: "active", unit: "SIS", appointment: "Operator", joinDate: "2026", note: "" },
    sis03: { name: 'CPL. "Shade"', rank: "CPL", callsign: "—", serviceNumber: "KSOL-0404", status: "active", unit: "SIS", appointment: "Operator", joinDate: "2026", note: "" },

    aac01: { name: '"Hitman"', rank: "LGN", callsign: "Hitman", serviceNumber: "KS-2607", status: "active", unit: "AAC", appointment: "Pilot", joinDate: "16 Aug2026", note: "" },
    aac02: { name: '"Bravo 0-6"', rank: "LGN", callsign: "Bravo 0-6", serviceNumber: "KS-2626", status: "active", unit: "AAC", appointment: "-", joinDate: "02 Aug 2026", note: "" },
    aac03: { name: 'WO1. "Rotor"', rank: "WO1", callsign: "—", serviceNumber: "KSOL-0504", status: "active", unit: "AAC", appointment: "Aircrew", joinDate: "2026", note: "" },

    amc01: { name: '"Warthog"', rank: "LGN", callsign: "Warthog", serviceNumber: "KS-2608", status: "active", unit: "AMC", appointment: "Medic", joinDate: "09 Aug 2026", note: "" },
    amc02: { name: '"Felon"', rank: "LGN", callsign: "Felon", serviceNumber: "KS-2624", status: "active", unit: "AMC", appointment: "Medic", joinDate: "22 Aug 2026", note: "" },
    amc03: { name: '"###"', rank: "SGT", callsign: "—", serviceNumber: "KSOL-0604", status: "active", unit: "AMC", appointment: "Medic", joinDate: "2026", note: "" },

    recon01: { name: '"Leviathan"', rank: "LGN", callsign: "Leviathan", serviceNumber: "KS-2619", status: "active", unit: "RECON", appointment: "Marksman", joinDate: "04 Aug 2026", note: "" },
    recon02: { name: '"Silentdeath"', rank: "LGN", callsign: "Silentdeath", serviceNumber: "KS-2621", status: "active", unit: "RECON", appointment: "Marksman", joinDate: "10 Sep 2026", note: "" },
    recon03: { name: '"Councillor Jasko"', rank: "COL", callsign: "Councillor Jasko", serviceNumber: "KS-2618", status: "active", unit: "RECON", appointment: "Marksman", joinDate: "08 Aug 2026", note: "" },
    recon04: { name: '"Albert"', rank: "LGN", callsign: "Albert", serviceNumber: "KS-2622", status: "active", unit: "RECON", appointment: "Marksman", joinDate: "02 Sep 2026", note: "" },
    recon05: { name: '"Newmate"', rank: "LGN", callsign: "Newmate", serviceNumber: "KS-2623", status: "active", unit: "RECON", appointment: "Marksman", joinDate: "05 Sep 2026", note: "" },
    recon06: { name: '"VelvetVampire"', rank: "LGN", callsign: "VelvetVampire", serviceNumber: "KS-2631", status: "active", unit: "RECON", appointment: "Marksman", joinDate: "14 Sep 2026", note: "" },

    asc01: { name: '"Fuego"', rank: "COL", callsign: "Fuego", serviceNumber: "KS-2625", status: "active", unit: "ASC", appointment: "-", joinDate: "03 Aug 2026", note: "" },
    asc02: { name: '"Dachi"', rank: "LGN", callsign: "Dachi", serviceNumber: "KS-2629", status: "active", unit: "ASC", appointment: "-", joinDate: "02 Sep 2026", note: "" },
    asc03: { name: '"Xx"', rank: "LGN", callsign: "Xx", serviceNumber: "KS-2630", status: "active", unit: "ASC", appointment: "-", joinDate: "09 Aug 2026", note: "" },

    trail01: {name: 'GEN. "Obi"', rank: "GEN", callsign: "Obi", serviceNumber: "KS-2601", status: "active", unit: "SIS", appointment: "Commander, KSOL", joinDate: "N/A"},
    trail02: {name: 'COL. "Border"', rank: "COL", callsign: "Obi", serviceNumber: "KS-2602", status: "active", unit: "7th PARA BN", appointment: "DG Internal Affairs", joinDate: "N/A"},
    trail03: {name: 'CPT. "Dark"', rank: "CPT", callsign: "Dark", serviceNumber: "KS-2605", status: "active", unit: "7th PARA BN", appointment: "Alpha Company Commander", joinDate: "N/A"},

    rge01: {name: 'COL. "NaCl"', rank: "CPT", callsign: "Dark", serviceNumber: "KS-2605", status: "active", unit: "7th PARA BN", appointment: "Alpha Company Commander", joinDate: "N/A"},

    content01: {name: 'COL. "Fuego"', rank: "CPT", callsign: "Dark", serviceNumber: "KS-2605", status: "active", unit: "7th PARA BN", appointment: "Alpha Company Commander", joinDate: "N/A"},

};


/* =========================================================
   ORGANIZATIONAL STRUCTURE
   =========================================================

   TYPES:

       category
       directorate
       unit
       appointment


   UNIT STRUCTURE:

       unit
       ├── command
       ├── children
       └── personnel


   This makes the roster future-proof.

   Example:

       Parachute Regiment
       ├── CO, Parachute Regiment
       │
       ├── 7 Para Bn
       │   ├── CO, 7 Para Bn
       │   ├── Alpha Coy
       │   │   ├── Alpha Coy Cdr
       │   │   ├── 1st Platoon
       │   │   │   ├── 1st Platoon Cdr
       │   │   │   ├── 1st Squad Leader
       │   │   │   ├── 2nd Squad Leader
       │   │   │   └── 3rd Squad Leader
       │   │   └── 2nd Platoon
       │   │       ├── 1st Squad Leader
       │   │       ├── 2nd Squad Leader
       │   │       └── 3rd Squad Leader
       │   └── Bravo Coy
       │
       └── 12 Para Bn
           ...
*/


const roster = [

    /* =====================================================
       HQ
    ===================================================== */

    {
        type: "category",
        title: "HQ",

        children: [

            {
                type: "appointment",
                title: "Commander, KSOL",
                personnel: ["obi"]
            },

            {
                type: "appointment",
                title: "2i/c, KSOL",
                personnel: ["wolf"]
            }

        ]
    },


    /* =====================================================
       DIRECTORATES
    ===================================================== */

    {
        type: "category",
        title: "Directorates",

        children: [

            /* =============================================
               TRAINING COMMAND
            ============================================= */

            {
                type: "directorate",
                title: "Training Command",

                children: [

                    {
                        type: "appointment",
                        title: "Director General, Training Command",
                        personnel: ["dgTraining"]
                    },

                    {
                        type: "appointment",
                        title: "Adjutant, Military Training Command",
                        personnel: ["john"]
                    },

                    {
                        type: "appointment",
                        title: "Adjutant, Aerial Training Command",
                        personnel: ["doe"]
                    },

                    {
                        type: "appointment",
                        title: "Adjutant, Overwatch Training Command",
                        personnel: ["lorem"]
                    },

                    {
                        type: "appointment",
                        title: "Adjutant, Officers Training Academy",
                        personnel: ["ipsum"]
                    },

                    {
                        type: "appointment",
                        title: "Instructors",
                        personnel: [
                            "ary",
                            "raine",
                            "caleb"
                        ]
                    }

                ]
            },


            /* =============================================
               RECRUITMENT COMMAND
            ============================================= */

            {
                type: "directorate",
                title: "Recruitment Command",

                children: [

                    {
                        type: "appointment",
                        title: "Director General, Recruitment Command",
                        personnel: ["dgRecruitment"]
                    },

                    {
                        type: "appointment",
                        title: "Recruiters",
                        personnel: [
                            "max",
                            "lewes",
                            "freddie"
                        ]
                    }

                ]
            },


            /* =============================================
               MILITARY OPERATIONS
            ============================================= */

            {
                type: "directorate",
                title: "Military Operations",

                children: [

                    {
                        type: "appointment",
                        title: "Director General, Military Operations",
                        personnel: ["dgOperations"]
                    },


                    /* =====================================
                       PARACHUTE REGIMENT
                    ===================================== */

                    {
                        type: "unit",

                        id: "para",

                        title: "Parachute Regiment",

                        abbreviation: "PARA REGT",


                        /*
                            REGIMENTAL COMMAND

                            This is an appointment.

                            It is NOT the parent of 7 Para Bn.
                        */

                        command: {

                            type: "appointment",

                            title: "CO, Parachute Regiment",

                            personnel: [
                                "vex"
                            ]

                        },


                        /*
                            REGIMENTAL SUBORDINATE UNITS

                            Battalions go here.

                            7 PARA is currently the only battalion.

                            12 PARA is deliberately NOT included yet.
                        */

                        children: [

                            /* =================================
                               7 PARA BATTALION
                            ================================= */

                            {
                                type: "unit",

                                id: "para7",

                                title: "7 Para Bn",

                                abbreviation: "7 PARA",


                                /* -----------------------------
                                   BATTALION COMMAND
                                ----------------------------- */

                                command: {

                                    type: "appointment",

                                    title: "CO, 7 Para Bn",

                                    personnel: [
                                        "vexa"
                                    ]

                                },


                                /* -----------------------------
                                   COMPANIES
                                ----------------------------- */

                                children: [

                                    /* =============================
                                       ALPHA COMPANY
                                    ============================= */

                                    {
                                        type: "unit",

                                        id: "alpha",

                                        title: "Alpha Coy",

                                        abbreviation: "ALPHA",


                                        command: {

                                            type: "appointment",

                                            title: "Alpha Coy Cdr",

                                            personnel: [
                                                "dark"
                                            ]

                                        },


                                        children: [

                                            /* =========================
                                               1ST PLATOON
                                            ========================= */

                                            {
                                                type: "unit",

                                                id: "platoon1",

                                                title: "1st Platoon",

                                                abbreviation: "1 PL",


                                                command: {

                                                    type: "appointment",

                                                    title: "1st Platoon Cdr",

                                                    personnel: [
                                                        "bravo"
                                                    ]

                                                },


                                                children: [

                                                    {
                                                        type: "appointment",

                                                        title: "1st Squad Leader",

                                                        personnel: [
                                                            "border"
                                                        ]

                                                    },

                                                    {
                                                        type: "appointment",

                                                        title: "2nd Squad Leader",

                                                        personnel: [
                                                            "x"
                                                        ]

                                                    },

                                                    {
                                                        type: "appointment",

                                                        title: "3rd Squad Leader",

                                                        personnel: [
                                                            "y"
                                                        ]

                                                    }

                                                ],


                                                /*
                                                    PERSONNEL DIRECTLY
                                                    ASSIGNED TO 1ST PLATOON.

                                                    These are NOT holding
                                                    one of the appointments
                                                    above.

                                                    Add them here later:

                                                        personnel: [
                                                            "person1",
                                                            "person2"
                                                        ]
                                                */

                                                personnel: ["platoon1_01", "platoon1_02", "platoon1_03", "platoon1_04", "platoon1_05", "platoon1_06" ,"platoon1_07", "platoon1_08", "platoon1_09"]

                                            },


                                                                                        /* 2ND PLATOON — HIDDEN FOR NOW */



                                        ],


                                        /*
                                            Personnel directly assigned
                                            to Alpha Company.
                                        */

                                        personnel: ["alpha01", "alpha02", "alpha03"]

                                    },


                                    /* =============================
                                       BRAVO COMPANY
                                    ============================= */

                                    {
                                        type: "unit",

                                        id: "bravo",

                                        title: "Bravo Coy",

                                        abbreviation: "BRAVO",

                                        command: null,

                                        children: [],

                                        personnel: ["bravo01", "bravo02", "bravo03"]

                                    }

                                ],


                                /*
                                    Personnel directly assigned to
                                    7 Para Bn but not placed in a
                                    subordinate company.
                                */

                                personnel: ["para7_01", "para7_02", "para7_03"]

                            }

                            /*
                                =================================================
                                FUTURE 12 PARA BN
                                =================================================

                                When you want to add 12 Para Bn, put it HERE,
                                beside para7.

                                Example:

                                {
                                    type: "unit",

                                    id: "para12",

                                    title: "12 Para Bn",

                                    abbreviation: "12 PARA",

                                    command: {
                                        type: "appointment",
                                        title: "CO, 12 Para Bn",
                                        personnel: []
                                    },

                                    children: [
                                        ...
                                    ],

                                    personnel: []
                                }

                                This means:

                                Parachute Regiment
                                ├── CO, Parachute Regiment
                                ├── 7 Para Bn
                                └── 12 Para Bn

                                NOT:

                                Parachute Regiment
                                └── CO, Parachute Regiment
                                    └── 12 Para Bn
                            */
                        ],


                        /*
                            Personnel directly assigned to the
                            Parachute Regiment itself.

                            Currently none.
                        */

                        personnel: ["paraReg01", "paraReg02", "paraReg03"]

                    },


                    /* =====================================
                       SPECIAL INSERTION SERVICE
                    ===================================== */

                    {
                        type: "unit",

                        id: "sis",

                        title: "Special Insertion Service",

                        abbreviation: "SIS",

                        command: {

                            type: "appointment",

                            title: "CO, Special Insertion Service",

                            personnel: ["z"]

                        },

                        children: [],

                        personnel: ["sis01"]

                    },


                    /* =====================================
                       ARMY AVIATION CORPS
                    ===================================== */

                    {
                        type: "unit",

                        id: "aac",

                        title: "Army Aviation Corps",

                        abbreviation: "AAC",

                        command: {

                            type: "appointment",

                            title: "CO, Army Aviation Corps",

                            personnel: ["a"]

                        },

                        children: [],

                        personnel: ["aac01", "aac02"]

                    },


                    /* =====================================
                       ARMY MEDICAL CORPS
                    ===================================== */

                    {
                        type: "unit",

                        id: "amc",

                        title: "Army Medical Corps",

                        abbreviation: "AMC",

                        command: {

                            type: "appointment",

                            title: "CO, Army Medical Corps",

                            personnel: ["b"]

                        },

                        children: [],

                        personnel: ["amc01", "amc02"]

                    },


                    /* =====================================
                       RECON
                    ===================================== */

                    {
                        type: "unit",

                        id: "recon",

                        title: "Recon Group",

                        abbreviation: "RECON",

                        command: {

                            type: "appointment",

                            title: "CO, Recon Group",

                            personnel: ["c"]

                        },

                        children: [],

                        personnel: ["recon01", "recon02", "recon03", "recon04", "recon05", "recon06"]

                    },


                    /* =====================================
                       ARMY SERVICE CORPS
                    ===================================== */

                    {
                        type: "unit",

                        id: "asc",

                        title: "Army Service Corps",

                        abbreviation: "ASC",

                        command: {

                            type: "appointment",

                            title: "CO, Army Service Corps",

                            personnel: ["e"]

                        },

                        children: [],

                        personnel: ["asc01", "asc02", "asc03"]

                    }

                ]
            },


            /* =============================================
               INTERNAL AFFAIRS
            ============================================= */

            {
                type: "directorate",
                title: "Internal Affairs",

                children: [

                    {
                        type: "appointment",
                        title: "Director General, Internal Affairs",
                        personnel: ["dgInternal"]
                    },

                    {
                        type: "appointment",
                        title: "Trial Jury",
                        personnel: ["trail01", "trail02", "trail03"]
                    }

                ]
            },


            /* =============================================
               PUBLIC RELATIONS
            ============================================= */

            {
                type: "directorate",
                title: "Public Relations",

                children: [

                    {
                        type: "appointment",
                        title: "Director General, Public Relations",
                        personnel: ["dgPublicRelations"]
                    },

                    {
                        type: "appointment",
                        title: "RGE Team",
                        personnel: ["rge01"]
                    },

                    {
                        type: "appointment",
                        title: "Content Team",
                        personnel: ["content01"]
                    }

                ]
            },


            /* =============================================
               ADMINISTRATIVE DUTIES
            ============================================= */

            {
                type: "directorate",
                title: "Administrative Duties",

                children: [

                    {
                        type: "appointment",
                        title: "Director General, Administrative Duties",
                        personnel: ["dgAdministrative"]
                    }

                ]
            }

        ]
    }

];


/* =========================================================
   STATE
========================================================= */

let currentSearch = "";
let currentStatus = "all";


/* =========================================================
   PERSON SEARCH
========================================================= */

function personText(person) {

    return [
        person.name,
        person.rank,
        person.callsign,
        person.serviceNumber,
        person.status,
        person.unit,
        person.appointment,
        person.joinDate,
        person.note
    ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

}


function matchesPerson(id) {

    const person = personnel[id];

    if (!person) {
        return false;
    }


    /*
        Status filter.
    */

    if (
        currentStatus !== "all" &&
        person.status !== currentStatus
    ) {
        return false;
    }


    /*
        Search filter.
    */

    return (
        !currentSearch ||
        personText(person).includes(currentSearch)
    );

}


/* =========================================================
   TREE SEARCH
========================================================= */

function nodeContainsVisiblePerson(node) {

    if (!node) {
        return false;
    }


    if (
        (node.personnel || [])
            .some(matchesPerson)
    ) {
        return true;
    }


    if (
        node.command &&
        (node.command.personnel || [])
            .some(matchesPerson)
    ) {
        return true;
    }


    return (
        node.children || []
    ).some(nodeContainsVisiblePerson);

}


/*
    A node remains visible if:

        - no filter is active
        - its own title matches
        - its own personnel matches
        - its command personnel matches
        - one of its children matches
*/

function nodeMatchesSearch(node) {

    if (!node) {
        return false;
    }


    if (
        !currentSearch &&
        currentStatus === "all"
    ) {
        return true;
    }


    const title =
        (node.title || "")
            .toLowerCase();


    if (
        currentSearch &&
        title.includes(currentSearch)
    ) {
        return true;
    }


    return nodeContainsVisiblePerson(node);

}


/* =========================================================
   PERSONNEL ENTRY
========================================================= */

function createPersonnelEntry(id) {

    const person = personnel[id];

    if (
        !person ||
        !matchesPerson(id)
    ) {
        return null;
    }


    const entry =
        document.createElement("button");

    entry.type = "button";

    entry.className =
        "personnel-entry";


    entry.setAttribute(
        "aria-label",
        `Open personnel record for ${
            person.name || "personnel"
        }`
    );


    /* ---------------------------------------------
       INDEX
    --------------------------------------------- */

    const index =
        document.createElement("span");

    index.className =
        "personnel-index";

    index.textContent =
        "—";


    /* ---------------------------------------------
       RANK
    --------------------------------------------- */

    const rank =
        document.createElement("span");

    rank.className =
        "personnel-rank";

    rank.textContent =
        person.rank || "—";


    /* ---------------------------------------------
       NAME
    --------------------------------------------- */

    const nameBlock =
        document.createElement("div");

    nameBlock.className =
        "personnel-name-block";


    const name =
        document.createElement("div");

    name.className =
        "personnel-name";

    name.textContent =
        person.name || "—";


    const callsign =
        document.createElement("div");

    callsign.className =
        "personnel-callsign";

    callsign.textContent =
        person.callsign || "—";


    nameBlock.append(
        name,
        callsign
    );


    /* ---------------------------------------------
       APPOINTMENT
    --------------------------------------------- */

    const appointment =
        document.createElement("div");

    appointment.className =
        "personnel-appointment";


    const appointmentText =
        document.createElement("span");

    appointmentText.textContent =
        person.appointment || "—";


    appointment.appendChild(
        appointmentText
    );


    /* ---------------------------------------------
       STATUS
    --------------------------------------------- */

    const status =
        document.createElement("span");

    status.className =
        `personnel-status ${
            person.status || "inactive"
        }`;

    status.textContent =
        (
            person.status ||
            "inactive"
        ).toUpperCase();


    /* ---------------------------------------------
       COMPLETE ROW
    --------------------------------------------- */

    entry.append(
        index,
        rank,
        nameBlock,
        appointment,
        status
    );


    entry.addEventListener(
        "click",
        () => openProfile(person)
    );


    return entry;

}


/* =========================================================
   PERSONNEL LIST
========================================================= */

function renderPersonnelList(
    ids,
    container
) {

    if (
        !ids ||
        !ids.length
    ) {
        return null;
    }


    const list =
        document.createElement("div");

    list.className =
        "personnel-list";


    let count = 0;


    ids.forEach(
        id => {

            const entry =
                createPersonnelEntry(id);


            if (!entry) {
                return;
            }


            count++;


            entry.querySelector(
                ".personnel-index"
            ).textContent =
                String(count).padStart(2, "0");


            list.appendChild(
                entry
            );

        }
    );


    if (!count) {
        return null;
    }


    container.appendChild(
        list
    );


    return list;

}


/* =========================================================
   COMMAND NODE
========================================================= */

function renderCommandNode(
    node,
    container,
    depth = 0
) {

    if (
        !node ||
        !nodeMatchesSearch(node)
    ) {
        return;
    }


    const wrapper =
        document.createElement("div");


    wrapper.className =
        [
            "roster-node",
            `roster-depth-${depth}`,
            `roster-type-${node.type}`
        ].join(" ");


    /* ---------------------------------------------
       HEADER
    --------------------------------------------- */

    const header =
        document.createElement("div");

    header.className =
        "roster-node-header";


    const title =
        document.createElement("span");

    title.className =
        "roster-node-title";


    /*
        DG appointments are intentionally bold.
    */

    if (
        node.title &&
        node.title.startsWith(
            "Director General"
        )
    ) {

        const strong =
            document.createElement("strong");

        strong.className =
            "roster-node-title";

        strong.textContent =
            node.title;

        header.appendChild(
            strong
        );

    } else {

        title.textContent =
            node.title || "—";

        header.appendChild(
            title
        );

    }


    /* ---------------------------------------------
       PERSONNEL
    --------------------------------------------- */

    const visiblePeople =
        (node.personnel || [])
            .filter(matchesPerson);


    if (
        visiblePeople.length
    ) {

        const people =
            document.createElement("span");

        people.className =
            "roster-node-personnel";


        people.textContent =
            `— ${
                visiblePeople
                    .map(
                        id =>
                            personnel[id]?.name ||
                            "—"
                    )
                    .join(", ")
            }`;


        header.appendChild(
            people
        );

    }


    wrapper.appendChild(
        header
    );


    /* ---------------------------------------------
       NOTE
    --------------------------------------------- */

    if (node.note) {

        const note =
            document.createElement("div");

        note.className =
            "roster-node-note";

        note.textContent =
            node.note;

        wrapper.appendChild(
            note
        );

    }


    /* ---------------------------------------------
       CHILDREN
    --------------------------------------------- */

    const children =
        (node.children || [])
            .filter(nodeMatchesSearch);


    if (
        children.length
    ) {

        const childContainer =
            document.createElement("div");

        childContainer.className =
            "roster-node-children";


        children.forEach(
            child => {

                renderNode(
                    child,
                    childContainer,
                    depth + 1
                );

            }
        );


        wrapper.appendChild(
            childContainer
        );

    }


    container.appendChild(
        wrapper
    );

}


/* =========================================================
   GENERIC NODE
========================================================= */

function renderNode(
    node,
    container,
    depth = 0
) {

    if (
        !nodeMatchesSearch(node)
    ) {
        return;
    }


    /*
        UNIT
    */

    if (
        node.type === "unit"
    ) {

        renderUnit(
            node,
            container,
            depth
        );

        return;
    }


    /*
        CATEGORY / DIRECTORATE /
        APPOINTMENT
    */

    const wrapper =
        document.createElement("div");


    wrapper.className =
        [
            "roster-node",
            `roster-depth-${depth}`,
            `roster-type-${node.type}`
        ].join(" ");


    /* ---------------------------------------------
       HEADER
    --------------------------------------------- */

    const header =
        document.createElement("div");

    header.className =
        "roster-node-header";


    const title =
        document.createElement("span");

    title.className =
        "roster-node-title";


    /*
        DG appointments are bold.
    */

    if (
        node.title &&
        node.title.startsWith(
            "Director General"
        )
    ) {

        const strong =
            document.createElement("strong");

        strong.className =
            "roster-node-title";

        strong.textContent =
            node.title;

        header.appendChild(
            strong
        );

    } else {

        title.textContent =
            node.title || "—";

        header.appendChild(
            title
        );

    }


    /* ---------------------------------------------
       PERSONNEL
    --------------------------------------------- */

    const visiblePeople =
        (node.personnel || [])
            .filter(matchesPerson);


    if (
        visiblePeople.length
    ) {

        const people =
            document.createElement("span");

        people.className =
            "roster-node-personnel";


        people.textContent =
            `— ${
                visiblePeople
                    .map(
                        id =>
                            personnel[id]?.name ||
                            "—"
                    )
                    .join(", ")
            }`;


        header.appendChild(
            people
        );

    }


    wrapper.appendChild(
        header
    );


    /* ---------------------------------------------
       NOTE
    --------------------------------------------- */

    if (node.note) {

        const note =
            document.createElement("div");

        note.className =
            "roster-node-note";

        note.textContent =
            node.note;

        wrapper.appendChild(
            note
        );

    }


    /* ---------------------------------------------
       CHILDREN
    --------------------------------------------- */

    const children =
        (node.children || [])
            .filter(nodeMatchesSearch);


    if (
        children.length
    ) {

        const childContainer =
            document.createElement("div");

        childContainer.className =
            "roster-node-children";


        children.forEach(
            child => {

                renderNode(
                    child,
                    childContainer,
                    depth + 1
                );

            }
        );


        wrapper.appendChild(
            childContainer
        );

    }


    container.appendChild(
        wrapper
    );

}


/* =========================================================
   UNIT TITLE MATCH
========================================================= */

function nodeTitleMatches(node) {

    if (
        !node ||
        !currentSearch
    ) {
        return false;
    }


    return (
        node.title || ""
    )
        .toLowerCase()
        .includes(
            currentSearch
        );

}


/* =========================================================
   UNIT RENDERER
========================================================= */

function renderUnit(
    unit,
    container,
    depth = 0
) {

    if (!unit) {
        return;
    }


    const section =
        document.createElement("section");


    section.className =
        "roster-subunit";


    /* ---------------------------------------------
       UNIT HEADING
    --------------------------------------------- */

    const heading =
        document.createElement("div");

    heading.className =
        "subunit-heading";


    const title =
        document.createElement("span");

    title.className =
        "subunit-title";


    title.textContent =
        unit.abbreviation
            ? `${unit.abbreviation} / ${unit.title}`
            : unit.title;


    heading.appendChild(
        title
    );


    section.appendChild(
        heading
    );


    /* ---------------------------------------------
       UNIT CONTENT
    --------------------------------------------- */

    const commandTree =
        document.createElement("div");

    commandTree.className =
        "unit-command-tree";


    /* ---------------------------------------------
       UNIT COMMAND APPOINTMENT
    --------------------------------------------- */

    if (
        unit.command &&
        nodeMatchesSearch(unit.command)
    ) {

        renderCommandNode(
            unit.command,
            commandTree,
            depth
        );

    }


    /* ---------------------------------------------
       CHILD UNITS
    --------------------------------------------- */

    const visibleChildren =
        (unit.children || [])
            .filter(nodeMatchesSearch);


    visibleChildren.forEach(
        child => {

            renderNode(
                child,
                commandTree,
                depth + 1
            );

        }
    );


    if (
        commandTree.children.length
    ) {

        section.appendChild(
            commandTree
        );

    }


    /* ---------------------------------------------
       DIRECT UNIT PERSONNEL
    --------------------------------------------- */

    renderPersonnelList(
        unit.personnel || [],
        section
    );


    /*
        Keep the unit visible if its title itself
        matches the search.
    */

    if (
        section.querySelector(
            ".roster-node"
        ) ||
        section.querySelector(
            ".personnel-list"
        ) ||
        nodeTitleMatches(unit)
    ) {

        container.appendChild(
            section
        );

    }

}


/* =========================================================
   MAIN RENDER
========================================================= */

function renderRoster() {

    const container =
        document.getElementById(
            "roster-list"
        );


    const empty =
        document.getElementById(
            "roster-empty"
        );


    const countLabel =
        document.getElementById(
            "search-count"
        );


    if (!container) {
        return;
    }


    /*
        Clear previous render.
    */

    container.replaceChildren();


    /*
        Render entire hierarchy.
    */

    roster.forEach(
        node => {

            renderNode(
                node,
                container,
                0
            );

        }
    );


    /*
        Count visible personnel.
    */

    const count =
        Object.keys(personnel)
            .filter(matchesPerson)
            .length;


    if (countLabel) {

        countLabel.textContent =
            `${count} PERSONNEL`;

    }


    if (empty) {

        empty.classList.toggle(
            "hidden",
            count !== 0
        );

    }

}


/* =========================================================
   SEARCH SETUP
========================================================= */

function setupSearch() {

    const search =
        document.getElementById(
            "roster-search"
        );


    if (!search) {
        return;
    }


    search.addEventListener(
        "input",
        event => {

            currentSearch =
                event.target.value
                    .trim()
                    .toLowerCase();


            renderRoster();

        }
    );

}


/* =========================================================
   FILTER SETUP
========================================================= */

function setupFilters() {

    const filters =
        document.querySelectorAll(
            ".roster-filter"
        );


    filters.forEach(
        filter => {

            filter.addEventListener(
                "click",
                () => {

                    currentStatus =
                        filter.dataset.status ||
                        "all";


                    filters.forEach(
                        other => {

                            other.classList.toggle(
                                "active",
                                other === filter
                            );

                        }
                    );


                    renderRoster();

                }
            );

        }
    );

}


/* =========================================================
   PROFILE MODAL
========================================================= */

function openProfile(person) {

    const modal =
        document.getElementById(
            "personnel-modal"
        );


    if (!modal) {
        return;
    }


    const fields = {

        "profile-rank":
            person.rank,

        "profile-name":
            person.name,

        "profile-callsign":
            person.callsign,

        "profile-service-number":
            person.serviceNumber,

        "profile-status":
            (
                person.status ||
                "active"
            ).toUpperCase(),

        "profile-unit":
            person.unit,

        "profile-appointment":
            person.appointment,

        "profile-join-date":
            person.joinDate,

        "profile-note":
            person.note

    };


    Object.entries(fields)
        .forEach(
            ([id, value]) => {

                const element =
                    document.getElementById(
                        id
                    );


                if (element) {

                    element.textContent =
                        value || "—";

                }

            }
        );


    modal.classList.add(
        "open"
    );


    document.getElementById(
        "profile-close"
    )?.focus();

}


/* =========================================================
   CLOSE PROFILE
========================================================= */

function closeProfile() {

    document.getElementById(
        "personnel-modal"
    )?.classList.remove(
        "open"
    );

}


/* =========================================================
   MODAL SETUP
========================================================= */

function setupModal() {

    document.getElementById(
        "profile-close"
    )?.addEventListener(
        "click",
        closeProfile
    );


    document.getElementById(
        "profile-backdrop"
    )?.addEventListener(
        "click",
        closeProfile
    );


    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape"
            ) {

                closeProfile();

            }

        }
    );

}


/* =========================================================
   INITIALIZE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        setupSearch();

        setupFilters();

        setupModal();

        renderRoster();

    }
);