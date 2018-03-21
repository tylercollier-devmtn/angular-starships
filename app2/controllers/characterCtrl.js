angular.module('pokemon').controller('characterCtrl', function($scope, charactersSrvc, $stateParams) {
  charactersSrvc.getCharacter($stateParams.id).then(character => {
    $scope.character = character;
  });
});
