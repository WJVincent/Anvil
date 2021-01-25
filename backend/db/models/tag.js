"use strict";
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define(
    "Tag",
    {
      name: DataTypes.STRING,
    },
    {}
  );
  Tag.associate = function (models) {
    const TagFileMap = {
      foreignKey: "tagId",
      through: "FileTag",
      otherKey: "fileId",
    };
    Tag.belongsToMany(models.File, TagFileMap);
  };
  return Tag;
};
