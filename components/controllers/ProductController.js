
const productService = require('../services/ProductSevice')
const date = require('../../utils/date')

exports.getProducts = async () => {
    let data = await productService.getProducts()
    data = data.map((product, index ) => {
        product = {
            released: date.format(product.released),
            _id: product._id,
            name: product.name,
            price: product.price,
            quantity: product.quantity,
            image: product.image,
            description: product.description,
            category_id: product.category_id,
            index: index + 1
        }
        return product;
    })
    return data;
}

exports.getProductById = async (id) => {
    let product = await productService.getProductById(id)
    console.log("====> ", product._id);

    product = {
        released: date.format(product.released),
        _id: product._id,
        name: product.name,
        price: product.price,
        quantity: product.quantity,
        image: product.image,
        description: product.description,
        category_id: product.category_id,
    }

    return product;
}

exports.insert = async (body) => {
    await productService.insert(body)
}

exports.delete = async (id) => {
    await productService.delete(id);
}

exports.update = async (id, product) => {
    await productService.update(id, product)
}

exports.register = async (email, password) => {
    await userService.register(email, password);
}