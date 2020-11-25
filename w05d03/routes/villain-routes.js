const express = require('express');
const router = express.Router();
const queries = require('../db/villain-queries');

// browse /villains/
router.get('/', (req, res) => {
  queries.getAllVillains((villains) => {
    res.json(villains);
  });
});

// read /villains/:id
router.get('/:id', (req, res) => {
  queries.getVillainById(req.params.id)
    .then((villain) => {
      res.json(villain);
    });
});

module.exports = router;
