// 10 ~ 1까지 Array 객체에 담은 후 짝수만 출력
// let datas = new Array(10).fill(0).map((_, i) => 10 - i);
// datas.filter((data) => data % 2 === 0).forEach((data) => console.log(data));

// 1 ~ 100까지 Array 객체에 담은 후 3의 배수만 추출 후 출력
// let datas = new Array(100).fill(0);
// datas.forEach((data, i, datas) => {
//     datas[i] = i + 1;
// });
// datas = datas.filter((data) => data % 3 === 0);
// console.log(datas);

// 5개의 정수를 Array 객체에 담은 후 최대값과 최소값 출력하기
// const datas = [10, 4, 20, 3, 2];
// const max = Math.max(...datas);
// const min = Math.min(...datas);
// console.log(max, min);

// 한글을 숫자로 변경하여 출력
// 삼사칠구 -> 3479
// const datas = ["삼", "사", "칠", "구"];
// const data = datas.splice(0, 4, 3, 4, 7, 9);
// console.log(datas.join(""));

// 숫자를 한글로 변경하여 출력
// 3479 -> 삼사칠구
// const datas = [3, 4, 7, 9];
// const data = datas.splice(0, 4, "삼", "사", "칠", "구");
// console.log(datas.join(""));
