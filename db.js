const mongoose = require('mongoose')

const connectDB = (req, res) => {
    try {
        mongoose.connect("mongodb://127.0.0.1:27017/users")
            .then(() => { console.log("connected to database") })
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB