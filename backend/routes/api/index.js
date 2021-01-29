const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const projectRouter = require('./project.js');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/projects', projectRouter);

module.exports = router;
