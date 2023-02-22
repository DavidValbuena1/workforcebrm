const express = require('express')
const {getMarcas,
    getSingleMarca,
    updateMarca,
    deleteMarca,
    createMarca,
    getMarcasUnidad,
    getMarcasEstado
} = require('../controllers/MarcaController')

const router = express.Router()

router.route('/')
.post(createMarca)
.get(getMarcas)

router.route('/:id')
.get(getSingleMarca)
.put(updateMarca)
.delete(deleteMarca)

router.route('/estado/:estado').get(getMarcasEstado)
router.route('/tipoMarca').post(getMarcasUnidad)

module.exports = router