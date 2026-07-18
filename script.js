/* ===========================================================
   BLACKI.LUC STUDIO
   script.js
=========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       FADE IN
    ========================== */

    const fadeElements = document.querySelectorAll(".fade");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: .15

    });

    fadeElements.forEach(element => observer.observe(element));


    /* ==========================
       SCROLL TO TOP BUTTON
    ========================== */

    const topButton = document.getElementById("topButton");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 450) {

            topButton.classList.add("show");

        } else {

            topButton.classList.remove("show");

        }

    });

    topButton.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });


    /* ==========================
       PARALLAX HERO
    ========================== */

    const heroImage = document.querySelector(".hero img");

    window.addEventListener("scroll", () => {

        const offset = window.scrollY;

        heroImage.style.transform = `translateY(${offset * 0.18}px)`;

    });


    /* ==========================
       CARDS HOVER
    ========================== */

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        card.addEventListener("mousemove", (e) => {

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.background =
                `radial-gradient(circle at ${x}px ${y}px,
                rgba(255,255,255,.06),
                #151515 70%)`;

        });

        card.addEventListener("mouseleave", () => {

            card.style.background = "#151515";

        });

    });


    /* ==========================
       BUTTON RIPPLE
    ========================== */

    document.querySelectorAll(".instagram, .maps").forEach(button => {

        button.addEventListener("mouseenter", () => {

            button.style.transform = "translateY(-5px) scale(1.02)";

        });

        button.addEventListener("mouseleave", () => {

            button.style.transform = "";

        });

    });

});