SW.swApp.controller ('TopSongsCtrl', ['$scope', '$stateParams', '$http', '$filter' , function ($scope, $stateParams, $http, $filter) {
    $scope.model = {
        item: $stateParams.item

    };

    var preloader = SW.utils.getPreloader();
    var ERROR_video;
    $scope.item = $stateParams.item;
    $scope.hide = false;
    var url = encodeURI(SW.config.BASE_URL +'?method=artist.gettoptracks&artist=' + $scope.item + SW.config.LIMIT + SW.config.API_KEY);

    $scope.$watch(
        function() {
            return $filter('translate')('ERROR_video');
        },
        function(msg) {
            ERROR_video = msg;
        }
    );

    // get top tracks of this artist ($scope.item )
    $('#artistMenu').append(preloader.htmlText);
    $http.get(url)
        .success(function (data) {
            preloader.stop();
            $scope.songs = {};
            if ((data.toptracks.total === '0')||(data === 'undefined')) {
                $scope.header = 'There are not that data in our base';
            }else if (data.error) {
                $scope.header = data.error.message;
            } else {
                $scope.songs = data.toptracks.track;
            }
        });

    // function to buy song
    $scope.buySong = function (song, $event) {
        this.song = song;
        var songTitle = encodeURI(SW.config.BUYSONG + $scope.item + ' ' + this.song);

        window.open (songTitle);
        $event.stopPropagation();
        return false;

    };

    // function to watch video
    $scope.video = function (song, $event) {
        this.song = song;
        var parentActive = $event.currentTarget.parentNode.parentNode;
        var item = $scope.item + this.song;

        if (parentActive.children.length === 2) {
            $(parentActive).append( '<div class="embed-responsive embed-responsive-16by9 wrapper"></div>');
            $('.wrapper').append(preloader.htmlText);
        }else {
            $(parentActive).find('.wrapper').remove();
        }

        SW.utils.getVideoId(item, ERROR_video, function (id){
            preloader.stop();
            $(parentActive).find('.wrapper')
                .html('<iframe  class="embed-responsive-item" src="' + SW.config.SONG_VIDEO + id + '"></iframe>');
        }, $http);

    };
}]);
