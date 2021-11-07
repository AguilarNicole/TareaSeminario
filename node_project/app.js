import './loadEnv.js'
import express  from 'express'
import router from './routes/routes.js'


//puerto utilizar
const PORT = 11000
const app = express()


app.set('view engine', 'pug')

// ubicacion de los archivos publicos
app.use(express.static('public'))


// Configuracion para procesar los formularios
app.use(express.urlencoded({extended: true}))
app.use(express.json())

//sistema de plantilla utilizada
app.use('/',router)


//servidor de express escuchando en el puerto
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)

})