angular.module('payrent.charge', [])

.controller('ChargeController', function ($scope, $http) {

  $scope.data = {};
  $scope.data.roommates = [
  // PLACE HOLDER DATA
    {name: 'Claire', amount: 0.01, phone: 9079474631},
    {name: 'Chrysan', amount: 0.01, phone: 16505186063},
    {name: 'Brittany', amount: 0.01, phone: 9079474631},
    {name: 'Cody', amount: 0.01, phone: 16505186063}
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
    // if already past right edge, reset to 
    // just left of left edge
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

    console.log('moving?');
    var img = $('.mover');
    img.removeClass('hidden');
    $scope.startMoving(img);
  }

  $scope.sendRent = function() {    
    for (var i = 0; i < $scope.data.roommates.length; i++) {
      $scope.data.roommates[i].total = $scope.data.roommates[i].amount + ($scope.data.pge)/5 + ($scope.data.comcast)/5;
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