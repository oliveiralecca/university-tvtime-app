const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');



app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.use(express.static(path.resolve(__dirname, '..', 'public')));

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');



app.use(routes);


app.listen(3030, () => console.log('Server listening on http://localhost:3030/'))


//DATABASE_URL="postgres://vtkegxfd:AjrKUMY5YiFS5G_qwGtrkP3JGfQyu-6A@babar.db.elephantsql.com/vtkegxfd?schema=tvtime"