const express = require('express')
const app = express()
const connectDB = require("./db")
const router = require('./router')
// const cors = require('cor')


const PORT = process.env.PORT || 3000
connectDB()
app.use(express.json())

app.use(router)

app.listen(3000, (req, res) => {
    console.log(`app connected at localhost:${PORT}`)
})