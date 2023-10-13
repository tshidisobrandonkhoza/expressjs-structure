const { Router } = require('express');

const router = Router();

router.post('/', (req, res) => {
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
            res.send(201);
        }
    } else res.send(401)
});


module.exports = router;