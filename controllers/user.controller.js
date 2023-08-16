const User = require('../model/user')

const createUser = async (req, res, next) => {
    const user = await new User({
        name: req.body.name,
        matric: req.body.matric,
        email: req.body.email
    })

    user.save()
        .then((data) => { res.json(data) }).catch((err) => { res.send(err) })
}

const getUser = (req, res) => {
    User.find().then((data) => { res.json(data) }).catch((err) => { res.send(err) })

}

module.exports = {
    createUser,
    getUser
}