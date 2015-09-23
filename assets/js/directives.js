weatherApp.directive('weatherDay', function() {
  return {
    restrict: 'E',
    templateUrl: '../../templates/weather-day.html',
    replace: true
  };
});