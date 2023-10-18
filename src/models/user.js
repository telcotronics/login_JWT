const { Schema,model } = require('mongoose');

const userSchema = new Schema({
    user: String,
    email: String,
    password: String
});

module.exports = model('User',userSchema);