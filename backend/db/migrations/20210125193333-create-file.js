"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Files", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      url: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },
      folderId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Folders" },
      },
      fileTypeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "FileTypes" },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Files");
  },
};
