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
      logging:  false,
      dialectOptions: {
        ssl: true
      }
    })
  } else {
    // the application is executed on the local machine ... use mysql
    sequelize = new Sequelize('postgres://localhost:5432/rvsource', { logging: false })
  }

  global.db = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    Link:      sequelize.import(__dirname + '/link')
  }
}

module.exports = global.db;
