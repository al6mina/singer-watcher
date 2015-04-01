SW.swApp.controller('SimilarCtrl', ['$scope', '$http','$stateParams', '$filter' , function ($scope, $http, $stateParams, $filter) {
    'use strict';
    $scope.model = {
        item: $stateParams.item
    };
    $scope.item = $stateParams.item;
    var preloader = SW.utils.getPreloader();
    var url = encodeURI(SW.config.BASE_URL + '?method=artist.getsimilar&artist=' + $scope.item + SW.config.API_KEY);

    $('#artistMenu').append(preloader.htmlText);
    $http.get(url)
        .success(function (data) {
            preloader.stop();
            if (data.error || !data.similarartists.artist[0].name)  {
                $scope.$watch(
                    function() {
                        return $filter('translate')('ERROR');
                    },
                    function(header) {
                        $scope.header = header;
                    }
                );
            } else {
                $scope.artists = data.similarartists.artist;
                $scope.$watch(
                    function() {
                        return $filter('translate')('SIMILAR_HEADER');
                    },
                    function(header) {
                        $scope.header = header + $scope.item;
                    }
                );
            }
        });


}]);

