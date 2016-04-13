angular.module('app', ['ui.router'])
  .factory('ProductFactory', function($http){
    return {
      fetchByLetter: function(letter){
        var url = '/api/products/' + (letter ? letter : '');
        return $http.get(url).
          then(function(result){
            return result.data;
          });
      },
      getMap: function(){
        return $http.get('/api/products/map')
          .then(function(result){
            return result.data;
          });
      }
    };
  })
  .factory('EmployeeFactory', function($http){
    return {
      fetchByLetter: function(letter){
        var url = '/api/employees/' + (letter ? letter : '');
        return $http.get(url).
          then(function(result){
            return result.data;
          });
      },
      getMap: function(){
        return $http.get('/api/employees/map')
          .then(function(result){
            return result.data;
          });
      }
    };
  })
  .directive('nwindFilter', function(){
    return {
      scope: {
        onLetter: '&',
        selected: '=',
        map: '='
      },
      templateUrl: '/browser/templates/filter.html',
      link: function($scope){
        $scope.letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        $scope.letterClick = function(letter){
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
