const { DataTypes, ValidationError, Op } = require("sequelize");
const user = require("../models/user");
const sequelize = require("../config/seq");
const { transport } = require("../config/mailer");

//Objeto user:
const User = user(sequelize, DataTypes);

exports.getUsers = async (req, res) => {
  try {
    const allUsers = await User.findAll();
    res.status(200).json({
      success: true,
      data: allUsers,
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

exports.getUsersByEstado = async (req, res) => {
  try {
    const allUsers = await User.findAll({
      where: {
        estado: req.params.estado,
      },
    });
    res.status(200).json({
      success: true,
      data: allUsers,
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

exports.getSingleUser = async (req, res) => {
  try {
    const singleUser = await User.findByPk(req.params.id);
    if (!singleUser) {
      res.status(200).json({
        success: true,
        errors: "usuario no encontrado",
      });
    } else {
      res.status(200).json({
        success: true,
        data: singleUser,
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

exports.createUser = async (req, res) => {
  try {
    //grabar nuevo usuario
    const newUser = await User.create(req.body);
    //enviar response con nuevo usuario
    // transport.sendMail({
    //   from: "workforcebrm865@gmail.com",
    //   to: newUser.email,
    //   subject: "Prueba de envio de correos",
    //   render: function (context, callback) {
    //     templates.render(
    //       "../../../templatesGmail/index.html",
    //       context,
    //       function (err, html, text) {
    //         if (err) {
    //           return callback(err);
    //         }
    //         callback(null, {
    //           html: html,
    //           text: text,
    //         });
    //       }
    //     );
    //   },
    // });
    res.status(201).json({
      success: true,
      data: newUser,
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

exports.updateUser = async (req, res) => {
  try {
    console.log(req.body);
    const singleUser = await User.findByPk(req.params.id);
    console.log(singleUser);
    //si no existe
    if (!singleUser) {
      res.status(200).json({
        success: true,
        errors: "usuario no encontrado",
      });
    } else {
      await User.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      //volvemos a seleccionar
      const updateUser = await User.findByPk(req.params.id);
      //response con usuario actualizado
      res.status(200).json({
        success: true,
        data: updateUser,
      });
    }
  } catch (error) {
    res.status(400).json({
      succes: false,
      error: "error en servidor" + error,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const singleUser = await User.findByPk(req.params.id);
    //si no existe
    if (!singleUser) {
      res.status(200).json({
        success: true,
        errors: "usuario no encontrado",
      });
    } else {
      await User.destroy({
        where: {
          id: req.params.id,
        },
      });
      //volvemos a seleccionar
      const deletedUser = await User.findByPk(req.params.id);
      //response con usuario actualizado
      res.status(200).json({
        success: true,
        data: deletedUser,
      });
    }
  } catch (error) {
    res.status(400).json({
      succes: false,
      error: "error en servidor",
    });
  }
};

exports.getUserByEmailAndPassword = async (req, res) => {
  try {
    const allUsers = await User.findAll({
      where: {
        email: req.body.email,
        password: req.body.password,
      },
    });
    res.status(200).json({
      success: true,
      data: allUsers,
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

exports.getUsersById = async (req, res) => {
  try {
    const allUsers = await User.findAll({
      where: {
        cargo_id: req.params.id,
      },
    });
    res.status(200).json({
      success: true,
      data: allUsers,
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


exports.getUsersByMes = async (req, res) => {
  try {
    const allUsers = await User.findAll({
      where:{
        fecha_registro:{
          [Op.between]:[req.body.fechaInicio,req.body.fechaFinal]
        }
      }
    });
    res.status(200).json({
      success: true,
      data: allUsers,
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
