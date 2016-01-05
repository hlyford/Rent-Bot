var Charge = require('./chargesModel.js');
    Q = require('q');
    // util = require('../config/utils.js');

var createCharge = Q.nbind(Charge.create, Charge);
var findAllCharges = Q.nbind(Charge.find, Charge);
//var findAllLinks = Q.denodeify(Link.find, Link);

module.exports = {

  addRent: function(req, res, next) {
    var body = req.body;

    var newCharge = {
      month: body.month,
      pge_total: body.pge,
      comcast_total: body.comcast,      
    };
    
    createCharge(newCharge);
    

    // organize the data, add the git token, send off

    // request.post({url:'https://api.venmo.com/v1', formData: formData}, function optionalCallback(err, httpResponse, body) {
    //   if (err) {
    //     return console.error('upload failed:', err);
    //   }
    //   console.log('Upload successful!  Server responded with:', body);
    // });
  },
  getCharges: function(req, res) {
    var allCharges = findAllCharges();
    res.send(allCharges);
  },

  sendToVenmo: function(data) {

  },

  newLink: function (req, res, next) {
    var url = req.body.url;
    if (!util.isValidUrl(url)) {
      return next(new Error('Not a valid url'));
    }

    findLink({url: url})
      .then(function (match) {
        if (match) {
          res.send(match);
        } else {
          return util.getUrlTitle(url);
        }
      })
      .then(function (title) {
        if (title) {
          var newLink = {
            url: url,
            visits: 0,
            base_url: req.headers.origin,
            title: title
          };
          return createLink(newLink);
        }
      })
      .then(function (createdLink) {
        if (createdLink) {
          res.json(createdLink);
        }
      })
      .fail(function (error) {
        next(error);
      });
  },

  

};