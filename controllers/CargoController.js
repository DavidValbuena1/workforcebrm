const { DataTypes, ValidationError } = require("sequelize");
const cargo = require("../models/cargo");
const sequelize = require("../config/seq");

//Objeto user:
const Cargo = cargo(sequelize, DataTypes);

exports.getCargos = async (req, res) => {
  try {
    const allCargos = await Cargo.findAll();
    res.status(200).json({
      success: true,
      data: allCargos,
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

exports.getSingleCargo = async (req, res) => {
  try {
    const singleCargo = await Cargo.findByPk(req.params.id);
    if (!singleCargo) {
      res.status(200).json({
        success: true,
        errors: "Cargo no encontrado",
      });
    } else {
      res.status(200).json({
        success: true,
        data: singleCargo,
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

exports.createCargo = async (req, res) => {
  try {
    const newCargo = await Cargo.create(req.body);
    res.status(201).json({
      success: true,
      data: newCargo,
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

exports.updateCargo = async (req, res) => {
  try {
    const singleCargo = await Cargo.findByPk(req.params.id);
    //si no existe
    if (!singleCargo) {
      res.status(200).json({
        success: true,
        errors: "cargo no encontrado",
      });
    } else {
      await Cargo.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      //volvemos a seleccionar
      const updateCargo = await Cargo.findByPk(req.params.id);
      //response con usuario actualizado
      res.status(200).json({
        success: true,
        data: updateCargo,
      });
    }
  } catch (error) {
    res.status(400).json({
      succes: false,
      error: "error en servidor",
    });
  }
};

exports.deleteCargo = async (req, res) => {
  await Cargo.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({
    succes: true,
    data: `Se elimino el campaing: ${req.params.id}`,
  });
};

exports.getCargosByEstado = async (req, res) => {
  try {
    const allCargos = await Cargo.findAll({
      where:{
        estado:req.params.estado
      } 
    });
    res.status(200).json({
      success: true,
      data: allCargos,
    });
  } catch (error) {
    console.log(error);
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
