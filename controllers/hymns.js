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

const deleteHymn = async (req, res, next) => {
    const hymn = await Hymn.findById(req.params.id)

    if (!hymn) {
        res.status(400)
        throw new Error("Hymn Unavailable")
    }

    hymn.remove()
    res.status(200)
}


module.exports = {
    createHymn,
    getHymn
}