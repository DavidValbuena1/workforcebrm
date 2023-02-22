const {DataTypes, ValidationError} = require('sequelize')
const Identificacion = require('../models/Identificacion')
const sequelize = require('../config/seq')


//Objeto user:
const identificacion = Identificacion (sequelize, DataTypes)

exports.getIdentificacions = async (req, res) =>{
    try{
    const allIdentificacions = await identificacion.findAll()
    res.status(200)
    .json({
        "success":true,
        "data": allIdentificacions
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

exports.getSingleIdentificacion = async (req, res)=>{
    try{
    const singleIdentificacion = await identificacion.findByPk(req.params.id)
    if(!singleIdentificacion){
        res.status(200).json({
            "success":true,
            "errors": "Tipo de Identificacion no encontrado"
        })
    }else{
        res.status(200)
        .json({
            "success":true,
            "data": singleIdentificacion
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

exports.createIdentificacion = async (req, res)=>{
    try{
    const newIdentificacion = await identificacion.create(req.body)
    res.status(201)
    .json({
        "success":true,
        "data": newIdentificacion
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

exports.updateIdentificacion = async (req, res)=>{
    try{
        const singleIdentificacion = await identificacion.findByPk(req.params.id)
        //si no existe
        if(!singleIdentificacion){
            res.status(200).json({
                "success":true,
                "errors": "Tipo de Identicacion no encontrado"
            })
        }else{
        await identificacion.update(req.body,{
            where:{
                id: req.params.id
            }
        })
        //volvemos a seleccionar
        const updateIdentificacion = await identificacion.findByPk(req.params.id)
        //response con usuario actualizado
        res.status(200)
        .json({
            "success":true,
            "data": updateIdentificacion
        })
    }
    }catch(error){
        res.status(400).json({
            "succes": false,
            "error": "error en servidor"
        })
    }  
}

exports.deleteIdentificacion = async (req , res)=>{
    await identificacion.destroy({
        where: {
            id: req.params.id
        }
      });
    res.status(200)
    .json({
        "succes" : true,
        "data" : `Se elimino el tipo identificacion: ${req.params.id}`
    })
}
