/**
 * Created by alejo8591 on 21/04/15.
 */
angular.module('lab33.services', ['ngResource'])
.factory('data', function($resource){

    'use strict';

    return $resource('http://localhost:3636/data');
});