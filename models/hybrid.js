module.exports = function(sequelize, DataTypes) {
  const Hybrid = sequelize.define('hybrid', {
    make: {
      type: DataTypes.STRING,
      allowNull: false
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false
    },
    towRating: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    msrp: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fuelEconomy: {
      type: DataTypes.ARRAY(DataTypes.INTEGER)
    },
    range: {
      type: DataTypes.INTEGER
    },
    length: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: false
    },
    wheelbase: {
      type: DataTypes.ARRAY(DataTypes.INTEGER)
    }
  })

  return Hybrid;
}
