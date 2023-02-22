'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sesion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Sesion.init({
    
    user_id: DataTypes.INTEGER,
   
    inicio: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    finalizacion: {
      type: DataTypes.DATE,
      allowNull: false,
      }

  }, {
    sequelize,
    timestamps: false,
    modelName: 'Sesion',
  });
  return Sesion;
};