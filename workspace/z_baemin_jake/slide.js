document.addEventListener("DOMContentLoaded", () => {
    const mainStyle = document.querySelector(".mainStlye");
    const sections = document.querySelectorAll(".jake_main_div_test, .jfPW1");
    const scrollButton = document.querySelector(".jake_i_PW02");
    const navDotsContainer = document.querySelector(".jakeNvPW01");
    const dots = document.querySelectorAll(".jakeNvPw02");
    const totalSections = sections.length;
    let currentPage = 0;
    let isScrolling = false;

    mainStyle.style.height = `${totalSections * 1012}px`;

    function goToPage(index) {
        if (index < 0 || index >= totalSections) return;
        currentPage = index;
        mainStyle.style.transform = `translateY(-${currentPage * 1012}px)`;
        toggleScrollButton();
        toggleDotNavigation();
        updateActiveDot();
    }

    function toggleScrollButton() {
        if (currentPage === totalSections - 1) {
            scrollButton.style.display = "none";
        } else {
            scrollButton.style.display = "block";
        }
    }

    function toggleDotNavigation() {
        if (currentPage === 0 || currentPage === totalSections - 1) {
            navDotsContainer.style.opacity = "0";
            navDotsContainer.style.pointerEvents = "none";
        } else {
            navDotsContainer.style.opacity = "1";
            navDotsContainer.style.pointerEvents = "auto";
        }
    }

    function updateActiveDot() {
        dots.forEach((dot, index) => {
            const mappedPage = index + 1;
            dot.classList.toggle("active", mappedPage === currentPage);
        });
    }

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => goToPage(index + 1));
    });

    window.addEventListener("wheel", (event) => {
        if (isScrolling) return;

        if (event.deltaY > 0 && currentPage < totalSections - 1) {
            goToPage(currentPage + 1);
        } else if (event.deltaY < 0 && currentPage > 0) {
            goToPage(currentPage - 1);
        }

        isScrolling = true;
        setTimeout(() => (isScrolling = false), 900);
    });

    scrollButton.addEventListener("click", () => {
        if (isScrolling) return;

        if (currentPage < totalSections - 1) {
            goToPage(currentPage + 1);
        }

        isScrolling = true;
        setTimeout(() => (isScrolling = false), 900);
    });

    goToPage(0);
});
