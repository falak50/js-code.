setTimeout(() => {
   console.log('helo 1') 
}, 5000);
setTimeout(() => {
    console.log('hello 2') 
 }, 2000);
 try{
    {
        let c=10;
          if(c>5){
             throw new error('this is error')
          }
       
    }
 }catch(err){
    console.log('-------------------------')
 console.log(err);
 console.log('-------------------------')
 }


 setTimeout(()=> {
  console.log('hello 0 ')
 },0)

 console.log('runing')