SW.swApp.controller ('topSongsCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {
    $scope.model = {
        item: $stateParams.item
    };
    $scope.songs = [
        {title:"1bdbvdbvbvhvbd"},
        {title:"1bdbvdbvbvhvbd"},
        {title:"1bdbvdbvbvhvbd"},
        {title:"1bdbvdbvbvhvbd"},
        {title:"1bdbvdbvbvhvbd"},
        {title:"1bdbvdbvbvhvbd"},
        {title:"1bdbvdbvbvhvbd"},
        {title:"1bdbvdbvbvhvbd"},
        {title:"1bdbvdbvbvhvbd"}
    ];
}]);
