import cnn from '../database/connection.js'
import con from '../database/connection.js'


export const Empleado = (req, res) =>{
    const { nombre_empleado, telefono_empleado, correo_empleado, direccion_empleado, edad_empleado, id_dep } = req.body

    //construir data la cual sera insertada
    const data = {
        nombre_empleado: nombre_empleado,
        telefono_empleado: telefono_empleado,
        correo_empleado: correo_empleado,
        direccion_empleado: direccion_empleado,
        edad_empleado: edad_empleado,
        id_dep:id_dep,
    }

    con.query('INSERT INTO empleado SET ?', data, (err,result)=>{
        if (err){
            console.log('Error al registrar un dato');
            return
        }
        res.redirect('/empleado')
    })
}

export const empleado = (req, res, next) =>{
    con.query('SELECT * FROM empleado', (err, result)=>{
        if(err){
            console.log('Error al a mostrar datos');
            return
        }
        req.empleado = result
        next()
    })
}

export const departamento =  (req, res) => {
    const { nombre_departamento, descripcion_departamento } = req.body

    //construir data la cual sera insertada
    const data = {
        nombre_departamento: nombre_departamento,
        descripcion_departamento: descripcion_departamento,
    }

    con.query('INSERT INTO departamentos SET ?', data, (err,result)=>{
        if (err){
            console.log('Error al registrar un dato');
            return
        }
        return res.redirect('/departamento')
    })

}

export const departamentos=(req, res, next) =>{
    con.query('SELECT * FROM departamentos', (err, result)=>{
        if(err){
            console.log('Error al a mostrar datos');
            return
        }
        req.departamentos = result
        next()
    })
}


//eliminarempleado

export const borrarEmpleado = (req, res) => {
    const {id_emp} = req.body

    con.query('DELETE FROM empleado WHERE id_emp = ?',id_emp, (err, result) => {
        if (err) {
            console.log(`Ocurrio un error al eliminar ${err}`)
            return
        }

        res.redirect('/empleado')
    })
}
