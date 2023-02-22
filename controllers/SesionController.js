const {DataTypes, ValidationError} = require('sequelize')
const Sesion = require('../models/sesion')
const sequelize = require('../config/seq')

//Objeto user:
const sesion = Sesion (sequelize, DataTypes)

exports.getSesions = async (req, res) =>{
    try{
    const allSesions = await sesion.findAll({
    })
    res.status(200)
    .json({
        "success":true,
        "data": allSesions
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

exports.getSingleSesion = async (req, res)=>{
    try{
    const singleSesion = await sesion.findByPk(req.params.id)
    if(!singleSesion){
        res.status(200).json({
            "success":true,
            "errors": "Sesion no encontrado"
        })
    }else{
        res.status(200)
        .json({
            "success":true,
            "data": singleSesion
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

exports.createSesion = async (req, res)=>{
    try{
    const newSesion = await sesion.create(req.body)
    res.status(201)
    .json({
        "success":true,
        "data": newSesion
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

exports.updateSesion = async (req, res)=>{
    try{
        const singleSesion = await sesion.findByPk(req.params.id)
        //si no existe
        if(!singleSesion){
            res.status(200).json({
                "success":true,
                "errors": "Sesion no encontrado"
            })
        }else{
        await sesion.update(req.body,{
            where:{
                id: req.params.id
            }
        })
        //volvemos a seleccionar
        const updateSesion = await sesion.findByPk(req.params.id)
        //response con usuario actualizado
        res.status(200)
        .json({
            "success":true,
            "data": updateSesion
        })
    }
    }catch(error){
        res.status(400).json({
            "succes": false,
            "error": "error en servidor"
        })
    }  
}

exports.deleteSesion = async (req , res)=>{
    await sesion.destroy({
        where: {
            id: req.params.id
        }
      });
    res.status(200)
    .json({
        "succes" : true,
        "data" : `Se elimino el Sesion: ${req.params.id}`
    })
}
