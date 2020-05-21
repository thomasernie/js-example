//Data Mapper
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'karthi',
      lastName: 'balaji',
      email: 'example@example.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      firstName: 'jay',
      lastName: 'san',
      email: 'example@example.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }

    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};