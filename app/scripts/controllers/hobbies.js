'use strict';

/**
 * @ngdoc function
 * @name vitrineApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the vitrineApp
 */
angular.module('vitrineApp')
.controller('HobbiesCtrl', function ($scope, $http) {
    $scope.funStuff = $http.get('assets/fun.json')
      .success(function(data) {
        $scope.funStuff = data;
      })
      .error(function(error) {
        console.log(error); //pour le debug
      });

    $scope.myInterval = 5000;
    var slides = $scope.slides = [];
    $scope.addSlide = function() {
      slides.push({
        image: 'assets/images/' + i + '.jpg'
      });
    };
    for (var i=1; i<7; i++) {
      $scope.addSlide();
    }

  });
