/**
 * Created by Albina_Kremlovska on 3/23/2015.
 */
SW.swApp.controller('LanguageCtrl', ['$translate', '$scope', function ($translate, $scope) {
    $scope.toggleLang = function (langKey) {
        $translate.use(langKey);
    };

}]);
