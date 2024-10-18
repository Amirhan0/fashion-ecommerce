const Category = require("../models/categorys");

const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    console.error("Ошибка при получении категорий:", error);
    res.status(500).json({ message: "Ошибка сервера" });
  }
};

const postCategoryes = async (req,res) => {
  const { nameCategory, categoryId } = req.body  
  if (!nameCategory || !categoryId) {
    res.status(400).json({message: 'Все поля обязательны'})
  }
  try {
   const newCategory = new Category({
    nameCategory, categoryId
   })
await newCategory.save()
res.status(201).json(newCategory)
  } catch (error) {
    console.error('Ошибка при добавление категорий:', error)
    res.status(500).json({message: 'Ошибка на сервере при добавлении'})
  }
}


const deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteCategory = await Category.findByIdAndDelete(id);
    if (!deleteCategory) {
      return res.status(404).json({ message: "Категория не найдена" });
    }
    res.json(deleteCategory);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Ошибка на сервере" });
  }
};

const updateCategory = async (req, res) => {
  const { categoryId } = req.body;
  const { nameCategory } = req.body; 
  console.log("Category ID:", categoryId);
  console.log("Updated nameCategory:", nameCategory);
  
  try {
    const updatedCategory = await Category.findOneAndUpdate(
      { categoryId }, 
      { nameCategory },
      { new: true } 
    );

    if (!updatedCategory) {
      return res.status(404).json({ message: "Категория не найдена" });
    }
    res.json(updatedCategory);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Ошибка на сервере" });
  }
};

module.exports = {
  getCategories,
  deleteCategory,
  updateCategory,
  postCategoryes
};
