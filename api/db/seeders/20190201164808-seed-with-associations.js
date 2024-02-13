'use strict';
const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Tasks', [{
        id: uuidv4(),
        title: 'Storm frontend test',
        isDone: 'false',
        importance: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        title: 'Update CV',
        isDone: 'false',
        importance: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        title: 'Cover letter',
        isDone: 'false',
        importance: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Tasks', null, {});
    return;
  }
};