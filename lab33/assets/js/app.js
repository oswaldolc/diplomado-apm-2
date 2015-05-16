angular.module('lab33', ['ngRoute', 'lab33.controllers', 'lab33.services'])
.config(function($routeProvider){

    'use strict';
    $routeProvider
        .when('/', {
            templateUrl: 'js/templates/home.html'
        })
        .when('/data', {
            controller: 'lab33Controller',
            templateUrl: 'js/templates/data.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});