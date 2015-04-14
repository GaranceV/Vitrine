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
        image: 'assets/images/' + i + '.jpg'/*
         <img src="assets/images/1.jpg"height="50%" width="50%" alt="Bredeles">
         <img src="assets/images/chocolat%20banane.jpg" height="50%" width="50%" alt="Chocolat + Banane">
         <img src="assets/images/3.jpg" height="50%" width="50%" alt="Noisettes">
         */
      });
    };
    for (var i=1; i<4; i++) {
      $scope.addSlide();
    }
        $scope.theName='his name !';
        $scope.getName = function(n) {
            $scope.theName = n;
        };


  });
