
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

const pages = document.querySelectorAll(".page-section");
const links = document.querySelectorAll(".nav-links a");

// OPEN AND CLOSE MORE MENU
menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("show");
});

// SWITCH PAGES WHEN CLICKING MENU
links.forEach(function(link) {

    link.addEventListener("click", function(event) {
        event.preventDefault();

        const target = link.getAttribute("href");
        const selectedPage = document.querySelector(target);

        // Hide all pages
        pages.forEach(function(page) {
            page.classList.remove("active-page");
        });

        // Show selected page
        selectedPage.classList.add("active-page");

        // Update active menu link
        links.forEach(function(item) {
            item.classList.remove("active");
        });

        link.classList.add("active");

        // Close menu
        navLinks.classList.remove("show");

        // Return to top
        window.scrollTo(0, 0);
    });

});
