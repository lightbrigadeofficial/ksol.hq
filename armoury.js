/* =========================================================
   KSOL ARMOURY
   MANUAL FICTIONAL / IN-GAME CATALOGUE
========================================================= */


/*
    ========================================================
    ARMOURY DATA
    ========================================================

    Add all of your equipment here.

    Every equipment entry can have:

        id
        category
        role
        name
        type
        image
        description
        info
        configs

    Specifications are stored inside "info".

    Use the values that apply to your fictional /
    in-game BRM5 equipment.

    No individual part names are required.
*/


const equipment = [

    /* =====================================================
       STANDARD ISSUE
       SI
    ===================================================== */

    {
        id: "KSOL-SI-001",

        category: "standard",

        role: "si",

        name: "HK416 A5 (RF416 A5)",

        type: "STANDARD ISSUE",

        image:
            "HK416.png",

        description:
            "The HK416A5 is a modern 5.56×45mm NATO assault rifle developed by Heckler & Koch, known for its reliability, modular design, and widespread military use.",

        info: {

            designation:
                "KSOL-SI-001",

            category:
                "STANDARD ISSUE",

            role:
                "SI",

            caliber:
                "5.56 × 45mm NATO",

            effectiveRange:
                "542.99m",

            muzzleVelocity:
                "872.23m/s",

            weight:
                "~3.5kg",

            length:
                "TBD",

            fireMode:
                "AUTO | SEMI | SAFE",

            magazine:
                "30-ROUND",

            systemType:
                "PRIMARY",

            status:
                "AUTHORIZED"

        },

        configs: [

            {

                name:
                    "STANDARD CONFIGURATION",

                image:
                    "media/armoury/si-001-standard.png",

                description:
                    "Default approved in-game configuration."

            },

            {

                name:
                    "FIELD CONFIGURATION",

                image:
                    "media/armoury/si-001-field.png",

                description:
                    "Alternative approved in-game configuration."

            }

        ]

    },

    {
        id: "KSOL-SI-002",

        category: "standard",

        role: "si",

        name: "Beretta M9 (M9)",

        type: "STANDARD ISSUE",

        image:
            "M9.png",

        description:
            "The Beretta M9 is a 9mm semi-automatic service pistol, widely known for its reliability and distinctive open-slide design. It served as the standard U.S. military sidearm from 1985 for several decades.",

        info: {

            designation:
                "KSOL-SI-002",

            category:
                "STANDARD ISSUE",

            role:
                "SI",

            caliber:
                "9 × 19mm Parabellum",

            effectiveRange:
                "263.18m",

            muzzleVelocity:
                "377.94m/s",

            weight:
                "~1.02kg",

            length:
                "TBD",

            fireMode:
                "SEMI | SAFE",

            magazine:
                "15-ROUND",

            systemType:
                "SECONDARY",

            status:
                "AUTHORIZED"

        },

        configs: [

            {

                name:
                    "STANDARD CONFIGURATION",

                image:
                    "media/armoury/si-001-standard.png",

                description:
                    "Default approved in-game configuration."

            },

            {

                name:
                    "FIELD CONFIGURATION",

                image:
                    "media/armoury/si-001-field.png",

                description:
                    "Alternative approved in-game configuration."

            }

        ]

    },


    /* =====================================================
       AUTO RIFLEMAN
    ===================================================== */

    {
        id: "KSOL-AR-001",

        category: "standard",

        role: "autorifleman",

        name: "HK416 A5 AR (RF416 A5)",

        type: "AUTOMATIC",

        image:
            "AR.png",

        description:
            "Automatic Rifleman modified version of HK416 A5 SI for AR-roles.",

        info: {

            designation:
                "KSOL-AR-001",

            category:
                "STANDARD ISSUE",

            role:
                "AUTO RIFLEMAN",

            caliber:
                "5.56 × 45mm NATO",

            effectiveRange:
                "585.64m",

            muzzleVelocity:
                "905.84m/s",

            weight:
                "~4.13kg",

            length:
                "TBD",

            fireMode:
                "AUTO | SEMI | SAFE",

            magazine:
                "40-Round",

            systemType:
                "PRIMARY",

            status:
                "AUTHORIZED"

        },

        configs: [

            {

                name:
                    "STANDARD CONFIGURATION",

                image:
                    "media/armoury/ar-001-standard.png",

                description:
                    "Default approved in-game configuration."

            },

            {

                name:
                    "FIELD CONFIGURATION",

                image:
                    "media/armoury/ar-001-field.png",

                description:
                    "Alternative approved in-game configuration."

            }

        ]

    },

    {
        id: "KSOL-AR-002",

        category: "standard",

        role: "autorifleman",

        name: "Beretta M9 (M9)",

        type: "AUTOMATIC",

        image:
            "M9.png",

        description:
            "The Beretta M9 is a 9mm semi-automatic service pistol, widely known for its reliability and distinctive open-slide design. It served as the standard U.S. military sidearm from 1985 for several decades.",

        info: {

            designation:
                "KSOL-AR-002",

            category:
                "AUTOMATIC",

            role:
                "AUTO RIFLEMAN",

            caliber:
                "9 × 19mm Parabellum",

            effectiveRange:
                "263.18m",

            muzzleVelocity:
                "377.94m/s",

            weight:
                "~1.02kg",

            length:
                "TBD",

            fireMode:
                "SEMI | SAFE",

            magazine:
                "15-ROUND",

            systemType:
                "SECONDARY",

            status:
                "AUTHORIZED"

        },

        configs: [

            {

                name:
                    "STANDARD CONFIGURATION",

                image:
                    "media/armoury/si-001-standard.png",

                description:
                    "Default approved in-game configuration."

            },

            {

                name:
                    "FIELD CONFIGURATION",

                image:
                    "media/armoury/si-001-field.png",

                description:
                    "Alternative approved in-game configuration."

            }

        ]

    },


    /* =====================================================
       TEAM LEADER
    ===================================================== */

    {
        id: "KSOL-TL-001",

        category: "standard",

        role: "teamleader",

        name: "HK416 A5 TEAM LDR (RF416 A5)",

        type: "TEAM LEADER",

        image:
            "TLDR.png",

        description:
            "Team Leader modified version of HK416 A5 SI for Team_leader-roles.",

        info: {

            designation:
                "KSOL-TL-001",

            category:
                "STANDARD ISSUE",

            role:
                "TEAM LEADER",

            caliber:
                "5.56 × 45mm NATO",

            effectiveRange:
                "462.32m",

            muzzleVelocity:
                "804.84m/s",

            weight:
                "~3.8kg",

            length:
                "TBD",

            fireMode:
                "AUTO | SEMI | SAFE",

            magazine:
                "30-ROUND",

            systemType:
                "TEAM LEADER",

            status:
                "AUTHORIZED"

        },

        configs: [

            {

                name:
                    "STANDARD CONFIGURATION",

                image:
                    "media/armoury/tl-001-standard.png",

                description:
                    "Default approved in-game configuration."

            }

        ]

    },

    {
        id: "KSOL-TL-002",

        category: "standard",

        role: "teamleader",

        name: "Glock 17 Gen 3 (G17 Gen 3)",

        type: "TEAM LEADER",

        image:
            "G17.png",

        description:
            "The Glock 17 Gen 3 is a 9mm semi-automatic pistol known for its lightweight polymer frame, reliability, and simple design.",

        info: {

            designation:
                "KSOL-TL-002",

            category:
                "STANDARD ISSUE",

            role:
                "TEAM LEADER",

            caliber:
                "9 × 19mm Parabellum",

            effectiveRange:
                "256.15m",

            muzzleVelocity:
                "372.85m/s",

            weight:
                "~0.8kg",

            length:
                "TBD",

            fireMode:
                "SEMI",

            magazine:
                "17-ROUND",

            systemType:
                "TEAM LEADER",

            status:
                "AUTHORIZED"

        },

        configs: [

            {

                name:
                    "STANDARD CONFIGURATION",

                image:
                    "media/armoury/tl-001-standard.png",

                description:
                    "Default approved in-game configuration."

            }

        ]

    },

    /* =====================================================
       SQUAD LEADER
    ===================================================== */

    {
        id: "KSOL-SL-001",

        category: "standard",

        role: "squadleader",

        name: "HK416 A5 SQD LDR (RF416 A5)",

        type: "SQUAD LEADER",

        image:
            "SLDR.png",

        description:
            "Squad Leader modified version of HK416 A5 SI for Squad_leader-roles.",

        info: {

            designation:
                "KSOL-SL-001",

            category:
                "STANDARD ISSUE",

            role:
                "SQUAD LEADER",

            caliber:
                "5.56 × 45mm NATO",

            effectiveRange:
                "542.99m",

            muzzleVelocity:
                "872.23m/s",

            weight:
                "~4.4kg",

            length:
                "TBD",

            fireMode:
                "AUTO | SEMI | SAFE",

            magazine:
                "30-ROUND",

            systemType:
                "SQUAD LEADER",

            status:
                "AUTHORIZED"

        },

        configs: [

            {

                name:
                    "STANDARD CONFIGURATION",

                image:
                    "media/armoury/sl-001-standard.png",

                description:
                    "Default approved in-game configuration."

            }

        ]

    },

    {
        id: "KSOL-SL-002",

        category: "standard",

        role: "squadleader",

        name: "Glock 17 Gen 3 (G17 Gen 3)",

        type: "SQUAD LEADER",

        image:
            "G17.png",

        description:
            "The Glock 17 Gen 3 is a 9mm semi-automatic pistol known for its lightweight polymer frame, reliability, and simple design.",

        info: {

            designation:
                "KSOL-SL-002",

            category:
                "STANDARD ISSUE",

            role:
                "SQUAD LEADER",

            caliber:
                "9 × 19mm Parabellum",

            effectiveRange:
                "256.15m",

            muzzleVelocity:
                "372.85m/s",

            weight:
                "~0.8kg",

            length:
                "TBD",

            fireMode:
                "SEMI",

            magazine:
                "17-ROUND",

            systemType:
                "SQUAD LEADER",

            status:
                "AUTHORIZED"

        },

        configs: [

            {

                name:
                    "STANDARD CONFIGURATION",

                image:
                    "media/armoury/tl-001-standard.png",

                description:
                    "Default approved in-game configuration."

            }

        ]

    },


    /* =====================================================
       MARKSMAN
    ===================================================== */

    {
        id: "KSOL-MK-001",

        category: "standard",

        role: "marksman",

        name: "M110 SASS (M110)",

        type: "PRECISION",

        image:
            "M110.png",

        description:
            "The M110 is a semi-automatic 7.62 × 51mm NATO sniper rifle used by the U.S. military, known for its accuracy, reliability, and modular design.",

        info: {

            designation:
                "KSOL-MK-001",

            category:
                "STANDARD ISSUE",

            role:
                "MARKSMAN",

            caliber:
                "7.62 × 51mm NATO",

            effectiveRange:
                "884.85m",

            muzzleVelocity:
                "821.64m/s",

            weight:
                "~7.8kg",

            length:
                "TBD",

            fireMode:
                "SEMI | SAFE",

            magazine:
                "20-ROUND",

            systemType:
                "PRECISION",

            status:
                "AUTHORIZED"

        },

        configs: [

            {

                name:
                    "STANDARD CONFIGURATION",

                image:
                    "media/armoury/mk-001-standard.png",

                description:
                    "Default approved in-game configuration."

            },

            {

                name:
                    "FIELD CONFIGURATION",

                image:
                    "media/armoury/mk-001-field.png",

                description:
                    "Alternative approved in-game configuration."

            }

        ]

    },

    {
        id: "KSOL-MK-002",

        category: "standard",

        role: "marksman",

        name: "Snayperskaya Vintovka Dragunova (SVDS)",

        type: "PRECISION",

        image:
            "SVD.png",

        description:
            "The SVD is a Soviet-designed 7.62 × 54mmR semi-automatic designated marksman rifle, known for its reliability and distinctive long-profile design.",

        info: {

            designation:
                "KSOL-MK-002",

            category:
                "STANDARD ISSUE",

            role:
                "MARKSMAN",

            caliber:
                "7.62 × 54mmR NATO",

            effectiveRange:
                "787.48m",

            muzzleVelocity:
                "830.86m/s",

            weight:
                "~5.8kg",

            length:
                "TBD",

            fireMode:
                "SEMI | SAFE",

            magazine:
                "10-ROUND",

            systemType:
                "PRECISION",

            status:
                "AUTHORIZED"

        },

        configs: [

            {

                name:
                    "STANDARD CONFIGURATION",

                image:
                    "media/armoury/mk-001-standard.png",

                description:
                    "Default approved in-game configuration."

            },

            {

                name:
                    "FIELD CONFIGURATION",

                image:
                    "media/armoury/mk-001-field.png",

                description:
                    "Alternative approved in-game configuration."

            }

        ]

    },

    {
        id: "KSOL-MK-003",

        category: "standard",

        role: "marksman",

        name: "HK417 (RF417)",

        type: "PRECISION",

        image:
            "RF417.png",

        description:
            "The HK417 is a 7.62×51mm NATO battle rifle developed by Heckler & Koch, known for its reliability, accuracy, and modular design.",

        info: {

            designation:
                "KSOL-MK-003",

            category:
                "STANDARD ISSUE",

            role:
                "MARKSMAN",

            caliber:
                "7.62×51mm NATO",

            effectiveRange:
                "598.70m",

            muzzleVelocity:
                "782.12m/s",

            weight:
                "~7.2kg",

            length:
                "TBD",

            fireMode:
                "AUTO | SEMI | SAFE",

            magazine:
                "20-ROUND",

            systemType:
                "PRECISION",

            status:
                "AUTHORIZED"

        },

        configs: [

            {

                name:
                    "STANDARD CONFIGURATION",

                image:
                    "media/armoury/mk-001-standard.png",

                description:
                    "Default approved in-game configuration."

            },

            {

                name:
                    "FIELD CONFIGURATION",

                image:
                    "media/armoury/mk-001-field.png",

                description:
                    "Alternative approved in-game configuration."

            }

        ]

    },

    {
        id: "KSOL-MK-004",

        category: "standard",

        role: "marksman",

        name: "Beretta M9 (M9)",

        type: "STANDARD ISSUE",

        image:
            "M9.png",

        description:
            "The Beretta M9 is a 9mm semi-automatic service pistol, widely known for its reliability and distinctive open-slide design. It served as the standard U.S. military sidearm from 1985 for several decades.",

        info: {

            designation:
                "KSOL-MK-004",

            category:
                "STANDARD ISSUE",

            role:
                "MARKSMAN",

            caliber:
                "9 × 19mm Parabellum",

            effectiveRange:
                "263.18m",

            muzzleVelocity:
                "377.94m/s",

            weight:
                "~1.02kg",

            length:
                "TBD",

            fireMode:
                "SEMI | SAFE",

            magazine:
                "15-ROUND",

            systemType:
                "SECONDARY",

            status:
                "AUTHORIZED"

        },

        configs: [

            {

                name:
                    "STANDARD CONFIGURATION",

                image:
                    "media/armoury/si-001-standard.png",

                description:
                    "Default approved in-game configuration."

            },

            {

                name:
                    "FIELD CONFIGURATION",

                image:
                    "media/armoury/si-001-field.png",

                description:
                    "Alternative approved in-game configuration."

            }

        ]

    },


    /* =====================================================
       SNIPER
    ===================================================== */

    {
        id: "KSOL-SN-001",

        category: "standard",

        role: "sniper",

        name: "M2010 ESR (M2010)",

        type: "PRECISION",

        image:
            "M2010.png",

        description:
            "The M2010 is a .300 Winchester Magnum bolt-action sniper rifle used by the U.S. military, designed for improved long-range accuracy and performance.",

        info: {

            designation:
                "KSOL-SN-001",

            category:
                "STANDARD ISSUE",

            role:
                "SNIPER",

            caliber:
                ".300 Winchester Magnum",

            effectiveRange:
                "1006.43m",

            muzzleVelocity:
                "876.80m/s",

            weight:
                "~7.5kg",

            length:
                "TBD",

            fireMode:
                "SEMI | SAFE",

            magazine:
                "5-ROUND",

            systemType:
                "PRECISION",

            status:
                "AUTHORIZED"

        },

        configs: [

            {

                name:
                    "STANDARD CONFIGURATION",

                image:
                    "media/armoury/sn-001-standard.png",

                description:
                    "Default approved in-game configuration."

            }

        ]

    },

    {
        id: "KSOL-SN-002",

        category: "standard",

        role: "sniper",

        name: "M24 SWS (M24)",

        type: "PRECISION",

        image:
            "M24.png",

        description:
            "The M24 SWS is a 7.62 × 51mm NATO bolt-action sniper rifle used by the U.S. military, known for its accuracy, reliability, and long service history.",

        info: {

            designation:
                "KSOL-SN-002",

            category:
                "STANDARD ISSUE",

            role:
                "SNIPER",

            caliber:
                "7.62 × 51mm NATO",

            effectiveRange:
                "909.11m",

            muzzleVelocity:
                "832.82m/s",

            weight:
                "~6.5kg",

            length:
                "TBD",

            fireMode:
                "N/A",

            magazine:
                "CHAMBER FED BOLT-ACTION",

            systemType:
                "PRECISION",

            status:
                "AUTHORIZED"

        },

        configs: [

            {

                name:
                    "STANDARD CONFIGURATION",

                image:
                    "media/armoury/sn-001-standard.png",

                description:
                    "Default approved in-game configuration."

            }

        ]

    },

    {
        id: "KSOL-SN-003",

        category: "standard",

        role: "sniper",

        name: "Beretta M9 (M9)",

        type: "STANDARD ISSUE",

        image:
            "M9.png",

        description:
            "The Beretta M9 is a 9mm semi-automatic service pistol, widely known for its reliability and distinctive open-slide design. It served as the standard U.S. military sidearm from 1985 for several decades.",

        info: {

            designation:
                "KSOL-SN-003",

            category:
                "STANDARD ISSUE",

            role:
                "SNIPER",

            caliber:
                "9 × 19mm Parabellum",

            effectiveRange:
                "263.18m",

            muzzleVelocity:
                "377.94m/s",

            weight:
                "~1.02kg",

            length:
                "TBD",

            fireMode:
                "SEMI | SAFE",

            magazine:
                "15-ROUND",

            systemType:
                "SECONDARY",

            status:
                "AUTHORIZED"

        },

        configs: [

            {

                name:
                    "STANDARD CONFIGURATION",

                image:
                    "media/armoury/si-001-standard.png",

                description:
                    "Default approved in-game configuration."

            },

            {

                name:
                    "FIELD CONFIGURATION",

                image:
                    "media/armoury/si-001-field.png",

                description:
                    "Alternative approved in-game configuration."

            }

        ]

    },


    /* =====================================================
       PILOT
    ===================================================== */

    {
        id: "KSOL-PL-001",

        category: "standard",

        role: "pilot",

        name: "Maschinenpistole 7 A2 (MP7A2)",

        type: "AVIATION",

        image:
            "MP7A2.png",

        description:
            "The MP7A2 is a compact 4.6 × 30mm personal defense weapon developed by Heckler & Koch, known for its lightweight design, compact size, and high mobility.",

        info: {

            designation:
                "KSOL-PL-001",

            category:
                "STANDARD ISSUE",

            role:
                "PILOT",

            caliber:
                "4.6 × 30mm",

            effectiveRange:
                "322.38m",

            muzzleVelocity:
                "620.84m/s",

            weight:
                "~3.6kg",

            length:
                "TBD",

            fireMode:
                "AUTO | SEMI | SAFE",

            magazine:
                "30-ROUND",

            systemType:
                "AVIATION",

            status:
                "AUTHORIZED"

        },

        configs: [

            {

                name:
                    "STANDARD CONFIGURATION",

                image:
                    "media/armoury/pl-001-standard.png",

                description:
                    "Default approved in-game configuration."

            }

        ]

    },

    {
        id: "KSOL-PL-002",

        category: "standard",

        role: "pilot",

        name: "Pistolet Makarova (PM Makarov)",

        type: "AVIATION",

        image:
            "PM.png",

        description:
            "The PM Makarov is a Soviet-designed 9 × 18mm semi-automatic pistol, known for its simple, compact, and reliable design.",

        info: {

            designation:
                "KSOL-PL-001",

            category:
                "STANDARD ISSUE",

            role:
                "PILOT",

            caliber:
                "9 × 18mm",

            effectiveRange:
                "254.62m",

            muzzleVelocity:
                "284.17m/s",

            weight:
                "~0.7kg",

            length:
                "TBD",

            fireMode:
                "SEMI | SAFE",

            magazine:
                "8-ROUND",

            systemType:
                "AVIATION",

            status:
                "AUTHORIZED"

        },

        configs: [

            {

                name:
                    "STANDARD CONFIGURATION",

                image:
                    "media/armoury/pl-001-standard.png",

                description:
                    "Default approved in-game configuration."

            }

        ]

    },


    /* =====================================================
       SOPMOD
    ===================================================== */

    {
        id: "KSOL-SOF-001",

        category: "sopmod",

        role: null,

        name: "Steyr AUG A3 (AUG A3)",

        type: "SPECIAL OPERATIONS",

        image:
            "AUG.png",

        description:
            "The Steyr AUG A3 is a 5.56 × 45mm NATO bullpup assault rifle known for its compact design, modularity, and distinctive integrated layout.",

        info: {

            designation:
                "KSOL-SOF-001",

            category:
                "SOPMOD",

            role:
                "SPECIAL OPERATIONS",

            caliber:
                "5.56 × 45mm NATO",

            effectiveRange:
                "583.70m",

            muzzleVelocity:
                "904.34m/s",

            weight:
                "~5.3kg",

            length:
                "TBD",

            fireMode:
                "AUTO | SEMI | SAFE",

            magazine:
                "30-ROUND",

            systemType:
                "SPECIAL OPERATIONS",

            status:
                "AUTHORIZED"

        },

        configs: [

            {

                name:
                    "SOPMOD CONFIGURATION A",

                image:
                    "media/armoury/sof-001-a.png",

                description:
                    "Authorized fictional in-game configuration."

            },

            {

                name:
                    "SOPMOD CONFIGURATION B",

                image:
                    "media/armoury/sof-001-b.png",

                description:
                    "Alternative authorized fictional in-game configuration."

            },

            {

                name:
                    "SOPMOD CONFIGURATION C",

                image:
                    "media/armoury/sof-001-c.png",

                description:
                    "Additional authorized fictional in-game configuration."

            }

        ]

    },

    {
        id: "KSOL-SOF-002",

        category: "sopmod",

        role: null,

        name: "Avtomat Kalashnikova 103 (AK-103)",

        type: "SPECIAL OPERATIONS",

        image:
            "AK103.png",

        description:
            "The AK-103 is a Russian 7.62 × 39mm assault rifle, known for its rugged construction, reliability, and modernized AK-platform design.",

        info: {

            designation:
                "KSOL-SOF-002",

            category:
                "SOPMOD",

            role:
                "SPECIAL OPERATIONS",

            caliber:
                "7.62 × 39mm",

            effectiveRange:
                "533.07m",

            muzzleVelocity:
                "698.54m/s",

            weight:
                "~4.5kg",

            length:
                "TBD",

            fireMode:
                "AUTO | SEMI | SAFE",

            magazine:
                "30-ROUND",

            systemType:
                "SPECIAL OPERATIONS",

            status:
                "AUTHORIZED"

        },

        configs: [

            {

                name:
                    "SOPMOD CONFIGURATION A",

                image:
                    "media/armoury/sof-001-a.png",

                description:
                    "Authorized fictional in-game configuration."

            },

            {

                name:
                    "SOPMOD CONFIGURATION B",

                image:
                    "media/armoury/sof-001-b.png",

                description:
                    "Alternative authorized fictional in-game configuration."

            },

            {

                name:
                    "SOPMOD CONFIGURATION C",

                image:
                    "media/armoury/sof-001-c.png",

                description:
                    "Additional authorized fictional in-game configuration."

            }

        ]

    },

    {
        id: "KSOL-SOF-003",

        category: "sopmod",

        role: null,

        name: "Maschinenpistole 7 A2 (MP7A2)",

        type: "SPECIAL OPERATIONS",

        image:
            "MP7A2.png",

        description:
            "The MP7A2 is a compact 4.6 × 30mm personal defense weapon developed by Heckler & Koch, known for its lightweight design, compact size, and high mobility.",

        info: {

            designation:
                "KSOL-SOF-003",

            category:
                "SOPMOD",

            role:
                "SPECIAL OPERATIONS",

            caliber:
                "4.6 × 30mm",

            effectiveRange:
                "322.38m",

            muzzleVelocity:
                "620.84m/s",

            weight:
                "~3.6kg",

            length:
                "TBD",

            fireMode:
                "AUTO | SEMI | SAFE",

            magazine:
                "30-ROUND",

            systemType:
                "SPECIAL OPERATIONS",

            status:
                "AUTHORIZED"

        },

        configs: [

            {

                name:
                    "SOPMOD CONFIGURATION A",

                image:
                    "media/armoury/sof-001-a.png",

                description:
                    "Authorized fictional in-game configuration."

            },

            {

                name:
                    "SOPMOD CONFIGURATION B",

                image:
                    "media/armoury/sof-001-b.png",

                description:
                    "Alternative authorized fictional in-game configuration."

            },

            {

                name:
                    "SOPMOD CONFIGURATION C",

                image:
                    "media/armoury/sof-001-c.png",

                description:
                    "Additional authorized fictional in-game configuration."

            }

        ]

    },

    {
        id: "KSOL-SOF-004",

        category: "sopmod",

        role: null,

        name: "M4A1 ",

        type: "SPECIAL OPERATIONS",

        image:
            "M4A1.png",

        description:
            "The M4A1 is a 5.56 × 45mm NATO carbine used by the U.S. military, known for its compact design, reliability, and modular configuration.",

        info: {

            designation:
                "KSOL-SOF-004",

            category:
                "SOPMOD",

            role:
                "SPECIAL OPERATIONS",

            caliber:
                "5.56 × 45mm NATO",

            effectiveRange:
                "533.07m",

            muzzleVelocity:
                "770.65m/s",

            weight:
                "~4.8kg",

            length:
                "TBD",

            fireMode:
                "AUTO | SEMI | SAFE",

            magazine:
                "30-ROUND",

            systemType:
                "SPECIAL OPERATIONS",

            status:
                "AUTHORIZED"

        },

        configs: [

            {

                name:
                    "SOPMOD CONFIGURATION A",

                image:
                    "media/armoury/sof-001-a.png",

                description:
                    "Authorized fictional in-game configuration."

            },

            {

                name:
                    "SOPMOD CONFIGURATION B",

                image:
                    "media/armoury/sof-001-b.png",

                description:
                    "Alternative authorized fictional in-game configuration."

            },

            {

                name:
                    "SOPMOD CONFIGURATION C",

                image:
                    "media/armoury/sof-001-c.png",

                description:
                    "Additional authorized fictional in-game configuration."

            }

        ]

    },

    {
        id: "KSOL-SOF-005",

        category: "sopmod",

        role: null,

        name: "SIG SAUER P320 (V320)",

        type: "SPECIAL OPERATIONS",

        image:
            "P320.png",

        description:
            "The SIG Sauer P320 is a modular 9mm semi-automatic pistol known for its adaptable design, reliability, and widespread military and law-enforcement use.",

        info: {

            designation:
                "KSOL-SOF-005",

            category:
                "SOPMOD",

            role:
                "SPECIAL OPERATIONS",

            caliber:
                "9 × 19 Parabellum",

            effectiveRange:
                "244.92m",

            muzzleVelocity:
                "364.59m/s",

            weight:
                "1.4kg",

            length:
                "TBD",

            fireMode:
                "SEMI",

            magazine:
                "21-ROUND",

            systemType:
                "SPECIAL OPERATIONS",

            status:
                "AUTHORIZED"

        },

        configs: [

            {

                name:
                    "SOPMOD CONFIGURATION A",

                image:
                    "media/armoury/sof-001-a.png",

                description:
                    "Authorized fictional in-game configuration."

            },

            {

                name:
                    "SOPMOD CONFIGURATION B",

                image:
                    "media/armoury/sof-001-b.png",

                description:
                    "Alternative authorized fictional in-game configuration."

            },

            {

                name:
                    "SOPMOD CONFIGURATION C",

                image:
                    "media/armoury/sof-001-c.png",

                description:
                    "Additional authorized fictional in-game configuration."

            }

        ]

    },

    {
        id: "KSOL-SOF-006",

        category: "sopmod",

        role: null,

        name: "COLT M1911A2 (M1911)",

        type: "SPECIAL OPERATIONS",

        image:
            "M1911.png",

        description:
            "The M1911 is a .45 ACP semi-automatic pistol designed by John Browning and widely used by the U.S. military for much of the 20th century.",

        info: {

            designation:
                "KSOL-SOF-006",

            category:
                "SOPMOD",

            role:
                "SPECIAL OPERATIONS",

            caliber:
                ".45 ACP",

            effectiveRange:
                "217.67m",

            muzzleVelocity:
                "267.24m/s",

            weight:
                "~2.01kg",

            length:
                "TBD",

            fireMode:
                "SEMI | SAFE",

            magazine:
                "11-ROUND",

            systemType:
                "SPECIAL OPERATIONS",

            status:
                "AUTHORIZED"

        },

        configs: [

            {

                name:
                    "SOPMOD CONFIGURATION A",

                image:
                    "media/armoury/sof-001-a.png",

                description:
                    "Authorized fictional in-game configuration."

            },

            {

                name:
                    "SOPMOD CONFIGURATION B",

                image:
                    "media/armoury/sof-001-b.png",

                description:
                    "Alternative authorized fictional in-game configuration."

            },

            {

                name:
                    "SOPMOD CONFIGURATION C",

                image:
                    "media/armoury/sof-001-c.png",

                description:
                    "Additional authorized fictional in-game configuration."

            }

        ]

    },

    {
        id: "KSOL-SOF-007",

        category: "sopmod",

        role: null,

        name: "Snayperskaya Vintovka Dragunova (SVDS)",

        type: "SPECIAL OPERATIONS",

        image:
            "SVD.png",

        description:
            "The SVD is a Soviet-designed 7.62×54mmR semi-automatic designated marksman rifle, known for its reliability and distinctive long-profile design.",

        info: {

            designation:
                "KSOL-SOF-007",

            category:
                "SOPMOD",

            role:
                "SPECIAL OPERATIONS",

            caliber:
                "7.62 × 54mmR",

            effectiveRange:
                "787.48m",

            muzzleVelocity:
                "830.86m/s",

            weight:
                "~5.8kg",

            length:
                "TBD",

            fireMode:
                "SEMI | SAFE",

            magazine:
                "10-ROUND",

            systemType:
                "SPECIAL OPERATIONS",

            status:
                "AUTHORIZED"

        },

        configs: [

            {

                name:
                    "SOPMOD CONFIGURATION A",

                image:
                    "media/armoury/sof-001-a.png",

                description:
                    "Authorized fictional in-game configuration."

            },

            {

                name:
                    "SOPMOD CONFIGURATION B",

                image:
                    "media/armoury/sof-001-b.png",

                description:
                    "Alternative authorized fictional in-game configuration."

            },

            {

                name:
                    "SOPMOD CONFIGURATION C",

                image:
                    "media/armoury/sof-001-c.png",

                description:
                    "Additional authorized fictional in-game configuration."

            }

        ]

    },

    {
        id: "KSOL-SOF-008",

        category: "sopmod",

        role: null,

        name: "M110 SASS (M110)",

        type: "SPECIAL OPERATIONS",

        image:
            "M110.png",

        description:
            "The M110 is a semi-automatic 7.62 × 51mm NATO sniper rifle used by the U.S. military, known for its accuracy, reliability, and modular design.",

        info: {

            designation:
                "KSOL-SOF-008",

            category:
                "SOPMOD",

            role:
                "SPECIAL OPERATIONS",

            caliber:
                "7.62 × 51mm NATO",

            effectiveRange:
                "884.85m",

            muzzleVelocity:
                "821.64m/s",

            weight:
                "~7.8kg",

            length:
                "TBD",

            fireMode:
                "SEMI | SAFE",

            magazine:
                "20-ROUND",

            systemType:
                "SPECIAL OPERATIONS",

            status:
                "AUTHORIZED"

        },

        configs: [

            {

                name:
                    "SOPMOD CONFIGURATION A",

                image:
                    "media/armoury/sof-001-a.png",

                description:
                    "Authorized fictional in-game configuration."

            },

            {

                name:
                    "SOPMOD CONFIGURATION B",

                image:
                    "media/armoury/sof-001-b.png",

                description:
                    "Alternative authorized fictional in-game configuration."

            },

            {

                name:
                    "SOPMOD CONFIGURATION C",

                image:
                    "media/armoury/sof-001-c.png",

                description:
                    "Additional authorized fictional in-game configuration."

            }

        ]

    },

    {
        id: "KSOL-SOF-009",

        category: "sopmod",

        role: null,

        name: "M2010 ESR (M2010)",

        type: "SPECIAL OPERATIONS",

        image:
            "M2010.png",

        description:
            "The M2010 is a .300 Winchester Magnum bolt-action sniper rifle used by the U.S. military, designed for improved long-range accuracy and performance.",

        info: {

            designation:
                "KSOL-SOF-009",

            category:
                "SOPMOD",

            role:
                "SPECIAL OPERATIONS",

            caliber:
                ".300 Winchester Magnum",

            effectiveRange:
                "1006.43m",

            muzzleVelocity:
                "876.80m/s",

            weight:
                "~7.5kg",

            length:
                "TBD",

            fireMode:
                "SEMI | SAFE",

            magazine:
                "5-ROUND",

            systemType:
                "SPECIAL OPERATIONS",

            status:
                "AUTHORIZED"

        },

        configs: [

            {

                name:
                    "SOPMOD CONFIGURATION A",

                image:
                    "media/armoury/sof-001-a.png",

                description:
                    "Authorized fictional in-game configuration."

            },

            {

                name:
                    "SOPMOD CONFIGURATION B",

                image:
                    "media/armoury/sof-001-b.png",

                description:
                    "Alternative authorized fictional in-game configuration."

            },

            {

                name:
                    "SOPMOD CONFIGURATION C",

                image:
                    "media/armoury/sof-001-c.png",

                description:
                    "Additional authorized fictional in-game configuration."

            }

        ]

    },

    {
        id: "KSOL-SOF-010",

        category: "sopmod",

        role: null,

        name: "M24 SWS (M24)",

        type: "SPECIAL OPERATIONS",

        image:
            "M24.png",

        description:
            "The M24 SWS is a 7.62 × 51mm NATO bolt-action sniper rifle used by the U.S. military, known for its accuracy, reliability, and long service history.",

        info: {

            designation:
                "KSOL-SOF-010",

            category:
                "SOPMOD",

            role:
                "SPECIAL OPERATIONS",

            caliber:
                "7.62 × 51mm",

            effectiveRange:
                "909.11m",

            muzzleVelocity:
                "832.82m/s",

            weight:
                "~6.5kg",

            length:
                "TBD",

            fireMode:
                "N/A",

            magazine:
                "CHAMBER FED BOLT-ACTION",

            systemType:
                "SPECIAL OPERATIONS",

            status:
                "AUTHORIZED"

        },

        configs: [

            {

                name:
                    "SOPMOD CONFIGURATION A",

                image:
                    "media/armoury/sof-001-a.png",

                description:
                    "Authorized fictional in-game configuration."

            },

            {

                name:
                    "SOPMOD CONFIGURATION B",

                image:
                    "media/armoury/sof-001-b.png",

                description:
                    "Alternative authorized fictional in-game configuration."

            },

            {

                name:
                    "SOPMOD CONFIGURATION C",

                image:
                    "media/armoury/sof-001-c.png",

                description:
                    "Additional authorized fictional in-game configuration."

            }

        ]

    },

    {
        id: "KSOL-SOF-011",

        category: "sopmod",

        role: null,

        name: "FN 'mini-mitrailleuse' Minimi (M249)",

        type: "SPECIAL OPERATIONS",

        image:
            "M249.png",

        description:
            "The M249 is a 5.56 × 45mm NATO light machine gun used by the U.S. military, known for its high-capacity belt-fed design and sustained fire capability.",

        info: {

            designation:
                "KSOL-SOF-011",

            category:
                "SOPMOD",

            role:
                "SPECIAL OPERATIONS",

            caliber:
                "5.56 × 45mm",

            effectiveRange:
                "523.53m",

            muzzleVelocity:
                "856.46m/s",

            weight:
                "~9.6kg",

            length:
                "TBD",

            fireMode:
                "AUTO | SAFE",

            magazine:
                "200-ROUND",

            systemType:
                "SPECIAL OPERATIONS",

            status:
                "AUTHORIZED"

        },

        configs: [

            {

                name:
                    "SOPMOD CONFIGURATION A",

                image:
                    "media/armoury/sof-001-a.png",

                description:
                    "Authorized fictional in-game configuration."

            },

            {

                name:
                    "SOPMOD CONFIGURATION B",

                image:
                    "media/armoury/sof-001-b.png",

                description:
                    "Alternative authorized fictional in-game configuration."

            },

            {

                name:
                    "SOPMOD CONFIGURATION C",

                image:
                    "media/armoury/sof-001-c.png",

                description:
                    "Additional authorized fictional in-game configuration."

            }

        ]

    }

];


