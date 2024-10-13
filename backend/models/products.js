const mongoose = require('mongoose')
const Schema = mongoose.Schema

const newProducts = new Schema({
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    size: {
        type: Array,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    categoryId: {
        type: Number,
        required: true
    },
}, {timestamps: true})

const Products = mongoose.model('Products', newProducts)
module.exports = Products