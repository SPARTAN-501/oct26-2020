const user = {
  username: 'Alice',
  age: 30,
  faveFoods: ['oatmeal']
};

const userCopy = {
  ...user,
  username: 'Bob',
  faveFoods: [
    ...user.faveFoods,
    'brownies'
  ]
};

const anotherCopy = {
  ...user,
  username: 'Carol'
}

// userCopy.username = 'Bob';
// userCopy.faveFoods.push('brownies');

console.log(user);
console.log(userCopy);
