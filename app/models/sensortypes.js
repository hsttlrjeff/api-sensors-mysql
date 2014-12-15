module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sensortypes', {
  		sensorTypeName: DataTypes.STRING(90),
  		isEnabled: DataTypes.BOOLEAN
	})
}