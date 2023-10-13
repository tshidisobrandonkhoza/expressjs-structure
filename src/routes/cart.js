const { Router, request } = require('express');
const router = Router();



const dataDb = [{ item: 'cheeseCake', quantity: 14 }, { item: 'sandwich', quantity: 16 }, { item: 'burger', quantity: 18 }];



router.get('/', (req, res) => {
    //console.log('Adding to cart');

    const { cart } = req.session
    if (!cart) {
        res.send('empty');
    } else {

        res.send(cart);
    }

});

router.post('/item', (req, res) => {
    const { item, quantity } = req.body;
    const cartItem = { item, quantity };

    console.log(cartItem);
    const { cart } = req.session;

    if (cart) {

        req.session.cart.items.push(cartItem);
    } else {
        req.session.cart = {
            items: [cartItem]
        };
    }
    res.send(201);
});


module.exports = router;
