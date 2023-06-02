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
    await queryInterface.bulkInsert("Airports", [
      {
        cityId: 1,
        code: "BOM",
        name: "Chhatrapati Shivaji International Airport",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cityId: 2,
        code: "DEL",
        name: "Indira Gandhi International Airport",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cityId: 3,
        code: "BLR",
        name: "Kempegowda International Airport",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cityId: 4,
        code: "HYD",
        name: "Rajiv Gandhi International Airport",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cityId: 5,
        code: "AMD",
        name: "Sardar Vallabhbhai Patel International Airport",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cityId: 6,
        code: "MAA",
        name: "Chennai International Airport",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cityId: 7,
        code: "CCU",
        name: "Netaji Subhas Chandra Bose International Airport",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cityId: 8,
        code: "STV",
        name: "Surat International Airport",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cityId: 9,
        code: "PNQ",
        name: "Pune International Airport",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cityId: 10,
        code: "JAI",
        name: "Jaipur International Airport",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cityId: 11,
        code: "LKO",
        name: "Lucknow Airport",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cityId: 12,
        code: "KNU",
        name: "Kanpur Airport",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cityId: 13,
        code: "NAG",
        name: "Dr. Babasaheb Ambedkar International Airport",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cityId: 14,
        code: "VTZ",
        name: "Visakhapatnam Airport",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cityId: 15,
        code: "IDR",
        name: "Devi Ahilyabai Holkar International Airport",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cityId: 16,
        code: "DED",
        name: "Jolly Grand Airport",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cityId: 17,
        code: "BHO",
        name: "Raja Bhoj International Airport",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cityId: 18,
        code: "PAT",
        name: "Jay Prakash Narayan International Airport",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cityId: 19,
        code: "BDQ",
        name: "Vadodara Airport",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cityId: 20,
        code: "VIDX",
        name: "Hindon Airport",
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
    await queryInterface.bulkDelete("Airports", {});
  },
};
