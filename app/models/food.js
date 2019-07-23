module.exports = (sequelize, DataTypes) => {
  const Food = sequelize.define('Foods', {
    name: DataTypes.STRING,
    details: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    delivery_time: DataTypes.DOUBLE,
    imagePath: DataTypes.STRING,
    sell_count: DataTypes.DOUBLE,
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
  });
  Food.associate = function(models) {
    Food.belongsTo(models.User)
  }
  return Food;
}
