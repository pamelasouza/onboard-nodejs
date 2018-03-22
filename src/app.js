'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//conexao bd
mongoose.connect('mongodb://pamqk:pancake10@ds119449.mlab.com:19449/onboardb')

//carrega os models
const Product = require('./models/product');

//carrega as rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
    extended: false
}));

app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;