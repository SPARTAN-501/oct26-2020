# W02D04 - Promises

### To Do
- [x] Illustrate the "callback waterfall" (callback hell) problem
- [x] Introduction to Promises
- [x] Error handling with Promises (vs callbacks)
- [x] Promise chaining
- [x] Parallelizing async things (Promise.race and Promise.all)
- [x] Creating our own Promises

### Promises
* returned values from async functions
* an object
* pending => fulfilled => failed
* pending => resolved => rejected
* native promises introduced in 2015 ES6

```js
const myVal = answer || 'default';
```

```js
higherOrderFn('argOne', (err, data) => {
  if (err) {
    throw err;
  }
  higherOrderFnTwo(data, (err, dataTwo) => {
    if (err) throw err;
    ...
  });
});

```
async/await

### Parallel
3s + 4s = 7s
3s || 4s = 4s
















#
