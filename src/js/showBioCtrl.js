SW.swApp.controller('ShowBioCtrl', ['$scope', '$stateParams', '$http', function ($scope, $stateParams, $http) {
    'use strict';
    $scope.model = {
        item: $stateParams.item
    };

    $('#searchForm input').val('');
    $('#autosuggestion').hide();
    $('#artistMenu').append('<div id="preloader" class="preloader"><span class="spinner"></span></div>');
    $scope.hide = true;
    $scope.item = $stateParams.item;
    var url = SW.config.BASE_URL + '?method=artist.getinfo&artist=' + $scope.item + SW.config.API_KEY;

    $http.get(url)
        .success(function (data) {
            $('#preloader').remove();
            $scope.artistBio = {};
            if ((data.error === 6) || (data.artist.image[2]['#text'] === '')) {
                $scope.artistBio.src = 'images/nodata.png';
                $scope.artistBio.text = data.message||'We don\'t have this data. Please, try again with another artist';
                $('#artistMenu').hide();
            } else {
                $('#artistMenu').show();
                $scope.artistBio = {
                    name: data.artist.name,
                    src: data.artist.image[3]['#text'],
                    text: data.artist.bio.content
                };
            }
        });
}]);


