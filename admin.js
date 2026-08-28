/*
 * ==========================================================
 * KSOL ADMINISTRATION
 * ==========================================================
 *
 * SUPABASE TABLES
 *
 * personnel
 * qualifications
 * rank_history
 * unit_history
 * service_logs
 * unit_catalog
 * award_catalog
 * personnel_awards
 *
 * ==========================================================
 */


const KSOL_SUPABASE_URL =
    "https://erhupqckxnfoqhgnksrl.supabase.co";

const KSOL_SUPABASE_PUBLISHABLE_KEY =
    "sb_publishable_AsGoP8NNzT_kgR40sz9lXw_GcLdGkbg";


let supabaseClient = null;

let currentUser = null;

let currentSection = "personnel";

let personnelCache = [];

let awardCatalogCache = [];

let unitCatalogCache = [];

let selectedPersonnelId = null;

let selectedRecord = null;

let selectedRecordType = null;


/* ==========================================================
   SUPABASE INITIALIZATION
========================================================== */

if (
    typeof window.supabase !== "undefined"
) {

    supabaseClient =
        window.supabase.createClient(
            KSOL_SUPABASE_URL,
            KSOL_SUPABASE_PUBLISHABLE_KEY
        );

}


/* ==========================================================
   GENERAL HELPERS
========================================================== */

function escapeHtml(value) {

    if (
        value === null ||
        value === undefined
    ) {
        return "";
    }

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


function formatDate(value) {

    if (!value) {
        return "—";
    }

    return value;

}


function showToast(
    title,
    message,
    type = "success"
) {

    const toast =
        document.getElementById(
            "adminToast"
        );

    const toastTitle =
        document.getElementById(
            "toastTitle"
        );

    const toastMessage =
        document.getElementById(
            "toastMessage"
        );

    const toastIcon =
        document.getElementById(
            "toastIcon"
        );


    if (!toast) {
        return;
    }


    if (toastTitle) {
        toastTitle.textContent =
            title;
    }


    if (toastMessage) {
        toastMessage.textContent =
            message;
    }


    if (toastIcon) {

        toastIcon.textContent =
            type === "error"
                ? "!"
                : type === "warning"
                    ? "!"
                    : "✓";

    }


    toast.classList.add(
        "active"
    );


    window.clearTimeout(
        toast._timeout
    );


    toast._timeout =
        window.setTimeout(
            () => {

                toast.classList.remove(
                    "active"
                );

            },
            3500
        );

}


function showError(
    message
) {

    console.error(
        message
    );

    showToast(
        "Error",
        message,
        "error"
    );

}


function getElement(
    id
) {

    return document.getElementById(
        id
    );

}


/* ==========================================================
   AUTHENTICATION
========================================================== */

async function initializeAdmin() {

    if (!supabaseClient) {

        showError(
            "Supabase is not configured."
        );

        return;

    }


    const {
        data: {
            user
        },
        error
    } =
        await supabaseClient.auth.getUser();


    if (
        error ||
        !user
    ) {

        window.location.href =
            "login.html";

        return;

    }


    currentUser =
        user;


    /*
     * ADMIN UI GATE
     *
     * Expected Supabase user metadata:
     *
     * app_metadata.role = "admin"
     *
     * IMPORTANT:
     * Actual database RLS must also enforce this.
     */

    const role =
        user.app_metadata?.role;


    if (
        role !== "admin"
    ) {

        document.body.innerHTML = `
            <div style="
                min-height:100vh;
                display:flex;
                align-items:center;
                justify-content:center;
                background:#080a0d;
                color:#e8ebee;
                font-family:Arial,sans-serif;
                text-align:center;
                padding:30px;
            ">
                <div>
                    <div style="
                        color:#d96666;
                        font-size:10px;
                        font-weight:700;
                        letter-spacing:2px;
                        margin-bottom:10px;
                    ">
                        ACCESS DENIED
                    </div>

                    <h1 style="
                        margin:0;
                        font-size:30px;
                    ">
                        Administrator privileges required
                    </h1>

                    <p style="
                        color:#6f7882;
                        margin-top:10px;
                    ">
                        This account does not have KSOL administrative access.
                    </p>

                    <button
                        onclick="window.location.href='login.html'"
                        style="
                            margin-top:20px;
                            padding:10px 18px;
                            border:1px solid #c9a45c;
                            background:#c9a45c;
                            color:#17130b;
                            cursor:pointer;
                        "
                    >
                        RETURN TO LOGIN
                    </button>
                </div>
            </div>
        `;

        return;

    }


    const adminName =
        getElement(
            "adminName"
        );


    if (adminName) {

        adminName.textContent =
            user.user_metadata?.display_name ||
            user.user_metadata?.username ||
            user.email ||
            "Administrator";

    }


    setupNavigation();

    setupSidebar();

    setupModals();

    setupFilters();

    setupLogout();

    await loadAllCatalogs();

    await loadPersonnel();

}


/* ==========================================================
   NAVIGATION
========================================================== */

function setupNavigation() {

    document
        .querySelectorAll(
            ".nav-item"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        const section =
                            button.dataset.section;

                        switchSection(
                            section
                        );

                    }
                );

            }
        );

}


function switchSection(
    section
) {

    currentSection =
        section;


    document
        .querySelectorAll(
            ".nav-item"
        )
        .forEach(
            button => {

                button.classList.toggle(
                    "active",
                    button.dataset.section ===
                    section
                );

            }
        );


    document
        .querySelectorAll(
            ".admin-section"
        )
        .forEach(
            element => {

                element.classList.toggle(
                    "active",
                    element.id ===
                    `section-${section}`
                );

            }
        );


    const title =
        getElement(
            "pageTitle"
        );


    const titles = {

        personnel:
            "Personnel",

        awards:
            "Awards",

        qualifications:
            "Qualifications",

        "rank-history":
            "Rank History",

        "unit-history":
            "Unit History",

        "service-logs":
            "Service Logs",

        units:
            "Unit Catalog",

        "award-catalog":
            "Award Catalog"

    };


    if (title) {

        title.textContent =
            titles[section] ||
            "Administration";

    }


    closeSidebar();


    refreshSection(
        section
    );

}


/* ==========================================================
   MOBILE SIDEBAR
========================================================== */

function setupSidebar() {

    const toggle =
        getElement(
            "sidebarToggle"
        );


    if (!toggle) {
        return;
    }


    toggle.addEventListener(
        "click",
        () => {

            const sidebar =
                document.querySelector(
                    ".admin-sidebar"
                );


            if (!sidebar) {
                return;
            }


            sidebar.classList.toggle(
                "open"
            );

        }
    );

}


function closeSidebar() {

    const sidebar =
        document.querySelector(
            ".admin-sidebar"
        );


    if (sidebar) {

        sidebar.classList.remove(
            "open"
        );

    }

}


/* ==========================================================
   LOGOUT
========================================================== */

function setupLogout() {

    const button =
        getElement(
            "adminLogout"
        );


    if (!button) {
        return;
    }


    button.addEventListener(
        "click",
        async () => {

            try {

                await supabaseClient.auth.signOut();

            }
            catch (error) {

                console.error(
                    error
                );

            }


            window.location.href =
                "login.html";

        }
    );

}


/* ==========================================================
   MODAL
========================================================== */

function setupModals() {

    const recordModal =
        getElement(
            "recordModal"
        );


    const deleteModal =
        getElement(
            "deleteModal"
        );


    const closeModal =
        getElement(
            "closeModal"
        );


    const cancelModal =
        getElement(
            "cancelModal"
        );


    const closeDeleteModal =
        getElement(
            "closeDeleteModal"
        );


    const cancelDelete =
        getElement(
            "cancelDelete"
        );


    const confirmDelete =
        getElement(
            "confirmDelete"
        );


    if (closeModal) {

        closeModal.addEventListener(
            "click",
            closeRecordModal
        );

    }


    if (cancelModal) {

        cancelModal.addEventListener(
            "click",
            closeRecordModal
        );

    }


    if (closeDeleteModal) {

        closeDeleteModal.addEventListener(
            "click",
            closeDeleteConfirmation
        );

    }


    if (cancelDelete) {

        cancelDelete.addEventListener(
            "click",
            closeDeleteConfirmation
        );

    }


    if (confirmDelete) {

        confirmDelete.addEventListener(
            "click",
            performDelete
        );

    }


    document.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                recordModal
            ) {

                closeRecordModal();

            }


            if (
                event.target ===
                deleteModal
            ) {

                closeDeleteConfirmation();

            }

        }
    );

}


/* ==========================================================
   FILTERS
========================================================== */

