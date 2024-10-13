const express = require('express')
const router = express.Router()
const { getCategories } = require('../controller/category-controller')

router.get('/api/categories', getCategories)

module.exports = router
