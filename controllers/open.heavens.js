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

const deleteOpenHeavens = async (req, res) => {
    const oh = await OpenHeavens.findById(req.params.id);

    if (!oh) {
        res.status(400)
        throw new Error('OH not found');
    }
    await oh.remove()
    res.status(200).json({ id: req.params.id })
}


module.exports = {
    createOpenHeavens,
    getOpenHeavens,
    deleteOpenHeavens
}