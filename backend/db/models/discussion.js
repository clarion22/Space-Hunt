'use strict';
module.exports = (sequelize, DataTypes) => {
  const Discussion = sequelize.define('Discussion', {
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    projectId: DataTypes.INTEGER
  }, {});
  Discussion.associate = function(models) {
    Discussion.hasMany(models.Review, { foreignKey: 'parent_id'})
  };

  Discussion.add = async function ({ content, userId, projectId }) {
    const discussion = await Discussion.create({
      content,
      projectId,
      userId,
    });
    return await Discussion.findByPk(discussion.id);
  }

  return Discussion;
};
