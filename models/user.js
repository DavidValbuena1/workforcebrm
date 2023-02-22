"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      apellido: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
      },

      password: {
        type: DataTypes.STRING,
      },

      pais: {
        type: DataTypes.STRING,
      },

      ciudad: {
        type: DataTypes.STRING,
      },

      direccion: {
        type: DataTypes.STRING,
      },
      telefono: {
        type: DataTypes.STRING,
      },

      cargo_id: DataTypes.INTEGER,

      numeroIdentificacion: DataTypes.STRING,

      tipoIdentificacion_id: DataTypes.INTEGER,

      estado: {
        type: DataTypes.STRING,
      },
      fecha_registro: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "User",
    }
  );
  return User;
};
