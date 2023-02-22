const { DataTypes, ValidationError } = require("sequelize");
const Campaing = require("../models/campaing");
const sequelize = require("../config/seq");

//Objeto user:
const campaing = Campaing(sequelize, DataTypes);

exports.getCampaings = async (req, res) => {
  try {
    const allCampaings = await campaing.findAll({
      where: {
        estado: req.params.estado,
      },
    });
    res.status(200).json({
      success: true,
      data: allCampaings,
    });
  } catch (error) {
    if (error instanceof ValidationError) {
      //recorrer el arreglo de errores:
      //foreach

      //map
      const msg_errores = error.errors.map((errorItem) => {
        return errorItem.message;
      });
      res.status(422).json({
        succes: false,
        error: msg_errores,
      });
    } else {
      res.status(400).json({
        succes: false,
        error: "error en servidor",
      });
    }
  }
};

exports.getSingleCampaing = async (req, res) => {
  try {
    const singleCampaing = await campaing.findByPk(req.params.id);
    if (!singleCampaing) {
      res.status(200).json({
        success: true,
        errors: "Campaing no encontrado",
      });
    } else {
      res.status(200).json({
        success: true,
        data: singleCampaing,
      });
    }
  } catch (error) {
    if (error instanceof ValidationError) {
      //recorrer el arreglo de errores:
      //foreach

      //map
      const msg_errores = error.errors.map((errorItem) => {
        return errorItem.message;
      });
      res.status(422).json({
        succes: false,
        error: msg_errores,
      });
    } else {
      res.status(400).json({
        succes: false,
        error: "error en servidor",
      });
    }
  }
};

exports.createCampaing = async (req, res) => {
  try {
    const newCampaing = await campaing.create(req.body);
    res.status(201).json({
      success: true,
      data: newCampaing,
    });
  } catch (error) {
    if (error instanceof ValidationError) {
      //recorrer el arreglo de errores:
      //foreach

      //map
      const msg_errores = error.errors.map((errorItem) => {
        return errorItem.message;
      });
      res.status(422).json({
        succes: false,
        error: msg_errores,
      });
    } else {
      res.status(400).json({
        succes: false,
        error: "error en servidor",
      });
    }
  }
};

exports.updateCampaing = async (req, res) => {
  try {
    const singleCampaing = await campaing.findByPk(req.params.id);
    //si no existe
    if (!singleCampaing) {
      res.status(200).json({
        success: true,
        errors: "campaing no encontrado",
      });
    } else {
      await campaing.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      //volvemos a seleccionar
      const updateCampaing = await campaing.findByPk(req.params.id);
      //response con usuario actualizado
      res.status(200).json({
        success: true,
        data: updateCampaing,
      });
    }
  } catch (error) {
    res.status(400).json({
      succes: false,
      error: "error en servidor",
    });
  }
};

exports.deleteCampaing = async (req, res) => {
  await campaing.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({
    succes: true,
    data: `Se elimino el campaing: ${req.params.id}`,
  });
};

exports.getCampaingsByMarca = async (req, res) =>{
  try{
  const allCampaings = await campaing.findAll({
      where:{
          marca_id: req.params.marca
      }
  })
  res.status(200)
  .json({
      "success":true,
      "data": allCampaings
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

exports.getCampaingsByEstadoAndMarca = async (req, res) =>{
  try{
  const allCampaings = await campaing.findAll({
      where:{
          estado: req.body.estado,
          marca_id: req.body.marca_id
      }
  })
  res.status(200)
  .json({
      "success":true,
      "data": allCampaings
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
