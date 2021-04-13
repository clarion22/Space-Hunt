'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        name: faker.name.findName(),
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser1',
        name: faker.name.findName(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser2',
        name: faker.name.findName(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
   const Op = Sequelize.Op;
   return queryInterface.bulkDelete('Users', {
     username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] },
   }, {})
  }
};
