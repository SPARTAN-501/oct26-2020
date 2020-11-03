console.log('line one!');

const callback = () => {
  console.log(new Date());
  console.log('hello there!');
};
const delay = 'apples';

const returnVal = setTimeout(callback, delay); // 2000 ms timer starts
console.log(returnVal);

setTimeout(() => {
  console.log(new Date());
  console.log('am I second?');
}, 1000); // 1000 ms timer starts

console.log('hello?');

// for (let i = 0; i < 10000; i++) {
//   const date = new Date();
//   console.log(date);
// }
