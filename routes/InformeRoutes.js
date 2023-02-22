const express = require('express')
const {getInformes,
    getSingleInforme,
    updateInforme,
    deleteInforme,
    createInforme
} = require('../controllers/InformeController')

const router = express.Router()

router.route('/')
.get(getInformes)
.post(createInforme)

router.route('/:id')
.get(getSingleInforme)
.put(updateInforme)
.delete(deleteInforme)

module.exports = router