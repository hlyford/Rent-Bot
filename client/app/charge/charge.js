angular.module('payrent.charge', [])

.controller('ChargeController', function ($scope, $http) {

  $scope.data = {};
  $scope.data.roommates = [
  // PLACE HOLDER DATA
  // {name: 'Brittany', amount: -1, phone: 4085960517}
    {name: 'Claire', amount: -1080.00, phone: 8052799089},
    {name: 'Chrysan', amount: -1185.00, email: "chrysan.j.tung@gmail.com"},
    {name: 'Brittany', amount: -1040.00, phone: 4085960517},
    {name: 'Cody', amount: -910.00, phone: 9145060053}
  ];

  $scope.data.pge = 0;
  $scope.data.comcast = 70;
  $scope.data.token;
  $scope.data.month;  

  $scope.startMoving = function(img) {
    var img$ = $(img);
    var imgWidth = img$.width();
    var screenWidth = $(window).width();
    var amount = screenWidth - (parseInt(img$.css("left"), 10) || 0);
    // if already past right edge, reset to just left of left edge
    if (amount <=0 ) {
      img$.css("left", -imgWidth);
      amount = screenWidth + imgWidth;
    }
    var moveRate = 300;   // pixels per second to move
    var time = amount * 1000 / moveRate;
    img$.stop(true)
      .animate({left: "+=" + amount}, time, "linear", function() {
        // when animation finishes, start over
        $scope.startMoving(this);
      })
  };

  $scope.showGreenChecks = function(input_field) {
    $('.checks').show();   
    $('.chargeBtn').hide();
    $('.rentHistoryBtn').removeClass('hidden');
    
    var img = $('.mover');
    img.removeClass('hidden');
    setTimeout(function() {
      $scope.startMoving(img);
    }, 800);
  }

  $scope.sendRent = function() {    
    for (var i = 0; i < $scope.data.roommates.length; i++) {
      $scope.data.roommates[i].total = Math.ceil($scope.data.roommates[i].amount - ($scope.data.pge)/5 - ($scope.data.comcast)/5);
    }
    console.log($scope.data.roommates);    

    $http({
      method: 'POST',
      url: '/sendRent',
      data: $scope.data
    }).then(function(){
      console.log('response back');
      setTimeout($scope.showGreenChecks, 800);
    })    
  };
  

 
});