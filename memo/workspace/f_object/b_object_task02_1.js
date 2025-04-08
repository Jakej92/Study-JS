// // 히어로가 몬스터를 공격하여 성장하는 게임을 제작한다.

// // 히어로 객체
// // 이름, 체력, 공격력, 방어력
// // 공격하기: 공격 대상의 몬스터 체력을 공격력만큼 제거하고
// //          방어력만큼 몬스터의 공격을 방어한다.

// // 몬스터 객체
// // 이름, 체력, 공격력, 생존 유무(true)
// // 전투 후 체력 반영: 전투 후 hp가 0이하라면 생존 유무를 false로 변경한다.
// // 만약 사망했다면, 이름 프로퍼티를 삭제한다.

// const hero = {
//     name: "hero1",
//     hp: 10,
//     dmg: 100,
//     def: 50,
// };
// hero.attack = (monster) => {
//     monster.afterAttack = monster.hp + monster.def - hero.dmg;
//     if (monster.afterAttack > 0) {
//         console.log("몬스터가 살아있습니다.");
//     } else {
//         console.log("몬스터가 죽었습니다.");
//         delete monster.name;
//     }
// };
// const monster = {
//     name: "moster1",
//     hp: 50,
//     dmg: 100,
//     def: 50,
// };
// monster.attack = (hero) => {
//     hero.afterAttack = hero.hp + hero.def - monster.dmg;
//     if (hero.afterAttack > 0) {
//         console.log("히어로로가 살아있습니다.");
//     } else {
//         console.log("히어로가 죽었습니다.");
//     }
// };

// hero.attack(monster);
// monster.attack(hero);
// console.log(monster.afterAttack);
// console.log(hero.afterAttack);
// console.log(monster);

//
//
//
// 마켓에서 판매하는 상품은 단 1개이다.
// 이름, 상품명, 가격, 재고
// 판매하기: 고객마다 쿠폰 할인율이 다르다.
//          구매한 고객의 쿠폰 할인율을 적용해서 판매한다.

// 고객 객체를 2개 정의한다.
// 이름, 잔고, 쿠폰 할인율

// 고객 2명은 서로 할인율을 다르게 설정한다.
// const market = {
//     name: "koreaITMarket",
//     itemName: "itBook",
//     price: 10000,
//     quantity: 20,
//     sell: (customer1) => {
//         customer1.balance -= market.price * (1 - customer1.coupon / 100);
//     },
//     sell2: (customer2) => {
//         customer2.balance -= market.price * (1 - customer2.coupon / 100);
//     },
// };
// const customer1 = {
//     name: "정도영",
//     balance: 50000,
//     coupon: 50,
// };
// const customer2 = {
//     name: "김주연",
//     balance: 60000,
//     coupon: 10,
// };

// market.sell(customer1);
// market.sell2(customer2);
// // console.log(market);
// console.log(customer1.balance);
// console.log(customer2.balance);
