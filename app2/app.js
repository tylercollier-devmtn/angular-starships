angular.module('pokemon', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: '/',
    template: '<h1>Home</h1>',
  })
  .state('characters', {
    url: '/monsters',
    // template: '<h1>Monsters</h1>',
    templateUrl: './app2/templates/characters.html',
    controller: 'charactersCtrl',
  })
  .state('character', {
    url: '/monsters/:id',
    templateUrl: './app2/templates/character.html',
    controller: 'characterCtrl',
  });
  $urlRouterProvider.otherwise('/');
});