function setupFilters() {

    const search =
        getElement(
            "personnelSearch"
        );


    const status =
        getElement(
            "personnelStatusFilter"
        );


    if (search) {

        search.addEventListener(
            "input",
            renderPersonnelTable
        );

    }


    if (status) {

        status.addEventListener(
            "change",
            renderPersonnelTable
        );

    }


    const awardPersonnel =
        getElement(
            "awardPersonnelFilter"
        );


    if (awardPersonnel) {

        awardPersonnel.addEventListener(
            "change",
            () =>
                loadPersonnelAwards(
                    awardPersonnel.value
                )
        );

    }


    const qualificationPersonnel =
        getElement(
            "qualificationPersonnelFilter"
        );


    if (qualificationPersonnel) {

        qualificationPersonnel.addEventListener(
            "change",
            () =>
                loadPersonnelQualifications(
                    qualificationPersonnel.value
                )
        );

    }


    const rankPersonnel =
        getElement(
            "rankPersonnelFilter"
        );


    if (rankPersonnel) {

        rankPersonnel.addEventListener(
            "change",
            () =>
                loadPersonnelRankHistory(
                    rankPersonnel.value
                )
        );

    }


    const unitHistoryPersonnel =
        getElement(
            "unitHistoryPersonnelFilter"
        );


    if (
        unitHistoryPersonnel
    ) {

        unitHistoryPersonnel.addEventListener(
            "change",
            () =>
                loadPersonnelUnitHistory(
                    unitHistoryPersonnel.value
                )
        );

    }


    const serviceLogPersonnel =
        getElement(
            "serviceLogPersonnelFilter"
        );


    if (serviceLogPersonnel) {

        serviceLogPersonnel.addEventListener(
            "change",
            () =>
                loadServiceLogs(
                    serviceLogPersonnel.value
                )
        );

    }


    const serviceLogCategory =
        getElement(
            "serviceLogCategoryFilter"
        );


    if (serviceLogCategory) {

        serviceLogCategory.addEventListener(
            "change",
            () =>
                loadServiceLogs(
                    serviceLogPersonnel?.value
                )
        );

    }


    const awardCatalogSearch =
        getElement(
            "awardCatalogSearch"
        );


    const awardCatalogCategory =
        getElement(
            "awardCatalogCategory"
        );


    if (awardCatalogSearch) {

        awardCatalogSearch.addEventListener(
            "input",
            renderAwardCatalog
        );

    }


    if (awardCatalogCategory) {

        awardCatalogCategory.addEventListener(
            "change",
            renderAwardCatalog
        );

    }

}


/* ==========================================================
   BUTTON SETUP
========================================================== */

function setupSectionButtons() {

    const buttons = {

        addPersonnelButton:
            openPersonnelCreate,

        addAwardButton:
            openAwardCreate,

        addQualificationButton:
            openQualificationCreate,

        addRankHistoryButton:
            openRankHistoryCreate,

        addUnitHistoryButton:
            openUnitHistoryCreate,

        addServiceLogButton:
            openServiceLogCreate,

        addUnitButton:
            openUnitCreate,

        addCatalogAwardButton:
            openAwardCatalogCreate

    };


    Object.entries(
        buttons
    )
    .forEach(
        ([id, handler]) => {

            const button =
                getElement(id);

            if (button) {

                button.addEventListener(
                    "click",
                    handler
                );

            }

        }
    );

}


/* ==========================================================
   PERSONNEL
========================================================== */

async function loadPersonnel() {

    try {

        const {
            data,
            error
        } =
            await supabaseClient
                .from("personnel")
                .select(`
                    id,
                    user_id,
                    service_number,
                    username,
                    display_name,
                    callsign,
                    rank,
                    unit,
                    appointment,
                    status,
                    join_date,
                    profile_note,
                    created_at,
                    updated_at
                `)
                .order(
                    "service_number",
                    {
                        ascending: true
                    }
                );


        if (error) {
            throw error;
        }


        personnelCache =
            data || [];


        populatePersonnelFilters();

        updatePersonnelStats();

        renderPersonnelTable();

    }
    catch (error) {

        console.error(
            "Personnel load:",
            error
        );

        showError(
            "Could not load personnel records."
        );

    }

}


function populatePersonnelFilters() {

    const filterIds = [

        "awardPersonnelFilter",
        "qualificationPersonnelFilter",
        "rankPersonnelFilter",
        "unitHistoryPersonnelFilter",
        "serviceLogPersonnelFilter"

    ];


    filterIds.forEach(
        id => {

            const select =
                getElement(id);

            if (!select) {
                return;
            }


            const current =
                select.value;


            select.innerHTML =
                `
                <option value="">
                    Select Personnel
                </option>
                `;


            personnelCache.forEach(
                person => {

                    const option =
                        document.createElement(
                            "option"
                        );


                    option.value =
                        person.id;


                    option.textContent =
                        `${person.service_number} — ${person.display_name}`;


                    select.appendChild(
                        option
                    );

                }
            );


            if (current) {
                select.value =
                    current;
            }

        }
    );

}


function updatePersonnelStats() {

    const total =
        personnelCache.length;


    const active =
        personnelCache.filter(
            person =>
                person.status ===
                "active"
        ).length;


    const inactive =
        total -
        active;


    const appointments =
        personnelCache.filter(
            person =>
                person.appointment
        ).length;


    const elements = {

        totalPersonnel:
            total,

        activePersonnel:
            active,

        inactivePersonnel:
            inactive,

        appointmentTotal:
            appointments

    };


    Object.entries(
        elements
    )
    .forEach(
        ([id, value]) => {

            const element =
                getElement(id);

            if (element) {

                element.textContent =
                    value;

            }

        }
    );

}


function renderPersonnelTable() {

    const tbody =
        getElement(
            "personnelTable"
        );


    if (!tbody) {
        return;
    }


    const search =
        (
            getElement(
                "personnelSearch"
            )?.value ||
            ""
        )
        .toLowerCase()
        .trim();


    const statusFilter =
        getElement(
            "personnelStatusFilter"
        )?.value ||
        "";


    const filtered =
        personnelCache.filter(
            person => {

                const searchable =
                    [
                        person.service_number,
                        person.display_name,
                        person.username,
                        person.callsign,
                        person.rank,
                        person.unit,
                        person.appointment
                    ]
                    .filter(Boolean)
                    .join(" ")
                    .toLowerCase();


                const matchesSearch =
                    !search ||
                    searchable.includes(
                        search
                    );


                const matchesStatus =
                    !statusFilter ||
                    person.status ===
                    statusFilter;


                return (
                    matchesSearch &&
                    matchesStatus
                );

            }
        );


    if (!filtered.length) {

        tbody.innerHTML =
            `
            <tr>

                <td colspan="7">

                    <div class="empty-state">

                        <span>♙</span>

                        <strong>
                            No personnel found
                        </strong>

                        <small>
                            No records match the current filters.
                        </small>

                    </div>

                </td>

            </tr>
            `;

        return;

    }


    tbody.innerHTML =
        filtered
            .map(
                person => `
                    <tr>

                        <td>
                            <span class="table-primary">
                                ${escapeHtml(person.service_number)}
                            </span>
                        </td>

                        <td>

                            <span class="table-primary">
                                ${escapeHtml(person.display_name)}
                            </span>

                            <span class="table-secondary">
                                ${escapeHtml(person.callsign || person.username || "")}
                            </span>

                        </td>

                        <td>
                            ${escapeHtml(person.rank || "—")}
                        </td>

                        <td>
                            ${escapeHtml(person.unit || "—")}
                        </td>

                        <td>
                            ${escapeHtml(person.appointment || "—")}
                        </td>

                        <td>

                            <span class="
                                status-badge
                                ${person.status === "active"
                                    ? "active"
                                    : "inactive"}
                            ">
                                ${escapeHtml(
                                    (
                                        person.status ||
                                        "unknown"
                                    ).toUpperCase()
                                )}
                            </span>

                        </td>

                        <td>

                            <div class="table-actions">

                                <button
                                    class="icon-button"
                                    title="Edit"
                                    type="button"
                                    onclick="
                                        openPersonnelEdit('${person.id}')
                                    "
                                >
                                    ✎
                                </button>

                                <button
                                    class="icon-button"
                                    title="View awards"
                                    type="button"
                                    onclick="
                                        openPersonnelAwards('${person.id}')
                                    "
                                >
                                    ✦
                                </button>

                                <button
                                    class="icon-button delete"
                                    title="Delete"
                                    type="button"
                                    onclick="
                                        confirmDeleteRecord(
                                            'personnel',
                                            '${person.id}',
                                            '${escapeHtml(person.display_name)}'
                                        )
                                    "
                                >
                                    ×
                                </button>

                            </div>

                        </td>

                    </tr>
                `
            )
            .join("");

}


/* ==========================================================
   PERSONNEL CREATE / EDIT
========================================================== */

function openPersonnelCreate() {

    openRecordModal(
        "PERSONNEL",
        "Add Personnel",
        personnelForm(),
        async () => {

            const values =
                readPersonnelForm();


            if (
                !values.service_number ||
                !values.display_name
            ) {

                throw new Error(
                    "Service Number and Display Name are required."
                );

            }


            const {
                error
            } =
                await supabaseClient
                    .from("personnel")
                    .insert(
                        values
                    );


            if (error) {
                throw error;
            }


            closeRecordModal();

            showToast(
                "Personnel Added",
                "Personnel record created."
            );


            await loadPersonnel();

        }
    );

}


function openPersonnelEdit(
    id
) {

    const person =
        personnelCache.find(
            item =>
                item.id === id
        );


    if (!person) {
        return;
    }


    openRecordModal(
        "PERSONNEL",
        "Edit Personnel",
        personnelForm(person),
        async () => {

            const values =
                readPersonnelForm();


            const {
                error
            } =
                await supabaseClient
                    .from("personnel")
                    .update(
                        values
                    )
                    .eq(
                        "id",
                        id
                    );


            if (error) {
                throw error;
            }


            closeRecordModal();

            showToast(
                "Personnel Updated",
                "Personnel record updated."
            );


            await loadPersonnel();

        }
    );

}


