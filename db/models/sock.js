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
    },
    isFavourite: DataTypes.BOOLEAN,
    isOrdered: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Sock',
  });
  return Sock;
};
