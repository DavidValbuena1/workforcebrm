const {DataTypes, ValidationError} = require('sequelize')
const mensaje = require('../models/mensaje')
const sequelize = require('../config/seq')

//Objeto user:
const Mensaje = mensaje (sequelize, DataTypes)

exports.getMensajes = async (req, res) =>{
    try{
        const allMensajes = await Mensaje.findAll()
        res.status(200)
        .json({
            "success":true,
            "data": allMensajes
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

exports.getSingleMensaje = async (req, res)=>{
    try{
    const singleMensaje = await Mensaje.findByPk(req.params.id)
    if(!singleMensaje){
    res.status(200).json({
        "success":true,
        "errors": "Mensaje no encontrado"
    })
}else{
    res.status(200)
    .json({
        "success":true,
        "data": singleMensaje
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

exports.createMensaje = async (req, res)=>{
    try{
        //grabar nuevo usuario
        const newMensaje = await Mensaje.create(req.body)
        //enviar response con nuevo usuario
        res.status(201)
        .json({
            "success":true,
            "data": newMensaje
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

exports.updateMensaje = async (req, res)=>{
    try{
        const singleMensaje = await Mensaje.findByPk(req.params.id)
        //si no existe
        if(!singleMensaje){
            res.status(200).json({
                "success":true,
                "errors": "Mensaje no encontrado"
            })
        }else{
        await Mensaje.update(req.body,{
            where:{
                id: req.params.id
            }
        })
        //volvemos a seleccionar
        const updateMensaje = await Mensaje.findByPk(req.params.id)
        //response con usuario actualizado
        res.status(200)
        .json({
            "success":true,
            "data": updateMensaje
        })
    }
    }catch(error){
        res.status(400).json({
            "succes": false,
            "error": "error en servidor"
        })
    }  
}

exports.deleteMensaje = async (req, res)=>{
    try{
        const singleMensaje = await Mensaje.findByPk(req.params.id)
        //si no existe
        if(!singleMensaje){
            res.status(200).json({
                "success":true,
                "errors": "Mensaje no encontrado"
            })
        }else{
            await Mensaje.destroy({
                where:{
                    id: req.params.id
                }
            })
        //volvemos a seleccionar
        const deletedMensaje = await Mensaje.findByPk(req.params.id)
        //response con usuario actualizado
        res.status(200).json({
        "success":true,
        "data": deletedMensaje
    })
   } 
}catch(error){
        res.status(400).json({
            "succes": false,
            "error": "error en servidor"
        })
    }
}

exports.getMensajesById = async (req, res) =>{
    try{
        const allMensajes = await Mensaje.findAll({
            where:{
                chat_id:req.params.id
            }
        })
        res.status(200)
        .json({
            "success":true,
            "data": allMensajes
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

exports.getMensajesByName = async (req, res) =>{
    try{
        const allMensajes = await Mensaje.findAll({
            where:{
                usuarioRecibio:req.params.name,
                estado: "No Leido"
            }
        })
        res.status(200)
        .json({
            "success":true,
            "data": allMensajes
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