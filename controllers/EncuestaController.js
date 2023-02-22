const {DataTypes, ValidationError} = require('sequelize')
const Encuesta = require('../models/encuesta')
const sequelize = require('../config/seq')

//Objeto user:
const encuesta = Encuesta (sequelize, DataTypes)

exports.getEncuestas = async (req, res) =>{
    try{
    const allEncuestas = await encuesta.findAll({
    })
    res.status(200)
    .json({
        "success":true,
        "data": allEncuestas
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

exports.getSingleEncuesta = async (req, res)=>{
    try{
    const singleEncuesta = await encuesta.findByPk(req.params.id)
    if(!singleEncuesta){
        res.status(200).json({
            "success":true,
            "errors": "Encuesta no encontrado"
        })
    }else{
        res.status(200)
        .json({
            "success":true,
            "data": singleEncuesta
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

exports.createEncuesta = async (req, res)=>{
    try{
    const newEncuesta = await encuesta.create(req.body)
    res.status(201)
    .json({
        "success":true,
        "data": newEncuesta
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

exports.updateEncuesta = async (req, res)=>{
    try{
        const singleEncuesta = await encuesta.findByPk(req.params.id)
        //si no existe
        if(!singleEncuesta){
            res.status(200).json({
                "success":true,
                "errors": "Encuesta no encontrado"
            })
        }else{
        await encuesta.update(req.body,{
            where:{
                id: req.params.id
            }
        })
        //volvemos a seleccionar
        const updateEncuesta = await encuesta.findByPk(req.params.id)
        //response con usuario actualizado
        res.status(200)
        .json({
            "success":true,
            "data": updateEncuesta
        })
    }
    }catch(error){
        res.status(400).json({
            "succes": false,
            "error": "error en servidor"
        })
    }  
}

exports.deleteEncuesta = async (req , res)=>{
    await encuesta.destroy({
        where: {
            id: req.params.id
        }
      });
    res.status(200)
    .json({
        "succes" : true,
        "data" : `Se elimino el Encuesta: ${req.params.id}`
    })
}
