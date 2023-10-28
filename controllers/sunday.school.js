const SundaySchool = require("../model/sunday.school")

const createSundaySchool = (req, res) => {
    const sundaySchool = new SundaySchool({
        title: req.body.title,
        document: req.body.document,
        by: req.body.by,
        date: req.body.date
    })

    sundaySchool.save().then((data) => { res.json(data) }).catch((err) => { res.send(err) })
}

const getSundaySchool = (req, res) => {
    SundaySchool.find().then((data) => { res.json(data) }).catch((err) => { res.send(err) })
}

const deleteSundaySchool = async (req, res) => {
    const ss = await SundaySchool.findById(req.params.id)

    if (!ss) {
        res.status(400)

        throw new Error('Sunday school not found')
    }
    ss.remove()
    res.status(200).json({ id: req.params.id })
}

module.exports = {
    createSundaySchool,
    getSundaySchool,
    deleteSundaySchool
}