function personnelForm(
    person = {}
) {

    return `
        <div class="form-grid">

            <div class="form-group">

                <label>
                    Service Number
                </label>

                <input
                    id="formServiceNumber"
                    class="form-control"
                    type="text"
                    value="${escapeHtml(person.service_number || "")}"
                >

            </div>


            <div class="form-group">

                <label>
                    Username
                </label>

                <input
                    id="formUsername"
                    class="form-control"
                    type="text"
                    value="${escapeHtml(person.username || "")}"
                >

            </div>


            <div class="form-group">

                <label>
                    Display Name
                </label>

                <input
                    id="formDisplayName"
                    class="form-control"
                    type="text"
                    value="${escapeHtml(person.display_name || "")}"
                >

            </div>


            <div class="form-group">

                <label>
                    Callsign
                </label>

                <input
                    id="formCallsign"
                    class="form-control"
                    type="text"
                    value="${escapeHtml(person.callsign || "")}"
                >

            </div>


            <div class="form-group">

                <label>
                    Rank
                </label>

                <input
                    id="formRank"
                    class="form-control"
                    type="text"
                    value="${escapeHtml(person.rank || "")}"
                >

            </div>


            <div class="form-group">

                <label>
                    Unit
                </label>

                <select
                    id="formUnit"
                    class="form-control"
                >

                    <option value="">
                        No Unit
                    </option>

                    ${unitCatalogCache
                        .map(
                            unit => `
                                <option
                                    value="${escapeHtml(unit.name)}"
                                    ${unit.name === person.unit
                                        ? "selected"
                                        : ""}
                                >
                                    ${escapeHtml(unit.name)}
                                </option>
                            `
                        )
                        .join("")}

                </select>

            </div>


            <div class="form-group">

                <label>
                    Appointment
                </label>

                <input
                    id="formAppointment"
                    class="form-control"
                    type="text"
                    value="${escapeHtml(person.appointment || "")}"
                >

            </div>


            <div class="form-group">

                <label>
                    Status
                </label>

                <select
                    id="formStatus"
                    class="form-control"
                >

                    <option
                        value="active"
                        ${person.status === "active"
                            ? "selected"
                            : ""}
                    >
                        Active
                    </option>

                    <option
                        value="inactive"
                        ${person.status === "inactive"
                            ? "selected"
                            : ""}
                    >
                        Inactive
                    </option>

                </select>

            </div>


            <div class="form-group">

                <label>
                    Join Date
                </label>

                <input
                    id="formJoinDate"
                    class="form-control"
                    type="date"
                    value="${escapeHtml(person.join_date || "")}"
                >

            </div>


            <div class="form-group full">

                <label>
                    Profile Note
                </label>

                <textarea
                    id="formProfileNote"
                    class="form-control"
                >${escapeHtml(person.profile_note || "")}</textarea>

            </div>

        </div>
    `;

}


function readPersonnelForm() {

    return {

        service_number:
            getElement(
                "formServiceNumber"
            )?.value.trim() || "",

        username:
            getElement(
                "formUsername"
            )?.value.trim() || null,

        display_name:
            getElement(
                "formDisplayName"
            )?.value.trim() || "",

        callsign:
            getElement(
                "formCallsign"
            )?.value.trim() || null,

        rank:
            getElement(
                "formRank"
            )?.value.trim() || null,

        unit:
            getElement(
                "formUnit"
            )?.value || null,

        appointment:
            getElement(
                "formAppointment"
            )?.value.trim() || null,

        status:
            getElement(
                "formStatus"
            )?.value || "active",

        join_date:
            getElement(
                "formJoinDate"
            )?.value || undefined,

        profile_note:
            getElement(
                "formProfileNote"
            )?.value.trim() || null

    };

}


/* ==========================================================
   AWARDS
========================================================== */

async function loadPersonnelAwards(
    personnelId
) {

    const tbody =
        getElement(
            "awardsTable"
        );


    if (!tbody) {
        return;
    }


    if (!personnelId) {

        tbody.innerHTML =
            `
            <tr>
                <td colspan="5">

                    <div class="empty-state">

                        <span>✦</span>

                        <strong>
                            No awards selected
                        </strong>

                        <small>
                            Select personnel to view their awards.
                        </small>

                    </div>

                </td>
            </tr>
            `;

        return;

    }


    try {

        const {
            data,
            error
        } =
            await supabaseClient
                .from("personnel_awards")
                .select(`
                    id,
                    personnel_id,
                    award_id,
                    awarded_date,
                    awarded_by,
                    notes,
                    award_catalog (
                        id,
                        code,
                        name,
                        description,
                        category,
                        image_path,
                        precedence
                    )
                `)
                .eq(
                    "personnel_id",
                    personnelId
                );


        if (error) {
            throw error;
        }


        const awards =
            data || [];


        if (!awards.length) {

            tbody.innerHTML =
                `
                <tr>
                    <td colspan="5">

                        <div class="empty-state">

                            <span>✦</span>

                            <strong>
                                No awards recorded
                            </strong>

                            <small>
                                This member has no assigned awards.
                            </small>

                        </div>

                    </td>
                </tr>
                `;

            return;

        }


        tbody.innerHTML =
            awards
                .map(
                    record => {

                        const award =
                            record.award_catalog ||
                            {};


                        return `
                            <tr>

                                <td>

                                    <span class="table-primary">
                                        ${escapeHtml(
                                            award.name ||
                                            "Unknown Award"
                                        )}
                                    </span>

                                    <span class="table-secondary">
                                        ${escapeHtml(
                                            award.code ||
                                            ""
                                        )}
                                    </span>

                                </td>

                                <td>
                                    <span class="category-badge">
                                        ${escapeHtml(
                                            award.category ||
                                            "unknown"
                                        )}
                                    </span>
                                </td>

                                <td>
                                    ${formatDate(
                                        record.awarded_date
                                    )}
                                </td>

                                <td>
                                    ${escapeHtml(
                                        record.awarded_by ||
                                        "—"
                                    )}
                                </td>

                                <td>

                                    <div class="table-actions">

                                        <button
                                            class="icon-button"
                                            type="button"
                                            title="Edit"
                                            onclick="
                                                openAwardEdit(
                                                    '${record.id}',
                                                    '${record.personnel_id}',
                                                    '${record.award_id}',
                                                    '${escapeHtml(record.awarded_date || "")}',
                                                    '${escapeHtml(record.notes || "")}'
                                                )
                                            "
                                        >
                                            ✎
                                        </button>

                                        <button
                                            class="icon-button delete"
                                            type="button"
                                            title="Delete"
                                            onclick="
                                                confirmDeleteRecord(
                                                    'personnel_awards',
                                                    '${record.id}',
                                                    '${escapeHtml(award.name || "Award")}'
                                                )
                                            "
                                        >
                                            ×
                                        </button>

                                    </div>

                                </td>

                            </tr>
                        `;

                    }
                )
                .join("");

    }
    catch (error) {

        console.error(
            "Awards:",
            error
        );

        tbody.innerHTML =
            `
            <tr>
                <td colspan="5">

                    <div class="empty-state">

                        <span>!</span>

                        <strong>
                            Awards unavailable
                        </strong>

                        <small>
                            ${escapeHtml(error.message)}
                        </small>

                    </div>

                </td>
            </tr>
            `;

    }

}


function openPersonnelAwards(
    personnelId
) {

    const select =
        getElement(
            "awardPersonnelFilter"
        );


    switchSection(
        "awards"
    );


    if (select) {

        select.value =
            personnelId;

        loadPersonnelAwards(
            personnelId
        );

    }

}


function openAwardCreate() {

    const select =
        getElement(
            "awardPersonnelFilter"
        );


    const personnelId =
        select?.value ||
        "";


    if (!personnelId) {

        showError(
            "Select personnel first."
        );

        return;

    }


    openRecordModal(
        "AWARD",
        "Award Personnel",
        awardForm(
            personnelId
        ),
        async () => {

            const values =
                readAwardForm();


            if (
                !values.personnel_id ||
                !values.award_id
            ) {

                throw new Error(
                    "Personnel and Award are required."
                );

            }


            const {
                error
            } =
                await supabaseClient
                    .from("personnel_awards")
                    .insert(
                        values
                    );


            if (error) {
                throw error;
            }


            closeRecordModal();

            showToast(
                "Award Assigned",
                "Award added to personnel."
            );


            await loadPersonnelAwards(
                values.personnel_id
            );

        }
    );

}


function openAwardEdit(
    recordId,
    personnelId,
    awardId,
    awardedDate,
    notes
) {

    openRecordModal(
        "AWARD",
        "Edit Award",
        awardForm(
            personnelId,
            awardId,
            awardedDate,
            notes
        ),
        async () => {

            const values =
                readAwardForm();


            const {
                error
            } =
                await supabaseClient
                    .from("personnel_awards")
                    .update({
                        award_id:
                            values.award_id,

                        awarded_date:
                            values.awarded_date,

                        notes:
                            values.notes

                    })
                    .eq(
                        "id",
                        recordId
                    );


            if (error) {
                throw error;
            }


            closeRecordModal();

            showToast(
                "Award Updated",
                "Award record updated."
            );


            await loadPersonnelAwards(
                personnelId
            );

        }
    );

}


