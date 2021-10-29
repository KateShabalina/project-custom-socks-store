const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate({ User, Sock }) {
      //это важно!
      Order.belongsTo(User, {
        foreignKey: 'UserId'
      });
      Order.belongsTo(Sock, {
        foreignKey: 'SockId'
      });
    }
  }
  //**обратите внимание на тип данных в сторонних ID**
  Order.init({
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    SockId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    count: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    phone: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};
