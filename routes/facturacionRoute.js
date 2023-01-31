const facturacionPageController = require('../controllers/facturacionPageController')
const router = require('express').Router()
router.get('/facturacion', facturacionPageController)
module.exports = router
