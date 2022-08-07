const express = require('express');
const router = express.Router();

const conexion = require('./Conexion')

router.get('/', (req, res) => {
    conexion.query('SELECT * from prayside_usuarios', (err, rows, fields) => {
    if (err) {
        console.log(err)
    }else{
        res.json(rows)
    }
    })
        
})

router.get('/buscarusuariocorreo/:email', (req, res) => {
    var email = req.params.email
    conexion.query('SELECT clave, nombre, idioma from prayside_usuarios where email = ?' , [email], (err, rows, fields) => {
    if (err) {
        console.log(err)
    }else{
        res.json(rows)
    }
    })
        
})

router.post('/crearcuenta', (req, res) => {
    //    var data = req;
    var email = req.body.email;
    var clave = req.body.clave;
    var nombre = req.body.nombre;
    var apellido = req.body.apellido;
    var fechanacimiento = req.body.fechanacimiento;
    var genero = req.body.genero;
    var nombregenero = req.body.nombregenero;
    var pais = req.body.pais;
    var provincia = req.body.provincia;
    var ciudad = req.body.ciudad;
    var pregunta = req.body.pregunta;
    var respuesta = req.body.respuesta;
    var idioma = req.body.idioma;
        
    var sqltext = 'insert into prayside_usuarios ' + 
    '(email, clave, nombre, apellido, fechanacimiento, genero, ' +  
    'nombregenero, pais, provincia, ciudad, pregunta, respuesta, idioma) VALUES ? ';

    var values = [email, clave, nombre, apellido, fechanacimiento, genero, 
        nombregenero, pais, provincia, ciudad, pregunta, respuesta, idioma];

         var str = values
    conexion.query(sqltext, [values], (err, rows, fields) => {
        if (err) {
            res.json(str)
        }else{
            res.json('Registro insertado')
        }
    })

});
    
/*conexion.end()*/

module.exports = router;
