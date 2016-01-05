// var linksController = require('../links/linkController.js');
// var userController = require('../users/userController.js');
// var helpers = require('./helpers.js'); // our custom middleware
var path = require('path');
var bodyParser = require('body-parser');
var request = require('request');

module.exports = function (app, express) {

  app.set('views', path.join(__dirname, "/../../client"));  
  app.set('view engine', 'html');
  app.use(express.static(path.join(__dirname, "/../../client")));
  app.use(bodyParser.urlencoded({ extended: true }));  
  

  // main index route
  // app.get('/', function(req, res) {         
  //   console.log(res);
  //   res.render('dummy.html');
  // });
  //recieve the data from the client here
  app.post('/sendRent', function(req, res) {
    console.log(req.body);
    // organize the data, add the git token, send off

    request.post({url:'https://api.venmo.com/v1', formData: formData}, function optionalCallback(err, httpResponse, body) {
      if (err) {
        return console.error('upload failed:', err);
      }
      console.log('Upload successful!  Server responded with:', body);
    });

  })

};