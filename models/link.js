module.exports = function(sequelize, DataTypes) {
  const Link = sequelize.define('link', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    author: {
      type: DataTypes.STRING,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    types: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    contentUpdated: {
      type: DataTypes.DATEONLY
    }
  })

  return Link;
}
