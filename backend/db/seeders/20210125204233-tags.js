"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Tags",
      [
        { name: "Ideas", createdAt: new Date(), updatedAt: new Date() },
        { name: "Action items", createdAt: new Date(), updatedAt: new Date() },
        { name: "Thoughts", createdAt: new Date(), updatedAt: new Date() },
        { name: "To-Do", createdAt: new Date(), updatedAt: new Date() },
        { name: "Code-Snippet", createdAt: new Date(), updatedAt: new Date() },
        { name: "Documentation", createdAt: new Date(), updatedAt: new Date() },
        { name: "Challenge", createdAt: new Date(), updatedAt: new Date() },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Tags", null, {});
  },
};
