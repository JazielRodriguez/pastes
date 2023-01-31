const sucursalesPageController = require('../controllers/sucursalesPageController')

const router = require('express').Router()
router.get('/sucursales', sucursalesPageController)
module.exports = router
