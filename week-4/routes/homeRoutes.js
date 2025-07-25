// Home route definitions
const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

// Route for GET /
router.get('/', homeController.getHome);

module.exports = router;
