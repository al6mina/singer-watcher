SW.swApp.controller('FavouriteListCtrl', ['$scope', '$stateParams', '$http', function ($scope, $stateParams, $http) {

    $scope.songs = JSON.parse(localStorage.getItem('favourites'));
    if (!$scope.songs || $scope.songs.length === 0) {
        $scope.header = 'You can create your own list of the best songs! Go to the topSongs of every artist and add songs by click';
        $scope.hideMe = true;
    } else {
        $scope.header = 'Your favourite list';
    }
    if (SW.utils.checkLocalStorage) {
        $scope.add = function (song) {
            var item = $scope.item + '-' + song;
            var temp = [];
            $scope.hideMe = false;
            if (localStorage.getItem('favourites')) {
                temp = JSON.parse(localStorage.getItem('favourites'));
                $.each(temp, function (index) {
                    if (temp[index] === item) {
                        setTimeout(function () {
                            $('#favouriteList li:eq(' + index + ')').addClass('highlighted');
                        }, 200);
                        item = '';
                        return false;
                    }
                });
            }
            if (item) {
                temp.push(item);
                localStorage.setItem('favourites', JSON.stringify(temp));
            }
        };

        $scope.remove = function (song) {
            var temp = JSON.parse(localStorage.getItem('favourites'));

            $.each(temp, function(index) {
                if(temp[index] === song) {
                    temp.splice(index, 1);
                    localStorage.setItem('favourites', JSON.stringify(temp));
                    $scope.songs = JSON.parse(localStorage.getItem('favourites'));
                }
                return $scope.songs;
            });
        };

    }else {
        alert ('Update your browser to create a favourite list!');
        return false;
    }

    $scope.buySong = function(song){
        var songTitle = SW.config.BUYSONG + song;

        window.open (songTitle);
        return false;
    };

    // function to get videoID
    var getVideoID = function  (song, callback) {
        var search_url = SW.config.SEARCH_VIDEO + song + SW.config.STARTMAX + SW.config.YOUTUBE_KEY;

        $http.get(search_url)
            .success(function(data) {
                var outputVideoID = '';
                if (data.feed.entry === undefined) {
                    $('.wrapper').html('<h3>Unfortunatelly, we do not have this data. Try another artist, please!</h3>');
                    return false;
                }
                var srcVideoFull = data.feed.entry[0].id.$t;
                outputVideoID = srcVideoFull.substr(srcVideoFull.lastIndexOf('video:') + 6);
                callback(outputVideoID);
            });
    };

    $scope.video = function (song) {
        var preloader = SW.utils.getPreloader();
        $('.wrapper').html('');
        $('.wrapper').append(preloader.htmlText);
        getVideoID(song, function(outputVideoID){
            preloader.stop();
            $('.wrapper').html('<iframe  class="embed-responsive-item" src="' + SW.config.SONG_VIDEO + outputVideoID + '"></iframe>');
        });
    };

    var playlist;
    $scope.playlistVideo = function() {
        if (!playlist) {
            var songsTemp = JSON.parse(localStorage.getItem('favourites'));
            var songsVideoId = [];

            $.each(songsTemp, function(index) {
                getVideoID(songsTemp[index], function(outputVideoID) {
                    songsVideoId.push(outputVideoID);
                    if (index === songsTemp.length - 1) {
                        playlist = songsVideoId.join(',');
                        console.log(songsVideoId);
                        console.log(playlist);
                        $('.wrapper').html('<iframe class="embed-responsive-item" src="' + SW.config.SONG_VIDEO + '?playlist=' + playlist + '"></iframe>');
                    }
                });

            });
        } else {
            return false;
        }
    };
}]);