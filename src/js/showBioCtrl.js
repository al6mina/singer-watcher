swApp.controller('showBioCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {
 	$scope.model = {
    	item: $routeParams.item   
 	}; 
 	$scope.item = $routeParams.item;
 	$scope.src = 'images/artist.jpg';
 	$scope.text = "Includes 260 glyphs in font format from the Glyphicon Halflings set.Glyphicons Halflings are normally not available for free, but their creator has made them available for Bootstrap free of cost. As a thank you, we only ask that you include a link back to Glyphicons whenever possible.";
}]);