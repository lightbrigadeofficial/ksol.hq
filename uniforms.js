/* =========================================================
   KSOL UNIFORMS
   MANUAL FICTIONAL / IN-GAME UNIFORM CATALOGUE
========================================================= */


/*
    ========================================================
    UNIFORM STRUCTURE
    ========================================================

    TOP LEVEL CATEGORIES:

        standard
        sis
        officers


    STANDARD ISSUE ROLES:

        infantry
        pilot
        crew-gunner


    SIS AND OFFICERS HAVE NO SUB-CATEGORIES.

    Each uniform can contain:

        id
        category
        role
        name
        type
        image
        description
        specs
        components
        variants
*/


const uniforms = [


    /* =====================================================
       STANDARD ISSUE
       INFANTRY
    ===================================================== */

    {
        id:
            "KSOL-UFM-INF-001",

        category:
            "standard",

        role:
            "infantry",

        name:
            "STANDARD INFANTRY/SUPPLY/RECON/MED FIELD UNIFORM",

        type:
            "STANDARD ISSUE",

        image:
            "INF1.png",

        description:
            "Authorized fictional in-game uniform configuration for personnel assigned to the 7 PARA/AMC/ASC/RECON/MED.",


        specs: {

            designation:
                "KSOL-UFM-INF-001",

            category:
                "STANDARD ISSUE",

            role:
                "INFANTRY",

            units:
                "7 PARA, AMC, ASC, RECON",

            uniformClass:
                "FIELD UNIFORM",

            status:
                "AUTHORIZED"

        },


        components: [

            {
                name:
                    "HEADGEAR",

                entries: [

                    {
                        label:
                            "Primary",

                        value:
                            "INTEL Rail 3.0 Ballistic"
                    },

                    {
                        label:
                            "Camo",

                        value:
                            "Ranger Green"
                    },

                    {
                        label:
                            "Loop Pattern Camo",

                        value:
                            "ANY"
                    },

                    {
                        label:
                            "Light Strobe",

                        value:
                            "ANY — Minimum 1"
                    },

                    {
                        label:
                            "Flashlights",

                        value:
                            "OPTIONAL"
                    },

                    {
                        label:
                            "NVG",

                        value:
                            "ANY — Monocular NODs not allowed"
                    },

                    {
                        label:
                            "Patches / Others",

                        value:
                            "ANY"
                    },

                    {
                        label:
                            "Ancillary Headgear",

                        value:
                            "Knit cap — OPTIONAL"
                    }

                ]

            },


            {
                name:
                    "EARWEAR",

                entries: [

                    {
                        label:
                            "System",

                        value:
                            "Comset V/IV"
                    },

                    {
                        label:
                            "Camo",

                        value:
                            "Olive Drab Green"
                    }

                ]

            },


            {
                name:
                    "EYEWEAR",

                entries: [

                    {
                        label:
                            "Eyewear",

                        value:
                            "ANY"
                    }

                ]

            },


            {
                name:
                    "FACEWEAR",

                entries: [

                    {
                        label:
                            "Facewear",

                        value:
                            "ANY — NO GASMASKS"
                    },

                    {
                        label:
                            "Camo",

                        value:
                            "Tan"
                    }

                ]

            },


            {
                name:
                    "SHIRT / TOP",

                entries: [

                    {
                        label:
                            "System",

                        value:
                            "Spectre U"
                    },

                    {
                        label:
                            "Camo",

                        value:
                            "Camouflage Central Europe"
                    }

                ]

            },


            {
                name:
                    "PANTS / BOTTOM",

                entries: [

                    {
                        label:
                            "System",

                        value:
                            "Spectre U"
                    },

                    {
                        label:
                            "Camo",

                        value:
                            "Camouflage Central Europe"
                    }

                ]

            },


            {
                name:
                    "BACKPACK",

                entries: [

                    {
                        label:
                            "Backpack",

                        value:
                            "ANY"
                    },

                    {
                        label:
                            "Camo",

                        value:
                            "C-AVOD AU for Attack 2 / Ranger or Olive Green for other uses"
                    }

                ]

            },


            {
                name:
                    "VEST",

                entries: [

                    {
                        label:
                            "System",

                        value:
                            "6094A"
                    },

                    {
                        label:
                            "Camo",

                        value:
                            "Ranger Green"
                    },

                    {
                        label:
                            "Accessory Colors",

                        value:
                            "Ranger"
                    },

                    {
                        label:
                            "Patches / Customization",

                        value:
                            "ANY"
                    }

                ]

            },


            {
                name:
                    "BELT",

                entries: [

                    {
                        label:
                            "System",

                        value:
                            "Task Force"
                    },

                    {
                        label:
                            "Camo",

                        value:
                            "Ranger Green"
                    },

                    {
                        label:
                            "Accessories",

                        value:
                            "Ranger Green"
                    }

                ]

            },


            {
                name:
                    "HANDWEAR",

                entries: [

                    {
                        label:
                            "System",

                        value:
                            "HOG (CTF) Alpha"
                    },

                    {
                        label:
                            "Camo",

                        value:
                            "Ranger Green"
                    }

                ]

            },


            {
                name:
                    "FOOTWEAR",

                entries: [

                    {
                        label:
                            "Camo",

                        value:
                            "Jungle"
                    }

                ]

            },


            {
                name:
                    "WRISTWEAR",

                entries: [

                    {
                        label:
                            "Wristwear",

                        value:
                            "ANY"
                    }

                ]

            }

        ],


        variants: [

            {
                name:
                    "STANDARD ISSUE",

                image:
                    "media/uniforms/1ib-standard.png",

                description:
                    "Default 1st Infantry Battalion in-game appearance."
            },


            {
                name:
                    "FIELD VARIANT",

                image:
                    "media/uniforms/1ib-field.png",

                description:
                    "Approved alternate field presentation."
            }

        ]

    },


    /* =====================================================
       STANDARD ISSUE
       PILOT
    ===================================================== */

    {
        id:
            "KSOL-UFM-PIL-001",

        category:
            "standard",

        role:
            "pilot",

        name:
            "PILOT OVERALLS",

        type:
            "STANDARD ISSUE",

        image:
            "PILOT.jpg",

        description:
            "Authorized uniform configuration for KSOL aviation personnel.",


        specs: {

            designation:
                "KSOL-UFM-PIL-001",

            category:
                "STANDARD ISSUE",

            role:
                "PILOT",

            formation:
                "ARMY AVIATION CORPS",

            uniformClass:
                "PILOT/CO-PILOT",

            status:
                "AUTHORIZED"

        },


        components: [

            {
                name:
                    "HEADGEAR",

                entries: [

                    {
                        label:
                            "Primary",

                        value:
                            "HGU-56/P"
                    },

                    {
                        label:
                            "Camo",

                        value:
                            "Olive Drab"
                    },

                    {
                        label:
                            "NVG",

                        value:
                            "ANY — Monocular NODs not allowed"
                    }

                ]

            },


            {
                name:
                    "EARWEAR",

                entries: [

                    {
                        label:
                            "Earwear",

                        value:
                            "NONE"
                    }

                ]

            },


            {
                name:
                    "EYEWEAR",

                entries: [

                    {
                        label:
                            "Eyewear",

                        value:
                            "ANY"
                    }

                ]

            },


            {
                name:
                    "FACEWEAR",

                entries: [

                    {
                        label:
                            "Facewear",

                        value:
                            "ANY — Gasmasks ALLOWED"
                    }

                ]

            },


            {
                name:
                    "SHIRT / TOP",

                entries: [

                    {
                        label:
                            "System",

                        value:
                            "APC Rapid Long Sleeve Shirt"
                    },

                    {
                        label:
                            "Camo",

                        value:
                            "APC Green"
                    }

                ]

            },


            {
                name:
                    "PANTS / BOTTOM",

                entries: [

                    {
                        label:
                            "System",

                        value:
                            "APC Cargo Pant"
                    },

                    {
                        label:
                            "Camo",

                        value:
                            "APC Green"
                    }

                ]

            },


            {
                name:
                    "BACKPACK",

                entries: [

                    {
                        label:
                            "Backpack",

                        value:
                            "ANY except Attack 2"
                    }

                ]

            },


            {
                name:
                    "VEST",

                entries: [

                    {
                        label:
                            "System",

                        value:
                            "ANY"
                    },

                    {
                        label:
                            "Camo",

                        value:
                            "All Black"
                    },

                    {
                        label:
                            "Accessory Colors",

                        value:
                            "All Black"
                    },

                    {
                        label:
                            "Patches / Customization",

                        value:
                            "ANY"
                    }

                ]

            },


            {
                name:
                    "BELT",

                entries: [

                    {
                        label:
                            "System",

                        value:
                            "Task Force"
                    },

                    {
                        label:
                            "Camo",

                        value:
                            "Black / Green"
                    },

                    {
                        label:
                            "Accessories",

                        value:
                            "All — Maximum 4 pouches may be BLACK"
                    }

                ]

            },


            {
                name:
                    "HANDWEAR",

                entries: [

                    {
                        label:
                            "System",

                        value:
                            "HOG (CTF) ALPHA"
                    },

                    {
                        label:
                            "Camo",

                        value:
                            "Black"
                    }

                ]

            },


            {
                name:
                    "FOOTWEAR",

                entries: [

                    {
                        label:
                            "Footwear",

                        value:
                            "Black"
                    }

                ]

            },


            {
                name:
                    "WRISTWEAR",

                entries: [

                    {
                        label:
                            "Wristwear",

                        value:
                            "ANY"
                    }

                ]

            }

        ],


        variants: [

            {
                name:
                    "STANDARD PILOT",

                image:
                    "media/uniforms/pilot-001-standard.png",

                description:
                    "Default authorized pilot appearance."
            }

        ]

    },


    /* =====================================================
       STANDARD ISSUE
       CREW GUNNER
    ===================================================== */

    {
    id:
        "KSOL-UFM-CG-001",

    category:
        "standard",

    role:
        "crew-gunner",

    name:
        "CREW GUNNER UNIFORM",

    type:
        "STANDARD ISSUE",

    image:
        "CREW.jpg",

    description:
        "Authorized fictional in-game uniform configuration for personnel assigned as a crew-gunner.",


    specs: {

        designation:
            "KSOL-UFM-CG-001",

        category:
            "STANDARD ISSUE",

        role:
            "CREW GUNNER",

        formation:
            "ARMY AVIATION CROPS/7 PARA/ ASC but NOT LIMITED TO",

        uniformClass:
            "COMBAT / CREW",

        status:
            "AUTHORIZED"

    },


    components: [

        {
            name:
                "HEADGEAR",

            entries: [

                {
                    label:
                        "Primary",

                    value:
                        "HGU-56/P"
                },

                {
                    label:
                        "Camo",

                    value:
                        "Olive Drab"
                },

                {
                    label:
                        "NVG",

                    value:
                        "ANY — Monocular NODs not allowed"
                },

                {
                    label:
                        "Maxillofacial Shield",

                    value:
                        "MANDATORY"
                }

            ]

        },


        {
            name:
                "EARWEAR",

            entries: [

                {
                    label:
                        "Earwear",

                    value:
                        "NONE"
                }

            ]

        },


        {
            name:
                "EYEWEAR",

            entries: [

                {
                    label:
                        "Eyewear",

                    value:
                        "NONE"
                }

            ]

        },


        {
            name:
                "FACEWEAR",

            entries: [

                {
                    label:
                        "Facewear",

                    value:
                        "NONE"
                }

            ]

        },


        {
            name:
                "SHIRT / TOP",

            entries: [

                {
                    label:
                        "System",

                    value:
                        "Spectre U"
                },

                {
                    label:
                        "Camo",

                    value:
                        "Camouflage Central Europe"
                }

            ]

        },


        {
            name:
                "PANTS / BOTTOM",

            entries: [

                {
                    label:
                        "System",

                    value:
                        "Spectre U"
                },

                {
                    label:
                        "Camo",

                    value:
                        "Camouflage Central Europe"
                }

            ]

        },


        {
            name:
                "BACKPACK",

            entries: [

                {
                    label:
                        "Backpack",

                    value:
                        "ANY"
                },

                {
                    label:
                        "Camo",

                    value:
                        "C-AVOD AU for Attack 2 / Ranger or Olive Green for other uses"
                }

            ]

        },


        {
            name:
                "VEST",

            entries: [

                {
                    label:
                        "System",

                    value:
                        "6094A"
                },

                {
                    label:
                        "Camo",

                    value:
                        "Ranger Green"
                },

                {
                    label:
                        "Accessory Colors",

                    value:
                        "Ranger"
                },

                {
                    label:
                        "Patches / Customization",

                    value:
                        "ANY"
                }

            ]

        },


        {
            name:
                "BELT",

            entries: [

                {
                    label:
                        "System",

                    value:
                        "Task Force"
                },

                {
                    label:
                        "Camo",

                    value:
                        "Ranger Green"
                },

                {
                    label:
                        "Accessories",

                    value:
                        "Ranger Green"
                }

            ]

        },


        {
            name:
                "HANDWEAR",

            entries: [

                {
                    label:
                        "System",

                    value:
                        "HOG (CTF) Alpha"
                },

                {
                    label:
                        "Camo",

                    value:
                        "Ranger Green"
                }

            ]

        },


        {
            name:
                "FOOTWEAR",

            entries: [

                {
                    label:
                        "Camo",

                    value:
                        "Jungle"
                }

            ]

        },


        {
            name:
                "WRISTWEAR",

            entries: [

                {
                    label:
                        "Wristwear",

                    value:
                        "ANY"
                }

            ]

        }

    ],


    variants: [

        {
            name:
                "STANDARD ISSUE",

            image:
                "media/uniforms/1st-infantry-battalion-standard.png",

            description:
                "Default authorized 1st Infantry Battalion appearance."
        }

    ]

},


    /* =====================================================
       S I S
       NO SUB-CATEGORY
    ===================================================== */

    {
    id:
        "KSOL-UFM-SIS-001",

    category:
        "sis",

    role:
        null,

    name:
        "SPECIAL INSERTION SERVICE, L DETACHMENT UNIFORM",

    type:
        "S I S",

    image:
        "SIS.png",

    description:
        "Authorized fictional in-game uniform configuration for Special Insertion Service personnel.",


    specs: {

        designation:
            "KSOL-UFM-SIS-001",

        category:
            "S I S",

        role:
            "SPECIAL INSERTION SERVICE",

        formation:
            "S I S",

        uniformClass:
            "SPECIAL OPERATIONS",

        status:
            "AUTHORIZED"

    },


    components: [

        {
            name:
                "HEADGEAR",

            entries: [

                {
                    label:
                        "Primary",

                    value:
                        "AGIS MT"
                },

                {
                    label:
                        "Camo",

                    value:
                        "Black"
                },

                {
                    label:
                        "Loop Pattern",

                    value:
                        "Black — Optional Tape"
                },

                {
                    label:
                        "Light Strobe",

                    value:
                        "ANY — Minimum 1"
                },

                {
                    label:
                        "Flashlights",

                    value:
                        "MANDATORY"
                },

                {
                    label:
                        "NVG",

                    value:
                        "ANY — Monocular NODs not allowed"
                },

                {
                    label:
                        "Patches / Others",

                    value:
                        "ANY"
                },

                {
                    label:
                        "Ancillary Headgear",

                    value:
                        "Knit cap — OPTIONAL"
                }

            ]

        },


        {
            name:
                "EARWEAR",

            entries: [

                {
                    label:
                        "System",

                    value:
                        "Comset V"
                },

                {
                    label:
                        "Camo",

                    value:
                        "Coyote"
                }

            ]

        },


        {
            name:
                "EYEWEAR",

            entries: [

                {
                    label:
                        "Eyewear",

                    value:
                        "ANY"
                }

            ]

        },


        {
            name:
                "FACEWEAR",

            entries: [

                {
                    label:
                        "Facewear",

                    value:
                        "ANY — Gasmasks ALLOWED"
                },

                {
                    label:
                        "Camo",

                    value:
                        "Tan preferred"
                }

            ]

        },


        {
            name:
                "SHIRT / TOP",

            entries: [

                {
                    label:
                        "System",

                    value:
                        "G4 NSPA Combat Shirt"
                },

                {
                    label:
                        "Camo",

                    value:
                        "Multi-terrain Pattern"
                }

            ]

        },


        {
            name:
                "PANTS / BOTTOM",

            entries: [

                {
                    label:
                        "System",

                    value:
                        "G4 NSPA Field Pant"
                },

                {
                    label:
                        "Camo",

                    value:
                        "Multi-terrain Pattern"
                }

            ]

        },


        {
            name:
                "BACKPACK",

            entries: [

                {
                    label:
                        "Backpack",

                    value:
                        "ANY — Medium backpacks recommended"
                },

                {
                    label:
                        "Camo",

                    value:
                        "C-AVOD AU for Attack 2 / Coyote for all others"
                }

            ]

        },


        {
            name:
                "VEST",

            entries: [

                {
                    label:
                        "System",

                    value:
                        "6094A"
                },

                {
                    label:
                        "Camo",

                    value:
                        "All Coyote"
                },

                {
                    label:
                        "Accessory Colors",

                    value:
                        "All Coyote"
                },

                {
                    label:
                        "Patches / Customization",

                    value:
                        "ANY"
                }

            ]

        },


        {
            name:
                "BELT",

            entries: [

                {
                    label:
                        "System",

                    value:
                        "Task Force"
                },

                {
                    label:
                        "Camo",

                    value:
                        "Coyote"
                },

                {
                    label:
                        "Accessories",

                    value:
                        "All — Maximum 4 pouches may be BLACK"
                }

            ]

        },


        {
            name:
                "HANDWEAR",

            entries: [

                {
                    label:
                        "System",

                    value:
                        "Slingshot Tactile"
                },

                {
                    label:
                        "Camo",

                    value:
                        "Coyote"
                }

            ]

        },


        {
            name:
                "FOOTWEAR",

            entries: [

                {
                    label:
                        "Camo",

                    value:
                        "Tan"
                }

            ]

        },


        {
            name:
                "WRISTWEAR",

            entries: [

                {
                    label:
                        "Wristwear",

                    value:
                        "ANY"
                }

            ]

        }

    ],


    variants: []

},


    /* =====================================================
       OFFICERS FORMAL
       NO SUB-CATEGORY
    ===================================================== */

    {
        id:
            "KSOL-UFM-OFF-001",

        category:
            "officers",

        role:
            null,

        name:
            "OFFICERS FORMAL UNIFORM",

        type:
            "FORMAL",

        image:
            "OFFICERS.jpg",

        description:
            "Authorized fictional in-game formal uniform configuration for KSOL officers.",


        specs: {

            designation:
                "KSOL-UFM-OFF-001",

            category:
                "OFFICERS (FORMAL)",

            role:
                "OFFICERS",

            formation:
                "HEADQUARTERS' DISCRETE",

            uniformClass:
                "FORMAL",

            status:
                "AUTHORIZED"

        },


        components: [

            {
                name:
                    "HEADGEAR",

                entries: [

                    {
                        label:
                            "Primary",

                        value:
                            "Beret (Low configuration)"
                    },

                    {
                        label:
                            "Camo / Color",

                        value:
                            "Maroon"
                    }

                ]

            },


            {
                name:
                    "EARWEAR",

                entries: [

                    {
                        label:
                            "System",

                        value:
                            "Comset V"
                    }

                ]

            },


            {
                name:
                    "EYEWEAR",

                entries: [

                    {
                        label:
                            "Eyewear",

                        value:
                            "ANY"
                    }

                ]

            },


            {
                name:
                    "FACEWEAR",

                entries: [

                    {
                        label:
                            "Facewear",

                        value:
                            "ANY (NO GAS MASKS)"
                    }

                ]

            },


            {
                name:
                    "SHIRT / TOP",

                entries: [

                    {
                        label:
                            "System",

                        value:
                            "HOOO"
                    },

                    {
                        label:
                            "Color",

                        value:
                            "Olive"
                    }

                ]

            },


            {
                name:
                    "PANTS / BOTTOM",

                entries: [

                    {
                        label:
                            "System",

                        value:
                            "Spectre U"
                    },

                    {
                        label:
                            "Color/Camo",

                        value:
                            "Camouflage Central Europe"
                    }

                ]

            },


            {
                name:
                    "BACKPACK",

                entries: [

                    {
                        label:
                            "Backpack",

                        value:
                            "ANY SMALL BACKPACK"
                    }

                ]

            },


            {
                name:
                    "VEST",

                entries: [

                    {
                        label:
                            "System",

                        value:
                            "6094A"
                    },

                    {
                        label:
                            "Color/Camo",

                        value:
                            "Varicam"
                    }

                ]

            },


            {
                name:
                    "BELT",

                entries: [

                    {
                        label:
                            "System",

                        value:
                            "Task Force - Ranger green"
                    },

                    {
                        label:
                            "Accessories",

                        value:
                            "Any color"
                    }

                ]

            },


            {
                name:
                    "HANDWEAR",

                entries: [

                    {
                        label:
                            "System",

                        value:
                            "NONE"
                    },

                    {
                        label:
                            "Color",

                        value:
                            "N/A"
                    }

                ]

            },


            {
                name:
                    "FOOTWEAR",

                entries: [

                    {
                        label:
                            "Footwear",

                        value:
                            "Black"
                    }

                ]

            },


            {
                name:
                    "WRISTWEAR",

                entries: [

                    {
                        label:
                            "Wristwear",

                        value:
                            "ANY"
                    }

                ]

            }

        ],


        variants: []

    }

];


