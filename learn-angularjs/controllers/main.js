angularApp.controller('MainCtrl', [ 
  '$scope',
  'SwapiService',
  function($scope, SwapiService){
    $scope.heading = "Hello World";
    $scope.message = "This is me";
 
    $scope.films = {};
 
    SwapiService.people()
      .then(function(data) {
        $scope.data = data.data.results;
     
        angular.forEach($scope.data, function(person) {
          // creating a list of all possible films
          angular.forEach(person.films, function(film) {
            $scope.films[film] = '';
          });
        });
    });
     
    SwapiService.films()
      .then(function(data) {
        $scope.filmInfo = data.data.results;
     
        // adding film names to list of films
        angular.forEach($scope.filmInfo, function(film) {
          var api_call = 'http://swapi.co/api/films/' + film.episode_id + '/';
          $scope.films[api_call] = {
              'title': film.title,
              'episode_id': film.episode_id
            };
        }); 
    });

 
  }
]);