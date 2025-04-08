// // 1. 성씨와 이름을 전달받아서
// // 2. 전체 이름을 만든 뒤
// // 3. "000님" 출력

// const name = (firstName, lastName, callback) => {
//     let result = lastName + firstName; // 성과 이름 합치기기
//     if (callback) {
//         callback(result); // callback 실행
//     }
//     return result; // 값 리턴
// };
// const printResult = (result) => {
//     console.log(result + "님"); // result에 "님" 추가
// };
// name("도영", "정", printResult); // 성과 이름, 님 출력

// // -----------------------------------------------------------
// //      x ,   y   / x = z  if z < 5 true / else false
// // 1. 상품 1개 가격,과 총 합 /을 입력받고   // result = z // if문 안쓰고

// const divide = (number1, number2, callback) => {
//     let result = number2 / number1; // 총 합에서 상품1개 가격 나누기
//     if (callback) {
//         callback(result); // callback 실행
//     }
//     return result; // 값 리턴
// };
// const count = (result) => {
//     console.log(result <= 5 ? true : false); // 갯수가 5개 이하라면 true 아니면 false
// };
// // // const count = (result) => {
// // //     if (result < 5) {
// // //         console.log("true");
// // //     } else {
// // //         console.log("false");
// // //     }
// // // };
// divide(200, 1000, count); // 출력

// 2. 개수를 알아낸 뒤
// 3. 개수가 5개 이하라면 true 아니면 false 리턴

// -----------------------------------------------------------------

// 1. 결제 상품 가격과 결제 상태를 전달받아서 (callback)
// 3. (if) 결제 상태가 true일 때 결제 완료, 4. (else) false일 경우 결제 취소 출력
// const pay = (price, status, callback) => {
//     if (callback) {
//         callback(price, status);
//     }
// };
// const message = (price, status) => {
//     if (status) {
//         console.log(`결제 완료: ${price}원`);
//     } else {
//         console.log("결제 취소");
//     }
// };
// pay(19900, false, message);

// 농장에서 축사 대청소를 하려고 한다.
// 1. 소와 돼지의 총합 수와 2. 각각 비교해 가축 중 수가 3. 적은 쪽을 출력
// const count = (cowCount, pigCount, callback) => {
//     let result = cowCount + pigCount;
//     if (callback) {
//         callback(cowCount, pigCount, result);
//     }
//     return result
// };
// const totalCount = (cowCount, pigCount, result) => {
//     if (cowCount < pigCount) {
//         console.log(`수가 적은 가축 : 소 ${cowCount}마리`);
//     } else {
//         console.log(`수가 적은 가축 : 돼지 ${pigCount}마리`);
//     }
//     console.log(`총 가축 수: ${result}마리`);
// };
// count(20, 40, totalCount);

// 1. 학생의 국어, 영어, 수학 점수를 전달받아서
// 2. 평균을 구한 뒤
// 3. 60점일 경우 합격, 아니면 불합격
// const average = (kor, eng, math, callback) => {
//     let result = (kor + eng + math) / 3; // 국어 영어 수학 평균 구하기
//     if (callback) {
//         callback(result); // 콜백 호출
//     }
//     return result; // 값 리턴
// };

// const message = (result) => {
//     if (result >= 60) {
//         console.log(`평균: ${result}점 합격!`); // 평균 60점 이상이면 합격!
//     } else {
//         console.log(`평균: ${result}점 불합격!`); // 아니면 불합격!
//     }
// };
// average(35, 98, 62, message); // 출력 국어35점, 영어98점, 수학62점 callback으로 message 출력!

// 1. 1 ~ n까지 합을 구한 뒤
// 2. 5000이상이면 5000을 빼고 출력
// const total = (n, callback) => {
//     let sum = 0;
//     for (let i = 0; i <= n; i++) {
//         sum += i;
//     }
//     let result = sum >= 5000 ? sum - 5000 : sum;
//     if (callback) {
//         callback(sum, result);
//     }
//     return result;
// };
// const printSum = (sum, result) => {
//     console.log(`총 합 : ${sum}`);
//     if (sum >= 5000) {
//         console.log(`총 합 -5000 : ${result}`);
//     }
// };
// total(50, printSum);

// 1. n ~ m에서 첫 번째로 짝수인 숫자를 찾고,
// 2. 그 숫자가 10 이상이면 true 아니면 false
// const find = (n, m, callback) => {
// let result = 0; // 초기값 0으로 설정
//     for (let i = n; i <= m; i++) {
//         if (i % 2 === 0) {  // 짝수인지 찾기
//             let result = i >= 10; // 값이 10이상인지 찾기
//             if (callback) {
//                 callback(i, result);
//             }
//             break; // n값이 m까지 출력되는것을 방지하기 위해 break;
//         }
//     }
//     return result;
// };
// const printResult = (evenNumber, biggerThanTen) => {
//     if (evenNumber) {
//         console.log(`짝수: ${evenNumber}`); // 짝수 값 출력
//         console.log(biggerThanTen ? `true` : `false`); // 10이상이면 true 아니면 false출력
//     }
// };
// find(9, 40, printResult); // n, m에 임의의 수를 넣고 printResult 출력

// 1. 두 정수의 뺄셈 결과와
// 2. 두 정수의 곱셈 결과가
// 3. 각각 5이상 50이상이면 true
// 4. 하나라도 false라면 false
// const calculate = (x, y, callback) => {
//     let subtract = x - y; // 두 정수의 뺄셈
//     let multiply = x * y; // 두 정수의 곱셈
//     let subtractResult = subtract >= 5; // 뺄셈의 결과가 5이상인가
//     let multiplyResult = multiply >= 50; // 곱셈의 결과가 50이상인가
//     //&&을 사용함으로 둘중 하나라도 false면 false
//     let result = subtractResult && multiplyResult;
//     if (callback) {
//         callback(subtract, multiply, result); // callback 실행
//     }
//     return result; // 결과 반환
// };

// const printResult = (subtract, multiply, result) => {
//     console.log(`두 정수의 뺄셈 결과: ${subtract}`); // 뺄셈 결과 출력
//     console.log(`두 정수의 곱셈 결과: ${multiply}`); // 곱셈 결과 출력
//     console.log(result); // true or false 출력
// };
// calculate(20, 5, printResult);
