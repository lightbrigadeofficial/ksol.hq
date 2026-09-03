/* =========================================================
   KSOL ORBAT / APPOINTMENTS
========================================================= */


const appointments = [

    {
        code: "C2",
        title: "LEGION COMMAND",
        positions: [
            {
                title: "Legion Commander",
                description: "Overall command authority of the Kali Special Operations Legion.",
                holder: "VACANT"
            },
            {
                title: "Second-in-Command (2i/c)",
                description: "Second-in-command and principal command support appointment.",
                holder: "VACANT"
            },
        ]
    },


    {
        code: "DMT",
        title: "DIRECTORATE OF MILITARY TRAINING",
        positions: [
            {
                title: "Director of Military Training",
                description: "Responsible for the military training structure of KSOL.",
                holder: "VACANT"
            },
            {
                title: "Military Training Command",
                description: "Responsible for general military training and qualification.",
                holder: "VACANT"
            },
            {
                title: "Aerial Training Command",
                description: "Responsible for aerial and aviation training.",
                holder: "VACANT"
            },
            {
                title: "Overwatch Training Command",
                description: "Responsible for overwatch and supporting specialist training.",
                holder: "VACANT"
            }
        ]
    },


    {
        code: "DRO",
        title: "DIRECTORATE OF RECRUITMENT",
        positions: [
            {
                title: "Director of Recruitment",
                description: "Responsible for recruitment and personnel intake.",
                holder: "VACANT"
            },
            {
                title: "Recruitment Officer",
                description: "Handles applicant processing and recruitment activities.",
                holder: "VACANT"
            }
        ]
    },


    {
        code: "DMO",
        title: "DIRECTORATE OF MILITARY OPERATIONS",
        positions: [
            {
                title: "Director of Military Operations",
                description: "Responsible for operational planning and coordination.",
                holder: "VACANT"
            },
            {
                title: "Operations Officer",
                description: "Supports planning, coordination and execution of operations.",
                holder: "VACANT"
            }
        ]
    },


    {
        code: "DIA",
        title: "DIRECTORATE OF INTERNAL AFFAIRS",
        positions: [
            {
                title: "Director of Internal Affairs",
                description: "Responsible for internal oversight and organizational affairs.",
                holder: "VACANT"
            },
            {
                title: "Trial Jury",
                description: "Internal judicial and disciplinary appointment.",
                holder: "VACANT"
            }
        ]
    },


    {
        code: "DPR",
        title: "DIRECTORATE OF PUBLIC RELATIONS",
        positions: [
            {
                title: "Director of Public Relations",
                description: "Responsible for public-facing communications and representation.",
                holder: "VACANT"
            },
            {
                title: "RGE Team",
                description: "Public relations and engagement function.",
                holder: "VACANT"
            },
            {
                title: "Content Team",
                description: "Responsible for organizational media and content.",
                holder: "VACANT"
            }
        ]
    },


    {
        code: "DAU",
        title: "DIRECTORATE OF ADMINISTRATIVE UTILITIES",
        positions: [
            {
                title: "Director of Administrative Utilities",
                description: "Responsible for administrative and support functions.",
                holder: "VACANT"
            }
        ]
    },


    {
        code: "PARA",
        title: "PARACHUTE REGIMENT",
        positions: [
            {
                title: "Regimental Commander",
                description: "Command appointment for the Parachute Regiment.",
                holder: "VACANT"
            },
            {
                title: "7 PARA Commander",
                description: "Command appointment for 7 PARA.",
                holder: "VACANT"
            },
            {
                title: "12 PARA Commander",
                description: "Command appointment for 12 PARA.",
                holder: "RESERVE"
            },
            {
                title: "SE7EN Commander",
                description: "Command appointment for SE7EN.",
                holder: "VACANT"
            }
        ]
    },


    {
        code: "SIS",
        title: "SPECIAL INSERTION SERVICE",
        positions: [
            {
                title: "SIS Commander",
                description: "Command appointment for the Special Insertion Service.",
                holder: "VACANT"
            }
        ]
    },


    {
        code: "AAC",
        title: "ARMY AVIATION CORPS",
        positions: [
            {
                title: "Army Aviation Commander",
                description: "Command appointment for Army Aviation Corps.",
                holder: "VACANT"
            },
            {
                title: "Aviation Operations Officer",
                description: "Coordinates aviation operations and supporting activities.",
                holder: "VACANT"
            }
        ]
    },


    {
        code: "AMC",
        title: "ARMY MEDICAL CORPS",
        positions: [
            {
                title: "Army Medical Corps Commander",
                description: "Command appointment for Army Medical Corps.",
                holder: "VACANT"
            }
        ]
    },


    {
        code: "RECON",
        title: "RECON GROUP",
        positions: [
            {
                title: "Recon Group Commander",
                description: "Command appointment for the Recon Group.",
                holder: "VACANT"
            }
        ]
    },


    {
        code: "ASC",
        title: "ARMY SERVICE CORPS",
        positions: [
            {
                title: "Army Service Corps Commander",
                description: "Command appointment for Army Service Corps.",
                holder: "VACANT"
            }
        ]
    }

];


