const indexPageController = require('../controllers/indexPageController')

const router = require('express').Router()
router.get('/', indexPageController)

module.exports = router
