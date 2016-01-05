var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

// connect to mongo database named "shortly"
//mongoose.connect('mongodb://localhost/');

// configure our server with all the middleware and routing
//require('./config/middleware.js')(app, express);

require('./config/routes.js')(app, express);

// start listening to requests on port 8000
app.listen(8000);
console.log('Rent app listening on 8000');

// export our app for testing and flexibility, required by index.js
module.exports = app;