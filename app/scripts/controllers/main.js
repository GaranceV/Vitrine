'use strict';

/**
 * @ngdoc function
 * @name vitrineApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the vitrineApp
 */
angular.module('vitrineApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
