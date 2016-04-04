angular.module('app', ['ui.router'])
  .config(function($stateProvider){
    $stateProvider
      .state('home', {
        url: '/',
        template: 'home'
      })
      .state('products', {
        url: '/products/:letter?',
        templateUrl: '/browser/templates/products.html',
        controller: function($scope, $state, $stateParams, ProductFactory){
          $scope.selected = $stateParams.letter;
          ProductFactory.fetchByLetter($stateParams.letter)
            .then(function(products){
              $scope.items = products;
            });
          ProductFactory.getMap()
            .then(function(map){
              $scope.map = map;
            });
          $scope.onLetter = function(letter){
            $state.go('products', { letter: letter });
          };
        }
      })
      .state('employees', {
        url: '/employees/:letter?',
        templateUrl: '/browser/templates/employees.html',
        controller: function($scope, $state, $stateParams, EmployeeFactory){
          $scope.selected = $stateParams.letter;
          EmployeeFactory.fetchByLetter($stateParams.letter)
            .then(function(employees){
              $scope.items = employees;
            });
          EmployeeFactory.getMap()
            .then(function(map){
              $scope.map = map;
            });
          $scope.onLetter = function(letter){
            $state.go('employees', { letter: letter });
          };
        }
      });
  })
  .factory('ProductFactory', function($q, FirstLetterMapper){
    var _items = [
      { name: 'Foo' },
      { name: 'Bar' },
      { name: 'Bazz' },
    ];
    return {
      fetchByLetter: function(letter){
        var dfd = $q.defer();
        dfd.resolve(_items.filter(function(item){
          return !letter || item.name[0] === letter;
        }));
        return dfd.promise;
      },
      getMap: function(){
        var dfd = $q.defer();
        dfd.resolve(FirstLetterMapper(_items));
        return dfd.promise;
      }
    };
  })
  .factory('EmployeeFactory', function($q, FirstLetterMapper){
    var _employees = [
      { name: 'Moe' },
      { name: 'Larry' },
      { name: 'Curly' },
    ];
    return {
      fetchByLetter: function(letter){
        var dfd = $q.defer();
        dfd.resolve(_employees.filter(function(employee){
          return !letter || employee.name[0] === letter;
        }));
        return dfd.promise;
      },
      getMap: function(){
        var dfd = $q.defer();
        dfd.resolve(FirstLetterMapper(_employees));
        return dfd.promise;
      }
    };
  })
  .factory('FirstLetterMapper', function(){
    return function(items){
        return items.reduce(function(memo, item){
          memo[item.name[0]] = true;
          return memo;
        }, {});
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
