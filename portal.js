/*
 * ==========================================================
 * KSOL PORTAL FRONTEND
 * ==========================================================
 *
 * DATABASE TABLES USED:
 *
 * personnel
 * qualifications
 * rank_history
 * unit_history
 * unit_catalog
 * appointments
 * personnel_awards
 * award_catalog
 *
 * ==========================================================
 */


const KSOL_SUPABASE_URL =
    "https://erhupqckxnfoqhgnksrl.supabase.co";

const KSOL_SUPABASE_PUBLISHABLE_KEY =
    "sb_publishable_AsGoP8NNzT_kgR40sz9lXw_GcLdGkbg";

let supabaseClient = null;


/* ==========================================================
   SUPABASE INITIALIZATION
========================================================== */

if (
    typeof window.supabase !== "undefined" &&
    KSOL_SUPABASE_URL !== "YOUR_SUPABASE_PROJECT_URL" &&
    KSOL_SUPABASE_PUBLISHABLE_KEY !== "YOUR_SUPABASE_PUBLISHABLE_KEY"
) {

    supabaseClient =
        window.supabase.createClient(
            KSOL_SUPABASE_URL,
            KSOL_SUPABASE_PUBLISHABLE_KEY
        );

}


/* ==========================================================
   UTILITIES
========================================================== */

function showLoginMessage(
    text,
    type = ""
) {

    const element =
        document.getElementById(
            "loginMessage"
        );

    if (!element) {
        return;
    }

    element.textContent =
        text;

    element.className =
        "login-message" +
        (
            type
                ? ` ${type}`
                : ""
        );

}


function initials(name) {

    if (!name) {
        return "--";
    }

    return name
        .trim()
        .split(/\s+/)
        .slice(0, 2)
        .map(
            part =>
                part
                    .charAt(0)
                    .toUpperCase()
        )
        .join("");

}


function calculateDays(
    dateString
) {

    if (!dateString) {
        return null;
    }

    const start =
        new Date(
            `${dateString}T00:00:00`
        );

    const now =
        new Date();

    if (
        Number.isNaN(
            start.getTime()
        )
    ) {
        return null;
    }

    const difference =
        Math.max(
            0,
            now.getTime() -
            start.getTime()
        );

    return Math.floor(
        difference /
        (
            1000 *
            60 *
            60 *
            24
        )
    );

}


/* ==========================================================
   LOGIN
========================================================== */

async function resolveIdentifier(
    identifier
) {

    if (!supabaseClient) {

        throw new Error(
            "Supabase is not configured."
        );

    }

    const {
        data,
        error
    } =
        await supabaseClient.functions.invoke(
            "ksol-login",
            {
                body: {
                    identifier:
                        identifier.trim()
                }
            }
        );

    if (error) {

        console.error(
            "Edge Function error:",
            error
        );

        throw new Error(
            "Unable to contact KSOL authentication service."
        );

    }

    if (
        !data ||
        !data.login_identifier
    ) {

        throw new Error(
            "Invalid Service Number or Username."
        );

    }

    return data.login_identifier;

}


async function handleLogin(
    event
) {

    event.preventDefault();

    const identifierInput =
        document.getElementById(
            "identifier"
        );

    const passwordInput =
        document.getElementById(
            "password"
        );

    const submit =
        document.querySelector(
            ".login-submit"
        );

    if (
        !identifierInput ||
        !passwordInput
    ) {
        return;
    }

    const identifier =
        identifierInput.value.trim();

    const password =
        passwordInput.value;

    if (
        !identifier ||
        !password
    ) {

        showLoginMessage(
            "Enter your Service Number / Username and password.",
            "error"
        );

        return;

    }

    try {

        if (submit) {
            submit.disabled = true;
        }

        showLoginMessage(
            "AUTHENTICATING..."
        );

        const internalEmail =
            await resolveIdentifier(
                identifier
            );

        const {
            error
        } =
            await supabaseClient.auth.signInWithPassword({
                email: internalEmail,
                password: password
            });

        if (error) {
            throw error;
        }

        showLoginMessage(
            "AUTHENTICATION SUCCESSFUL.",
            "success"
        );

        window.setTimeout(
            () => {

                window.location.href =
                    "portal.html";

            },
            450
        );

    }
    catch (error) {

        console.error(
            error
        );

        showLoginMessage(
            "Authentication failed. Check your credentials.",
            "error"
        );

        if (submit) {
            submit.disabled = false;
        }

    }

}


