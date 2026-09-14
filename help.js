/* =========================================
   KSOL HELP CENTER
   ========================================= */


/* =========================================
   HELP CENTER DATA
   ========================================= */

const topics = [

    {
        id: "getting-started",

        title: "Getting Started",

        description:
            "Learn how KSOL works, how to join, and what new personnel need to know.",

        articles: [

            {
                id: "what-is-ksol",

                title: "What is KSOL?",

                description:
                    "Learn what Kali Special Operations Legion is and what it does.",

                content: `
                    <p>
                        <strong>Kali Special Operations Legion (KSOL)</strong>
                        is a military simulation organization focused on
                        structured operations, training and realistic
                        gameplay.
                    </p>

                    <p>
                        KSOL operates primarily within BRM5 and uses
                        standardized training, leadership structures,
                        communications and operational procedures.
                    </p>

                    <h2>What does KSOL do?</h2>

                    <p>
                        KSOL conducts organized operations and training
                        activities covering infantry, special operations,
                        aviation, reconnaissance, airborne operations,
                        CQB and other military simulation disciplines.
                    </p>

                    <h2>Who can join?</h2>

                    <p>
                        Anyone who meets KSOL's recruitment and conduct
                        requirements may apply to join.
                    </p>
                `
            },

            {
                id: "how-to-join",

                title: "How do I join KSOL?",

                description:
                    "Information about recruitment and joining the faction.",

                content: `
                    <p>
                        To join KSOL, begin by entering the official
                        KSOL Discord server and following the recruitment
                        instructions provided there.
                    </p>

                    <h2>After joining</h2>

                    <p>
                        New personnel are required to complete the
                        appropriate onboarding and training process
                        before participating in activities that require
                        qualification.
                    </p>

                    <div class="note">
                        Recruitment requirements may change. Always
                        follow the current instructions provided by
                        KSOL Headquarters.
                    </div>
                `
            }

        ]
    },


    {
        id: "discord",

        title: "Discord",

        description:
            "Help with the KSOL Discord server, channels, roles and communications.",

        articles: [

            {
                id: "discord-channel-access",

                title: "Why can't I see a Discord channel?",

                description:
                    "Understand why certain KSOL Discord channels may not be visible to you.",

                content: `
                    <p>
                        KSOL Discord channels may be restricted according
                        to your <strong>role, unit, appointment,
                        qualification or command permissions</strong>.
                    </p>

                    <h2>Why are channels restricted?</h2>

                    <p>
                        Some channels contain information intended only
                        for specific personnel or elements. Discord
                        permissions are therefore used to limit access.
                    </p>

                    <h2>What should I do?</h2>

                    <p>
                        If you believe you should have access to a channel,
                        contact your immediate superior or the appropriate
                        command authority.
                    </p>

                    <div class="note">
                        Do not repeatedly request administrative access
                        simply to view restricted channels. Access is
                        granted according to operational requirements.
                    </div>
                `
            },

            {
                id: "discord-nickname",

                title: "What should my Discord nickname be?",

                description:
                    "Information about KSOL Discord naming conventions.",

                content: `
                    <p>
                        Personnel should use the naming format specified
                        by KSOL Headquarters or their respective unit.
                    </p>

                    <h2>Why does this matter?</h2>

                    <p>
                        Standardized names make personnel easier to
                        identify during training, operations and
                        administrative activities.
                    </p>
                `
            },

            {
                id: "radio-discipline",

                title: "What is radio discipline?",

                description:
                    "Learn the basic expectations for KSOL radio communication.",

                content: `
                    <p>
                        Radio discipline means keeping communications
                        clear, concise and relevant to the current
                        activity.
                    </p>

                    <h2>Basic rules</h2>

                    <ul>
                        <li>Use the correct callsign.</li>
                        <li>Keep transmissions concise.</li>
                        <li>Do not talk over other personnel.</li>
                        <li>Use standardized terminology.</li>
                        <li>Report important changes in situation.</li>
                        <li>Avoid unrelated conversation on operational channels.</li>
                    </ul>
                `
            }

        ]
    },


    {
        id: "training",

        title: "Training & Courses",

        description:
            "Information about KSOL training, qualifications and courses.",

        articles: [

            {
                id: "basic-training",

                title: "What is Basic Training?",

                description:
                    "Learn what KSOL Basic Training covers.",

                content: `
                    <p>
                        Basic Training establishes the fundamental
                        knowledge and skills required for personnel to
                        participate effectively in KSOL operations.
                    </p>

                    <h2>Training includes</h2>

                    <ul>
                        <li>Weapon handling</li>
                        <li>Marksmanship fundamentals</li>
                        <li>Movement</li>
                        <li>Cover and concealment</li>
                        <li>Field craft</li>
                        <li>Basic communication</li>
                        <li>Operational discipline</li>
                    </ul>

                    <p>
                        Additional specialist qualifications may be
                        required for advanced roles.
                    </p>
                `
            },

            {
                id: "course-qualification",

                title: "How do KSOL course qualifications work?",

                description:
                    "Understand training evaluations and qualification standards.",

                content: `
                    <p>
                        KSOL courses may use practical evaluations,
                        written knowledge checks or instructor assessments
                        to determine qualification.
                    </p>

                    <h2>Evaluation</h2>

                    <p>
                        Personnel are evaluated according to the standards
                        established by the applicable course manual.
                    </p>

                    <p>
                        Depending on the course, results may include
                        <strong>Qualified, Conditional or Unsatisfactory</strong>
                        outcomes.
                    </p>
                `
            }

        ]
    },


    {
        id: "operations",

        title: "Operations",

        description:
            "Learn how KSOL operations, briefings, communications and procedures work.",

        articles: [

            {
                id: "what-is-opord",

                title: "What is an OPORD?",

                description:
                    "Learn what an Operations Order is and why KSOL uses them.",

                content: `
                    <p>
                        An <strong>Operations Order (OPORD)</strong> is
                        a structured order used to communicate the
                        mission, situation, objectives and responsibilities
                        of an operation.
                    </p>

                    <h2>Why are OPORDs used?</h2>

                    <p>
                        OPORDs ensure that personnel understand what
                        the element is expected to accomplish and how
                        the operation is intended to proceed.
                    </p>

                    <h2>Adaptation</h2>

                    <p>
                        An OPORD establishes the plan, but personnel should
                        remain capable of adapting when the operational
                        situation changes.
                    </p>
                `
            },

            {
                id: "chain-of-command",

                title: "What is the chain of command?",

                description:
                    "Understand how authority and reporting work within KSOL.",

                content: `
                    <p>
                        The chain of command is the established structure
                        through which authority, orders, information and
                        responsibility flow.
                    </p>

                    <p>
                        Personnel should normally communicate and report
                        through their immediate superior unless circumstances
                        require otherwise.
                    </p>

                    <div class="note">
                        Following the chain of command does not mean
                        abandoning initiative. Personnel are expected to
                        make appropriate decisions when circumstances
                        require immediate action.
                    </div>
                `
            }

        ]
    },


    {
        id: "personnel",

        title: "Personnel",

        description:
            "Information about ranks, appointments, units, service and personnel records.",

        articles: [

            {
                id: "rank-vs-appointment",

                title: "What is the difference between rank and appointment?",

                description:
                    "Understand the difference between a person's rank and their assigned position.",

                content: `
                    <p>
                        <strong>Rank</strong> represents a person's
                        position within the KSOL rank structure.
                    </p>

                    <p>
                        An <strong>appointment</strong> represents the
                        position or responsibility assigned to that
                        individual.
                    </p>

                    <h2>Example</h2>

                    <p>
                        A Captain may hold the appointment of
                        Company Commander.
                    </p>

                    <p>
                        The rank is <strong>CPT</strong>.
                        The appointment is <strong>Company Commander</strong>.
                    </p>
                `
            }

        ]
    },


    {
        id: "technical",

        title: "Technical",

        description:
            "Help with KSOL's website, systems and technical issues.",

        articles: [

            {
                id: "website-not-working",

                title: "The KSOL website isn't working correctly",

                description:
                    "What to do when a page, feature or link isn't working.",

                content: `
                    <p>
                        If a KSOL website feature is not working,
                        first refresh the page and verify that your
                        browser has loaded the latest version.
                    </p>

                    <h2>If the problem continues</h2>

                    <ul>
                        <li>Try another browser.</li>
                        <li>Check your internet connection.</li>
                        <li>Clear cached website data.</li>
                        <li>Record the error or issue.</li>
                        <li>Report the problem to the appropriate administrator.</li>
                    </ul>
                `
            }

        ]
    }

];


