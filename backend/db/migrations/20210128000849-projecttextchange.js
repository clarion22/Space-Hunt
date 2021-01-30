'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return Promise.all([
          queryInterface.changeColumn('Projects', 'description', {
              type: Sequelize.TEXT
          })
      ])
  },

  down: (queryInterface, Sequelize) => {
      return Promise.all([
          queryInterface.changeColumn('Projects', 'description', {
              type: Sequelize.STRING
          })
      ])
  }
};
