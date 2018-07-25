const express = require('express');
const mongoose = require('mongoose');
const app = express();

const port = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true}));

app.use(express.json());

app.listen(port);

//middleware


console.log('Listening on port 8080');