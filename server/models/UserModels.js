const { Schema, model} = require('mongoose')

const userSchema = new Schema( {
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        selected: false
    },
    links: {
        type: [String],
    },
    originalLinks: {
        type:[String]
    }
})

const User = model('user', userSchema)

module.exports = User
