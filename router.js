const express = require('express')
const { createOpenHeavens, getOpenHeavens, deleteOpenHeavens } = require('./controllers/open.heavens')
const { createHymn, getHymn, deleteHymn } = require('./controllers/hymns')
const { createSundaySchool, getSundaySchool, deleteSundaySchool } = require('./controllers/sunday.school')
const { createHouseFellowship, getHouseFellowship, deleteHouseFellowship } = require('./controllers/house.fellowship')
const { createUser, getUser } = require('./controllers/user.controller')
const { deleteOne } = require('./model/open.heaven')
// const { getAll } = require('./controllers/admin.controller')
const app = express()

const router = express.Router()

// post request
router.post('/openHeavens', createOpenHeavens)
router.post('/hymn', createHymn)
router.post('/sundaySchool', createSundaySchool)
router.post('/houseFellowship', createHouseFellowship)
router.post('/user', createUser)
// router.post('/admin', getAll)

// get request
router.get('/openHeavens', getOpenHeavens)
router.get('/hymn', getHymn)
router.get('/sundaySchool', getSundaySchool)
router.get('/houseFellowship', getHouseFellowship)
router.get('/user', getUser)

//delete request
router.delete('/openHeavens/:id', deleteOpenHeavens)
router.delete('/sundaySchool/:id', deleteSundaySchool)
router.delete('/houseFellowship/:id', deleteHouseFellowship)
router.delete('/hymn/:id', deleteHymn)


module.exports = router