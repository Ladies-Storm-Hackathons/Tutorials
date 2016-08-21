angularApp.controller('CharacterCtrl', [
  '$routeParams',
  '$scope',
  'SwapiService',
  function($routeParams, $scope, SwapiService){
 
    $scope.character = {};
    $scope.loading = true;
    $scope.id = $routeParams.id;
 
    SwapiService.people()
      .then(function(data) {
        angular.forEach(data.data.results, function(person) {
          if (person.name.toLowerCase() === $routeParams.id.toLowerCase()) {
            angular.copy(person, $scope.character);
            console.log(person);
          }
        });
        $scope.loading = false;
    });
  }
]);