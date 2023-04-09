const express = require('express');
const router = express.Router();

const ftp = require('ftp');
const multer = require('multer');
const ftpStorage = require('multer-ftp');

function subirimagen(file) {
    const ftpClient = new ftp();
        ftpClient.connect({
        //  port: //puerto del servidor/,
            host: '161.97.77.49',
            user: 'admin_prayside',
            password: 'Mendoz2704'
    });

    const pathdestino = 'https://prayside.com/redsocial'
    const storage = new ftpStorage({
        basepath: 'ubicacion destino del servidor',
        connection: ftpClient,
        destination: (req, file, options, cb) => {
            cb(null, pathdestino);
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + '-' + Date.now())
            }
    });

    const upload = multer({storage, fileFilter});  
}


module.exports = {
    subirimagen: subirimagen,
};


/*
subir Imagen con ftp
npm i ftp multer multer-ftp
const ftp = require('ftp');
const multer = require('multer');
const ftpStorage = require('multer-ftp');

const ftpClient = new ftp();
    ftpClient.connect({
        port: //puerto del servidor,
        host: 'hostname',
        user: 'username',
        password: 'password'
    });

const storage = new ftpStorage({
        basepath: 'ubicacion destino del servidor',
        connection: ftpClient,
        destination: (req, file, options, cb) => {
            cb(null, 'path-destino');
        }
    });

const upload = multer({storage, fileFilter});


*/
