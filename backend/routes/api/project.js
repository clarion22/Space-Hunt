const express = require('express');
const asyncHandler = require('express-async-handler');
const { Discussion, Review } = require('../../db/models');
const router = express.Router();

router.get(`/:id`, asyncHandler(async (req, res) => {
  const id = Number.parseInt(req.params.id);
  const discussions = await Discussion.findAll({ where: { projectId: id}, include:  Review})
  console.log('backend api project get');
  console.log(discussions)
  res.json(discussions);
}))

router.post('/:id/discussions', asyncHandler(async (req, res) => {
  const { content, projectId, userId, } = req.body;
  const discussion = await Discussion.add({ content, projectId, userId });

  return res.json({ discussion });
}));


module.exports = router;
