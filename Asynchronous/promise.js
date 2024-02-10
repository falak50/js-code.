console.log('hello 1')
// Example of creating a Promise
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber > 0.5) {
        resolve(randomNumber);
      } else {
        reject(new Error('Random number is less than 0.5'));
      }
    }, 1000);
  });
  
  // Using then() and catch() to handle success and failure
  myPromise
    .then((result) => {
      console.log('Success:', result);
    })
    .catch((error) => {
      console.error('Error:', error.message);
    });
    console.log('hello 2')  