/* =========================================
   DOM
   ========================================= */

const homeView = document.getElementById("home-view");
const topicView = document.getElementById("topic-view");
const articleView = document.getElementById("article-view");

const topicGrid = document.getElementById("topic-grid");

const topicTitle = document.getElementById("topic-title");
const topicDescription = document.getElementById("topic-description");
const topicBreadcrumb = document.getElementById("topic-breadcrumb");
const topicArticles = document.getElementById("topic-articles");

const articleTitle = document.getElementById("article-title");
const articleBreadcrumb = document.getElementById("article-breadcrumb");
const articleContent = document.getElementById("article-content");

const articleTopicLink =
    document.getElementById("article-topic-link");

const relatedArticles =
    document.getElementById("related-articles");

const searchInput =
    document.getElementById("search-input");

const searchResults =
    document.getElementById("search-results");

const resultsList =
    document.getElementById("results-list");

const resultCount =
    document.getElementById("result-count");

const browseSection =
    document.getElementById("browse-section");

const feedbackMessage =
    document.getElementById("feedback-message");


/* =========================================
   FIND DATA
   ========================================= */

function getTopic(topicId) {

    return topics.find(topic =>
        topic.id === topicId
    );

}


function getArticle(articleId) {

    for (const topic of topics) {

        const article =
            topic.articles.find(
                article => article.id === articleId
            );

        if (article) {

            return {
                article,
                topic
            };

        }

    }

    return null;

}