/* =========================================================
   RENDER APPOINTMENTS
========================================================= */

const container = document.getElementById(
    "appointmentsContainer"
);

const countElement = document.getElementById(
    "appointmentCount"
);


function renderAppointments() {

    if (!container) return;

    container.innerHTML = "";

    let totalAppointments = 0;

    appointments.forEach((group, groupIndex) => {

        totalAppointments += group.positions.length;

        const groupElement = document.createElement("div");

        groupElement.className = "appointment-group";

        groupElement.innerHTML = `

            <div class="appointment-group-header">

                <div class="appointment-group-title">

                    <span class="appointment-code">
                        ${group.code}
                    </span>

                    <h3>
                        ${group.title}
                    </h3>

                </div>

                <span class="appointment-group-number">
                    ${String(groupIndex + 1).padStart(2, "0")}
                </span>

            </div>

            <div class="appointment-list">

                ${group.positions.map(position => `

                    <div class="appointment-row">

                        <div class="appointment-title">
                            ${position.title}
                        </div>

                        <div class="appointment-description">
                            ${position.description}
                        </div>

                        <div
                            class="appointment-holder ${
                                position.holder !== "VACANT"
                                ? "filled"
                                : ""
                            }"
                        >
                            ${position.holder}
                        </div>

                    </div>

                `).join("")}

            </div>

        `;

        container.appendChild(groupElement);

    });


    if (countElement) {

        countElement.textContent =
            String(totalAppointments).padStart(2, "0");

    }

}


/* =========================================================
   ORBAT LIGHTBOX
========================================================= */

const orbatViewer = document.getElementById(
    "orbatViewer"
);

const orbatLightbox = document.getElementById(
    "orbatLightbox"
);

const lightboxClose = document.getElementById(
    "lightboxClose"
);


function openLightbox() {

    if (!orbatLightbox) return;

    orbatLightbox.classList.add("open");

    orbatLightbox.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow = "hidden";

}


function closeLightbox() {

    if (!orbatLightbox) return;

    orbatLightbox.classList.remove("open");

    orbatLightbox.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow = "";

}


if (orbatViewer) {

    orbatViewer.addEventListener(
        "click",
        openLightbox
    );


    orbatViewer.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                event.preventDefault();

                openLightbox();

            }

        }
    );

}


if (lightboxClose) {

    lightboxClose.addEventListener(
        "click",
        closeLightbox
    );

}


if (orbatLightbox) {

    orbatLightbox.addEventListener(
        "click",
        event => {

            if (
                event.target === orbatLightbox
            ) {

                closeLightbox();

            }

        }
    );

}


/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeLightbox();

        }

    }
);


/* =========================================================
   INITIALIZE
========================================================= */

renderAppointments();