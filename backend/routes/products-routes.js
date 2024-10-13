const express = require('express')
const router = express.Router()
const { getProducts, getProductId} = require('../controller/products-controller')

router.get('/api/products', getProducts)
router.get('/api/products/:id', getProductId)

module.exports = router
