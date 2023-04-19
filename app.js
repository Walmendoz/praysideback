const express = require('express');
const app = express();
const cors = require('cors');
const body_parser = require('body-parser');
//const multer = require('multer');

const conexion = require('../funciones/Conexion')

// definir el puerto
  const puerto = process.env.PORT || 3000;

 
setInterval(function () {
  conexion.query(`SELECT * from prayside_usuarios where email = '1' `)
  }, 5000);

const whitelist = ['https://prayside.com', 'https://google.com','https://node-railway-production-af98.up.railway.app']
app.use(cors({
  origin: whitelist,
  methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE', 'UPDATE', 'PATCH', 'Allow']
}))

//configure body-parser for express
app.use(body_parser.urlencoded({extended:false}));
app.use(body_parser.json()); //Content-type aplication
app.use(body_parser.raw({type:'image/*', limit: '1mb'}));

// Midleware
//app.use(multer({
  // dest: './src/public/uploads'
//   }).single('image'));

  //Apis web
//app.post('/upload', (req,res) => {
//   console.log(req.file)
//   res.send('Imagenes cargadas')
//});

// app.use(multer({dest:'./uploads/'}).single(...));
// app.use(multer({dest:'./uploads/'}).array(...));
// app.use(multer({dest:'./uploads/'}).fields(...));

// app.use(multer({dest:'./uploads/'}).single('photo'));
// And be sure to have something like:

// <form action="/postPhotos" enctype="multipart/form-data" method="post">
//     <input type="file" name="photo">
//     <input type="submit" value="Upload photo">
// </form>

//Apis web
//app.use('/', routes)

app.use('/usuarios/', require('./routers/Usuarios'));
app.use('/regionales', require('./routers/Regionales'));
app.use('/vinculaciones/', require('./routers/Vinculaciones'));
app.use('/gruposdeoracion/', require('./routers/Gruposdeoracion'));
app.use('/imagenes', require('./routers/Imagenes'));

//listen

app.listen(puerto, () => {
    console.log(`Servidor Escuchando en el puerto ${puerto}`)
})

//module.exports = app

// permitir la solicitud externa de las apis

// app.use((req, res, next) => {
// 	res.header('Access-Control-Allow-Origin', '*');
// 	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, 	X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-	Method');
// 	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, 	DELETE');
// 	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
// 	next();
// });
// app.use(cors({
// 	origin: ['https://prayside.com', 'https://google.com' ],
// 	origin: '*' 
// }))

// app.use(cors({
//   origin: ['https://prayside.com', 'https://google.com' ],
// 	methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE', 'UPDATE', 'PATCH', 'Allow']
// }))
// fin de permitir
/*
//Midleware
app.use(multer({
  dest:path.join(__dirname, 'public/imagenes')})
  .single('image'));


*/

