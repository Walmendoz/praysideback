const frutas=['banana', 'manzana', 'pera', 'mango']


const http = require('http');

const server = http.createServer((req, res)=>{
    res.end('Respuesta')
})

const puerto = 3000;
server.listen(puerto, () => {
    console.log('Escuchando')
})
module.exports = frutas