const { returnPromise, returnRejectedPromise } = require('./promise-generators');

// const promise = returnPromise();
// promise.then()

returnPromise()
  .then((data) => {
    console.log(data);
    const promise = returnPromise();
    return promise;
  })
  .then((data) => {
    console.log(data);
    const promise = returnRejectedPromise();
    return promise;
  })
  .then((data) => {
    console.log(data);
    // return 'anything!';
    return returnRejectedPromise();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  })




// 
