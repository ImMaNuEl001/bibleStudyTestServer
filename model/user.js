const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name: String,
    email: String,
    matric: String
})

module.exports = mongoose.model("Users", UserSchema)