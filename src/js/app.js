SW.swApp = angular.module('swApp', ['ui.router']);

SW.swApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('/home', {
            url: '/home',
            templateUrl: 'js/templates/artists4Country.html',
            controller: 'artistsListCtrl'
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
        })
        .state('/item.SimilarArtists', {
            url: '/SimilarArtists',
            templateUrl: 'js/templates/artists4Country.html',
            controller: 'similarCtrl'
        })
        .state('/item.YouTubeVideos', {
            url: '/YouTubeVideos',
            controller: 'YouTubeVideosCtrl'
        });
    $urlRouterProvider.otherwise('/home');

}]);

SW.swApp.filter("sanitize", ['$sce', function ($sce) {
    return function(htmlCode){
        return $sce.trustAsHtml(htmlCode);
    };
}]);

