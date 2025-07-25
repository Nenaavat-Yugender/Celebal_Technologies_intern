// Contact route definitions
const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');

// Route for POST /contact
router.get('/', serviceController.getService);

module.exports = router;
