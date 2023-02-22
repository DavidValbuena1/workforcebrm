const express = require('express')
const {getCategorias,
    getSingleCategoria,
    updateCategoria,
    deleteCategoria,
    createCategoria,
    getCategoriasByCargo
} = require('../controllers/CategoriaController')

const router = express.Router()

router.route('/')
.get(getCategorias)
.post(createCategoria)

router.route('/:id')
.get(getSingleCategoria)
.put(updateCategoria)
.delete(deleteCategoria)

router.route('/cargo/:id').get(getCategoriasByCargo)

module.exports = router