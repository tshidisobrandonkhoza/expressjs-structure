const { Router } = require('express');
//import Users Schema
const User = require('../database/Schema/User');

const router = Router();

router.post('/login', (req, res) => {
    //get inputs
    const { username, password } = req.body;
    if (username && password) {
        if (req.session.user) {
            res.send(req.session.user);
            console.log('You are logged in');
        } else {
            req.session.user = {
                username,
            };
            res.send(req.session.user);
        }
    } else res.send(401);
});


router.post('/register', async (req, res) => {
    const { username, password, email } = req.body;
    //const userData = { username, password, email };
    //console.log(userData);
    // res.send(201);


    const userDB = await User.findOne({ $or: [{ username }, { email }] });
    if (userDB) {
        res.status(400).send({ msg: 'User already exist' });
    } else {
        const newUser = await User.create({ username, password, email });
        res.send(201);
    }

});

module.exports = router;