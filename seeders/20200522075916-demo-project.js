'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Project', [{
      userId: 1,
      name: 'NodeJs',
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      userId: 1,
      name: 'Java',
      createdAt: new Date(),
      updatedAt: new Date()
    }

    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
