SW.swApp.controller('ThemesCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.themes = SW.config.themes;
    if (SW.utils.checkLocalStorage) {
        $scope.active = {
            theme: localStorage.getItem('class')
        };
        $scope.$watch('active.theme', function (newValue) {
            localStorage.setItem('class', newValue);
        });
    } else alert ('You can choose only default theme');
}]);
