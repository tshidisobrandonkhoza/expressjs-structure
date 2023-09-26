const express = require('express');
const app = express();
const port = 1500;


//middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(`Method Used:${req.method} - Url Used:${req.url}`);
    next();
});


//sample data
const cart = [{ item: 'cereal', quantity: 4 }, { item: 'snacks', quantity: 6 }, { item: 'drinks', quantity: 10 }];

//get route
app.get('/cart', (req, res, next) => {
    console.log('Before handling request');
    next();
}, (req, res, next) => {
    res.status(200).send(cart);
    next();
}, (req, res) => {
    console.log('After handling request');
});
//route parameters
app.get('/cart/:item', (req, res) => {
    const { item } = req.params;
    const foundItem = cart.find((xtem) => (xtem.item === item));

    res.send(foundItem).status(201);

});

//post route
app.post('/cart', (req, res) => {
    const cartBody = req.body;
    console.log(cartBody);
    cart.push(cartBody);
    res.status(201).json(cart);
});

app.listen(port)
