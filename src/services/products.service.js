const { getProducts, getProductsById, saveProducts, saveProduct } = require('../models/products.model');

const getAll = async () => {
     const products = await getProducts();
        if (!products || products.length === 0) {
            throw new Error('Produtos não encontrados');
        }
        return products;
}

const getProduct = async (id) => {
    const product = await getProductsById(id);
    if(!product || product.length === 0) {
        throw new Error('Produto não encontrado.');
    }
    return product;
}

const productUpdate = async (id, data) => {
    const product = await getProductsById(id);

    const updatedProduct = {...product, ...data};

    const products = await getProducts();
    const index = products.findIndex(
        prod => prod.id === Number(id)
    )
    products[index] = updatedProduct;
    await saveProducts(products);
    return products[index];
}

const createProduct = async (data, imagePath) => {
    const products = await getProducts();

    const newProduct = {
        ...data,
        id: Date.now(),
        price: parseFloat(data.price),
        stock: parseInt(data.stock),
        image: imagePath
    }

    await saveProduct(newProduct);
    return newProduct;

}

module.exports = {
    getAll,
    getProduct,
    productUpdate,
    createProduct
}