function setupLoginPage() {

    const form =
        document.getElementById(
            "loginForm"
        );

    if (form) {

        form.addEventListener(
            "submit",
            handleLogin
        );

    }


    const toggle =
        document.getElementById(
            "togglePassword"
        );

    const password =
        document.getElementById(
            "password"
        );

    if (
        toggle &&
        password
    ) {

        toggle.addEventListener(
            "click",
            () => {

                const visible =
                    password.type ===
                    "text";

                password.type =
                    visible
                        ? "password"
                        : "text";

                toggle.textContent =
                    visible
                        ? "SHOW"
                        : "HIDE";

            }
        );

    }


    const reset =
        document.getElementById(
            "resetPassword"
        );

    if (reset) {

        reset.addEventListener(
            "click",
            () => {

                showLoginMessage(
                    "Contact KSOL Headquarters to reset your portal password."
                );

            }
        );

    }

}


/* ==========================================================
   LOAD MEMBER PORTAL
========================================================== */

async function loadMemberPortal() {

    if (!supabaseClient) {

        renderPortalError(
            "Supabase is not configured."
        );

        return;

    }


    const {
        data: {
            user
        },
        error: userError
    } =
        await supabaseClient.auth.getUser();


    if (
        userError ||
        !user
    ) {

        window.location.href =
            "login.html";

        return;

    }


    const {
        data: personnel,
        error: personnelError
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
                profile_note
            `)
            .eq(
                "user_id",
                user.id
            )
            .single();


    if (personnelError) {

        console.error(
            "Personnel error:",
            personnelError
        );

        renderPortalError(
            "Could not load your KSOL personnel record."
        );

        return;

    }


    if (!personnel) {

        renderPortalError(
            "Your account is not linked to a KSOL personnel record."
        );

        return;

    }


    populateMemberRecord(
        personnel
    );


    await loadQualifications(
        personnel.id
    );


    await loadHistory(
        personnel.id
    );


    await loadAppointment(
        personnel.appointment
    );


    await loadUnitInsignia(
        personnel.unit
    );


    await loadAwards(
        personnel.id
    );

}


/* ==========================================================
   AWARDS
   RIBBONS
   BADGES
   TABS
========================================================== */

async function loadAwards(
    personnelId
) {

    if (!personnelId) {
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
            (data || [])
                .map(
                    record => ({
                        ...record,
                        award:
                            record.award_catalog
                    })
                )
                .filter(
                    record =>
                        record.award
                );


        awards.sort(
            (a, b) =>
                Number(
                    a.award.precedence ??
                    999999
                ) -
                Number(
                    b.award.precedence ??
                    999999
                )
        );


        /*
         * RIBBONS
         */

        renderAwardCategory(
            awards.filter(
                record =>
                    record.award.category ===
                    "ribbon"
            ),
            [
                "#ribbonRack",
                ".ribbon-rack"
            ],
            "ribbon-item"
        );


        /*
         * BADGES + TABS
         *
         * Both use the existing badgeRack.
         */

        renderAwardCategory(
            awards.filter(
                record =>
                    record.award.category ===
                    "badge" ||
                    record.award.category ===
                    "tab"
            ),
            [
                "#badgeRack",
                ".badge-rack"
            ],
            "insignia-item"
        );


        updatePortalAwardCount();

    }
    catch (error) {

        console.error(
            "Awards error:",
            error
        );

        updatePortalAwardCount();

    }

}


/* ==========================================================
   FIND AWARD CONTAINER
========================================================== */

function findAwardContainer(
    selectors,
    itemClass
) {

    for (
        const selector of selectors
    ) {

        const container =
            document.querySelector(
                selector
            );

        if (container) {
            return container;
        }

    }


    const existingItem =
        document.querySelector(
            `.${itemClass}`
        );


    if (
        existingItem &&
        existingItem.parentElement
    ) {

        return existingItem.parentElement;

    }


    return null;

}


/* ==========================================================
   RENDER AWARD CATEGORY
========================================================== */

function renderAwardCategory(
    awards,
    selectors,
    itemClass
) {

    const container =
        findAwardContainer(
            selectors,
            itemClass
        );


    if (!container) {

        console.warn(
            "Award container not found:",
            selectors
        );

        return;

    }


    /*
     * REMOVE HARD-CODED LOADING TEXT
     */

    container
        .querySelectorAll(
            ".insignia-empty"
        )
        .forEach(
            element =>
                element.remove()
        );


    /*
     * REMOVE ANY PREVIOUSLY GENERATED ITEMS
     */

    container
        .querySelectorAll(
            `.${itemClass}`
        )
        .forEach(
            element =>
                element.remove()
        );


    /*
     * NOTHING AWARDED
     */

    if (!awards.length) {

        const empty =
            document.createElement(
                "div"
            );

        empty.className =
            "insignia-empty";


        const title =
            document.createElement(
                "span"
            );

        title.textContent =
            itemClass ===
            "ribbon-item"
                ? "NO RIBBONS AWARDED"
                : "NO BADGES OR TABS AWARDED";


        const subtitle =
            document.createElement(
                "small"
            );

        subtitle.textContent =
            "No authorized insignia is currently recorded.";


        empty.appendChild(
            title
        );

        empty.appendChild(
            subtitle
        );

        container.appendChild(
            empty
        );

        return;

    }


    /*
     * CREATE EACH AWARD
     */

    awards.forEach(
        record => {

            const award =
                record.award;


            const item =
                document.createElement(
                    "div"
                );


            item.className =
                itemClass;


            item.dataset.insigniaName =
                award.name ||
                "Insignia";


            item.dataset.insigniaDescription =
                award.description ||
                "No description available.";


            /*
             * ==============================================
             * RIBBON
             * ==============================================
             */

            if (
                award.category ===
                "ribbon"
            ) {

                const image =
                    document.createElement(
                        "img"
                    );


                image.src =
                    award.image_path ||
                    "";


                image.alt =
                    award.name ||
                    "Ribbon";


                image.loading =
                    "lazy";


                item.appendChild(
                    image
                );


                container.appendChild(
                    item
                );


                return;

            }


            /*
             * ==============================================
             * BADGE / TAB
             *
             * IMPORTANT:
             * This structure matches the existing CSS.
             * ==============================================
             */

            const imageBox =
                document.createElement(
                    "div"
                );


            imageBox.className =
                "insignia-image";


            const image =
                document.createElement(
                    "img"
                );


            image.src =
                award.image_path ||
                "";


            image.alt =
                award.name ||
                "";


            image.loading =
                "lazy";


            const imageFallback =
                document.createElement(
                    "span"
                );


            imageFallback.textContent =
                "";


            imageBox.appendChild(
                image
            );


            imageBox.appendChild(
                imageFallback
            );


            const info =
                document.createElement(
                    "div"
                );


            info.className =
                "insignia-item-info";


            const name =
                document.createElement(
                    "strong"
                );


            name.textContent =
                award.name ||
                "Insignia";


            const category =
                document.createElement(
                    "small"
                );


            category.textContent =
                (
                    award.category ||
                    "insignia"
                ).toUpperCase();


            info.appendChild(
                name
            );


            info.appendChild(
                category
            );


            item.appendChild(
                imageBox
            );


            item.appendChild(
                info
            );


            container.appendChild(
                item
            );

        }
    );

}


/* ==========================================================
   AWARD COUNT
========================================================== */

function updatePortalAwardCount() {

    const awardCount =
        document.getElementById(
            "awardCount"
        );


    if (!awardCount) {
        return;
    }


    const ribbons =
        document.querySelectorAll(
            ".ribbon-item"
        ).length;


    const insignia =
        document.querySelectorAll(
            ".insignia-item"
        ).length;


    awardCount.textContent =
        ribbons +
        insignia;

}


/* ==========================================================
   PERSONNEL RECORD
========================================================== */

function populateMemberRecord(
    person
) {

    const displayName =
        person.display_name ||
        person.username ||
        "Personnel";


    const callsign =
        person.callsign ||
        "UNASSIGNED";


    const memberName =
        document.getElementById(
            "memberName"
        );


    if (memberName) {

        memberName.textContent =
            displayName;

    }


    const memberSubtitle =
        document.getElementById(
            "memberSubtitle"
        );


    if (memberSubtitle) {

        memberSubtitle.textContent =
            `${person.rank || "—"} // ${person.unit || "—"} // ${person.service_number || "—"}`;

    }


    const memberStatus =
        document.getElementById(
            "memberStatus"
        );


    if (memberStatus) {

        memberStatus.textContent =
            (
                person.status ||
                "unknown"
            ).toUpperCase();

    }


    const profileInitials =
        document.getElementById(
            "profileInitials"
        );


    if (profileInitials) {

        profileInitials.textContent =
            initials(
                displayName
            );

    }


    const profileDisplayName =
        document.getElementById(
            "profileDisplayName"
        );


    if (profileDisplayName) {

        profileDisplayName.textContent =
            displayName;

    }


    const profileCallsign =
        document.getElementById(
            "profileCallsign"
        );


    if (profileCallsign) {

        profileCallsign.textContent =
            `CALLSIGN // ${callsign}`;

    }


    const profileServiceNumber =
        document.getElementById(
            "profileServiceNumber"
        );


    if (profileServiceNumber) {

        profileServiceNumber.textContent =
            person.service_number ||
            "—";

    }


    const profileRank =
        document.getElementById(
            "profileRank"
        );


    if (profileRank) {

        profileRank.textContent =
            person.rank ||
            "—";

    }


    const profileUnit =
        document.getElementById(
            "profileUnit"
        );


    if (profileUnit) {

        profileUnit.textContent =
            person.unit ||
            "—";

    }


    const profileAppointment =
        document.getElementById(
            "profileAppointment"
        );


    if (profileAppointment) {

        profileAppointment.textContent =
            person.appointment ||
            "—";

    }


    const profileStatus =
        document.getElementById(
            "profileStatus"
        );


    if (profileStatus) {

        profileStatus.textContent =
            (
                person.status ||
                "—"
            ).toUpperCase();

    }


    const profileJoinDate =
        document.getElementById(
            "profileJoinDate"
        );


    if (profileJoinDate) {

        profileJoinDate.textContent =
            person.join_date ||
            "—";

    }


    const serviceDays =
        document.getElementById(
            "serviceDays"
        );


    const days =
        calculateDays(
            person.join_date
        );


    if (serviceDays) {

        serviceDays.textContent =
            days === null
                ? "—"
                : days;

    }


    /*
     * APPOINTMENT PANEL
     */

    const appointmentTitle =
        document.getElementById(
            "appointmentTitle"
        );


    const appointmentDescription =
        document.getElementById(
            "appointmentDescription"
        );


    if (appointmentTitle) {

        appointmentTitle.textContent =
            person.appointment ||
            "No Appointment";

    }


    if (appointmentDescription) {

        appointmentDescription.textContent =
            "Loading appointment information...";

    }

}


