SW.swApp.controller('ShowBioCtrl', ['$scope', '$stateParams', '$http', function ($scope, $stateParams, $http) {
    'use strict';
    $scope.model = {
        item: $stateParams.item
    };
    var preloader = SW.utils.getPreloader();
    $('#searchForm input').val('');
    $('#autosuggestion').hide();
    $('body').append(preloader.htmlText);

    $scope.hide = true;
    $scope.item = $stateParams.item;
    var url = SW.config.BASE_URL + '?method=artist.getinfo&artist=' + $scope.item + SW.config.API_KEY;

    $http.get(url)
        .success(function (data) {
            preloader.stop();
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
                $('#follow').html('<iframe src="' + SW.config.TWITTER_BTN_start + SW.utils.transliterate($scope.item.toLowerCase()) + SW.config.TWITTER_BTN_end + '></iframe>');
            }
        });
}]);


