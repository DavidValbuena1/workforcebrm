const express = require('express')
const {getMensajes,
    getSingleMensaje,
    updateMensaje,
    deleteMensaje,
    createMensaje,
    getMensajesById,
    getMensajesByName
} = require('../controllers/MensajeController')

const router = express.Router()

router.route('/')
.get(getMensajes)
.post(createMensaje)

router.route('/:id')
.get(getSingleMensaje)
.put(updateMensaje)
.delete(deleteMensaje)

router.route('/mensajesPorChatId/:id').get(getMensajesById)
router.route('/mensajesPorNombre/:name').get(getMensajesByName)

module.exports = router