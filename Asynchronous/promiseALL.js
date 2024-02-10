const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(3);

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log('All promises resolved:', values);
  })
  .catch((error) => {
    console.error('At least one promise rejected:', error);
  });
