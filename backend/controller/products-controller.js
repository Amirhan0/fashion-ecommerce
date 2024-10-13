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


const getProductId = async (req,res) => {
  const {id} = req.params
  try {
    const product = await Products.findById(id)
    if (!product) {
      return res.status(404).json({ message: "Продукт не найден" });
    }
    res.json(product)
  } catch (error) {
    console.log(error)
    res.status(500).json({message: 'Ошибка на сервере'})
  }
}
module.exports = { getProducts, getProductId };