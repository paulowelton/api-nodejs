const express = require('express')
const passeioController = require('../src/controllers/passeioController')

const router = express.Router()

router.get('/get', passeioController.getPasseio)

router.post('/post', passeioController.createPasseio)

router.delete('/delete/:id', passeioController.deletePasseio)

router.put('/update/:id', passeioController.updatePasseio)

module.exports = router