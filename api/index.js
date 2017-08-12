const express = require('express');
const router = express.Router();

const models = require('../models/db');

router.use('/admin', require('./admin'))

/* saving for possible future use
:category comes in all lowercase, but is stored in the database Uppercase
const getCategory = category => {
  return category.charAt(0).toUpperCase() + category.slice(1);
}
*/

/**
 * retrieve all links of a particular category for each page
 */
router.get('/link/:category', (req, res, next) => {
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

router.get('/tow-vehicle', (req, res, next) => {
  models.TowVehicle.findAll()
  .then(towVehicles => res.json(towVehicles))
  .catch(next);
})

module.exports = router;
