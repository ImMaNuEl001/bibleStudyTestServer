const NewsLetters = require("../model/news_letters");

const getNewsLetter = async (req, res, next) => {
    await NewsLetters.find().then((data) => { res.json(data) }).catch((err) => { res.status(400) });
}

const createNewsLetter = async (req, res, next) => {
    const news_letters = await new NewsLetters({
        title: req.body.title,
        message: req.body.message,
    })

    await news_letters.save().then((data) => { res.json(data) });
}

const deleteNewsLetter = async (req, res, next) => {
    const news_letters = NewsLetters.findById(req.params.id)

    if (!news_letters) {
        res.status(400)
        throw new Error("Cannot find this file")
    }
    await news_letters.remove()
    res.status(200).json({ id: req.params.id })

}

module.exports = {
    createNewsLetter,
    deleteNewsLetter,
    getNewsLetter
}