const name = 'Carol';

const sayHello = function(anything) {
  anything = 'Bob';
  console.log(`hello ${anything}`);
};

// sayHello(name);
// console.log('name', name);

const sayHelloTwo = function(obj) {
  obj.name = 'Bob';
  console.log(`hello ${obj.name}`);
};

const student = {
  name: 'Elise'
};

sayHelloTwo(student);
console.log('student', student);
