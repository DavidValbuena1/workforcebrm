const { DataTypes, ValidationError } = require("sequelize");
const categoria = require("../models/categoria");
const sequelize = require("../config/seq");

//Objeto user:
const Categoria = categoria(sequelize, DataTypes);

exports.getCategorias = async (req, res) => {
  try {
    const allCategorias = await Categoria.findAll();
    res.status(200).json({
      success: true,
      data: allCategorias,
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

exports.getSingleCategoria = async (req, res) => {
  try {
    const singleCategoria = await Categoria.findByPk(req.params.id);
    if (!singleCategoria) {
      res.status(200).json({
        success: true,
        errors: "Categoria no encontrado",
      });
    } else {
      res.status(200).json({
        success: true,
        data: singleCategoria,
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

exports.createCategoria = async (req, res) => {
  try {
    const newCategoria = await Categoria.create(req.body);
    res.status(201).json({
      success: true,
      data: newCategoria,
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

exports.updateCategoria = async (req, res) => {
  try {
    const singleCategoria = await Categoria.findByPk(req.params.id);
    //si no existe
    if (!singleCategoria) {
      res.status(200).json({
        success: true,
        errors: "categoria no encontrado",
      });
    } else {
      await Categoria.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      //volvemos a seleccionar
      const updateCategoria = await Categoria.findByPk(req.params.id);
      //response con usuario actualizado
      res.status(200).json({
        success: true,
        data: updateCategoria,
      });
    }
  } catch (error) {
    res.status(400).json({
      succes: false,
      error: "error en servidor",
    });
  }
};

exports.deleteCategoria = async (req, res) => {
  await Categoria.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({
    succes: true,
    data: `Se elimino el categoria: ${req.params.id}`,
  });
};


exports.getCategoriasByCargo = async (req, res) => {
  try {
    const allCategorias = await Categoria.findAll({
      where:{
        cargo_id: req.params.id
      }
    });
    res.status(200).json({
      success: true,
      data: allCategorias,
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
