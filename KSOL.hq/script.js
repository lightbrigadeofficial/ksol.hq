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
