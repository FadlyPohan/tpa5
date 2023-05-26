'use strict';

const { DATE } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      'Customers',
      [
        {
          nama: 'Fadly',
          email: 'fadly@gmail.com',
          password: '1234',
          createdAt: new DATE(),
          updateAt: new DATE(),
        },
        {
          nama: 'Pohan',
          email: 'pohan@gmail.com',
          password: '1234',
          createdAt: new DATE(),
          updateAt: new DATE(),
        },
        {
          nama: 'yanto',
          email: 'yanto@gmail.com',
          password: '1234',
          createdAt: new DATE(),
          updateAt: new DATE(),
        },
        {
          nama: 'yani',
          email: 'yani@gmail.com',
          password: '1234',
          createdAt: new DATE(),
          updateAt: new DATE(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Customers', null, {});
  },
};
