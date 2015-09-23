weatherApp.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: './../../pages/home.html',
      controller: 'homeCtrl',
      controllerAs: 'home'
    })
    .when('/forecast', {
      templateUrl: './../../pages/forecast.html',
      controller: 'forecastCtrl',
      controllerAs: 'forecast'
    })
    .when('/forecast/:days', {
      templateUrl: './../../pages/forecast.html',
      controller: 'forecastCtrl',
      controllerAs: 'forecast'
    })
});