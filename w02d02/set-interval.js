let numTimesRun = 0;

const interval = setInterval(function() {
  if (numTimesRun === 10) {
    // return clearInterval(interval);
    return;
    // clearInterval(this);
  }
  numTimesRun++;
  console.log('hello', numTimesRun);
}, 250);

// setTimeout(() => {
//   clearInterval(interval);
// }, 5001);

// console.log(interval);
