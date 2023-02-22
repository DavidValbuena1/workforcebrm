'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Informe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Informe.init({
    nombre: DataTypes.STRING,
  
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Informe',
  });
  return Informe;
};