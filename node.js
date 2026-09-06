/* =========================================
   DARKX.NET JAVASCRIPT
   ========================================= */


/* =========================================
   MOBILE MENU
   ========================================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("show");

});


/* Close mobile menu when link is clicked */

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show");

    });

});


/* =========================================
   ACTIVE NAVIGATION
   ========================================= */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================================
   SKILL BAR ANIMATION
   ========================================= */

const skillBars =
    document.querySelectorAll(".skill-progress");


const skillObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    const bar = entry.target;

                    const width =
                        bar.getAttribute("data-width");

                    bar.style.width = width;

                }

            });

        },
        {
            threshold: 0.5
        }
    );


skillBars.forEach(bar => {

    skillObserver.observe(bar);

});


/* =========================================
   TERMINAL TYPING EFFECT
   ========================================= */

const terminalLines =
    document.querySelectorAll(".terminal p");

terminalLines.forEach((line, index) => {

    line.style.opacity = "0";

    setTimeout(() => {

        line.style.opacity = "1";

    }, index * 300);

});


/* =========================================
   BUTTON RIPPLE EFFECT
   ========================================= */

const buttons =
    document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("click", function () {

        this.style.transform = "scale(0.97)";

        setTimeout(() => {

            this.style.transform = "";

        }, 150);

    });

})