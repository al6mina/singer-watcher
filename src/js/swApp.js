var swApp = angular.module('swApp',['ngRoute']);

swApp.config(['$routeProvider', function ($routeProvider, $templateProvider) { 
 	$routeProvider
 	.when ('/', {
    templateUrl: 'js/templates/artists4Country.html',
    controller: 'artists4CountryCtrl'
      })
  .when ('/home', {
    templateUrl: 'js/templates/artists4Country.html',
    controller: 'artists4CountryCtrl'
      })
 	.when ('/:item',{

    templateUrl: 'js/templates/artistBio.html',
    controller: 'showBioCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
 }
 ]);
 
  
 swApp.controller ('artists4CountryCtrl',['$scope','$http', function ($scope, $http) {
  var url = 'http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=Ukraine&api_key=a1b827bb5962ea81025679fd8869f5ed&format=json';

   $http.get (url)
        .success (function (data) {
          $scope.artists = data.topartists.artist;
        });  
}]);


 