// 첫페이지 모달 //
const modal = document.querySelector(".Modal__Container-d9ibu2-0");
const modalOutside = document.querySelector(".Modal__Overlay-d9ibu2-1");
const closeModalBtns = document.querySelectorAll(".Modal__Overlay-d9ibu2-1");
const colseModalBtnTwo = document.querySelectorAll(".TextButton-sc-175c9eu-0");

closeModalBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        modal.style.display = "none";
    });
    // if (e.target === modal) {
    //     modal.style.display = "none";
    // }
});
colseModalBtnTwo.forEach((btn) => {
    btn.addEventListener("click", () => {
        modal.style.display = "none";
    });
});
// modalOutside.addEventListener("click", (e) => {
//     if (e.target === modal) {
//         modal.style.display = "none";
//     }
// });

// 첫페이지 모달 끝 //

// 페이지 위에 배너 이벤트 //

const topBanner = document.querySelector(".leQZl");
const topBannerCloseBtn = document.querySelector(".dQDdIa");

topBannerCloseBtn.addEventListener("click", (e) => {
    topBanner.style.display = "none";
});

// 페이지 위에 배너 이벤트 끝 //

const firstBanner = document.querySelector(".firstBanner");
const lastBanner = document.querySelector(".lastBanner");
const banner = document.querySelector(".slick-track");
const counts = document.querySelector("span.eBKjsO");

let count = 1;
let totalSlides = 10;
let arrowCheck = true;
let autoSlideInterval;

banner.style.transform = `translateX(-768px)`;

const autoSlide = () => {
    console.log("in");
    count++;
    banner.style.transform = `translateX(-${768 * count}px)`;
    banner.style.transition = `transform 0.5s`;

    if (count === 11) {
        setTimeout(() => {
            banner.style.transform = `translateX(-768px)`;
            banner.style.transition = `transform 0s`;
        }, 500);
        count = 1;
    }
    counts.innerText = `${count}`;
};

autoSlideInterval = setInterval(autoSlide, 3000);

// 왼쪽, 오른쪽 애로우
const leftArrows = document.querySelectorAll(
    ".ImageSlider__PrevArrow-sc-1obm2ug-2"
);
const rightArrows = document.querySelectorAll(
    ".ImageSlider__NextArrow-sc-1obm2ug-3"
);

function moveSlide() {
    banner.style.transform = `translateX(-${768 * count}px)`;
    banner.style.transition = `transform 0.5s`;
}

leftArrows.forEach((arrow) => {
    arrow.addEventListener("click", () => {
        if (!arrowCheck) return;
        arrowCheck = false;
        clearInterval(autoSlideInterval);

        count--;
        if (count < 0) count = 10;

        banner.style.transform = `translateX(-${768 * count}px)`;
        banner.style.transition = `transform 0.5s`;

        if (count === 0) {
            setTimeout(() => {
                banner.style.transform = `translateX(-8448px)`;
                banner.style.transition = `transform 0s`;
            }, 3000);
        }
        counts.innerText = `${count}`;

        autoSlideInterval = setInterval(autoSlide, 3000);

        setTimeout(() => {
            arrowCheck = true;
        }, 500);
    });
});

rightArrows.forEach((arrow) => {
    arrow.addEventListener("click", () => {
        if (!arrowCheck) return;
        arrowCheck = false;
        clearInterval(autoSlideInterval);

        if (count === 11) {
            banner.style.transition = "transform 0s";
            banner.style.transform = `translateX(-8448px)`;

            setTimeout(() => {
                count = 1;
                banner.style.transform = `translateX(-768px)`;
            }, 500);
        } else {
            count++;
            banner.style.transform = `translateX(-${768 * count}px)`;
            banner.style.transition = `transform 0.5s`;
        }
        counts.innerText = `${count}`;

        autoSlideInterval = setInterval(autoSlide, 3000);

        setTimeout(() => {
            arrowCheck = true;
        }, 500);
    });
});

// 배너 모달? 창 가져오기

const toggleButton = document.querySelector(".gdRosb");
const banner1 = document.querySelector(".FullScreenWrapper-sc-1s73ffa-0");
const banner1Close = document.querySelector(
    ".MainBannerViewer__Button-sc-6mvmaw-4"
);

toggleButton.addEventListener("click", () => {
    if (banner1.classList.contains("hidden")) {
        banner1.classList.remove("hidden");
        banner1.classList.add("visible");
    } else {
        banner1.classList.remove("visible");
        banner1.classList.add("hidden");
    }
});

banner1Close.addEventListener("click", (e) => {
    banner1.classList.remove("visible");
    banner1.classList.add("hidden");
    if (e.target === banner1Close) {
        banner1.style.display = "none";
    }
});
banner1.addEventListener("click", (e) => {
    banner1.classList.remove("visible");
    banner1.classList.add("hidden");
});

// media 중간 슬라이드 배너

const midBanner = document.querySelector(".slick-track1");

let countMid = 1;
let midTotalSlides = 4;
let autoSlideInterval1;

midBanner.style.transform = `translateX(-767px)`;

const midAutoSlide = () => {
    console.log("in");
    countMid++;
    midBanner.style.transform = `translateX(-${767 * countMid}px)`;
    midBanner.style.transition = `transform 0.5s`;

    if (countMid === 5) {
        setTimeout(() => {
            midBanner.style.transform = `translateX(-767px)`;
            midBanner.style.transition = `transform 0s`;
        }, 500);
        countMid = 1;
    }
};

autoSlideInterval1 = setInterval(autoSlide, 3000);
