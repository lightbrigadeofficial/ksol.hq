/*
 * ==========================================================
 * KSOL PORTAL FRONTEND
 * ==========================================================
 *
 * Database-driven KSOL member portal.
 *
 * Systems:
 * - Service Number / Username login
 * - Personnel record
 * - Days in service
 * - Qualifications
 * - Rank history
 * - Unit history
 * - Appointment catalog
 * - Awards / ribbons / badges / tabs
 * - Unit insignia
 * - Insignia popup
 *
 * IMPORTANT:
 * - Publishable key is intended for browser-side use with RLS.
 * - NEVER put a Supabase service_role / secret key here.
 */


/* ==========================================================
   SUPABASE CONFIGURATION
========================================================== */

const KSOL_SUPABASE_URL =
    "https://erhupqckxnfoqhgnksrl.supabase.co";

const KSOL_SUPABASE_PUBLISHABLE_KEY =
    "sb_publishable_AsGoP8NNzT_kgR40sz9lXw_GcLdGkbg";


let supabaseClient = null;


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

    const el =
        document.getElementById(
            "loginMessage"
        );

    if (!el) return;


    el.textContent =
        text;


    el.className =
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


    const diff =
        Math.max(
            0,
            now.getTime() -
            start.getTime()
        );


    return Math.floor(
        diff /
        (
            1000 *
            60 *
            60 *
            24
        )
    );

}



function escapeHTML(
    value
) {

    return String(
        value ?? ""
    )
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
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
                email:
                    internalEmail,

                password:
                    password
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


    } catch (error) {

        console.error(
            "LOGIN ERROR:",
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


    if (!form) {
        return;
    }


    form.addEventListener(
        "submit",
        handleLogin
    );


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


    window.KSOL_PERSONNEL_ID =
        personnel.id;


    populateMemberRecord(
        personnel
    );


    await loadQualifications(
        personnel.id
    );


    await loadHistory(
        personnel.id
    );


    await loadCurrentAppointment(
        personnel
    );


    await loadCurrentUnit(
        personnel.id
    );


    await loadAwards(
        personnel.id
    );

}



/* ==========================================================
   PERSONNEL DISPLAY
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


    if (serviceDays) {

        const days =
            calculateDays(
                person.join_date
            );


        serviceDays.textContent =
            days === null
                ? "—"
                : days;

    }

}



/* ==========================================================
   APPOINTMENT
========================================================== */

async function loadCurrentAppointment(
    person
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


    if (
        !title ||
        !rankBand ||
        !description
    ) {

        return;

    }


    if (!person.appointment) {

        title.textContent =
            "No Appointment";


        rankBand.textContent =
            "—";


        description.textContent =
            "No current appointment assigned.";


        return;

    }


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
                person.appointment
            )
            .maybeSingle();


    if (error) {

        console.error(
            "Appointment lookup:",
            error
        );


        title.textContent =
            person.appointment;


        rankBand.textContent =
            "—";


        description.textContent =
            "Appointment information unavailable.";


        return;

    }


    if (!data) {

        title.textContent =
            person.appointment;


        rankBand.textContent =
            "—";


        description.textContent =
            "Appointment information unavailable.";


        return;

    }


    title.textContent =
        data.name ||
        person.appointment;


    rankBand.textContent =
        data.rank_band ||
        "—";


    description.textContent =
        data.description ||
        "No appointment description available.";

}



/* ==========================================================
   QUALIFICATIONS
========================================================== */

async function loadQualifications(
    personnelId
) {

    const list =
        document.getElementById(
            "qualificationList"
        );


    if (!list) {
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
                        ascending:
                            false
                    }
                );


        if (error) {
            throw error;
        }


        const records =
            data || [];


        const qualificationCount =
            document.getElementById(
                "qualificationCount"
            );


        if (qualificationCount) {

            qualificationCount.textContent =
                records.length;

        }


        if (!records.length) {

            list.innerHTML =
                `
                <div class="portal-muted">
                    No qualifications recorded.
                </div>
                `;


            return;

        }


        list.innerHTML =
            records
                .map(
                    item => `
                        <div class="qualification-item">

                            <strong>
                                ${escapeHTML(
                                    item.qualification
                                )}
                            </strong>

                            <span>
                                AWARDED //
                                ${escapeHTML(
                                    item.awarded_date ||
                                    "—"
                                )}
                            </span>

                        </div>
                    `
                )
                .join("");


    } catch (error) {

        console.error(
            "Qualification error:",
            error
        );


        const qualificationCount =
            document.getElementById(
                "qualificationCount"
            );


        if (qualificationCount) {

            qualificationCount.textContent =
                "—";

        }


        list.innerHTML =
            `
            <div class="portal-muted">
                Qualification records unavailable.
            </div>
            `;

    }

}



