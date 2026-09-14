/* =========================================================
   KSOL DOCUMENTATION SYSTEM
========================================================= */


/* =========================================================
   DOCUMENT REGISTER
========================================================= */

const documents = [

    /* =====================================================
       TRAINING
    ===================================================== */

    {
        number: "01",

        id: "ksol-bt-1-2a",

        title: "Basic Training Manual",

        description:
            "Fundamental training requirements and procedures for KSOL personnel.",

        category: "training",

        classification: "declassified",

        documentNumber: "KSOL-BT 1-2A",

        version: "FS-0034A",

        date: "09-07-2026",

        file: "Documents/Basic Training.pdf"
    },

    {
        number: "02",

        id: "ksol-spe-2-1a",

        title: "Special Insertion Service Probation & Evaluation Manual",

        description:
            "lorem ipsum dolor sit amet.",

        category: "training",

        classification: "classified",

        documentNumber: "KSOL-SPE 2-1A",

        version: "FS-0076A",

        date: "09-08-2026",

        file: "Documents/SIS Probabtion & Evaluation.pdf"
    },

    {
        number: "03",

        id: "ksol-mk-3-1a",

        title: "Marksmanship Course Manual",

        description:
            "lorem ipsum dolor sit amet.",

        category: "training",

        classification: "declassified",

        documentNumber: "KSOL-MK 3-1A",

        version: "FS-0453A",

        date: "09-09-2026",

        file: "Documents/Marksmanship Course.pdf"
    },

    {
        number: "04",

        id: "ksol-cq-4-1a",

        title: "Close Quarters Battle Course Manual",

        description:
            "lorem ipsum dolor sit amet.",

        category: "training",

        classification: "declassified",

        documentNumber: "KSOL-CQ 4-1A",

        version: "FS-0921A",

        date: "09-11-2026",

        file: "Documents/CQB Course Manual.pdf"
    },

    {
        number: "05",

        id: "ksol-mr-5-1a",

        title: "Map Reading Course Manual",

        description:
            "lorem ipsum dolor sit amet.",

        category: "training",

        classification: "declassified",

        documentNumber: "KSOL-MR 5-1A",

        version: "FS-0311A",

        date: "09-13-2026",

        file: "Documents/Map Reading Course Manual.pdf"
    },

    {
        number: "06",

        id: "ksol-pf-6-1a",

        title: "Pilot Combat Flight Course Manual",

        description:
            "lorem ipsum dolor sit amet.",

        category: "training",

        classification: "declassified",

        documentNumber: "KSOL-PF 6-1A",

        version: "FS-0276A",

        date: "09-13-2026",

        file: "Documents/Pilot Combat Flight Course Manual.pdf"
    },


    /* =====================================================
       DOCTRINE
    ===================================================== */



    /* =====================================================
       SOP
    ===================================================== */


    /* =====================================================
       COMMAND
    ===================================================== */

    /* =====================================================
       HIGHLY CLASSIFIED EXAMPLE
    ===================================================== */

    {
        number: "07",

        id: "ksol-restricted-01",

        title: "REDACTED",

        description:
            "Publication retained under Headquarters classification.",

        category: "command",

        classification: "classified",

        documentNumber: "REDACTED",

        version: "REDACTED",

        date: "REDACTED",

        redactedTitle: true
    },


    /* =====================================================
       ADMINISTRATIVE
    ===================================================== */

];


/* =========================================================
   STATE
========================================================= */

let activeClassification = "all";

let activeCategory = "all";

let searchQuery = "";


/* =========================================================
   ELEMENTS
========================================================= */

const documentList =
    document.getElementById("document-list");

const documentCount =
    document.getElementById("document-count");

const visibleCount =
    document.getElementById("visible-count");

const noResults =
    document.getElementById("no-results");

const searchInput =
    document.getElementById("document-search");


/* =========================================================
   CLASSIFICATION LABEL
========================================================= */

function classificationLabel(classification) {

    if (classification === "declassified") {

        return "DECLASSIFIED";

    }

    return "CLASSIFIED";

}


/* =========================================================
   DOCUMENT FILTER
========================================================= */

function getFilteredDocuments() {

    return documents.filter(document => {

        const classificationMatch =
            activeClassification === "all" ||
            document.classification === activeClassification;


        const categoryMatch =
            activeCategory === "all" ||
            document.category === activeCategory;


        const searchableText = `

            ${document.title}

            ${document.description}

            ${document.documentNumber}

            ${document.category}

            ${document.version}

            ${document.date}

        `.toLowerCase();


        const searchMatch =
            !searchQuery ||
            searchableText.includes(searchQuery);


        return (
            classificationMatch &&
            categoryMatch &&
            searchMatch
        );

    });

}


