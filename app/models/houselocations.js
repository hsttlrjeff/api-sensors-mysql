module.exports = function(sequelize, DataTypes) {
	return sequelize.define('houselocations', {
  		locationName: DataTypes.STRING(90),
  		isEnabled: DataTypes.BOOLEAN
	})
}