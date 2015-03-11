SW.swApp.controller('YouTubeVideosCtrl', ['$scope', '$http','$stateParams' , function ($scope, $http, $stateParams) {
    'use strict';
    $scope.model = {
        item: $stateParams.item
    };
    $scope.item = $stateParams.item;
    var artist = $scope.item.replace(/\s+/g, '');
    var url = SW.config.SEARCH_CHANNEL + artist + SW.config.YOUTUBE_KEY;
    $http.get(url)
        .success(function (data) {
            $scope.channels = data.items;
            $scope.open_url = SW.config.QUERY_URL + artist + SW.config.YOUTUBE_KEY;
            for (var i = 0; i < $scope.channels.length; i++) {
                 var re = new RegExp(artist + '*', 'i');

                if (re.test($scope.channels[i].snippet.channelTitle)) {
                    $scope.open_url = SW.config.CHANNEL_URL +  $scope.channels[i].snippet.channelId;
                    break;
                }
            }
            window.open($scope.open_url);
        });
}]);