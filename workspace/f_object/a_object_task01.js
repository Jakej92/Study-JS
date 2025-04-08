// 상품 정보를 객체로 구성한다.
// 상품 번호, 상품명, 가격, 재고-1, 재고-2
// 각 정보를 출력하되, 재고-1과 재고-2는 반복문을 사용해서 출력한다.
// 재고-1이 실재고이고, 재고-2는 기타재고이다. 단, key값을 동일한 stock이다.
// 상품 정보에 재고-1을 사용하여 총 가격을 리턴하는 메소드를 선언한다.

// const item = {
//     "item-id": "c5vgd",
//     "item-name": "laptop",
//     price: 499000,
//     "quantity-1": 5,
//     "quantity-2": 10,
//     printQuantity: () => {
//         for (let i = 0; i < 2; i++) {
//             console.log(item[`quantity-${i + 1}`]);
//         }
//     },
//     itemTotalPrice:() => {
//         return item.price * item["quantity-1"];
//     },
// };

// console.log(`item-id:`, item["item-id"]);
// console.log(`item-name:`, item["item-name"]);
// console.log(item.price, "원");
// item.printQuantity();

// 상품 정보를 객체로 구성한다.
// 상품 번호, 상품명, 가격, 재고-1, 재고-2
// 각 정보를 출력하되, 재고-1과 재고-2는 반복문을 사용해서 출력한다.
// 재고-1이 실재고이고, 재고-2는 기타재고이다. 단, key값을 동일한 stock이다.
// 상품 정보에 재고-1을 사용하여 총 가격을 리턴하는 메소드를 선언한다.
const product = {
    id: 1,
    name: "보리차",
    price: 1300,
    "stock-1": 32,
    "stock-2": -2,
    getTotal: () => {
        return product.price * product["stock-1"];
    },
};

// console.log(product);

// with(객체명){}
// 중괄호 안에서 사용하는 것들은 with에 작성한 객체의 프로퍼티에서도 찾아준다.
// 반복적으로 객체명을 사용해야할 때 편하다.
with (product) {
    console.log(id, name, price);
    for (let i = 0; i < 2; i++) {
        console.log(product[`stock-${i + 1}`]);
    }
    console.log(getTotal());
}
