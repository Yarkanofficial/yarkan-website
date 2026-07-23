// ================================
// YARKAN (YKN)
// Main JavaScript File
// Version 1.0
// ================================

"use strict";

// Wait until page loads
document.addEventListener("DOMContentLoaded", () => {

    initNavigation();
    initSmoothScroll();
    initScrollAnimation();
    initBackToTop();
    initStickyHeader();
    initCounterAnimation();
    initFAQ();
    initButtons();

});

// ================================
// Navigation
// ================================

function initNavigation() {

    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navLinks.forEach(item => {
                item.classList.remove("active");
            });

            link.classList.add("active");

        });

    });

}
// ================================
// Smooth Scroll
// ================================

function initSmoothScroll() {

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener("click", function(e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if(target){

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });

}

// ================================
// Scroll Animation
// ================================

function initScrollAnimation() {

    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{
        threshold:0.2
    });

    sections.forEach(section=>{
        observer.observe(section);
    });

}
// ================================
// Sticky Header
// ================================

function initStickyHeader() {

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            header.classList.add("sticky");

        } else {

            header.classList.remove("sticky");

        }

    });

}

// ================================
// Back To Top Button
// ================================

function initBackToTop() {

    const button = document.querySelector(".back-to-top");

    if (!button) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            button.classList.add("show");

        } else {

            button.classList.remove("show");

        }

    });

    button.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}
// ================================
// Counter Animation
// ================================

function initCounterAnimation() {

    const counters = document.querySelectorAll(".counter");

    const speed = 100;

    counters.forEach(counter => {

        const updateCounter = () => {

            const target = +counter.getAttribute("data-target");

            const count = +counter.innerText;

            const increment = Math.ceil(target / speed);

            if (count < target) {

                counter.innerText = count + increment;

                setTimeout(updateCounter, 20);

            } else {

                counter.innerText = target;

            }

        };

        updateCounter();

    });

}

// ================================
// FAQ Accordion
// ================================

function initFAQ() {

    const items = document.querySelectorAll(".faq-item");

    items.forEach(item => {

        item.addEventListener("click", () => {

            item.classList.toggle("active");

        });

    });

}
// ================================
// Buttons
// ================================

function initButtons() {

    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {

        button.addEventListener("mouseenter", () => {

            button.classList.add("hover");

        });

        button.addEventListener("mouseleave", () => {

            button.classList.remove("hover");

        });

    });

}

// ================================
// Utility Functions
// ================================

function showMessage(message) {

    const toast = document.createElement("div");

    toast.className = "toast";

    toast.innerText = message;

    document.body.appendChild(toast);

    setTimeout(() => {

        toast.classList.add("show");

    }, 100);

    setTimeout(() => {

        toast.classList.remove("show");

        setTimeout(() => {

            toast.remove();

        }, 300);

    }, 3000);

}

// ================================
// End of File
// ================================
