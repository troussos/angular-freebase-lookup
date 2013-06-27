/**
 * Created with JetBrains WebStorm.
 * User: troussos
 * Date: 6/26/13
 * Time: 8:55 PM
 * To change this template use File | Settings | File Templates.
 */
app.config(function($routeProvider){
    $routeProvider
        .when(
            '/', {
                templateUrl: 'partials/search.html'
            })
        .when(
            '/artist/:artistName',{
                controller: 'artistController',
                templateUrl: 'partials/artist.html'
            })
        .when(
            '/:artistName/album',{
                controller: 'albumController',
                templateUrl: 'partials/album.html'
            })
        .otherwise({
            redirectTo: '/'
        });
});