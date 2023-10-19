const { Schema,model } = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    usr: String,
    pwd: String,
    mail: String,
});

userSchema.methods.encryptPassword = (pwd) => {
    return bcrypt.hashSync(pwd, bcrypt.genSaltSync(10));
};

module.exports = model('User',userSchema);