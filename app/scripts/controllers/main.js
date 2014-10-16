'use strict';

/**
 * @ngdoc function
 * @name blandrasApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the blandrasApp
 */
angular.module('blandrasApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
