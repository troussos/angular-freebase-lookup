/**
 * Created with JetBrains WebStorm.
 * User: troussos
 * Date: 6/26/13
 * Time: 8:54 PM
 * To change this template use File | Settings | File Templates.
 */
app.controller('artistController', function($scope, $route, lookupFactory){
    $scope.artistName = $route.current.params.artistName;
    $scope.albums = [];
    $scope.sortOrder = "name";
    lookupFactory.getArtistInfo($route.current.params.artistName).then(function(promise){
        if(promise.data.result[0]){
            $scope.artist = promise.data.result[0];
            angular.forEach(promise.data.result[0].album, function(value, key){
               lookupFactory.getAlbumList($route.current.params.artistName, value)
                   .then(function(promise){
                       $scope.albums.push(promise.data.result[0]);;
                });
            });
        }
        else{
            $scope.lookupError = true;
            $scope.errorMessage = "Could Not Find Artist";
        }

    });

    $scope.flipSort = function(param) {
        if($scope.sortOrder != param && $scope.sortOrder != '-' + param){
            $scope.sortOrder = param;
        }
        else{
            if($scope.sortOrder == param){
                $scope.sortOrder = '-' + param;
            }
            else{
                $scope.sortOrder = param;
            }
        }
    };
});

app.controller('albumController', function($scope, lookupFactory){

});