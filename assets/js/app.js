var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

weatherApp.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '../../pages/home.html',
      controller: 'homeCtrl',
      controllerAs: 'home'
    })
    .when('/forecast', {
      templateUrl: '../../pages/forecast.html',
      controller: 'forecastCtrl',
      controllerAs: 'forecast'
    })
});

weatherApp.service('cityService', function() {
  this.city = "New York, NY";
});

weatherApp.controller('homeCtrl', ['$scope', 'cityService', function($scope, cityService) {
  var home = this;
  home.city = cityService.city;

  $scope.$watch('home.city', function() {
    cityService.city = home.city;
  })
}]);

weatherApp.controller('forecastCtrl', ['$scope', 'cityService', function($scope, cityService) {
  var forecast = this;
  forecast.city = cityService.city;
}]);
