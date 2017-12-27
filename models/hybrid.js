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
    mpge: {
      type: DataTypes.ARRAY(DataTypes.INTEGER)
    },
    range: {
      type: DataTypes.INTEGER
    },
    fuelCapacity: {
      type: DataTypes.INTEGER
    },
    fuelType: {
      type: DataTypes.STRING
    },
    length: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    wheelbase: {
      type: DataTypes.INTEGER
    }
  });

  return Hybrid;
}
