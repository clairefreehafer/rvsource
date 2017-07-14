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
  console.log(req.params)
  res.sendStatus(200)
  // models.Link.create({
  //   where: {
  //     title: ''
  //   }
  // })
  //   .then(res.sendStatus(200))
  //   .catch(next);
})

module.exports = router;
