const express = require('express')
const controller = require('../../controller/UserController')
const router = express.Router()

router.post('/users', controller.createUser)

router.get('/users', controller.getUsers)

router.get('/users/:id', controller.getUserById)

router.patch('/users/:id', controller.putLinks)

module.exports = router