/* =========================================================
   RENDER DOCUMENTS
========================================================= */

function renderDocuments() {

    const filtered =
        getFilteredDocuments();


    documentList.innerHTML = "";


    visibleCount.textContent =
        `${String(filtered.length).padStart(2, "0")} DOCUMENT${filtered.length === 1 ? "" : "S"}`;


    if (filtered.length === 0) {

        noResults.classList.remove("hidden");

        return;

    }


    noResults.classList.add("hidden");


    filtered.forEach(doc => {

        const row =
            document.createElement("div");

        row.className =
            "document-row";


        /* -----------------------------------------
           NUMBER
        ----------------------------------------- */

        const number =
            document.createElement("div");

        number.className =
            "document-number";

        number.textContent =
            doc.number;


        /* -----------------------------------------
           INFO
        ----------------------------------------- */

        const info =
            document.createElement("div");

        info.className =
            "document-info";


        let titleHTML;


        if (
            doc.redactedTitle === true
        ) {

            titleHTML = `

                <div class="document-title redacted">

                    <span class="redacted-box">
                        REDACTED
                    </span>

                </div>

            `;

        } else {

            titleHTML = `

                <div class="document-title">
                    ${doc.title}
                </div>

            `;

        }


        info.innerHTML = `

            ${titleHTML}

            <div class="document-description">
                ${doc.description}
            </div>

            <div class="document-meta">

                <span>
                    ${doc.documentNumber}
                </span>

                <span>
                    PCN No.:  ${doc.version}
                </span>

                <span>
                    ${doc.date}
                </span>

            </div>

        `;


        /* -----------------------------------------
           CLASSIFICATION
        ----------------------------------------- */

        const classification =
            document.createElement("div");

        classification.className =
            `document-classification ${doc.classification}`;


        classification.innerHTML = `

            <span class="classification-dot"></span>

            ${classificationLabel(
                doc.classification
            )}

        `;


        /* -----------------------------------------
           ACTIONS
        ----------------------------------------- */

        const actions =
            document.createElement("div");

        actions.className =
            "document-actions";


        if (
            doc.classification === "declassified" &&
            doc.file
        ) {

            actions.innerHTML = `

                <a
                    class="document-action"
                    href="${doc.file}"
                    target="_blank"
                    rel="noopener"
                >
                    VIEW
                </a>

                <a
                    class="document-action download"
                    href="${doc.file}"
                    download
                >
                    DOWNLOAD
                </a>

            `;

        } else {

            actions.innerHTML = `

                <div class="document-restricted">

                    <span class="lock">
                        ▣
                    </span>

                    RESTRICTED

                </div>

            `;

        }


        /* -----------------------------------------
           APPEND
        ----------------------------------------- */

        row.appendChild(number);

        row.appendChild(info);

        row.appendChild(classification);

        row.appendChild(actions);


        documentList.appendChild(row);

    });

}

/* =========================================================
   CLASSIFICATION FILTERS
========================================================= */

document
    .querySelectorAll(
        ".filter"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(
                        ".filter"
                    )
                    .forEach(
                        item =>
                            item.classList.remove(
                                "active"
                            )
                    );


                button.classList.add(
                    "active"
                );


                activeClassification =
                    button.dataset.classification;


                renderDocuments();

            }
        );

    });


/* =========================================================
   CATEGORY FILTERS
========================================================= */

document
    .querySelectorAll(
        ".category-filter"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(
                        ".category-filter"
                    )
                    .forEach(
                        item =>
                            item.classList.remove(
                                "active"
                            )
                    );


                button.classList.add(
                    "active"
                );


                activeCategory =
                    button.dataset.category;


                renderDocuments();

            }
        );

    });


/* =========================================================
   SEARCH
========================================================= */

searchInput.addEventListener(
    "input",
    event => {

        searchQuery =
            event.target.value
                .trim()
                .toLowerCase();


        renderDocuments();

    }
);


/* =========================================================
   TOTAL COUNT
========================================================= */

documentCount.textContent =
    String(documents.length).padStart(2, "0");


/* =========================================================
   INITIAL RENDER
========================================================= */

renderDocuments();