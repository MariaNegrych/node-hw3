module.exports = (req, res, next) => {
    try {
        const {id, name, power, price, year} = req.body;

        if (!id || !name || !power || !price || !year) {
            throw new Error('Product is not valid!');
        }
        if (name.length < 3) {
            throw new Error('Name is not valid!');
        }
        if (year < 2000) {
            throw new Error('Car is so old');
        }

        next();

    } catch (e) {
        res.end(e.message);
    }
};
