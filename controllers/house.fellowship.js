const HouseFellowship = require("../model/house.fellowship")

const createHouseFellowship = (req, res) => {
    const houseFellowship = new HouseFellowship({
        title: req.body.title,
        document: req.body.document,
        by: req.body.by
    })

    houseFellowship.save().then((data) => { res.json(data) }).catch((err) => { res.send(err) })
}

const getHouseFellowship = (req, res) => {
    HouseFellowship.find().then((data) => { res.json(data) }).catch((err) => { res.send(err) })
}

const deleteHouseFellowship = async (req, res, next) => {
    const hf = await HouseFellowship.findById(req.params.id)

    if (!hf) {
        res.status(400)
        throw new Error("Unable to find HouseFellowship")
    }
    hf.remove()
    res.status(200)
}

module.exports = {
    createHouseFellowship,
    getHouseFellowship,
    deleteHouseFellowship
}