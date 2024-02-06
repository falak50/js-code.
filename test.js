// let obj = {
//     name:'falak',
//     id: 123,
//     arr: [1,2,3]
// }

// for(const key in obj){
//     const arr=obj[key];
//     if (Array.isArray(arr)){
//       for(const val of arr){
//         console.log(`${val} falak`)
//       }
//     }
// }

let person = {
  firstName: 'John',
  lastName: 'Doe'
};

person.firstName = 'Jane';

console.log(person);