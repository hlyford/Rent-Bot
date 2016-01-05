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
       
  },
  getCharges: function(req, res, next) {    
    var records;
    findAllCharges()
      .then(function(records) {
        records = records;
        console.log('now', records);
      })  
    
    res.send(JSON.stringify(records));
  },

  sendToVenmo: function(data) {
    // STILL NEED TO DO ALL THIS
     // organize the data, add the git token, send off

    // request.post({url:'https://api.venmo.com/v1', formData: formData}, function optionalCallback(err, httpResponse, body) {
    //   if (err) {
    //     return console.error('upload failed:', err);
    //   }
    //   console.log('Upload successful!  Server responded with:', body);
    // });
  },


};