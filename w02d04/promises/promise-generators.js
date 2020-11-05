const returnPromise = (delay = 1000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('yay! resolved!'), delay);
  });
};

const returnRejectedPromise = (delay = 1000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject('doh!'), delay);
  });
};

const returnRandomPromise = (delay = 1000) => {
  const num = Math.floor(Math.random() * 2);
  if (num < 1) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve('yay! resolved!'), delay);
    });
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => reject('doh!'), delay);
  });
};

module.exports = {
  returnPromise,
  returnRejectedPromise,
  returnRandomPromise
}
