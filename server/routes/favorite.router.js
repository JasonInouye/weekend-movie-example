const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
  // return all categories
  const queryText = `SELECT * FROM favorites ORDER BY id`;
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

// return all favorite images
router.get('/', (req, res) => {
  res.sendStatus(200);
});

// add a new favorite
router.post('/', (req, res) => {

  const giphyToAdd = req.body.url;

  console.log( `what is the the req.body property:`, req.body.url);

  const sqlText = `INSERT INTO favorites ("url")
                  VALUES ($1);`;
  const insertValues = [giphyToAdd]

  pool.query(sqlText, insertValues)
    .then((result) => {
      console.log('Added favorite to db', insertValues);
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log( 'error in POST', err);
      res.sendStatus(500);
    })
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
