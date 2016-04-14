angular.module('app')
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
  });
