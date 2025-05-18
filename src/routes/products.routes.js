const express = require ("express");
const router = express.Router();
const productsController = require('../controllers/products.controller');
const upload = require('../middlewares/upload.middleware');

router.get('/', productsController.getAllProducts);
router.get('/:id', productsController.getProduct);
router.patch('/:id', productsController.updateProduct);
router.post('/', upload.single('image'), productsController.createProduct);


module.exports = router;