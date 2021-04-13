const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { multipleFileDownload } = require('../../awsS3.js');

router.get('/projectimg/:projectId', asyncHandler(async (req, res) => {
   const { projectId } = req.params;
   const response = await multipleFileDownload(projectId)
   res.send(response);
}))


module.exports = router;
