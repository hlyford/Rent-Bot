var app = angular.module('payrent', ['payrent.charge' ,'ngRoute']);

app.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/rent', {
      templateUrl: 'app/charge/charge.html',
      controller: 'ChargeController'
    })   
    // Your code here

    // We add our $httpInterceptor into the array
    // of interceptors. Think of it like middleware for your ajax calls
    $httpProvider.interceptors.push('AttachTokens');
})