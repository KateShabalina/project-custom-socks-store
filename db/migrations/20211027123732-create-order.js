module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      UserId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        //это важно!
        onDelete: 'cascade',
        onUpdate: 'cascade',
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      SockId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        //это важно!
        onDelete: 'cascade',
        onUpdate: 'cascade',
        references: {
          model: 'Socks',
          key: 'id',
        },
      },
      count: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      address: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      phone: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Orders');
  },
};
