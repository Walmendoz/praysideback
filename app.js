const express = require('express');
const app = express();

const puerto = process.env.PORT || 3000;

/* motor de plantillas*/
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.get('/', (req, res) => {
    res.render('index', {titulo: 'Titulo dinamico'})
})

/* middleware*/
app.use(express.static('public'));



app.listen(puerto, () => {
    console.log(`Servidor Escuchando en el puerto ${puerto}`)
})
  