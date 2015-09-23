var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

weatherApp.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '../../pages/home.html',
      controller: 'homeCtrl'
    })
    .when('/forecast', {
      templateUrl: '../../pages/forecast.html',
      controller: 'forecastCtrl'
    })
});

weatherApp.controller('homeCtrl', ['$scope', function($scope) {
  main = self;
}]);

weatherApp.controller('forecastCtrl', ['$scope', function($scope) {
  forecast = self;
}])