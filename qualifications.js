/* =========================================================
   KSOL QUALIFICATIONS
   MANUAL FICTIONAL / IN-GAME REGISTRY
========================================================= */


/*
    ========================================================
    QUALIFICATION CATEGORIES
    ========================================================

    COMBAT
        - Basic Training
        - Military Occupational Speciality Training
        - Marksmanship Course
        - Sniper Course
        - Combat Driver-cum-Gunners Course
        - Combat Medic Course

    LEADERSHIP
        - Officers Training
        - Leadership Course
        - NCO Evaluation Board
        - Officers Evaluation Board

    AVIATION
        - Pilot Combat Flight Course
        - Flight Crew-Gunners Course

    SOF
        - Special Insertion Service Probation
*/


const qualifications = [


    /* =====================================================
       COMBAT
    ===================================================== */

    {
        id:
            "KSOL-QUAL-CBT-001",

        category:
            "combat",

        name:
            "BASIC TRAINING",

        level:
            "ENTRY QUALIFICATION",

        status:
            "ACTIVE",

        description:
            "Foundational KSOL training qualification establishing the baseline standard for personnel entering organized faction activities.",

        specs: {

            designation:
                "KSOL-QUAL-CBT-001",

            category:
                "COMBAT",

            qualificationLevel:
                "ENTRY",

            qualificationType:
                "TRAINING COURSE",

            issuingAuthority:
                "MILITARY TRAINING COMMAND",

            status:
                "ACTIVE"

        },

        evaluation: {

            method:
                "Instructor Evaluation",

            format:
                "Practical Assessment",

            authority:
                "Military Training Command",

            result:
                "PASS / FAIL"

        }

    },


    {
        id:
            "KSOL-QUAL-CBT-002",

        category:
            "combat",

        name:
            "MILITARY OCCUPATIONAL SPECIALITY TRAINING",

        level:
            "SPECIALITY QUALIFICATION",

        status:
            "ACTIVE",

        description:
            "Speciality training qualification for personnel assigned to a designated military occupational speciality within KSOL.",

        specs: {

            designation:
                "KSOL-QUAL-CBT-002",

            category:
                "COMBAT",

            qualificationLevel:
                "SPECIALIST",

            qualificationType:
                "SPECIALITY TRAINING",

            issuingAuthority:
                "MILITARY TRAINING COMMAND",

            status:
                "ACTIVE"

        },

        evaluation: {

            method:
                "Speciality Evaluation",

            format:
                "Course Assessment",

            authority:
                "Designated Training Staff",

            result:
                "QUALIFIED / NOT QUALIFIED"

        }

    },


    {
        id:
            "KSOL-QUAL-CBT-003",

        category:
            "combat",

        name:
            "MARKSMANSHIP COURSE",

        level:
            "COMBAT QUALIFICATION",

        status:
            "ACTIVE",

        description:
            "Qualification course establishing the required fictional in-game marksmanship standard for assigned KSOL personnel.",

        specs: {

            designation:
                "KSOL-QUAL-CBT-003",

            category:
                "COMBAT",

            qualificationLevel:
                "FIELD",

            qualificationType:
                "MARKSMANSHIP",

            issuingAuthority:
                "OVERWATCH TRAINING COMMAND",

            status:
                "ACTIVE"

        },

        evaluation: {

            method:
                "Range Evaluation",

            format:
                "Qualification Assessment",

            authority:
                "Authorized Instructor",

            result:
                "QUALIFIED / NOT QUALIFIED"

        }

    },


    {
        id:
            "KSOL-QUAL-CBT-004",

        category:
            "combat",

        name:
            "SNIPER COURSE",

        level:
            "SPECIALIST QUALIFICATION",

        status:
            "ACTIVE",

        description:
            "Specialist qualification for personnel designated for fictional in-game sniper duties within KSOL.",

        specs: {

            designation:
                "KSOL-QUAL-CBT-004",

            category:
                "COMBAT",

            qualificationLevel:
                "SPECIALIST",

            qualificationType:
                "SNIPER",

            issuingAuthority:
                "OVERWATCH TRAINING COMMAND",

            status:
                "ACTIVE"

        },

        evaluation: {

            method:
                "Specialist Evaluation",

            format:
                "Qualification Assessment",

            authority:
                "Authorized Training Staff",

            result:
                "QUALIFIED / NOT QUALIFIED"

        }

    },


    {
        id:
            "KSOL-QUAL-CBT-005",

        category:
            "combat",

        name:
            "COMBAT DRIVER-CUM-GUNNERS COURSE",

        level:
            "CREW QUALIFICATION",

        status:
            "ACTIVE",

        description:
            "Qualification for personnel assigned to fictional in-game combat driving and crew-gunner responsibilities.",

        specs: {

            designation:
                "KSOL-QUAL-CBT-005",

            category:
                "COMBAT",

            qualificationLevel:
                "CREW",

            qualificationType:
                "DRIVER / GUNNER",

            issuingAuthority:
                "MILITARY TRAINING COMMAND",

            status:
                "ACTIVE"

        },

        evaluation: {

            method:
                "Crew Evaluation",

            format:
                "Practical Assessment",

            authority:
                "Designated Crew Training Staff",

            result:
                "QUALIFIED / NOT QUALIFIED"

        }

    },


    {
        id:
            "KSOL-QUAL-CBT-006",

        category:
            "combat",

        name:
            "COMBAT MEDIC COURSE",

        level:
            "SPECIALIST QUALIFICATION",

        status:
            "ACTIVE",

        description:
            "Qualification for fictional in-game personnel assigned combat medic responsibilities within KSOL.",

        specs: {

            designation:
                "KSOL-QUAL-CBT-006",

            category:
                "COMBAT",

            qualificationLevel:
                "SPECIALIST",

            qualificationType:
                "MEDICAL",

            issuingAuthority:
                "MILITARY TRAINING COMMAND",

            status:
                "ACTIVE"

        },

        evaluation: {

            method:
                "Medic Evaluation",

            format:
                "Practical Assessment",

            authority:
                "Designated Medical Training Staff",

            result:
                "QUALIFIED / NOT QUALIFIED"

        }

    },


    /* =====================================================
       LEADERSHIP
    ===================================================== */

    {
        id:
            "KSOL-QUAL-LDR-001",

        category:
            "leadership",

        name:
            "OFFICERS TRAINING",

        level:
            "OFFICER QUALIFICATION",

        status:
            "ACTIVE",

        description:
            "Formal fictional in-game training qualification for personnel entering or progressing through KSOL officer responsibilities.",

        specs: {

            designation:
                "KSOL-QUAL-LDR-001",

            category:
                "LEADERSHIP",

            qualificationLevel:
                "OFFICER",

            qualificationType:
                "OFFICER TRAINING",

            issuingAuthority:
                "OFFICERS TRAINING ACADEMY",

            status:
                "ACTIVE"

        },

        evaluation: {

            method:
                "Officer Assessment",

            format:
                "Training Evaluation",

            authority:
                "Command Staff",

            result:
                "QUALIFIED / NOT QUALIFIED"

        }

    },


    {
        id:
            "KSOL-QUAL-LDR-002",

        category:
            "leadership",

        name:
            "LEADERSHIP COURSE",

        level:
            "LEADERSHIP QUALIFICATION",

        status:
            "ACTIVE",

        description:
            "Leadership development qualification covering fictional in-game command, personnel management and organizational responsibilities.",

        specs: {

            designation:
                "KSOL-QUAL-LDR-002",

            category:
                "LEADERSHIP",

            qualificationLevel:
                "LEADERSHIP",

            qualificationType:
                "LEADERSHIP COURSE",

            issuingAuthority:
                "OFFICERS TRAINING ACADEMY",

            status:
                "ACTIVE"

        },

        evaluation: {

            method:
                "Leadership Evaluation",

            format:
                "Course Assessment",

            authority:
                "Command Staff",

            result:
                "QUALIFIED / NOT QUALIFIED"

        }

    },


    {
        id:
            "KSOL-QUAL-LDR-003",

        category:
            "leadership",

        name:
            "NCO EVALUATION BOARD",

        level:
            "EVALUATION BOARD",

        status:
            "ACTIVE",

        description:
            "Formal evaluation board for KSOL non-commissioned officers and personnel being considered for expanded leadership responsibilities.",

        specs: {

            designation:
                "KSOL-QUAL-LDR-003",

            category:
                "LEADERSHIP",

            qualificationLevel:
                "NCO",

            qualificationType:
                "EVALUATION BOARD",

            issuingAuthority:
                "KSOL HQ",

            status:
                "ACTIVE"

        },

        evaluation: {

            method:
                "Evaluation Board",

            format:
                "Board Review",

            authority:
                "Senior NCO / Command Staff",

            result:
                "PASS / FAIL"

        }

    },


    {
        id:
            "KSOL-QUAL-LDR-004",

        category:
            "leadership",

        name:
            "OFFICERS EVALUATION BOARD",

        level:
            "EVALUATION BOARD",

        status:
            "ACTIVE",

        description:
            "Formal command evaluation board for KSOL officers and personnel being considered for senior leadership responsibilities.",

        specs: {

            designation:
                "KSOL-QUAL-LDR-004",

            category:
                "LEADERSHIP",

            qualificationLevel:
                "OFFICER",

            qualificationType:
                "EVALUATION BOARD",

            issuingAuthority:
                "KSOL HQ",

            status:
                "ACTIVE"

        },

        evaluation: {

            method:
                "Officers Board",

            format:
                "Board Review",

            authority:
                "Senior Command Staff",

            result:
                "PASS / FAIL"

        }

    },


    /* =====================================================
       AVIATION
    ===================================================== */

    {
        id:
            "KSOL-QUAL-AVI-001",

        category:
            "aviation",

        name:
            "PILOT COMBAT FLIGHT COURSE",

        level:
            "AVIATION QUALIFICATION",

        status:
            "ACTIVE",

        description:
            "Fictional in-game aviation qualification for pilots assigned to KSOL combat flight activities.",

        specs: {

            designation:
                "KSOL-QUAL-AVI-001",

            category:
                "AVIATION",

            qualificationLevel:
                "PILOT",

            qualificationType:
                "COMBAT FLIGHT",

            issuingAuthority:
                "AERIAL TRAINING COMMAND",

            status:
                "ACTIVE"

        },

        evaluation: {

            method:
                "Flight Evaluation",

            format:
                "Practical Flight Assessment",

            authority:
                "Qualified Aviation Staff",

            result:
                "QUALIFIED / NOT QUALIFIED"

        }

    },


    {
        id:
            "KSOL-QUAL-AVI-002",

        category:
            "aviation",

        name:
            "FLIGHT CREW-GUNNERS COURSE",

        level:
            "AVIATION CREW QUALIFICATION",

        status:
            "ACTIVE",

        description:
            "Fictional in-game aviation qualification for personnel assigned flight crew-gunner duties.",

        specs: {

            designation:
                "KSOL-QUAL-AVI-002",

            category:
                "AVIATION",

            qualificationLevel:
                "CREW",

            qualificationType:
                "FLIGHT CREW-GUNNER",

            issuingAuthority:
                "AERIAL TRAINING COMMAND",

            status:
                "ACTIVE"

        },

        evaluation: {

            method:
                "Crew Evaluation",

            format:
                "Practical Assessment",

            authority:
                "Qualified Aviation Staff",

            result:
                "QUALIFIED / NOT QUALIFIED"

        }

    },


    /* =====================================================
       SOF
    ===================================================== */

    {
        id:
            "KSOL-QUAL-SOF-001",

        category:
            "sof",

        name:
            "SPECIAL INSERTION SERVICE PROBATION",

        level:
            "SPECIAL OPERATIONS QUALIFICATION",

        status:
            "ACTIVE",

        description:
            "Probationary qualification and evaluation period for personnel seeking assignment to the fictional KSOL Special Insertion Service.",

        specs: {

            designation:
                "KSOL-QUAL-SOF-001",

            category:
                "SOF",

            qualificationLevel:
                "SPECIALIST",

            qualificationType:
                "PROBATION",

            issuingAuthority:
                "SPECIAL INSERTION SERVICE",

            status:
                "ACTIVE"

        },

        evaluation: {

            method:
                "S I S Evaluation",

            format:
                "Probationary Assessment",

            authority:
                "S I S Command",

            result:
                "PASS / FAIL"

        }

    }

];


