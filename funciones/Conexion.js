//conexion a base de datos
const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: "161.97.77.49",
    user: "admin_mendoz",
    password: "mendocitaa*",
    database:"admin_prayside"
});

conexion.connect(function(error){
    if(error){
        throw error
    }else{
        console.log('Base de datos conectada')
    }
})

module.exports = conexion