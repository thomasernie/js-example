'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Lives', [{
      userId: 1,
      till: new Date(),
      from: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      userId: 2,
      till: new Date(),
      from: new Date(),
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
