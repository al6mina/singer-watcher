SW.swApp.controller('ArtistsListCtrl', ['$scope', '$http', function ($scope, $http) {
    'use strict';
    var preloader = SW.utils.getPreloader();

    $('body').append(preloader.htmlText);
    function showListDependOnLocation(){
        var userLocation;

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition( function(position){
                var url = SW.config.LOCATION_URL[0]+  position.coords.latitude+','+ position.coords.longitude+SW.config.LOCATION_URL[1];

                $http.get(url).
                    success ( function(data){
                    userLocation = data.results[0].formatted_address;
                    var finish = userLocation.lastIndexOf(',');
                    userLocation = userLocation.substr(finish + 2);
                    $scope.header = 'Here you have a list of the most popular singers of ' + userLocation;
                    $scope.getListOfArtists (userLocation);
                });
                return;
            }, function(){
                $scope.header = 'Here you have a list of the most popular singers of default country ';
                userLocation = 'Spain';
                $scope.getListOfArtists (userLocation);
            });
        } else {
            $scope.header = 'Here you have a list of the most popular singers of default country ';
            userLocation = 'Spain';
            $scope.getListOfArtists (userLocation);
        }
        return;

    }

    $scope.getListOfArtists = function (country){
        var getListUrl = SW.config.BASE_URL + '?method=geo.gettopartists&country=' + country + SW.config.API_KEY;

        $http.get(getListUrl)
            .success(function (data) {
                preloader.stop();
                $scope.artists = data.topartists.artist;
            });
    };
    showListDependOnLocation();
}]);
