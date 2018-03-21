angular.module('pokemon').controller('charactersCtrl', function($scope, charactersSrvc) {
  $scope.characters = charactersSrvc.getCharacters().slice(0, 10);
});
