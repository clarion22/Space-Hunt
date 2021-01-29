const express = require('express');
const asyncHandler = require('express-async-handler');
const { Discussion, Review } = require('../../db/models');
const router = express.Router();

router.post('', asyncHandler(async (req, res) => {
  const {parent_id, user_id, content} = req.body;
  const reply = await Review.add({parent_id, user_id, content});
  return res.json({ reply });
}));

router.delete('/:id', asyncHandler(async (req, res) => {
  const {id} = req.params;
  const reply = await Review.findByPk(id);
  if (!reply) throw new Error("Reply doesn't exist");

  await Review.destroy({where: { id: reply.id }});
  return res.json(reply);
}))

module.exports = router;
