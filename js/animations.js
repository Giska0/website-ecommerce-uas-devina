// ==========================
// SCROLL REVEAL ANIMATION
// Subtle fade-in + slide-up saat elemen masuk viewport
// ==========================

document.addEventListener("DOMContentLoaded", function () {

    const revealSelectors = [
        ".hero-text",
        ".hero-image",
        ".card",
        ".review-card",
        ".product-card",
        ".cart-card",
        ".cart-empty",
        ".payment-card",
        ".order-summary",
        ".checkout-container",
        ".success-section",
        ".voucher-box"
    ];

    const elements = document.querySelectorAll(revealSelectors.join(","));

    if (elements.length === 0) {
        return;
    }

    elements.forEach(function (el, index) {

        el.classList.add("reveal");

        // Delay kecil biar cards yang sejajar muncul bertahap, bukan bebarengan
        el.style.transitionDelay = (index % 4) * 0.08 + "s";

    });

    const observer = new IntersectionObserver(function (entries, obs) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("reveal-active");

                obs.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px"
    });

    elements.forEach(function (el) {
        observer.observe(el);
    });

});