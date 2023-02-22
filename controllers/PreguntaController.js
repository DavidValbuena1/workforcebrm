const {DataTypes, ValidationError} = require('sequelize')
const Pregunta = require('../models/pregunta')
const sequelize = require('../config/seq')

//Objeto user:
const pregunta = Pregunta (sequelize, DataTypes)

exports.getPreguntas = async (req, res) =>{
    try{
    const allPreguntas = await pregunta.findAll({
       
    })
    res.status(200)
    .json({
        "success":true,
        "data": allPreguntas
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

exports.getSinglePregunta = async (req, res)=>{
    try{
    const singlePregunta = await pregunta.findByPk(req.params.id)
    if(!singlePregunta){
        res.status(200).json({
            "success":true,
            "errors": "Pregunta no encontrado"
        })
    }else{
        res.status(200)
        .json({
            "success":true,
            "data": singlePregunta
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

exports.createPregunta = async (req, res)=>{
    try{
    const newPregunta = await pregunta.create(req.body)
    res.status(201)
    .json({
        "success":true,
        "data": newPregunta
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

exports.updatePregunta = async (req, res)=>{
    try{
        const singlePregunta = await pregunta.findByPk(req.params.id)
        //si no existe
        if(!singlePregunta){
            res.status(200).json({
                "success":true,
                "errors": "Pregunta no encontrado"
            })
        }else{
        await pregunta.update(req.body,{
            where:{
                id: req.params.id
            }
        })
        //volvemos a seleccionar
        const updatePregunta = await pregunta.findByPk(req.params.id)
        //response con usuario actualizado
        res.status(200)
        .json({
            "success":true,
            "data": updatePregunta
        })
    }
    }catch(error){
        res.status(400).json({
            "succes": false,
            "error": "error en servidor"
        })
    }  
}

exports.deletePregunta = async (req , res)=>{
    await pregunta.destroy({
        where: {
            id: req.params.id
        }
      });
    res.status(200)
    .json({
        "succes" : true,
        "data" : `Se elimino el Pregunta: ${req.params.id}`
    })
}
