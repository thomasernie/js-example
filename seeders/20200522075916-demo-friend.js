'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Friend', [{
      userId: 1,
      friendId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      userId: 1,
      friendId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 2,
      friendId: 1,
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
