SW.swApp = angular.module('swApp', ['ui.router','ngAnimate']);

SW.swApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('/', {
            url: '/',
            templateUrl: 'js/templates/artistsList.html',
            controller: 'ArtistsListCtrl'
        })

        .state('/item', {
            url: '/:item',
            templateUrl: 'js/templates/artistMenu.html',
            controller: 'ShowBioCtrl'
        })
        .state('/item.bio', {
            url: '/bio',
            templateUrl: 'js/templates/biography.html'
        })
        .state('/item.topSongs', {
            url: '/top-songs',
            templateUrl: 'js/templates/topSongs.html',
            controller: 'TopSongsCtrl'
        })
        .state('/item.topSongs.song', {
            url: '/:song'
        })
        .state('/item.topSongs.song.video', {
            url: '/video'

        })
        .state('/item.topSongs.song.buy', {
            url: '/buy-song'
        })
        .state('/item.SimilarArtists', {
            url: '/similar-artists',
            templateUrl: 'js/templates/artistsList.html',
            controller: 'SimilarCtrl'
        })
        .state('/item.YouTubeVideos', {
            url: '/youtube-videos',
            controller: 'YouTubeVideosCtrl'
        });
    $urlRouterProvider.otherwise('/');

}]);

SW.swApp.filter("sanitize", ['$sce', function ($sce) {
    return function(htmlCode){
        return $sce.trustAsHtml(htmlCode);
    };
}]);


