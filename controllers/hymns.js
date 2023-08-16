const Hymn = require("../model/hymn")

const createHymn = (req, res) => {
    const hymn = new Hymn({
        title: req.body.title,
        hymn: req.body.hymn,
        by: req.body.by
    })

    hymn.save().then((data) => { res.json(data) }).catch((err) => { res.send(err) })
}

const getHymn = (req, res) => {
    Hymn.find().then((hymn) => { res.json(hymn) }).catch((err) => { res.send(err) })
}


module.exports = {
    createHymn,
    getHymn
}