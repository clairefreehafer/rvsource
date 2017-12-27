module.exports = function(sequelize, DataTypes) {
  const Van = sequelize.define('van', {
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
    loadCapacity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    msrp: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    mpg: {
      type: DataTypes.ARRAY(DataTypes.INTEGER)
    },
    fuelCapacity: {
      type: DataTypes.INTEGER
    },
    fuelType: {
      type: DataTypes.STRING
    },
    length: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: false
    },
    height: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: false
    },
    wheelbase: {
      type: DataTypes.ARRAY(DataTypes.INTEGER)
    }
  });

  return Van;
}
