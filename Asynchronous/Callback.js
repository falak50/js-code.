display = (data)=>{
    console.log(data)
}
// Example of using a callback function
function fetchData(callback) {
    setTimeout(() => {
        console.log('here come data after 3s')
      callback(data);
    }, 3000);
  }
  
  // Using fetchData with a callback
  const data = 'Some data fetched asynchronously with callback';
  fetchData(()=>{
    display(data)}
    );
  console.log('hello')

  