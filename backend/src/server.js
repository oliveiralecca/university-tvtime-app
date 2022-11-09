const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');



app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');



app.use(routes);


app.listen(3030, () => console.log('Server listening on port 3030'))


//databaseURL = postgres://lhheztjzyyzlds:b9e460e53628e5ac01dcdc1bfb1f63ed23d51aa9104684893684f0c46676fad9@ec2-54-160-200-167.compute-1.amazonaws.com:5432/d6gu1h1g5eq4tf?schema=tvtime