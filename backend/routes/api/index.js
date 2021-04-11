const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const projectRouter = require('./project.js');
const reviewRouter = require('./review.js');
const imageRouter = require('./images.js');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/projects', projectRouter);

router.use('/reviews', reviewRouter);

router.use('/images', imageRouter);

module.exports = router;
