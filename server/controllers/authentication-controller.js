//var mongoose = require('mongoose');
var user     = require('../domain/users');

module.exports.signup = function(request, response) {
    var newUser = new user(request.body);
    newUser.save();

    response.json(request.body);
}

module.exports.login = function(request, response) {
    user.find(request.body, function(error, result) {
        if(error) {
            console.error('Some error occured while finding the user');
            return response.send();
        }
        if(result && result.length === 1) {
            console.log("User loging is successfull");
            response.json(request.body.email);
        }
    });
}
