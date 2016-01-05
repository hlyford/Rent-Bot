// var linksController = require('../links/linkController.js');
// var userController = require('../users/userController.js');
// var helpers = require('./helpers.js'); // our custom middleware
var path = require('path');
var bodyParser = require('body-parser');
var request = require('request');
var chargesController = require('../charges/chargesController');
var twilio = require('../twilio');

module.exports = function (app, express) {

  app.set('views', path.join(__dirname, "/../../client"));  
  app.set('view engine', 'html');
  app.use(express.static(path.join(__dirname, "/../../client")));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));  
  

  // main index route
  // app.get('/', function(req, res) {         
  //   console.log(res);
  //   res.render('dummy.html');
  // });
  //recieve the data from the client here
  app.post('/sendRent', chargesController.addRent);
  app.get('/sendRent', chargesController.getCharges);

  // Twilio test route
  app.get('/testTwilio', function(req, res) {
    twilio();
    res.send('got twilio');

  });


};