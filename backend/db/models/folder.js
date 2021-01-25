"use strict";
module.exports = (sequelize, DataTypes) => {
  const Folder = sequelize.define(
    "Folder",
    {
      name: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
    },
    {}
  );
  Folder.associate = function (models) {
    Folder.belongsTo(models.User, { foreignKey: "userId" });
    Folder.belongsTo(models.Category, { foreignKey: "categoryId" });
    Folder.hasMany(models.File, { foreignKey: "folderId" });
  };
  return Folder;
};
