const express = require('express');
const router = express.Router();
const {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser
} = require('../controllers/userController');

// Define CRUD routes
router.post('/', createUser);       // Create
router.get('/', getAllUsers);       // Read all
router.put('/:id', updateUser);     // Update
router.delete('/:id', deleteUser);  // Delete

module.exports = router;
