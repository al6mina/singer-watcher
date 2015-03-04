SW.swApp.controller('showBioCtrl', ['$scope', '$stateParams', '$http', function ($scope, $stateParams, $http) {
    'use strict';
    $scope.model = {
        item: $stateParams.item
    };

    $scope.item = $stateParams.item;
    $scope.show = true;
    var url = SW.config.BASE_URL + '?method=artist.getinfo&artist=' + $scope.item + SW.config.API_KEY;
    $http.get(url)
        .success(function (data) {
            if ((data.error) || (data.artist.image[2]['#text'] === '')) {
                $scope.artistBio.src = 'images/2.png';
                $scope.artistBio.text = 'Unfortunatelly, we  haven\'t  this data. Try another artist, please!';
            } else {
                $scope.artistBio = {
                    name: data.artist.name,
                    src: data.artist.image[3]['#text'],
                    text: data.artist.bio.content +'<br> &copy; LastFM'
                };

            }
        });

}]);


