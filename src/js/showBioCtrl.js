SW.swApp.controller('ShowBioCtrl', ['$scope', '$stateParams', '$http', '$filter', '$location', function ($scope, $stateParams, $http, $filter, $location) {
    'use strict';
    $scope.model = {
        item: $stateParams.item
    };

    var preloader = SW.utils.getPreloader();
    $('#searchForm input').val('');
    $('#autosuggestion').hide();
    $('body').append(preloader.htmlText);


    $scope.item =  $stateParams.item;


    var url = encodeURI(SW.config.BASE_URL + '?method=artist.getinfo&artist=' + $scope.item + SW.config.API_KEY);

    $http.get(url)
        .success(function (data) {
            preloader.stop();
            $scope.artistBio = {};
            if ((data.error === 6) || (data.artist.image[2]['#text'] === '')) {
                $scope.artistBio.src = 'images/nodata.png';
                $scope.$watch(
                    function() {
                        return $filter('translate')('ERROR');
                    },
                    function(msg) {

                        $scope.artistBio.text = msg;
                    }
                );
                $('#artistMenu').hide();

            } else {
                $('#artistMenu').show();
                $scope.hide = true;

                $scope.artistBio = {
                    name: data.artist.name,
                    src: data.artist.image[3]['#text'],
                    text: data.artist.bio.content
                };
                $('#follow').html('<iframe src="' + SW.config.TWITTER_BTN_start + SW.utils.transliterate($scope.item.toLowerCase()) + SW.config.TWITTER_BTN_end + '></iframe>');
            }
        });

    $scope.videoChannel = function (){
        var artist = $scope.item.replace(/\s+/g, '');
        var url = encodeURI(SW.config.SEARCH_CHANNEL + artist + SW.config.YOUTUBE_KEY);
        $http.get(url)
            .success(function (data) {
                $scope.channels = data.items;
                $scope.open_url = encodeURI(SW.config.QUERY_URL + artist + SW.config.YOUTUBE_KEY);
                for (var i = 0; i < $scope.channels.length; i++) {
                    var re = new RegExp(artist + '*', 'i');

                    if (re.test($scope.channels[i].snippet.channelTitle)) {
                        $scope.open_url = encodeURI(SW.config.CHANNEL_URL +  $scope.channels[i].snippet.channelId);
                        break;
                    }
                }
                window.open($scope.open_url);
            });

    };
   
}]);


