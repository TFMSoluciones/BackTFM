import Product from "../models/product";

export const createProduct = async (req, res) => {
    console.log(req.body);

    const { name, category, price, imgUrl, description } = req.body

    const newProduct = new Product({
        name,
        category,
        price,
        imgUrl,
        description
    });

    const productSaved = await newProduct.save();

    res.status(201).json(productSaved);
}

export const getProducts = async (req, res) => {
    const products = await Product.find();
    res.json(products);
}

export const getProduct = async (req, res) => {
    const product = await Product
        .findById(req.params.productId);
    res.json(product);
}

export const updateProduct = async (req, res) => {
    const productUpdated = await Product
        .findByIdAndUpdate(
            req.params.productId,
            req.body,
            { new: true }
        );
    res.status(200).json(productUpdated);
}

export const deleteProduct = async (req, res) => {
    const { productId } = req.params;
    await Product.findByIdAndDelete(productId);
    res.status(204).json();
}