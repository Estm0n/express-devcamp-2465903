const sequelize = require('./seq.js')
const color = require('colors')

//Funcion para conectar a la db


const connectDB = async () => {
    try {
        await sequelize.authenticate()
        console.log('conectado a servidor mysql'.bgBlue.bgBlack)
        
    } catch (error) {
        console.log(error)
    } 
}

module.exports = connectDB