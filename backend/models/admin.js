const mongoose = require('mongoose')
const Schema = mongoose.Schema

const newAdmin = new Schema({
    emailAdmin: {
        type: String,
        required: true
    }, 
    passwordAdmin : {
        type: String, 
        required: true
    }
})

const Admin = mongoose.model('admin', newAdmin)
module.exports = Admin