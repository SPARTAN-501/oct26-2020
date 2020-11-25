const db = require('./connection');

// browse
const getAllVillains = (cb) => {
  db.query('SELECT * FROM movie_villains ORDER BY id;')
    .then((data) => {
      cb(data.rows);
    });
  return undefined;
};

// read
const getVillainById = (id) => {
  return db.query('SELECT * FROM movie_villains WHERE id = $1;', [id])
    .then((data) => {
      return data.rows[0];
    });
};

module.exports = {
  getAllVillains,
  getVillainById
};