/* ==========================================================
   UNIT CATALOG / UNIT INSIGNIA
========================================================== */

async function loadUnitInsignia(
    unitName
) {

    const image =
        document.getElementById(
            "currentUnitInsignia"
        );


    const unitNameElement =
        document.getElementById(
            "insigniaUnitName"
        );


    if (!unitName) {

        if (unitNameElement) {

            unitNameElement.textContent =
                "NO UNIT ASSIGNED";

        }


        if (image) {

            image.removeAttribute(
                "src"
            );

            image.style.display =
                "none";

        }

        return;

    }


    try {

        const {
            data: unit,
            error
        } =
            await supabaseClient
                .from("unit_catalog")
                .select(`
                    name,
                    insignia_path,
                    description
                `)
                .eq(
                    "name",
                    unitName
                )
                .maybeSingle();


        if (error) {
            throw error;
        }


        if (!unit) {

            console.warn(
                "No unit_catalog entry found for:",
                unitName
            );


            if (unitNameElement) {

                unitNameElement.textContent =
                    unitName;

            }


            if (image) {

                image.removeAttribute(
                    "src"
                );

                image.style.display =
                    "none";

            }

            return;

        }


        if (unitNameElement) {

            unitNameElement.textContent =
                unit.name;

        }


        if (
            image &&
            unit.insignia_path
        ) {

            image.src =
                unit.insignia_path;

            image.alt =
                `${unit.name} insignia`;

            image.style.display =
                "";

        }
        else if (image) {

            image.removeAttribute(
                "src"
            );

            image.style.display =
                "none";

        }

    }
    catch (error) {

        console.error(
            "Unit catalog lookup error:",
            error
        );


        if (unitNameElement) {

            unitNameElement.textContent =
                unitName;

        }


        if (image) {

            image.removeAttribute(
                "src"
            );

            image.style.display =
                "none";

        }

    }

}


