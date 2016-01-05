angular.module('payrent.history', [])

.controller('HistoryController', function ($scope, $http) {

	$scope.data = [
		// {month: 'test', pge: 55, comcast: 50},
		// {month: 'test', pge: 55, comcast: 50}
	];
	$scope.show = function() {		
	}

	$scope.getHistory = function() {
		$http({
      method: 'GET',
      url: '/sendRent',      
    }).then(function(resp) {
    	$scope.data = resp.data; 
    })
	};

	$scope.getHistory();


});