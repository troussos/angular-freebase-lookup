/**
 * Created with JetBrains WebStorm.
 * User: troussos
 * Date: 6/26/13
 * Time: 8:55 PM
 * To change this template use File | Settings | File Templates.
 */
app.factory('lookupFactory', function(freebaseService){

    var factory = {};

    factory.getArtistInfo = function(artist){
        return freebaseService.lookup(
                [{'*': null, 'name': artist, 'type': '/music/artist'}]).
            then(function(promise) {
                return promise;
            });
    }

    factory.getAlbumInfo = function(album){
        return freebaseService.lookup(
                [{'*': null, 'name': album, 'type': '/music/album'}]).
            then(function(promise) {
                return promise;
            });
    }

    return factory;
})

callback = function(data){
    console.log(data);
}