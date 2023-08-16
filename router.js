const express = require('express')
const { createOpenHeavens, getOpenHeavens } = require('./controllers/open.heavens')
const { createHymn, getHymn } = require('./controllers/hymns')
const { createSundaySchool, getSundaySchool } = require('./controllers/sunday.school')
const { createHouseFellowship, getHouseFellowship } = require('./controllers/house.fellowship')
const { createUser, getUser } = require('./controllers/user.controller')
const app = express()

const router = express.Router()

// post request
router.post('/openHeavens', createOpenHeavens)
router.post('/hymn', createHymn)
router.post('/sundaySchool', createSundaySchool)
router.post('/houseFellowship', createHouseFellowship)
router.post('/user', createUser)

// get request
router.get('/openHeavens', getOpenHeavens)
router.get('/hymn', getHymn)
router.get('/sundaySchool', getSundaySchool)
router.get('/houseFellowship', getHouseFellowship)
router.get('/user', getUser)


module.exports = router