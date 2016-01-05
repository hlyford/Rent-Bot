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
  $scope.total = function (roommateAmt, PgeAmt, comcastAmt) {
    return roommateAmt + PgeAmt + comcastAmt;
  }

  $scope.sendRent = function() {

    return $http({
      method: 'POST',
      url: '/rentData',
      data: data
    });    

  };

 
  });