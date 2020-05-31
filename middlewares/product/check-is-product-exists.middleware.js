const {productService} = require('../../service')

module.exports = async (res, req, next) => {
    const idOfProduct = req.params;

    if (+idOfProduct < 0) {
        return res.status(400).json({message: "wrong id"});
    }

    const product = await productService.getProduct(idOfProduct);

    if (!product){
        return res.sendStatus(404)
    }

    req.body = product;

    next();
}
