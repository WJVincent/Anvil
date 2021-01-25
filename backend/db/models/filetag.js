"use strict";
module.exports = (sequelize, DataTypes) => {
  const FileTag = sequelize.define(
    "FileTag",
    {
      fileId: DataTypes.INTEGER,
      tagId: DataTypes.INTEGER,
    },
    {}
  );
  FileTag.associate = function (models) {};
  return FileTag;
};
