const express = require('express');
const app = express();
const port = 1500;

const cookieParser = require('cookie-parser');
const session = require('express-session');

const breakfastRouter = require('./routes/breakfast');
const lunchRouter = require('./routes/lunch');
const branchRouter = require('./routes/branch');
const cartRouter = require('./routes/cart');



//middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(`Method Used:${req.method} - Url Used:${req.url}`);
    next();
});
app.use(cookieParser());

app.use(session({
    secret: 'ABC',
    resave: false,
    saveUninitialized: false,
}));

app.use('/api/breakfast', breakfastRouter);
app.use('/api/lunch', lunchRouter);
app.use('/api/branch', branchRouter);
app.use('/api/cart', cartRouter);

app.listen(port)
