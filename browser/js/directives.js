angular.module('app')
  .directive('nwindFilter', function($stateParams){
    return {
      scope: {
        onLetter: '&',
        map: '='
      },
      templateUrl: '/browser/templates/filter.html',
      link: function($scope){
        $scope.letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        $scope.selected = $stateParams.letter;
        $scope.letterClick = function(letter){
          $scope.selected = letter;
          if(!$scope.map[letter])
            return;
          $scope.onLetter({ letter: letter });
        };
      }
    };
  })
  .directive('itemsList', function(){
    return {
      scope: {
        items: '='
      },
      templateUrl: '/browser/templates/items.html'
    };
  });