/* ==========================================================
   RANK + UNIT HISTORY
========================================================== */

async function loadHistory(
    personnelId
) {

    const container =
        document.getElementById(
            "serviceHistory"
        );


    try {

        const [
            rankResult,
            unitResult
        ] =
            await Promise.all([

                supabaseClient
                    .from("rank_history")
                    .select(`
                        rank,
                        effective_from,
                        effective_until,
                        notes
                    `)
                    .eq(
                        "personnel_id",
                        personnelId
                    )
                    .order(
                        "effective_from",
                        {
                            ascending:
                                false
                        }
                    ),

                supabaseClient
                    .from("unit_history")
                    .select(`
                        unit,
                        effective_from,
                        effective_until,
                        notes
                    `)
                    .eq(
                        "personnel_id",
                        personnelId
                    )
                    .order(
                        "effective_from",
                        {
                            ascending:
                                false
                        }
                    )

            ]);


        if (
            rankResult.error ||
            unitResult.error
        ) {

            throw (
                rankResult.error ||
                unitResult.error
            );

        }


        const rankHistory =
            rankResult.data || [];


        const unitHistory =
            unitResult.data || [];


        /*
         * Days in current rank
         */

        const currentRank =
            rankHistory.find(
                item =>
                    !item.effective_until
            );


        const rankDaysElement =
            document.getElementById(
                "rankDays"
            );


        if (rankDaysElement) {

            const days =
                currentRank
                    ? calculateDays(
                        currentRank.effective_from
                    )
                    : null;


            rankDaysElement.textContent =
                days === null
                    ? "—"
                    : days;

        }


        const entries = [];


        rankHistory.forEach(
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


        unitHistory.forEach(
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


        entries.sort(
            (a, b) =>
                new Date(b.date) -
                new Date(a.date)
        );


        if (!container) {
            return;
        }


        if (!entries.length) {

            container.innerHTML =
                `
                <div class="portal-muted">
                    No service history recorded.
                </div>
                `;


            return;

        }


        container.innerHTML =
            entries
                .map(
                    entry => `
                        <div class="history-item">

                            <div class="history-date">
                                ${escapeHTML(
                                    entry.date
                                )}
                            </div>

                            <div class="history-body">

                                <strong>
                                    ${escapeHTML(
                                        entry.title
                                    )}
                                </strong>

                                <span>
                                    ${escapeHTML(
                                        entry.detail
                                    )}
                                </span>

                            </div>

                        </div>
                    `
                )
                .join("");


    } catch (error) {

        console.error(
            "History error:",
            error
        );


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
   CURRENT UNIT + UNIT INSIGNIA
========================================================== */

async function loadCurrentUnit(
    personnelId
) {

    const image =
        document.getElementById(
            "currentUnitInsignia"
        );


    const unitName =
        document.getElementById(
            "insigniaUnitName"
        );


    if (
        !image &&
        !unitName
    ) {

        return;

    }


    try {

        /*
         * Find current unit from unit_history.
         */

        const {
            data: currentUnit,
            error: unitHistoryError
        } =
            await supabaseClient
                .from("unit_history")
                .select(`
                    unit,
                    effective_from,
                    effective_until
                `)
                .eq(
                    "personnel_id",
                    personnelId
                )
                .is(
                    "effective_until",
                    null
                )
                .order(
                    "effective_from",
                    {
                        ascending:
                            false
                    }
                )
                .limit(1)
                .maybeSingle();


        if (unitHistoryError) {
            throw unitHistoryError;
        }


        if (
            !currentUnit ||
            !currentUnit.unit
        ) {

            if (unitName) {
                unitName.textContent =
                    "NO UNIT ASSIGNED";
            }


            if (image) {
                image.src =
                    "Awards/Units/default.png";
            }


            return;

        }


        if (unitName) {

            unitName.textContent =
                currentUnit.unit;

        }


        /*
         * Find the corresponding unit icon.
         *
         * This requires:
         * unit_catalog.name
         * unit_catalog.insignia_path
         */

        const {
            data: unitRecord,
            error: unitCatalogError
        } =
            await supabaseClient
                .from("unit_catalog")
                .select(`
                    name,
                    insignia_path
                `)
                .eq(
                    "name",
                    currentUnit.unit
                )
                .maybeSingle();


        if (unitCatalogError) {
            throw unitCatalogError;
        }


        if (
            image &&
            unitRecord &&
            unitRecord.insignia_path
        ) {

            image.src =
                unitRecord.insignia_path;


            image.alt =
                `${currentUnit.unit} insignia`;


            image.style.display =
                "block";


            image.onerror =
                () => {

                    image.onerror =
                        null;

                    image.src =
                        "Awards/Units/default.png";

                };

        } else if (image) {

            image.src =
                "Awards/Units/default.png";

        }


    } catch (error) {

        console.error(
            "Unit insignia error:",
            error
        );


        if (unitName) {

            unitName.textContent =
                "UNIT INSIGNIA UNAVAILABLE";

        }


        if (image) {

            image.src =
                "Awards/Units/default.png";

        }

    }

}



/* ==========================================================
   AWARDS / RIBBONS / BADGES / TABS
========================================================== */

async function loadAwards(
    personnelId
) {

    const ribbonRack =
        document.getElementById(
            "ribbonRack"
        );


    const badgeRack =
        document.getElementById(
            "badgeRack"
        );


    const awardCount =
        document.getElementById(
            "awardCount"
        );


    if (
        !ribbonRack ||
        !badgeRack
    ) {

        return;

    }


    try {

        /*
         * personnel_awards
         *       ↓
         * award_catalog
         *
         * Supabase resolves this relationship
         * through the foreign key.
         */

        const {
            data,
            error
        } =
            await supabaseClient
                .from("personnel_awards")
                .select(`
                    id,
                    awarded_date,
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
                    row => {

                        const catalog =
                            Array.isArray(
                                row.award_catalog
                            )
                                ? row.award_catalog[0]
                                : row.award_catalog;


                        if (!catalog) {
                            return null;
                        }


                        return {

                            id:
                                row.id,

                            code:
                                catalog.code,

                            name:
                                catalog.name,

                            description:
                                catalog.description,

                            category:
                                String(
                                    catalog.category ||
                                    "badge"
                                ).toLowerCase(),

                            image_path:
                                catalog.image_path,

                            precedence:
                                Number(
                                    catalog.precedence ??
                                    999
                                ),

                            awarded_date:
                                row.awarded_date,

                            notes:
                                row.notes
                        };

                    }
                )
                .filter(Boolean);


        /*
         * Ribbons
         */

        const ribbons =
            awards
                .filter(
                    award =>
                        award.category ===
                        "ribbon"
                )
                .sort(
                    (a, b) =>
                        a.precedence -
                        b.precedence
                );


        /*
         * Badges and tabs
         */

        const badges =
            awards
                .filter(
                    award =>
                        award.category ===
                            "badge" ||
                        award.category ===
                            "tab"
                )
                .sort(
                    (a, b) =>
                        a.precedence -
                        b.precedence
                );


        /*
         * Count only ribbons, badges and tabs.
         */

        if (awardCount) {

            awardCount.textContent =
                ribbons.length +
                badges.length;

        }


        /* --------------------------------------------------
           RIBBON RACK
        -------------------------------------------------- */

        if (!ribbons.length) {

            ribbonRack.innerHTML =
                `
                <div class="insignia-empty">

                    <span>
                        NO RIBBONS AWARDED
                    </span>

                    <small>
                        Awarded ribbons will appear here
                        in order of precedence.
                    </small>

                </div>
                `;

        } else {

            ribbonRack.innerHTML =
                ribbons
                    .map(
                        award => {

                            const image =
                                award.image_path
                                    ? `
                                        <img
                                            src="${escapeHTML(
                                                award.image_path
                                            )}"
                                            alt="${escapeHTML(
                                                award.name
                                            )}"
                                        >
                                      `
                                    : `
                                        <span
                                            class="dynamic-ribbon-fallback"
                                        >
                                            ${escapeHTML(
                                                award.code ||
                                                "RIBBON"
                                            )}
                                        </span>
                                      `;


                            return `
                                <button
                                    class="ribbon-item"
                                    type="button"

                                    data-insignia-name="${escapeHTML(
                                        award.name
                                    )}"

                                    data-insignia-description="${escapeHTML(
                                        award.description ||
                                        ""
                                    )}"

                                    data-awarded-date="${escapeHTML(
                                        award.awarded_date ||
                                        "—"
                                    )}"

                                    data-award-notes="${escapeHTML(
                                        award.notes ||
                                        ""
                                    )}"
                                >

                                    ${image}

                                </button>
                            `;
                        }
                    )
                    .join("");

        }


        /* --------------------------------------------------
           BADGES / TABS
        -------------------------------------------------- */

        if (!badges.length) {

            badgeRack.innerHTML =
                `
                <div class="insignia-empty">

                    <span>
                        NO BADGES / TABS AWARDED
                    </span>

                    <small>
                        Qualification and specialist
                        insignia will appear here.
                    </small>

                </div>
                `;

        } else {

            badgeRack.innerHTML =
                badges
                    .map(
                        award => {

                            const image =
                                award.image_path
                                    ? `
                                        <img
                                            src="${escapeHTML(
                                                award.image_path
                                            )}"
                                            alt="${escapeHTML(
                                                award.name
                                            )}"
                                        >
                                      `
                                    : "";


                            const fallback =
                                !award.image_path
                                    ? `
                                        <span>
                                            ${escapeHTML(
                                                award.code ||
                                                "BADGE"
                                            )}
                                        </span>
                                      `
                                    : "";


                            return `
                                <button
                                    class="insignia-item"
                                    type="button"

                                    data-insignia-name="${escapeHTML(
                                        award.name
                                    )}"

                                    data-insignia-description="${escapeHTML(
                                        award.description ||
                                        ""
                                    )}"

                                    data-awarded-date="${escapeHTML(
                                        award.awarded_date ||
                                        "—"
                                    )}"

                                    data-award-notes="${escapeHTML(
                                        award.notes ||
                                        ""
                                    )}"
                                >

                                    <div
                                        class="insignia-image"
                                    >

                                        ${image}

                                        ${fallback}

                                    </div>


                                    <div
                                        class="insignia-item-info"
                                    >

                                        <strong>
                                            ${escapeHTML(
                                                award.code ||
                                                award.name
                                            )}
                                        </strong>

                                        <small>
                                            ${escapeHTML(
                                                award.name
                                            )}
                                        </small>

                                    </div>

                                </button>
                            `;
                        }
                    )
                    .join("");

        }


        /*
         * Attach popup events after dynamic elements
         * have been inserted.
         */

        attachInsigniaHandlers();


    } catch (error) {

        console.error(
            "Awards error:",
            error
        );


        if (awardCount) {
            awardCount.textContent =
                "—";
        }


        ribbonRack.innerHTML =
            `
            <div class="insignia-empty">

                <span>
                    AWARDS UNAVAILABLE
                </span>

                <small>
                    Unable to load award records.
                </small>

            </div>
            `;


        badgeRack.innerHTML =
            `
            <div class="insignia-empty">

                <span>
                    AWARDS UNAVAILABLE
                </span>

                <small>
                    Unable to load award records.
                </small>

            </div>
            `;

    }

}



/* ==========================================================
   INSIGNIA POPUP
========================================================== */

function attachInsigniaHandlers() {

    document
        .querySelectorAll(
            ".ribbon-item, .insignia-item"
        )
        .forEach(
            item => {

                item.addEventListener(
                    "click",
                    () => {

                        openInsigniaModal(
                            item
                        );

                    }
                );

            }
        );

}



function openInsigniaModal(
    item
) {

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


    if (
        !modal ||
        !modalTitle ||
        !modalDescription ||
        !modalImage
    ) {

        return;

    }


    const name =
        item.dataset.insigniaName ||
        "Insignia";


    const description =
        item.dataset.insigniaDescription ||
        "No description available.";


    const awardedDate =
        item.dataset.awardedDate ||
        "—";


    const notes =
        item.dataset.awardNotes ||
        "";


    modalTitle.textContent =
        name;


    let descriptionHTML =
        escapeHTML(
            description
        );


    descriptionHTML +=
        `<br><br>
         <strong>
            AWARDED:
         </strong>
         ${escapeHTML(
            awardedDate
         )}`;


    if (notes) {

        descriptionHTML +=
            `<br>
             <strong>
                NOTES:
             </strong>
             ${escapeHTML(
                notes
             )}`;

    }


    modalDescription.innerHTML =
        descriptionHTML;


    const image =
        item.querySelector(
            "img"
        );


    if (
        image &&
        image.getAttribute("src") &&
        image.style.display !== "none"
    ) {

        modalImage.innerHTML =
            `
            <img
                src="${escapeHTML(
                    image.getAttribute("src")
                )}"
                alt="${escapeHTML(
                    name
                )}"
            >
            `;

    } else {

        modalImage.innerHTML =
            `
            <span>
                INSIGNIA
            </span>
            `;

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

    const modal =
        document.getElementById(
            "insigniaModal"
        );


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



/* ==========================================================
   MODAL EVENT SETUP
========================================================== */

function setupInsigniaModal() {

    const closeButton =
        document.getElementById(
            "closeInsigniaModal"
        );


    const backdrop =
        document.querySelector(
            ".insignia-modal-backdrop"
        );


    if (closeButton) {

        closeButton.addEventListener(
            "click",
            closeInsigniaModal
        );

    }


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

            } catch (error) {

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
   INITIALIZATION
========================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        setupLoginPage();

        setupLogout();

        setupInsigniaModal();


        /*
         * portal.html contains #memberName.
         * login.html does not.
         */

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