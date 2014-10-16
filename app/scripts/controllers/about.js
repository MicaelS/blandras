'use strict';

/**
 * @ngdoc function
 * @name blandrasApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the blandrasApp
 */
angular.module('blandrasApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
