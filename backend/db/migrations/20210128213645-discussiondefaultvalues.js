'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Discussions', 'createdAt', { defaultValue: new Date(), type: Sequelize.DATE });
    await queryInterface.changeColumn('Discussions', 'updatedAt', { defaultValue: new Date(), type: Sequelize.DATE });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Discussions', 'createdAt', {
      defaultValue: null,
      allowNull: true,
      type: Sequelize.DATE,
    });
    await queryInterface.changeColumn('Discussions', 'updatedAt', {
      defaultValue: null,
      allowNull: true,
      type: Sequelize.DATE,
    });
  }
};
