const express = require('express')
const router = express.Router()

const { postAdmin } = require('../controller/admin-controller')

router.post('/api/admins', postAdmin)
module.exports = router