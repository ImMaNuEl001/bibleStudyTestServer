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

module.exports = {
    createHouseFellowship,
    getHouseFellowship
}