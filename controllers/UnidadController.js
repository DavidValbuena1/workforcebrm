const { DataTypes, ValidationError } = require("sequelize");
const unidad = require("../models/unidad");
const sequelize = require("../config/seq");

//Objeto user:
const Unidad = unidad(sequelize, DataTypes);

exports.getUnidades = async (req, res) => {
  try {
    const allUnidades = await Unidad.findAll();
    res.status(200).json({
      success: true,
      data: allUnidades,
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

exports.getUnidadesEstado = async (req, res) => {
  try {
    const allUnidades = await Unidad.findAll({
      where:{
        estado: req.params.estado
      }
    });
    res.status(200).json({
      success: true,
      data: allUnidades,
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

exports.getSingleUnidad = async (req, res) => {
  try {
    const singleUnidad = await Unidad.findByPk(req.params.id);
    if (!singleUnidad) {
      res.status(200).json({
        success: true,
        errors: "Unidad no encontrado",
      });
    } else {
      res.status(200).json({
        success: true,
        data: singleUnidad,
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

exports.createUnidad = async (req, res) => {
  try {
    const newUnidad = await Unidad.create(req.body);
    res.status(201).json({
      success: true,
      data: newUnidad,
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

exports.updateUnidad = async (req, res) => {
  try {
    const singleUnidad = await Unidad.findByPk(req.params.id);
    //si no existe
    if (!singleUnidad) {
      res.status(200).json({
        success: true,
        errors: "Unidad no encontrado",
      });
    } else {
      await Unidad.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      //volvemos a seleccionar
      const updateUnidad = await Unidad.findByPk(req.params.id);
      //response con usuario actualizado
      res.status(200).json({
        success: true,
        data: updateUnidad,
      });
    }
  } catch (error) {
    res.status(400).json({
      succes: false,
      error: "error en servidor",
    });
  }
};

exports.deleteUnidad = async (req, res) => {
  await Unidad.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({
    succes: true,
    data: `Se elimino el unidad: ${req.params.id}`,
  });
};