/* ==========================================================
   APPOINTMENT
========================================================== */

async function loadAppointment(
    appointmentName
) {

    const title =
        document.getElementById(
            "appointmentTitle"
        );


    const rankBand =
        document.getElementById(
            "appointmentRankBand"
        );


    const description =
        document.getElementById(
            "appointmentDescription"
        );


    if (!appointmentName) {

        if (title) {

            title.textContent =
                "No Appointment";

        }


        if (rankBand) {

            rankBand.textContent =
                "—";

        }


        if (description) {

            description.textContent =
                "No current appointment assigned.";

        }

        return;

    }


    try {

        const {
            data,
            error
        } =
            await supabaseClient
                .from("appointments")
                .select(`
                    name,
                    rank_band,
                    description
                `)
                .eq(
                    "name",
                    appointmentName
                )
                .maybeSingle();


        if (error) {
            throw error;
        }


        if (!data) {

            if (title) {

                title.textContent =
                    appointmentName;

            }


            if (rankBand) {

                rankBand.textContent =
                    "—";

            }


            if (description) {

                description.textContent =
                    "Appointment information unavailable.";

            }

            return;

        }


        if (title) {

            title.textContent =
                data.name;

        }


        if (rankBand) {

            rankBand.textContent =
                data.rank_band ||
                "—";

        }


        if (description) {

            description.textContent =
                data.description ||
                "No description available.";

        }

    }
    catch (error) {

        console.error(
            "Appointment lookup:",
            error
        );


        if (title) {

            title.textContent =
                appointmentName;

        }


        if (rankBand) {

            rankBand.textContent =
                "—";

        }


        if (description) {

            description.textContent =
                "Appointment information unavailable.";

        }

    }

}


