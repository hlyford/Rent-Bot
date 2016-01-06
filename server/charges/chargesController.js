var Charge = require('./chargesModel.js');
    Q = require('q');
    // util = require('../config/utils.js');

var createCharge = Q.nbind(Charge.create, Charge);
var findAllCharges = Q.nbind(Charge.find, Charge);
var request = require('request');
//var findAllLinks = Q.denodeify(Link.find, Link);


module.exports = {

  addRent: function(req, res, next) {
    var body = req.body;

    var newCharge = {
      month: body.month,
      pge_total: body.pge,
      comcast_total: body.comcast,      
    };    
    // *** TURN ON send to venmo with callback to here  *******
    sendToVenmo(req.body);

    createCharge(newCharge).then(function(){
      res.send('got it');
    })      

  },
  getCharges: function(req, res, next) {    
    var records;
    findAllCharges()
      .then(function(records) {
        records = records;
        console.log('now', records);
        res.send(JSON.stringify(records));
      })          
  }

};

sendToVenmo = function(data) {    
    var month = data.month, token = data.token;
    // loop through each item in the array of roommates
      for (var i = 0; i < data.roommates.length; i++) {
        var formData = {audience: 'private', access_token: token, phone: data.roommates[i].phone, amount: data.roommates[i].total, 
          note: data.roommates[i].name + ", your rent, PG&E, and Comcast total for " + month + " is $" + data.roommates[i].total
        };
        console.log(formData);
        //send to Venmo
        request.post({url:'https://api.venmo.com/v1/payments', formData: formData}, function optionalCallback(err, httpResponse, body) {
          if (err) {
            return console.error('upload failed:', err);
          }
          console.log('Upload successful!  Server responded with:', body);
        });
      }
              
      
  };





