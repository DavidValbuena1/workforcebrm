const express = require('express')
const {getIdentificacions,
    getSingleIdentificacion,
    updateIdentificacion,
    deleteIdentificacion,
    createIdentificacion
} = require('../controllers/IdentificacionController')

const router = express.Router()

router.route('/')
.get(getIdentificacions)
.post(createIdentificacion)

router.route('/:id')
.get(getSingleIdentificacion)
.put(updateIdentificacion)
.delete(deleteIdentificacion)

module.exports = router