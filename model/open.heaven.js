const mongoose = require('mongoose')

const openHeavenSchema = new mongoose.Schema({
    title: String,
    document: JSON,
    by: String,
    date: String
})

module.exports = mongoose.model("OpenHeaven", openHeavenSchema)