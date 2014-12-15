module.exports = function(sequelize, DataTypes) {
	return sequelize.define('environmentreadings', {
  		temperatureReading: DataTypes.DECIMAL(5,2),
  		humidityReading: DataTypes.DECIMAL(5,2)
	})
}