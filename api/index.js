const express = require('express');
const router = express.Router();

const Link = require('../models/link');

router.get('/:page', (req, res, next) => {
  Link.findAll()
    .then(res.json)
    .catch(next);
});

module.exports = router;
