require('dotenv').config();

const express = require('express');
const app = express();
const villainRouter = require('./routes/villain-routes');

const port = process.env.PORT || 7654;

app.use('/villains', villainRouter);

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
