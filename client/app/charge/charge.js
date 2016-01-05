angular.module('payrent.charge', [])

.controller('ChargeController', function ($scope, $http) {

  $scope.data = {};
  $scope.data.roommates = [
    {name: 'Claire', amount: 200, phone: 44},
    {name: 'Cody', amount: 250, phone: 44},
    {name: 'Brittany', amount: 7000, phone: 44},
    {name: 'Cody', amount: 175, phone: 44}
  ];

  $scope.data.pge = 0;
  $scope.data.comcast = 70;
  $scope.data.token;
  $scope.data.month;

  

  $scope.sendRent = function() {
    for (var i = 0; i < $scope.data.roommates.length; i++) {
      $scope.data.roommates[i].total = $scope.data.roommates[i].amount + ($scope.data.pge)/5 + ($scope.data.comcast)/5;
    }
    console.log($scope.data.roommates);    

    $http({
      method: 'POST',
      url: '/sendRent',
      data: $scope.data
    });    

  };

 
  });