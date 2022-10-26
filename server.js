//1. creear la dependencia 
const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const listEndpoints =require('express-list-endpoints')

//dependencias a las rutas
const bootcampRoutes = require('./routes/BootcampRoutes')
const cursosRoutes = require('./routes/CursosRoutes')
const usersRoutes = require('./routes/UserRoutes')


//definiendo archivo .env
dotenv.config({
    path: './config/config.env'
})

//2. crear el objeto app con express
const app = express()

//conectar a base de datos
connectDB()

//relacionar rutas de dominio
app.use('/api/v1/bootcamps' , bootcampRoutes)
app.use('/api/v1/cursos' , cursosRoutes)
app.use('/api/v1/users' , usersRoutes)

//consultar endpoints del proyecto
console.log(listEndpoints(app))
//3. iniciar el deserver
app.listen(process.env.PORT , ()=>{
    console.log('servidor iniciado'.bgGreen.blue)
})