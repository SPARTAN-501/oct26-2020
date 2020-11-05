const { returnPromise, returnRejectedPromise } = require('./promise-generators');

// const promise = returnPromise(1234);
// console.log(promise);

// promise.then((data) => {
//   console.log(data);
// });

const promise = returnRejectedPromise(2000);
console.log(promise);

promise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
