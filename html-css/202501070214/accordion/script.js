document.querySelectorAll(".accordion-header").forEach((header) => {
    header.addEventListener("click", () => {
        const content = header.nextElementSibling;
        const isOpen = content.style.display === "block";
        document.querySelectorAll(".accordion-content").forEach(
            (content_) => (content_.style.display = "none"));
        content.style.display = isOpen ? "none" : "block";
    });
});
