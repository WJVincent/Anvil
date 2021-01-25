"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "FileTypes",
      [
        { name: "py", createdAt: new Date(), updatedAt: new Date() },
        { name: "js", createdAt: new Date(), updatedAt: new Date() },
        { name: "css", createdAt: new Date(), updatedAt: new Date() },
        { name: "txt", createdAt: new Date(), updatedAt: new Date() },
        { name: "html", createdAt: new Date(), updatedAt: new Date() },
        { name: "md", createdAt: new Date(), updatedAt: new Date() },
        { name: "org", createdAt: new Date(), updatedAt: new Date() },
        { name: "json", createdAt: new Date(), updatedAt: new Date() },
        { name: "yaml", createdAt: new Date(), updatedAt: new Date() },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("FileTypes", null, {});
  },
};
