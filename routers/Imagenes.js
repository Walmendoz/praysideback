const express = require('express');
const router = express.Router();
const funciones = require('./funciones/Metodos')

const ftp = require('ftp');
const multer = require('multer');
const ftpStorage = require('multer-ftp');

//Uploading Una sola imagen 
router.post('/cargarimagen', (req, res) => {
      const file = req.file
      if (!file) {
        const error = new Error('Please upload a file')
        error.httpStatusCode = 400
        return next(error)
      }

      const ftpClient = new ftp();
      ftpClient.connect({
          //  port: //puerto del servidor/,
          host: '161.97.77.49',
          user: 'admin_prayside',
          password: 'Mendoz2704'
      });

      const pathdestino = 'https://prayside.com/redsocial'

      const storage = new ftpStorage({
        basepath: 'https://prayside.com/redsocial',
        connection: ftpClient,
        destination: (req, file, options, cb) => {
            cb(null, pathdestino);
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + '-' + Date.now())
            }
        });

      const upload = multer({storage, file});  

  })


module.exports = router;

/*
Multer añade un objeto body y un objeto file o files al objeto request. El objeto body contiene los valores correspondientes a los campos de texto del formulario, los objetos file o files contienen los archivos que serán subidos mediante el formulario.

Ejemplo básico de cómo usarlo:

No te olvides de enctype="multipart/form-data" en tu formulario.

<form action="/profile" method="post" enctype="multipart/form-data">
  <input type="file" name="avatar" />
</form>
const express = require('express')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const app = express()

app.post('/profile', upload.single('avatar'), function (req, res, next) {
  // req.file es el archivo del `avatar`
  // req.body contendrá los campos de texto, si los hubiera.
})

app.post('/photos/upload', upload.array('photos', 12), function (req, res, next) {
  // req.files es el arreglo (array) de archivos `photos`
  // req.body contendrá los campos de texto, si los hubiera.
})

const cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])
app.post('/cool-profile', cpUpload, function (req, res, next) {
  // req.files es un objeto (String -> Array) donde el nombre del campo es la clave (key) y el valor es el arreglo (array) de archivos
  //
  // Ejemplo
  //  req.files['avatar'][0] -> Archivo
  //  req.files['gallery'] -> Array
  //
  // req.body contendrá los campos de texto, si los hubiera.
})
En caso de que necesites manejar un formulario multiparte (multipart form) que sólo contiene campos de texto, deberias usar el método .none():

const express = require('express')
const app = express()
const multer  = require('multer')
const upload = multer()

app.post('/profile', upload.none(), function (req, res, next) {
  // req.body contiene los campos textuales
})
Este es un ejemplo de cómo se utiliza multer en un formulario HTML. Presta especial atención en los campos enctype="multipart/form-data" y name="uploaded_file":

<form action="/stats" enctype="multipart/form-data" method="post">
  <div class="form-group">
    <input type="file" class="form-control-file" name="uploaded_file">
    <input type="text" class="form-control" placeholder="Number of speakers" name="nspeakers">
    <input type="submit" value="Get me the stats!" class="btn btn-default">            
  </div>
</form>
Luego en tu archivo javascript agrega estas líneas para acceder tanto al archivo (file) como al body.Es importante que uses el valor del campo name del formulario, en tu función de subida. Esto le indica a multer en qué campo de la petición debe buscar los archivos. Si estos campos no son los mismos en el formulario HTML y en tu servidor, la subida fallará:

const multer  = require('multer')
const upload = multer({ dest: './public/data/uploads/' })
app.post('/stats', upload.single('uploaded_file'), function (req, res) {
   // req.file es el nombre de tu archivo en el formulario anterior, en este caso 'uploaded_file'
   // req.body contendrá los campos de texto, si los hubiera.
   console.log(req.file, req.body)
});


//Uploading Una sola imagen 
router.post('/cargarimagen', upload.single('myFile'), (req, res, next) => {
        const file = req.file
        if (!file) {
          const error = new Error('Please upload a file')
          error.httpStatusCode = 400
          return next(error)
        }
          res.send(file)
})


//Uploading multiple files 
router.post('/cargarimagenes', upload.array('myFiles', 12), (req, res, next) => {
  const files = req.files
  if (!files) {
    const error = new Error('Please choose files')
    error.httpStatusCode = 400
    return next(error)
  }
    res.send(files)
 
})

*/