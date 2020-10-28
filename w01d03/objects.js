const name = 'Alice';
const age = 24;
const hasPets = true;
const gradDate = null;

const studentOne = {
  firstName: 'Alice',
  age: 24,
  hasPets: true,
  gradDate: null,
};

studentOne['newKeyName'] = [1, 2, 3];
console.log(studentOne.newKeyName);
console.log(studentOne['newKeyName']);
console['log']('hello');

studentOne.subObject = {
  hello: 'world'
};

console.log(studentOne);

// use for..of with everything except objects, because of and object both start with 'o'

// const keyName = 'name';

// studentOne[keyName] = 'Alice';
// studentOne.keyName = 'Alice';
// console.log(studentOne['name']);

// studentOne.age = 24;
// console.log(studentOne.age);
// console.log(studentOne['age']);


// console.log(studentOne);

// const arr = [1,2,3];
// arr[1]; // 2
// arr[5]; // undefined
