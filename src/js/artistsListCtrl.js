SW.swApp.controller('ArtistsListCtrl', ['$scope', '$http', function ($scope, $http) {
    'use strict';
    $scope.header = 'Here you have a list of the most popular singers of your country!';
    var url = SW.config.BASE_URL + '?method=geo.gettopartists&country=Ukraine' + SW.config.API_KEY;
    $http.get(url)
        .success(function (data) {
            $scope.artists = data.topartists.artist;
        });
}]);
