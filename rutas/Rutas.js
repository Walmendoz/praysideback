const express = require("express");
const appr = express();

appr.use("/usuarios/", require("../routers/Usuarios"));
appr.use("/regionales", require("../routers/Regionales"));
appr.use("/vinculaciones/", require("../routers/Vinculaciones"));
appr.use("/gruposdeoracion/", require("../routers/Gruposdeoracion"));
appr.use("/imagenes", require("./routers./Imagenes"));

module.exports = Rutas;
