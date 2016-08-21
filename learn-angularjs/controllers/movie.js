angularApp.controller('MovieCtrl', [
  '$routeParams',
  '$scope',
  'SwapiService',
  function($routeParams, $scope, SwapiService){
 
    $scope.movie = {};
    $scope.loading = true;
    $scope.id = $routeParams.id;
 
    SwapiService.films()
      .then(function(data) {
        angular.forEach(data.data.results, function(film) {
          if (film.episode_id == $routeParams.id) {
            angular.copy(film, $scope.movie);
          }
        });
        $scope.loading = false;
    });
  }
]);