/* =========================================
   HOME
   ========================================= */

function renderHome() {

    homeView.classList.remove("hidden");

    topicView.classList.add("hidden");

    articleView.classList.add("hidden");

    renderTopics();

}


/* =========================================
   TOPICS
   ========================================= */

function renderTopics() {

    topicGrid.innerHTML = "";

    topics.forEach(topic => {

        const card =
            document.createElement("a");

        card.className = "topic-card";

        card.href =
            `#/topic/${topic.id}`;

        card.innerHTML = `

            <h3>${topic.title}</h3>

            <p>
                ${topic.description}
            </p>

            <span class="topic-arrow">
                →
            </span>

        `;

        topicGrid.appendChild(card);

    });

}


/* =========================================
   TOPIC PAGE
   ========================================= */

function renderTopic(topicId) {

    const topic =
        getTopic(topicId);

    if (!topic) {

        renderHome();

        return;

    }

    homeView.classList.add("hidden");

    topicView.classList.remove("hidden");

    articleView.classList.add("hidden");


    topicTitle.textContent =
        topic.title;

    topicDescription.textContent =
        topic.description;

    topicBreadcrumb.textContent =
        topic.title;


    topicArticles.innerHTML = "";


    topic.articles.forEach(article => {

        const link =
            document.createElement("a");

        link.className =
            "article-link";

        link.href =
            `#/article/${article.id}`;

        link.innerHTML = `

            <div>

                <h3>
                    ${article.title}
                </h3>

                <p>
                    ${article.description}
                </p>

            </div>

            <span class="article-arrow">
                →
            </span>

        `;

        topicArticles.appendChild(link);

    });

}


/* =========================================
   ARTICLE PAGE
   ========================================= */

function renderArticle(articleId) {

    const result =
        getArticle(articleId);

    if (!result) {

        renderHome();

        return;

    }

    const {
        article,
        topic
    } = result;


    homeView.classList.add("hidden");

    topicView.classList.add("hidden");

    articleView.classList.remove("hidden");


    articleTitle.textContent =
        article.title;

    articleBreadcrumb.textContent =
        article.title;


    articleTopicLink.textContent =
        topic.title;

    articleTopicLink.href =
        `#/topic/${topic.id}`;


    articleContent.innerHTML =
        article.content;


    renderRelatedArticles(
        article,
        topic
    );


    resetFeedback();

}


