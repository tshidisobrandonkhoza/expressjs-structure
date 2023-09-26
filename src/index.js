const express = require('express');
const app = express();
const port = 1500;

const breakfastRouter = require('./routes/breakfast');
const lunchRouter = require('./routes/lunch');
const branchRouter = require('./routes/branch');

//middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(`Method Used:${req.method} - Url Used:${req.url}`);
    next();
});

app.use('/api/breakfast', breakfastRouter);
app.use('/api/lunch', lunchRouter);
app.use('/api/branch', branchRouter);

app.listen(port)
