const express = require('express');
const router = express.Router();

const models = require('../models/db');

router.use('/admin', require('./admin'))

// :category comes in all lowercase, but is stored in the database Uppercase
// const getCategory = category => {
//   return category.charAt(0).toUpperCase() + category.slice(1);
// }

router.get('/:category', (req, res, next) => {
  // let upperCategory = getCategory(req.params.category);

  models.Link.findAll({
    where: {
      category: req.params.category
    }, order: [
      ['title', 'ASC']
    ]
  })
    .then(links => res.json(links))
    .catch(next);
});

module.exports = router;
