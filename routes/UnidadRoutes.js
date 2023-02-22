const express = require('express')
const {getUnidades,
    getSingleUnidad,
    updateUnidad,
    deleteUnidad,
    createUnidad,
    getUnidadesEstado
} = require('../controllers/UnidadController')

const router = express.Router()

router.route('/')
.post(createUnidad)
.get(getUnidades)
router.route('/:id')
.get(getSingleUnidad)
.put(updateUnidad)
.delete(deleteUnidad);

router.route('/estado/:estado').get(getUnidadesEstado)

module.exports = router