'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      username: 'John Doe',
      email: 'cfrodriguez225@misena.edu.co',
      password:'213213'
    },
    {
      username: 'Jane Doe',
      email: 'jane5@misena.edu.co',
      password:'21546213'
    },
    {
      username: 'Samuel',
      email: 'cbo@misena.edu.co',
      password:'2643453'
    }
], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
