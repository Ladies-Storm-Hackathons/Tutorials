var services = angular.module('swapi', []);
 
services.factory('SwapiService', ['$http', 
  function($http){
    function Swapi(){};
 
    Swapi.domain = 'http://swapi.co/api';
 
    Swapi.people = function(){
      var path = '/people';
      var url = Swapi.domain + path;
 
      return $http.get(url)
        .then(function(response){
          return response;
        });
    };

    Swapi.films = function() {
      var path = '/films';
      var url = Swapi.domain + path;
     
      return $http.get(url)
        .then(function(response){
          return response;
        });
    };
        
    return Swapi;
  }
]);