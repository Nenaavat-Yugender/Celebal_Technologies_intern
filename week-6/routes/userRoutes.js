const express = require('express');
const router = express.Router();
const {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  updateAllUsers,
  deleteUser,
  deleteAllUsers
} = require('../controllers/userController');

// CRUD routes for User
router.post('/', createUser);
router.get('/', getUsers);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.put('/', updateAllUsers);
router.delete('/:id', deleteUser);
router.delete('/', deleteAllUsers);

module.exports = router;
