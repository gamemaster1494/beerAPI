const express = require('express');
const mongoose = require('mongoose');
const app = express();
const router = express.Router();
const beers = require('./app/routes/beers');
const port = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true}));

app.use(express.json());

app.listen(port);

mongoose.connect('mongodb://localhost:27017/beers', {
    useNewUrlParser: true
});

mongoose.connection.on('connected', () => {
    console.log('connected to beers database!');
});

mongoose.connection.on('error', (err) => {
    console.log('uh oh ' + err);
});

console.log('Listening on port 8080');


app.get('/', (req, res) => {
    res.json({message: 'Welcome to Watermelon HQ! Try hitting /api!' });    
});

app.use('/api', router);

router.get('/', (req, res) => {
    res.json({message: 'Great! now checkout the /api/beers!'});
});

router.use('/beers', beers);
//looking for base/api/beers
