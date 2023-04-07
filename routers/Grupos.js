const express = require('express');
const router = express.Router();

const conexion = require('./Conexion')


router.get('/buscargruposdeoracion', (req, res) => {
    var sqltext =  'SELECT tipo, nombre, emailpropietario ' + 
                   'FROM prayside_ministerios ' +
                   'where tipo = ? order by nombre'

    conexion.query(sqltext, [5] , (err, rows, fields) => {
    if (err) {
        console.log(err)
    }else{
        res.json(rows)
    }
    })
        
})
  

/*conexion.end()*/

module.exports = router;
