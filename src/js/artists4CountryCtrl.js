SW.swApp.controller('artists4CountryCtrl', ['$scope', '$http', function ($scope, $http) {
    'use strict';
    var url = SW.config.BASE_URL+'?method=geo.gettopartists&country=Ukraine'+SW.config.API_KEY;
    $http.get(url)
        .success(function (data) {
            $scope.artists = data.topartists.artist;
        });
}]);
