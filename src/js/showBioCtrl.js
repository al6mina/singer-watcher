SW.swApp.controller('showBioCtrl', ['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http) {
  $scope.model = {
      item: $routeParams.item   
  };

  $scope.item = $routeParams.item;
  var url = 'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' + $scope.item + '&api_key=a1b827bb5962ea81025679fd8869f5ed&format=json';
  $http.get (url)
    .success (function (data) {
      if ((data.error) || (data.artist.image[2]['#text'] === '')) {
        $scope.artistBio.src = 'images/2.png';
        $scope.artistBio.text = 'Unfortunatelly, we  haven\'t  this data. Try another artist, please!';
      } else {
          $scope.artistBio = {
            name: data.artist.name,
            src: data.artist.image[3]['#text'],
            text: data.artist.bio.content +'<br> &copy; LastFM'
          };
      }          
    })
    .error ( function (data) {
    });
}]);        
    
   
