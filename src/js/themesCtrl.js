SW.swApp.controller('themesCtrl', ['$scope', function($scope) {
    $scope.themes = SW.config.themes;
    $scope.changeClass =  function (item){
        if (SW.utils.checkLocalStorage) {
            localStorage.setItem('class', item);
            $('body').attr('class', item);
        }
    };
}]);