/* =========================================================
   ELEMENTS
========================================================= */

const equipmentGrid =
    document.getElementById(
        "equipmentGrid"
    );


const searchInput =
    document.getElementById(
        "armourySearch"
    );


const familyTabs =
    document.querySelectorAll(
        ".family-tab"
    );


const roleTabs =
    document.querySelectorAll(
        ".role-tab"
    );


const roleNavigation =
    document.getElementById(
        "standardRoles"
    );


const catalogueCategory =
    document.getElementById(
        "catalogueCategory"
    );


const catalogueTitle =
    document.getElementById(
        "catalogueTitle"
    );


const itemCount =
    document.getElementById(
        "itemCount"
    );


/* =========================================================
   MODAL ELEMENTS
========================================================= */

const modal =
    document.getElementById(
        "equipmentModal"
    );


const modalClose =
    document.getElementById(
        "modalClose"
    );


const modalId =
    document.getElementById(
        "modalId"
    );


const modalImage =
    document.getElementById(
        "modalImage"
    );


const modalCategory =
    document.getElementById(
        "modalCategory"
    );


const modalTitle =
    document.getElementById(
        "modalTitle"
    );


const modalDescription =
    document.getElementById(
        "modalDescription"
    );


const modalStatus =
    document.getElementById(
        "modalStatus"
    );


