// rest operator for collecting rest all last value
// mainly to to pass many operator 
function sum(a,b,...rest){
    console.log(a,b)
    console.log(rest);
}
sum(1,2,3,4,5,65);
// ---------------------------
function sum1(a,b,c){
    
}
const spread = [1,2,3];
const fun2 = (a,b)=>{
    console.log(a,b);
}
fun2(...spread);


