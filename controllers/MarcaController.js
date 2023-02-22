const {DataTypes, ValidationError} = require('sequelize')
const marca = require('../models/marca')
const sequelize = require('../config/seq')

//Objeto user:
const Marca = marca (sequelize, DataTypes)

exports.getMarcas = async (req, res) =>{
    try{
        const allMarcas = await Marca.findAll()
        res.status(200)
        .json({
            "success":true,
            "data": allMarcas
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

exports.getMarcasEstado = async (req, res) =>{
    try{
        const allMarcas = await Marca.findAll({
            
            where:{
                estado: req.params.estado
            }
        })
        res.status(200)
        .json({
            "success":true,
            "data": allMarcas
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

exports.getMarcasUnidad = async (req, res) =>{
    try{
        const allMarcas = await Marca.findAll({
            
            where:{
                tipoMarca: req.body.tipoMarca,
                estado: req.body.estado
            }
        })
        res.status(200)
        .json({
            "success":true,
            "data": allMarcas
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

exports.getSingleMarca = async (req, res)=>{
    try{
    const singleMarca = await Marca.findByPk(req.params.id)
    if(!singleMarca){
    res.status(200).json({
        "success":true,
        "errors": "marca no encontrada"
    })
}else{
    res.status(200)
    .json({
        "success":true,
        "data": singleMarca
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

exports.createMarca = async (req, res)=>{
    try{
        //grabar nuevo usuario
        const newMarca = await Marca.create(req.body)
        //enviar response con nuevo usuario
        res.status(201)
        .json({
            "success":true,
            "data": newMarca
        })
    }catch(error){
        console.log(error);
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

exports.updateMarca = async (req, res)=>{
    console.log(req.body);
    try{
        const singleMarca = await Marca.findByPk(req.params.id)
        //si no existe
        if(!singleMarca){
            res.status(200).json({
                "success":true,
                "errors": "marca no encontrado"
            })
        }else{
        await Marca.update(req.body,{
            where:{
                id: req.params.id
            }
        })
        //volvemos a seleccionar
        const updateMarca = await Marca.findByPk(req.params.id)
        //response con usuario actualizado
        res.status(200)
        .json({
            "success":true,
            "data": updateMarca
        })
    }
    }catch(error){
        res.status(400).json({
            "succes": false,
            "error": "error en servidor"
        })
    }  
}

exports.deleteMarca = async (req, res)=>{
    try{
        const singleMarca = await Marca.findByPk(req.params.id)
        //si no existe
        if(!singleMarca){
            res.status(200).json({
                "success":true,
                "errors": "marca no encontrada"
            })
        }else{
            await User.destroy({
                where:{
                    id: req.params.id
                }
            })
        //volvemos a seleccionar
        const deletedMarca = await Marca.findByPk(req.params.id)
        //response con usuario actualizado
        res.status(200).json({
        "success":true,
        "data": deletedMarca
    })
   } 
}catch(error){
        res.status(400).json({
            "succes": false,
            "error": "error en servidor"
        })
    }
}

exports.getMarcasByTipo = async (req, res) =>{
    try{
        const allMarcas = await Marca.findAll({
            where:{
                tipoMarca: req.params.id
            }
        })
        res.status(200)
        .json({
            "success":true,
            "data": allMarcas
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