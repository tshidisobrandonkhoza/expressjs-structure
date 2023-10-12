const { Router } = require('express');

const router = Router();

//sample data
const dataDb = [{ item: 'cereal', quantity: 4 }, { item: 'toast', quantity: 6 }, { item: 'coffee', quantity: 10 }];

//get route
router.get('/', (req, res, next) => {
    console.log('Before handling request');

    next();
}, (req, res, next) => {
    res.status(200).send(dataDb);
    next();
}, (req, res) => {
    console.log('After handling request');
});


//route parameters
router.get('/:item', (req, res) => {
    const { item } = req.params;
    const foundItem = dataDb.find((xtem) => (xtem.item === item));

    res.send(foundItem).status(201);

});

//post route
router.post('/', (req, res) => {
    const cartBody = req.body;
    console.log(cartBody);
    dataDb.push(cartBody);
    res.status(201).json(dataDb);
});

module.exports = router;