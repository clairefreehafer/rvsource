const express = require('express');
const router = express.Router();

const Link = require('../models/link');

router.get('/:category', (req, res, next) => {
  console.log(req.params)
  Link.findAll({ where: {
    category: req.params.category
  }})
    .then(links => res.json(links))
    .catch(next);
});

module.exports = router;
