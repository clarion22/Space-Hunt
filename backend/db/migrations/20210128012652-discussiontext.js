'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return Promise.all([
          queryInterface.changeColumn('Discussions', 'content', {
              type: Sequelize.TEXT
          })
      ])
  },

  down: (queryInterface, Sequelize) => {
      return Promise.all([
          queryInterface.changeColumn('Discussions', 'content', {
              type: Sequelize.STRING
          })
      ])
  }
};
