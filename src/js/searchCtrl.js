/**
 * Created by Albina_Kremlovska on 3/13/2015.
 * Controller which can autocomplete searching form
 */

SW.swApp.controller('SearchCtrl', ['$scope', '$http', function ($scope, $http) {
    $('#autosuggestion').hide();
    $scope.search = function (){
        $('#autosuggestion').html('<option disabled></option>');
        $scope.toSearch = $scope.item;
        if ((!$scope.toSearch)||( $scope.toSearch.length < 3)){
            $('#autosuggestion').hide();
        }else {
            var url = SW.config.BASE_URL + '?method=artist.search&artist='+  $scope.toSearch + SW.config.API_KEY;

            $http.get(url)
                .success(function(data){
                    if (data.results['opensearch:totalResults']=== '0'){
                        $('#autosuggestion').hide();
                        return false;
                    } else {
                        showListSuggestions(data.results.artistmatches.artist, 3);
                        return false;
                    }
                });
        }
    };

    function showListSuggestions (arr, limit) {
        $.each(arr, function (index) {
            if (index > limit) return false;
            if (arr[index] === undefined || index >= limit) {
                arr.splice(index, 1);
                return arr;
            } else {
                $.each(arr, function (count) {
                    if (arr[index] && arr[count + 1] && arr[index].name === arr[count + 1].name) {
                        arr.splice(count + 1, 1);
                        return arr;
                    }
                });
            }
            return arr;
        });

        $.each(arr, function(index) {
            if (arr[index] !== undefined) {
                $('<option>' + arr[index].name + '</option>').appendTo('#autosuggestion');
            }
        });
        $('#autosuggestion').show();
        $('#autosuggestion').change (function (){
            $('#autosuggestion option:selected').each(function(){
                $scope.item = $(this).text();
                $('#searchForm input').val($(this).text());
                $('#autosuggestion').hide();
            });
        });
        return arr;
    }
}]);