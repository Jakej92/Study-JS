// // 1. 성씨와 이름을 전달받아서
// // 2. 전체 이름을 만든 뒤
// // 3. "000님" 출력

// const printName = (text1, text2, callback) => {
//     let result = text1 + text2;
//     if (callback) {
//         callback(result);
//     }
//     return result;
// };
// const printResult = (result) => {
//     console.log(result + "님");
// };
// printName("정", "도영", printResult);

// // -----------------------------------------------------------
// //      x ,   y   / x = z  if z < 5 true / else false
// // 1. 상품 1개 가격,과 총 합 /을 입력받고   // result = z // if문 안쓰고

// const divide = (number1, number2, callback) => {
//     let result = number2 / number1;
//     if (callback) {
//         callback(result);
//     }
// };
// const count = (result) => {
//     console.log(result <= 5 ? true : false);
// };
// // // const count = (result) => {
// // //     if (result < 5) {
// // //         console.log("true");
// // //     } else {
// // //         console.log("false");
// // //     }
// // // };
// divide(200, 1000, count);

// 2. 개수를 알아낸 뒤
// 3. 개수가 5개 이하라면 true 아니면 false 리턴

// -----------------------------------------------------------------

// 1. 결제 상품 가격과 결제 상태를 전달받아서 (callback)
// 3. (if) 결제 상태가 true일 때 결제 완료, 4. (else) false일 경우 결제 취소 출력
// const pay = (price, status, callback) => {
//     if (status) {
//         callback(`결제 완료: ${price}원`);
//     } else {
//         callback("결제 취소");
//     }
// };
// pay(19900, true, (callback) => {
//     console.log(callback);
// });

// 농장에서 축사 대청소를 하려고 한다.
// 1. 소와 돼지의 총합 수와 2. 각각 비교해 가축 중 수가 3. 적은 쪽을 출력
// const count = (cowCount, pigCount, callback) => {
//     let result = cowCount + pigCount;
//     if (cowCount < pigCount) {
//         callback(`소: ${cowCount}마리`);
//     } else {
//         callback(`돼지: ${pigCount}마리`);
//     }
//     console.log(`총 가축 수: ${result}마리`);
// };
// count(20, 40, (callback) => {
//     console.log(callback);
// });

// 1. 학생의 국어, 영어, 수학 점수를 전달받아서
// 2. 평균을 구한 뒤
// 3. 60점일 경우 합격, 아니면 불합격
// const average = (kor, eng, math, callback) => {
//     let result = (kor + eng + math) / 3;
//     if (result > 60) {
//         callback(`평균: ${result}점 합격!`);
//     } else {
//         callback(`평균: ${result}점 불합격!`);
//     }
// };
// average(35, 98, 62, (callback) => {
//     console.log(callback);
// });

// 1 ~ n까지 합을 구한 뒤 5000이상이면 5000을 빼고 출력

// n ~ m에서 첫 번째로 짝수인 숫자를 찾고, 그 숫자가 10 이상이면 true 아니면 false

// 두 정수의 뺄셈 결과와 두 정수의 곱셈 결과가 각각 5이상 50이상이면 true
// 하나라도 false라면 false
