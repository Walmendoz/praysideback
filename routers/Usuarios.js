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
        
    var sqltext = 'insert into prayside_usuarios set ' + 
    'email = ?, clave = ?, nombre = ?, apellido = ?, fechanacimiento = ?, genero = ?, ' +  
    'nombregenero = ?, pais = ?, provincia = ?, ciudad = ?, pregunta = ?, respuesta = ?, idioma = ? ';

     var values = [email, clave, nombre, apellido, fechanacimiento, genero, 
         nombregenero, pais, provincia, ciudad, pregunta, respuesta, idioma];

    conexion.query(sqltext, [email, clave, nombre, apellido, fechanacimiento, genero, 
        nombregenero, pais, provincia, ciudad, pregunta, respuesta, idioma], (err, rows, fields) => {
        if (err) {
            res.json(err)
        }else{
            res.json('Registro insertado')
        }
    })

});
    
/*conexion.end()*/

module.exports = router;
