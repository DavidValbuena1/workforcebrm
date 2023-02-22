const express = require('express')
const {getChats,
    getSingleChat,
    updateChat,
    deleteChat,
    createChat,
    getChatsAnalista,
    getChatsGerente
} = require('../controllers/ChatController')

const router = express.Router()

router.route('/')
.get(getChats)
.post(createChat)

router.route('/analista/:id')
.get(getChatsAnalista)

router.route('/gerente/:id')
.get(getChatsGerente)

router.route('/:id')
.get(getSingleChat)
.put(updateChat)
.delete(deleteChat)

module.exports = router