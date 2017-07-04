const Sequelize = require('Sequelize');

module.exports = new Sequelize('postgres://localhost:5432/rvsource', { logging: false });
