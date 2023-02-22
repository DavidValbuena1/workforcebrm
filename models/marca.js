'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Marca extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Marca.init({

    user_id: DataTypes.INTEGER,
    numeroMarca: DataTypes.BIGINT,
    logoMarca: DataTypes.TEXT('long'),
    tipoMarca: DataTypes.INTEGER,
    estado: DataTypes.STRING,
    nombre: DataTypes.STRING
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Marca',
  });
  return Marca;
};