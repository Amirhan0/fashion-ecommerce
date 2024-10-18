const express = require('express')
const router = express.Router()
const { getProducts, getProductId, updateProduct, deleteProduct, addProduct} = require('../controller/products-controller')

router.get('/api/products', getProducts)
router.post('/api/products', addProduct)
router.get('/api/products/:id', getProductId)
router.put('/api/products/:id', updateProduct)
router.delete('/api/products/:id', deleteProduct)

module.exports = router
