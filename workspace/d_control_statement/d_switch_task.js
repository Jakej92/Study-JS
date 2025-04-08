// 4개의 자물쇠가 있다.
// 각 좌물쇠는 조건식으로 이루어져있고,
// 모든 조건식이 true가 되어야 자물쇠가 열린다.
// 각 자물쇠의 조건식은 아래와 같다.

// 1. 첫 번째 정수가 짝수인지
// 2. 두 번째 정수가 양수인지
// 3. 세 번째 숫자가 0이 아닌지
// 4. 네 번째 숫자가 5의 배수인지
// (%, 모듈러스 - 나머지 연산자)
// 예) 10 % 3 === 1

// 정수 4개를 정해서 변수에 넣는다.

// 위의 모든 조건식이 true라면 좌물쇠가 열린다.
// swtich문을 사용해서 해결한다.
// 단, 논리 연산자는 사용하지 않는다.

let number1 = 6,
    number2 = 5,
    number3 = 0,
    number4 = 125;

let condition1 = number1 % 2 === 0;
let condition2 = number2 > 0;
let condition3 = number3 !== 0;
let condition4 = number4 % 5 === 0;

let result = condition1 + condition2 + condition3 + condition4;
let resultMessage = null;

switch (result) {
    case 4:
        resultMessage = "성공!";
        break;
    default:
        resultMessage = "실패 ㅠㅠ";
        break;
}

console.log(resultMessage);
