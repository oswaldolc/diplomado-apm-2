/**
 * Created by alejo8591 on 21/04/15.
 */
angular.module('lab33.controllers', ['lab33.services'])
.controller('lab33Controller', function($scope, data){
    'use strict';
    data.query(function(data){
       $scope.data = data;
    });
});