import product from "../models/Product.js";
export const Products = async (req, res) => {
    try {
        const products = await product.find();
        res.status(200).json(products); 
      } catch (error) {
        res.status(500).json(error); 
      }
};
export const newProducts = async (req, res) => {
  try {
    const newProduct = await new product({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
    });
    const Product = await newProduct.save();
    res.status(200).json(Product);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const ProductDetail = async (req, res) => {
    try {
        const productId = req.params.id;
        const ProductDetail = await product.findById(productId);
    
        if (!ProductDetail) {
          return res.status(404).json({ message: "Product not found" });
        }
    
        res.status(200).json(ProductDetail);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
};
export const updateProduct = async (req, res) => {
    try {
        const productId = req.params.id; 
        const updatedData = req.body;
    
        const updatedProduct = await product.findByIdAndUpdate(
          productId,
          updatedData,
        );
    
        if (!updatedProduct) {
          return res.status(404).json({ message: "Product not found" }); 
        }
    
        res.status(200).json(updatedProduct); 
      } catch (error) {
        res.status(500).json({ message: error.message }); 
      }
};
export const deleteProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const deletedProduct = await product.findByIdAndDelete(productId);
    
        if (!deletedProduct) {
          return res.status(404).json({ message: "Product not found" });
        }
    
        res.status(200).json({ message: "Product deleted successfully" });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
};
