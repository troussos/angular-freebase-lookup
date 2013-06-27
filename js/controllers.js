/**
 * Created with JetBrains WebStorm.
 * User: troussos
 * Date: 6/26/13
 * Time: 8:54 PM
 * To change this template use File | Settings | File Templates.
 */
app.controller('artistController', function($scope, $route, lookupFactory){
    $scope.artistName = $route.current.params.artistName;
    lookupFactory.getArtistInfo($route.current.params.artistName).then(function(promise){
        if(promise.data.result[0]){
            $scope.artist = promise.data.result[0];
            console.log(promise.data.result[0]);
        }
        else{
            $scope.lookupError = true;
            $scope.errorMessage = "Could Not Find Artist";
        }

    });
});

app.controller('albumController', function($scope, lookupFactory){

});