function awardForm(
    personnelId,
    awardId = "",
    awardedDate = "",
    notes = ""
) {

    return `
        <div class="form-grid">

            <div class="form-group full">

                <label>
                    Personnel
                </label>

                <select
                    id="formAwardPersonnel"
                    class="form-control"
                >

                    <option value="">
                        Select Personnel
                    </option>

                    ${personnelCache
                        .map(
                            person => `
                                <option
                                    value="${person.id}"
                                    ${person.id === personnelId
                                        ? "selected"
                                        : ""}
                                >
                                    ${escapeHtml(
                                        person.service_number
                                    )}
                                    —
                                    ${escapeHtml(
                                        person.display_name
                                    )}
                                </option>
                            `
                        )
                        .join("")}

                </select>

            </div>


            <div class="form-group full">

                <label>
                    Award
                </label>

                <select
                    id="formAwardId"
                    class="form-control"
                >

                    <option value="">
                        Select Award
                    </option>

                    ${awardCatalogCache
                        .map(
                            award => `
                                <option
                                    value="${award.id}"
                                    ${String(award.id) === String(awardId)
                                        ? "selected"
                                        : ""}
                                >
                                    ${escapeHtml(
                                        award.name
                                    )}
                                    —
                                    ${escapeHtml(
                                        award.category
                                    )}
                                </option>
                            `
                        )
                        .join("")}

                </select>

            </div>


            <div class="form-group">

                <label>
                    Awarded Date
                </label>

                <input
                    id="formAwardDate"
                    class="form-control"
                    type="date"
                    value="${escapeHtml(awardedDate || "")}"
                >

            </div>


            <div class="form-group full">

                <label>
                    Notes
                </label>

                <textarea
                    id="formAwardNotes"
                    class="form-control"
                >${escapeHtml(notes || "")}</textarea>

            </div>

        </div>
    `;

}


function readAwardForm() {

    return {

        personnel_id:
            getElement(
                "formAwardPersonnel"
            )?.value || "",

        award_id:
            Number(
                getElement(
                    "formAwardId"
                )?.value
            ) || null,

        awarded_date:
            getElement(
                "formAwardDate"
            )?.value || null,

        notes:
            getElement(
                "formAwardNotes"
            )?.value.trim() || null

    };

}


/* ==========================================================
   QUALIFICATIONS
========================================================== */

async function loadPersonnelQualifications(
    personnelId
) {

    const tbody =
        getElement(
            "qualificationsTable"
        );


    if (!tbody) {
        return;
    }


    if (!personnelId) {

        tbody.innerHTML =
            `
            <tr>
                <td colspan="5">

                    <div class="empty-state">

                        <span>✓</span>

                        <strong>
                            No qualifications selected
                        </strong>

                    </div>

                </td>
            </tr>
            `;

        return;

    }


    try {

        const {
            data,
            error
        } =
            await supabaseClient
                .from("qualifications")
                .select(`
                    id,
                    personnel_id,
                    qualification,
                    awarded_date,
                    awarded_by,
                    notes
                `)
                .eq(
                    "personnel_id",
                    personnelId
                )
                .order(
                    "awarded_date",
                    {
                        ascending: false
                    }
                );


        if (error) {
            throw error;
        }


        if (!data?.length) {

            tbody.innerHTML =
                `
                <tr>
                    <td colspan="5">

                        <div class="empty-state">

                            <span>✓</span>

                            <strong>
                                No qualifications recorded
                            </strong>

                        </div>

                    </td>
                </tr>
                `;

            return;

        }


        tbody.innerHTML =
            data
                .map(
                    record => `
                        <tr>

                            <td>
                                <span class="table-primary">
                                    ${escapeHtml(
                                        record.qualification
                                    )}
                                </span>
                            </td>

                            <td>
                                ${formatDate(
                                    record.awarded_date
                                )}
                            </td>

                            <td>
                                ${escapeHtml(
                                    record.awarded_by ||
                                    "—"
                                )}
                            </td>

                            <td>
                                ${escapeHtml(
                                    record.notes ||
                                    "—"
                                )}
                            </td>

                            <td>

                                <div class="table-actions">

                                    <button
                                        class="icon-button"
                                        type="button"
                                        onclick="
                                            openQualificationEdit(
                                                '${record.id}',
                                                '${record.personnel_id}',
                                                '${escapeHtml(record.qualification || "")}',
                                                '${escapeHtml(record.awarded_date || "")}',
                                                '${escapeHtml(record.notes || "")}'
                                            )
                                        "
                                    >
                                        ✎
                                    </button>

                                    <button
                                        class="icon-button delete"
                                        type="button"
                                        onclick="
                                            confirmDeleteRecord(
                                                'qualifications',
                                                '${record.id}',
                                                '${escapeHtml(record.qualification || "Qualification")}'
                                            )
                                        "
                                    >
                                        ×
                                    </button>

                                </div>

                            </td>

                        </tr>
                    `
                )
                .join("");

    }
    catch (error) {

        console.error(
            "Qualifications:",
            error
        );

        showError(
            "Could not load qualifications."
        );

    }

}


function openQualificationCreate() {

    const personnelId =
        getElement(
            "qualificationPersonnelFilter"
        )?.value ||
        "";


    if (!personnelId) {

        showError(
            "Select personnel first."
        );

        return;

    }


    openRecordModal(
        "QUALIFICATION",
        "Add Qualification",
        qualificationForm(
            personnelId
        ),
        async () => {

            const values =
                readQualificationForm();


            if (
                !values.personnel_id ||
                !values.qualification
            ) {

                throw new Error(
                    "Personnel and qualification are required."
                );

            }


            const {
                error
            } =
                await supabaseClient
                    .from("qualifications")
                    .insert(
                        values
                    );


            if (error) {
                throw error;
            }


            closeRecordModal();

            showToast(
                "Qualification Added",
                "Qualification record created."
            );


            await loadPersonnelQualifications(
                personnelId
            );

        }
    );

}


function openQualificationEdit(
    id,
    personnelId,
    qualification,
    awardedDate,
    notes
) {

    openRecordModal(
        "QUALIFICATION",
        "Edit Qualification",
        qualificationForm(
            personnelId,
            qualification,
            awardedDate,
            notes
        ),
        async () => {

            const values =
                readQualificationForm();


            const {
                error
            } =
                await supabaseClient
                    .from("qualifications")
                    .update({

                        qualification:
                            values.qualification,

                        awarded_date:
                            values.awarded_date,

                        notes:
                            values.notes

                    })
                    .eq(
                        "id",
                        id
                    );


            if (error) {
                throw error;
            }


            closeRecordModal();

            showToast(
                "Qualification Updated",
                "Qualification updated."
            );


            await loadPersonnelQualifications(
                personnelId
            );

        }
    );

}


function qualificationForm(
    personnelId,
    qualification = "",
    awardedDate = "",
    notes = ""
) {

    return `
        <div class="form-grid">

            <div class="form-group full">

                <label>
                    Personnel
                </label>

                <select
                    id="formQualificationPersonnel"
                    class="form-control"
                >

                    ${personnelCache
                        .map(
                            person => `
                                <option
                                    value="${person.id}"
                                    ${person.id === personnelId
                                        ? "selected"
                                        : ""}
                                >
                                    ${escapeHtml(
                                        person.service_number
                                    )}
                                    —
                                    ${escapeHtml(
                                        person.display_name
                                    )}
                                </option>
                            `
                        )
                        .join("")}

                </select>

            </div>


            <div class="form-group full">

                <label>
                    Qualification
                </label>

                <input
                    id="formQualification"
                    class="form-control"
                    type="text"
                    value="${escapeHtml(qualification)}"
                >

            </div>


            <div class="form-group">

                <label>
                    Awarded Date
                </label>

                <input
                    id="formQualificationDate"
                    class="form-control"
                    type="date"
                    value="${escapeHtml(awardedDate)}"
                >

            </div>


            <div class="form-group full">

                <label>
                    Notes
                </label>

                <textarea
                    id="formQualificationNotes"
                    class="form-control"
                >${escapeHtml(notes)}</textarea>

            </div>

        </div>
    `;

}


function readQualificationForm() {

    return {

        personnel_id:
            getElement(
                "formQualificationPersonnel"
            )?.value || "",

        qualification:
            getElement(
                "formQualification"
            )?.value.trim() || "",

        awarded_date:
            getElement(
                "formQualificationDate"
            )?.value || null,

        notes:
            getElement(
                "formQualificationNotes"
            )?.value.trim() || null

    };

}


/* ==========================================================
   RANK HISTORY
========================================================== */

async function loadPersonnelRankHistory(
    personnelId
) {

    const tbody =
        getElement(
            "rankHistoryTable"
        );


    if (!tbody) {
        return;
    }


    if (!personnelId) {

        tbody.innerHTML =
            `
            <tr>
                <td colspan="6">

                    <div class="empty-state">

                        <span>◆</span>

                        <strong>
                            No rank history selected
                        </strong>

                    </div>

                </td>
            </tr>
            `;

        return;

    }


    const {
        data,
        error
    } =
        await supabaseClient
            .from("rank_history")
            .select(`
                id,
                personnel_id,
                rank,
                effective_from,
                effective_until,
                changed_by,
                notes
            `)
            .eq(
                "personnel_id",
                personnelId
            )
            .order(
                "effective_from",
                {
                    ascending: false
                }
            );


    if (error) {

        console.error(
            "Rank history:",
            error
        );

        showError(
            "Could not load rank history."
        );

        return;

    }


    if (!data?.length) {

        tbody.innerHTML =
            `
            <tr>
                <td colspan="6">

                    <div class="empty-state">

                        <span>◆</span>

                        <strong>
                            No rank history recorded
                        </strong>

                    </div>

                </td>
            </tr>
            `;

        return;

    }


    tbody.innerHTML =
        data
            .map(
                record => `
                    <tr>

                        <td>
                            ${escapeHtml(record.rank)}
                        </td>

                        <td>
                            ${formatDate(record.effective_from)}
                        </td>

                        <td>
                            ${formatDate(record.effective_until)}
                        </td>

                        <td>
                            ${escapeHtml(record.changed_by || "—")}
                        </td>

                        <td>
                            ${escapeHtml(record.notes || "—")}
                        </td>

                        <td>

                            <div class="table-actions">

                                <button
                                    class="icon-button"
                                    type="button"
                                    onclick="
                                        openRankHistoryEdit(
                                            '${record.id}',
                                            '${record.personnel_id}',
                                            '${escapeHtml(record.rank || "")}',
                                            '${escapeHtml(record.effective_from || "")}',
                                            '${escapeHtml(record.effective_until || "")}',
                                            '${escapeHtml(record.notes || "")}'
                                        )
                                    "
                                >
                                    ✎
                                </button>

                                <button
                                    class="icon-button delete"
                                    type="button"
                                    onclick="
                                        confirmDeleteRecord(
                                            'rank_history',
                                            '${record.id}',
                                            '${escapeHtml(record.rank || "Rank record")}'
                                        )
                                    "
                                >
                                    ×
                                </button>

                            </div>

                        </td>

                    </tr>
                `
            )
            .join("");

}


