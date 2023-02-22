const {DataTypes, ValidationError} = require('sequelize')
const notificacion = require('../models/notificacion')
const sequelize = require('../config/seq')

//Objeto user:
const Notificacion = notificacion (sequelize, DataTypes)

exports.getNotificacions = async (req, res) =>{
    try{
        const allNotificacions = await Notificacion.findAll()
        console.log(allNotificacions);
        res.status(200)
        .json({
            "success":true,
            "data": allNotificacions
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

exports.getSingleNotificacion = async (req, res)=>{
    try{
    const singleNotificacion = await Notificacion.findByPk(req.params.id)
    if(!singleNotificacion){
    res.status(200).json({
        "success":true,
        "errors": "Notificacion no encontrada"
    })
}else{
    res.status(200)
    .json({
        "success":true,
        "data": singleNotificacion
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

exports.createNotificacion = async (req, res)=>{
    try{
        //grabar nuevo usuario
        const newNotificacion = await Notificacion.create(req.body)
        //enviar response con nuevo usuario
        res.status(201)
        .json({
            "success":true,
            "data": newNotificacion
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

exports.updateNotificacion = async (req, res)=>{
    try{
        const singleNotificacion = await Notificacion.findByPk(req.params.id)
        //si no existe
        if(!singleNotificacion){
            res.status(200).json({
                "success":true,
                "errors": "Notificacion no encontrada"
            })
        }else{
        await Notificacion.update(req.body,{
            where:{
                id: req.params.id
            }
        })
        //volvemos a seleccionar
        const updateNotificacion = await Notificacion.findByPk(req.params.id)
        //response con usuario actualizado
        res.status(200)
        .json({
            "success":true,
            "data": updateNotificacion
        })
    }
    }catch(error){
        res.status(400).json({
            "succes": false,
            "error": "error en servidor"
        })
    }  
}

exports.deleteNotificacion = async (req, res)=>{
    try{
        const singleNotificacion = await Notificacion.findByPk(req.params.id)
        //si no existe
        if(!singleNotificacion){
            res.status(200).json({
                "success":true,
                "errors": "Notificacion no encontrada"
            })
        }else{
            await Notificacion.destroy({
                where:{
                    id: req.params.id
                }
            })
        //volvemos a seleccionar
        const deletedNotificacion = await Notificacion.findByPk(req.params.id)
        //response con usuario actualizado
        res.status(200).json({
        "success":true,
        "data": deletedNotificacion
    })
   } 
}catch(error){
        res.status(400).json({
            "succes": false,
            "error": "error en servidor"
        })
    }
}


exports.getNotificacionsByUser_IdAndEstado = async (req, res) =>{
    try{
        const allNotificacions = await Notificacion.findAll({
            where:{
                user_id:req.body.user_id,
                estado:req.body.estado
            }
        })
        console.log(allNotificacions);
        res.status(200)
        .json({
            "success":true,
            "data": allNotificacions
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

exports.getNotificacionsByUser_IdAndEstadoAndModulo = async (req, res) =>{
    try{
        const allNotificacions = await Notificacion.findAll({
            where:{
                user_id:req.body.user_id,
                estado:req.body.estado,
                modulo: req.body.modulo
            }
        })
        console.log(allNotificacions);
        res.status(200)
        .json({
            "success":true,
            "data": allNotificacions
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
