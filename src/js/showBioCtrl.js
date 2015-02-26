
swApp.controller('showBioCtrl', function ($scope, $routeParams) {
 	$scope.model = {
    item: $routeParams.item   
 	}; 
 	$scope.item = $routeParams.item;
});