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
 
  
 swApp.controller ('artists4CountryCtrl', function ($scope) {
  $scope.artists = [
    {src: 'images/artist.jpg', name: "vasya"},
    {src: 'images/artist.jpg', name: "petja"},
    {src: 'images/artist.jpg', name: "ARTIST3with VeryLongName"},
    {src: 'images/artist.jpg', name: "ARTIST4"},
    {src: 'images/artist.jpg', name: "ARTIST5"},
    {src: 'images/artist.jpg', name: "ARTIST6"},
    {src: 'images/artist.jpg', name: "Іво Бобул"}
  ];
});


 