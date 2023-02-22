const {DataTypes, ValidationError} = require('sequelize')
const Informe = require('../models/Informe')
const sequelize = require('../config/seq')


//Objeto user:
const informe = Informe (sequelize, DataTypes)

exports.getInformes = async (req, res) =>{
    try{
    const allInformes = await informe.findAll()
    res.status(200)
    .json({
        "success":true,
        "data": allInformes
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

exports.getSingleInforme = async (req, res)=>{
    try{
    const singleInforme = await informe.findByPk(req.params.id)
    if(!singleInforme){
        res.status(200).json({
            "success":true,
            "errors": "Tipo de Informe no encontrado"
        })
    }else{
        res.status(200)
        .json({
            "success":true,
            "data": singleInforme
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

exports.createInforme = async (req, res)=>{
    try{
    const newInforme = await informe.create(req.body)
    res.status(201)
    .json({
        "success":true,
        "data": newInforme
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

exports.updateInforme = async (req, res)=>{
    try{
        const singleInforme = await informe.findByPk(req.params.id)
        //si no existe
        if(!singleInforme){
            res.status(200).json({
                "success":true,
                "errors": "Tipo denforme no encontrado"
            })
        }else{
        await informe.update(req.body,{
            where:{
                id: req.params.id
            }
        })
        //volvemos a seleccionar
        const updateInforme = await informe.findByPk(req.params.id)
        //response con usuario actualizado
        res.status(200)
        .json({
            "success":true,
            "data": updatetipoInforme
        })
    }
    }catch(error){
        res.status(400).json({
            "succes": false,
            "error": "error en servidor"
        })
    }  
}

exports.deleteInforme = async (req , res)=>{
    await informe.destroy({
        where: {
            id: req.params.id
        }
      });
    res.status(200)
    .json({
        "succes" : true,
        "data" : `Se elimino el tipo informe: ${req.params.id}`
    })
}
