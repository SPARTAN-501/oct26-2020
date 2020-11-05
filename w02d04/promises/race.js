const { returnPromise } = require('./promise-generators');

const genRandomDelay = () => {
  return (Math.floor(Math.random() * 5) + 1) * 1000;
};

const promiseOne = returnPromise(genRandomDelay());
const promiseTwo = returnPromise(genRandomDelay());
const promiseThree = returnPromise(genRandomDelay());
const promiseFour = returnPromise(genRandomDelay());

const promises = [promiseOne, promiseTwo, promiseThree, promiseFour];

Promise.race(promises)
  .then(data => {
    console.log(data);
  })
