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

// 메인 배너 이벤트 시작 //
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

// 반응형 중간 배너

// const midBanner = document.querySelector(".slick-track1");
// const slickDots = document.querySelectorAll(".slick-dots li"); // 슬라이드의 닷 요소들

// let countMid = 1;
// let midTotalSlides = 6;
// let autoSlideInterval1;

// midBanner.style.transform = `translateX(0)`;

// const midAutoSlide = () => {
//     countMid++;

//     midBanner.style.transform = `translateX(-${500 * (countMid - 1)}px)`;
//     midBanner.style.transition = `transform 0.5s`;

//     updateDots(countMid);

//     if (countMid === 5) {
//         setTimeout(() => {
//             midBanner.style.transform = `translateX(0)`;
//             midBanner.style.transition = `transform 0s`;
//         }, 500);
//         countMid = 1;
//     }
// };

// const updateDots = (index) => {
//     slickDots.forEach((dot) => dot.classList.remove("slick-active"));

//     slickDots[index - 1].classList.add("slick-active");
// };

// slickDots.forEach((dot, index) => {
//     dot.addEventListener("click", () => {
//         countMid = index + 1;
//         midBanner.style.transform = `translateX(-${500 * countMid - 500}px)`;
//         midBanner.style.transition = `transform 0.5s`;

//         updateDots(countMid);
//     });
// });

// autoSlideInterval1 = setInterval(midAutoSlide, 3000);

const midBanner = document.querySelector(".slick-track1");
const slickDots = document.querySelectorAll(".slick-dots li"); // 슬라이드의 닷 요소들

let countMid = 1;
let midTotalSlides = 6;
let autoSlideInterval1;

midBanner.style.transform = `translateX(0)`;

// 슬라이드를 자동으로 이동시키는 함수
const midAutoSlide = () => {
    countMid++;

    // 슬라이드를 이동
    midBanner.style.transform = `translateX(-${500 * (countMid - 1)}px)`;
    midBanner.style.transition = `transform 0.5s`;

    // 도트 업데이트
    updateDots(countMid);

    // 슬라이드가 5번에 도달하면 1번으로 돌아가도록 처리
    if (countMid === 5) {
        // 5번에서 1번으로 돌아갈 때
        setTimeout(() => {
            midBanner.style.transition = `transform 0s`; // 애니메이션을 끄고
            midBanner.style.transform = `translateX(500px)`; // 1번으로 되돌리기
        }, 500); // 슬라이드가 5번에서 끝난 후 0.5초 대기

        countMid = 1; // 슬라이드 카운트 초기화
    }
};

// 도트 업데이트 함수
const updateDots = (index) => {
    slickDots.forEach((dot) => dot.classList.remove("slick-active"));
    slickDots[index - 1].classList.add("slick-active");
};

// 도트 클릭 시 슬라이드 이동 처리
slickDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        countMid = index + 1;
        midBanner.style.transform = `translateX(-${500 * (countMid - 1)}px)`;
        midBanner.style.transition = `transform 0.5s`;

        updateDots(countMid);
    });
});

// 자동 슬라이드 실행
autoSlideInterval1 = setInterval(midAutoSlide, 3000);

// 미디어 쿼리 메인 배너 클래스 추가 제거

const element = document.querySelector(
    ".BannerWrapper__HomeBannerWrapper-sc-17qp9bv-0"
);

const mediaQuery = window.matchMedia("(max-width: 768px)");

const handleMediaQueryChange = (e) => {
    if (e.matches) {
        element.classList.add("BannerMobile");
    } else {
        element.classList.remove("BannerMobile");
    }
};

handleMediaQueryChange(mediaQuery);

mediaQuery.addEventListener("change", handleMediaQueryChange);

// 두번째 모바일 클래스 추가 제거.

const secondElement = document.querySelector(".eivtx2");

const secondMediaQuery = window.matchMedia("(max-width: 768px)");

const secondMediaQueryChange = (e) => {
    if (e.matches) {
        secondElement.classList.add("BannerMobile");
    } else {
        secondElement.classList.remove("BannerMobile");
    }
};

secondMediaQueryChange(secondMediaQuery);

secondMediaQuery.addEventListener("change", secondMediaQueryChange);

// 세번째 모바일 클래스 추가 제거.

const thirdElement = document.querySelector(
    ".HostBanner__Wrapper-sc-15wm6s2-0"
);

const thirdMediaQuery = window.matchMedia("(max-width: 768px)");

const thirdMediaQueryChange = (e) => {
    if (e.matches) {
        thirdElement.classList.add("BannerMobile");
    } else {
        thirdElement.classList.remove("BannerMobile");
    }
};

thirdMediaQueryChange(thirdMediaQuery);

thirdMediaQuery.addEventListener("change", thirdMediaQueryChange);

/// 412 px 테스트

const banner2 = document.querySelector(".slick-track2");

let count2 = 1;

banner2.style.transform = `translateX(-412px)`;

const autoSlide2 = () => {
    console.log("in");
    count2++;
    banner2.style.transform = `translateX(-${412 * count2}px)`;
    banner2.style.transition = `transform 0.5s`;

    if (count2 === 11) {
        setTimeout(() => {
            banner2.style.transform = `translateX(-412px)`;
            banner2.style.transition = `transform 0s`;
        }, 500);
        count2 = 1;
    }
};

autoSlideInterval = setInterval(autoSlide2, 3000);
