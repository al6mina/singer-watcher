SW.swApp.controller ('topSongsCtrl', ['$scope', '$stateParams', '$http', function ($scope, $stateParams, $http) {
    $scope.model = {
        item: $stateParams.item
    };
    $scope.item = $stateParams.item;
    var url = SW.config.BASE_URL+'?method=artist.gettoptracks&artist=' + $scope.item + '&limit=10'+SW.config.API_KEY;

    $http.get(url)
        .success(function (data) {
            $scope.songs = data.toptracks.track;
        });

}]);