function openRankHistoryCreate() {

    const personnelId =
        getElement(
            "rankPersonnelFilter"
        )?.value ||
        "";


    if (!personnelId) {

        showError(
            "Select personnel first."
        );

        return;

    }


    openRecordModal(
        "RANK HISTORY",
        "Add Rank Record",
        rankHistoryForm(
            personnelId
        ),
        async () => {

            const values =
                readRankHistoryForm();


            if (
                !values.personnel_id ||
                !values.rank ||
                !values.effective_from
            ) {

                throw new Error(
                    "Personnel, rank, and effective date are required."
                );

            }


            const {
                error
            } =
                await supabaseClient
                    .from("rank_history")
                    .insert(
                        values
                    );


            if (error) {
                throw error;
            }


            closeRecordModal();

            showToast(
                "Rank Record Added",
                "Rank history record created."
            );


            await loadPersonnelRankHistory(
                personnelId
            );

        }
    );

}


function openRankHistoryEdit(
    id,
    personnelId,
    rank,
    effectiveFrom,
    effectiveUntil,
    notes
) {

    openRecordModal(
        "RANK HISTORY",
        "Edit Rank Record",
        rankHistoryForm(
            personnelId,
            rank,
            effectiveFrom,
            effectiveUntil,
            notes
        ),
        async () => {

            const values =
                readRankHistoryForm();


            const {
                error
            } =
                await supabaseClient
                    .from("rank_history")
                    .update({

                        rank:
                            values.rank,

                        effective_from:
                            values.effective_from,

                        effective_until:
                            values.effective_until,

                        notes:
                            values.notes

                    })
                    .eq(
                        "id",
                        id
                    );


            if (error) {
                throw error;
            }


            closeRecordModal();

            showToast(
                "Rank Record Updated",
                "Rank history updated."
            );


            await loadPersonnelRankHistory(
                personnelId
            );

        }
    );

}


function rankHistoryForm(
    personnelId,
    rank = "",
    effectiveFrom = "",
    effectiveUntil = "",
    notes = ""
) {

    return `
        <div class="form-grid">

            <div class="form-group full">

                <label>
                    Personnel
                </label>

                <select
                    id="formRankPersonnel"
                    class="form-control"
                >

                    ${personnelCache
                        .map(
                            person => `
                                <option
                                    value="${person.id}"
                                    ${person.id === personnelId
                                        ? "selected"
                                        : ""}
                                >
                                    ${escapeHtml(
                                        person.service_number
                                    )}
                                    —
                                    ${escapeHtml(
                                        person.display_name
                                    )}
                                </option>
                            `
                        )
                        .join("")}

                </select>

            </div>


            <div class="form-group">

                <label>
                    Rank
                </label>

                <input
                    id="formHistoryRank"
                    class="form-control"
                    type="text"
                    value="${escapeHtml(rank)}"
                >

            </div>


            <div class="form-group">

                <label>
                    Effective From
                </label>

                <input
                    id="formRankEffectiveFrom"
                    class="form-control"
                    type="date"
                    value="${escapeHtml(effectiveFrom)}"
                >

            </div>


            <div class="form-group">

                <label>
                    Effective Until
                </label>

                <input
                    id="formRankEffectiveUntil"
                    class="form-control"
                    type="date"
                    value="${escapeHtml(effectiveUntil)}"
                >

            </div>


            <div class="form-group full">

                <label>
                    Notes
                </label>

                <textarea
                    id="formRankNotes"
                    class="form-control"
                >${escapeHtml(notes)}</textarea>

            </div>

        </div>
    `;

}


function readRankHistoryForm() {

    return {

        personnel_id:
            getElement(
                "formRankPersonnel"
            )?.value || "",

        rank:
            getElement(
                "formHistoryRank"
            )?.value.trim() || "",

        effective_from:
            getElement(
                "formRankEffectiveFrom"
            )?.value || "",

        effective_until:
            getElement(
                "formRankEffectiveUntil"
            )?.value || null,

        notes:
            getElement(
                "formRankNotes"
            )?.value.trim() || null

    };

}


/* ==========================================================
   UNIT HISTORY
========================================================== */

async function loadPersonnelUnitHistory(
    personnelId
) {

    const tbody =
        getElement(
            "unitHistoryTable"
        );


    if (!tbody) {
        return;
    }


    if (!personnelId) {

        tbody.innerHTML =
            `
            <tr>
                <td colspan="5">

                    <div class="empty-state">

                        <span>▣</span>

                        <strong>
                            No unit history selected
                        </strong>

                    </div>

                </td>
            </tr>
            `;

        return;

    }


    const {
        data,
        error
    } =
        await supabaseClient
            .from("unit_history")
            .select(`
                id,
                personnel_id,
                unit,
                effective_from,
                effective_until,
                changed_by,
                notes
            `)
            .eq(
                "personnel_id",
                personnelId
            )
            .order(
                "effective_from",
                {
                    ascending: false
                }
            );


    if (error) {

        console.error(
            "Unit history:",
            error
        );

        showError(
            "Could not load unit history."
        );

        return;

    }


    if (!data?.length) {

        tbody.innerHTML =
            `
            <tr>
                <td colspan="5">

                    <div class="empty-state">

                        <span>▣</span>

                        <strong>
                            No unit history recorded
                        </strong>

                    </div>

                </td>
            </tr>
            `;

        return;

    }


    tbody.innerHTML =
        data
            .map(
                record => `
                    <tr>

                        <td>
                            ${escapeHtml(record.unit)}
                        </td>

                        <td>
                            ${formatDate(record.effective_from)}
                        </td>

                        <td>
                            ${formatDate(record.effective_until)}
                        </td>

                        <td>
                            ${escapeHtml(record.notes || "—")}
                        </td>

                        <td>

                            <div class="table-actions">

                                <button
                                    class="icon-button"
                                    type="button"
                                    onclick="
                                        openUnitHistoryEdit(
                                            '${record.id}',
                                            '${record.personnel_id}',
                                            '${escapeHtml(record.unit || "")}',
                                            '${escapeHtml(record.effective_from || "")}',
                                            '${escapeHtml(record.effective_until || "")}',
                                            '${escapeHtml(record.notes || "")}'
                                        )
                                    "
                                >
                                    ✎
                                </button>

                                <button
                                    class="icon-button delete"
                                    type="button"
                                    onclick="
                                        confirmDeleteRecord(
                                            'unit_history',
                                            '${record.id}',
                                            '${escapeHtml(record.unit || "Unit record")}'
                                        )
                                    "
                                >
                                    ×
                                </button>

                            </div>

                        </td>

                    </tr>
                `
            )
            .join("");

}


function openUnitHistoryCreate() {

    const personnelId =
        getElement(
            "unitHistoryPersonnelFilter"
        )?.value ||
        "";


    if (!personnelId) {

        showError(
            "Select personnel first."
        );

        return;

    }


    openRecordModal(
        "UNIT HISTORY",
        "Add Unit Record",
        unitHistoryForm(
            personnelId
        ),
        async () => {

            const values =
                readUnitHistoryForm();


            if (
                !values.personnel_id ||
                !values.unit ||
                !values.effective_from
            ) {

                throw new Error(
                    "Personnel, unit, and effective date are required."
                );

            }


            const {
                error
            } =
                await supabaseClient
                    .from("unit_history")
                    .insert(
                        values
                    );


            if (error) {
                throw error;
            }


            closeRecordModal();

            showToast(
                "Unit Record Added",
                "Unit history record created."
            );


            await loadPersonnelUnitHistory(
                personnelId
            );

        }
    );

}


function openUnitHistoryEdit(
    id,
    personnelId,
    unit,
    effectiveFrom,
    effectiveUntil,
    notes
) {

    openRecordModal(
        "UNIT HISTORY",
        "Edit Unit Record",
        unitHistoryForm(
            personnelId,
            unit,
            effectiveFrom,
            effectiveUntil,
            notes
        ),
        async () => {

            const values =
                readUnitHistoryForm();


            const {
                error
            } =
                await supabaseClient
                    .from("unit_history")
                    .update({

                        unit:
                            values.unit,

                        effective_from:
                            values.effective_from,

                        effective_until:
                            values.effective_until,

                        notes:
                            values.notes

                    })
                    .eq(
                        "id",
                        id
                    );


            if (error) {
                throw error;
            }


            closeRecordModal();

            showToast(
                "Unit Record Updated",
                "Unit history updated."
            );


            await loadPersonnelUnitHistory(
                personnelId
            );

        }
    );

}


