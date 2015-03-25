SW.swApp.controller('ArtistsListCtrl', ['$scope', '$http', '$translate', '$filter', function ($scope, $http, $translate, $filter) {
    'use strict';
    var preloader = SW.utils.getPreloader();
    $('body').append(preloader.htmlText);
    var getListOfArtists = function (country) {
        var getListUrl = encodeURI(SW.config.BASE_URL + '?method=geo.gettopartists&country=' + country + SW.config.API_KEY);
        $http.get(getListUrl)
            .success(function (data) {
                preloader.stop();
                $scope.artists = data.topartists.artist;
            });
    };

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = position.coords;
            var url = SW.config.LOCATION_URL[0] +  pos.latitude + ',' + pos.longitude + SW.config.LOCATION_URL[1];
            $http.get(url).
                success (function(data) {
                var userLocation = data.results[0].formatted_address;
                $scope.userLocation = userLocation.substr( userLocation.lastIndexOf(',') + 2);
                getListOfArtists ($scope.userLocation);
            });

        }, function() {
            $scope.userLocation = 'Spain';
            getListOfArtists ($scope.userLocation);

        });
    } else {
        $scope.userLocation = 'Spain';
        getListOfArtists ($scope.userLocation);
    }

    $scope.$watch(
        function() {
            return $filter('translate')('HEADLINE');
        },
        function(header) {
            $scope.header = header;
        }
    );

}]);
