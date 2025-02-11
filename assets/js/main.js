document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(dropdown => {
        const dropdownContent = dropdown.querySelector(".dropdown-menu");

        dropdown.addEventListener("mouseenter", function () {
            dropdownContent.classList.add("show");
        });

        dropdown.addEventListener("mouseleave", function () {
            dropdownContent.classList.remove("show");
        });
    });
});