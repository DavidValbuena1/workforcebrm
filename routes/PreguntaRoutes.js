const express = require('express')
const {getPreguntas,
    getSinglePregunta,
    updatePregunta,
    deletePregunta,
    createPregunta,

} = require('../controllers/PreguntaController')

const router = express.Router()

router.route('/')
.get(getPreguntas)
.post(createPregunta)

router.route('/:id')
.get(getSinglePregunta)
.put(updatePregunta)
.delete(deletePregunta)

module.exports = router