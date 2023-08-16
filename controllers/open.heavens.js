const express = require('express')
const OpenHeavens = require('../model/open.heaven')

const createOpenHeavens = (req, res) => {
    const openHeavens = new OpenHeavens({
        title: req.body.title,
        document: req.body.document,
        by: req.body.by
    })

    openHeavens.save().then((data) => { res.json(data) }).catch((err) => { res.send(err) })
}

const getOpenHeavens = (req, res) => {
    OpenHeavens.find().then((data) => { res.json(data) }).catch((err) => { res.send(err) })
}


module.exports = {
    createOpenHeavens,
    getOpenHeavens
}