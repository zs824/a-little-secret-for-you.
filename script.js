/* =========================================================
   MOHSIN — ROMANTIC BIRTHDAY WEBSITE
   PREMIUM FINAL INTERACTION SCRIPT
   Mobile + Desktop Optimized
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    "use strict";


    /* =========================================================
       ELEMENTS
    ========================================================= */

    const body = document.body;

    const opening = document.getElementById("opening");
    const enterBtn = document.getElementById("enterBtn");
    const mainContent = document.getElementById("mainContent");

    const continueBtn = document.getElementById("continueBtn");

    const envelopeArea = document.getElementById("envelopeArea");
    const envelopeBtn = document.getElementById("envelopeBtn");
    const letterContainer = document.getElementById("letterContainer");
    const closeLetterBtn = document.getElementById("closeLetterBtn");
    const nextLetterBtn = document.getElementById("nextLetterBtn");

    const galleryNext = document.getElementById("galleryNext");

    const loveReasons = document.getElementById("loveReasons");

    const reasonCards = document.querySelectorAll(
        "#loveReasons .reason-card"
    );

    const finalNext = document.getElementById("finalNext");
    const finalSurprise = document.getElementById("finalSurprise");
    const restartBtn = document.getElementById("restartBtn");


    /* =========================================================
       SMOOTH SCROLL
    ========================================================= */

    function scrollToElement(element, offset = 0) {

        if (!element) return;

        const top =
            element.getBoundingClientRect().top +
            window.pageYOffset -
            offset;

        window.scrollTo({
            top: top,
            behavior: "smooth"
        });
    }


    /* =========================================================
       OPENING — ENTER MY HEART
    ========================================================= */

    if (enterBtn) {

        enterBtn.addEventListener("click", () => {

            body.classList.add("entered");

            if (opening) {
                opening.classList.add("opening-exit");
            }

            setTimeout(() => {

                if (mainContent) {

                    mainContent.classList.add(
                        "content-revealed"
                    );

                    scrollToElement(mainContent);

                }

            }, 450);

        });

    }


    /* =========================================================
       BIRTHDAY REVEAL
    ========================================================= */

    if (continueBtn) {

        continueBtn.addEventListener("click", () => {

            const loveLetter =
                document.getElementById("loveLetter");

            if (loveLetter) {
                scrollToElement(loveLetter);
            }

        });

    }


    /* =========================================================
       LOVE LETTER — OPEN
    ========================================================= */

    let letterOpened = false;

    if (
        envelopeBtn &&
        envelopeArea &&
        letterContainer
    ) {

        envelopeBtn.addEventListener("click", (event) => {

            event.preventDefault();

            if (letterOpened) return;

            letterOpened = true;

            envelopeBtn.classList.add(
                "open",
                "opened"
            );

            envelopeArea.classList.add(
                "open",
                "opened",
                "letter-opening"
            );


            setTimeout(() => {

                letterContainer.style.display = "block";

                letterContainer.classList.add(
                    "visible",
                    "letter-visible"
                );

                letterContainer.style.opacity = "1";
                letterContainer.style.visibility = "visible";
                letterContainer.style.transform =
                    "translateY(0)";


                setTimeout(() => {

                    scrollToElement(
                        letterContainer,
                        45
                    );

                }, 150);

            }, 850);

        });

    }


    /* =========================================================
       LOVE LETTER — CLOSE
    ========================================================= */

    if (
        closeLetterBtn &&
        envelopeBtn &&
        envelopeArea &&
        letterContainer
    ) {

        closeLetterBtn.addEventListener("click", (event) => {

            event.preventDefault();
            event.stopPropagation();

            letterContainer.classList.remove(
                "closing"
            );

            void letterContainer.offsetWidth;

            letterContainer.classList.add(
                "closing"
            );


            setTimeout(() => {

                letterContainer.classList.remove(
                    "closing",
                    "visible",
                    "letter-visible"
                );

                letterContainer.style.display = "none";
                letterContainer.style.opacity = "";
                letterContainer.style.visibility = "";
                letterContainer.style.transform = "";


                envelopeBtn.classList.remove(
                    "open",
                    "opened"
                );

                envelopeArea.classList.remove(
                    "open",
                    "opened",
                    "letter-opening"
                );


                letterOpened = false;


                setTimeout(() => {

                    scrollToElement(
                        envelopeArea,
                        80
                    );

                }, 150);

            }, 1200);

        });

    }


    /* =========================================================
       LOVE LETTER — NEXT
    ========================================================= */

    if (nextLetterBtn) {

        nextLetterBtn.addEventListener("click", () => {

            const gallery =
                document.getElementById("photoGallery");

            if (gallery) {
                scrollToElement(gallery);
            }

        });

    }


    /* =========================================================
       GALLERY — NEXT
    ========================================================= */

    if (galleryNext) {

        galleryNext.addEventListener("click", () => {

            if (loveReasons) {
                scrollToElement(loveReasons);
            }

        });

    }


    /* =========================================================
       ❤️ SECTION 5 — 26 THINGS I LOVE
       COMPLETE PREMIUM SYSTEM
    ========================================================= */

    if (reasonCards.length) {


        /* =====================================================
           INITIAL CARD SETUP
        ===================================================== */

        reasonCards.forEach((card, index) => {

            card.classList.remove(
                "reason-hidden",
                "reason-visible",
                "reason-active",
                "premium-reason-hidden",
                "premium-reason-visible",
                "premium-reason-click",
                "premium-card-start",
                "premium-card-show",
                "premium-card-click",
                "premium-final-love",
                "premium-26-active",
                "final-reason-loved"
            );

            card.style.setProperty(
                "--premium-delay",
                `${Math.min(index * 65, 850)}ms`
            );

        });


        /* =====================================================
           PREMIUM SCROLL REVEAL
        ===================================================== */

        if ("IntersectionObserver" in window) {

            const reasonObserver =
                new IntersectionObserver(
                    (entries, observer) => {

                        entries.forEach(entry => {

                            if (!entry.isIntersecting) {
                                return;
                            }

                            const card =
                                entry.target;

                            card.classList.add(
                                "premium-card-show"
                            );

                            observer.unobserve(card);

                        });

                    },
                    {
                        threshold: 0.10,
                        rootMargin:
                            "0px 0px -45px 0px"
                    }
                );


            reasonCards.forEach(card => {

                card.classList.add(
                    "premium-card-start"
                );

                reasonObserver.observe(card);

            });

        } else {

            reasonCards.forEach(card => {

                card.classList.add(
                    "premium-card-show"
                );

            });

        }


        /* =====================================================
           CARD CLICK — PREMIUM HEART EFFECT
        ===================================================== */

        reasonCards.forEach(card => {

            card.addEventListener("click", function () {

                const currentCard = this;


                /* Remove active state from other cards */

                reasonCards.forEach(item => {

                    if (item !== currentCard) {

                        item.classList.remove(
                            "reason-active",
                            "premium-card-click"
                        );

                    }

                });


                /* Activate clicked card */

                currentCard.classList.add(
                    "reason-active"
                );


                /* Restart click animation */

                currentCard.classList.remove(
                    "premium-card-click"
                );

                void currentCard.offsetWidth;

                currentCard.classList.add(
                    "premium-card-click"
                );


                /* =================================================
                   CREATE HEART PARTICLES
                ================================================= */

                const heartSymbols = [
                    "♥",
                    "♡",
                    "♥",
                    "♡",
                    "♥",
                    "♡"
                ];


                for (let i = 0; i < 6; i++) {

                    const heart =
                        document.createElement("span");

                    heart.className =
                        "premium-card-heart";

                    heart.textContent =
                        heartSymbols[
                            i % heartSymbols.length
                        ];


                    heart.style.left =
                        `${25 + Math.random() * 50}%`;

                    heart.style.top =
                        `${35 + Math.random() * 25}%`;


                    heart.style.setProperty(
                        "--hx",
                        `${-70 + Math.random() * 140}px`
                    );

                    heart.style.setProperty(
                        "--hy",
                        `${-75 - Math.random() * 110}px`
                    );


                    heart.style.setProperty(
                        "--heart-rotate",
                        `${-35 + Math.random() * 70}deg`
                    );


                    heart.style.animationDelay =
                        `${i * 0.055}s`;


                    currentCard.appendChild(
                        heart
                    );


                    setTimeout(() => {

                        heart.remove();

                    }, 1800);

                }


                /* Remove temporary state */

                setTimeout(() => {

                    currentCard.classList.remove(
                        "premium-card-click",
                        "reason-active"
                    );

                }, 1100);

            });

        });


        /* =====================================================
           DESKTOP — PREMIUM 3D TILT
        ===================================================== */

        const desktopHover =
            window.matchMedia(
                "(hover: hover) and (pointer: fine)"
            ).matches;


        if (desktopHover) {

            reasonCards.forEach(card => {

                card.addEventListener(
                    "mousemove",
                    event => {

                        const rect =
                            card.getBoundingClientRect();


                        const x =
                            event.clientX -
                            rect.left;

                        const y =
                            event.clientY -
                            rect.top;


                        const percentX =
                            (x / rect.width) - 0.5;

                        const percentY =
                            (y / rect.height) - 0.5;


                        const rotateY =
                            percentX * 5;

                        const rotateX =
                            percentY * -5;


                        card.style.transform =
                            `
                            translateY(-8px)
                            perspective(1000px)
                            rotateX(${rotateX}deg)
                            rotateY(${rotateY}deg)
                            scale(1.015)
                            `;

                    }
                );


                card.addEventListener(
                    "mouseleave",
                    () => {

                        card.style.transform =
                            "translateY(0) rotateX(0deg) rotateY(0deg) scale(1)";

                    }
                );

            });

        }


        /* =====================================================
           ❤️ 26TH CARD — SPECIAL FINAL LOVE
        ===================================================== */

        const finalReason =
            document.querySelector(
                "#loveReasons .final-reason"
            );


        if (finalReason) {

            finalReason.addEventListener(
                "click",
                () => {


                    /* Restart special animation */

                    finalReason.classList.remove(
                        "premium-final-love"
                    );

                    void finalReason.offsetWidth;

                    finalReason.classList.add(
                        "premium-final-love"
                    );


                    /* =============================================
                       EXTRA FINAL HEARTS
                    ============================================= */

                    const finalHearts = [
                        "♥",
                        "♡",
                        "💗",
                        "💖",
                        "💕"
                    ];


                    for (let i = 0; i < 12; i++) {

                        const heart =
                            document.createElement("span");

                        heart.className =
                            "premium-final-heart";

                        heart.textContent =
                            finalHearts[
                                Math.floor(
                                    Math.random() *
                                    finalHearts.length
                                )
                            ];


                        heart.style.left =
                            `${18 + Math.random() * 64}%`;

                        heart.style.top =
                            `${35 + Math.random() * 28}%`;


                        heart.style.setProperty(
                            "--final-x",
                            `${-110 + Math.random() * 220}px`
                        );


                        heart.style.setProperty(
                            "--final-y",
                            `${-100 - Math.random() * 130}px`
                        );


                        heart.style.setProperty(
                            "--final-rotate",
                            `${-45 + Math.random() * 90}deg`
                        );


                        heart.style.animationDelay =
                            `${i * 0.045}s`;


                        finalReason.appendChild(
                            heart
                        );


                        setTimeout(() => {

                            heart.remove();

                        }, 2000);

                    }


                    /* Remove final glow */

                    setTimeout(() => {

                        finalReason.classList.remove(
                            "premium-final-love"
                        );

                    }, 1700);

                }
            );

        }

    }


    /* =========================================================
       FINAL MESSAGE — NEXT
    ========================================================= */

    if (finalNext) {

        finalNext.addEventListener("click", () => {

            if (finalSurprise) {
                scrollToElement(finalSurprise);
            }

        });

    }


    /* =========================================================
       RESTART WEBSITE
    ========================================================= */

    if (restartBtn) {

        restartBtn.addEventListener("click", () => {


            /* Reset Section 5 */

            reasonCards.forEach(card => {

                card.classList.remove(
                    "active",
                    "reason-active",
                    "premium-card-click",
                    "premium-final-love",
                    "premium-26-active",
                    "final-reason-loved"
                );

                card.style.transform =
                    "translateY(0) rotateX(0deg) rotateY(0deg) scale(1)";

            });


            /* Reset letter */

            if (letterContainer) {

                letterContainer.classList.remove(
                    "closing",
                    "visible",
                    "letter-visible"
                );

                letterContainer.style.display = "none";
                letterContainer.style.opacity = "";
                letterContainer.style.visibility = "";
                letterContainer.style.transform = "";

            }


            /* Reset envelope */

            if (envelopeBtn) {

                envelopeBtn.classList.remove(
                    "open",
                    "opened"
                );

            }


            if (envelopeArea) {

                envelopeArea.classList.remove(
                    "open",
                    "opened",
                    "letter-opening"
                );

            }


            letterOpened = false;


            /* Back to top */

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* =========================================================
       GENERAL SCROLL REVEAL
       SECTION 5 CARDS EXCLUDED
    ========================================================= */

    const revealElements =
        document.querySelectorAll(`

            .birthday-reveal .reveal-item,
            .letter-wrapper > *,
            .gallery-header > *,
            .gallery-stage,
            .gallery-quote,
            .love-reasons .section-intro > *,
            .last-content > *,
            .final-content > *

        `);


    revealElements.forEach((element, index) => {

        element.classList.add(
            "reveal-item"
        );

        element.style.transitionDelay =
            `${Math.min(index * 0.055, 0.55)}s`;

    });


    if ("IntersectionObserver" in window) {

        const revealObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach(entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "is-visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12,
                    rootMargin:
                        "0px 0px -40px 0px"
                }
            );


        revealElements.forEach(element => {

            revealObserver.observe(
                element
            );

        });

    } else {

        revealElements.forEach(element => {

            element.classList.add(
                "is-visible"
            );

        });

    }


    /* =========================================================
       ❤️ FLOATING HEARTS
    ========================================================= */

    function createFloatingHeart() {

        const heart =
            document.createElement("span");

        heart.className =
            "floating-heart";

        heart.textContent =
            Math.random() > 0.5
                ? "♡"
                : "♥";


        heart.style.left =
            `${Math.random() * 100}%`;

        heart.style.fontSize =
            `${10 + Math.random() * 13}px`;

        heart.style.animationDuration =
            `${7 + Math.random() * 6}s`;

        heart.style.opacity =
            `${0.18 + Math.random() * 0.35}`;


        document.body.appendChild(
            heart
        );


        setTimeout(() => {

            heart.remove();

        }, 14000);

    }


    setInterval(
        createFloatingHeart,
        2200
    );


    /* =========================================================
       ❤️ FINAL HEART BURST
    ========================================================= */

    let finalBurstPlayed = false;


    function createFinalHeartBurst() {

        if (
            finalBurstPlayed ||
            !finalSurprise
        ) {
            return;
        }


        finalBurstPlayed = true;


        const hearts = [
            "❤️",
            "💗",
            "💖",
            "💕",
            "💓",
            "💘",
            "♥",
            "♡"
        ];


        for (let i = 0; i < 55; i++) {

            const heart =
                document.createElement("span");

            heart.className =
                "final-heart-burst";

            heart.textContent =
                hearts[
                    Math.floor(
                        Math.random() *
                        hearts.length
                    )
                ];


            heart.style.left =
                `${10 + Math.random() * 80}%`;

            heart.style.top =
                `${65 + Math.random() * 25}%`;


            const moveX =
                -180 + Math.random() * 360;

            const moveY =
                -180 - Math.random() * 350;


            heart.style.setProperty(
                "--moveX",
                `${moveX}px`
            );

            heart.style.setProperty(
                "--moveY",
                `${moveY}px`
            );


            heart.style.setProperty(
                "--heartSize",
                `${12 + Math.random() * 24}px`
            );


            heart.style.setProperty(
                "--rotation",
                `${-40 + Math.random() * 80}deg`
            );


            heart.style.animationDelay =
                `${Math.random() * 0.8}s`;


            finalSurprise.appendChild(
                heart
            );


            setTimeout(() => {

                heart.remove();

            }, 4500);

        }

    }


    if (
        "IntersectionObserver" in window &&
        finalSurprise
    ) {

        const finalObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach(entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            setTimeout(
                                createFinalHeartBurst,
                                300
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.30
                }
            );


        finalObserver.observe(
            finalSurprise
        );

    }


    /* =========================================================
       ❤️ DOUBLE CLICK HEART — DESKTOP
    ========================================================= */

    let lastTap = 0;


    document.addEventListener(
        "dblclick",
        event => {

            const heart =
                document.createElement("span");

            heart.className =
                "tap-heart";

            heart.textContent =
                "♥";


            heart.style.left =
                `${event.clientX}px`;

            heart.style.top =
                `${event.clientY}px`;


            document.body.appendChild(
                heart
            );


            heart.animate(
                [
                    {
                        transform:
                            "translate(-50%, -50%) scale(.4)",
                        opacity: 0
                    },
                    {
                        transform:
                            "translate(-50%, -80%) scale(1.25)",
                        opacity: 1
                    },
                    {
                        transform:
                            "translate(-50%, -150%) scale(.8)",
                        opacity: 0
                    }
                ],
                {
                    duration: 900,
                    easing: "ease-out",
                    fill: "forwards"
                }
            );


            setTimeout(() => {

                heart.remove();

            }, 1000);

        }
    );


    /* =========================================================
       ❤️ DOUBLE TAP HEART — MOBILE
    ========================================================= */

    document.addEventListener(
        "touchend",
        event => {

            const now =
                Date.now();


            if (
                now - lastTap < 320
            ) {

                const touch =
                    event.changedTouches[0];


                if (!touch) return;


                const heart =
                    document.createElement("span");

                heart.className =
                    "tap-heart";

                heart.textContent =
                    "♥";


                heart.style.left =
                    `${touch.clientX}px`;

                heart.style.top =
                    `${touch.clientY}px`;


                document.body.appendChild(
                    heart
                );


                heart.animate(
                    [
                        {
                            transform:
                                "translate(-50%, -50%) scale(.4)",
                            opacity: 0
                        },
                        {
                            transform:
                                "translate(-50%, -80%) scale(1.25)",
                            opacity: 1
                        },
                        {
                            transform:
                                "translate(-50%, -150%) scale(.8)",
                            opacity: 0
                        }
                    ],
                    {
                        duration: 900,
                        easing: "ease-out",
                        fill: "forwards"
                    }
                );


                setTimeout(() => {

                    heart.remove();

                }, 1000);

            }


            lastTap = now;

        },
        {
            passive: true
        }
    );


    /* =========================================================
       OPENING PARALLAX — DESKTOP
    ========================================================= */

    const openingContent =
        document.querySelector(
            ".opening-content"
        );


    if (
        openingContent &&
        window.matchMedia(
            "(pointer:fine)"
        ).matches
    ) {

        window.addEventListener(
            "mousemove",
            event => {

                const x =
                    (
                        event.clientX /
                        window.innerWidth -
                        0.5
                    ) * 2;

                const y =
                    (
                        event.clientY /
                        window.innerHeight -
                        0.5
                    ) * 2;


                openingContent.style.transform =
                    `translate3d(
                        ${x * 7}px,
                        ${y * 5}px,
                        0
                    )`;

            }
        );

    }


    /* =========================================================
       ACTIVE SECTION DETECTION
    ========================================================= */

    const sections =
        document.querySelectorAll(
            "section[id], main[id]"
        );


    if ("IntersectionObserver" in window) {

        const sectionObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "section-active"
                            );

                        }

                    });

                },
                {
                    threshold: 0.18
                }
            );


        sections.forEach(section => {

            sectionObserver.observe(
                section
            );

        });

    }


    /* =========================================================
       ESCAPE
    ========================================================= */

    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {

                reasonCards.forEach(card => {

                    card.classList.remove(
                        "active",
                        "reason-active",
                        "premium-card-click",
                        "premium-final-love",
                        "premium-26-active"
                    );

                });

            }

        }
    );


    /* =========================================================
       PAGE READY
    ========================================================= */

    requestAnimationFrame(() => {

        body.classList.add(
            "page-ready"
        );

    });


    /* =========================================================
       SECRET LOVE ❤️
    ========================================================= */

    const secretModal =
        document.getElementById(
            "secretLoveModal"
        );

    const secretBtn =
        document.getElementById(
            "secretLoveBtn"
        );

    const secretClose =
        document.getElementById(
            "secretClose"
        );

    const secretBackdrop =
        document.getElementById(
            "secretLoveBackdrop"
        );


    if (
        secretModal &&
        secretModal.parentElement !== document.body
    ) {

        document.body.appendChild(
            secretModal
        );

    }


    if (
        secretBtn &&
        secretModal
    ) {

        function openSecret() {

            secretModal.classList.add(
                "active"
            );

            secretModal.setAttribute(
                "aria-hidden",
                "false"
            );

            document.body.style.overflow =
                "hidden";

        }


        function closeSecret() {

            secretModal.classList.remove(
                "active"
            );

            secretModal.setAttribute(
                "aria-hidden",
                "true"
            );

            document.body.style.overflow =
                "";

        }


        secretBtn.addEventListener(
            "click",
            openSecret
        );


        if (secretClose) {

            secretClose.addEventListener(
                "click",
                closeSecret
            );

        }


        if (secretBackdrop) {

            secretBackdrop.addEventListener(
                "click",
                closeSecret
            );

        }


        document.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Escape"
                ) {

                    closeSecret();

                }

            }
        );

    }

});