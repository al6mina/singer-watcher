var swApp = angular.module('swApp',['ngRoute']);

swApp.config(['$routeProvider', function ($routeProvider, $templateProvider) { 
 	$routeProvider
   	.when ('/', {
      templateUrl: 'js/templates/artists4Country.html',
      controller: 'artists4CountryCtrl'
    })
    .when ('/:item/bio', {
      templateUrl: 'js/templates/artistBio.html',
      controller: 'showBioCtrl'
    })
    .when ('/:item/TopSongs', {
      templateUrl: 'js/templates/TopSongs.html',
      controller: 'topSongsCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
   }
]);

swApp.filter("sanitize", ['$sce', function ($sce) {
  return function(htmlCode) {
    return $sce.trustAsHtml(htmlCode);
  };
}]);

 
 
 
