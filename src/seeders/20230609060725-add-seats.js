"use strict";

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
    await queryInterface.bulkInsert("Seats", [
      {
        airplaneId: 1,
        row: "A",
        col: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: "B",
        col: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: "C",
        col: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: "D",
        col: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: "E",
        col: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: "F",
        col: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: "A",
        col: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: "B",
        col: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: "C",
        col: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: "D",
        col: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: "E",
        col: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: "F",
        col: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Seats", {});
  },
};
