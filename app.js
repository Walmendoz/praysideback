const express = require('express');
const app = express();

const conexion = require('./routers/Conexion')

// definir el puerto
  const puerto = process.env.PORT || 3000;


/* Rutas web Apis 
app.use('/', require('./routers/Rutasweb'));
app.use('/usuarios', require('./routers/Usuarios'));
app.use('/', require('./routers/Usuarios'));
app.use('/Usuariosprueba', require('./routers/Usuariosprueba'));
*/
setInterval(function () {
  conexion.query(`SELECT * from prayside_usuarios where email = '1' `)
  }, 5000);

// permitir la solicitud externa de las apis

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, 	X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-	Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, 	DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});
// fin de permitir


app.use('/', require('./routers/Usuarios'));

app.use('/prueba', require('./routers/prueba'));

app.use('/usuariosprueba', require('./routers/Usuariosprueba'));

app.listen(puerto, () => {
    console.log(`Servidor Escuchando en el puerto ${puerto}`)
})
  