const dotenv = require('dotenv')
dotenv.config()
const Users = require('../models/users')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const JWT_SECRET = process.env.JWT_SECRET 
// POST ЗАПРОС REGISTRATION
const registerUser = async (req,res) => {
    const {nameUser, phoneUser, emailUser,passwordUser, imageUser} = req.body

    try {
        const existingUser = await Users.findOne({emailUser})
        if (existingUser) {
            return res.status(400).json({message: 'Пользователь уже существует!'})
        }
        const hashPassword = await bcrypt.hash(passwordUser, 10)

        const newUser = new Users({
            nameUser,
            phoneUser,
            emailUser,
            passwordUser: hashPassword,
            imageUser
        })
        await newUser.save()

        const token = jwt.sign({id: newUser._id}, JWT_SECRET, {expiresIn: '1h'})
        res.status(201).json({
            message: 'Вы успешно зарегистрировались!',
            token,
            user: {
                nameUser: newUser.nameUser,
                phoneUser: newUser.phoneUser,
                emailUser: newUser.emailUser,
                imageUser: newUser.imageUser,
            },
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Ошибка на сервере'})
    }
}


// POST ЗАПРОС LOGIN

const loginUser = async (req,res) => {
    const {emailUser, passwordUser} = req.body

    try {
        const user = await Users.findOne({ emailUser})
        if (!user) {
            return res.status(400).json({message: 'Неверная почта или пароль'})
        }

        const isMatch = await bcrypt.compare(passwordUser, user.passwordUser)
        if (!isMatch) {
            return  res.status(400).json({message: "Неверная почта или пароль"})
        }

        const token = jwt.sign({id: user._id}, JWT_SECRET, {expiresIn: '1h'})

        res.json({
            message: 'Вы успешно вошли!',
            token,
            user: {
                nameUser: user.nameUser,
                phoneUser: user.phoneUser,
                emailUser: user.emailUser,
                imageUser: user.imageUser,
            },
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Ошибка на сервере"})
    }
}
module.exports = {
    registerUser,
    loginUser
}