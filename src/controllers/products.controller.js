const productsService = require('../services/products.service');

const getAllProducts = async (request, response) => {
    console.log(request);

    //todo = 404 case

    try {
        const products = await productsService.getAll();
        return response.status(200).json(products);
    } catch (error) {
        console.error(error);
        response.status(500).json({message: "Error: " + error.message});
    }
} 

const getProduct = async (request, response) => {
    try {
        const product = await productsService.getProduct(request.params.id);
        return response.status(200).json(product);
    } catch (error) {
        console.error(error);
        if(error.message === "Produto não encontrado.") {
            return response.status(404).json({message: "Error: " + error.message});
        }
        response.status(500).json({message: "Error:" + error.message});
    }
}

const updateProduct = async (request, response) => {
    try {
        const updated = await productsService.productUpdate(request.params.id, request.body);
        return response.status(200).json(updated);
        
    } catch (error) {
        response.status(500).json({message: "Error:" + error.message});
    }
}

module.exports = {
    getAllProducts,
    getProduct,
    updateProduct
}