const express = require('express')
const router = express.Router()
const {createOrder, getOrder, validateOrder} = require('../controller/order-controller')

router.post('/api/orders', validateOrder, createOrder)
router.get('/api/orders', getOrder)
module.exports = router