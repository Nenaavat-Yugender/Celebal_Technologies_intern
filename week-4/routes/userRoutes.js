// User route definitions
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route for GET /users
router.get('/', userController.getUser);

module.exports = router;
