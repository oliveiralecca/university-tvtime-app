const express = require('express');
const route = express.Router();

const homeController = require('./controllers/homeController');
const filmeController = require('./controllers/filmeController')


route.get('/', homeController.index);


route.get('/users', homeController.userList);
route.get("/users/:user", homeController.findUser);
route.put("/users/:user", homeController.udateUser);
route.delete("/users/:user", homeController.udateUser);

route.get("/filmes", filmeController.index);
route.post("/filmes/create", filmeController.createFilme);
route.get("/turma/turmas", filmeController.turmas);
route.get("/turma/turmas/:id_turma", filmeController.turma);

module.exports = route;