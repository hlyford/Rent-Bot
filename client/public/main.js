$( document ).ready(function() { 
	// readjust if window changes size
    // $(window).resize(function() {
    //     $(".mover").each(function() {
    //         startMoving(this);
    //     });
    // });
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
	// $('.chargeBtn').click(function() {
	// 	console	.log('moving?');
	// 	var img = $('.mover');
	// 	img.removeClass('hidden');
	// 	startMoving(img);
	// })

	// function startMoving(img) {
 //    var img$ = $(img);
 //    var imgWidth = img$.width();
 //    var screenWidth = $(window).width();
 //    var amount = screenWidth - (parseInt(img$.css("left"), 10) || 0);
 //    // if already past right edge, reset to 
 //    // just left of left edge
 //    if (amount <=0 ) {
 //        img$.css("left", -imgWidth);
 //        amount = screenWidth + imgWidth;
 //    }
 //    var moveRate = 300;   // pixels per second to move
 //    var time = amount * 1000 / moveRate;
 //    img$.stop(true)
 //        .animate({left: "+=" + amount}, time, "linear", function() {
 //            // when animation finishes, start over
 //            startMoving(this);
 //        })
	// };
        


});