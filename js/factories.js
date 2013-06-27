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

    factory.getAlbumList = function(artist, album){
        return freebaseService.lookup(
                [{'*': null, 'name': album, 'artist': artist, 'type': '/music/album'}]).
            then(function(promise) {
                return promise;
            });
    }

    return factory;
})