const express = require('express')
const {getCargos,
    getSingleCargo,
    updateCargo,
    deleteCargo,
    createCargo,
    getCargosByEstado
} = require('../controllers/CargoController')

const router = express.Router()

router.route('/')
.get(getCargos)
.post(createCargo)

router.route('/:id')
.get(getSingleCargo)
.put(updateCargo)
.delete(deleteCargo)

router.route('/estado/:estado').get(getCargosByEstado)
module.exports = router