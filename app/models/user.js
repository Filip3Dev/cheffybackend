module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    location: DataTypes.STRING,
    type: DataTypes.ENUM('user', 'chef'),
    imagePath: DataTypes.STRING,
    shipping_address: DataTypes.STRING,
  });

  return User;
}
