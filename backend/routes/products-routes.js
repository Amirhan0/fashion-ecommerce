const express = require('express')
const router = express.Router()
const { getProducts } = require('../controller/products-controller')

router.get('/api/products', getProducts)

module.exports = router
