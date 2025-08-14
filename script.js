function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Typing effect
document.addEventListener("DOMContentLoaded", function () {
    new Typed("#typed-output", {
        strings: ["Machine Learning Enthusiast", "Data Science Explorer","Machine Learning Enthusiast"],
        typeSpeed: 30,
        backSpeed: 30,
        backDelay: 1500,
        loop: true
    });
});
