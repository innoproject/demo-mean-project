'use strict';
(function() {
    angular.module('DemoMean').controller('SignUpController', ['$scope', '$state', '$http', function($scope, $state, $http) {
          $scope.createUser = function() {
              $http.post('/api/user/signup', $scope.newuser).success(function(response) {

              }).error(function(error) {
                  console.log(error);
              })
          }
    }]);
}());
