const { DataTypes, ValidationError } = require("sequelize");
const subcategoria = require("../models/subcategoria");
const sequelize = require("../config/seq");

//Objeto user:
const Subcategoria = subcategoria(sequelize, DataTypes);

exports.getSubcategorias = async (req, res) => {
  try {
    const allSubcategorias = await Subcategoria.findAll();
    res.status(200).json({
      success: true,
      data: allSubcategorias,
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

exports.getSingleSubcategoria = async (req, res) => {
  try {
    const singleSubcategoria = await Subcategoria.findByPk(req.params.id);
    if (!singleSubcategoria) {
      res.status(200).json({
        success: true,
        errors: "Subcategoria no encontrado",
      });
    } else {
      res.status(200).json({
        success: true,
        data: singleSubcategoria,
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

exports.createSubcategoria = async (req, res) => {
  try {
    const newSubcategoria = await Subcategoria.create(req.body);
    res.status(201).json({
      success: true,
      data: newSubcategoria,
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

exports.updateSubcategoria = async (req, res) => {
  try {
    const singleSubcategoria = await Subcategoria.findByPk(req.params.id);
    //si no existe
    if (!singleSubcategoria) {
      res.status(200).json({
        success: true,
        errors: "Subcategoria no encontrado",
      });
    } else {
      await Subcategoria.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      //volvemos a seleccionar
      const updateSubcategoria = await Subcategoria.findByPk(req.params.id);
      //response con usuario actualizado
      res.status(200).json({
        success: true,
        data: updateSubcategoria,
      });
    }
  } catch (error) {
    res.status(400).json({
      succes: false,
      error: "error en servidor",
    });
  }
};

exports.deleteSubcategoria = async (req, res) => {
  await Subcategoria.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({
    succes: true,
    data: `Se elimino el Subcategoria: ${req.params.id}`,
  });
};

exports.getSubcategoriasByCategoria = async (req, res) => {
  try {
    const allSubcategorias = await Subcategoria.findAll({
      where:{
        categoria_id: req.params.id
      }
    });
    res.status(200).json({
      success: true,
      data: allSubcategorias,
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
