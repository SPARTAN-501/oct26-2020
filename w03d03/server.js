const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const port = 789;

const languages = require('./languages.json');

const app = express();
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');

const userDb = {
  '1': {
    id: '1',
    email: 'b@b.com',
    password: '5678'
  }
};

const genNextId = () => {
  return Object.keys(userDb).length + 1;
};

app.get('/', (req, res) => {
  const languageChoice = req.cookies.language || 'so';
  const templateVars = {
    heading: languages.homeHeadings[languageChoice],
    body: languages.homeBodies[languageChoice]
  };
  res.render('home', templateVars);
});

app.get('/about', (req, res) => {
  const languageChoice = req.cookies.language || 'so';
  const templateVars = {
    heading: languages.aboutHeadings[languageChoice],
    body: languages.aboutBodies[languageChoice]
  };
  res.render('about', templateVars);
});

app.get('/languages/:languageChoice', (req, res) => {
  res.cookie('language', req.params.languageChoice);
  res.redirect('/about');
});

app.get('/register', (req, res) => {
  res.render('register');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/protected', (req, res) => {
  if (!req.cookies.userId) {
    return res.redirect('/login');
  }

  const user = userDb[req.cookies.userId];

  res.render('protected', { user });
});

app.post('/login', (req, res) => {
  const password = req.body.password;
  const email = req.body.email;

  if (!password || !email) {
    return res.status(400).send('please enter a email and password');
  }

  let foundUser;
  for (const id in userDb) {
    if (userDb[id].email === email) {
      foundUser = userDb[id];
    }
  }

  if (!foundUser) {
    res.status(400).send('no user with that email found');
  }

  if (foundUser.password !== password) {
    res.status(401).send('incorrect password');
  }

  res.cookie('userId', foundUser.id);

  res.redirect('/protected');
});

app.post('/register', (req, res) => {
  const password = req.body.password;
  const email = req.body.email;
  const id = genNextId(); // 2

  const user = { id, email, password };

  userDb[id] = user;

  console.log(userDb);

  res.redirect('/login');
});

app.post('/logout', (req, res) => {
  res.clearCookie('userId');
  res.redirect('/login');
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
