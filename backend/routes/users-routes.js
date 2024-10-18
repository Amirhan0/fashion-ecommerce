const express = require('express')
const router = express.Router()

const {
    registerUser, loginUser
} = require('../controller/user-controller')

router.post('/api/registration', registerUser)
router.post('/api/login', loginUser)
module.exports = router
