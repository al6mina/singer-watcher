SW.swApp.controller ('topSongsCtrl', ['$scope', '$stateParams', '$http', function ($scope, $stateParams, $http) {
    $scope.model = {
        item: $stateParams.item
    };
    $scope.item = $stateParams.item;
    $scope.header = 'Top songs by ' + $scope.item;
    var url = SW.config.BASE_URL +'?method=artist.gettoptracks&artist=' + $scope.item + SW.config.LIMIT + SW.config.API_KEY;

    $http.get(url)
        .success(function (data) {
            $scope.songs = {};

            if (data.toptracks.total === '0'){
                $scope.header = 'There are not that data in our base';
            } else {
                $scope.songs = data.toptracks.track;
            }

        });

}]);
