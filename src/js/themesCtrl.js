SW.swApp.controller('ThemesCtrl', ['$scope', function($scope) {
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