/* =========================================================
   ELEMENTS
========================================================= */

const qualificationGrid =
    document.getElementById(
        "qualificationGrid"
    );


const qualificationSearch =
    document.getElementById(
        "qualificationSearch"
    );


const categoryTabs =
    document.querySelectorAll(
        ".qualification-category-tab"
    );


const catalogueCategory =
    document.getElementById(
        "catalogueCategory"
    );


const catalogueTitle =
    document.getElementById(
        "catalogueTitle"
    );


const qualificationCount =
    document.getElementById(
        "qualificationCount"
    );


/* =========================================================
   MODAL ELEMENTS
========================================================= */

const qualificationModal =
    document.getElementById(
        "qualificationModal"
    );


const qualificationModalClose =
    document.getElementById(
        "qualificationModalClose"
    );


const modalDesignation =
    document.getElementById(
        "modalDesignation"
    );


const modalNumber =
    document.getElementById(
        "modalNumber"
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


const modalEvaluation =
    document.getElementById(
        "modalEvaluation"
    );


/* =========================================================
   STATE
========================================================= */

let activeCategory =
    "combat";


/* =========================================================
   CATEGORY NAMES
========================================================= */

const categoryNames = {

    combat:
        "COMBAT",

    leadership:
        "LEADERSHIP",

    aviation:
        "AVIATION",

    sof:
        "SOF"

};


/* =========================================================
   FIELD FORMATTER
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
   RENDER QUALIFICATIONS
========================================================= */

function renderQualifications() {

    if (!qualificationGrid) {
        return;
    }


    const query =
        qualificationSearch

            ? qualificationSearch.value
                .trim()
                .toLowerCase()

            : "";


    let results =
        qualifications.filter(
            qualification =>

                qualification.category ===
                activeCategory
        );


    /* =====================================================
       SEARCH
    ===================================================== */

    if (query) {

        results =
            results.filter(
                qualification => {

                    const searchable = [

                        qualification.id,

                        qualification.name,

                        qualification.category,

                        qualification.level,

                        qualification.status,

                        qualification.description,

                        ...Object.values(
                            qualification.specs ||
                            {}
                        ),

                        ...Object.values(
                            qualification.evaluation ||
                            {}
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

    qualificationCount.textContent =
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

        qualificationGrid.innerHTML = `

            <div class="qualification-empty">

                NO QUALIFICATIONS MATCH
                THE CURRENT QUERY.

            </div>

        `;

        return;

    }


    qualificationGrid.innerHTML = "";


    /* =====================================================
       CARDS
    ===================================================== */

    results.forEach(
        (qualification, index) => {

            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "qualification-card";


            card.innerHTML = `

                <div class="qualification-card-top">

                    <span
                        class="qualification-card-code"
                    >

                        ${qualification.id}

                    </span>


                    <span
                        class="qualification-card-status"
                    >

                        ${qualification.status}

                    </span>

                </div>


                <div class="qualification-card-category">

                    ${categoryNames[
                        qualification.category
                    ]}

                </div>


                <h3>

                    ${qualification.name}

                </h3>


                <p
                    class="qualification-card-description"
                >

                    ${qualification.description}

                </p>


                <div class="qualification-card-footer">

                    <span
                        class="qualification-card-level"
                    >

                        ${qualification.level}

                    </span>


                    <span
                        class="qualification-card-arrow"
                    >

                        →

                    </span>

                </div>

            `;


            card.addEventListener(
                "click",
                () => {

                    openQualification(
                        qualification,
                        index
                    );

                }
            );


            qualificationGrid.appendChild(
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


                catalogueCategory
                    .textContent =
                    categoryNames[
                        activeCategory
                    ];


                catalogueTitle
                    .textContent =
                    categoryNames[
                        activeCategory
                    ] +
                    " QUALIFICATIONS";


                renderQualifications();

            }
        );

    }
);


/* =========================================================
   SEARCH
========================================================= */

if (qualificationSearch) {

    qualificationSearch.addEventListener(
        "input",
        renderQualifications
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


            if (qualificationSearch) {

                qualificationSearch.focus();

            }

        }

    }
);


/* =========================================================
   OPEN QUALIFICATION
========================================================= */

function openQualification(
    qualification,
    index
) {

    if (!qualificationModal) {
        return;
    }


    /* =====================================================
       HEADER
    ===================================================== */

    modalDesignation.textContent =
        qualification.id;


    modalNumber.textContent =
        String(
            index + 1
        ).padStart(
            2,
            "0"
        );


    modalCategory.textContent =
        categoryNames[
            qualification.category
        ];


    modalTitle.textContent =
        qualification.name;


    modalDescription.textContent =
        qualification.description;


    modalStatus.textContent =
        qualification.status;


    /* =====================================================
       SPECIFICATIONS
    ===================================================== */

    modalSpecs.innerHTML = "";


    Object.entries(
        qualification.specs || {}
    )
    .forEach(
        ([key, value]) => {

            const spec =
                document.createElement(
                    "div"
                );


            spec.className =
                "qualification-spec";


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
       EVALUATION
    ===================================================== */

    modalEvaluation.innerHTML = "";


    Object.entries(
        qualification.evaluation || {}
    )
    .forEach(
        ([key, value]) => {

            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "evaluation-card";


            card.innerHTML = `

                <span>

                    ${formatFieldName(
                        key
                    )}

                </span>


                <strong>

                    ${value || "TBD"}

                </strong>

            `;


            modalEvaluation.appendChild(
                card
            );

        }
    );


    /* =====================================================
       OPEN MODAL
    ===================================================== */

    qualificationModal.classList.add(
        "open"
    );


    qualificationModal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.style.overflow =
        "hidden";

}


/* =========================================================
   CLOSE MODAL
========================================================= */

function closeQualification() {

    if (!qualificationModal) {
        return;
    }


    qualificationModal.classList.remove(
        "open"
    );


    qualificationModal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.style.overflow =
        "";

}


if (qualificationModalClose) {

    qualificationModalClose.addEventListener(
        "click",
        closeQualification
    );

}


/* =========================================================
   CLICK OUTSIDE
========================================================= */

if (qualificationModal) {

    qualificationModal.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                qualificationModal
            ) {

                closeQualification();

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

            closeQualification();

        }

    }
);


/* =========================================================
   INITIALIZE
========================================================= */

renderQualifications();