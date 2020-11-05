const promise = new Promise((resolve, reject) => {
  // resolve('I worked!!');
  reject('I don\'t like you');
});

promise
  .then(data => console.log(data))
  .catch(meanMessage => console.log(meanMessage));
