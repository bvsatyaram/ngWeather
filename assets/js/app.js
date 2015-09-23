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
    .when('/forecast/:days', {
      templateUrl: '../../pages/forecast.html',
      controller: 'forecastCtrl',
      controllerAs: 'forecast'
    })
});

weatherApp.service('cityService', function() {
  this.city = "New York, NY";
});

weatherApp.directive('weatherDay', function() {
  return {
    restrict: 'E',
    templateUrl: '../../templates/weather-day.html',
    replace: true
  };
});

weatherApp.controller('homeCtrl', ['$scope', 'cityService', function($scope, cityService) {
  var home = this;
  home.city = cityService.city;

  $scope.$watch('home.city', function() {
    cityService.city = home.city;
  })
}]);

weatherApp.controller('forecastCtrl', ['$scope', '$resource', '$routeParams', 'cityService', function($scope, $resource, $routeParams, cityService) {
  var forecast = this;
  forecast.city = cityService.city;
  forecast.daysOptions = [2, 4, 5, 7];
  forecast.days = $routeParams.days || forecast.daysOptions[0];
  forecast.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", {
    callback: "JSON_CALLBACK"
  }, {
    get: {method: "JSONP"}
  });
  forecast.weatherResult = forecast.weatherAPI.get({
    q: forecast.city,
    cnt: forecast.days
  });
  forecast.convertToCentigrade = function(degK) {
    return Math.round(degK - 273.15);
  };
  forecast.converToDate = function(timeStamp) {
    return new Date(timeStamp*1000);
  };
}]);
