const express = require('express');
const router = express.Router();

const conexion = require('../funciones/Conexion')

router.get('/buscarpaises', (req, res) => {
    conexion.query('SELECT paiscodigodos, paisnombre FROM prayside_paises order by paisnombre' , (err, rows, fields) => {
    if (err) {
        console.log(err)
    }else{
        res.json(rows)
    }
    })
        
})

router.get('/buscarprovincias/:pais', (req, res) => {
    var pais = req.params.pais
    var sqltext =  'SELECT paiscodigodos, provinciacodigo, provincianombre '  + 
                   'FROM prayside_provincias ' +
                   'where paiscodigodos = ? order by provincianombre'

    conexion.query(sqltext, [pais] , (err, rows, fields) => {
    if (err) {
        console.log(err)
    }else{
        res.json(rows)
    }
    })
        
})

router.get('/buscarciudades/:pais', (req, res) => {
    var pais = req.params.pais
    var sqltext =  'SELECT paiscodigodos, ciudadcodigo, ciudadnombre, provinciacodigo ' + 
                   'FROM prayside_ciudades ' +
                   'where paiscodigodos = ? order by ciudadnombre'

    conexion.query(sqltext, [pais] , (err, rows, fields) => {
    if (err) {
        console.log(err)
    }else{
        res.json(rows)
    }
    })
        
})

/*conexion.end()*/

module.exports = router;
