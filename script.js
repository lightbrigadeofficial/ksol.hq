document.addEventListener("DOMContentLoaded", () => {
  const enlistBtn = document.getElementById("enlistBtn");

  if (enlistBtn) {
    // enlistBtn.addEventListener("click", (event) => {
    //   event.preventDefault();
    //   alert("Replace this link with your Discord invite/application URL.");
    // });
  }
});

/* =========================================================
   LIVE TIME
========================================================= */

function updateTimes() {

    const now = new Date();


    /* =====================================================
       KSOL HQ TIME
       India Standard Time
       Asia/Kolkata
    ===================================================== */

    const hqTime = new Intl.DateTimeFormat("en-IN", {

        timeZone: "Asia/Kolkata",

        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",

        hour12: false

    }).format(now);


    /* =====================================================
       VIEWER LOCAL TIME
       Uses the visitor's own device timezone
    ===================================================== */

    const localTime = new Intl.DateTimeFormat(
        undefined,
        {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",

            hour12: false
        }
    ).format(now);


    /* =====================================================
       VIEWER TIMEZONE NAME
    ===================================================== */

    const timeZone =
        Intl.DateTimeFormat().resolvedOptions().timeZone;


    /* =====================================================
       DISPLAY
    ===================================================== */

    document.getElementById("hq-time").textContent =
        hqTime;


    document.getElementById("local-time").textContent =
        localTime;


    document.getElementById("local-zone").textContent =
        timeZone.replace("_", " / ");

}


/* Initial update */
updateTimes();


/* Update every second */
setInterval(updateTimes, 1000);


/* =========================================================
   HQ DROPDOWN
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    const dropdown = document.querySelector(".nav-dropdown");
    const toggle = document.querySelector(".nav-dropdown-toggle");

    if (dropdown && toggle) {
        toggle.addEventListener("click", (event) => {
            event.stopPropagation();
            const isOpen = dropdown.classList.toggle("open");
            toggle.setAttribute("aria-expanded", String(isOpen));
        });

        document.addEventListener("click", (event) => {
            if (!dropdown.contains(event.target)) {
                dropdown.classList.remove("open");
                toggle.setAttribute("aria-expanded", "false");
            }
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                dropdown.classList.remove("open");
                toggle.setAttribute("aria-expanded", "false");
            }
        });
    }
});


/* =========================================================
   RANK PAGE INTERACTION
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    const search = document.getElementById("rankSearch");
    const filterButtons = [...document.querySelectorAll(".rank-filter")];
    const cards = [...document.querySelectorAll(".rank-card")];

    if (!search || !cards.length) return;

    let activeFilter = "all";

    const applyFilters = () => {
        const query = search.value.trim().toLowerCase();

        cards.forEach((card) => {
            const matchesText = card.textContent.toLowerCase().includes(query);
            const matchesFilter =
                activeFilter === "all" ||
                card.dataset.category === activeFilter;

            card.classList.toggle("hidden", !(matchesText && matchesFilter));
        });

        document.querySelectorAll(".rank-section").forEach((section) => {
            const visibleCards = section.querySelectorAll(".rank-card:not(.hidden)");
            section.style.display = visibleCards.length ? "" : "none";
        });
    };

    search.addEventListener("input", applyFilters);

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            activeFilter = button.dataset.filter || "all";

            filterButtons.forEach((item) => {
                item.classList.toggle("active", item === button);
            });

            applyFilters();
        });
    });

    cards.forEach((card) => {
        const button = card.querySelector(".rank-card-button");
        if (!button) return;

        button.addEventListener("click", () => {
            const expanded = card.classList.toggle("expanded");
            button.setAttribute("aria-expanded", String(expanded));
        });
    });
});
