const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { multipleFileDownload } = require('../../awsS3.js');

router.get('/projectimg', asyncHandler(async (req, res) => {
   const response = await multipleFileDownload()
   res.send(response);
}))


module.exports = router;
