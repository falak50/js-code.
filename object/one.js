const mon = ["jan", "feb", "mar", "apr"];
const cash = [
    {'month':'jan', 'value':10},
    {'month':'mar', 'value':20}
 ];
const cnt= {};
for(let i=0;i<cash.length;i++){
    const m=cash[i].month;
    cnt[m]=cash[i].value;
   // console.log(m);
}
mon.forEach((x)=>{
      //console.log(x);
      if(cnt[x]){
         console.log(`  { 'month': ${x}, value: ${cnt[x]} }`)
      }else {
         console.log(`  { 'month': ${x}, value: : }`)
      }
})

// console.log(cash);

