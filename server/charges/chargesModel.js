var mongoose = require('mongoose');
// var crypto = require('crypto');

var ChargesSchema = new mongoose.Schema({
 month: String,
 pge_total: Number,
 comcast_total: Number,
 // brittany: Number,
 // claire: Number,
 // chrysan: Number,
 // cody: Number
});


// ChargesSchema.pre('save', function (next) {   
//   next();
// });

module.exports = mongoose.model('Charge', ChargesSchema);