function unitHistoryForm(
    personnelId,
    unit = "",
    effectiveFrom = "",
    effectiveUntil = "",
    notes = ""
) {

    return `
        <div class="form-grid">

            <div class="form-group full">

                <label>
                    Personnel
                </label>

                <select
                    id="formUnitHistoryPersonnel"
                    class="form-control"
                >

                    ${personnelCache
                        .map(
                            person => `
                                <option
                                    value="${person.id}"
                                    ${person.id === personnelId
                                        ? "selected"
                                        : ""}
                                >
                                    ${escapeHtml(
                                        person.service_number
                                    )}
                                    —
                                    ${escapeHtml(
                                        person.display_name
                                    )}
                                </option>
                            `
                        )
                        .join("")}

                </select>

            </div>


            <div class="form-group full">

                <label>
                    Unit
                </label>

                <select
                    id="formHistoryUnit"
                    class="form-control"
                >

                    <option value="">
                        Select Unit
                    </option>

                    ${unitCatalogCache
                        .map(
                            catalogUnit => `
                                <option
                                    value="${escapeHtml(catalogUnit.name)}"
                                    ${catalogUnit.name === unit
                                        ? "selected"
                                        : ""}
                                >
                                    ${escapeHtml(
                                        catalogUnit.name
                                    )}
                                </option>
                            `
                        )
                        .join("")}

                </select>

            </div>


            <div class="form-group">

                <label>
                    Effective From
                </label>

                <input
                    id="formUnitEffectiveFrom"
                    class="form-control"
                    type="date"
                    value="${escapeHtml(effectiveFrom)}"
                >

            </div>


            <div class="form-group">

                <label>
                    Effective Until
                </label>

                <input
                    id="formUnitEffectiveUntil"
                    class="form-control"
                    type="date"
                    value="${escapeHtml(effectiveUntil)}"
                >

            </div>


            <div class="form-group full">

                <label>
                    Notes
                </label>

                <textarea
                    id="formUnitHistoryNotes"
                    class="form-control"
                >${escapeHtml(notes)}</textarea>

            </div>

        </div>
    `;

}


function readUnitHistoryForm() {

    return {

        personnel_id:
            getElement(
                "formUnitHistoryPersonnel"
            )?.value || "",

        unit:
            getElement(
                "formHistoryUnit"
            )?.value || "",

        effective_from:
            getElement(
                "formUnitEffectiveFrom"
            )?.value || "",

        effective_until:
            getElement(
                "formUnitEffectiveUntil"
            )?.value || null,

        notes:
            getElement(
                "formUnitHistoryNotes"
            )?.value.trim() || null

    };

}


/* ==========================================================
   SERVICE LOGS
========================================================== */

async function loadServiceLogs(
    personnelId
) {

    const container =
        getElement(
            "serviceLogsContainer"
        );


    if (!container) {
        return;
    }


    if (!personnelId) {

        container.innerHTML =
            `
            <div class="empty-state">

                <span>≡</span>

                <strong>
                    No service logs selected
                </strong>

                <small>
                    Select personnel to view their service record.
                </small>

            </div>
            `;

        return;

    }


    try {

        const {
            data,
            error
        } =
            await supabaseClient
                .from("service_logs")
                .select(`
                    id,
                    personnel_id,
                    log_date,
                    category,
                    title,
                    description,
                    created_by,
                    created_at,
                    details
                `)
                .eq(
                    "personnel_id",
                    personnelId
                )
                .order(
                    "log_date",
                    {
                        ascending: false
                    }
                );


        if (error) {
            throw error;
        }


        const categoryFilter =
            getElement(
                "serviceLogCategoryFilter"
            )?.value ||
            "";


        const filtered =
            (data || [])
                .filter(
                    log =>
                        !categoryFilter ||
                        log.category ===
                        categoryFilter
                );


        if (!filtered.length) {

            container.innerHTML =
                `
                <div class="empty-state">

                    <span>≡</span>

                    <strong>
                        No service logs found
                    </strong>

                    <small>
                        No logs match the selected filters.
                    </small>

                </div>
                `;

            return;

        }


        container.innerHTML =
            filtered
                .map(
                    log => `
                        <div class="service-log">

                            <div class="service-log-date">
                                ${formatDate(log.log_date)}
                            </div>

                            <div class="service-log-content">

                                <span class="category-badge">
                                    ${escapeHtml(
                                        log.category ||
                                        "OTHER"
                                    )}
                                </span>

                                <div class="service-log-title">
                                    ${escapeHtml(
                                        log.title
                                    )}
                                </div>

                                <div class="service-log-description">
                                    ${escapeHtml(
                                        log.description
                                    )}
                                </div>

                                ${
                                    log.details
                                        ? `
                                            <div class="service-log-meta">
                                                ${escapeHtml(
                                                    log.details
                                                )}
                                            </div>
                                        `
                                        : ""
                                }

                            </div>


                            <div class="service-log-actions">

                                <button
                                    class="icon-button"
                                    type="button"
                                    onclick="
                                        openServiceLogEdit(
                                            '${log.id}',
                                            '${log.personnel_id}',
                                            '${escapeHtml(log.log_date || "")}',
                                            '${escapeHtml(log.category || "")}',
                                            '${escapeHtml(log.title || "")}',
                                            '${escapeHtml(log.description || "")}',
                                            '${escapeHtml(log.details || "")}'
                                        )
                                    "
                                >
                                    ✎
                                </button>


                                <button
                                    class="icon-button delete"
                                    type="button"
                                    onclick="
                                        confirmDeleteRecord(
                                            'service_logs',
                                            '${log.id}',
                                            '${escapeHtml(log.title || "Service log")}'
                                        )
                                    "
                                >
                                    ×
                                </button>

                            </div>

                        </div>
                    `
                )
                .join("");

    }
    catch (error) {

        console.error(
            "Service logs:",
            error
        );

        showError(
            "Could not load service logs."
        );

    }

}


function openServiceLogCreate() {

    const personnelId =
        getElement(
            "serviceLogPersonnelFilter"
        )?.value ||
        "";


    if (!personnelId) {

        showError(
            "Select personnel first."
        );

        return;

    }


    openRecordModal(
        "SERVICE LOG",
        "Add Service Log",
        serviceLogForm(
            personnelId
        ),
        async () => {

            const values =
                readServiceLogForm();


            if (
                !values.personnel_id ||
                !values.log_date ||
                !values.category ||
                !values.title ||
                !values.description
            ) {

                throw new Error(
                    "Personnel, date, category, title and description are required."
                );

            }


            const {
                data: {
                    user
                }
            } =
                await supabaseClient.auth.getUser();


            values.created_by =
                user?.id ||
                null;


            const {
                error
            } =
                await supabaseClient
                    .from("service_logs")
                    .insert(
                        values
                    );


            if (error) {
                throw error;
            }


            closeRecordModal();

            showToast(
                "Service Log Added",
                "Service record created."
            );


            await loadServiceLogs(
                personnelId
            );

        }
    );

}


function openServiceLogEdit(
    id,
    personnelId,
    logDate,
    category,
    title,
    description,
    details
) {

    openRecordModal(
        "SERVICE LOG",
        "Edit Service Log",
        serviceLogForm(
            personnelId,
            logDate,
            category,
            title,
            description,
            details
        ),
        async () => {

            const values =
                readServiceLogForm();


            const {
                error
            } =
                await supabaseClient
                    .from("service_logs")
                    .update({

                        log_date:
                            values.log_date,

                        category:
                            values.category,

                        title:
                            values.title,

                        description:
                            values.description,

                        details:
                            values.details

                    })
                    .eq(
                        "id",
                        id
                    );


            if (error) {
                throw error;
            }


            closeRecordModal();

            showToast(
                "Service Log Updated",
                "Service record updated."
            );


            await loadServiceLogs(
                personnelId
            );

        }
    );

}


function serviceLogForm(
    personnelId,
    logDate = "",
    category = "TRAINING",
    title = "",
    description = "",
    details = ""
) {

    return `
        <div class="form-grid">

            <div class="form-group full">

                <label>
                    Personnel
                </label>

                <select
                    id="formServiceLogPersonnel"
                    class="form-control"
                >

                    ${personnelCache
                        .map(
                            person => `
                                <option
                                    value="${person.id}"
                                    ${person.id === personnelId
                                        ? "selected"
                                        : ""}
                                >
                                    ${escapeHtml(
                                        person.service_number
                                    )}
                                    —
                                    ${escapeHtml(
                                        person.display_name
                                    )}
                                </option>
                            `
                        )
                        .join("")}

                </select>

            </div>


            <div class="form-group">

                <label>
                    Log Date
                </label>

                <input
                    id="formServiceLogDate"
                    class="form-control"
                    type="date"
                    value="${escapeHtml(logDate)}"
                >

            </div>


            <div class="form-group">

                <label>
                    Category
                </label>

                <select
                    id="formServiceLogCategory"
                    class="form-control"
                >

                    <option
                        value="TRAINING"
                        ${category === "TRAINING"
                            ? "selected"
                            : ""}
                    >
                        Training
                    </option>

                    <option
                        value="BOARD"
                        ${category === "BOARD"
                            ? "selected"
                            : ""}
                    >
                        Board
                    </option>

                    <option
                        value="REMARK"
                        ${category === "REMARK"
                            ? "selected"
                            : ""}
                    >
                        Remark
                    </option>

                    <option
                        value="DISCIPLINARY"
                        ${category === "DISCIPLINARY"
                            ? "selected"
                            : ""}
                    >
                        Disciplinary
                    </option>

                    <option
                        value="OTHER"
                        ${category === "OTHER"
                            ? "selected"
                            : ""}
                    >
                        Other
                    </option>

                </select>

            </div>


            <div class="form-group full">

                <label>
                    Title
                </label>

                <input
                    id="formServiceLogTitle"
                    class="form-control"
                    type="text"
                    value="${escapeHtml(title)}"
                >

            </div>


            <div class="form-group full">

                <label>
                    Description
                </label>

                <textarea
                    id="formServiceLogDescription"
                    class="form-control"
                >${escapeHtml(description)}</textarea>

            </div>


            <div class="form-group full">

                <label>
                    Details
                </label>

                <textarea
                    id="formServiceLogDetails"
                    class="form-control"
                >${escapeHtml(details)}</textarea>

            </div>

        </div>
    `;

}


