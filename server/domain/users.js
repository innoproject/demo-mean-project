var mongoose = require('mongoose');

module.exports = mongoose.model('user', {
    email: String,
    password: String
});
