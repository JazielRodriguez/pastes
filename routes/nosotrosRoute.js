const nosotrosPageController = require('../controllers/nosotrosPageController')
const router = require('express').Router()
router.get('/nosotros', nosotrosPageController)
module.exports = router
