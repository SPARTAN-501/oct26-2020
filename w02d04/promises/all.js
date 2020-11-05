const { returnPromise, returnRandomPromise, returnRejectedPromise } = require('./promise-generators');


const promiseOne = returnPromise(3000);
const promiseTwo = returnPromise(4000);
const promiseThree = returnRejectedPromise(1000);

const promises = [promiseOne, promiseTwo, promiseThree];

const promise = Promise.all(promises);

promise
  .then(arrOfReturnValues => {
    const returnsFromPromiseOne = arrOfReturnValues[0];
    const returnsFromPromiseTwo = arrOfReturnValues[1];
    console.log(arrOfReturnValues);
  })
  .catch(err => console.log(err));
