const franquiciasPageController = require('../controllers/franquiciasPageController')
const router = require('express').Router()
router.get('/franquicias', franquiciasPageController)
module.exports = router