/* =========================================================
   ELEMENTS
========================================================= */

const uniformGrid =
    document.getElementById(
        "uniformGrid"
    );


const uniformSearch =
    document.getElementById(
        "uniformSearch"
    );


const categoryTabs =
    document.querySelectorAll(
        ".uniform-category-tab"
    );


const roleTabs =
    document.querySelectorAll(
        ".uniform-role-tab"
    );


const standardRoles =
    document.getElementById(
        "standardRoles"
    );


const catalogueTitle =
    document.getElementById(
        "catalogueTitle"
    );


const catalogueCategory =
    document.getElementById(
        "catalogueCategory"
    );


const uniformCount =
    document.getElementById(
        "uniformCount"
    );


/* =========================================================
   MODAL
========================================================= */

const modal =
    document.getElementById(
        "uniformModal"
    );


const modalClose =
    document.getElementById(
        "uniformModalClose"
    );


const modalDesignation =
    document.getElementById(
        "modalDesignation"
    );


const modalImage =
    document.getElementById(
        "uniformModalImage"
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


const modalSpecs =
    document.getElementById(
        "modalSpecs"
    );


const modalComponents =
    document.getElementById(
        "modalComponents"
    );


const modalVariants =
    document.getElementById(
        "modalVariants"
    );


/* =========================================================
   STATE
========================================================= */

let activeCategory =
    "standard";


let activeRole =
    "infantry";


/* =========================================================
   CATEGORY NAMES
========================================================= */

const categoryNames = {

    standard:
        "STANDARD ISSUE",

    sis:
        "S I S",

    officers:
        "OFFICERS (FORMAL)"

};


/* =========================================================
   ROLE NAMES
========================================================= */

const roleNames = {

    infantry:
        "INFANTRY",

    pilot:
        "PILOT",

    "crew-gunner":
        "CREW GUNNER"

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
   RENDER UNIFORMS
========================================================= */

function renderUniforms() {

    if (!uniformGrid) {
        return;
    }


    const query =
        uniformSearch

            ? uniformSearch.value
                .trim()
                .toLowerCase()

            : "";


    let results;


    /* =====================================================
       STANDARD ISSUE
    ===================================================== */

    if (
        activeCategory ===
        "standard"
    ) {

        results =
            uniforms.filter(
                uniform =>

                    uniform.category ===
                    "standard"

                    &&

                    uniform.role ===
                    activeRole
            );

    }


    /* =====================================================
       SIS / OFFICERS
    ===================================================== */

    else {

        results =
            uniforms.filter(
                uniform =>

                    uniform.category ===
                    activeCategory
            );

    }


    /* =====================================================
       SEARCH
    ===================================================== */

    if (query) {

        results =
            results.filter(
                uniform => {

                    const componentText =
                        (
                            uniform.components ||
                            []
                        )

                        .flatMap(
                            component =>
                                component.entries || []
                        )

                        .flatMap(
                            entry => [

                                entry.label,

                                entry.value

                            ]
                        );


                    const variantText =
                        (
                            uniform.variants ||
                            []
                        )

                        .flatMap(
                            variant => [

                                variant.name,

                                variant.description

                            ]
                        );


                    const searchable = [

                        uniform.id,

                        uniform.name,

                        uniform.type,

                        uniform.description,

                        ...Object.values(
                            uniform.specs || {}
                        ),

                        ...componentText,

                        ...variantText

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

    uniformCount.textContent =
        String(
            results.length
        ).padStart(
            2,
            "0"
        );


    /* =====================================================
       EMPTY
    ===================================================== */

    if (!results.length) {

        uniformGrid.innerHTML = `

            <div class="uniform-empty">

                NO UNIFORM SYSTEMS MATCH
                THE CURRENT QUERY.

            </div>

        `;

        return;

    }


    uniformGrid.innerHTML = "";


    /* =====================================================
       CARDS
    ===================================================== */

    results.forEach(
        uniform => {

            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "uniform-card";


            card.innerHTML = `

                <div class="uniform-card-image">

                    <img
                        src="${uniform.image}"
                        alt="${uniform.name}"
                    >

                </div>


                <div class="uniform-card-content">

                    <div class="uniform-card-id">

                        ${uniform.id}

                    </div>


                    <h3>

                        ${uniform.name}

                    </h3>


                    <p
                        class="uniform-card-description"
                    >

                        ${uniform.description}

                    </p>

                </div>


                <div class="uniform-card-footer">

                    <span class="uniform-card-type">

                        ${uniform.type}

                    </span>


                    <span class="uniform-card-arrow">

                        →

                    </span>

                </div>

            `;


            const image =
                card.querySelector(
                    ".uniform-card-image img"
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

                    openUniform(
                        uniform
                    );

                }
            );


            uniformGrid.appendChild(
                card
            );

        }
    );

}


/* =========================================================
   CATEGORY SWITCH
========================================================= */

categoryTabs.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                activeCategory =
                    button.dataset.category;


                categoryTabs.forEach(
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

                    standardRoles
                        .classList
                        .remove(
                            "hidden"
                        );


                    catalogueCategory
                        .textContent =
                        categoryNames.standard;


                    catalogueTitle
                        .textContent =
                        roleNames[
                            activeRole
                        ];

                }

                else {

                    standardRoles
                        .classList
                        .add(
                            "hidden"
                        );


                    catalogueCategory
                        .textContent =
                        categoryNames[
                            activeCategory
                        ];


                    catalogueTitle
                        .textContent =
                        categoryNames[
                            activeCategory
                        ];

                }


                renderUniforms();

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


                renderUniforms();

            }
        );

    }
);


/* =========================================================
   SEARCH
========================================================= */

if (uniformSearch) {

    uniformSearch.addEventListener(
        "input",
        renderUniforms
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

            event.key.toLowerCase() ===
                "k"

        ) {

            event.preventDefault();


            if (uniformSearch) {

                uniformSearch.focus();

            }

        }

    }
);


