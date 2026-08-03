// =========================
// Professional Website Script
// =========================

document.addEventListener("DOMContentLoaded", () => {

    // Theme Toggle
    const themeButton = document.getElementById("theme-toggle");

    if (themeButton) {

        const savedTheme = localStorage.getItem("theme");

        if (savedTheme === "light") {
            document.body.classList.add("light");
            themeButton.textContent = "☀️";
        } else {
            themeButton.textContent = "🌙";
        }

        themeButton.addEventListener("click", () => {

            document.body.classList.toggle("light");

            if (document.body.classList.contains("light")) {
                localStorage.setItem("theme", "light");
                themeButton.textContent = "☀️";
            } else {
                localStorage.setItem("theme", "dark");
                themeButton.textContent = "🌙";
            }

        });

    }

    // Smooth scrolling for links
    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function(e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        });

    });

    // Fade in cards
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }

        });

    }, {
        threshold: 0.15
    });

    cards.forEach(card => {

        card.style.opacity = "0";
        card.style.transform = "translateY(40px)";
        card.style.transition = "0.6s ease";

        observer.observe(card);

    });

    // Navbar shadow while scrolling
    const nav = document.querySelector("nav");

    window.addEventListener("scroll", () => {

        if (!nav) return;

        if (window.scrollY > 30) {

            nav.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";

        } else {

            nav.style.boxShadow = "none";

        }

    });

    // Button animation
    document.querySelectorAll("button").forEach(button => {

        button.addEventListener("mouseenter", () => {

            button.style.transform = "translateY(-3px)";

        });

        button.addEventListener("mouseleave", () => {

            button.style.transform = "";

        });

    });

    // Active navigation link
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll(".nav-links a").forEach(link => {

        const href = link.getAttribute("href");

        if (href === currentPage) {
            link.style.color = "#5865F2";
            link.style.fontWeight = "700";
        }

    });

});
const banToggle = document.getElementById("banToggle");

if (banToggle) {
    banToggle.checked = localStorage.getItem("ban") === "true";

    banToggle.addEventListener("change", () => {
        localStorage.setItem("ban", banToggle.checked);
    });
}
