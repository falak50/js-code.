const arr = ["java","js", "ruby", "java", "python", "cpp"]
// arrow fun use
// arr.forEach((x)=>console.log(x));

// normal fun
// arr.forEach(function(x){
//     console.log(x);
// })

// printFun = (x) => {
//     console.log(x);
// }
// arr.forEach(printFun); // not use ()

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item)=>{
  // console.log(item.languageFileName);
})
//console.log(myCoding);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   console.log(books[0].prototype);
// const user = {
//     name: "falak",
//     age:123
// }
// console.log(user)

for(const key in books){
       console.log(books[key]);
}  
// for(let i=0; i<books.length;i++){
//     //  console.log(books[i].title);
// }

// for(const val of books){
//     console.log(val.title);
// }
