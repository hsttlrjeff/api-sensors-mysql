var config = require('../config/config');

if (!global.hasOwnProperty('db')) {
  var Sequelize = require('sequelize')
    , sequelize = null
 
 /*
  if (process.env.HEROKU_POSTGRESQL_BRONZE_URL) {
    // the application is executed on Heroku ... use the postgres database
    var match = process.env.HEROKU_POSTGRESQL_BRONZE_URL.match(/postgres:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/)
 
    sequelize = new Sequelize(match[5], match[1], match[2], {
      dialect:  'postgres',
      protocol: 'postgres',
      port:     match[4],
      host:     match[3],
      logging:  true //false
    })
  } else {
    // the application is executed on the local machine ... use mysql
    sequelize = new Sequelize('example-app-db', 'root', null)
  }
  */
  sequelize = new Sequelize(config.connectionString, {
    logging: false
  });
 
  global.db = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    HouseLocations: sequelize.import(__dirname + '/houselocations'),
    SensorTypes: sequelize.import(__dirname + '/sensortypes'),
    EnvironmentReadings: sequelize.import(__dirname + '/environmentreadings')
    
 
    // add your other models here
  }
 
  /*
    Associations can be defined here.
  */
  global.db.HouseLocations.hasMany(global.db.EnvironmentReadings)
  global.db.EnvironmentReadings.belongsTo(global.db.HouseLocations)
  global.db.SensorTypes.hasMany(global.db.EnvironmentReadings)
  global.db.EnvironmentReadings.belongsTo(global.db.SensorTypes)
}
 
module.exports = global.db