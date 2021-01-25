"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Categories",
      [
        { name: "Notes", createdAt: new Date(), updatedAt: new Date() },
        { name: "School", createdAt: new Date(), updatedAt: new Date() },
        { name: "Work", createdAt: new Date(), updatedAt: new Date() },
        { name: "Todo", createdAt: new Date(), updatedAt: new Date() },
        { name: "Schedule", createdAt: new Date(), updatedAt: new Date() },
        { name: "Writing", createdAt: new Date(), updatedAt: new Date() },
        { name: "Projects", createdAt: new Date(), updatedAt: new Date() },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Categories", null, {});
  },
};
