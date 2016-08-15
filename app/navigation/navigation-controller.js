'use strict';
(function() {
    angular.module('TimeWaste').controller('NavigationController', ['$scope', '$http', '$state', function($scope, $http, $state) {
        $scope.loginUser = function() {
            $http.post('api/user/login', $scope.user).success(function(response) {
                localStorage.setItem('User-Date', JSON.stringify(response));
                console.log(response);
            }).error(function(error) {
                console.error(error);
            });
        }
    }]);
}());
