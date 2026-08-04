document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("theme-toggle");

    // Apply saved theme
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light");
        if (button) button.textContent = "☀️";
    }

    // Theme toggle
    if (button) {
        button.addEventListener("click", () => {
            document.body.classList.toggle("light");

            if (document.body.classList.contains("light")) {
                localStorage.setItem("theme", "light");
                button.textContent = "☀️";
            } else {
                localStorage.setItem("theme", "dark");
                button.textContent = "🌙";
            }
        });
    }
});
