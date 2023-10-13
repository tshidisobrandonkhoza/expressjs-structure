const mongoose = require('mongoose');

//mongoose.connect('mongodb://username:password@localhost:27017/expressjs_structure');
mongoose.connect('mongodb://127.0.0.1:27017/expressjs_structure')
    .then(() => console.log('Connected to DB'))
    .catch((err) => console.log(err));
