/* =========================================================
   KSOL MEDIA SHOWCASE
========================================================= */


/* =========================================================
   MEDIA REGISTER

   Add new images here.

   IMPORTANT:
   Files are stored in the "Media" folder.
   Paths are case-sensitive on Linux.
========================================================= */

const mediaItems = [

    {
        src: "Media/1.jpeg",
        title: "FIELD OPERATIONS",
        description: "KSOL personnel during a field operation.",
        category: "OPERATIONS",
        date: "20 AUG 2026"
    },

    {
        src: "Media/2.jpeg",
        title: "FIELD ELEMENT",
        description: "KSOL personnel during an operational deployment.",
        category: "OPERATIONS",
        date: "18 AUG 2026"
    },

    {
        src: "Media/training-01.jpg",
        title: "COMBAT TRAINING",
        description: "Personnel during a scheduled training exercise.",
        category: "TRAINING",
        date: "15 AUG 2026"
    },

    {
        src: "Media/training-02.jpg",
        title: "CQB TRAINING",
        description: "Personnel conducting close quarters training.",
        category: "TRAINING",
        date: "12 AUG 2026"
    },

    {
        src: "Media/aviation-01.jpg",
        title: "AVIATION OPERATIONS",
        description: "KSOL aviation element conducting an exercise.",
        category: "AVIATION",
        date: "10 AUG 2026"
    },

    {
        src: "Media/event-01.jpg",
        title: "LEGION EVENT",
        description: "KSOL personnel during an organizational event.",
        category: "EVENTS",
        date: "01 AUG 2026"
    }

];


/* =========================================================
   ELEMENTS
========================================================= */

const gallery =
    document.getElementById("mediaGallery");

const filters =
    document.querySelectorAll(".media-filter");

const lightbox =
    document.getElementById("mediaLightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const lightboxTitle =
    document.getElementById("lightboxTitle");

const lightboxDescription =
    document.getElementById("lightboxDescription");

const lightboxMeta =
    document.getElementById("lightboxMeta");

const lightboxClose =
    document.getElementById("lightboxClose");

const zoomInButton =
    document.getElementById("zoomIn");

const zoomOutButton =
    document.getElementById("zoomOut");

const zoomResetButton =
    document.getElementById("zoomReset");


/* =========================================================
   STATE
========================================================= */

let activeFilter = "ALL";

let currentItem = null;

let zoomLevel = 1;

let panX = 0;

let panY = 0;

let dragging = false;

let dragStartX = 0;

let dragStartY = 0;

let startPanX = 0;

let startPanY = 0;


/* =========================================================
   RENDER
========================================================= */

function renderMedia() {

    if (!gallery) return;

    gallery.innerHTML = "";


    const filteredItems =
        mediaItems.filter(item => {

            if (activeFilter === "ALL") {
                return true;
            }

            return item.category === activeFilter;

        });


    if (!filteredItems.length) {

        gallery.innerHTML = `
            <div class="media-empty">
                NO MEDIA AVAILABLE
            </div>
        `;

        return;

    }


    filteredItems.forEach((item, index) => {

        const card =
            document.createElement("article");


        card.className =
            "showcase-item";


        /*
         * Every few images receive a larger
         * editorial treatment.
         */

        if (index % 11 === 0) {

            card.classList.add("feature");

        } else if (index % 7 === 0) {

            card.classList.add("large");

        } else if (index % 5 === 0) {

            card.classList.add("tall");

        }


        card.innerHTML = `

            <button
                class="showcase-image"
                type="button"
                aria-label="View ${item.title}"
            >

                <img
                    src="${item.src}"
                    alt="${item.title}"
                    loading="lazy"
                    draggable="false"
                >


                <div class="showcase-overlay">

                    <div class="showcase-overlay-top">

                        <span>
                            ${String(index + 1).padStart(2, "0")}
                        </span>

                        <span>
                            VIEW
                        </span>

                    </div>


                    <div class="showcase-overlay-bottom">

                        <strong>
                            ${item.title}
                        </strong>

                        <span>
                            ${item.category}
                        </span>

                    </div>

                </div>

            </button>

        `;


        const button =
            card.querySelector(".showcase-image");


        button.addEventListener(
            "click",
            () => openLightbox(item)
        );


        gallery.appendChild(card);

    });

}


/* =========================================================
   FILTERS
========================================================= */

filters.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            activeFilter =
                button.dataset.filter || "ALL";


            filters.forEach(item => {

                item.classList.toggle(
                    "active",
                    item === button
                );

            });


            renderMedia();

        }
    );

});


