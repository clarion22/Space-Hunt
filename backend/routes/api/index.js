const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const projecRouter = require('./project.js');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/projects', projecRouter);

module.exports = router;
