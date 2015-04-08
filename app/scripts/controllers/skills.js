'use strict';

/**
 * @ngdoc function
 * @name vitrineApp.controller:SkillsCtrl
 * @description
 * # SkillsCtrl
 * Controller of the vitrineApp
 */
angular.module('vitrineApp')
  .controller('SkillsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
