// // 성씨와 이름을 전달받아서 전체 이름을 만든 뒤 "000님" 출력

// const name = (firstName, lastName, callback) => {
//     let result = lastName + firstName;
//     if (callback) {
//         callback(result);
//     }
//     return result;
// };
// const printResult = (result) => {
//     console.log(result + "님");
// };
// name("도영", "정", printResult);

// //----------------------------------------------------

// 상품 1개 가격과 총 합을 입력받고 개수를 알아낸 뒤
// 개수가 5개 이하라면 true 아니면 false 리턴
// const divide = (price, total, callback) => {
//     let result = total / price;
//     if (callback) {
//         callback(result);
//     }
//     return result;
// };
// const quantity = (result) => {
//     console.log(result <= 5 ? true : false);
// };
// divide(5000, 145000, quantity);

// 결제 상품 가격과 결제 상태를 전달받아서
// 결제 상태가 true일 때 결제 완료, false일 경우 결제 취소 출력
// const pay = (price, status, callback) => {
//     if (callback) {
//         callback(price, status);
//     }
// };
// const message = (price, status) => {
//     if (status) {
//         console.log(`${price}원 결제 완료`);
//     } else {
//         console.log(`결제 취소`);
//     }
// };
// pay(15000, true, message);
// 농장에서 축사 대청소를 하려고 한다.
// 소와 돼지의 총합 수와 각각 비교해 가축 중 수가 적은 쪽을 출력
// const farm = (cow, pig, callback) => {
//     let result = cow + pig;
//     if (callback) {
//         callback(cow, pig, result);
//     }
//     return result;
// };
// const total = (cow, pig, result) => {
//     console.log(`총 가축 수: ${result}`);
//     if (cow < pig) {
//         console.log(`수가 적은 가축: 소 ${cow}마리`);
//     } else {
//         console.log(`수가 적은 가축: 돼지 ${pig}마리`);
//     }
// };
// farm(20, 66, total);
// 학생의 국어, 영어, 수학 점수를 전달받아서 평균을 구한 뒤
// 60점일 경우 합격, 아니면 불합격
// const average = (kor, eng, math, callback) => {
//     let result = (kor + eng + math) / 3;
//     if (callback) {
//         callback(result);
//     }
//     return result;
// };
// const message = (result) => {
//     if (result >= 60) {
//         console.log(`평균 ${result}점 합격!`);
//     } else {
//         console.log(`평균 ${result}점 불합격!`);
//     }
// };
// average(55, 90, 55, message);

// 1 ~ n까지 합을 구한 뒤 5000이상이면 5000을 빼고 출력
// const total = (n, callback) => {
//     let sum = 0;
// };
// n ~ m에서 첫 번째로 짝수인 숫자를 찾고, 그 숫자가 10 이상이면 true 아니면 false

// 두 정수의 뺄셈 결과와 두 정수의 곱셈 결과가 각각 5이상 50이상이면 true
// 하나라도 false라면 false
