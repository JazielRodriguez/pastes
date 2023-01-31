const atencionPageController = require('../controllers/atencionPageController')
const router = require('express').Router()
router.get('/atencion', atencionPageController)
module.exports = router
