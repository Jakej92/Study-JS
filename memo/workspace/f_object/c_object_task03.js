// 마트에 등록되지 않은 고객이 3명이다.
// 고객별 정보는 다음과 같다.

// 1)
// 이름: 홍길동
// 나이: 30
// 포인트: 3500

// 2)
// 이름: 이순신
// 나이: 22
// 포인트: 0

// 3)
// 이름: 장보고
// 나이: 66
// 포인트: 9500

// 3명을 모두 마트에 등록 시킨다.
// 마트 객체를 만들고 각 고객을 프로퍼티로 선언한다.

function Customer(name, age, point = 0) {
    this.name = name;
    this.age = age;
    this.point = point;
}

const hong = new Customer("홍길동", 30, 3500);
const lee = new Customer("이순신", 22);
const jang = new Customer("장보고", 66, 9500);

const market = {};
market.customer1 = hong;
market.customer2 = lee;
market.customer3 = jang;

for (let i = 0; i < 3; i++) {
    console.log(market[`customer${i + 1}`].name);
}
