const express = require('express');
const asyncHandler = require('express-async-handler');
const { Discussion } = require('../../db/models');
const router = express.Router();

router.get(`/:id`, asyncHandler(async (req, res) => {
  const id = Number.parseInt(req.params.id);
  const discussions = await Discussion.findAll({ where: { projectId: id}})
  // console.log(discussions);
  discussions.forEach(ele => console.log(ele.content))
}))

module.exports = router;
