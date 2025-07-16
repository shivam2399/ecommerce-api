const {
    getAllProducts,
    getProductById,
    addNewProduct
} = require('../services/productService');

exports.getAllProducts = (req, res) => {
    const result = getAllProducts();
    res.send(result);
};

exports.getProductById = (req, res) => {
    const { id } = req.params;
    const result = getProductById(id);
    res.send(result);
};

exports.addNewProduct = (req, res) => {
    const result = addNewProduct(req.body);
    res.send(result);
};
