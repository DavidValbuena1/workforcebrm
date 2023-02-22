'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Encuesta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Encuesta.init({
    campaing_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
   

    estado:{
      type: DataTypes.STRING
    },
    
    
   envio: {
      type: DataTypes.DATE,
      allowNull: false,
      }

  }, {
    sequelize,
    timestamps: false,
    modelName: 'Encuesta',
  });
  return Encuesta;
};