const mongoose = require('mongoose')
const Schema = mongoose.Schema

const newCategory = new Schema({
    categoryName: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Category', newCategory)