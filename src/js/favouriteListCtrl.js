/* Controller for Favourite list
 add, remove, buy song
 watch song's video
 play list of favourite songs
 */

SW.swApp.controller('FavouriteListCtrl', ['$scope', '$stateParams', '$http', '$filter', function ($scope, $stateParams, $http, $filter) {
    $scope.songs = JSON.parse(localStorage.getItem('favourites'));
    if (!$scope.songs || $scope.songs.length === 0) {
        $scope.hideMe = true;
        $scope.$watch(
            function() {
                return $filter('translate')('header_favourite');
            },
            function(header) {
                $scope.header = header;
            }
        );
    } else {
        $scope.$watch(
            function() {
                return $filter('translate')('FAVOURITE');
            },
            function(header) {
                $scope.header = header;

            }
        );
    }

    if (SW.utils.checkLocalStorage) {
        $scope.add = function (song) {
            var item = $scope.item + ' - ' + song;
            var temp = [];
            $scope.hideMe = false;
            if (localStorage.getItem('favourites')) {
                temp = JSON.parse(localStorage.getItem('favourites'));
                $.each(temp, function (index) {
                    if (temp[index] === item) {
                        setTimeout(function () {
                            $('#favouriteList li:eq(' + index + ')').addClass('highlighted');
                        }, 50);
                        setTimeout(function () {
                            $('#favouriteList li:eq(' + index + ')').removeClass('highlighted');
                        }, 2000);
                        item = '';
                        return false;
                    }
                });
            }
            if (item) {
                temp.push(item);
                localStorage.setItem('favourites', JSON.stringify(temp));
                $scope.playlistVideo();

            }
        };

        $scope.remove = function (song) {
            var temp = JSON.parse(localStorage.getItem('favourites'));
            $('.wrapper').html('');
            $.each(temp, function(index) {
                if(temp[index] === song) {
                    temp.splice(index, 1);
                    localStorage.setItem('favourites', JSON.stringify(temp));
                    $scope.songs = JSON.parse(localStorage.getItem('favourites'));
                }

            });
            songsTemp = [];

        };

    }else {
        alert ('Update your browser to create a favourite list!');
        return false;
    }

    // buy song
    
    $scope.buySong = function(song, $event){
        var songTitle = encodeURI(SW.config.BUYSONG + song);

        window.open (songTitle);
        $event.stopPropagation();
        return false;
    };

    //  functions to watch song's video or user's playlist

    var ERROR_video;
    var playlist;
    var songsTemp = [];

    $scope.$watch(
        function() {
            return $filter('translate')('ERROR_video');
        },
        function(msg) {
            ERROR_video = msg;
        }
    );

    $scope.video = function (song) {
        var preloader = SW.utils.getPreloader();
        $('.wrapper').html('');
        $('.wrapper').append(preloader.htmlText);
        SW.utils.getVideoId(song, ERROR_video, function(outputVideoID){
            preloader.stop();
            $('.wrapper').html('<iframe  class="embed-responsive-item" src="' + SW.config.SONG_VIDEO + outputVideoID + '"></iframe>');
        }, $http);
    };

    // Form the playlist of all favourite songs
    $scope.playlistVideo = function() {
        $('.wrapper').html('');
        var songsVideoId = [];
        songsTemp = JSON.parse(localStorage.getItem('favourites'));
        if(songsTemp.length === 0){
            $scope.$watch(
                function() {
                    return $filter('translate')('header_favourite');
                },
                function(header) {
                    $scope.header = header;
                }
            );
            return false;
        }
        $.each(songsTemp, function(index) {
            SW.utils.getVideoId(songsTemp[index], ERROR_video, function(outputVideoID) {
                songsVideoId.push(outputVideoID);
                playlist = songsVideoId.join(',');
                $('.wrapper').html('<iframe class="embed-responsive-item" src="' + SW.config.SONG_VIDEO + '?playlist=' + playlist + '"></iframe>');
            }, $http);
        });
        return false;
    };
}]);