/* ==========================================================
   QUALIFICATIONS
========================================================== */

async function loadQualifications(personnelId) {

    const container =
        document.getElementById("qualificationList");

    const countElement =
        document.getElementById("qualificationCount");

    if (!container) {
        console.error("Qualifications container not found.");
        return;
    }

    if (!personnelId) {
        console.error("No personnel ID supplied for qualifications.");

        container.innerHTML = `
            <div class="portal-muted">
                Qualifications unavailable.
            </div>
        `;

        if (countElement) {
            countElement.textContent = "0";
        }

        return;
    }


    try {

        console.log(
            "Loading qualifications for:",
            personnelId
        );


        const {
            data,
            error
        } = await supabaseClient
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

            console.error(
                "Qualification query error:",
                error
            );

            throw error;
        }


        console.log(
            "Qualifications loaded:",
            data
        );


        const qualifications =
            data || [];


        /*
         * QUALIFICATION COUNT
         */

        if (countElement) {

            countElement.textContent =
                qualifications.length;

        }


        /*
         * NO QUALIFICATIONS
         */

        if (!qualifications.length) {

            container.innerHTML = `
                <div class="portal-muted">
                    No qualifications recorded.
                </div>
            `;

            return;
        }


        /*
         * QUALIFICATION LIST
         */

        container.innerHTML =
            qualifications
                .map(
                    qualification => {

                        const date =
                            qualification.awarded_date
                                ? qualification.awarded_date
                                : "—";


                        const notes =
                            qualification.notes ||
                            "No additional remarks recorded.";


                        return `
                            <div class="history-item">

                                <div class="history-date">
                                    ${date}
                                </div>

                                <div class="history-body">

                                    <strong>
                                        ${qualification.qualification}
                                    </strong>

                                    <span>
                                        ${notes}
                                    </span>

                                </div>

                            </div>
                        `;

                    }
                )
                .join("");


    }
    catch (error) {

        console.error(
            "Qualification loading failed:",
            error
        );


        if (countElement) {
            countElement.textContent = "—";
        }


        container.innerHTML = `
            <div class="portal-muted">
                Qualifications unavailable.
            </div>
        `;

    }

}


