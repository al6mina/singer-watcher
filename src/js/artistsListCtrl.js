SW.swApp.controller('ArtistsListCtrl', ['$scope', '$http', function ($scope, $http) {
    'use strict';
    var preloader = SW.utils.getPreloader();
    var headerStart = 'Here you have a list of the most popular singers of ';
    $('body').append(preloader.htmlText);

    var getListOfArtists = function (country) {
        var getListUrl = SW.config.BASE_URL + '?method=geo.gettopartists&country=' + country + SW.config.API_KEY;
        $http.get(getListUrl)
            .success(function (data) {
                preloader.stop();
                $scope.artists = data.topartists.artist;
            });
    };
    var userLocation;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = position.coords;
            var url = SW.config.LOCATION_URL[0] +  pos.latitude + ',' + pos.longitude + SW.config.LOCATION_URL[1];
            $http.get(url).
                success (function(data) {
                userLocation = data.results[0].formatted_address;
                userLocation = userLocation.substr( userLocation.lastIndexOf(',') + 2);
                $scope.header =  headerStart + userLocation;
                getListOfArtists (userLocation);
            });

        }, function() {
            $scope.header = headerStart + 'default country';
            userLocation = 'Spain';
            getListOfArtists (userLocation);
        });
    } else {
        $scope.header = headerStart + 'default country';
        userLocation = 'Spain';
        getListOfArtists (userLocation);
    }
}]);
