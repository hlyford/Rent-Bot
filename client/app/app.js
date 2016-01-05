var app = angular.module('payrent', 
  ['payrent.charge', 'payrent.history' ,'ngRoute']);

app.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/rent', {
      templateUrl: 'app/charge/charge.html',
      controller: 'ChargeController'
    })   
    .when('/', {
      templateUrl: 'app/landing.html',
      controller: 'ChargeController'
    })   
    .when('/history', {
      templateUrl: 'app/history/history.html',
      controller: 'HistoryController'
    })   
    .otherwise({redirectTo: '/rent'});
    // Your code here

    // We add our $httpInterceptor into the array
    // of interceptors. Think of it like middleware for your ajax calls
  //  $httpProvider.interceptors.push('AttachTokens');
})