'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Unidad extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Unidad.init({
    nombre: DataTypes.STRING,
    estado: DataTypes.STRING
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Unidade',
  });
  return Unidad;
  
};