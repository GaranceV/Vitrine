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

    $scope.convertLvl = function(lvlInWord) {
      var out=0;
      if (lvlInWord=="perfect") {
        out=100;
      }
      else if (lvlInWord=="excellent") {
        out=90;
      }
      else if (lvlInWord=="good") {
        out=80;
      }
      else if (lvlInWord=="workToDo") {
        out=50;
      }
      else if (lvlInWord=="beginner") {
        out=30;
      }
      else if (lvlInWord=="jacks") {
        out=10;
      }
      return out;
    };

  });
