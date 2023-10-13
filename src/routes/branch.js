const { Router } = require('express');
const { route } = require('./breakfast');
const router = Router();

dataDB = [{
    id: 'Pretoria',
    name: "PretoriaMarket",
    rating: 8
},
{
    id: 'Johannesburg',
    name: "JohannesburgMarket",
    rating: 7
},
{
    id: 'Vereeniging',
    name: "VereenigingMarket",
    rating: 4
}];

router.use((req, res, next) => {
    if (req.session.user) next();
    else res.send(401);
});

router.get('/', (req, res) => {
    const { q } = req.query
    const srch = parseInt(q) || 0;

    //  console.log(req.headers.cookie);
    const cookieValue = req.cookies || '';

    console.log(cookieValue);

    // console.log();

    res.cookie('visited', true, {
        maxAge: 10000,
    })

    if (srch !== 0 && !isNaN(srch)) {
        console.log(` Search ${srch}`);
        const srchFound = dataDB.filter(rate => (

            rate.rating >= srch

        ));

        res.send(srchFound).status(200);
    } else {
        res.send(dataDB).status(200);
    }


});


//router.get('/:rating');
module.exports = router;

