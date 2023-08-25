const mongoose = require('mongoose')

// mongodb+srv://S_Immanuel:mTm9GtLwQqCvflfX@db.o58smqp.mongodb.net/db?retryWrites=true&w=majority
mongoose.set("strictQuery", false)
const connectDB = (req, res) => {
    try {
        mongoose.connect("mongodb+srv://S_Immanuel:mTm9GtLwQqCvflfX@db.o58smqp.mongodb.net/db?retryWrites=true&w=majority")
            .then(() => { console.log("connected to database") })
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB