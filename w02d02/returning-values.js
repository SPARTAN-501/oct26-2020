const higherOrderFn = (cb) => {
  const data = {
    username: 'Alice'
  };

  console.log('before the settimout');

  setTimeout(() => {
    data.username = 'Bob';
    cb(data);
    // return data; // no one around to hear
  }, 1000);

  console.log('after the settimout');
  // return data; // didn't work as expected
};

console.log('before the main call');
higherOrderFn((something) => {
  console.log(something);
  console.log('inside the callback');
});
console.log('after the main call');
