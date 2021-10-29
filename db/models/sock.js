const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Sock extends Model {
    static associate({ User, Order }) {
      //это важно!
      Sock.belongsTo(User, {
        foreignKey: 'UserId'
      });
      Sock.hasMany(Order, {
        foreignKey: 'SockId'
      });
    }
  }
  Sock.init({
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    style: DataTypes.TEXT,
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 999,
    },
    isFavourite: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    isOrdered: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  }, {
    sequelize,
    modelName: 'Sock',
  });
  return Sock;
};
