const express = require("express");
const router = express.Router();

// root
router.use('/', require('./rootRoutes.js'));

module.exports = router;
