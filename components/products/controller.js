
const productService = require('./service')

exports.getProducts = async () => {
    const data = await productService.getProducts()
    return data;
}

exports.getProductById = async (id) => {
    const product = await productService.getProductById(id)
    return product;
}