const modalInfo =
    document.getElementById(
        "modalInfo"
    );


const modalConfigs =
    document.getElementById(
        "modalConfigs"
    );


/* =========================================================
   STATE
========================================================= */

let activeCategory =
    "standard";


let activeRole =
    "si";


/* =========================================================
   ROLE NAMES
========================================================= */

const roleNames = {

    si:
        "SI",

    autorifleman:
        "AUTO RIFLEMAN",

    teamleader:
        "TEAM LEADER",

    squadleader:
        "SQUAD LEADER",

    marksman:
        "MARKSMAN",

    sniper:
        "SNIPER",

    pilot:
        "PILOT"

};


/* =========================================================
   FORMAT FIELD NAME
========================================================= */

function formatFieldName(
    field
) {

    return field

        .replace(
            /([A-Z])/g,
            " $1"
        )

        .trim()

        .toUpperCase();

}


/* =========================================================
   RENDER EQUIPMENT
========================================================= */

function renderEquipment() {

    if (!equipmentGrid) {
        return;
    }


    const query =
        searchInput

            ? searchInput.value
                .trim()
                .toLowerCase()

            : "";


    let results;


    /* =====================================================
       CATEGORY FILTER
    ===================================================== */

    if (
        activeCategory ===
        "standard"
    ) {

        results =
            equipment.filter(
                item =>
                    item.category ===
                    "standard"

                    &&

                    item.role ===
                    activeRole
            );

    }

    else {

        results =
            equipment.filter(
                item =>
                    item.category ===
                    "sopmod"
            );

    }


    /* =====================================================
       SEARCH
    ===================================================== */

    if (query) {

        results =
            results.filter(
                item => {

                    const searchable = [

                        item.id,

                        item.name,

                        item.type,

                        item.description,

                        ...Object.values(
                            item.info || {}
                        ),

                        ...(item.configs || [])
                            .map(
                                config =>
                                    config.name
                            ),

                        ...(item.configs || [])
                            .map(
                                config =>
                                    config.description
                            )

                    ]

                        .join(" ")

                        .toLowerCase();


                    return searchable.includes(
                        query
                    );

                }
            );

    }


    /* =====================================================
       COUNT
    ===================================================== */

    if (itemCount) {

        itemCount.textContent =
            String(
                results.length
            ).padStart(
                2,
                "0"
            );

    }


    /* =====================================================
       EMPTY
    ===================================================== */

    if (!results.length) {

        equipmentGrid.innerHTML = `

            <div class="armoury-empty">

                NO SYSTEMS MATCH
                THE CURRENT QUERY.

            </div>

        `;

        return;

    }


    equipmentGrid.innerHTML = "";


    /* =====================================================
       PRODUCT CARDS
    ===================================================== */

    results.forEach(
        item => {

            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "equipment-card";


            card.innerHTML = `

                <div class="equipment-image-wrap">

                    <img
                        src="${item.image}"
                        alt="${item.name}"
                        class="equipment-image"
                    >

                </div>


                <div class="equipment-card-content">

                    <div class="equipment-card-id">
                        ${item.id}
                    </div>


                    <h3>
                        ${item.name}
                    </h3>


                    <p class="equipment-card-description">
                        ${item.description}
                    </p>

                </div>


                <div class="equipment-card-footer">

                    <span class="equipment-card-type">
                        ${item.type}
                    </span>


                    <span class="equipment-card-arrow">
                        →
                    </span>

                </div>

            `;


            const image =
                card.querySelector(
                    ".equipment-image"
                );


            image.addEventListener(
                "error",
                () => {

                    image.style.opacity =
                        "0.12";

                }
            );


            card.addEventListener(
                "click",
                () => {

                    openModal(
                        item
                    );

                }
            );


            equipmentGrid.appendChild(
                card
            );

        }
    );

}


