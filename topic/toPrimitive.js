const obj = {
    valueOf() {
        return 42;
    },
    toString(){
        return "falak"
    }
}
console.log(String(obj))


// let z = 1;
// let x = (z++,z++,++z);
