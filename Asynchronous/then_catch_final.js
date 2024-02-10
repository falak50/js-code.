Promise.resolve('Success!')
  .then((result) => {
    console.log('Then:', result);
    return result;
  })
  .catch((error) => {
    console.error('Catch:', error);
  })
  .finally(() => {
    console.log('Finally: This will always execute');
  });
