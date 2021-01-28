'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Discussions', [
      {
        content: "Super promising alternative to Audible and the like. Sounds like your product really gives power back to the creators! Well done!",
        userId: 1,
        projectId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: "This looks cool! Is it possible to also have one-on-one communication with consumers or is it typically a group interaction?",
        userId: 1,
        projectId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Discussions', {});
  }
};
