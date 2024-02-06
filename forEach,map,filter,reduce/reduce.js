const num = [1,2,3,4]

// const total = num.reduce((sum,curVal)=>{
//     return sum+curVal
// },0);
// console.log(total);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2
    },
    {
        itemName: "py course",
        price: 3
    },
    {
        itemName: "mobile dev course",
        price: 1
    },
    {
        itemName: "data science course",
        price: 2
    },
]
const totalPrice=shoppingCart.reduce((sum,curVal)=>{
    return sum+curVal.price;
},0);
console.log(totalPrice)