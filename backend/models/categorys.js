const mongoose = require('mongoose')
const Schema = mongoose.Schema

const newCategory = new Schema({
    categoryName: {
        type: String,
        required: true
    }
})
const Category = mongoose.model('Category', newCategory)
module.exports = Category