if (!global.hasOwnProperty('db')) {
  var Sequelize = require('sequelize')
    , sequelize = null

  /**
   * if setting up heroku, use the postgres database
   */
  if (process.env.HEROKU_POSTGRESQL_AMBER_URL) {
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
  }
  /**
   * for local development, use mysql
   */
  else {
    sequelize = new Sequelize('postgres://localhost:5432/rvsource', { logging: false })
  }

  global.db = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    Link: sequelize.import(__dirname + '/link'),
    TowVehicle: sequelize.import(__dirname + '/towVehicle'),
    Van: sequelize.import(__dirname + '/van'),
    SUV: sequelize.import(__dirname + '/suv'),
    Hybrid: sequelize.import(__dirname + '/hybrid'),
  }
}

/**
 * export database and Link model
 */
module.exports = global.db;
