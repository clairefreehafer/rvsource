const db = require('./db');
const sequelize = require('sequelize');

const categories = ['Apps', 'Boondocking', 'Cold Weather', 'Mail', 'Maintenance', 'Internet', 'Renovating & Decorating'];

const Link = db.define('link', {
  title: {
    type: sequelize.STRING,
    allowNull: false
  },
  author: {
    type: sequelize.STRING,
    allowNull: false
  },
  url: {
    type: sequelize.STRING,
    allowNull: false
  },
  category: {
    type: sequelize.STRING,
    allowNull: false
  },
  types: {
    type: sequelize.ARRAY(sequelize.STRING)
  }
});

module.exports = Link;
