'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Students',
      [
        {
          firstName: 'Wally',
          lastName: 'Doe',
          email: 'test12@test.test',
          birthday: '2006-05-10',
          isMale: true,
          activitiesCount: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Ivo',
          lastName: 'Doe',
          email: 'test13@test.test',
          birthday: '2006-05-10',
          isMale: false,
          activitiesCount: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Students', null, {});
  },
};
