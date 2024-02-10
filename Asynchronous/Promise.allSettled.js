const promise1 = Promise.resolve(1);
const promise2 = Promise.reject(new Error('Some error'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 1000, 3));

Promise.allSettled([promise1, promise2, promise3])
  .then((results) => {
    console.log('All promises settled:', results);
  });
 