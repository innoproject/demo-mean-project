'use strict';
(function() {
    angular.module('DemoMean', ['ui.router']).config(function($stateProvider) {
        $stateProvider.state('/signup', {
            url: '/signup',
            templateUrl: 'app/login/signup.html',
            controller: 'SignUpController'
        })
    });
}());
