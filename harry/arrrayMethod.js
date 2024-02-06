const a=[1,2,3,4,5];
const b=a.map((val,idex,arr)=>{  
    return val+idex;
})
// console.log(b);
const c=a.filter((x)=>{
    return x>2;
})
// console.log(c);
const d=a.reduce((acc,curval)=>{
    return acc+curval
},5)
// console.log(d);


// sort number array by comp fun
// num=[4,3,2,10,1];
// num.sort((a,b)=>{
//     return a-b;
// });
// console.log(num);

// // Splice and Slice
// const array = [1, 2, 3, 4, 5];
// const removed = array.splice(1, 2); // Removes elements starting from index 1, removing 2 elements
// console.log(array); // Output: [1, 4, 5]
// console.log(removed); // Output: [2, 3]

// const array = [1, 2, 3, 4, 5];
// const sliced = array.slice(1, 3); // Returns a new array containing elements from index 1 to 3 (not including 3)
// console.log(sliced); // Output: [2, 3]
// console.log(array); // Output: [1, 2, 3, 4, 5] (original array remains unchanged)

const sentence = 'The dog quick brown fox jumps over the lazy dog.';
const word = 'dog';

console.log(sentence.search(word));
