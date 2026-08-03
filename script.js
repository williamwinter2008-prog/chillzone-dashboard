const button = document.getElementById("theme-toggle");

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
