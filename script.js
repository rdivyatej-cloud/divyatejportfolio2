/* =====================================================
   DIVYATEJ PORTFOLIO
===================================================== */


/* =====================================================
   PRELOADER
===================================================== */

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    setTimeout(() => {

        preloader.classList.add("hide");

    }, 500);

});


/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("open");

    const icon = menuBtn.querySelector("i");

    if (navbar.classList.contains("open")) {

        icon.classList.remove("bx-menu");

        icon.classList.add("bx-x");

    } else {

        icon.classList.remove("bx-x");

        icon.classList.add("bx-menu");

    }

});


/* Close mobile menu after clicking a link */

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("open");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("bx-x");

        icon.classList.add("bx-menu");

    });

});


/* =====================================================
   HEADER ON SCROLL
===================================================== */

const header = document.querySelector(".header");

function updateHeader() {

    if (window.scrollY > 40) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}

window.addEventListener("scroll", updateHeader);

updateHeader();


/* =====================================================
   SCROLL PROGRESS
===================================================== */

const progressBar = document.getElementById("progress-bar");

function updateProgress() {

    const scrollTop = window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        documentHeight > 0
            ? (scrollTop / documentHeight) * 100
            : 0;

    progressBar.style.width = `${progress}%`;

}

window.addEventListener("scroll", updateProgress);


/* =====================================================
   TYPING EFFECT
===================================================== */

const typingText = document.getElementById("typing-text");

const roles = [

    "Backend Developer",
    "Cybersecurity Student",
    "Web Developer",
    "Problem Solver"

];

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;


function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingText.textContent =
            currentRole.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;

        if (characterIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1600);

            return;

        }

    } else {

        typingText.textContent =
            currentRole.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            roleIndex =
                (roleIndex + 1) % roles.length;

        }

    }

    const speed = deleting ? 45 : 80;

    setTimeout(typeEffect, speed);

}

typeEffect();


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".navbar a");


function updateActiveNav() {

    const scrollPosition =
        window.scrollY + 150;


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop;

        const sectionHeight =
            section.offsetHeight;

        const sectionId =
            section.getAttribute("id");


        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {

            navLinks.forEach(link => {

                link.classList.remove("active");

            });


            const activeLink =
                document.querySelector(
                    `.navbar a[href="#${sectionId}"]`
                );


            if (activeLink) {

                activeLink.classList.add("active");

            }

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNav
);

updateActiveNav();


/* =====================================================
   BACK TO TOP
===================================================== */

const scrollTop =
    document.getElementById("scroll-top");


function updateScrollTop() {

    if (window.scrollY > 500) {

        scrollTop.classList.add("show");

    } else {

        scrollTop.classList.remove("show");

    }

}


window.addEventListener(
    "scroll",
    updateScrollTop
);


scrollTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* =====================================================
   CURRENT YEAR
===================================================== */

const year =
    document.getElementById("year");

year.textContent =
    new Date().getFullYear();


/* =====================================================
   PREVENT PLACEHOLDER LINKS FROM JUMPING
===================================================== */

document
    .querySelectorAll(".disabled-link")
    .forEach(link => {

        link.addEventListener("click", event => {

            event.preventDefault();

        });

    });


/* =====================================================
   KEYBOARD ESCAPE FOR MOBILE MENU
===================================================== */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        navbar.classList.remove("open");

        const icon =
            menuBtn.querySelector("i");

        icon.classList.remove("bx-x");

        icon.classList.add("bx-menu");

    }

});

/* =====================================================
   CUSTOM CURSOR
===================================================== */
const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

if (cursorDot && cursorOutline && window.matchMedia("(pointer: fine)").matches) {
    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;
    let initialized = false;

    window.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        if (!initialized) {
            outlineX = mouseX;
            outlineY = mouseY;
            initialized = true;
        }

        // Dot follows instantly
        cursorDot.style.left = `${mouseX}px`;
        cursorDot.style.top = `${mouseY}px`;
    });

    // Outline follows with a delay
    function animateCursor() {
        if (initialized) {
            let distX = mouseX - outlineX;
            let distY = mouseY - outlineY;
            
            outlineX = outlineX + (distX * 0.15);
            outlineY = outlineY + (distY * 0.15);
            
            cursorOutline.style.left = `${outlineX}px`;
            cursorOutline.style.top = `${outlineY}px`;
        }
        
        requestAnimationFrame(animateCursor);
    }
    
    animateCursor();

    // Hover effect on links and buttons
    const hoverElements = document.querySelectorAll("a, button, .btn, .premium-glass");
    
    hoverElements.forEach(el => {
        el.addEventListener("mouseenter", () => {
            document.body.classList.add("cursor-hover");
        });
        
        el.addEventListener("mouseleave", () => {
            document.body.classList.remove("cursor-hover");
        });
    });
}

/* =====================================================
   CONTACT FORM HANDLING
===================================================== */
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm) {
    contactForm.addEventListener("submit", async function(event) {
        event.preventDefault();
        
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        
        // Basic validation
        if (!name || !email || !message) {
            formStatus.textContent = "Please fill in all fields.";
            formStatus.className = "form-status error";
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            formStatus.textContent = "Please enter a valid email address.";
            formStatus.className = "form-status error";
            return;
        }
        
        const submitBtn = document.getElementById("submit-btn");
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.innerHTML = 'Sending... <i class="bx bx-loader bx-spin"></i>';
        submitBtn.disabled = true;

        try {
            const response = await fetch(contactForm.action, {
                method: "POST",
                body: new FormData(contactForm),
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                formStatus.textContent = "Thanks for reaching out! I'll get back to you soon.";
                formStatus.className = "form-status success";
                contactForm.reset();
            } else {
                formStatus.textContent = "Something went wrong. Please try again.";
                formStatus.className = "form-status error";
            }
        } catch (error) {
            formStatus.textContent = "Something went wrong. Please try again.";
            formStatus.className = "form-status error";
        } finally {
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
        }
    });
}