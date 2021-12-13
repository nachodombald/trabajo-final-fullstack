const express = require('express');
const routes = express.Router();

const {
    renderHome,
    renderContacto,
    consulta,
} = require("../controllers/proyectoControllers");

routes.get("/",renderHome);
routes.get("/contacto",renderContacto);

routes.post("/consulta",consulta);

module.exports=routes;