function readServiceLogForm() {

    return {

        personnel_id:
            getElement(
                "formServiceLogPersonnel"
            )?.value || "",

        log_date:
            getElement(
                "formServiceLogDate"
            )?.value || "",

        category:
            getElement(
                "formServiceLogCategory"
            )?.value || "OTHER",

        title:
            getElement(
                "formServiceLogTitle"
            )?.value.trim() || "",

        description:
            getElement(
                "formServiceLogDescription"
            )?.value.trim() || "",

        details:
            getElement(
                "formServiceLogDetails"
            )?.value.trim() || null

    };

}


/* ==========================================================
   UNIT CATALOG
========================================================== */

async function loadUnitCatalog() {

    const container =
        getElement(
            "unitCatalog"
        );


    if (!container) {
        return;
    }


    const {
        data,
        error
    } =
        await supabaseClient
            .from("unit_catalog")
            .select(`
                id,
                name,
                insignia_path,
                description,
                created_at
            `)
            .order(
                "name",
                {
                    ascending: true
                }
            );


    if (error) {

        console.error(
            "Unit catalog:",
            error
        );

        showError(
            "Could not load unit catalog."
        );

        return;

    }


    unitCatalogCache =
        data || [];


    if (!unitCatalogCache.length) {

        container.innerHTML =
            `
            <div class="catalog-empty">

                <span>▦</span>

                <strong>
                    No units loaded
                </strong>

                <small>
                    Unit catalog records will appear here.
                </small>

            </div>
            `;

        return;

    }


    container.innerHTML =
        unitCatalogCache
            .map(
                unit => `
                    <div class="catalog-item">

                        <div class="catalog-insignia">

                            ${
                                unit.insignia_path
                                    ? `
                                        <img
                                            src="${escapeHtml(
                                                unit.insignia_path
                                            )}"
                                            alt="${escapeHtml(
                                                unit.name
                                            )}"
                                        >
                                    `
                                    : ""
                            }

                        </div>


                        <div class="catalog-details">

                            <strong>
                                ${escapeHtml(unit.name)}
                            </strong>

                            <span>
                                UNIT
                            </span>

                            <p>
                                ${escapeHtml(
                                    unit.description ||
                                    "No description."
                                )}
                            </p>

                        </div>


                        <div class="catalog-actions">

                            <button
                                class="icon-button"
                                type="button"
                                onclick="
                                    openUnitEdit(
                                        '${unit.id}'
                                    )
                                "
                            >
                                ✎
                            </button>

                            <button
                                class="icon-button delete"
                                type="button"
                                onclick="
                                    confirmDeleteRecord(
                                        'unit_catalog',
                                        '${unit.id}',
                                        '${escapeHtml(unit.name)}'
                                    )
                                "
                            >
                                ×
                            </button>

                        </div>

                    </div>
                `
            )
            .join("");

}


function openUnitCreate() {

    openRecordModal(
        "UNIT CATALOG",
        "Add Unit",
        unitForm(),
        async () => {

            const values =
                readUnitForm();


            if (!values.name) {

                throw new Error(
                    "Unit name is required."
                );

            }


            const {
                error
            } =
                await supabaseClient
                    .from("unit_catalog")
                    .insert(
                        values
                    );


            if (error) {
                throw error;
            }


            closeRecordModal();

            showToast(
                "Unit Added",
                "Unit catalog record created."
            );


            await loadUnitCatalog();

        }
    );

}


function openUnitEdit(
    id
) {

    const unit =
        unitCatalogCache.find(
            item =>
                item.id === id
        );


    if (!unit) {
        return;
    }


    openRecordModal(
        "UNIT CATALOG",
        "Edit Unit",
        unitForm(unit),
        async () => {

            const values =
                readUnitForm();


            const {
                error
            } =
                await supabaseClient
                    .from("unit_catalog")
                    .update(
                        values
                    )
                    .eq(
                        "id",
                        id
                    );


            if (error) {
                throw error;
            }


            closeRecordModal();

            showToast(
                "Unit Updated",
                "Unit catalog record updated."
            );


            await loadUnitCatalog();

        }
    );

}


function unitForm(
    unit = {}
) {

    return `
        <div class="form-grid">

            <div class="form-group full">

                <label>
                    Unit Name
                </label>

                <input
                    id="formUnitName"
                    class="form-control"
                    type="text"
                    value="${escapeHtml(unit.name || "")}"
                >

            </div>


            <div class="form-group full">

                <label>
                    Insignia Path
                </label>

                <input
                    id="formUnitInsigniaPath"
                    class="form-control"
                    type="text"
                    value="${escapeHtml(unit.insignia_path || "")}"
                    placeholder="Unit_insignia/example.png"
                >

                <span class="form-help">
                    Path relative to your website files.
                </span>

            </div>


            <div class="form-group full">

                <label>
                    Description
                </label>

                <textarea
                    id="formUnitDescription"
                    class="form-control"
                >${escapeHtml(unit.description || "")}</textarea>

            </div>

        </div>
    `;

}


function readUnitForm() {

    return {

        name:
            getElement(
                "formUnitName"
            )?.value.trim() || "",

        insignia_path:
            getElement(
                "formUnitInsigniaPath"
            )?.value.trim() || null,

        description:
            getElement(
                "formUnitDescription"
            )?.value.trim() || null

    };

}


/* ==========================================================
   AWARD CATALOG
========================================================== */

async function loadAwardCatalog() {

    const tbody =
        getElement(
            "awardCatalogTable"
        );


    if (!tbody) {
        return;
    }


    const {
        data,
        error
    } =
        await supabaseClient
            .from("award_catalog")
            .select(`
                id,
                code,
                name,
                description,
                category,
                image_path,
                precedence,
                created_at
            `)
            .order(
                "precedence",
                {
                    ascending: true
                }
            );


    if (error) {

        console.error(
            "Award catalog:",
            error
        );

        showError(
            "Could not load award catalog."
        );

        return;

    }


    awardCatalogCache =
        data || [];


    renderAwardCatalog();

}


function renderAwardCatalog() {

    const tbody =
        getElement(
            "awardCatalogTable"
        );


    if (!tbody) {
        return;
    }


    const search =
        (
            getElement(
                "awardCatalogSearch"
            )?.value ||
            ""
        )
        .toLowerCase()
        .trim();


    const category =
        getElement(
            "awardCatalogCategory"
        )?.value ||
        "";


    const filtered =
        awardCatalogCache.filter(
            award => {

                const text =
                    [
                        award.code,
                        award.name,
                        award.description,
                        award.category
                    ]
                    .filter(Boolean)
                    .join(" ")
                    .toLowerCase();


                return (
                    (!search ||
                        text.includes(search)) &&
                    (!category ||
                        award.category === category)
                );

            }
        );


    if (!filtered.length) {

        tbody.innerHTML =
            `
            <tr>

                <td colspan="6">

                    <div class="empty-state">

                        <span>✦</span>

                        <strong>
                            No awards found
                        </strong>

                        <small>
                            No catalog records match the filters.
                        </small>

                    </div>

                </td>

            </tr>
            `;

        return;

    }


    tbody.innerHTML =
        filtered
            .map(
                award => `
                    <tr>

                        <td>

                            <div class="award-preview">

                                ${
                                    award.image_path
                                        ? `
                                            <img
                                                src="${escapeHtml(
                                                    award.image_path
                                                )}"
                                                alt="${escapeHtml(
                                                    award.name
                                                )}"
                                            >
                                        `
                                        : ""
                                }

                            </div>

                        </td>

                        <td>
                            ${escapeHtml(
                                award.code
                            )}
                        </td>

                        <td>
                            <span class="table-primary">
                                ${escapeHtml(
                                    award.name
                                )}
                            </span>
                        </td>

                        <td>

                            <span class="category-badge">
                                ${escapeHtml(
                                    award.category
                                )}
                            </span>

                        </td>

                        <td>
                            ${escapeHtml(
                                award.precedence
                            )}
                        </td>

                        <td>

                            <div class="table-actions">

                                <button
                                    class="icon-button"
                                    type="button"
                                    onclick="
                                        openAwardCatalogEdit(
                                            '${award.id}'
                                        )
                                    "
                                >
                                    ✎
                                </button>

                                <button
                                    class="icon-button delete"
                                    type="button"
                                    onclick="
                                        confirmDeleteRecord(
                                            'award_catalog',
                                            '${award.id}',
                                            '${escapeHtml(award.name)}'
                                        )
                                    "
                                >
                                    ×
                                </button>

                            </div>

                        </td>

                    </tr>
                `
            )
            .join("");

}


