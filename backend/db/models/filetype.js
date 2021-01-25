'use strict';
module.exports = (sequelize, DataTypes) => {
  const FileType = sequelize.define('FileType', {
    name: DataTypes.STRING
  }, {});
  FileType.associate = function(models) {
    // associations can be defined here
  };
  return FileType;
};