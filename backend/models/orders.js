const mongoose = require('mongoose')
const Schema = mongoose.Schema

const newOrder = new Schema({
    recipient: {
        firstName: {type: String, required: true},
        lastName: { type: String, required: true},
        middleName: {type: String, required: true},
        phoneNumber: {type: String, required: true}
    },

    deliveryAddress: {
        city: {type: String, required: true},
        street: {type: String, required: true},
        home: {type: String},
        apartment: {type: String}
    },
    paymentMethod: {type: String, required: true}
})

const Order = mongoose.model('orders', newOrder)
module.exports = Order