/* ==========================================================
   RANK / UNIT HISTORY
========================================================== */

async function loadHistory(
    personnelId
) {

    const container =
        document.getElementById(
            "serviceHistory"
        );


    const rankDays =
        document.getElementById(
            "rankDays"
        );


    try {

        /*
         * RANK HISTORY
         */

        const {
            data: rankHistory,
            error: rankError
        } =
            await supabaseClient
                .from("rank_history")
                .select(
                    "rank, effective_from, effective_until, notes"
                )
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


        if (rankError) {
            throw rankError;
        }


        /*
         * FIND CURRENT RANK
         */

        const currentRank =
            (rankHistory || []).find(
                item =>
                    item.effective_until ===
                    null
            );


        /*
         * DAYS IN CURRENT RANK
         */

        if (
            rankDays &&
            currentRank &&
            currentRank.effective_from
        ) {

            const rankStart =
                new Date(
                    `${currentRank.effective_from}T00:00:00`
                );


            const today =
                new Date();


            const difference =
                Math.max(
                    0,
                    today.getTime() -
                    rankStart.getTime()
                );


            const days =
                Math.floor(
                    difference /
                    (
                        1000 *
                        60 *
                        60 *
                        24
                    )
                );


            rankDays.textContent =
                days;

        }
        else if (rankDays) {

            rankDays.textContent =
                "—";

        }


        /*
         * UNIT HISTORY
         */

        const {
            data: unitHistory,
            error: unitError
        } =
            await supabaseClient
                .from("unit_history")
                .select(
                    "unit, effective_from, effective_until, notes"
                )
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


        if (unitError) {
            throw unitError;
        }


        /*
         * BUILD HISTORY
         */

        const entries = [];


        (rankHistory || []).forEach(
            item => {

                entries.push({

                    date:
                        item.effective_from,

                    title:
                        `Rank: ${item.rank}`,

                    detail:
                        item.notes ||
                        (
                            item.effective_until
                                ? `Held until ${item.effective_until}.`
                                : "Current / open-ended rank period."
                        )

                });

            }
        );


        (unitHistory || []).forEach(
            item => {

                entries.push({

                    date:
                        item.effective_from,

                    title:
                        `Unit: ${item.unit}`,

                    detail:
                        item.notes ||
                        (
                            item.effective_until
                                ? `Assigned until ${item.effective_until}.`
                                : "Current / open-ended unit period."
                        )

                });

            }
        );


        /*
         * SORT NEWEST FIRST
         */

        entries.sort(
            (a, b) =>
                new Date(b.date) -
                new Date(a.date)
        );


        if (!container) {
            return;
        }


        /*
         * NO HISTORY
         */

        if (!entries.length) {

            container.innerHTML =
                `
                <div class="portal-muted">
                    No service history recorded.
                </div>
                `;

            return;

        }


        /*
         * DISPLAY HISTORY
         */

        container.innerHTML =
            entries
                .map(
                    entry => `
                        <div class="history-item">

                            <div class="history-date">
                                ${entry.date}
                            </div>

                            <div class="history-body">

                                <strong>
                                    ${entry.title}
                                </strong>

                                <span>
                                    ${entry.detail}
                                </span>

                            </div>

                        </div>
                    `
                )
                .join("");

    }
    catch (error) {

        console.error(
            "LOAD HISTORY ERROR:",
            error
        );


        if (rankDays) {

            rankDays.textContent =
                "—";

        }


        if (container) {

            container.innerHTML =
                `
                <div class="portal-muted">
                    Service history unavailable.
                </div>
                `;

        }

    }

}


