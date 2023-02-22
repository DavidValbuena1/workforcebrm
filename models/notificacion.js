'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Notificacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Notificacion.init({
    user_id: DataTypes.INTEGER,
    mensaje:{
        type: DataTypes.STRING,
        allowNull:false
    },

    modulo:{
    type: DataTypes.STRING,
    allowNull:false
    },
    
    estado:{
      type: DataTypes.STRING
    },

    creado: {
      type: DataTypes.DATE,
      allowNull: false,
    }
   

  }, {
    sequelize,
    timestamps: false,
    modelName: 'Notificacion',
  });
  return Notificacion;
};