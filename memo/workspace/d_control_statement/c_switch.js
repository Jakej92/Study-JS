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

let choice = 3;
let resultMessage = null;

console.log(MESSAGE);

switch (choice) {
    case 1:
        resultMessage = A_MESSAGE;
        break;
    case 2:
        resultMessage = B_MESSAGE;
        break;
    case 3:
        resultMessage = O_MESSAGE;
        break;
    case 4:
        resultMessage = AB_MESSAGE;
        break;
    default:
        resultMessage = ERROR_MESSAGE;
        break;
}

// 일괄 처리
console.log(resultMessage);
