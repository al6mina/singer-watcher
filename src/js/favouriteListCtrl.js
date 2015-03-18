SW.swApp.controller('FavouriteListCtrl', ['$scope', '$stateParams', '$http', function ($scope, $stateParams, $http) {
    $scope.songs = JSON.parse(localStorage.getItem('favourites'));
    if (!$scope.songs || $scope.songs.length === 0) {
        $scope.header = 'You can create your own list of the best songs! Go to the topSongs of every artist and add songs by click';
    }else {
        $scope.header = 'Your favourite list';
    }

    if (SW.utils.checkLocalStorage) {
        $scope.add = function (song) {
            var item = $scope.item + '-' + song;

            if (localStorage.getItem('favourites')) {
                var temp = JSON.parse(localStorage.getItem('favourites'));
                $.each(temp, function(index) {
                    if (temp[index] === item ) {
                        setTimeout(function() {
                            $('#favouriteList li:eq(' + index + ')').addClass('highlighted');
                        }, 200);
                        item = '';
                        return false;
                    } else {
                        return item;
                    }
                });
                if (item) {
                    temp.push(item);
                    localStorage.setItem('favourites', JSON.stringify(temp));
                }
            } else {
                item = item.split();
                localStorage.setItem('favourites', JSON.stringify(item));
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

    $scope.video = function (song){
        var preloader = SW.utils.getPreloader();
        var search_url = SW.config.SEARCH_VIDEO + song + SW.config.STARTMAX + SW.config.YOUTUBE_KEY;

        $('.wrapper').html('');
        $('.wrapper').append(preloader.htmlText);
        $http.get(search_url)
            .success(function(data) {
                preloader.stop();
                if (data.feed.entry === undefined) {
                    $('.wrapper').html('<h3>Unfortunatelly, we do not have this data. Try another artist, please!</h3>');
                    return false;
                } else {
                    var srcVideoFull = data.feed.entry[0].id.$t;
                    var outputVideoID = srcVideoFull.substr(srcVideoFull.lastIndexOf('video:') + 6);

                    $('.wrapper').html('<iframe  id="player" class="embed-responsive-item" src="' + SW.config.SONG_VIDEO + outputVideoID + '"></iframe>');
                }
            });
    };


}]);