/* =========================================
   RELATED ARTICLES
   ========================================= */

function renderRelatedArticles(
    currentArticle,
    currentTopic
) {

    relatedArticles.innerHTML = "";


    let related = [];


    currentTopic.articles
        .filter(article =>
            article.id !== currentArticle.id
        )
        .forEach(article =>
            related.push({
                article,
                topic: currentTopic
            })
        );


    if (related.length < 3) {

        topics.forEach(topic => {

            if (topic.id === currentTopic.id)
                return;

            topic.articles.forEach(article => {

                if (
                    !related.some(
                        item =>
                            item.article.id === article.id
                    )
                ) {

                    related.push({
                        article,
                        topic
                    });

                }

            });

        });

    }


    related
        .slice(0, 3)
        .forEach(item => {

            const link =
                document.createElement("a");

            link.className =
                "related-link";

            link.href =
                `#/article/${item.article.id}`;

            link.textContent =
                item.article.title;

            relatedArticles.appendChild(link);

        });

}


/* =========================================
   SEARCH
   ========================================= */

function searchArticles(query) {

    query =
        query.trim().toLowerCase();


    if (!query) {

        searchResults.classList.add("hidden");

        browseSection.classList.remove("hidden");

        return;

    }


    const results = [];


    topics.forEach(topic => {

        topic.articles.forEach(article => {

            const searchable =
                `

                    ${article.title}

                    ${article.description}

                    ${article.content}

                    ${topic.title}

                `.toLowerCase();


            if (
                searchable.includes(query)
            ) {

                results.push({
                    article,
                    topic
                });

            }

        });

    });


    browseSection.classList.add("hidden");

    searchResults.classList.remove("hidden");


    resultCount.textContent =
        `${results.length} result${results.length === 1 ? "" : "s"}`;


    resultsList.innerHTML = "";


    if (results.length === 0) {

        resultsList.innerHTML = `

            <div class="search-result">

                <h3>
                    No results found
                </h3>

                <p>
                    Try using different keywords.
                </p>

            </div>

        `;

        return;

    }


    results.forEach(result => {

        const link =
            document.createElement("a");

        link.className =
            "search-result";

        link.href =
            `#/article/${result.article.id}`;


        link.innerHTML = `

            <div class="result-topic">
                ${result.topic.title}
            </div>

            <h3>
                ${result.article.title}
            </h3>

            <p>
                ${result.article.description}
            </p>

        `;


        resultsList.appendChild(link);

    });

}


/* =========================================
   FEEDBACK
   ========================================= */

function resetFeedback() {

    feedbackMessage.textContent = "";

    document
        .querySelectorAll(
            ".feedback-buttons button"
        )
        .forEach(button => {

            button.classList.remove(
                "selected"
            );

        });

}


document
    .querySelectorAll(
        ".feedback-buttons button"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(
                        ".feedback-buttons button"
                    )
                    .forEach(
                        btn =>
                            btn.classList.remove(
                                "selected"
                            )
                    );


                button.classList.add(
                    "selected"
                );


                if (
                    button.dataset.feedback ===
                    "yes"
                ) {

                    feedbackMessage.textContent =
                        "Thanks for your feedback.";

                } else {

                    feedbackMessage.textContent =
                        "Thanks. We'll use your feedback to improve this Help Center.";

                }

            }
        );

    });


/* =========================================
   SEARCH INPUT
   ========================================= */

searchInput.addEventListener(
    "input",
    event => {

        searchArticles(
            event.target.value
        );

    }
);


/* =========================================
   ROUTER
   ========================================= */

function route() {

    const hash =
        window.location.hash;


    if (
        !hash ||
        hash === "#/" ||
        hash === "#"
    ) {

        renderHome();

        return;

    }


    const parts =
        hash
            .replace(/^#\//, "")
            .split("/");


    const type =
        parts[0];

    const id =
        parts[1];


    if (type === "topic") {

        renderTopic(id);

        return;

    }


    if (type === "article") {

        renderArticle(id);

        return;

    }


    renderHome();

}


window.addEventListener(
    "hashchange",
    route
);


/* =========================================
   START
   ========================================= */

renderTopics();

route();