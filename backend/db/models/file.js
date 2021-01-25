'use strict';
module.exports = (sequelize, DataTypes) => {
  const File = sequelize.define('File', {
    name: DataTypes.STRING,
    url: DataTypes.STRING,
    folderId: DataTypes.INTEGER,
    fileTypeId: DataTypes.INTEGER
  }, {});
  File.associate = function(models) {
    // associations can be defined here
  };
  return File;
};