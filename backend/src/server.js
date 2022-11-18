const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes');
const path = require('path');



app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors());


app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');



app.use(routes);


app.listen(3000, () => console.info('Server listening on http://localhost:3000/'))


