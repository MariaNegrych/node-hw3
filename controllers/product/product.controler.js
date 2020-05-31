const {productService} = require('../../service');

module.exports = {

    createProduct: async (req, res) => {
        try {
            // const {id, name, power, price, year} = req.body;
            const car = req.body;

            // productService.createProduct(id, name, power, price, year);
            await productService.createProduct(car)

            res.sendStatus(204);
        } catch (e) {
            res.json(e)
        }

    },

    getProduct: async (req, res) => {
        try {
            const {idOfProduct} = req.params;
            const car = await productService.getProduct(+idOfProduct);

            res.json(car);
        } catch (e) {
            res.json(e)
        }

    },

    getAllProducts: async (req, res) => {
        try {
            const cars = await productService.getAllProducts();

            res.json(cars);
        } catch (e) {
            res.json(e)
        }

    },

    updateProduct: async (req, res) => {
        try {
            const {idOfProduct} = req.params;
            // const {id, name, power, price, year} = req.body;
            const car = req.body;

            // productService.updateProduct(+idOfProduct, id, name, power, price, year);
            await productService.updateProduct(+idOfProduct, car)

            res.sendStatus(204);
        } catch (e) {
            res.json(e)
        }

    },

    deleteProduct: async (req, res) => {
        try {
            const {idOfProduct} = req.params;

            await productService.deleteProduct(+idOfProduct);

            res.sendStatus(204);
        } catch (e) {
            res.json(e)
        }

    }

};
