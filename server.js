const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const listEndpoints = require('express-list-endpoints')
const cors = require('cors')
const http = require('http')

//dependencias a las rutas
const campaingroutes = require('./routes/CampaingRoutes')
const marcaroutes = require('./routes/MarcaRoutes')
const usersroutes = require('./routes/UserRoutes')
const chatroutes = require('./routes/ChatRoutes')
const cargosroutes = require('./routes/CargoRoutes')
const identificacionroutes = require('./routes/IdentificacionRoutes')
const informeroutes = require('./routes/InformeRoutes')
const mensajeroutes = require('./routes/mensajeRoutes')
const notificacionroutes = require('./routes/notificacionRoutes')
const categoriaroutes = require('./routes/CategoriaRoutes')
const subcategoriaroutes = require('./routes/SubcategoriaRoutes')
const unidadesroutes = require('./routes/UnidadRoutes')
const sesionroutes = require('./routes/SesionRoutes')
const encuestaroutes = require('./routes/encuestaRoutes')
const preguntaroutes = require('./routes/PreguntaRoutes')
const { Server } = require('socket.io')

//Definiendo archivo .env
dotenv.config({
    path: './config/config.env'
})

//2 crar el objeto aplicacion
const app = express()

//habilitar express para cargar datos content-type json
app.use(express.json())
app.use(cors({
    origin:"*"
}))

//conectar a db
connectDB()

//relacion de rutas de dominio
app.use('/api/v1/marcas', marcaroutes)
app.use('/api/v1/campaings', campaingroutes)
app.use('/api/v1/users', usersroutes)
app.use('/api/v1/chats', chatroutes)
app.use('/api/v1/mensajes', mensajeroutes)
app.use('/api/v1/cargos', cargosroutes)
app.use('/api/v1/identificacions', identificacionroutes)
app.use('/api/v1/informes', informeroutes)
app.use('/api/v1/notificacions', notificacionroutes)
app.use('/api/v1/categorias', categoriaroutes)
app.use('/api/v1/subcategorias', subcategoriaroutes)
app.use('/api/v1/unidades/', unidadesroutes)
app.use('/api/v1/sesiones/',sesionroutes)
app.use('/api/v1/encuestas',encuestaroutes)
app.use('/api/v1/preguntas',preguntaroutes)
const server = http.createServer(app);
const io = new Server(server,{
    cors:"*"
})

io.on('connection', socket=>{
    socket.on("entrarsala", (sala)=>{
        socket.join(sala); 
    })
    socket.on('mensajep', data=>{
        socket.to(data.userId).emit("mensajer",data);
    })
    socket.on('refrescarNotificacion', data=>{
        io.emit("refrescarNotificacion",data);
    })

    socket.on('notificacionE', data=>{
        io.emit("notificacionr",data);
    })
    socket.on('refrescarIndex', s=>{
        io.emit('refrescarIndex',s);
    })
})


//3 iniciar el devserver
server.listen(process.env.PORT || 5000)

//consultar endpoints del proyecto
console.log(listEndpoints(app))

