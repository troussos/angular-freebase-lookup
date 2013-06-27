/**
 * Created with JetBrains WebStorm.
 * User: troussos
 * Date: 6/26/13
 * Time: 8:54 PM
 * To change this template use File | Settings | File Templates.
 */
app.controller('artistController', function($scope, $route, lookupFactory){
    lookupFactory.getArtistInfo($route.current.params.artistName).then(function(promise){
        if(promise.data.result[0]){
            //Do stuff here to update the view
            console.log(promise.data.result[0]);
        }
        else{
            //Output an error message to the view here
            console.error("No Data");
        }

    });
});

app.controller('albumController', function($scope, lookupFactory){

});