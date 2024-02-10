const person = {
    name: "Nimur",
    productPersonWantoBuy:
    {
        apple: 10,
        watch: 100,
    }
};
let { productPersonWantoBuy } = person;

let product = Object.keys(productPersonWantoBuy)
let totalPrice = 0;
let purchaseProduct = [];

product.forEach((item) => {
    let discount = Math.floor(Math.random() * 101);
    if (discount >= 50)
    {
        purchaseProduct.push(item);
        let price = productPersonWantoBuy['apple'];
        let needToPay = price - (price * (discount / 100))
        totalPrice += needToPay;
    }

})
if (purchaseProduct.length)
{
    clog(purchaseProduct);
    clog(`totalPrice = ${totalPrice}`)
}
else 
{
    clog('No Porduct buyed!!')
}
