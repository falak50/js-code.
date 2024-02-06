const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// map retunn array , any type of value as ur wish
// const newNum=num.map((x)=>x*x);
// const newNum=num.map((x)=>{
//   if(x%2==0)return x*x;
//   else return x*2;
// })
const newNum=num
             .map(x=>x+1)
             .map(x=>x+1)
             .map(x=>x+1)

console.log(newNum);