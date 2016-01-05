//var twilio = require('twilio');

module.exports = function() {
	var auth_token = 'c49b0f7adc2c1041ef5a4d74b50fdc77';
	// Your accountSid and authToken from twilio.com/user/account
	var accountSid = 'AC50017298eec30fbd26d41eaec925dbd9';
	var authToken = auth_token;
	var client = require('twilio')(accountSid, authToken);
	 
	var reminder = function() {
		console.log('sending twilions');
		client.messages.create({
	    body: "Hey Henry, it's time to collect the rent!",
	    to: "+19079478364",
	    from: "+12513334459"
		}, function(err, message) {
			console.log(message.sid);
	    process.stdout.write(message.sid);
		});
	};
	reminder();
};

// module.exports.runTwilio = {
// 	reminder2: function() {
// 		reminder();
// 	}
// };