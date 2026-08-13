/* =========================
   TYPING ANIMATION
========================= */

const typingText = [

    "Future AI Engineer 🤖",
    "Web Developer 💻",
    "Arduino Maker ⚡",
    "Game Developer 🎮",
    "Tech Enthusiast 🚀"

];


const typingElement =
    document.getElementById("typing");


let textIndex = 0;

let charIndex = 0;

let deleting = false;


function typeEffect() {

    const currentText =
        typingText[textIndex];


    if (!deleting) {

        typingElement.textContent =
            currentText.substring(
                0,
                charIndex + 1
            );

        charIndex++;


        if (
            charIndex ===
            currentText.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1500
            );

            return;

        }

    } else {

        typingElement.textContent =
            currentText.substring(
                0,
                charIndex - 1
            );

        charIndex--;


        if (charIndex === 0) {

            deleting = false;

            textIndex++;


            if (
                textIndex ===
                typingText.length
            ) {

                textIndex = 0;

            }

        }

    }


    setTimeout(
        typeEffect,
        deleting ? 50 : 100
    );

}


typeEffect();



/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "show"
                        );

                    }

                }
            );

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach(
    (element) => {

        revealObserver.observe(
            element
        );

    }
);



/* =========================
   PROJECT ANIMATION
========================= */

const projectCards =
    document.querySelectorAll(
        ".project-card"
    );


const projectObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "show"
                        );

                    }

                }
            );

        },

        {
            threshold: 0.2
        }

    );


projectCards.forEach(
    (card) => {

        projectObserver.observe(
            card
        );

    }
);



/* =========================
   SKILL BAR ANIMATION
========================= */

const skillsSection =
    document.querySelector(
        "#skills"
    );


const skillObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        document
                            .querySelectorAll(
                                ".progress"
                            )
                            .forEach(
                                (bar) => {

                                    bar.classList.add(
                                        "animate"
                                    );

                                }
                            );

                    }

                }
            );

        },

        {
            threshold: 0.3
        }

    );


if (skillsSection) {

    skillObserver.observe(
        skillsSection
    );

}



/* =========================
   ACTIVE NAVBAR
========================= */

const sections =
    document.querySelectorAll(
        "section"
    );


const navLinks =
    document.querySelectorAll(
        ".nav-links a"
    );


window.addEventListener(
    "scroll",
    () => {

        let current = "";


        sections.forEach(
            (section) => {

                const sectionTop =
                    section.offsetTop - 150;


                if (
                    window.scrollY >=
                    sectionTop
                ) {

                    current =
                        section.getAttribute(
                            "id"
                        );

                }

            }
        );


        navLinks.forEach(
            (link) => {

                link.classList.remove(
                    "active"
                );


                if (
                    link.getAttribute(
                        "href"
                    ) ===
                    "#" + current
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            }
        );

    }
);



/* =========================
   BACK TO TOP
========================= */

const backToTop =
    document.createElement(
        "button"
    );


backToTop.id =
    "backToTop";


backToTop.innerHTML =
    "↑";


document.body.appendChild(
    backToTop
);


window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 500
        ) {

            backToTop.classList.add(
                "show"
            );

        } else {

            backToTop.classList.remove(
                "show"
            );

        }

    }
);


backToTop.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);



/* =========================
   FUTURISTIC CURSOR
========================= */

const cursorGlow =
    document.getElementById(
        "cursorGlow"
    );


document.addEventListener(
    "mousemove",
    (event) => {

        cursorGlow.style.left =
            event.clientX + "px";

        cursorGlow.style.top =
            event.clientY + "px";

        cursorGlow.style.opacity = "1";

    }
);


document.addEventListener(
    "mouseleave",
    () => {

        cursorGlow.style.opacity = "0";

    }
);


/* =========================
   CURSOR HOVER EFFECT
========================= */

const clickableElements =
    document.querySelectorAll(
        "a, button"
    );


clickableElements.forEach(
    (element) => {

        element.addEventListener(
            "mouseenter",
            () => {

                cursorGlow.style.width =
                    "45px";

                cursorGlow.style.height =
                    "45px";

            }
        );


        element.addEventListener(
            "mouseleave",
            () => {

                cursorGlow.style.width =
                    "25px";

                cursorGlow.style.height =
                    "25px";

            }
        );

    }
);



/* =========================
   PARTICLE BACKGROUND
========================= */

const canvas =
    document.getElementById(
        "particles"
    );


const ctx =
    canvas.getContext("2d");


let particles = [];


function resizeCanvas() {

    canvas.width =
        window.innerWidth;

    canvas.height =
        window.innerHeight;

}


resizeCanvas();


window.addEventListener(
    "resize",
    resizeCanvas
);



class Particle {

    constructor() {

        this.x =
            Math.random() *
            canvas.width;

        this.y =
            Math.random() *
            canvas.height;

        this.size =
            Math.random() * 2 + 1;

        this.speedX =
            (Math.random() - 0.5) * 0.5;

        this.speedY =
            (Math.random() - 0.5) * 0.5;

    }


    update() {

        this.x +=
            this.speedX;

        this.y +=
            this.speedY;


        if (
            this.x < 0 ||
            this.x > canvas.width
        ) {

            this.speedX *= -1;

        }


        if (
            this.y < 0 ||
            this.y > canvas.height
        ) {

            this.speedY *= -1;

        }

    }


    draw() {

        ctx.beginPath();

        ctx.arc(
            this.x,
            this.y,
            this.size,
            0,
            Math.PI * 2
        );

        ctx.fillStyle =
            "#00eaff";

        ctx.shadowBlur =
            10;

        ctx.shadowColor =
            "#00eaff";

        ctx.fill();

    }

}



function createParticles() {

    particles = [];


    const amount =
        Math.min(
            120,
            Math.floor(
                (
                    canvas.width *
                    canvas.height
                ) / 10000
            )
        );


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        particles.push(
            new Particle()
        );

    }

}


createParticles();



function animateParticles() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    particles.forEach(
        (particle) => {

            particle.update();

            particle.draw();

        }
    );


    requestAnimationFrame(
        animateParticles
    );

}


animateParticles();


window.addEventListener(
    "resize",
    createParticles
);
/* =========================
   G.A.S LOADING SCREEN
========================= */

let loadingProgress = 0;

const loadingScreen =
    document.getElementById("loading-screen");

const loaderProgress =
    document.getElementById("loader-progress");

const loaderPercent =
    document.getElementById("loader-percent");


const loadingInterval = setInterval(() => {

    loadingProgress += Math.floor(
        Math.random() * 8
    ) + 2;

    if (loadingProgress >= 100) {

        loadingProgress = 100;

        clearInterval(loadingInterval);

        setTimeout(() => {

            loadingScreen.classList.add("hide");

        }, 400);

    }

    loaderProgress.style.width =
        loadingProgress + "%";

    loaderPercent.textContent =
        loadingProgress + "%";

}, 100);