/* =========================================================
   FAMILY SWITCH
========================================================= */

familyTabs.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                activeCategory =
                    button.dataset.category;


                familyTabs.forEach(
                    item => {

                        item.classList.toggle(
                            "active",
                            item === button
                        );

                    }
                );


                if (
                    activeCategory ===
                    "standard"
                ) {

                    roleNavigation
                        .classList
                        .remove(
                            "hidden"
                        );


                    catalogueCategory
                        .textContent =
                        "STANDARD ISSUE";


                    catalogueTitle
                        .textContent =
                        roleNames[
                            activeRole
                        ];

                }

                else {

                    roleNavigation
                        .classList
                        .add(
                            "hidden"
                        );


                    catalogueCategory
                        .textContent =
                        "SPECIAL OPERATIONS";


                    catalogueTitle
                        .textContent =
                        "SOPMOD";

                }


                renderEquipment();

            }
        );

    }
);


/* =========================================================
   ROLE SWITCH
========================================================= */

roleTabs.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                activeRole =
                    button.dataset.role;


                roleTabs.forEach(
                    item => {

                        item.classList.toggle(
                            "active",
                            item === button
                        );

                    }
                );


                catalogueCategory
                    .textContent =
                    "STANDARD ISSUE";


                catalogueTitle
                    .textContent =
                    roleNames[
                        activeRole
                    ];


                renderEquipment();

            }
        );

    }
);


