const mongoose = require("mongoose")

const MessageSchema = new mongoose.Schema({
    title: String,
    message: String,
    postdate: {
        type: Date,
        default: () => new Date()
    }
})

const model = mongoose.model("NewsLetters", MessageSchema);

module.exports = model;