const express = require('express');
const router = express.Router();

const conexion = require('./Conexion')

router.post('/crearministerio', (req, res) => {
    //    var data = req;
    
    var nombre = req.body[0].nombre;
    var idioma = req.body[0].idioma;
    var pais = req.body[0].pais;
    var provincia = req.body[0].provincia;
    var ciudad = req.body[0].ciudad;
    var direccion = req.body[0].direccion;
    var telefono = req.body[0].telefono;
    var email = req.body[0].email;
    var visibilidad = req.body[0].visibilidad;
    var religion = req.body[0].religion;
//    var numero = 20
//    var compbte = numero.toString().trim()
        
    var sqltext = 'insert into prayside_ministerios set ' + 
    'nombre = ?, idioma = ?, pais = ?, provincia = ?, ciudad = ? ' + 
    'direccion = ?, telefono = ?, email = ?, visibilidad = ?, religion = ?';

    conexion.query('SELECT nombre from prayside_ministerios where nombre = ?', [nombre], (err, rows, fields) => {
        if (rows.length === 0) {
            conexion.query(sqltext, [nombre, idioma, pais, provincia, ciudad, direccion, telefono, email,
            visibilidad, religion], (err, rows, fields) => {
                if (err) {
                    res.json(err)
                }else{
                    res.json('Registro insertado')
                }
            })

        {/*
            var espacios = ' '
            conexion.query('UPDATE prayside_ciudades set provinciacodigo = ? where paiscodigodos = ? and ciudadcodigo = ? and provinciacodigo = ?', [provincia, pais, ciudad, espacios], (err, rows, fields) => {
                var espaciosdos = ' '
            })
        */}

        }else{
            res.json('Correo ya existe')
        }
    })
});
   
router.put('/cambiarministerio', (req, res) => {
    //    var data = req;
    var email = req.body[0].email;
    var clave = req.body[0].clave;
    var nombre = req.body[0].nombre;
    var apellido = req.body[0].apellido;
    var fechanacimiento = req.body[0].fechanacimiento;
    var genero = req.body[0].genero;
    var nombregenero = req.body[0].nombregenero;
    var pais = req.body[0].pais;
    var provincia = req.body[0].provincia;
    var ciudad = req.body[0].ciudad;
    var pregunta = req.body[0].pregunta;
    var respuesta = req.body[0].respuesta;
    var idioma = req.body[0].idioma;
        
    var sqltext = 'update prayside_usuarios set ' + 
    'clave = ?, nombre = ?, apellido = ?, fechanacimiento = ?, genero = ?, ' +  
    'nombregenero = ?, pais = ?, provincia = ?, ciudad = ?, pregunta = ?, respuesta = ?, idioma = ? ' +
    'where email = ?';

    conexion.query(sqltext, [clave, nombre, apellido, fechanacimiento, genero, 
        nombregenero, pais, provincia, ciudad, pregunta, respuesta, idioma, email],  (err, rows, fields) => {
        if (err) {
            res.json(err)
        }else{
            res.json('Registro modificado')
        }

        var espacios = ' '
        conexion.query('UPDATE prayside_ciudades set provinciacodigo = ? where paiscodigodos = ? and ciudadcodigo = ? and provinciacodigo = ?', [provincia, pais, ciudad, espacios], (err, rows, fields) => {
            var espaciosdos = ' '
        })

    })

});

router.delete('/eliminarcuenta/:email', (req, res) => {
    var email = req.params.email
    conexion.query('DELETE from prayside_usuarios where email = ?' , [email], (err, rows, fields) => {
    if (err) {
        console.log(err)
    }else{
        res.json('Registro eliminado')
    }
    })
        
})


/*conexion.end()*/

module.exports = router;
