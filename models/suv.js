module.exports = function (sequelize, DataTypes) {
  const Suv = sequelize.define('suv', {
    year: {
      type: DataTypes.INTEGER
    },
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
    length: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: false
    },
    wheelbase: {
      type: DataTypes.ARRAY(DataTypes.INTEGER)
    }
  });

  return Suv;
}
