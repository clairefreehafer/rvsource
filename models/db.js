// const sequelize = require('sequelize');
// // const pg = require('pg');

// // pg.defaults.ssl = true;
// // pg.connect(process.env.DATABASE_URL, (err, client) => {
// //   if (err) throw err;
// //   console.log('Connected to postgres! Getting schemas...');

// //   client
// //     .query('SELECT table_schema,table_name FROM information_schema.tables;')
// //     .on('row', row => {
// //       console.log(JSON.stringify(row));
// //     });
// // });

// module.exports = new sequelize('postgres://localhost:5432/rvsource', { logging: false });

if (!global.hasOwnProperty('db')) {
  var Sequelize = require('sequelize')
    , sequelize = null

  if (process.env.HEROKU_POSTGRESQL_AMBER_URL) {
    // the application is executed on Heroku ... use the postgres database
    var match = process.env.HEROKU_POSTGRESQL_AMBER_URL.match(/postgres:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/)

    sequelize = new Sequelize(match[5], match[1], match[2], {
      dialect:  'postgres',
      protocol: 'postgres',
      port:     match[4],
      host:     match[3],
      logging:  true //false
    })
  } else {
    // the application is executed on the local machine ... use mysql
    sequelize = new Sequelize('rvsource', 'root', null)
  }

  global.db = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    Link:      sequelize.import(__dirname + '/link')
  }
}

module.exports = global.db
