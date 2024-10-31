const express = require('express')
const router = express.Router()

const {
    registerUser, loginUser,
    getUsers, deleteUser, updateUser
} = require('../controller/user-controller')

router.post('/api/registration', registerUser)
router.post('/api/login', loginUser)
router.get('/api/users', getUsers)
router.delete('/api/users/:id', deleteUser)
router.put('/api/users/:id', updateUser);
module.exports = router
