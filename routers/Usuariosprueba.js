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

router.get('/consulta/:nombre', (req, res) => {
    conexion.query('SELECT * from prayside_usuarios where nombre = ?' , [req.params.nombre], (err, rows, fields) => {
    if (err) {
        console.log(err)
    }else{
        res.json(rows)
    }
    })
        
})


/*conexion.end()*/

module.exports = router;

