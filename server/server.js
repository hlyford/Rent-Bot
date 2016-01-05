var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
//connnect to mongo
var dbURI = process.env.MONGO_URI || 'mongodb://localhost/rent';

mongoose.connect(dbURI);
console.log('MongoDB listening...')
// configure our server with all the middleware and routing
//require('./config/middleware.js')(app, express);

require('./config/routes.js')(app, express);

var port = process.env.PORT || 8000;
// start listening to requests on port 8000
app.listen(port);
console.log('Rent app listening on 8000');

// export our app for testing and flexibility, required by index.js
module.exports = app;

//mongodb://heroku_mx2jx9gp:f0peurgnkq6e73r27bkako2td8@ds039145.mongolab.com:39145/heroku_mx2jx9gp