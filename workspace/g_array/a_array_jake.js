// 어떤 값을 넣을지 알때
// const datas = [10, 4, 20, 3, 2];

// 값 추가
// push(): 가장 마지막에 값 추가
// datas.push(3);
// console.log(datas);

// 값 연결
// join(): 전달한 값으로 각 요소를 구분하여 모두 연결해준다.
// console.log(datas.join(","));

// 값 추출
// slice(begin, end): 원하는 부분을 추출하기 위해 시작, 끝 인덱스를 전달한다.
// console.log(datas.slice(0, 3));

// slice(begin): 전달한시작부터 마지막 인덱스 까지 추출한다.
// console.log(datas.slice(1)); // 새로운 Array를 만든다. 고로 원본이 바뀌진 않는다.
// console.log(datas); // 원본 확인. 원본은 바뀌지 않았다.

// 값 삭제(원본 수정), 삭제된 값을 리턴
// splice(index, count): index부터 count개 삭제, 삭제된 값을 Array객체로 리턴
// console.log(datas); // 원본
// console.log(datas.splice(2, 2)); // 2번부터 2개를 추출하고 보여줌.
// console.log(datas); // 원본에서 2번부터 2개 삭제되고 원본이 바뀜.

// splice(index, count, ...args): 교체
// console.log(datas.splice(2, 2, 100, 200));
// console.log(datas);

// 가변인자
// const getTotal = (...numbers) => {
//     let total = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         total += numbers[i];
//     }
//     return total;
// };

// console.log(getTotal(1, 2, 3));

// pop(): 마지막 요소 삭제
// let result = datas.pop();
// console.log(result); // 마지막 요소 삭제 할것을 보여줌
// console.log(datas); // 삭제된거 반영

// shift(): 첫 번째 요소 삭제
// const result = datas.shift();
// console.log(result); // 첫번째 요소 삭제 할것을 보여줌
// console.log(datas); // 삭제된거 반영

// 값 검색
// indexOf(value): value를 해당 Array객체에서 좌에서 우로 찾은 뒤 인덱스 번호 리턴.
// lastIndexOf(value): value를 해당 Array객체에서 좌에서 우로 찾은 뒤 인덱스 번호 리턴.

// console.log(datas.indexOf(10)); // 앞에서부터 찾는것 값이 없으면 -1을 출력해줌.
// console.log(datas.indexOf(100)); // 값이 없으면 -1을 출력해줌.

// console.log(datas.lastIndexOf(10)); // 뒤에서 부터 찾는것
// console.log(datas.lastIndexOf(100));

// 몇 칸인지도 모르고, 무슨 값이 들어갈지도 모를 때
// const datas = [];

// 몇 칸인지는 아는데, 무슨 값이 들어갈지 모를 때
// const datas = new Array(10).fill(0); // Array() 안에는 칸수를 입력.
// console.log(datas);

// 반복
// const datas = [10, 4, 20, 3, 2];

// 각 값을 순서대로 of 앞의 변수에 담아준다.
// for (let data of datas) {
//     console.log(data);
// }

// 각 인덱스를 순서대로 in 앞의 변수에 담아준다.
// for (let i in datas) {
//     console.log(i);
// }

// forEach((data, index, array) => {});
// 접근한 array객체로부터 각 요소를 data에 담고
// 각 인덱스를 index에 담는다.
// 접근한 array객체를 array에 담는다.

// const datas = [10, 4, 20, 3, 2];

// datas.forEach((data, i) => {
//     // value, index, array 순서
//     console.log(`${i + 1}번째 값: ${data}`);
// });

// 2 ~ 10까지 2의 배수로 Array 객체에 담기
// const datas = new Array(5).fill(0);
// datas.forEach((data, i, datas) => {
//     datas[i] = (i + 1) * 2;
// });
// console.log(datas);

// 1 ~ 10까지 담은 후 각 값에 제곱을 출력한다.
// const datas = new Array(10).fill(0);
// datas.forEach((data, i, datas) => {
//     datas[i] = (i + 1) * (i + 1);
// });
// console.log(datas);

// 1 ~ 10까지 담은 후 각 값의 제곱을 출력한다.
// const datas = new Array(10).fill(0);

// datas.forEach((data, i, datas) => {
//     datas[i] = i + 1;
// });

// datas.forEach((data) => {
//     console.log(data * data);
// });

// map((data, index, array) => {});
// 기존 값을 전달한 callback 함수의 리턴값으로 변경

// let datas = new Array(10, 6, 4, 8, 2);

// datas = datas.map((data) => data - 1);
// console.log(datas);

// 기존 값을 두 배 증가시키기
// let datas = new Array(3, 6, 2, 7, 8);
// datas = datas.map((data) => data * 2);
// console.log(datas);

// filter((data, index, array) => {});
// callback 함수의 리턴값이 true인 것만 추출
// let datas = new Array(10).fill(0).map((_, i) => i + 1);
// datas = datas.filter((data) => data > 4);
// console.log(datas);

// 1 ~ 100까지 담고 4의 배수만 추출
// let datas = new Array(100).fill(0).map((_, i) => i + 1);
// datas = datas.filter((data) => data % 4 === 0);
// console.log(datas);
