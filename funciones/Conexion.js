//conexion a base de datos
const mysql = require("mysql");

const conexion = mysql.createConnection({
  host: "161.97.77.49",
  user: "admin_mendoz",
  password: "mendocitaa*",
  database: "admin_prayside",
});

conexion.connect(function (error) {
  if (error) {
    throw error;
  } else {
    console.log("Base de datos conectada");
  }
});

module.exports = conexion;

/*
let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'todoapp'
});

connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
  });

connection.end(function(err) {
    if (err) {
      return console.log('error:' + err.message);
    }
    console.log('Close the database connection.');
  });


  connection.destroy();
  */

/*
Pool de conexiones
var pool = mysql.createPool({
    connectionLimit: 5,
    host: 'localhost',
    user: 'root',
    password: '', 
    database: 'todoapp'
    });

pool.getConnection(function(err, connection) {
  // execute query
  // ...
});

Soltar una conexion
pool.getConnection(function(err, connection) {
  // execute query
  // ...
  connnection.release();
});

Para cerrar todas las conexiones

pool.end(function(err) {
  if (err) {
    return console.log(err.message);
  }
  // close all connections
});

*/
