/**
 * Created with JetBrains WebStorm.
 * User: troussos
 * Date: 6/26/13
 * Time: 9:18 PM
 * To change this template use File | Settings | File Templates.
 */
app.service('freebaseService',function($http){

    //Your API Key from Google goes here
    var apiKey = '';
    var serviceUrl = 'https://www.googleapis.com/freebase/v1/mqlread';

    if(apiKey){
        apiKey = 'key=' + apiKey + '&';
    }

    this.lookup = function(query, successCallback){
        return $http.jsonp(
                serviceUrl + '?' + apiKey + 'callback=JSON_CALLBACK&query=' + JSON.stringify(query)).
            success(function(data, status, headers, config){
                return data;
                }).
            error(function(data, status, headers, config){
                console.error('Error Getting Data from Freebase' + data);
            });
    }

});