const express = require('express')
const router = express.Router()
const { getCategories, postCategoryes, deleteCategory, updateCategory } = require('../controller/category-controller')

router.get('/api/categories', getCategories)
router.post('/api/categories', postCategoryes)
router.delete('/api/categories/:id', deleteCategory)
router.put('/api/categories/:id', updateCategory)
module.exports = router
