const sequelize = require('sequelize');

module.exports = new sequelize('postgres://localhost:5432/rvsource', { logging: false });
