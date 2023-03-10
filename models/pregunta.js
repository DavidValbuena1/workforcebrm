'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pregunta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pregunta.init({

    encuesta_id: DataTypes.INTEGER,
    
    pregunta:{
    type: DataTypes.STRING,
    allowNull:false
    },
    respuesta:{
      type: DataTypes.STRING,
      allowNull:false
    },
    tipoPregunta:{
      type: DataTypes.STRING,
      allowNull:false
    },
    opcional:{ 
    type:DataTypes.STRING,
    allowNull:false
    }
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Pregunta',
  });
  return Pregunta;
};