
swApp.controller('showBioCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {
 	$scope.model = {
    item: $routeParams.item   
 	}; 
 	$scope.item = $routeParams.item;
}]);