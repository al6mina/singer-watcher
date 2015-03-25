SW.swApp = angular.module('swApp', ['ui.router','ngAnimate', 'pascalprecht.translate', 'ngCookies']);

SW.swApp.config(['$stateProvider', '$urlRouterProvider', '$translateProvider', function ($stateProvider, $urlRouterProvider, $translateProvider) {
    $stateProvider
        .state('/', {
            url: '/',
            templateUrl: 'js/templates/artistsList.html',
            controller: 'ArtistsListCtrl'
        })
        .state ('/favourite', {
        url: '/favourite',
        templateUrl: 'js/templates/favouriteList.html',
        controller: 'FavouriteListCtrl'
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
        });

    $urlRouterProvider.otherwise('/');

// translate provider
    $translateProvider
        .translations('en_EN', {
            'SEARCH': 'Search',
            'PLACEHOLDER': 'Type the artist ...',
            'HEADLINE': 'Here you have a list of the most popular artists according to your location ',
            'TOPSONGS_HEADER': 'Top songs by ',
            'SIMILAR_HEADER': 'Similar artists to ',
            'bio_btn': 'Biography',
            'top_btn': 'Top songs',
            'similar_btn': 'Similar artists',
            'youtube_btn': 'Video on Youtube',
            'FAVOURITE': 'Favourite song\'s list',
            'ERROR': 'We don\'t have this data. Please, try again with another artist',
            'PLAYLIST': 'Play list',
            'header_favourite' :'You can create your own list of the best songs! Go to the topSongs of every artist and add songs by one click'
        })
        .translations('ua_UA', {
            'SEARCH': 'Пошук',
            'PLACEHOLDER': 'Введіть артиста ...',
            'HEADLINE': 'Ось список найпопулярніших артистів згідно Вашої локації',
            'TOPSONGS_HEADER': 'Топ пісень ',
            'SIMILAR_HEADER': 'Артисти, що схожі на ',
            'bio_btn': 'Біографія',
            'top_btn': 'Топ пісень',
            'similar_btn': 'Схожі артисти',
            'youtube_btn': 'Відео на Youtube',
            'FAVOURITE': 'Список улюблених пісень',
            'ERROR': 'На жаль, інформація відсутня. Спробуйте ще раз з іншими даними!',
            'PLAYLIST': 'Улюблені відео',
            'header_favourite' :' Ви можете створити власний список із найкращих пісень! Перейдіть на Топ пісень будь-якого артиста та додайте пісню одним кліком'
        });

    $translateProvider.preferredLanguage('ua_UA');
    $translateProvider.useCookieStorage();
}]);



SW.swApp.filter("sanitize", ['$sce', function ($sce) {
    return function(htmlCode){
        return $sce.trustAsHtml(htmlCode);
    };
}]);







