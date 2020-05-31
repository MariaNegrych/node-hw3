const {Router} = require('express');

const productRouter = Router();

const {productController} = require('../../controllers');
const {productMiddleware: {productIdValidation, productIsExists}} = require('../../middlewares')

productRouter.get('/', productController.getAllProducts);
productRouter.post('/', productIdValidation, productController.createProduct);

productRouter.use('/:dOfProduct', productIsExists)
productRouter.get('/:idOfProduct', productController.getProduct);
productRouter.put('/:idOfProduct',productIdValidation, productController.updateProduct);
productRouter.delete('/:idOfProduct', productController.deleteProduct);

module.exports = productRouter;
