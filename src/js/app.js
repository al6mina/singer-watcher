

SW.swApp = angular.module('swApp', ['ui.router']);

SW.swApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('/home', {
            url: '/home',
            templateUrl: 'js/templates/artists4Country.html',
            controller: 'artists4CountryCtrl'
        })
        .state('/item', {
            url: '/:item',
            templateUrl: 'js/templates/artistMenu.html',
            controller: 'showBioCtrl'
        })
        .state('/item.bio', {
            url: '/bio',
            templateUrl: 'js/templates/biography.html'
        })
        .state('/item.topSongs', {
            url: '/topSongs',
            templateUrl: 'js/templates/topSongs.html',
            controller: 'topSongsCtrl'
        });
    $urlRouterProvider.otherwise('/home');

}]);

SW.swApp.filter("sanitize", ['$sce', function ($sce) {
    return function(htmlCode){
        return $sce.trustAsHtml(htmlCode);
    };
}]);

