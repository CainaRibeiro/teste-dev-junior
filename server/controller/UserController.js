const User = require('../models/UserModels')

class UserController {
    async createUser(req, res) {
        const newUser = new User(req.body)
        try {
            const savedUser = await newUser.save()
            if(!savedUser) throw new Error('An error occur when creating new user')
            res.status(201).json(savedUser)
        } catch(error) {
            res.status(500).json({message: error.message})
        }
    }
    async getUsers(req, res) {
        try {
            const getUsersList = await User.find()
            if(!getUsersList) throw new error('No users found')
            res.status(200).json(getUsersList)
        } catch(error) {
            res.status(500).json({message: error.message})
        }
    }
    async getUserById(req, res) {
        const { id } = req.params
        try {
            const user = await User.findById(id)
            if(!user) throw new Erro('No user found')
            res.status(200).json(user)
        } catch(error) {
            res.status(500).json({message: error.message})
        }
    }
    async putLinks(req, res) {
        const { id } = req.params
        try {
            const user = await User.findByIdAndUpdate(id, req.body)
            if(!user) throw new Erro('An error occur when updating user')
            res.status(202).json(user)
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }
}

module.exports = new UserController()