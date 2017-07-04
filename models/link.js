const db = require('./db');
const Sequelize = require('sequelize');

const Link = db.define('link', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false
  },
  url: {
    type: Sequelize.STRING,
    allowNull: false
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false
  },
  types: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  }
});

module.exports = Link;
