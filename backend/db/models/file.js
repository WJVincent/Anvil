"use strict";
module.exports = (sequelize, DataTypes) => {
  const File = sequelize.define(
    "File",
    {
      name: DataTypes.STRING,
      content: DataTypes.TEXT,
      folderId: DataTypes.INTEGER,
    },
    {}
  );
  File.associate = function (models) {
    const FileTagMap = {
      foreignKey: "fileId",
      through: "FileTag",
      otherKey: "tagId",
    };

    File.belongsToMany(models.Tag, FileTagMap);
    File.belongsTo(models.Folder, { foreignKey: "folderId" });
  };
  return File;
};
