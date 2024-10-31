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
                _id: user._id,
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



// GET ЗАПРОС ADMIN
const getUsers = async (req, res) => {
    try {
      const users = await Users.find();
      res.status(200).json(users);
    } catch (error) {
      console.error("Ошибка при получении пользователей:", error);
      res.status(500).json({ message: "Ошибка сервера" });
    }
  };

// DELETE USER ADMIN
const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedUser = await Users.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ message: "Пользователь не найден" });
        }
        res.json({ message: "Пользователь успешно удален", user: deletedUser });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Ошибка на сервере" });
    }
};


// PUT ЗАПРОС ДЛЯ ОБНОВЛЕНИЯ ПРОФИЛЯ ПОЛЬЗОВАТЕЛЯ
const updateUser = async (req, res) => {
    console.log("Body:", req.body);
    console.log("Params:", req.params);
    const { id } = req.params;
    const { name: nameUser, phone: phoneUser, email: emailUser, imgUrl: imageUser } = req.body;

    try {
        const updatedUser = await Users.findByIdAndUpdate(
            id,
            { nameUser, phoneUser, emailUser, imageUser },
            { new: true, runValidators: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "Пользователь не найден" });
        }

        res.json({
            message: "Профиль успешно обновлен",
            user: {
                nameUser: updatedUser.nameUser,
                phoneUser: updatedUser.phoneUser,
                emailUser: updatedUser.emailUser,
                imageUser: updatedUser.imageUser,
            },
        });
    } catch (error) {
        console.error("Ошибка при обновлении пользователя:", error);
        res.status(500).json({ message: "Ошибка на сервере" });
    }
};


module.exports = {
    registerUser,
    loginUser,
    getUsers,
    deleteUser,
    updateUser
}