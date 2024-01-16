const mongoose = require('mongoose');

//User Model
const UserSchema = new mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        email: String
});

const User = mongoose.model('User', UserSchema);

module.exports = User;