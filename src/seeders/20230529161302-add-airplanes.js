"use strict";

const { Op } = require("sequelize");

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
    await queryInterface.bulkInsert("Airplanes", [
      {
        modelNumber: "Boeing757",
        capacity: 239,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: "Boeing767",
        capacity: 375,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: "IlyushinIl96",
        capacity: 420,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: "Boeing787",
        capacity: 440,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: "AirbusA330",
        capacity: 460,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: "AirbusA340",
        capacity: 475,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: "AirbusA350XWB",
        capacity: 480,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: "Boeing777",
        capacity: 550,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: "Boeing747",
        capacity: 605,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: "AirbusA380",
        capacity: 853,
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

    /**  This will delete rows where modelNumber is AirbusA380 or Boeing777
     *
     *   Example:
     *   await queryInterface.bulkDelete("Airplanes", {
     *   [Op.or]: [{ modelNumber: "AirbusA380" }, { modelNumber: "Boeing777" }],
     *   });
     */

    /**
     *   This will delete all the enteries in the table
     */
    await queryInterface.bulkDelete("Airplanes", {});
  },
};
