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

router.get('/consulta/:nombre/:pais', (req, res) => {
    conexion.query('SELECT * from prayside_usuarios where nombre = ? and pais = ?' , [req.params.nombre, req.params.pais],  (err, rows, fields) => {
    if (err) {
        console.log(err)
    }else{
        res.json(rows)
    }
    })
        
})



router.post('/login', (req, res) => {
//    var data = req;
    console.log(req.body);
    
//    console.log("Name: ", data.nombre);
//    console.log("Age: ", data.edad);
//    console.log("Gender: ", data.genero);
      
    res.json(req.body)
});

/*conexion.end()*/

module.exports = router;




