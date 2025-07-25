const express = require('express');
const router = express.Router();
const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  updateAllProducts,
  deleteProduct,
  deleteAllProducts
} = require('../controllers/productController');

// CRUD routes for Product
router.post('/', createProduct);
router.get('/', getProducts);
router.get('/:id', getProductById);
router.put('/:id', updateProduct);
router.put('/', updateAllProducts);
router.delete('/:id', deleteProduct);
router.delete('/', deleteAllProducts);

module.exports = router;
