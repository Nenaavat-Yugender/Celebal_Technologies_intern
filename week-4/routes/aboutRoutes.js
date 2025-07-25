// About route definitions
const express = require('express');
const router = express.Router();
const aboutController = require('../controllers/aboutController');

// Route for GET /about
router.get('/', aboutController.getAbout);

module.exports = router;
