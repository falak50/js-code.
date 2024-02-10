// const a=[1,2,4,5,3];
// const [b,d,...c]=a;
// console.log(c)
const odj={a:1,b:2};
const {i,j,b,a}={a:1,b:2};
console.log(i,j,b,a);

// spread operator
// const arr1=[3,4,5];
// const obj1={...arr1};
// console.log(obj1);

// const fun = (...ar) =>{
//     console.log(ar);
// }
// fun(1,2,3);
// -------------------------------------------------------

const user = {
    name:"falak",
    email:"flaaf@gmail.com"
}
const user1 = {...user}
user1.name='aaa'
console.log(user1);
console.log(user);