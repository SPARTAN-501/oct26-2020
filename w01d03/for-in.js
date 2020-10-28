// const arr = [1, 2, 3];

// for (const something in arr) {
//   console.log(arr[something]);
// }

const student = {
  name: 'Alice',
  age: 30,
  hasGraduated: false
};

for (const key in student) {
  console.log(key);
  console.log(student[key]);
}
