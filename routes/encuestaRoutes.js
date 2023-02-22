const express = require('express')
const {getEncuestas,
    getSingleEncuesta,
    updateEncuesta,
    deleteEncuesta,
    createEncuesta,

} = require('../controllers/EncuestaController')

const router = express.Router()

router.route('/')
.get(getEncuestas)
.post(createEncuesta)

router.route('/:id')
.get(getSingleEncuesta)
.put(updateEncuesta)
.delete(deleteEncuesta)

module.exports = router