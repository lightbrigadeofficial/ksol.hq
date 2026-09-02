/* =========================================================
   KSOL JOB CENTRE
   MANUAL FICTIONAL / IN-GAME POSITION REGISTRY
========================================================= */


/*
    ========================================================
    JOB DATA
    ========================================================

    Add new open positions by adding an object to
    the "jobs" array.

    Categories:

        command
        combat
        aviation
        special-operations
        support


    Each position supports:

        id
        category
        title
        level
        status
        slots
        description
        specs
        requirements
        responsibilities
        application
*/


const jobs = [


    /* =====================================================
       COMMAND
    ===================================================== */

    {
        id:
            "KSOL-JOB-CMD-001",

        category:
            "command",

        title:
            "COMPANY COMMANDER",

        level:
            "COMMAND APPOINTMENT",

        status:
            "OPEN",

        slots:
            "01 OPEN POST",

        description:
            "Command appointment for an eligible KSOL member responsible for an assigned company within the fictional in-game organization.",


        specs: {

            designation:
                "KSOL-JOB-CMD-001",

            department:
                "COMMAND",

            appointment:
                "COMPANY COMMANDER",

            rankRequirement:
                "SEE APPOINTMENT POLICY",

            vacancies:
                "01",

            status:
                "OPEN"

        },


        requirements: [

            "Active KSOL membership",

            "Appropriate rank for appointment",

            "Leadership qualification or equivalent command experience",

            "Demonstrated reliability and organizational competence",

            "Approval from designated command authority"

        ],


        responsibilities: [

            {
                name:
                    "PERSONNEL MANAGEMENT",

                description:
                    "Maintain organization and readiness of assigned personnel."
            },

            {
                name:
                    "TRAINING",

                description:
                    "Coordinate required training and development activities."
            },

            {
                name:
                    "EVENT MANAGEMENT",

                description:
                    "Assist with planning and execution of assigned events."
            },

            {
                name:
                    "COMMAND REPORTING",

                description:
                    "Maintain appropriate communication with higher command."
            }

        ],


        application: {

            method:
                "Internal Application",

            submission:
                "KSOL Headquarters",

            review:
                "Command Staff",

            result:
                "APPOINTMENT / NON-SELECTION"

        }

    },


    /* =====================================================
       COMBAT
    ===================================================== */

    {
        id:
            "KSOL-JOB-CBT-001",

        category:
            "combat",

        title:
            "INFANTRY TEAM LEADER",

        level:
            "FIELD APPOINTMENT",

        status:
            "OPEN",

        slots:
            "02 OPEN POSTS",

        description:
            "Open team-level leadership appointment for personnel assigned to KSOL infantry operations.",


        specs: {

            designation:
                "KSOL-JOB-CBT-001",

            department:
                "INFANTRY",

            appointment:
                "TEAM LEADER",

            rankRequirement:
                "SEE UNIT POLICY",

            vacancies:
                "02",

            status:
                "OPEN"

        },


        requirements: [

            "Active KSOL membership",

            "Infantry qualification",

            "Eligible rank",

            "Demonstrated communication ability",

            "Approval from unit leadership"

        ],


        responsibilities: [

            {
                name:
                    "TEAM LEADERSHIP",

                description:
                    "Coordinate an assigned team during fictional in-game events."
            },

            {
                name:
                    "PERSONNEL CONTROL",

                description:
                    "Maintain organization and accountability of assigned personnel."
            },

            {
                name:
                    "COMMUNICATION",

                description:
                    "Maintain effective communication with squad leadership."
            },

            {
                name:
                    "TRAINING SUPPORT",

                description:
                    "Assist with development and training of team members."
            }

        ],


        application: {

            method:
                "Unit Application",

            submission:
                "Infantry Command",

            review:
                "Unit Leadership",

            result:
                "APPOINTMENT / NON-SELECTION"

        }

    },


    /* =====================================================
       AVIATION
    ===================================================== */

    {
        id:
            "KSOL-JOB-AVI-001",

        category:
            "aviation",

        title:
            "PILOT",

        level:
            "AVIATION APPOINTMENT",

        status:
            "OPEN",

        slots:
            "03 OPEN POSTS",

        description:
            "Open pilot position for qualified KSOL aviation personnel within the fictional in-game aviation organization.",


        specs: {

            designation:
                "KSOL-JOB-AVI-001",

            department:
                "AVIATION",

            appointment:
                "PILOT",

            rankRequirement:
                "SEE AVIATION POLICY",

            vacancies:
                "03",

            status:
                "OPEN"

        },


        requirements: [

            "Active KSOL membership",

            "Aviation qualification",

            "Completion of required pilot training",

            "Demonstrated communication and teamwork",

            "Aviation staff approval"

        ],


        responsibilities: [

            {
                name:
                    "FLIGHT DUTIES",

                description:
                    "Operate assigned fictional in-game aircraft during approved events."
            },

            {
                name:
                    "CREW COORDINATION",

                description:
                    "Coordinate effectively with assigned aviation personnel."
            },

            {
                name:
                    "FLIGHT TRAINING",

                description:
                    "Participate in required aviation training activities."
            },

            {
                name:
                    "READINESS",

                description:
                    "Maintain availability and readiness for assigned events."
            }

        ],


        application: {

            method:
                "Aviation Application",

            submission:
                "KSOL Aviation",

            review:
                "Aviation Staff",

            result:
                "QUALIFIED / NON-QUALIFIED"

        }

    },


    /* =====================================================
       SPECIAL OPERATIONS
    ===================================================== */

    {
        id:
            "KSOL-JOB-SOF-001",

        category:
            "special-operations",

        title:
            "SPECIAL OPERATIONS OPERATOR",

        level:
            "SPECIALIST APPOINTMENT",

        status:
            "OPEN",

        slots:
            "02 OPEN POSTS",

        description:
            "Special operations appointment for eligible personnel within the fictional KSOL in-game organization.",


        specs: {

            designation:
                "KSOL-JOB-SOF-001",

            department:
                "SPECIAL OPERATIONS",

            appointment:
                "SPECIAL OPERATIONS OPERATOR",

            rankRequirement:
                "SELECTION BASED",

            vacancies:
                "02",

            status:
                "OPEN"

        },


        requirements: [

            "Active KSOL membership",

            "Completion of required baseline qualifications",

            "Demonstrated reliability",

            "Successful specialist evaluation",

            "Selection by appropriate authority"

        ],


        responsibilities: [

            {
                name:
                    "SPECIALIST DUTIES",

                description:
                    "Perform assigned fictional specialist responsibilities."
            },

            {
                name:
                    "TEAM INTEGRATION",

                description:
                    "Operate effectively within assigned specialist teams."
            },

            {
                name:
                    "TRAINING",

                description:
                    "Maintain required specialist qualification standards."
            },

            {
                name:
                    "PROFESSIONAL CONDUCT",

                description:
                    "Maintain KSOL standards during assigned activities."
            }

        ],


        application: {

            method:
                "Selection Process",

            submission:
                "Special Operations Command",

            review:
                "SOF Staff",

            result:
                "SELECTED / NOT SELECTED"

        }

    },


    /* =====================================================
       SUPPORT
    ===================================================== */

    {
        id:
            "KSOL-JOB-SUP-001",

        category:
            "support",

        title:
            "TRAINING STAFF",

        level:
            "SUPPORT APPOINTMENT",

        status:
            "OPEN",

        slots:
            "02 OPEN POSTS",

        description:
            "Open support appointment for personnel assisting KSOL training and qualification activities.",


        specs: {

            designation:
                "KSOL-JOB-SUP-001",

            department:
                "TRAINING",

            appointment:
                "TRAINING STAFF",

            rankRequirement:
                "SEE STAFF POLICY",

            vacancies:
                "02",

            status:
                "OPEN"

        },


        requirements: [

            "Active KSOL membership",

            "Relevant qualification or demonstrated expertise",

            "Reliable attendance",

            "Strong communication skills",

            "Staff approval"

        ],


        responsibilities: [

            {
                name:
                    "INSTRUCTION",

                description:
                    "Assist with delivery of fictional in-game training sessions."
            },

            {
                name:
                    "ASSESSMENT",

                description:
                    "Assist authorized staff with qualification assessments."
            },

            {
                name:
                    "DOCUMENTATION",

                description:
                    "Maintain appropriate training records."
            },

            {
                name:
                    "STAFF SUPPORT",

                description:
                    "Assist the training department with administrative tasks."
            }

        ],


        application: {

            method:
                "Staff Application",

            submission:
                "Training Department",

            review:
                "Training Staff",

            result:
                "APPOINTMENT / NON-SELECTION"

        }

    }

];


