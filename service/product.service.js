let {cars} = require('../database');

class ProductService {

    createProduct(car) {
        cars.push(car);
        console.log(cars);
    }

    getProduct(id) {
        return cars.filter(car => car.id === id);
    }

    getAllProducts(){
        return cars;
    }

    updateProduct(id, car) {
        const carId = cars.findIndex(car => car.id === id);

        if(carId === -1)
            return;

        cars[carId] = {...cars[carId], ...car};
        console.log(cars);
    }

    deleteProduct(id) {
        cars = cars.filter(car => car.id !== id);
    }
}

module.exports = new ProductService;
