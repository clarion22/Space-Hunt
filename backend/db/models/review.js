'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    parent_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    content: DataTypes.TEXT
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.Discussion, { foreignKey: 'parent_id'})
  };

  return Review;
};
