/* =========================================================
   KSOL MEDIA
   MANUAL MEDIA DATABASE
========================================================= */

const mediaItems = [

    {
        type: "image",
        src: "media/operation-01.jpg",
        title: "FIELD OPERATIONS",
        description: "KSOL personnel during a field operation.",
        category: "OPERATIONS",
        date: "2026-08-20"
    },

    {
        type: "image",
        src: "media/training-01.jpg",
        title: "COMBAT TRAINING",
        description: "Personnel during a scheduled training exercise.",
        category: "TRAINING",
        date: "2026-08-15"
    },

    {
        type: "image",
        src: "media/aviation-01.jpg",
        title: "AVIATION OPERATIONS",
        description: "Army Aviation Corps conducting an exercise.",
        category: "AVIATION",
        date: "2026-08-10"
    },

    {
        type: "image",
        src: "media/event-01.jpg",
        title: "LEGION EVENT",
        description: "KSOL personnel during an organizational event.",
        category: "EVENTS",
        date: "2026-08-01"
    }

];


/* =========================================================
   ELEMENTS
========================================================= */

const gallery = document.getElementById("mediaGallery");
const filters = document.querySelectorAll(".media-filter");

const lightbox = document.getElementById("mediaLightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxDescription = document.getElementById("lightboxDescription");
const lightboxClose = document.getElementById("lightboxClose");

let activeFilter = "ALL";


/* =========================================================
   RENDER MEDIA
========================================================= */

function renderMedia() {

    if (!gallery) return;

    gallery.innerHTML = "";

    const filteredItems = mediaItems.filter(item => {

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

        const card = document.createElement("article");

        card.className = "media-card";

        card.innerHTML = `

            <button
                class="media-image-button"
                type="button"
                aria-label="Open ${item.title}"
            >

                <img
                    src="${item.src}"
                    alt="${item.title}"
                    loading="lazy"
                >

                <span class="media-image-overlay">
                    VIEW
                    <span>↗</span>
                </span>

            </button>


            <div class="media-card-info">

                <div class="media-card-meta">

                    <span>
                        ${item.category}
                    </span>

                    <span>
                        ${item.date}
                    </span>

                </div>


                <h3>
                    ${item.title}
                </h3>


                <p>
                    ${item.description}
                </p>

            </div>

        `;


        const button =
            card.querySelector(".media-image-button");


        button.addEventListener("click", () => {

            openLightbox(item);

        });


        gallery.appendChild(card);

    });

}


/* =========================================================
   FILTERS
========================================================= */

filters.forEach(button => {

    button.addEventListener("click", () => {

        activeFilter =
            button.dataset.filter || "ALL";


        filters.forEach(item => {

            item.classList.toggle(
                "active",
                item === button
            );

        });


        renderMedia();

    });

});


/* =========================================================
   LIGHTBOX
========================================================= */

function openLightbox(item) {

    if (!lightbox) return;


    lightboxImage.src = item.src;
    lightboxImage.alt = item.title;

    lightboxTitle.textContent =
        item.title;

    lightboxDescription.textContent =
        item.description;


    lightbox.classList.add("open");

    lightbox.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.style.overflow =
        "hidden";

}


function closeLightbox() {

    if (!lightbox) return;


    lightbox.classList.remove("open");

    lightbox.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.style.overflow =
        "";

}


/* Close button */

if (lightboxClose) {

    lightboxClose.addEventListener(
        "click",
        closeLightbox
    );

}


/* Click outside image */

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


/* Escape key */

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

renderMedia();