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

  Review.add = async function ({ parent_id, user_id, content}) {
    const reply = await Review.create({
      parent_id,
      user_id,
      content
    });
    return await Review.findByPk(reply.id);
  }

  return Review;
};
