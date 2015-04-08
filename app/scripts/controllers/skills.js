'use strict';

/**
 * @ngdoc function
 * @name vitrineApp.controller:SkillsCtrl
 * @description
 * # SkillsCtrl
 * Controller of the vitrineApp
 */
angular.module('vitrineApp')
  .controller('SkillsCtrl', function ($scope, $http) {
  $scope.myData = $http.get('assets/mydata.json')
    .success(function(data) {
      $scope.myData = data;
    })
    .error(function(error) {
      console.log(error); //pour le debug
    });
  });
