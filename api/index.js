const express = require('express');
const router = express.Router();

const models = require('../models/db');

router.get('/:category', (req, res, next) => {
  models.Link.findAll({ where: {
    category: req.params.category
  }})
    .then(links => res.json(links))
    .catch(next);
});

module.exports = router;
