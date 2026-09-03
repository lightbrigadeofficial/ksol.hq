
document.addEventListener("DOMContentLoaded", () => {

    /*
     * ========================================================
     * KSOL PUBLIC ROSTER DATA
     * ========================================================
     *
     * Add actual personnel objects to this array.
     *
     * Example:
     *
     * {
     *   id: "001",
     *   name: "Member Name",
     *   callsign: "Sapphire",
     *   rank: "CPL",
     *   unit: "1st Infantry Brigade",
     *   appointment: "Team Leader",
     *   status: "active",
     *   joined: "2026-01-14",
     *   note: "Public roster record."
     * }
     *
     * status:
     * active | loa | reserve | inactive
     */

    const personnel = [
        {
        id: "000",
        name: "👑 Bravo 0-6 🕊️",
        callsign: "Bravo 0-6",
        rank: "PVT / KIA",
        unit: "Army Aviation Corps",
        appointment: "Heavenly Pilot",
        status: "kia",
        joined: "2026-08-02",
        note: "Fly high."
        },
        
        {
        id: "001",
        name: "Obi",
        callsign: "Obi",
        rank: "GEN",
        unit: "Special Insertion Service",
        appointment: "Commander, KSOL",
        status: "active",
        joined: "2026-07-16",
        note: "Public roster record."
        },

        {
        id: "002",
        name: "Wolf",
        callsign: "Wolf",
        rank: "LTG",
        unit: "Special Insertion Service",
        appointment: "2i/c, KSOL",
        status: "active",
        note: "Public roster record."
        },

        {
        id: "003",
        name: "N/A",
        callsign: "N/A",
        rank: "N/A",
        unit: "N/A",
        appointment: "Director General of Training Command",
        status: "vacant",
        note: "Public roster record."
        },

        {
        id: "004",
        name: "N/A",
        callsign: "N/A",
        rank: "N/A",
        unit: "N/A",
        appointment: "Director General of Recruitment Command",
        status: "vacant",
        note: "Public roster record."
        },

        {
        id: "005",
        name: "N/A",
        callsign: "N/A",
        rank: "N/A",
        unit: "N/A",
        appointment: "Director General of Internal Affairs",
        status: "vacant",
        note: "Public roster record."
        },

        {
        id: "006",
        name: "N/A",
        callsign: "N/A",
        rank: "N/A",
        unit: "N/A",
        appointment: "Director General of Public Relations",
        status: "vacant",
        note: "Public roster record."
        },

        {
        id: "007",
        name: "N/A",
        callsign: "N/A",
        rank: "N/A",
        unit: "N/A",
        appointment: "Director General of Internal Affairs",
        status: "vacant",
        note: "Public roster record."
        }
    ];


    /* ========================================================
       DOM
    ======================================================== */

    const searchInput = document.getElementById("rosterSearch");
    const unitFilter = document.getElementById("unitFilter");
    const rankFilter = document.getElementById("rankFilter");
    const statusFilter = document.getElementById("statusFilter");
    const sortSelect = document.getElementById("sortSelect");

    const rosterCount = document.getElementById("rosterCount");
    const rosterRows = document.getElementById("rosterRows");
    const rosterEmpty = document.getElementById("rosterEmpty");
    const rosterTableWrap = document.getElementById("rosterTableWrap");
    const rosterNoResults = document.getElementById("rosterNoResults");

    const personnelDetails =
        document.getElementById("personnelDetails");


    let selectedId = null;


    /* ========================================================
       HELPERS
    ======================================================== */

    function prettyStatus(status) {

        const labels = {
            active: "ACTIVE",
            loa: "LOA",
            vacant: "VACANT",
            inactive: "INACTIVE",
            kia: "KIA / IN MEMORIAM"
        };

        return labels[status] || "UNKNOWN";
    }


    function initials(name) {

        if (!name) return "--";

        return name
            .split(" ")
            .filter(Boolean)
            .slice(0, 2)
            .map(part => part.charAt(0).toUpperCase())
            .join("");

    }


    function rankOrder(rank) {

        const order = [
            "PVT / KIA",
            "GEN",
            "LTG",
            "MG",
            "BG",
            "COL",
            "LTC",
            "MAJ",
            "CPT",
            "1LT",
            "2LT",
            "CW5",
            "CW4",
            "CW3",
            "CW2",
            "WO1",
            "SML",
            "CSM",
            "SGM",
            "MSG",
            "SFC",
            "SSG",
            "SGT",
            "CPL",
            "LCPL",
            "SPC",
            "PFC",
            "PVT",
            "LGN"
];

        const index = order.indexOf(rank);

        return index === -1 ? 999 : index;

    }


    function uniqueSorted(values) {

        return [...new Set(
            values
                .filter(Boolean)
                .map(value => String(value).trim())
                .filter(Boolean)
        )].sort((a, b) =>
            a.localeCompare(b)
        );

    }


    /* ========================================================
       FILTER OPTIONS
    ======================================================== */

    function populateFilters() {

        uniqueSorted(personnel.map(p => p.unit))
            .forEach(unit => {

                const option =
                    document.createElement("option");

                option.value = unit;
                option.textContent = unit;

                unitFilter.appendChild(option);

            });


        uniqueSorted(personnel.map(p => p.rank))
            .sort((a, b) =>
                rankOrder(a) - rankOrder(b)
            )
            .forEach(rank => {

                const option =
                    document.createElement("option");

                option.value = rank;
                option.textContent = rank;

                rankFilter.appendChild(option);

            });

    }


    /* ========================================================
       FILTER
    ======================================================== */

    function getFilteredPersonnel() {

        const query =
            searchInput.value
                .trim()
                .toLowerCase();

        const unit =
            unitFilter.value;

        const rank =
            rankFilter.value;

        const status =
            statusFilter.value;


        return personnel.filter(person => {

            const searchable = [
                person.name,
                person.callsign,
                person.rank,
                person.unit,
                person.appointment,
                person.status
            ]
                .filter(Boolean)
                .join(" ")
                .toLowerCase();


            const matchesSearch =
                !query ||
                searchable.includes(query);


            const matchesUnit =
                unit === "all" ||
                person.unit === unit;


            const matchesRank =
                rank === "all" ||
                person.rank === rank;


            const matchesStatus =
                status === "all" ||
                person.status === status;


            return (
                matchesSearch &&
                matchesUnit &&
                matchesRank &&
                matchesStatus
            );

        });

    }


    /* ========================================================
       SORT
    ======================================================== */

    function sortPersonnel(list) {

        const mode =
            sortSelect.value;


        return [...list].sort((a, b) => {

            if (mode === "rank") {

                return (
                    rankOrder(a.rank) -
                    rankOrder(b.rank)
                );

            }


            if (mode === "name") {

                return (
                    (a.name || "").localeCompare(
                        b.name || ""
                    )
                );

            }


            if (mode === "unit") {

                return (
                    (a.unit || "").localeCompare(
                        b.unit || ""
                    )
                );

            }


            if (mode === "appointment") {

                return (
                    (a.appointment || "").localeCompare(
                        b.appointment || ""
                    )
                );

            }


            return 0;

        });

    }


    /* ========================================================
       DETAILS
    ======================================================== */

    function showPersonnel(person) {

        if (!person) {

            personnelDetails.innerHTML = `
                <div class="personnel-placeholder">
                    <span>NO RECORD SELECTED</span>
                    <p>Select a member from the roster above.</p>
                </div>
            `;

            return;

        }


        personnelDetails.innerHTML = `
            <article class="personnel-profile">

                <div class="personnel-profile-head">

                    <div>

                        <h3 class="personnel-profile-name">
                            ${person.name}
                        </h3>

                        ${
                            person.callsign
                                ? `<div class="personnel-profile-callsign">
                                    CALLSIGN // ${person.callsign}
                                   </div>`
                                : ""
                        }

                    </div>

                    <span class="roster-status status-${person.status}">
                        ${prettyStatus(person.status)}
                    </span>

                </div>


                <div class="personnel-facts">

                    <div class="personnel-fact">
                        <span>RANK</span>
                        <strong>${person.rank || "—"}</strong>
                    </div>

                    <div class="personnel-fact">
                        <span>UNIT</span>
                        <strong>${person.unit || "—"}</strong>
                    </div>

                    <div class="personnel-fact">
                        <span>APPOINTMENT</span>
                        <strong>${person.appointment || "—"}</strong>
                    </div>

                    <div class="personnel-fact">
                        <span>JOINED</span>
                        <strong>${person.joined || "—"}</strong>
                    </div>

                </div>


                ${
                    person.note
                        ? `<div class="personnel-profile-note">
                            ${person.note}
                           </div>`
                        : ""
                }

            </article>
        `;

    }


    /* ========================================================
       RENDER
    ======================================================== */

    function render() {

        const filtered =
            sortPersonnel(
                getFilteredPersonnel()
            );


        rosterCount.textContent =
            `${filtered.length} PERSONNEL`;


        /* No personnel in database */

        if (!personnel.length) {

            rosterEmpty.hidden = false;
            rosterTableWrap.hidden = true;
            rosterNoResults.hidden = true;

            showPersonnel(null);

            return;

        }


        rosterEmpty.hidden = true;


        /* Database exists but filter returns none */

        if (!filtered.length) {

            rosterTableWrap.hidden = true;
            rosterNoResults.hidden = false;

            return;

        }


        rosterNoResults.hidden = true;
        rosterTableWrap.hidden = false;


        rosterRows.innerHTML = "";


        filtered.forEach(person => {

            const row =
                document.createElement("button");

            row.type = "button";

            row.className = "roster-row";

            if (person.id === selectedId) {
                row.classList.add("active");
            }


            row.innerHTML = `

                <span class="roster-person">

                    <span class="roster-avatar">
                        ${initials(person.name)}
                    </span>

                    <span class="roster-person-info">

                        <span class="roster-person-name">
                            ${person.name || "Unknown"}
                        </span>

                        ${
                            person.callsign
                                ? `<span class="roster-person-meta">
                                    // ${person.callsign}
                                   </span>`
                                : ""
                        }

                    </span>

                </span>


                <span
                    class="roster-rank"
                    data-label="RANK:"
                >
                    ${person.rank || "—"}
                </span>


                <span
                    class="roster-unit"
                    data-label="UNIT:"
                >
                    ${person.unit || "—"}
                </span>


                <span
                    class="roster-appointment"
                    data-label="APPT:"
                >
                    ${person.appointment || "—"}
                </span>


                <span>

                    <span
                        class="roster-status status-${person.status}"
                    >
                        ${prettyStatus(person.status)}
                    </span>

                </span>

            `;


            row.addEventListener(
                "click",
                () => {

                    selectedId =
                        person.id;

                    showPersonnel(
                        person
                    );

                    render();

                }
            );


            rosterRows.appendChild(row);

        });

    }


    /* ========================================================
       EVENTS
    ======================================================== */

    [
        searchInput,
        unitFilter,
        rankFilter,
        statusFilter,
        sortSelect
    ].forEach(control => {

        control.addEventListener(
            "input",
            render
        );

        control.addEventListener(
            "change",
            render
        );

    });


    /* ========================================================
       INIT
    ======================================================== */

    populateFilters();
    render();

});
