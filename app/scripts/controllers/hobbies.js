'use strict';

/**
 * @ngdoc function
 * @name vitrineApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the vitrineApp
 */
angular.module('vitrineApp')
  .controller('HobbiesCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
        $scope.theName='his name !';
        $scope.getName = function(n) {
            $scope.theName = n;
        };
  });
