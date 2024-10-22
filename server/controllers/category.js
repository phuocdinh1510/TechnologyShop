import category from "../models/Category.js";
export const Categorys = async (req, res) => {
    try {
        const categorys = await category.find();
        res.status(200).json(categorys); 
      } catch (error) {
        res.status(500).json(error); 
      }
};
export const newCategory = async (req, res) => {
  try {
    const newCategory = await new category({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
    });
    const Category = await newCategory.save();
    res.status(200).json(Category);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateCategory = async (req, res) => {
    try {
        const categoryId = req.params.id; 
        const updatedData = req.body;
    
        const updatedCategory = await category.findByIdAndUpdate(
            categoryId,
          updatedData,
        );
    
        if (!updatedCategory) {
          return res.status(404).json({ message: "Product not found" }); 
        }
    
        res.status(200).json(updatedCategory); 
      } catch (error) {
        res.status(500).json({ message: error.message }); 
      }
};
export const deleteCategory = async (req, res) => {
    try {
        const categoryId = req.params.id;
        const deletedCategory = await category.findByIdAndDelete(categoryId);
    
        if (!deletedCategory) {
          return res.status(404).json({ message: "Product not found" });
        }
    
        res.status(200).json({ message: "Product deleted successfully" });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
};
