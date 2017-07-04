const express = require('express');
const router = express.Router();

const Link = require('../models/link');

router.get('/:page', (req, res, next) => {
  console.log('test~~~`~~~~')
  Link.findAll()
    .then(links => res.json(links))
    .catch(next);
});

module.exports = router;
