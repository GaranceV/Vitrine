'use strict';

/**
 * @ngdoc function
 * @name vitrineApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the vitrineApp
 */
angular.module('vitrineApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
