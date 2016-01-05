$( document ).ready(function() { 

	// $(function () {
	//   $('[data-toggle="tooltip"]').tooltip()
	// })
	$('.signupBtn').on('click', function() {
		$('#signupModal').modal('hide');
	})
	// send Twilio test off to backend
	$('#testTwilio').click(function() {
		$.ajax({
		  url: "/testTwilio",
		  method: 'GET'
		}).done(function() {
		  console.log('twilio done');
		});
	})


});