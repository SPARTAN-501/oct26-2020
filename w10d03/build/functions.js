"use strict";
const sayHello = (personName, book, age) => {
    return `hello ${personName}`;
};
const result = sayHello('Carol', 'hello world');
const doesntReturnAnything = (bool) => {
    console.log('hey there');
    // return null;
};
const returningPromise = (title) => {
    return new Promise((resolve, reject) => {
        resolve(title);
    });
};
returningPromise('Hewlett Packard')
    .then((data) => { });
const higherOrder = (cb) => {
    cb('hush puppy');
    return () => false;
};
higherOrder((whatever) => {
    return 42;
});
