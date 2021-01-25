'use strict';
module.exports = (sequelize, DataTypes) => {
  const Discussion = sequelize.define('Discussion', {
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    projectId: DataTypes.INTEGER
  }, {});
  Discussion.associate = function(models) {
    // associations can be defined here
  };
  return Discussion;
};