/* =========================================================
   ELEMENTS
========================================================= */

const jobGrid =
    document.getElementById(
        "jobGrid"
    );


const jobSearch =
    document.getElementById(
        "jobSearch"
    );


const categoryTabs =
    document.querySelectorAll(
        ".job-category-tab"
    );


const jobCategoryTitle =
    document.getElementById(
        "jobCategoryTitle"
    );


const jobTitle =
    document.getElementById(
        "jobTitle"
    );


const jobCount =
    document.getElementById(
        "jobCount"
    );


/* =========================================================
   MODAL
========================================================= */

const jobModal =
    document.getElementById(
        "jobModal"
    );


const jobModalClose =
    document.getElementById(
        "jobModalClose"
    );


const modalJobId =
    document.getElementById(
        "modalJobId"
    );


const modalJobNumber =
    document.getElementById(
        "modalJobNumber"
    );


const modalJobCategory =
    document.getElementById(
        "modalJobCategory"
    );


const modalJobTitle =
    document.getElementById(
        "modalJobTitle"
    );


const modalJobDescription =
    document.getElementById(
        "modalJobDescription"
    );


const modalJobStatus =
    document.getElementById(
        "modalJobStatus"
    );


const modalJobSpecs =
    document.getElementById(
        "modalJobSpecs"
    );


