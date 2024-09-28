const mongoose = require("mongoose");
const validator = require('validator');

userSchema = mongoose.Schema({
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        validate: [validator.isEmail, 'Must be a valid Email']
    },
    password:{
        type: String,
        required: true,
    },
    token:{
        type: String
    }
})

module.exports = mongoose.model("User", userSchema);
