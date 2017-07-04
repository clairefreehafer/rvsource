const sequelize = require('sequelize');
const pg = require('pg');

pg.defaults.ssl = true;
pg.connect(proces.env.DATABASE_URL, (err, client) => {
  if (err) throw err;
  console.log('Connected to postgres! Getting schemas...');

  client
    .query('SELECT table_schema,table_name FROM information_schema.tables;')
    .on('row', row => {
      console.log(JSON.stringify(row));
    });
});

module.exports = new sequelize('postgres://localhost:5432/rvsource', { logging: false });
