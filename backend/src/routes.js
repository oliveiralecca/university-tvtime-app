const express = require('express');
const route = express.Router();

// Controllers
const filmeController = require('./controllers/filmeController');
const generoController = require('./controllers/generoController');

// Middlewares
const managerCapa = require("./middlewares/managerCapa");
const managerIcone = require("./middlewares/managerIcone")
const uploadImage = require("./middlewares/uploadImage");



// Rotas de filme
route.get("/filme/index", filmeController.index);
route.post("/filme/register", managerCapa, uploadImage, filmeController.register);
route.get("/filme/list", filmeController.list);
route.get("/filme/list/:id_filme", filmeController.single);
route.put("/filme/update/:id_filme",managerCapa, uploadImage,filmeController.update);
route.delete("/filme/delete/:id_filme",filmeController.delete);

// Rotas de genero
route.post("/genero/register", managerIcone, uploadImage, generoController.register);
route.get("/genero/list", generoController.list)
route.get("/genero/list/:id_genero", generoController.single);
route.put("/genero/update/:id_genero",managerIcone, uploadImage, generoController.update);
route.delete("/genero/delete/:id_genero",generoController.delete);


module.exports = route;