const express = require('express');
const bodyParser = require('body-parser');
//importação das rotas
const userRoutes = require('./routes/userRoutes');

const app = express();

//Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded(
        { extended: true }
    )
);

//Referênciando as rotas 
app.use('/user', userRoutes);

module.exports = app;