const modalJobRequirements =
    document.getElementById(
        "modalJobRequirements"
    );


const modalJobResponsibilities =
    document.getElementById(
        "modalJobResponsibilities"
    );


const modalJobApplication =
    document.getElementById(
        "modalJobApplication"
    );


/* =========================================================
   STATE
========================================================= */

let activeCategory =
    "command";


/* =========================================================
   CATEGORY NAMES
========================================================= */

const categoryNames = {

    command:
        "COMMAND",

    combat:
        "COMBAT",

    aviation:
        "AVIATION",

    "special-operations":
        "SPECIAL OPERATIONS",

    support:
        "SUPPORT"

};


/* =========================================================
   FORMAT FIELD
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
   RENDER JOBS
========================================================= */

function renderJobs() {

    if (!jobGrid) {
        return;
    }


    const query =
        jobSearch
            ? jobSearch.value
                .trim()
                .toLowerCase()
            : "";


    let results =
        jobs.filter(
            job =>
                job.category ===
                activeCategory
        );


    /* =====================================================
       SEARCH
    ===================================================== */

    if (query) {

        results =
            results.filter(
                job => {

                    const requirementText =
                        job.requirements ||
                        [];


                    const responsibilityText =
                        (
                            job.responsibilities ||
                            []
                        )
                        .flatMap(
                            item => [

                                item.name,

                                item.description

                            ]
                        );


                    const searchable = [

                        job.id,

                        job.title,

                        job.category,

                        job.level,

                        job.status,

                        job.slots,

                        job.description,

                        ...Object.values(
                            job.specs || {}
                        ),

                        ...requirementText,

                        ...responsibilityText

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

    jobCount.textContent =
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

        jobGrid.innerHTML = `

            <div class="job-empty">

                NO OPEN POSITIONS MATCH
                THE CURRENT QUERY.

            </div>

        `;

        return;

    }


    jobGrid.innerHTML = "";


    /* =====================================================
       CARDS
    ===================================================== */

    results.forEach(
        (job, index) => {

            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "job-card";


            card.innerHTML = `

                <div class="job-card-top">

                    <span class="job-card-code">

                        ${job.id}

                    </span>


                    <span class="job-card-status">

                        ${job.status}

                    </span>

                </div>


                <div class="job-card-category">

                    ${categoryNames[
                        job.category
                    ]}

                </div>


                <h3>

                    ${job.title}

                </h3>


                <p class="job-card-description">

                    ${job.description}

                </p>


                <div class="job-card-footer">

                    <span class="job-card-slots">

                        ${job.slots}

                    </span>


                    <span class="job-card-arrow">

                        →

                    </span>

                </div>

            `;


            card.addEventListener(
                "click",
                () => {

                    openJob(
                        job,
                        index
                    );

                }
            );


            jobGrid.appendChild(
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


                jobCategoryTitle
                    .textContent =
                    categoryNames[
                        activeCategory
                    ];


                jobTitle
                    .textContent =
                    "OPEN POSITIONS";


                renderJobs();

            }
        );

    }
);


/* =========================================================
   SEARCH
========================================================= */

if (jobSearch) {

    jobSearch.addEventListener(
        "input",
        renderJobs
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


            if (jobSearch) {

                jobSearch.focus();

            }

        }

    }
);


/* =========================================================
   OPEN JOB
========================================================= */

function openJob(
    job,
    index
) {

    if (!jobModal) {
        return;
    }


    /* =====================================================
       HEADER
    ===================================================== */

    modalJobId.textContent =
        job.id;


    modalJobNumber.textContent =
        String(
            index + 1
        ).padStart(
            2,
            "0"
        );


    modalJobCategory.textContent =
        categoryNames[
            job.category
        ];


    modalJobTitle.textContent =
        job.title;


    modalJobDescription.textContent =
        job.description;


    modalJobStatus.textContent =
        job.status;


    /* =====================================================
       SPECIFICATIONS
    ===================================================== */

    modalJobSpecs.innerHTML = "";


    Object.entries(
        job.specs || {}
    )
    .forEach(
        ([key, value]) => {

            const spec =
                document.createElement(
                    "div"
                );


            spec.className =
                "job-spec";


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


            modalJobSpecs.appendChild(
                spec
            );

        }
    );


    /* =====================================================
       REQUIREMENTS
    ===================================================== */

    modalJobRequirements.innerHTML = "";


    if (
        !job.requirements ||
        !job.requirements.length
    ) {

        modalJobRequirements.innerHTML = `

            <div class="job-empty">

                NO REQUIREMENTS LISTED.

            </div>

        `;

    }

    else {

        job.requirements.forEach(
            (requirement, requirementIndex) => {

                const item =
                    document.createElement(
                        "div"
                    );


                item.className =
                    "requirement";


                item.innerHTML = `

                    <span
                        class="requirement-index"
                    >

                        ${String(
                            requirementIndex + 1
                        ).padStart(
                            2,
                            "0"
                        )}

                    </span>


                    <span>

                        ${requirement}

                    </span>

                `;


                modalJobRequirements.appendChild(
                    item
                );

            }
        );

    }


    /* =====================================================
       RESPONSIBILITIES
    ===================================================== */

    modalJobResponsibilities.innerHTML = "";


    if (
        !job.responsibilities ||
        !job.responsibilities.length
    ) {

        modalJobResponsibilities.innerHTML = `

            <div class="job-empty">

                NO RESPONSIBILITIES LISTED.

            </div>

        `;

    }

    else {

        job.responsibilities.forEach(
            (responsibility, responsibilityIndex) => {

                const card =
                    document.createElement(
                        "article"
                    );


                card.className =
                    "responsibility-card";


                card.innerHTML = `

                    <div class="responsibility-number">

                        ${String(
                            responsibilityIndex + 1
                        ).padStart(
                            2,
                            "0"
                        )}

                    </div>


                    <strong>

                        ${responsibility.name}

                    </strong>


                    <span>

                        ${responsibility.description}

                    </span>

                `;


                modalJobResponsibilities.appendChild(
                    card
                );

            }
        );

    }


    /* =====================================================
       APPLICATION
    ===================================================== */

    modalJobApplication.innerHTML = "";


    Object.entries(
        job.application || {}
    )
    .forEach(
        ([key, value]) => {

            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "application-card";


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


            modalJobApplication.appendChild(
                card
            );

        }
    );


    /* =====================================================
       OPEN
    ===================================================== */

    jobModal.classList.add(
        "open"
    );


    jobModal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.style.overflow =
        "hidden";

}


/* =========================================================
   CLOSE
========================================================= */

function closeJob() {

    if (!jobModal) {
        return;
    }


    jobModal.classList.remove(
        "open"
    );


    jobModal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.style.overflow =
        "";

}


if (jobModalClose) {

    jobModalClose.addEventListener(
        "click",
        closeJob
    );

}


/* =========================================================
   CLICK OUTSIDE
========================================================= */

if (jobModal) {

    jobModal.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                jobModal
            ) {

                closeJob();

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

            closeJob();

        }

    }
);


/* =========================================================
   INITIALIZE
========================================================= */

renderJobs();