const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({

    email: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: true,

    },
    password: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    createdAt: {
        type: mongoose.SchemaTypes.Date,
        required: true,
        default: new Date(),
    },
});

//export schema into a model
module.exports = mongoose.model('users', userSchema);