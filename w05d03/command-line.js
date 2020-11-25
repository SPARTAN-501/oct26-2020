const pg = require('pg');
const Client = pg.Client;

// const { Client } = require('pg');

const config = {
  user: 'xtnbouac',
  host: 'suleiman.db.elephantsql.com',
  database: 'xtnbouac',
  password: '4j87fqSNN-5Pt5k1cLojd9mI__mkqpLK',
};

const client = new Client(config);

client.connect(() => {
  console.log('connected to the database');
});

const verb = process.argv[2];
let id;
let query;

switch (verb) {
  case 'browse':
    client.query('SELECT * FROM movie_villains ORDER BY id;')
      .then((data) => {
        console.log(data.rows);
        client.end();
      });
    break;

  case 'read':
    id = process.argv[3];
    client.query('SELECT * FROM movie_villains WHERE id = $1;', [id])
      .then((data) => {
        console.log(data.rows);
        client.end();
      });
    break;

  case 'edit':
    id = process.argv[3];
    const newVillainName = process.argv[4];

    client.query('UPDATE movie_villains SET villain = $2 WHERE id = $1;', [id, newVillainName])
      .then(() => {
        console.log('villain updated successfully');
        client.end();
      });
    break;

  case 'add':
    const newVillain = process.argv[3];
    const newMovie = process.argv[4];
    query = 'INSERT INTO movie_villains(villain, movie) VALUES($1, $2);';

    client.query(query, [newVillain, newMovie])
      .then(() => {
        console.log('villain spawned successfully');
        client.end();
      });
    break;

  case 'delete':
    id = process.argv[3];
    query = 'DELETE FROM movie_villains WHERE id = $1';
    client.query(query, [id])
      .then(() => {
        console.log('villain TERMINATED!!!');
        client.end();
      });
    break;

  default:
    console.log('please enter a valid BREAD verb');
    client.end();
}
