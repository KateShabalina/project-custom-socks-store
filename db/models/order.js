const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Sock }) {
      this.belongsTo(User);
      this.hasMany(Sock);
    }
  }
  Order.init({
    UserId: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    SockId: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    fullname: {
      type: DataTypes.TEXT,
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
    toPay: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};
