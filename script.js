document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("theme-toggle");

    if (!button) return;

    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light");
        button.textContent = "☀️";
    }

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
});

<script src="script.js"></script>

</body>
</html>
