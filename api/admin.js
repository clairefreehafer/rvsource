const express = require('express');
const router = express.Router();
const models = require('../models/db');

// list all articles on delete panel
router.get('/', (req, res, next) => {
  console.log('test')
  models.Link.findAll()
    .then(links => res.json(links.data))
    .catch(next);
});

module.exports = router;
