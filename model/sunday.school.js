const mongoose = require('mongoose')

const sundaySchema = new mongoose.Schema({
    title: String,
    document: JSON,
    by: String
})

module.exports = mongoose.model("SundaySchool", sundaySchema)