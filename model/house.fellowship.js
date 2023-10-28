const mongoose = require('mongoose')

const houseFellowshipSchema = new mongoose.Schema({
    title: String,
    document: JSON,
    by: String,
    date: String
})

module.exports = mongoose.model("HouseFellowship", houseFellowshipSchema)