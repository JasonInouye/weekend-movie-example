const express = require('express');
const axios = require('axios');
const router = express.Router();

require('dotenv').config();

router.get('/:q', (req, res) => {
    let searchString = req.params.q
    axios
        .get(`http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${searchString}&limit=6`)
        .then( (response) => {
            console.log(response.data);
            res.send(response.data);
        })
        .catch( (err) => {
            console.log(err);
            res.sendStatus(500);
        })
});

module.exports = router;