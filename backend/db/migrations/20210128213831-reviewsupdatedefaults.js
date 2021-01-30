'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Reviews', 'createdAt', { defaultValue: new Date(), type: Sequelize.DATE });
    await queryInterface.changeColumn('Reviews', 'updatedAt', { defaultValue: new Date(), type: Sequelize.DATE });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Reviews', 'createdAt', {
      defaultValue: null,
      allowNull: true,
      type: Sequelize.DATE,
    });
    await queryInterface.changeColumn('Reviews', 'updatedAt', {
      defaultValue: null,
      allowNull: true,
      type: Sequelize.DATE,
    });
  }
};
