const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Sock extends Model {
    static associate({ User, Order }) {
      //это важно!
      Sock.belongsTo(User, {
        foreignKey: 'userId'
      });
      Sock.hasMany(Order, {
        foreignKey: 'sockId'
      });
    }
  }
  Sock.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    color: DataTypes.TEXT,
    img: DataTypes.TEXT,
    pattern: DataTypes.TEXT,
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
