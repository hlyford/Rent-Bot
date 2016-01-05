// node path: /usr/local/bin/node
// path to file: /Users/honree/2015-11-mvp/twilioCron.js
// run 25th of every month

// every minute: * * * * * /usr/local/bin/node /Users/honree/2015-11-mvp/twilioCron.js
	var fs = require('fs');
	var shell = require('child_process');

	// shell.exec('echo "Hello World" ', {silent: true}, function(e, stdin, stdout) {
	// 	if (e) {
	// 		console.log('bummer');
	// 	}
	// 	fs.appendFile('/Users/honree/Desktop/test.txt', stdout + stdin);
	// });


	var auth_token = 'c49b0f7adc2c1041ef5a4d74b50fdc77';
	// Your accountSid and authToken from twilio.com/user/account
	var accountSid = 'AC50017298eec30fbd26d41eaec925dbd9';
	var authToken = auth_token;
	var client = require('twilio')(accountSid, authToken);
	 
	var reminder = function() {
		console.log('sending twilions');
		client.messages.create({
	    body: "Hey Henry, it's time to collect the rent!"  +
	     " Daniel Alegre, PO box 472470, SF, CA 94147 | PG&E: college pw",
	    to: "+19079478364",
	    from: "+12513334459"
		}, function(err, message) {
			console.log(message.sid);
	    process.stdout.write(message.sid);
		});
	};

	setTimeout(reminder, 2000);