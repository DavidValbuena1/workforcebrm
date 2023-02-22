const express = require('express')
const {getSesions,
    getSingleSesion,
    updateSesion,
    deleteSesion,
    createSesion,

} = require('../controllers/SesionController')

const router = express.Router()

router.route('/')
.get(getSesions)
.post(createSesion)

router.route('/:id')
.get(getSingleSesion)
.put(updateSesion)
.delete(deleteSesion)

module.exports = router