const a=[1,2,4,56,1];
const b=a.map((x)=>{{
   if(x%2){
    return {
    name:"odd",
    val:x
    }
   }else {
    return {
        name:"even",
        val:x
        }
   }
}})
console.log(b);