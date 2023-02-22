const express = require('express')
const {getUsers,
    getSingleUser,
    updateUser,
    deleteUser,
    createUser,
    getUserByEmailAndPassword,
    getUsersByEstado,
    getUsersById,
    getUsersByMes
} = require('../controllers/UserController')

const router = express.Router()

router.route('/').post(createUser).get(getUsers)
router.route('/validar').post(getUserByEmailAndPassword)
router.route('/estado/:estado').get(getUsersByEstado)
router.route('/editar/:id').put(updateUser)
router.route('/:id').get(getSingleUser).delete(deleteUser)
router.route('/mes').post(getUsersByMes)
router.route('/cargo/:id').get(getUsersById)

module.exports = router