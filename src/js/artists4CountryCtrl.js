SW.swApp.controller ('artists4CountryCtrl',['$scope','$http', function ($scope, $http) {
  var url = 'http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=Ukraine&api_key=a1b827bb5962ea81025679fd8869f5ed&format=json';

  $http.get (url)
    .success (function (data) {
      $scope.artists = data.topartists.artist;
    });  
}]);