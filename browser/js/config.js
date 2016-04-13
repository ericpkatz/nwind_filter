angular.module('app')
  .config(function($stateProvider){
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/browser/templates/home.html'
      })
      .state('products', {
        url: '/products',
        templateUrl: '/browser/templates/products.html',
        resolve: {
          letterMap: function(ProductFactory){
            return ProductFactory.getMap();
          }
        },
        controller: function($scope, $state, letterMap){
          $scope.map = letterMap;
          $scope.onLetter = function(letter){
            $state.go('products.letter', { letter: letter });
          };
        }
      })
      .state('products.letter', {
        url: '/:letter',
        templateUrl: '/browser/templates/_products.html',
        controller: function($scope, $stateParams, ProductFactory){
          ProductFactory.fetchByLetter($stateParams.letter)
            .then(function(products){
              $scope.items = products;
          });
        }
      })
      .state('employees', {
        url: '/employees',
        templateUrl: '/browser/templates/employees.html',
        resolve: {
          letterMap: function(EmployeeFactory){
            return EmployeeFactory.getMap();
          }
        },
        controller: function($scope, $state, letterMap){
          $scope.map = letterMap;
          $scope.onLetter = function(letter){
            $state.go('employees.letter', { letter: letter });
          };
        }
      })
      .state('employees.letter', {
        url: '/:letter',
        templateUrl: '/browser/templates/_employees.html',
        controller: function($scope, $stateParams, EmployeeFactory){
          EmployeeFactory.fetchByLetter($stateParams.letter)
            .then(function(employees){
              $scope.items = employees;
          });
        }
      });
  });
