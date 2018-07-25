const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('got beers mate');
});

router.post('/', (req, res) => {
    console.log('postin beers my man');
    console.log('out for a rip');
});


module.exports = router;