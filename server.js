var express        = require('express');
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var authenticationController = require('./server/controllers/authentication-controller');

var app = express();
mongoose.connect('mongodb://localhost:27017/demomean');

app.use(bodyParser.json());
app.use('/app', express.static(__dirname + '/app'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.get('/', function(req, res) {
    res.sendfile('index.html');
});


// Authentication
app.post('/api/user/signup', authenticationController.signup);
app.post('/api/user/login', authenticationController.login);

app.listen(3002, function() {
    console.log("Listening for localhost:3002");
});
