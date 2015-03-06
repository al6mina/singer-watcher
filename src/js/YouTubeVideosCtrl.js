/**
 * Created by Albina_Kremlovska on 3/5/2015.
 * controller for searching YouTube channel or special query of choosen artist
 */

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
                var channelId = $scope.channels[i].snippet.channelId,
                    title = $scope.channels[i].snippet.channelTitle,
                    re = new RegExp(artist + '*', 'i');
                if (re.test(title)) {
                    $scope.open_url = SW.config.CHANNEL_URL + channelId;
                    break;
                }
            }
            window.open($scope.open_url);
        });
}]);