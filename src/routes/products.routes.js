const express = require ("express");
const router = express.Router();
const productsController = require('../controllers/products.controller');

router.get('/', productsController.getAllProducts);
router.get('/:id', productsController.getProduct);
router.patch('/:id', productsController.updateProduct);


module.exports = router;