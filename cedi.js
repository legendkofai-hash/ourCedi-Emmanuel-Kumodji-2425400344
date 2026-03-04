document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".navigation");
    const navMenu1 = document.querySelector(".navigation1");

    hamburger.style.display = "flex"; // Show hamburger menu for smaller screens

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        navMenu1.classList.toggle("active");
    });

    const wikipediaLinks = document.querySelectorAll('a[href*="https://en.wikipedia.org"]');
    const modal = document.getElementById("modal");
    const modalIframe = document.getElementById("modal-iframe");
    const closeModal = document.getElementById("close-modal");

    wikipediaLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            modalIframe.src = link.href;
            modal.style.display = "flex";
        });
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
        modalIframe.src = ""; // Clear iframe source to stop loading
    });

    // Close modal when clicking outside the content
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
            modalIframe.src = "";
        }
    });
});

function toggleMobileMenu() {
    const navMenu = document.querySelector(".navigation");
    const navMenu1 = document.querySelector(".navigation1");
    navMenu.classList.toggle("active");
    navMenu1.classList.toggle("active");
}