/* =========================================================
   SEARCH
========================================================= */

if (searchInput) {

    searchInput.addEventListener(
        "input",
        renderEquipment
    );

}


/* =========================================================
   CTRL + K
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (

            event.ctrlKey

            &&

            event.key.toLowerCase()
                === "k"

        ) {

            event.preventDefault();


            if (searchInput) {

                searchInput.focus();

            }

        }

    }
);


/* =========================================================
   OPEN PRODUCT MODAL
========================================================= */

function openModal(
    item
) {

    if (!modal) {
        return;
    }


    /* PRODUCT ID */

    modalId.textContent =
        item.id;


    /* PRODUCT IMAGE */

    modalImage.src =
        item.image;


    modalImage.alt =
        item.name;


    modalImage.style.opacity =
        "0.9";


    /* IMAGE ERROR */

    modalImage.onerror =
        function () {

            this.style.opacity =
                "0.12";

        };


    /* CATEGORY */

    if (
        item.category ===
        "sopmod"
    ) {

        modalCategory.textContent =
            "SOPMOD // SPECIAL OPERATIONS";

    }

    else {

        modalCategory.textContent =
            "STANDARD ISSUE // " +
            roleNames[item.role];

    }


    /* TITLE */

    modalTitle.textContent =
        item.name;


    /* DESCRIPTION */

    modalDescription.textContent =
        item.description;


    /* STATUS */

    modalStatus.textContent =
        item.info?.status ||
        "AUTHORIZED";


    /* =====================================================
       TECHNICAL SPECIFICATIONS
    ===================================================== */

    modalInfo.innerHTML = "";


    Object.entries(
        item.info || {}
    )
    .forEach(
        ([key, value]) => {

            const cell =
                document.createElement(
                    "div"
                );


            cell.className =
                "specification-cell";


            cell.innerHTML = `

                <span>
                    ${formatFieldName(key)}
                </span>

                <strong>
                    ${value || "TBD"}
                </strong>

            `;


            modalInfo.appendChild(
                cell
            );

        }
    );


    /* =====================================================
       CONFIGURATIONS
    ===================================================== */

    modalConfigs.innerHTML = "";


    if (
        !item.configs ||
        !item.configs.length
    ) {

        modalConfigs.innerHTML = `

            <div class="armoury-empty">

                NO CONFIGURATION
                DATA AVAILABLE.

            </div>

        `;

    }

    else {

        item.configs.forEach(
            config => {

                const card =
                    document.createElement(
                        "article"
                    );


                card.className =
                    "configuration-card";


                card.innerHTML = `

                    <img
                        src="${config.image}"
                        alt="${config.name}"
                        class="configuration-image"
                    >


                    <div class="configuration-content">

                        <strong>
                            ${config.name}
                        </strong>


                        <span>
                            ${config.description}
                        </span>

                    </div>

                `;


                const image =
                    card.querySelector(
                        ".configuration-image"
                    );


                image.addEventListener(
                    "error",
                    () => {

                        image.style.opacity =
                            "0.1";

                    }
                );


                modalConfigs.appendChild(
                    card
                );

            }
        );

    }


    /* =====================================================
       SHOW MODAL
    ===================================================== */

    modal.classList.add(
        "open"
    );


    modal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.style.overflow =
        "hidden";

}


/* =========================================================
   CLOSE MODAL
========================================================= */

function closeModal() {

    if (!modal) {
        return;
    }


    modal.classList.remove(
        "open"
    );


    modal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.style.overflow =
        "";

}


/* CLOSE BUTTON */

if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeModal
    );

}


/* =========================================================
   CLICK OUTSIDE
========================================================= */

if (modal) {

    modal.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                modal
            ) {

                closeModal();

            }

        }
    );

}


/* =========================================================
   ESCAPE
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key ===
            "Escape"
        ) {

            closeModal();

        }

    }
);


/* =========================================================
   INITIALIZE
========================================================= */

renderEquipment();