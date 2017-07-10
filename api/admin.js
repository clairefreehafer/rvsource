const express = require('express');
const router = express.Router();
const models = require('../models/db');

/**
 * retrieve all articles to list on the admin delete panel
 */
router.get('/', (req, res, next) => {
  models.Link.findAll()
    .then(links => res.json(links))
    .catch(next);
});


/**
 * add an article from the admin panel
 */
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
