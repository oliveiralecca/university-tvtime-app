// Biblioteca para criar um servidor
const express = require('express');
const app = express();
// Biblioteca para permitir requisições de aplicações externas
const cors = require('cors');
// Biblioteca para tratar caminhos
const path = require('path');
// Importação das rotas
const routes = require('./routes');




app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors());

// Definição de pastas de visualização e motor de visualização como ejs
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');



app.use(routes);


app.listen(3000, () => console.info('Server listening on http://localhost:3000/'))


