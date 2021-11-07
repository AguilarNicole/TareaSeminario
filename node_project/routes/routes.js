import express  from 'express'
import {departamentos, departamento, empleado, Empleado, borrarEmpleado} from '../controllers/authcontrollers.js'
const router = express.Router()


router.get('/', (req, res) => {
    res.render('index')
})

router.get('/empleado', empleado, departamentos, (req, res) => {
    res.render('empleado', {empleado: req.empleado, q: req.q, departamentos: req.departamentos})
})

router.get('/departamento', departamentos, (req, res) => {
    res.render('departamento', {departamentos: req.departamentos, q: req.q})
})

router.post('/empleado', Empleado)
router.post('/departamento', departamento)
router.post('/borrarEmpleado', borrarEmpleado)


export default router