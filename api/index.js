const express = require('express');
const router = express.Router();

const models = require('../models/db');

router.use('/admin', require('./admin'))

router.get('/:category', (req, res, next) => {
  console.log('fuckyou')
  models.Link.findAll({ where: {
    category: req.params.category
  }})
    .then(links => res.json(links))
    .catch(next);
});

module.exports = router;
