const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newUsers = new Schema({
    nameUser: {
        type: String,
        required: true,
    },
    phoneUser: {
        type: String,
        required: true,
        validate: {
            validator: (v) => /^(\+7|8|7)\d{9}$/.test(v), 
            message: (props) => `${props.value} - не является действительным номером телефона!`,
        },
    },
    emailUser: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
            message: (props) => `${props.value} не является действительным адресом электронной почты!`,
        },
    },
    passwordUser: {
        type: String,
        required: true,
        minlength: 6,
    },
    imageUser: String,
}, { timestamps: true });

const Users = mongoose.model('User', newUsers);

module.exports = Users
