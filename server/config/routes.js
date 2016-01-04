// var linksController = require('../links/linkController.js');
// var userController = require('../users/userController.js');
// var helpers = require('./helpers.js'); // our custom middleware
var path = require('path');

module.exports = function (app, express) {

  app.set('views', __dirname + '/../../client');
  app.set('view engine', 'html');
  app.use(express.static(path.join(__dirname, "../client")));

  app.get('/', function(req, res) {   
    console.log(req); 
    res.render('dummy');
  });

  // app.get('/:code', linksController.navToLink);

  // app.post('/api/users/signin', userController.signin);
  // app.post('/api/users/signup', userController.signup);
  // app.get('/api/users/signedin', userController.checkAuth);

  // // authentication middleware used to decode token and made available on the request
  // // app.use('/api/links', helpers.decode);
  // app.get('/api/links/', linksController.allLinks);
  // app.post('/api/links/', linksController.newLink);

  // // If a request is sent somewhere other than the routes above,
  // // send it through our custom error handler
  // app.use(helpers.errorLogger);
  // app.use(helpers.errorHandler);
};