/* ==========================================================
   PORTAL ERROR
========================================================== */

function renderPortalError(
    message
) {

    const heading =
        document.getElementById(
            "memberName"
        );


    const subtitle =
        document.getElementById(
            "memberSubtitle"
        );


    if (heading) {

        heading.textContent =
            "Portal Error";

    }


    if (subtitle) {

        subtitle.textContent =
            message;

    }

}


/* ==========================================================
   LOGOUT
========================================================== */

function setupLogout() {

    const button =
        document.getElementById(
            "portalLogout"
        );


    if (!button) {
        return;
    }


    button.addEventListener(
        "click",
        async () => {

            try {

                if (supabaseClient) {

                    await supabaseClient.auth.signOut();

                }

            }
            catch (error) {

                console.error(
                    "Logout error:",
                    error
                );

            }


            window.location.href =
                "login.html";

        }
    );

}


/* ==========================================================
   INSIGNIA MODAL
========================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const modal =
            document.getElementById(
                "insigniaModal"
            );


        const modalTitle =
            document.getElementById(
                "insigniaModalTitle"
            );


        const modalDescription =
            document.getElementById(
                "insigniaModalDescription"
            );


        const modalImage =
            document.getElementById(
                "modalInsigniaImage"
            );


        const closeButton =
            document.getElementById(
                "closeInsigniaModal"
            );


        function openInsigniaModal(
            item
        ) {

            if (!modal) {
                return;
            }


            const name =
                item.dataset.insigniaName ||
                "Insignia";


            const description =
                item.dataset.insigniaDescription ||
                "No description available.";


            if (modalTitle) {

                modalTitle.textContent =
                    name;

            }


            if (modalDescription) {

                modalDescription.textContent =
                    description;

            }


            const image =
                item.querySelector(
                    "img"
                );


            if (
                modalImage &&
                image &&
                image.getAttribute(
                    "src"
                )
            ) {

                modalImage.innerHTML =
                    `
                    <img
                        src="${image.getAttribute("src")}"
                        alt="${name}"
                    >
                    `;

            }
            else if (modalImage) {

                modalImage.innerHTML =
                    "<span>INSIGNIA</span>";

            }


            modal.classList.add(
                "open"
            );


            modal.setAttribute(
                "aria-hidden",
                "false"
            );

        }


        function closeInsigniaModal() {

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

        }


        /*
         * Dynamic ribbons / badges / tabs
         * are handled through event delegation.
         */

        document.addEventListener(
            "click",
            event => {

                const item =
                    event.target.closest(
                        ".ribbon-item, .insignia-item"
                    );


                if (!item) {
                    return;
                }


                openInsigniaModal(
                    item
                );

            }
        );


        if (closeButton) {

            closeButton.addEventListener(
                "click",
                closeInsigniaModal
            );

        }


        const backdrop =
            document.querySelector(
                ".insignia-modal-backdrop"
            );


        if (backdrop) {

            backdrop.addEventListener(
                "click",
                closeInsigniaModal
            );

        }


        document.addEventListener(
            "keydown",
            event => {

                if (
                    event.key ===
                    "Escape"
                ) {

                    closeInsigniaModal();

                }

            }
        );

    }
);


/* ==========================================================
   INITIALIZATION
========================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        setupLoginPage();

        setupLogout();


        if (
            document.body.classList.contains(
                "portal-body"
            ) &&
            document.getElementById(
                "memberName"
            )
        ) {

            loadMemberPortal();

        }

    }
);