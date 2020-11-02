const returnPromise = (delay = 1000) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, delay);
  });
};

const returnRejectedPromise = (delay = 1000) => {
  return new Promise((resolve, reject) => {
    setTimeout(reject, delay);
  });
};

const returnRandomPromise = (delay = 1000) => {
  const num = Math.floor(Math.random() * 2);
  if (num < 1) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, delay);
    });
  }
  return new Promise((resolve, reject) => {
    setTimeout(reject, delay);
  });
};

module.exports = {
  returnPromise,
  returnRejectedPromise,
  returnRandomPromise
}
