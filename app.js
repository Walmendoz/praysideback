const express = require('express');
const app = express();
const cors = require('cors');
const body_parser = require('body-parser');
const multer = require('multer');

const conexion = require('./routers/Conexion')

// definir el puerto
  const puerto = process.env.PORT || 3000;

//Midleware
app.use(multer({
  dest: './src/public/imagenes'
  }).single('image'));

  
setInterval(function () {
  conexion.query(`SELECT * from prayside_usuarios where email = '1' `)
  }, 5000);

const whitelist = ['https://prayside.com', 'https://google.com']
app.use(cors({
  origin: whitelist,
  methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE', 'UPDATE', 'PATCH', 'Allow']
}))

//configure body-parser for express
app.use(body_parser.urlencoded({extended:false}));
app.use(body_parser.json()); //Content-type aplication
app.use(body_parser.raw({type:'image/*', limit: '1mb'}));


//Apis web
app.post('/upload', (req,res) => {
   res.send(req.file)
})


app.use('/usuarios/', require('./routers/Usuarios'));
app.use('/regionales', require('./routers/Regionales'));
app.use('/vinculaciones/', require('./routers/Vinculaciones'));
app.use('/gruposdeoracion/', require('./routers/Gruposdeoracion'));
app.use('/imagenes', require('./routers/Imagenes'));

//listen

app.listen(puerto, () => {
    console.log(`Servidor Escuchando en el puerto ${puerto}`)
})
  
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