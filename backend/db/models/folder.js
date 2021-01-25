'use strict';
module.exports = (sequelize, DataTypes) => {
  const Folder = sequelize.define('Folder', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {});
  Folder.associate = function(models) {
    // associations can be defined here
  };
  return Folder;
};