"use strict";
module.exports = (sequelize, DataTypes) => {
  const FileType = sequelize.define(
    "FileType",
    {
      name: DataTypes.STRING,
    },
    {}
  );
  FileType.associate = function (models) {
    FileType.hasMany(models.File, { foreignKey: "fileTypeId" });
  };
  return FileType;
};
