const SundaySchool = require("../model/sunday.school")

const createSundaySchool = (req, res) => {
    const sundaySchool = new SundaySchool({
        title: req.body.title,
        document: req.body.document,
        by: req.body.by
    })

    sundaySchool.save().then((data) => { res.json(data) }).catch((err) => { res.send(err) })
}

const getSundaySchool = (req, res) => {
    SundaySchool.find().then((data) => { res.json(data) }).catch((err) => { res.send(err) })
}

module.exports = {
    createSundaySchool,
    getSundaySchool
}