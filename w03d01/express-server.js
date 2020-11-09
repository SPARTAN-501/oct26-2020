// bring in outside packages
const express = require('express');
const morgan = require('morgan');
const port = 7654;

// set up Express application
const app = express();

// middleware
// app.use((req, res, next) => {
//   console.log(`Incoming request: ${req.method} ${req.url}`);
//   // res.end('ooops'); // don't want this
//   next();
// });
app.use(morgan('dev'));

// route handlers
// GET /users
app.get('/users', (req, res) => {
  // res.end('all the users!');
  // console.log(__dirname);
  res.sendFile(`${__dirname}/index.html`);
});

// GET /maps
app.get('/maps', (req, res) => {
  res.end('every map in the database!');
});

// start server listening
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
