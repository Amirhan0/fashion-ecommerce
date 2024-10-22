const express = require('express')
const router = express.Router()
const {createOrder, getOrder, validateOrder, deleteOrder} = require('../controller/order-controller')

router.post('/api/orders', validateOrder, createOrder)
router.get('/api/orders', getOrder)
router.delete   ('/api/orders/:id', deleteOrder)
module.exports = router