const fs = require('fs');

const returnValue = fs.readFileSync('./index.html', { encoding: 'utf-8' });
console.log('sync', returnValue.length);

// everything's fine
// callback(null, data);

// everything's not fine
// callback(err);

fs.readFile('./index.html', { encoding: 'utf-8' }, (err, data) => {
  if (err) {
    return console.log(err);
  }

  console.log('async', data.length);
});
