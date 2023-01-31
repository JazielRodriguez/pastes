const pastesPageController = require('../controllers/pastesPageController')
const router = require('express').Router()
router.get('/pastes', pastesPageController)
module.exports = router
