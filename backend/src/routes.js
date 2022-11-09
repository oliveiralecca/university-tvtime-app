const express = require('express');
const route = express.Router();

const homeController = require('./controllers/homeController');
const turmaController = require('./controllers/turmaController')


route.get('/', homeController.index);


route.post('/user', homeController.userRegister)
route.get('/users', homeController.userList);
route.get("/users/:user", homeController.findUser);
route.put("/users/:user", homeController.udateUser);
route.delete("/users/:user", homeController.udateUser);

route.get("/turma/index", turmaController.index);
route.post("/turma/create", turmaController.createTurma);
route.get("/turma/turmas", turmaController.turmas);
route.get("/turma/turmas/:id_turma", turmaController.turma);

module.exports = route;