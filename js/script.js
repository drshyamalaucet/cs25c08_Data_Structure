document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector("[data-module-search]");
    const searchableCards = document.querySelectorAll("[data-search-card]");

    if (searchInput && searchableCards.length) {
        searchInput.addEventListener("input", () => {
            const query = searchInput.value.trim().toLowerCase();

            searchableCards.forEach((card) => {
                const cardText = card.textContent.toLowerCase();
                const matches = query === "" || cardText.includes(query);

                card.classList.toggle("search-hidden", !matches);
            });
        });
    }

    const menuButton = document.querySelector("[data-mobile-menu]");
    const mobileNav = document.querySelector("[data-mobile-nav]");

    if (menuButton && mobileNav) {
        menuButton.addEventListener("click", () => {
            const isOpen = mobileNav.classList.toggle("open");

            menuButton.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            menuButton.setAttribute(
                "aria-label",
                isOpen ? "Close navigation" : "Open navigation"
            );
        });

        mobileNav.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                mobileNav.classList.remove("open");
                menuButton.setAttribute("aria-expanded", "false");
                menuButton.setAttribute(
                    "aria-label",
                    "Open navigation"
                );
            });
        });
    }
});