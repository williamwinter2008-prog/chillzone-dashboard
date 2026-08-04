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
document.addEventListener("DOMContentLoaded", () => {

    const links = document.querySelectorAll(".nav-link");
    const pages = document.querySelectorAll(".page");
    const title = document.getElementById("page-title");


    // Sidebar page switching
    links.forEach(link => {

        link.addEventListener("click", (e) => {

            const page = link.dataset.page;

            if (!page) return;

            e.preventDefault();


            pages.forEach(section => {
                section.style.display = "none";
            });


            const selectedPage = document.getElementById(page);

            if (selectedPage) {
                selectedPage.style.display = "block";
            }


            links.forEach(item => {
                item.classList.remove("active");
            });


            link.classList.add("active");


            if (title) {
                title.textContent =
                page.charAt(0).toUpperCase() + page.slice(1);
            }

        });

    });



    // Dashboard card open buttons
    const openButtons = document.querySelectorAll(".open-btn");


    openButtons.forEach(button => {

        button.addEventListener("click", () => {

            const page = button.dataset.open;


            pages.forEach(section => {
                section.style.display = "none";
            });


            const selectedPage = document.getElementById(page);


            if (selectedPage) {
                selectedPage.style.display = "block";
            }


            if (title) {
                title.textContent =
                page.charAt(0).toUpperCase() + page.slice(1);
            }

        });

    });



    // Save buttons
    const saveButtons = document.querySelectorAll(".save-btn");


    saveButtons.forEach(button => {

        button.addEventListener("click", () => {

            const oldText = button.textContent;

            button.textContent = "✅ Saved!";


            setTimeout(() => {

                button.textContent = oldText;

            }, 2000);

        });

    });

});
// Load real bot data

fetch("http://localhost:3000/api/status")

.then(response => response.json())

.then(data => {


    const status = document.getElementById("bot-status");
    const members = document.getElementById("member-count");


    if(status){

        status.textContent =
        data.status === "Online"
        ? "🟢 Online"
        : "🔴 Offline";

    }


    if(members){

        members.textContent =
        data.members + " Members";

    }


})

.catch(error => {

console.log("Could not connect to bot:", error);

});
