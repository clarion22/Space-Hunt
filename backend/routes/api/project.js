const express = require('express');
const asyncHandler = require('express-async-handler');
const { Discussion, Review, Project } = require('../../db/models');
const router = express.Router();

router.get(`/:id/discussions/:projectId`, asyncHandler(async (req, res) => {
  const id = Number.parseInt(req.params.id);
  const discussions = await Discussion.findAll({ where: { projectId: id}, include:  Review})
  res.json(discussions);
}))

router.post('/:id/discussions', asyncHandler(async (req, res) => {
  const { content, projectId, userId, } = req.body;
  const discussion = await Discussion.add({ content, projectId, userId });

  return res.json({ discussion });
}));

router.delete('/:id/discussions/:discussionId', asyncHandler(async (req, res) => {

  const {discussionId} = req.params;
  const discussion = await Discussion.findByPk(discussionId);
  if (!discussion) throw new Error("Comment doesn't exist");

  await Discussion.destroy({where: { id: discussion.id }});
  return res.json(discussion.id);
}))

//load all projects
router.get('', asyncHandler(async (req, res) => {
  const projects = await Project.findAll({});
  res.json(projects);
}))

router.get('/discussions', asyncHandler(async (req, res) => {
  const discussions = await Discussion.findAll({include:  Review})
  res.json(discussions);
}))

module.exports = router;
