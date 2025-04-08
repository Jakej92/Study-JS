// const mediaModal = document.querySelector(
//     ".BottomPopupSheet__Content-sc-1tk6dur-2"
// );
// const allExitBtns = [
//     ...document.querySelectorAll(".BottomPopupSheet__Overlay-sc-1tk6dur-1"),
//     ...document.querySelectorAll(".izdufy"),
// ];

// allExitBtns.forEach((btn) => {
//     btn.addEventListener("click", () => {
//         mediaModal.style.display = "none";

//         allExitBtns.forEach((item) => {
//             item.style.display = "none";
//         });
//     });
// });

const mediaModal = document.querySelector(
    ".BottomPopupSheet__Content-sc-1tk6dur-2"
);
const exitBtns = document.querySelectorAll(
    ".BottomPopupSheet__Overlay-sc-1tk6dur-1"
);
const exitBtn = document.querySelectorAll(".izdufy");

exitBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        mediaModal.style.display = "none";

        exitBtns.forEach((e) => {
            e.style.display = "none";
        });
    });
});

exitBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        mediaModal.style.display = "none";

        exitBtns.forEach((e) => {
            e.style.display = "none";
        });
    });
});
