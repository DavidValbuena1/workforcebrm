const express = require('express')
const {getNotificacions,
    getSingleNotificacion,
    updateNotificacion,
    deleteNotificacion,
    createNotificacion,
    getNotificacionsByUser_IdAndEstadoAndModulo,
    getNotificacionsByUser_IdAndEstado,

} = require('../controllers/NotificacionController')

const router = express.Router()

router.route('/')
.get(getNotificacions)
.post(createNotificacion)

router.route('/:id')
.get(getSingleNotificacion)
.put(updateNotificacion)
.delete(deleteNotificacion)

router.route('/user_id').post(getNotificacionsByUser_IdAndEstado)

router.route('/estado').post(getNotificacionsByUser_IdAndEstadoAndModulo);


module.exports = router