/* =========================================================
   OPEN UNIFORM
========================================================= */

function openUniform(
    uniform
) {

    if (!modal) {
        return;
    }


    /* =====================================================
       BASIC INFORMATION
    ===================================================== */

    modalDesignation.textContent =
        uniform.id;


    modalImage.src =
        uniform.image;


    modalImage.alt =
        uniform.name;


    modalImage.style.opacity =
        "1";


    modalImage.onerror =
        function () {

            this.style.opacity =
                "0.12";

        };


    /* =====================================================
       CATEGORY LABEL
    ===================================================== */

    if (
        uniform.category ===
        "standard"
    ) {

        modalCategory.textContent =
            "STANDARD ISSUE // " +
            roleNames[
                uniform.role
            ];

    }

    else {

        modalCategory.textContent =
            categoryNames[
                uniform.category
            ];

    }


    /* =====================================================
       TITLE
    ===================================================== */

    modalTitle.textContent =
        uniform.name;


    /* =====================================================
       DESCRIPTION
    ===================================================== */

    modalDescription.textContent =
        uniform.description;


    /* =====================================================
       STATUS
    ===================================================== */

    modalStatus.textContent =
        uniform.specs?.status ||
        "AUTHORIZED";


    /* =====================================================
       SPECIFICATIONS
    ===================================================== */

    modalSpecs.innerHTML = "";


    Object.entries(
        uniform.specs || {}
    )
    .forEach(
        ([key, value]) => {

            const spec =
                document.createElement(
                    "div"
                );


            spec.className =
                "uniform-spec";


            spec.innerHTML = `

                <span>

                    ${formatFieldName(
                        key
                    )}

                </span>


                <strong>

                    ${value || "TBD"}

                </strong>

            `;


            modalSpecs.appendChild(
                spec
            );

        }
    );


    /* =====================================================
       COMPONENTS
    ===================================================== */

    modalComponents.innerHTML = "";


    if (
        !uniform.components ||
        !uniform.components.length
    ) {

        modalComponents.innerHTML = `

            <div class="uniform-empty">

                NO COMPONENT DATA AVAILABLE.

            </div>

        `;

    }

    else {

        uniform.components.forEach(
            component => {

                const card =
                    document.createElement(
                        "div"
                    );


                card.className =
                    "component-card";


                const entries =
                    component.entries || [];


                card.innerHTML = `

                    <div class="component-header">

                        <strong>

                            ${component.name}

                        </strong>


                        <span>

                            ${String(
                                entries.length
                            ).padStart(
                                2,
                                "0"
                            )}

                            ITEMS

                        </span>

                    </div>


                    <div class="component-body">

                        ${entries
                            .map(
                                entry => `

                                    <div
                                        class="component-line"
                                    >

                                        <span
                                            class="component-label"
                                        >

                                            ${entry.label}

                                        </span>


                                        <strong
                                            class="component-value"
                                        >

                                            ${entry.value}

                                        </strong>

                                    </div>

                                `
                            )
                            .join("")
                        }

                    </div>

                `;


                modalComponents.appendChild(
                    card
                );

            }
        );

    }


    /* =====================================================
       VARIANTS
    ===================================================== */

    modalVariants.innerHTML = "";


    if (
        !uniform.variants ||
        !uniform.variants.length
    ) {

        modalVariants.innerHTML = `

            <div class="uniform-empty">

                NO VARIANT DATA AVAILABLE.

            </div>

        `;

    }

    else {

        uniform.variants.forEach(
            variant => {

                const card =
                    document.createElement(
                        "article"
                    );


                card.className =
                    "variant-card";


                card.innerHTML = `

                    <img
                        src="${variant.image}"
                        alt="${variant.name}"
                        class="variant-image"
                    >


                    <div class="variant-content">

                        <strong>

                            ${variant.name}

                        </strong>


                        <span>

                            ${variant.description}

                        </span>

                    </div>

                `;


                const image =
                    card.querySelector(
                        ".variant-image"
                    );


                image.addEventListener(
                    "error",
                    () => {

                        image.style.opacity =
                            "0.12";

                    }
                );


                modalVariants.appendChild(
                    card
                );

            }
        );

    }


    /* =====================================================
       OPEN MODAL
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

function closeUniform() {

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


if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeUniform
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

                closeUniform();

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

            closeUniform();

        }

    }
);


/* =========================================================
   INITIALIZE
========================================================= */

renderUniforms();