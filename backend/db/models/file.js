"use strict";
module.exports = (sequelize, DataTypes) => {
  const File = sequelize.define(
    "File",
    {
      name: DataTypes.STRING,
      url: DataTypes.STRING,
      folderId: DataTypes.INTEGER,
      fileTypeId: DataTypes.INTEGER,
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
    File.belongsTo(models.FileType, { foreignKey: "fileTypeId" });
  };
  return File;
};
