'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
      {
        parent_id: 1,
        user_id: 1,
        content: "Awesome, already registered. Thanks!! This is great. Hiring is always a pain. I'm excited to try Cauldron.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        parent_id: 1,
        user_id: 1,
        content: "I’m sure that will be super helpful.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        parent_id: 1,
        user_id: 1,
        content: "Good job! Love the design and implementation!",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', {})
  }
};
