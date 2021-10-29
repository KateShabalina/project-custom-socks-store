const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Sock, Order }) {
      User.hasMany(Sock, {
        foreignKey: 'UserId'
      });
      User.hasMany(Order, {
        foreignKey: 'UserId'
      });
    }
  }
  User.init({
    username: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
