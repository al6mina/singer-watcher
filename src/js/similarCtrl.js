SW.swApp.controller('SimilarCtrl', ['$scope', '$http','$stateParams' , function ($scope, $http, $stateParams) {
    'use strict';
    $scope.model = {
        item: $stateParams.item
    };


    $scope.item = $stateParams.item;
    $scope.header = 'Here you have the list of similar artists to ' + $scope.item;
    var preloader = SW.utils.getPreloader();
    var url = SW.config.BASE_URL + '?method=artist.getsimilar&artist=' + $scope.item + SW.config.API_KEY;

    $('#artistMenu').append(preloader.htmlText);
    $http.get(url)
        .success(function (data) {
            preloader.stop();
            if (data.error)  {
              // do smth
            } else {
                $scope.artists = data.similarartists.artist;
            }
        });
}]);

