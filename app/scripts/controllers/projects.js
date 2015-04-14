'use strict';

/**
 * @ngdoc function
 * @name vitrineApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the vitrineApp
 */
angular.module('vitrineApp')
  .controller('ProjectsCtrl', function ($scope, $http) {
    $scope.myProjects = $http.get('assets/projects.json')
      .success(function (data) {
        $scope.myProjects = data;
      })
      .error(function (error) {
        console.log(error); //pour le debug
      });
  });
