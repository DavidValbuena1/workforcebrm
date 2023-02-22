const {DataTypes, ValidationError} = require('sequelize')
const chat = require('../models/chat')
const sequelize = require('../config/seq')

//Objeto user:
const Chat = chat (sequelize, DataTypes)

exports.getChats = async (req, res) =>{
    try{
        const allChats = await Chat.findAll()
        res.status(200)
        .json({
            "success":true,
            "data": allChats
        })
    }catch(error){
        if(error instanceof ValidationError){
            //recorrer el arreglo de errores:
            //foreach

            //map
            const msg_errores = error.errors.map((errorItem)=>{
                return errorItem.message
            })
            res.status(422).json({
                "succes": false,
                "error": msg_errores
            })
        }else{
            res.status(400).json({
                "succes": false,
                "error": "error en servidor"
            })
        }
    }
    
}


exports.getChatsGerente = async (req, res) =>{
    try{
        const allChats = await Chat.findAll({
            where:{
                gerente_id:req.params.id
            }
        })
        res.status(200)
        .json({
            "success":true,
            "data": allChats
        })
    }catch(error){
        if(error instanceof ValidationError){
            //recorrer el arreglo de errores:
            //foreach

            //map
            const msg_errores = error.errors.map((errorItem)=>{
                return errorItem.message
            })
            res.status(422).json({
                "succes": false,
                "error": msg_errores
            })
        }else{
            res.status(400).json({
                "succes": false,
                "error": "error en servidor"
            })
        }
    }
    
}

exports.getChatsAnalista = async (req, res) =>{
    try{
        const allChats = await Chat.findAll({
            where:{
                analista_id:req.params.id
            }
        })
        res.status(200)
        .json({
            "success":true,
            "data": allChats
        })
    }catch(error){
        if(error instanceof ValidationError){
            //recorrer el arreglo de errores:
            //foreach

            //map
            const msg_errores = error.errors.map((errorItem)=>{
                return errorItem.message
            })
            res.status(422).json({
                "succes": false,
                "error": msg_errores
            })
        }else{
            res.status(400).json({
                "succes": false,
                "error": "error en servidor"
            })
        }
    }
    
}

exports.getSingleChat = async (req, res)=>{
    try{
    const singleChat = await Chat.findByPk(req.params.id)
    if(!singleChat){
    res.status(200).json({
        "success":true,
        "errors": "Chat no encontrado"
    })
}else{
    res.status(200)
    .json({
        "success":true,
        "data": singleChat
    })
}
}catch(error){
    if(error instanceof ValidationError){
        //recorrer el arreglo de errores:
        //foreach

        //map
        const msg_errores = error.errors.map((errorItem)=>{
            return errorItem.message
        })
        res.status(422).json({
            "succes": false,
            "error": msg_errores
        })
    }else{
        res.status(400).json({
            "succes": false,
            "error": "error en servidor"
        })
}
}
}

exports.createChat = async (req, res)=>{
    try{
        //grabar nuevo usuario
        const newChat = await Chat.create(req.body)
        //enviar response con nuevo usuario
        res.status(201)
        .json({
            "success":true,
            "data": newChat
        })
    }catch(error){
        if(error instanceof ValidationError){
            //recorrer el arreglo de errores:
            //foreach

            //map
            const msg_errores = error.errors.map((errorItem)=>{
                return errorItem.message
            })
            res.status(422).json({
                "succes": false,
                "error": msg_errores
            })
        }else{
            res.status(400).json({
                "succes": false,
                "error": "error en servidor"
            })
        }
    }
}

exports.updateChat = async (req, res)=>{
    try{
        const singleChat = await Chat.findByPk(req.params.id)
        //si no existe
        if(!singleChat){
            res.status(200).json({
                "success":true,
                "errors": "Chat no encontrado"
            })
        }else{
        await Chat.update(req.body,{
            where:{
                id: req.params.id
            }
        })
        //volvemos a seleccionar
        const updateChat = await Chat.findByPk(req.params.id)
        //response con usuario actualizado
        res.status(200)
        .json({
            "success":true,
            "data": updateChat
        })
    }
    }catch(error){
        res.status(400).json({
            "succes": false,
            "error": "error en servidor"
        })
    }  
}

exports.deleteChat = async (req, res)=>{
    try{
        const singleChat = await Chat.findByPk(req.params.id)
        //si no existe
        if(!singleChat){
            res.status(200).json({
                "success":true,
                "errors": "Chat no encontrado"
            })
        }else{
            await Chat.destroy({
                where:{
                    id: req.params.id
                }
            })
        //volvemos a seleccionar
        const deletedChat = await Chat.findByPk(req.params.id)
        //response con usuario actualizado
        res.status(200).json({
        "success":true,
        "data": deletedChat
    })
   } 
}catch(error){
        res.status(400).json({
            "succes": false,
            "error": "error en servidor"
        })
    }
}