const mongoose = require('mongoose')

// mongodb+srv://S_Immanuel:mTm9GtLwQqCvflfX@db.o58smqp.mongodb.net/db?retryWrites=true&w=majority

const connectDB = (req, res) => {
    try {
        mongoose.connect(`mongodb://127.0.0.1:27017`)
            .then(() => { console.log("connected to database") })
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB