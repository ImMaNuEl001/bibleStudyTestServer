const { json } = require('express')
const mongoose = require('mongoose')

const hymnSchema = new mongoose.Schema({
    title: String,
    hymn: JSON,
    by: String
})

module.exports = mongoose.model("Hymn", hymnSchema)