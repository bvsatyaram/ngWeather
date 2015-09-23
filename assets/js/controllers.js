weatherApp.controller('homeCtrl', ['$scope', '$location', 'cityService', function($scope, $location, cityService) {
  var home = this;
  home.city = cityService.city;

  home.submit = function() {
    $location.path("/forecast");
  };

  $scope.$watch('home.city', function() {
    cityService.city = home.city;
  })
}]);

weatherApp.controller('forecastCtrl', ['$scope', '$routeParams', 'cityService', 'weatherService', function($scope, $routeParams, cityService, weatherService) {
  var forecast = this;
  forecast.city = cityService.city;
  forecast.daysOptions = [2, 4, 5, 7];
  forecast.days = $routeParams.days || forecast.daysOptions[0];

  forecast.weatherResult = weatherService.fetch(forecast.city, forecast.days);

  forecast.convertToCentigrade = function(degK) {
    return Math.round(degK - 273.15);
  };
  forecast.converToDate = function(timeStamp) {
    return new Date(timeStamp*1000);
  };
}]);