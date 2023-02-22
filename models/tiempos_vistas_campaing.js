"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tiempos_vistas_campaing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tiempos_vistas_campaing.init(
    {
      campaing_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      entrada: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      salida: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "Tiempos_vistas_campaing",
    }
  );
  return Tiempos_vistas_campaing;
};
