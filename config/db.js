const sequelize = require('./seq')
const colors = require('colors')

//crear instancia del nuevo usuario
//const User = UserModel(sequelize, DataTypes) 

//funcion para conectarme a la bd
const connectDB = async()=>{
    try {
        await sequelize.authenticate()
    } catch (error) {
        console.log(error,'Error al conectarse a mysql'.bgRed) 
    }  
}

module.exports = connectDB