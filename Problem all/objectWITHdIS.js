// console.log(Math.floor(Math.random() * 100))

discoutCount = (total) =>{
    fixDis=Math.floor(Math.random() * 100);
  //  console.log(fixDis);
    return total*((100-fixDis)/100);
}

// let ans=discoutCount(100);
// console.log(ans);

const data = {
   person1: {
       name: "John",
       products: [
           { name: "Phone", price: 500 },
           { name: "Laptop", price: 1000 },
           { name: "Headphones", price: 200 }
       ]
   },
   person2: {
       name: "Alice",
       products: [
           { name: "Camera", price: 700 },
           { name: "Smartwatch", price: 300 }
       ]
   }
};
const cart=[]
for(const key in data){
  //console.log(key,data[key]);
   const obj=data[key];
   //console.log(data[key].products);
   const arr=data[key].products;
   let sum=0;
   for(let i=0;i<arr.length;i++){
   //   console.log(arr[i].price);
      sum+=arr[i].price;
   }
   //console.log("-->sum",sum);
   let afterDis=discoutCount(sum);
    cart.push({name:data[key].name,
    shouldPay:afterDis
   })

}

console.log(cart)
