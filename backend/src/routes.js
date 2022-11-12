const express = require('express');
const route = express.Router();

const filmeController = require('./controllers/filmeController');
const generoController = require('./controllers/generoController')


route.get("/filme/index", filmeController.index);
route.post("/filme/register", filmeController.register);
route.get("/filme/list", filmeController.list);
route.get("/filme/list/:id_filme", filmeController.single);
route.put("/filme/update/:id_filme",filmeController.update);
route.delete("/filme/delete/:id_filme",filmeController.delete);

route.get("/genero/index", generoController.index);
route.post("/genero/register", generoController.register);
route.get("/genero/list", generoController.list)
route.get("/genero/list/:id_genero", generoController.single);
route.put("/genero/update/:id_genero",generoController.update);
route.delete("/genero/delete/:id_genero",generoController.delete);

module.exports = route;