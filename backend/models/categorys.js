const mongoose = require('mongoose')
const Schema = mongoose.Schema

const newCategory = new Schema({
    categoryName: {
        type: String,
        required: true
    },
    categoryId: {
        type: Number,
        required: true
    }
})
const Category = mongoose.model('categorys', newCategory)
module.exports = Category