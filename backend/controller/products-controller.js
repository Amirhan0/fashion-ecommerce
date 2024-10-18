const Products = require("../models/products");

const getProducts = async (req, res) => {
  try {
    const products = await Products.find();
    res.status(200).json(products);
  } catch (error) {
    console.error("Ошибка при получении товаров:", error);
    res.status(500).json({ message: "Ошибка сервера" });
  }
};

const getProductId = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Products.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Продукт не найден" });
    }
    res.json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Ошибка на сервере" });
  }
};

const addProduct = async (req, res) => {
  const { image, name, description, size, price, categoryId } = req.body;

  if (
    !image ||
    !name ||
    !description ||
    !size ||
    !price ||
    categoryId === undefined
  ) {
    return res.status(400).json({ message: "Все поля обязательны" });
  }
  const parsedCategoryId = Number(categoryId);
  if (isNaN(parsedCategoryId)) {
    return res.status(400).json({ message: "categoryId должно быть числом" });
  }
  try {
    const newProduct = new Products({
      image,
      name,
      description,
      size,
      price,
      categoryId: parsedCategoryId,
    });

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.error("Ошибка при добавлении продукта:", error);
    res.status(500).json({ message: "Ошибка сервера" });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const updateProduct = await Products.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updateProduct) {
      return res.status(404).json({ message: "Продукт не найден" });
    }
    res.json(updateProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Ошибка на сервере" });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteProduct = await Products.findByIdAndDelete(id);
    if (!deleteProduct) {
      return res.status(404).json({ message: "Продукт не найден" });
    }
    res.json(deleteProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Ошибка на сервере" });
  }
};

module.exports = {
  getProducts,
  getProductId,
  addProduct,
  updateProduct,
  deleteProduct,
};
