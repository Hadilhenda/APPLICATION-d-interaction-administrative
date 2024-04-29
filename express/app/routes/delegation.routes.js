const router = require('express').Router()

const delegations = require('../controllers/delegation.controller.js')

router.post('/', delegations.create)

router.get('/', delegations.findAll)

router.get('/published', delegations.findAllPublished)

router.get('/:id', delegations.findOne)

router.put('/:id', delegations.update)

router.delete('/:id', delegations.delete)

router.delete('/', delegations.deleteAll)

module.exports = router
