const MESSAGE = `당신의 혈액형은?
1. A
2. B
3. O
4. AB`;

const A_MESSAGE = "꼼꼼하고 세심하다.";
const B_MESSAGE = "추진력이 좋다.";
const O_MESSAGE = "사교성이 좋다.";
const AB_MESSAGE = "착하다.";
const ERROR_MESSAGE = "다시 시도해주세요.";

let choice = 4;
let resultMessage = null;

let condition1 = choice === 1;
let condition2 = choice === 2;
let condition3 = choice === 3;
let condition4 = choice === 4;

console.log(MESSAGE);

if (condition1) {
    resultMessage = A_MESSAGE;
} else if (condition2) {
    resultMessage = B_MESSAGE;
} else if (condition3) {
    resultMessage = O_MESSAGE;
} else if (condition4) {
    resultMessage = AB_MESSAGE;
} else {
    resultMessage = ERROR_MESSAGE;
}

console.log(resultMessage);
