var angularApp = angular.module('AngularApp', ['ngRoute', 'swapi']);

angularApp.config(['$routeProvider',
  function($routeProvider){
    $routeProvider
    .when('/', {
      templateUrl : 'views/main.html',
      controller : 'MainCtrl',
      controllerAs : 'main'
    })
    .when('/character/:id', {
      templateUrl: 'views/character.html',
      controller: 'CharacterCtrl',
      controllerAs: 'character'
    })
    .when('/movie/:id', {
      templateUrl: 'views/movie.html',
      controller: 'MovieCtrl',
      controllerAs: 'movie'
    })
    .otherwise('/');
  }
]);