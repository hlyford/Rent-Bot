angular.module('payrent.charge', [])

.controller('ChargeController', function ($scope, $http) {

  $scope.data = {};

  $scope.sendRent = function() {

    return $http({
      method: 'POST',
      url: '/rentData',
      data: data
    });


  };

 
  });