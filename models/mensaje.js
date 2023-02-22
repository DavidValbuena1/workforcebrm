'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mensaje extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Mensaje.init({
   
    mensaje: {
    type: DataTypes.STRING,
    },

    usuarioRecibio:{
    type: DataTypes.STRING
    },

   
    user_envio: DataTypes.INTEGER,

    chat_id: DataTypes.INTEGER,
    estado: DataTypes.STRING,
    creado: {
      type: DataTypes.DATE,
      allowNull: false,
    }
  }, 
  {
    sequelize,
    timestamps: false,
    modelName: 'Mensaje',
  });
  return Mensaje;
};