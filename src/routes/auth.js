const { Router } = require('express');
//import Users Schema
const User = require('../database/Schema/User');

//password hashing
const { hashPassword, compPassword } = require('../utils/helpers');


const router = Router();

router.post('/login', async (req, res) => {
    //get inputs
    const { email, password } = req.body;
    if (!req.session.user) {
        if (!email || !password) return res.send(400);
        //query the database
        const userDB = await User.findOne({ email });
        if (!userDB) return res.send(401);
        const isValid = compPassword(password, userDB.password);

        if (!isValid) {
            console.log('couldnt log you in');
            return res.send(401);
        }
        else {
            req.session.user = userDB;
            console.log('you are logged in');
            return res.send(200);
        }
    } else {
        console.log('already logged in');
        res.send(200);
    }

});


router.post('/register', async (req, res) => {
    const { email } = req.body;
    // const { username, email } = req.body;

    const userDB = await User.findOne({ email });
    //const userDB = await User.findOne({ $or: [{ username }, { email }] });
    if (userDB) {
        res.status(400).send({ msg: 'User already exist' });
    } else {
        const password = hashPassword(req.body.password)
        const newUser = await User.create({ email, password });
        res.send(201);
    }
});

module.exports = router;