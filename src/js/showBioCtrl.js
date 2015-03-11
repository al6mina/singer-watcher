SW.swApp.controller('ShowBioCtrl', ['$scope', '$stateParams', '$http', function ($scope, $stateParams, $http) {
    'use strict';
    $scope.model = {
        item: $stateParams.item
    };
    $('#searchForm').val('');
    $scope.hide = true;
    $scope.item = $stateParams.item;
    var url = SW.config.BASE_URL + '?method=artist.getinfo&artist=' + $scope.item + SW.config.API_KEY;
    $http.get(url)
        .success(function (data) {
            $scope.artistBio = {};
            if ((data.error === 6) || (data.artist.image[2]['#text'] === '')) {
                $scope.artistBio.src = 'images/logo.png';
                $scope.artistBio.text = data.message;
            } else {
                $scope.artistBio = {
                    name: data.artist.name,
                    src: data.artist.image[3]['#text'],
                    text: data.artist.bio.content
                };

            }
        });

}]);


