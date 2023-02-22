'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Campaing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Campaing.init({
    marca_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    nombre:{
    type: DataTypes.STRING,
    allowNull:false
    },
    powerby:{ 
    type:DataTypes.STRING,
    allowNull:false
  
  },
    tipoInforme_id: DataTypes.INTEGER,

    estado:{
      type: DataTypes.STRING
    },
    creado: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    actualizado: {
      type: DataTypes.DATE,
      allowNull: false,
      }

  }, {
    sequelize,
    timestamps: false,
    modelName: 'Campaing',
  });
  return Campaing;
};