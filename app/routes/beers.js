const express = require('express');
const router = express.Router();
const Beer = require('../models/beer');


router.get('/', (req, res) => {
    Beer.find((err, beers) => {
        if(err){
            res.status(400).send(err);
        } else {
            res.status(200).json(beers);
        }
    });
    
});

router.post('/', (req, res) => {
    let beer = new Beer();
    beer.name = req.body.name;
    beer.rating = req.body.rating;
    beer.save((err, beerDoc) =>{
        if(err){
            res.status(400).send(err);
        } else {
            res.status(200).send('Beer posted!' + beerDoc);
        }
    });
});

//routes at /beers/:beer_id

router.get('/:beer_id', (req,res) => {
    Beer.findById(req.params.beer_id, (err, beerFound) =>{
        if(err){
            res.status(400).send(err);
        } else {
            res.status(200).json(beer);
        }
    });
});

router.put('/:beer_id', (req, res) =>{
    Beer.findById(req.params.beer_id, (err, beerFound) =>{
        if(err){
            res.status(400).send(err);
        } else{
            beerFound.name = req.body.name;
            beerFound.rating = req.body.rating;
            beerFound.save((err, beerSaved)=>{
                if(err){
                    res.status(400).send(err);
                } else{
                    res.status(200).send('Beer putted!\n' + beerSaved);
                }
            });
        }
    });
});

router.delete('/:beer_id', (req, res) => {
    Beer.deleteOne({_id: req.params.beer_id}, (err)=>{
        if(err){
            res.status(400).send(err);
        } else {
            res.status(200).send('We deleted the beer');
        }
    });
});

module.exports = router;