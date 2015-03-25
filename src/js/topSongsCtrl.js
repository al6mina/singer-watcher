SW.swApp.controller ('TopSongsCtrl', ['$scope', '$stateParams', '$http' , function ($scope, $stateParams, $http) {
    $scope.model = {
        item: $stateParams.item

    };
    var preloader = SW.utils.getPreloader();
    $('#artistMenu').append(preloader.htmlText);
    $scope.item = $stateParams.item;
    $scope.hide = false;
     var url = SW.config.BASE_URL +'?method=artist.gettoptracks&artist=' + $scope.item + SW.config.LIMIT + SW.config.API_KEY;

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
        var songTitle = SW.config.BUYSONG + $scope.item + ' ' + this.song;

        window.open (songTitle);
        $event.stopPropagation();
        return false;

    };

    $scope.video = function (song, $event) {
        this.song = song;
        var parentActive = $event.currentTarget.parentNode.parentNode;
        var search_url = SW.config.SEARCH_VIDEO + $scope.item + this.song + SW.config.STARTMAX + SW.config.YOUTUBE_KEY;

        if (parentActive.children.length === 2) {
            $(parentActive).append( '<div class="embed-responsive embed-responsive-16by9 wrapper"></div>');
            $('.wrapper').append(preloader.htmlText);
        }else {
            $(parentActive).find('.wrapper').remove();
        }

        // MAIN FUNCTION WHICH GET VIDEO ID AND PUT FRAME ON THE PAGE
        $http.get(search_url)
            .success(function(data) {
                preloader.stop();
                if (data.feed.entry === undefined) {
                      $(parentActive).find('.wrapper').html('<h3>Unfortunatelly, we  haven\'t  this data. Try another artist, please!</h3>');
                    return false;
                } else {
                    var srcVideoFull = data.feed.entry[0].id.$t;
                    var srcVideoEnd = srcVideoFull.lastIndexOf('video:');
                    var outputVideoID = srcVideoFull.substr(srcVideoEnd + 6);

                    $(parentActive).find('.wrapper')
                        .html('<iframe  class="embed-responsive-item" src="' + SW.config.SONG_VIDEO + outputVideoID + '"></iframe>');
                }
            });
    };
}]);