/* =========================================================
   LIGHTBOX
========================================================= */

function openLightbox(item) {

    if (!lightbox) return;


    currentItem = item;


    zoomLevel = 1;

    panX = 0;

    panY = 0;


    lightboxImage.src =
        item.src;

    lightboxImage.alt =
        item.title;


    lightboxTitle.textContent =
        item.title;


    lightboxDescription.textContent =
        item.description;


    if (lightboxMeta) {

        lightboxMeta.textContent =
            `${item.category}  //  ${item.date}`;

    }


    updateImageTransform();


    lightbox.classList.add("open");

    lightbox.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.style.overflow =
        "hidden";

}


/* =========================================================
   CLOSE
========================================================= */

function closeLightbox() {

    if (!lightbox) return;


    lightbox.classList.remove("open");

    lightbox.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.style.overflow =
        "";


    currentItem = null;


    lightboxImage.src = "";

}


/* =========================================================
   ZOOM
========================================================= */

function setZoom(value) {

    zoomLevel =
        Math.max(
            1,
            Math.min(5, value)
        );


    if (zoomLevel === 1) {

        panX = 0;

        panY = 0;

    }


    updateImageTransform();

}


function updateImageTransform() {

    if (!lightboxImage) return;


    lightboxImage.style.transform =
        `translate3d(${panX}px, ${panY}px, 0) scale(${zoomLevel})`;

}


/* =========================================================
   ZOOM BUTTONS
========================================================= */

if (zoomInButton) {

    zoomInButton.addEventListener(
        "click",
        () => setZoom(zoomLevel + 0.5)
    );

}


if (zoomOutButton) {

    zoomOutButton.addEventListener(
        "click",
        () => setZoom(zoomLevel - 0.5)
    );

}


if (zoomResetButton) {

    zoomResetButton.addEventListener(
        "click",
        () => setZoom(1)
    );

}


/* =========================================================
   MOUSE WHEEL ZOOM
========================================================= */

if (lightboxImage) {

    lightboxImage.addEventListener(
        "wheel",
        event => {

            if (!lightbox.classList.contains("open")) {
                return;
            }


            event.preventDefault();


            if (event.deltaY < 0) {

                setZoom(
                    zoomLevel + 0.25
                );

            } else {

                setZoom(
                    zoomLevel - 0.25
                );

            }

        },
        { passive: false }
    );

}


/* =========================================================
   DRAG / PAN
========================================================= */

if (lightboxImage) {

    lightboxImage.addEventListener(
        "mousedown",
        event => {

            if (zoomLevel <= 1) {
                return;
            }


            dragging = true;


            dragStartX =
                event.clientX;

            dragStartY =
                event.clientY;


            startPanX =
                panX;

            startPanY =
                panY;


            lightboxImage.classList.add(
                "dragging"
            );

        }
    );


    window.addEventListener(
        "mousemove",
        event => {

            if (!dragging) return;


            panX =
                startPanX +
                (event.clientX - dragStartX);


            panY =
                startPanY +
                (event.clientY - dragStartY);


            updateImageTransform();

        }
    );


    window.addEventListener(
        "mouseup",
        () => {

            dragging = false;


            lightboxImage.classList.remove(
                "dragging"
            );

        }
    );

}


/* =========================================================
   DOUBLE CLICK
========================================================= */

if (lightboxImage) {

    lightboxImage.addEventListener(
        "dblclick",
        () => {

            if (zoomLevel === 1) {

                setZoom(2);

            } else {

                setZoom(1);

            }

        }
    );

}


/* =========================================================
   CLOSE BUTTON
========================================================= */

if (lightboxClose) {

    lightboxClose.addEventListener(
        "click",
        closeLightbox
    );

}


/* =========================================================
   CLICK BACKDROP
========================================================= */

if (lightbox) {

    lightbox.addEventListener(
        "click",
        event => {

            if (
                event.target === lightbox
            ) {

                closeLightbox();

            }

        }
    );

}


/* =========================================================
   KEYBOARD
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            !lightbox ||
            !lightbox.classList.contains("open")
        ) {

            return;

        }


        if (event.key === "Escape") {

            closeLightbox();

        }


        if (event.key === "+" || event.key === "=") {

            setZoom(
                zoomLevel + 0.25
            );

        }


        if (event.key === "-") {

            setZoom(
                zoomLevel - 0.25
            );

        }


        if (event.key === "0") {

            setZoom(1);

        }

    }
);


/* =========================================================
   INITIALIZE
========================================================= */

renderMedia();