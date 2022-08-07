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

/*conexion.end()*/

module.exports = router;
