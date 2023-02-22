const express = require('express')
const {getSubcategorias,
    getSingleSubcategoria,
    updateSubcategoria,
    deleteSubcategoria,
    createSubcategoria,
    getSubcategoriasByCategoria
} = require('../controllers/SubcategoriaController')

const router = express.Router()

router.route('/')
.get(getSubcategorias)
.post(createSubcategoria)

router.route('/:id')
.get(getSingleSubcategoria)
.put(updateSubcategoria)
.delete(deleteSubcategoria)

router.route('/categoria/:id').get(getSubcategoriasByCategoria)

module.exports = router