/* ==========================================================
   AWARD CATALOG CREATE / EDIT
========================================================== */

function openAwardCatalogCreate() {

    openRecordModal(
        "AWARD CATALOG",
        "Add Award",
        awardCatalogForm(),
        async () => {

            const values =
                readAwardCatalogForm();


            if (
                !values.code ||
                !values.name ||
                !values.category
            ) {

                throw new Error(
                    "Code, name, and category are required."
                );

            }


            const {
                error
            } =
                await supabaseClient
                    .from("award_catalog")
                    .insert(
                        values
                    );


            if (error) {
                throw error;
            }


            closeRecordModal();

            showToast(
                "Award Added",
                "Award catalog record created."
            );


            await loadAwardCatalog();

            await loadAllCatalogs();

        }
    );

}


function openAwardCatalogEdit(
    id
) {

    const award =
        awardCatalogCache.find(
            item =>
                item.id === id
        );


    if (!award) {
        return;
    }


    openRecordModal(
        "AWARD CATALOG",
        "Edit Award",
        awardCatalogForm(
            award
        ),
        async () => {

            const values =
                readAwardCatalogForm();


            const {
                error
            } =
                await supabaseClient
                    .from("award_catalog")
                    .update(
                        values
                    )
                    .eq(
                        "id",
                        id
                    );


            if (error) {
                throw error;
            }


            closeRecordModal();

            showToast(
                "Award Updated",
                "Award catalog record updated."
            );


            await loadAwardCatalog();

            await loadAllCatalogs();

        }
    );

}


function awardCatalogForm(
    award = {}
) {

    return `
        <div class="form-grid">

            <div class="form-group">

                <label>
                    Code
                </label>

                <input
                    id="formCatalogAwardCode"
                    class="form-control"
                    type="text"
                    value="${escapeHtml(
                        award.code ||
                        ""
                    )}"
                >

            </div>


            <div class="form-group">

                <label>
                    Category
                </label>

                <select
                    id="formCatalogAwardCategory"
                    class="form-control"
                >

                    <option
                        value="ribbon"
                        ${award.category === "ribbon"
                            ? "selected"
                            : ""}
                    >
                        Ribbon
                    </option>

                    <option
                        value="badge"
                        ${award.category === "badge"
                            ? "selected"
                            : ""}
                    >
                        Badge
                    </option>

                    <option
                        value="tab"
                        ${award.category === "tab"
                            ? "selected"
                            : ""}
                    >
                        Tab
                    </option>

                </select>

            </div>


            <div class="form-group full">

                <label>
                    Name
                </label>

                <input
                    id="formCatalogAwardName"
                    class="form-control"
                    type="text"
                    value="${escapeHtml(
                        award.name ||
                        ""
                    )}"
                >

            </div>


            <div class="form-group full">

                <label>
                    Image Path
                </label>

                <input
                    id="formCatalogAwardImage"
                    class="form-control"
                    type="text"
                    value="${escapeHtml(
                        award.image_path ||
                        ""
                    )}"
                    placeholder="Ribbons/example.webp"
                >

            </div>


            <div class="form-group">

                <label>
                    Precedence
                </label>

                <input
                    id="formCatalogAwardPrecedence"
                    class="form-control"
                    type="number"
                    min="1"
                    value="${escapeHtml(
                        award.precedence ??
                        ""
                    )}"
                >

            </div>


            <div class="form-group full">

                <label>
                    Description
                </label>

                <textarea
                    id="formCatalogAwardDescription"
                    class="form-control"
                >${escapeHtml(
                    award.description ||
                    ""
                )}</textarea>

            </div>

        </div>
    `;

}


function readAwardCatalogForm() {

    return {

        code:
            getElement(
                "formCatalogAwardCode"
            )?.value.trim() || "",

        name:
            getElement(
                "formCatalogAwardName"
            )?.value.trim() || "",

        description:
            getElement(
                "formCatalogAwardDescription"
            )?.value.trim() || null,

        category:
            getElement(
                "formCatalogAwardCategory"
            )?.value || "ribbon",

        image_path:
            getElement(
                "formCatalogAwardImage"
            )?.value.trim() || null,

        precedence:
            Number(
                getElement(
                    "formCatalogAwardPrecedence"
                )?.value
            ) || null

    };

}


/* ==========================================================
   CATALOG LOAD
========================================================== */

async function loadAllCatalogs() {

    await Promise.all([

        loadUnitCatalog(),

        loadAwardCatalog()

    ]);

}


/* ==========================================================
   DELETE
========================================================== */

function confirmDeleteRecord(
    table,
    id,
    name
) {

    selectedRecord =
        {
            table,
            id,
            name
        };


    selectedRecordType =
        table;


    const message =
        getElement(
            "deleteMessage"
        );


    if (message) {

        message.textContent =
            `Delete "${name}" from ${table}?`;

    }


    const modal =
        getElement(
            "deleteModal"
        );


    if (modal) {

        modal.classList.add(
            "active"
        );

        modal.setAttribute(
            "aria-hidden",
            "false"
        );

    }

}


function closeDeleteConfirmation() {

    const modal =
        getElement(
            "deleteModal"
        );


    if (modal) {

        modal.classList.remove(
            "active"
        );

        modal.setAttribute(
            "aria-hidden",
            "true"
        );

    }


    selectedRecord =
        null;

    selectedRecordType =
        null;

}


async function performDelete() {

    if (!selectedRecord) {
        return;
    }


    const {
        table,
        id
    } =
        selectedRecord;


    try {

        const {
            error
        } =
            await supabaseClient
                .from(table)
                .delete()
                .eq(
                    "id",
                    id
                );


        if (error) {
            throw error;
        }


        closeDeleteConfirmation();


        showToast(
            "Record Deleted",
            "The selected record was deleted."
        );


        await refreshSection(
            currentSection
        );

    }
    catch (error) {

        console.error(
            "Delete:",
            error
        );

        showError(
            error.message ||
            "Could not delete record."
        );

    }

}


/* ==========================================================
   MODAL ENGINE
========================================================== */

let modalSaveHandler =
    null;


function openRecordModal(
    kicker,
    title,
    bodyHtml,
    saveHandler
) {

    const modal =
        getElement(
            "recordModal"
        );


    const modalKicker =
        getElement(
            "modalKicker"
        );


    const modalTitle =
        getElement(
            "modalTitle"
        );


    const modalBody =
        getElement(
            "modalBody"
        );


    if (!modal) {
        return;
    }


    if (modalKicker) {

        modalKicker.textContent =
            kicker;

    }


    if (modalTitle) {

        modalTitle.textContent =
            title;

    }


    if (modalBody) {

        modalBody.innerHTML =
            bodyHtml;

    }


    modalSaveHandler =
        saveHandler;


    const saveButton =
        getElement(
            "saveRecord"
        );


    if (saveButton) {

        saveButton.onclick =
            async () => {

                saveButton.disabled =
                    true;


                try {

                    await modalSaveHandler();

                }
                catch (error) {

                    console.error(
                        "Save:",
                        error
                    );

                    showError(
                        error.message ||
                        "Could not save record."
                    );

                }
                finally {

                    saveButton.disabled =
                        false;

                }

            };

    }


    modal.classList.add(
        "active"
    );


    modal.setAttribute(
        "aria-hidden",
        "false"
    );

}


function closeRecordModal() {

    const modal =
        getElement(
            "recordModal"
        );


    if (!modal) {
        return;
    }


    modal.classList.remove(
        "active"
    );


    modal.setAttribute(
        "aria-hidden",
        "true"
    );


    const body =
        getElement(
            "modalBody"
        );


    if (body) {

        body.innerHTML =
            "";

    }


    modalSaveHandler =
        null;

}


/* ==========================================================
   SECTION REFRESH
========================================================== */

async function refreshSection(
    section
) {

    switch (
        section
    ) {

        case "personnel":

            await loadPersonnel();

            break;


        case "awards":

            await loadPersonnelAwards(
                getElement(
                    "awardPersonnelFilter"
                )?.value
            );

            break;


        case "qualifications":

            await loadPersonnelQualifications(
                getElement(
                    "qualificationPersonnelFilter"
                )?.value
            );

            break;


        case "rank-history":

            await loadPersonnelRankHistory(
                getElement(
                    "rankPersonnelFilter"
                )?.value
            );

            break;


        case "unit-history":

            await loadPersonnelUnitHistory(
                getElement(
                    "unitHistoryPersonnelFilter"
                )?.value
            );

            break;


        case "service-logs":

            await loadServiceLogs(
                getElement(
                    "serviceLogPersonnelFilter"
                )?.value
            );

            break;


        case "units":

            await loadUnitCatalog();

            break;


        case "award-catalog":

            await loadAwardCatalog();

            break;

    }

}


/* ==========================================================
   SPECIAL NAVIGATION
========================================================== */

function openPersonnelQualifications(
    personnelId
) {

    switchSection(
        "qualifications"
    );


    const select =
        getElement(
            "qualificationPersonnelFilter"
        );


    if (select) {

        select.value =
            personnelId;


        loadPersonnelQualifications(
            personnelId
        );

    }

}


/* ==========================================================
   SETUP
========================================================== */

document.addEventListener(
    "DOMContentLoaded",
    async () => {

        setupSectionButtons();

        await initializeAdmin();

    }
);