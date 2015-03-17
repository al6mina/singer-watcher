SW.swApp.controller('SimilarCtrl', ['$scope', '$http','$stateParams' , function ($scope, $http, $stateParams) {
    'use strict';
    $scope.model = {
        item: $stateParams.item
    };
    var preloader = SW.utils.getPreloader();
    $('#artistMenu').append(preloader.htmlText);
    $scope.item = $stateParams.item;
    $scope.header = 'Here you have the list of similar artists to ' + $scope.item;
    var url = SW.config.BASE_URL + '?method=artist.getsimilar&artist=' + $scope.item + SW.config.API_KEY;
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

