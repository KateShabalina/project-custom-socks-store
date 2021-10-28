const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Sock extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User}) {
      this.belongsTo(User);
      // this.belongsTo(Order);
    }
  }
  Sock.init({
    UserId: {
      type: DataTypes.TEXT,
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
