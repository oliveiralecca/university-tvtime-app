const express = require('express');
const route = express.Router();


// Gêneros tem uma relação muitos para muitos com vídeos, que por sua vez é uma generalização de filme


// Controllers - Funções principais de cada rota, que executam os processos utilizando os dados enviados na
// requisição, dando algum retorno para aquela rota
const filmeController = require('./controllers/filmeController');
const generoController = require('./controllers/generoController');

// Middlewares - Função intermediárias que executam algum tipo de tratamento na requisção
// managerCapa e managerIcone - Middlewares que utilizam a lib "multer" pra converter os dados de um multipart/form-data
// em dados comuns de um form, e retornam os arquivos enviados em forma de bytes
const managerCapa = require("./middlewares/managerCapa");
const managerIcone = require("./middlewares/managerIcone");
// uploadImage - Middleware que faz a conexão com o firebaseStorage, fazendo upload da imagem e guardando sua
// url no body da requisição
const uploadImage = require("./middlewares/uploadImage");

// Rota da página inicial da API
route.get("/", (req,res) => res.render("home"))

// Rotas de filme
route.post("/filme/register", managerCapa, uploadImage, filmeController.register);
route.get("/filme/list", filmeController.list);
route.get("/filme/list/:id_filme", filmeController.single);
route.put("/filme/update/:id_filme",managerCapa, uploadImage,filmeController.update);
route.delete("/filme/delete/:id_filme", uploadImage,filmeController.delete);

// Rotas de genero
route.post("/genero/register", managerIcone, uploadImage, generoController.register);
route.get("/genero/list", generoController.list)
route.get("/genero/list/:id_genero", generoController.single);
route.put("/genero/update/:id_genero",managerIcone, uploadImage, generoController.update);
route.delete("/genero/delete/:id_genero",uploadImage,generoController.delete);


module.exports = route;