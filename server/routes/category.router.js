const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
  // return all categories
  const queryText = `SELECT * FROM category ORDER BY name ASC`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});

router.put('/:id', (req, res) => {
  // return all categories


  const queryText = `
    UPDATE "favorites"
    SET "category_id" = $1
    WHERE "id" = 1;
  `;

  let values = [req.params.id]

  pool
    .query(queryText, values)
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});

module.exports = router;
// http://api.giphy.com/v1/gifs/random?api_key=${process.env.GIPHY_API_KEY}`