const express = require('express');
const router = express.Router();
const models = require('../models/db');

// list all articles on delete panel
router.get('/', (req, res, next) => {
  models.Link.findAll()
    .then(links => res.json(links))
    .catch(next);
});

// add article
router.post('/', (req, res, next) => {
  models.Link.destroy({
    where: {
      title: ''
    }
  })
    .then(res.sendStatus(200))
    .catch(next);
})

module.exports = router;
