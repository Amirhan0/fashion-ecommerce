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
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
}, {timestamps: true})


module.exports = mongoose.model('Products', newProducts)